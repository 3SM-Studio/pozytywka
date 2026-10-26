"""Verify pinned skills and Codex discovery without starting an agent/model turn.

Python 3.10+, standard library only. Installation uses the reviewed Codex
skill-installer helper, never an upstream project's executable installer.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
from pathlib import Path
import queue
import re
import shutil
import subprocess
import sys
import threading
import time

ROOT = Path(__file__).resolve().parents[1]
LOCK = ROOT / ".agents" / "skills-lock.json"


def tree_hash(directory: Path) -> str:
    """SHA-256 of sorted POSIX paths, NUL, LF-normalized bytes, NUL.

    Normalize CRLF only so Windows Git checkouts have portable fingerprints.
    Refuse symlinks rather than reading files outside the selected skill.
    """
    digest = hashlib.sha256()
    for file in sorted(directory.rglob("*"), key=lambda p: p.relative_to(directory).as_posix()):
        if file.is_symlink() or getattr(file, "is_junction", lambda: False)():
            raise ValueError(f"Linked skill entry is not supported: {file}")
        if file.is_file():
            digest.update(file.relative_to(directory).as_posix().encode("utf-8") + b"\0")
            digest.update(file.read_bytes().replace(b"\r\n", b"\n") + b"\0")
    return digest.hexdigest()


def discover() -> dict:
    """Use only initialize + skills/list on a short-lived local app server."""
    binary = shutil.which("codex.cmd") or shutil.which("codex")
    if not binary:
        raise RuntimeError("Codex CLI not found; install it before --codex verification.")
    process = subprocess.Popen(
        [binary, "app-server", "--stdio"], cwd=ROOT,
        stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL,
        text=True, encoding="utf-8",
    )
    responses: queue.Queue = queue.Queue()

    def read_responses():
        for line in process.stdout:
            try:
                responses.put(json.loads(line))
            except ValueError:
                continue
        responses.put({"terminated": True})

    threading.Thread(target=read_responses, daemon=True).start()

    def request(identifier, method, params):
        process.stdin.write(json.dumps({"id": identifier, "method": method, "params": params}) + "\n")
        process.stdin.flush()
        deadline = time.monotonic() + 45
        while time.monotonic() < deadline:
            response = responses.get(timeout=max(0.01, deadline - time.monotonic()))
            if response.get("terminated"):
                raise RuntimeError("Codex app server terminated before replying.")
            if response.get("id") == identifier:
                if "error" in response:
                    raise RuntimeError(str(response["error"]))
                return response["result"]
        raise RuntimeError("Codex discovery timed out.")

    try:
        request(1, "initialize", {"clientInfo": {"name": "pozytywka-skill-verifier", "version": "1.0.0"}})
        process.stdin.write(json.dumps({"method": "initialized", "params": {}}) + "\n")
        process.stdin.flush()
        result = request(2, "skills/list", {"cwds": [str(ROOT)], "forceReload": True})
        entries = result.get("data", [])
        if len(entries) != 1 or Path(entries[0]["cwd"]).resolve() != ROOT:
            raise RuntimeError("Codex returned an unexpected working directory.")
        if entries[0]["errors"]:
            raise RuntimeError(f"Codex skill errors: {entries[0]['errors']}")
        return entries[0]
    finally:
        process.terminate()
        try:
            process.wait(timeout=10)
        except subprocess.TimeoutExpired:
            process.kill()
            process.wait(timeout=10)
        process.stdin.close()
        process.stdout.close()


def locate(name: str) -> Path | None:
    codex_home = Path(os.environ.get("CODEX_HOME", str(Path.home() / ".codex")))
    for base in [ROOT / ".agents/skills", Path.home() / ".agents/skills", codex_home / "skills"]:
        candidate = base / name
        if (candidate / "SKILL.md").is_file():
            return candidate
    return None


def verify(entry: dict, directory: Path):
    if directory.is_symlink() or getattr(directory, "is_junction", lambda: False)():
        raise ValueError(f"Linked skill root is not supported: {directory}")
    actual = tree_hash(directory)
    accepted = {entry["upstreamTreeSha256"], *entry.get("observedTreeSha256", [])}
    if actual not in accepted:
        raise ValueError(f"{entry['name']}: integrity mismatch; review, never overwrite automatically")
    text = (directory / "SKILL.md").read_text(encoding="utf-8")
    frontmatter = re.match(r"\A---\r?\n(.*?)\r?\n---(?:\r?\n|$)", text, re.S)
    if not frontmatter or not re.search(r"^description:\s*\S", frontmatter[1], re.M):
        raise ValueError(f"{entry['name']}: missing skill metadata")
    name = re.search(r"^name:\s*['\"]?([\w-]+)", frontmatter[1], re.M)
    if not name or name[1] != entry["name"]:
        raise ValueError(f"{entry['name']}: incorrect metadata name")
    # Validate actual local Markdown dependencies, not examples or remote URLs.
    for file in directory.rglob("*.md"):
        content = re.sub(r"```.*?```", "", file.read_text(encoding="utf-8"), flags=re.S)
        for target in re.findall(r"\[[^\]\n]*\]\(([^\s)]+)\)", content):
            if re.match(r"^(?:[a-zA-Z][\w+.-]*:|#|/)", target):
                continue
            target = target.split("#", 1)[0].split("?", 1)[0]
            if not target or not target.endswith((".md", ".mjs", ".js", ".json", ".toml")):
                continue
            if target.startswith("../") and file.parent == directory:
                # Router catalogs may link optional sibling skills. The lock
                # checks required modules separately; do not install a whole
                # collection just to populate every optional routing link.
                parts = Path(target).parts
                if len(parts) < 3 or not re.fullmatch(r"[a-z0-9-]+", parts[1]) or ".." in parts[2:]:
                    raise ValueError(f"{entry['name']}: unsafe sibling dependency: {target}")
                sibling = locate(parts[1])
                if sibling is not None and not sibling.joinpath(*parts[2:]).is_file():
                    raise ValueError(f"{entry['name']}: broken installed sibling dependency: {target}")
                continue
            linked = (file.parent / target).resolve()
            if not linked.is_relative_to(directory.resolve()) or not linked.is_file():
                raise ValueError(f"{entry['name']}: broken local dependency in {file.name}: {target}")
    return "observed snapshot" if actual != entry["upstreamTreeSha256"] else "pinned upstream"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("command", choices=["verify", "install-missing"])
    parser.add_argument("--codex", action="store_true", help="Also require actual skills/list discovery")
    parser.add_argument("--installer", type=Path, help="Path to the reviewed Codex skill-installer helper")
    args = parser.parse_args()
    manifest = json.loads(LOCK.read_text(encoding="utf-8"))
    discovered = discover() if args.codex or args.command == "install-missing" else None
    catalog = {s["name"]: s for s in discovered["skills"] if s["enabled"]} if discovered else {}
    failures = []
    for entry in manifest["skills"]:
        try:
            name = entry["name"]
            if not re.fullmatch(r"[a-z0-9-]+", name) or not re.fullmatch(r"[0-9a-f]{40}", entry["revision"]):
                raise ValueError("Invalid name or unpinned revision in lock")
            directory = Path(catalog[name]["path"]).parent if name in catalog else locate(name)
            if directory is None and args.command == "install-missing":
                installer = args.installer or Path.home() / ".codex/skills/.system/skill-installer/scripts/install-skill-from-github.py"
                if not installer.is_file():
                    raise ValueError("Codex skill-installer missing; supply --installer PATH")
                subprocess.run([
                    sys.executable, str(installer), "--repo", entry["repository"],
                    "--ref", entry["revision"], "--path", entry["sourcePath"],
                    "--name", name, "--dest", str(ROOT / ".agents/skills"), "--method", "download",
                ], check=True, cwd=ROOT)
                directory = ROOT / ".agents/skills" / name
            if directory is None:
                raise ValueError(f"{name}: missing; run install-missing")
            variant = verify(entry, directory)
            if discovered is not None and args.command == "verify":
                if name not in catalog or Path(catalog[name]["path"]).resolve() != (directory / "SKILL.md").resolve():
                    raise ValueError(f"{name}: not enabled at the verified path in Codex skills/list")
            print(f"PASS {name}: {variant}; {directory}")
        except (ValueError, OSError, subprocess.SubprocessError) as error:
            failures.append(str(error))
            print(f"FAIL {error}", file=sys.stderr)
    if failures:
        return 1
    print(f"Verified {len(manifest['skills'])} pinned skills. No skill scripts, hooks, model turns or application code executed.")
    if args.command == "install-missing":
        print("Now run: python scripts/agent-skills.py verify --codex (new skills are available on the next Codex turn).")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (RuntimeError, OSError, queue.Empty, KeyError) as error:
        print(f"FAIL {type(error).__name__}: {error}", file=sys.stderr)
        sys.exit(1)

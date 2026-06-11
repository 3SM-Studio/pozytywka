# Contributing

Ten plik opisuje codzienną pracę developerską w monorepo Pozytywki. README mówi, czym jest projekt. Ten plik mówi, jak nad nim bezpiecznie pracować.

## Wymagania

- Node.js `24.16.0`
- pnpm `11.5.2`
- Corepack
- Git
- VS Code z rekomendowanymi rozszerzeniami z `.vscode/extensions.json`
- dostęp do projektu Sanity dla pracy ze Studio

## Pierwsze uruchomienie

```bash
corepack enable
pnpm install
pnpm dev
```

Po uruchomieniu:

- Web: `http://localhost:3000`
- Sanity Studio: `http://localhost:3333`

## Najważniejsze komendy

```bash
pnpm dev          # uruchamia Web i Studio przez Turborepo
pnpm dev:web      # uruchamia tylko Next.js
pnpm dev:studio   # uruchamia tylko Sanity Studio
pnpm format       # formatuje repo Prettierem
pnpm format:check # sprawdza formatowanie
pnpm check        # lokalny odpowiednik CI
```

## Co robi `pnpm check`

`pnpm check` uruchamia:

1. walidację baseline'u repozytorium,
2. sprawdzenie formatowania,
3. lint,
4. typecheck,
5. build aplikacji Web i Studio.

Jeżeli `pnpm check` nie przechodzi lokalnie, PR nie jest gotowy do review.

## Monorepo

Repozytorium ma dwa główne workspace:

- `apps/web` — publiczna aplikacja Next.js,
- `apps/studio` — Sanity Studio.

Nie twórz osobnego `pnpm-lock.yaml` ani `pnpm-workspace.yaml` w `apps/web` lub `apps/studio`.

Zależności dodawaj z katalogu głównego:

```bash
pnpm add -Dw <package>
pnpm --filter @pozytywka/web add <package>
pnpm --filter @pozytywka/studio add <package>
```

Pierwsza komenda dodaje zależność do root workspace. Druga i trzecia dodają zależność do konkretnej aplikacji.

## Formatowanie

Projekt używa rootowego Prettiera.

Przed commitem działa Husky + lint-staged, które formatuje tylko pliki dodane do commita.

Nie używaj innego formattera dla pojedynczych plików, bo wygeneruje niepotrzebne diffy.

## Next.js

`apps/web/next-env.d.ts` jest generowany przez Next.js podczas `dev`, `build` i `typegen`.

Ten plik nie jest śledzony w Git. Nie dodawaj go ręcznie do commita.

## Sanity Studio

Studio działa w `apps/studio` i jest połączone z datasetem `development`.

Nie zapisuj sekretów, tokenów ani prywatnych danych w repozytorium.

## Branch i PR

Nie commitujemy bezpośrednio do `main`.

Typowy workflow:

```bash
git switch main
git pull
git switch -c feat/nazwa-zmiany
```

Przed pushem:

```bash
pnpm check
```

Pull request musi przejść CI i dostać wymagane review.

## Czego nie dodawać bez decyzji

Nie dodawaj bez świadomej decyzji zespołu:

- nowego frameworka,
- osobnego lockfile,
- Docker Compose,
- Nx,
- `concurrently`,
- commitlint,
- pre-push hooka,
- `/docs`,
- ADR,
- `.npmrc`,
- sekretów lub plików `.env`.

## Typowe problemy

### VS Code pokazuje ostrzeżenie dla `turbo.json`

Zainstaluj rekomendowane rozszerzenia i wykonaj:

```text
Ctrl+Shift+P → Developer: Reload Window
```

### Port `3000` albo `3333` jest zajęty

Uruchom aplikacje osobno:

```bash
pnpm dev:web
pnpm dev:studio
```

### Po buildzie pojawiają się zmiany w Git

Sprawdź:

```bash
git status --short
```

Pliki generowane powinny być ignorowane. Jeżeli śledzony plik zmienił się po `pnpm check`, trzeba poprawić konfigurację albo generator, nie ignorować problemu.

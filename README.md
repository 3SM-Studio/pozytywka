# Pozytywka

Monorepo strony internetowej Pracowni Twórczej Pozytywka.

## Aplikacje

- `apps/web` — publiczna aplikacja Next.js,
- `apps/studio` — Sanity Studio połączone z projektem Pozytywki i datasetem `development`.

## Stack

- Node.js 24 LTS,
- pnpm workspaces,
- Turborepo,
- Next.js, React i TypeScript,
- Sanity Studio,
- Tailwind CSS.

## Wymagania

- Node.js `24.16.0` — wersja jest przypięta w `.nvmrc` i `.node-version`,
- Corepack,
- dostęp do projektu Sanity dla pracy ze Studio.

## Uruchomienie

```bash
corepack enable
pnpm install
pnpm dev
```

Po uruchomieniu:

- Next.js: `http://localhost:3000`,
- Sanity Studio: `http://localhost:3333`.

## Najważniejsze komendy

```bash
pnpm dev          # uruchamia Web i Studio
pnpm dev:web      # uruchamia tylko Next.js
pnpm dev:studio   # uruchamia tylko Sanity Studio
pnpm lint         # lint wszystkich workspace
pnpm typecheck    # TypeScript wszystkich workspace
pnpm build        # build wszystkich workspace
pnpm check        # pełna kontrola lokalna zgodna z CI
```

## Zasady repozytorium

- istnieje jeden `pnpm-workspace.yaml` i jeden `pnpm-lock.yaml`,
- zależności instalujemy z katalogu głównego,
- nie tworzymy zagnieżdżonych workspace ani osobnych lockfile w aplikacjach,
- `main` zmieniamy wyłącznie przez pull request,
- wymagane są zielone CI i review CODEOWNER-a,
- merge odbywa się metodą squash,
- sekretów i plików `.env` nie commitujemy.

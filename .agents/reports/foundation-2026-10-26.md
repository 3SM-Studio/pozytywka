# POZYTYWKA — Agent Skills Foundation

Data audytu: 2026-10-26. Repozytorium: `3SM-Studio/pozytywka`.
Branch roboczy: `chore/agent-skills-foundation`.
Baza: `9e88ee22f53eb8f6e9700d0700395d9bbf996f25` (`origin/main`, PR #31).

Przygotowano zestaw 21 wymaganych skilli: 9 nowych projektowych i 12 istniejących
instalacji użytkownika. Nie zmieniono aplikacji, zależności runtime, lockfile
pnpm, systemu zapisów ani konfiguracji wdrożeń. Nie wykonuje się merge do main.
Poniższy raport dotyczy środowiska agenta, nie gotowości nowego projektu strony.

## 1. Stan wejściowy i instrukcje

Początkowy katalog `C:\Projects\pozytywka-marketing-website` był pusty i nie miał
repozytorium Git. Znaleziono istniejący checkout `C:\Projects\pozytywka`, którego
`origin` wskazuje dokładnie repozytorium docelowe. Worktree był czysty na branchu
`deploy/pozytywka-demo` (`ad39c1f`). Po pobraniu `origin/main` utworzono nowy branch
z aktualnego main, bez przenoszenia zmian z gałęzi wdrożeniowej.

Przeczytano `AGENTS.md`, `CONTRIBUTING.md`, README, root i web `package.json`,
konfigurację workspace/CI, walidator repo oraz istniejący hook i template PR.
Nie znaleziono dodatkowych zagnieżdżonych `AGENTS.md` ani wcześniejszych skilli
projektowych. Istniejący `AGENTS.md` ma historyczne wymagania Sanity; dodano
wyłącznie sekcję aktualnego zakresu, pozostawiając wcześniejsze sekcje.

| Narzędzie / element                          | Stan                                                                                            |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Node.js                                      | 24.19.0; spełnia `>=24.16.0 <25`, choć `.node-version` wskazuje 24.16.0                         |
| pnpm                                         | Globalnie poza repo 10.17.1; w repo faktycznie rozwiązuje się 11.5.2 zgodnie z `packageManager` |
| Python                                       | 3.12.10                                                                                         |
| uv                                           | 0.10.12                                                                                         |
| Codex CLI                                    | 0.152.0                                                                                         |
| Git / GitHub CLI                             | 2.53.0.windows.1 / 2.93.0; uwierzytelniony dostęp do repo                                       |
| Frontend                                     | Next.js 16.2.9, React/ReactDOM 19.2.7, TypeScript 6.0.3, Tailwind 4.3.1                         |
| Animacje                                     | `tw-animate-css` 1.4.0 i CSS; istniejąca reguła `prefers-reduced-motion` w globals.css          |
| GSAP / PixiJS / Three.js / Fiber w aplikacji | Nieobecne; nie dodano                                                                           |
| Backend / Studio                             | Istniejący kod Studio zachowany; przyszły kierunek marketingu: Google Cloud i PostgreSQL        |

Sprawdzono lokalną konfigurację Codexa: projekt jest zaufany; dostępne są m.in.
Context7, next-devtools i chrome-devtools oraz plugin Vercel w aplikacji desktop.
Nie zmieniono ustawień, modeli, dostępu ani hooków. Raport nie przechowuje
sekretów, zmiennych środowiskowych z wartościami ani konfiguracji uwierzytelnienia.

Kontrola reguł GitHub: tradycyjny endpoint branch protection zwraca 404, ale
efektywne rulesets dla main wymagają PR, 1 zatwierdzenia, code-owner review,
rozwiązania rozmów, aktualnego checka `quality`, linear history i squash merge;
blokują deletion i non-fast-forward. Nie zmieniono żadnej z tych reguł ani CI.

## 2. Rejestr instalacji i ponowne wykorzystanie

Pełne SHA i sumy kontrolne: [skills-lock.json](../skills-lock.json).
Projektowe katalogi poniżej odnoszą się do `.agents/skills/<nazwa>`.
Globalne katalogi odnoszą się do `C:\Users\michas\.agents\skills\<nazwa>`.

| Skill                  | Wersja / rewizja                                                    | Lokalizacja / decyzja                              |
| ---------------------- | ------------------------------------------------------------------- | -------------------------------------------------- |
| impeccable             | 4.0.4; punkt odniesienia `9a949fb543d44cfb406f61bcab99d95d7f12cf1d` | Globalny, zachowany snapshot z opisanymi różnicami |
| gsap-core              | `aed9cfd3277740755f6bfc1155c7aa645403b760`                          | Globalny, identyczna treść z pinem                 |
| gsap-react             | ta sama rewizja GSAP                                                | Globalny                                           |
| gsap-scrolltrigger     | ta sama rewizja GSAP                                                | Globalny                                           |
| gsap-performance       | ta sama rewizja GSAP                                                | Globalny                                           |
| pixijs                 | `83760c6f53462ca9cecd68055041f5a8c94758ce`; synchronizacja v8.22.0  | Globalny, identyczna treść z pinem                 |
| pixijs-application     | ta sama rewizja PixiJS                                              | Globalny                                           |
| pixijs-assets          | ta sama rewizja PixiJS                                              | Globalny                                           |
| pixijs-scene-container | ta sama rewizja PixiJS                                              | Globalny                                           |
| pixijs-ticker          | ta sama rewizja PixiJS                                              | Globalny                                           |
| pixijs-performance     | ta sama rewizja PixiJS                                              | Globalny                                           |
| pixijs-accessibility   | ta sama rewizja PixiJS                                              | Globalny                                           |
| threejs-r3f            | `84f9bcb4bea1f7a28d57fe7f0af78f7f9c3dc467`                          | Nowy projektowy                                    |
| threejs-performance    | to samo SHA źródła Three.js                                         | Nowy projektowy                                    |
| threejs-testing        | to samo SHA źródła Three.js                                         | Nowy projektowy                                    |
| seo-audit              | 2.2.2; `17772c7a80b7b8c7a47af30f648374cd8bd8adc5`                   | Nowy projektowy                                    |
| ai-seo                 | 2.11.0; to samo SHA Marketing Skills                                | Nowy projektowy                                    |
| schema                 | 2.0.2; to samo SHA Marketing Skills                                 | Nowy projektowy                                    |
| content-strategy       | 2.1.4; to samo SHA Marketing Skills                                 | Nowy projektowy                                    |
| site-architecture      | 2.1.0; to samo SHA Marketing Skills                                 | Nowy projektowy                                    |
| cro                    | 2.0.3; to samo SHA Marketing Skills                                 | Nowy projektowy                                    |

Dodatkowo wykorzystujemy dostępny w desktopie `vercel:react-best-practices`
z pluginu Vercel 0.54.1. Nie zainstalowano kopii tej samej kompetencji.
CLI w tej próbie nie odkrywało pluginów; nie wliczono go do 21/21 weryfikacji.

Przeszukano również `C:\Projects\.agents\skills`, globalny `.agents/skills`,
`~/.codex/skills` i katalog dostępnych pluginów. W katalogu nadrzędnym istniały
kopie modułów marketingowych, lecz rzeczywiste `skills/list` dla repo ich nie
zwracało. Potrzebne moduły zainstalowano więc projektowo; nie powstały dwie
aktywne kopie tych samych skilli w katalogu odkrywanym przez CLI.

Ważna różnica pochodzenia: globalne podstawowe moduły Three.js mają w istniejącym
locku źródło `full-stack-skills/threejs-skills`, a nie `cesartevisual`. Nie
przypisujemy im pochodzenia od badanego autora i nie instalujemy zamienników
o tych samych nazwach. Nowe moduły wypełniają konkretne luki: R3F, profilowanie
i deterministyczne testowanie.

## 3. Przegląd źródeł, zgodności i uprawnień

Wszystkie siedem repozytoriów odczytano przez GitHub i sklonowano do katalogu
tymczasowego poza projektem, bez wykonywania ich kodu instalacyjnego.
Sprawdzono właściciela przestrzeni GitHub, licencje, ostatnie commity, instrukcje,
referencje, deklarowane zależności i ścieżki instalacji/hooków. Pełne rewizje
oraz trzy ostatnie dostępne wpisy historii znajdują się w locku. Weryfikacja
namespace i dokumentacji nie jest kryptograficzną atestacją autorów.

| Źródło                                                               | Właściciel i licencja                                        | Wynik przeglądu                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Impeccable](https://github.com/pbakaus/impeccable)                  | Paul Bakaus / `pbakaus`; Apache-2.0 + NOTICE                 | Użycie istniejącego 4.0.4, bez globalnego upgrade do badanego 4.7.1. Liczne skrypty, opcjonalne sprawdzanie wersji i generowanie obrazów przez API. Tylko instrukcje i przejrzany statyczny detektor.                                                                        |
| [GSAP Skills](https://github.com/greensock/gsap-skills)              | Oficjalna organizacja `greensock`; MIT                       | Wybrane moduły są instrukcjami Markdown. Brak wymogu wysyłania kodu. Instalacja bibliotek pokazywana w przykładach nie jest wykonywana. Historia obejmuje m.in. aktualizację przykładów do GSAP 3.15.0 i obsługę kolejnych agentów.                                          |
| [PixiJS Skills](https://github.com/pixijs/pixijs-skills)             | Oficjalna organizacja `pixijs`; MIT                          | Instrukcje i referencje; bez wymogu usług zewnętrznych. Historia pokazuje synchronizacje v8.19.0, v8.21.0 i v8.22.0. Wybrane lokalne pliki odpowiadają pinowi.                                                                                                               |
| [Three.js Skills](https://github.com/cesartevisual/threejs-skills)   | Społecznościowy autor `cesartevisual`; MIT                   | README jawnie deklaruje niezależność od maintainerów Three.js. Jedna początkowa rewizja z 2026-09-10, ograniczona historia zaufania. Wybrane 3 moduły to wyłącznie instrukcje i worksheet; bez instalatora i uprawnień sieciowych. Nie jest to certyfikacja GPU.             |
| [Graphify](https://github.com/Graphify-Labs/graphify)                | `Graphify-Labs`; Apache-2.0 i dodatkowe MIT notice           | Badano 0.9.96 na gałęzi v8. Kod AST może być lokalny, ale skill ma szeroki trigger, auto-install/upgrade, a instalator dodaje hooki. Semantyczne dokumenty/media mają ścieżki modelowe/API. Odroczono.                                                                       |
| [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills)   | Oficjalna kolekcja `vercel-labs`; MIT zadeklarowane w README | W badanej rewizji brak osobnego pliku LICENSE. Zestaw React/RSC dostępny już przez plugin; bez kopii. `web-design-guidelines` nakazuje pobieranie ruchomych reguł z remote i pokrywa część Impeccable. Nie instalowano deploy/token skills ani pakietów budujących kolekcję. |
| [Marketing Skills](https://github.com/coreyhaines31/marketingskills) | Corey Haines / `coreyhaines31`; MIT                          | Wybrano 6 z 52 modułów. Ich katalogi zawierają Markdown i deklaratywne evals JSON, bez wykonywalnych skryptów. Opcjonalne narzędzia SEO/AI wskazane w tekście nie są uprawnieniem do usług ani udostępniania danych. Historia i wersje pokazują aktywne aktualizacje.        |

Pobrano wybrane moduły helperem OpenAI `skill-installer` z `--ref <pełne SHA>`
i `--dest .agents/skills --method download`. Nie użyto `npx skills add --all`,
`graphify install`, lifecycle hooks, natywnych instalatorów ani skryptów z
nieprzejrzanych repozytoriów. Nowe katalogi zawierają 47 plików instrukcji,
referencji i danych evals; nie stanowią zależności runtime aplikacji.

Dla Impeccable `SKILL.md` odpowiada wersji 4.0.4, lecz 18 z 152 plików różni się
od tagu. Zachowano lokalne modyfikacje, oddzielając hash upstream od zaobserwowanej
instalacji. To jawne ograniczenie pochodzenia: nie ogłaszamy pełnej zgodności
tego snapshotu z czystym wydaniem ani bezpieczeństwa wszystkich jego skryptów.

## 4. Pokrycie kompetencji i pozostałe luki

| Obszar                              | Pokrycie / praktyczny limit                                                                                                                                                                  |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Next.js 16, RSC i React             | Istniejący plugin React + Context7 dla dokładnego Next.js 16.2.9. Treść SSR, małe client boundaries, lazy canvas. API trzeba sprawdzać przy implementacji.                                   |
| WCAG 2.2 AA                         | Impeccable, Pixi accessibility i reguły projektowe; wymagają testów klawiaturą, zoom, focus i czytnikiem. Same instrukcje nie dowodzą zgodności AA.                                          |
| Reduced motion                      | GSAP matchMedia, istniejący CSS, statyczny fallback canvas; trzeba sprawdzić zarówno JS, jak CSS.                                                                                            |
| Responsywność i Core Web Vitals     | Impeccable + React/GSAP/Pixi performance; brak pomiarów CWV w tej iteracji.                                                                                                                  |
| Three.js / R3F / WebGL              | Nowe moduły R3F, performance i testing. Brak runtime oraz pomiarów na realnym GPU; biblioteki nie mają jeszcze wersji w aplikacji.                                                           |
| PixiJS v8, zasoby i renderer        | Oficjalne wybrane moduły v8.22.0; sprawdzono wzorzec async init i teardown w dokumentacji.                                                                                                   |
| Browser testing / screenshots       | Dostępne chrome-devtools i next-devtools; nowy skill testowania 3D. Repo nadal nie ma utrwalonej infrastruktury visual regression ani screenshot baselines.                                  |
| SEO, JSON-LD, GEO                   | Dedykowane seo-audit, schema, ai-seo i planowanie treści; brak live danych Search Console i cytowań AI.                                                                                      |
| Bezpieczeństwo aplikacji/formularzy | Istniejące reguły Zod/server validation, sekretów i danych dzieci; brak dedykowanego threat-model/security skill w podstawowym zestawie. Nie audytowano ani nie zmieniano endpointu zapisów. |

## 5. Testy i kontrole repozytorium

Szczegóły pięciu ograniczonych prób:
[smoke-tests-2026-10-26.md](smoke-tests-2026-10-26.md).

- `python scripts/agent-skills.py verify --codex`: PASS, 21/21; 9 nowych repo,
  12 user; bez błędów odkrywania. Rzeczywiście odczytano i zweryfikowano manifesty
  i kompletną zawartość, a nie tylko obecność katalogów.
- Testy walidatora poza repo: zmiana instrukcji odrzucona, brak lokalnej
  referencji odrzucony, zgodność hashy LF/CRLF potwierdzona.
- Impeccable: ograniczony lokalny detektor typografii/layoutu hero zwrócił exit 0
  i `[]`; nie jest to pełna ocena renderowanej witryny.
- GSAP, PixiJS i R3F: przeanalizowane syntetyczne antywzorce lifecycle i ruchu;
  poprawne granice klienta i API sprawdzone w Context7. Bez uruchamiania GPU.
- Marketing: statyczna analiza metadanych, sitemap, robots i architektury treści;
  żadnych operacji na serwisach zewnętrznych ani formularzu.
- `pnpm check`: PASS, baseline repo i Prettier oraz wszystkie 6 zadań
  lint/typecheck/build dla Web i istniejącego Studio. Build Studio był wyłącznie
  lokalnym elementem zastanej kontroli, bez wdrożenia ani operacji na danych.
- `python scripts/agent-skills.py install-missing`: PASS, próba idempotencji;
  wszystkie skille już dostępne, bez nowych pobrań i zmian globalnych.
- `git diff --quiet origin/main -- apps package.json pnpm-lock.yaml .github .husky`:
  PASS; kod aplikacji, zależności, CI i hooki bez zmian względem bazy.
- `pnpm audit --audit-level high`: FAIL na istniejącym lockfile; 157 wskazań
  (7 critical, 67 high, 69 moderate, 14 low), 74 odrębne rekordy advisories.
  Są to dopasowania wersji zależności, nie dowód wykorzystania luk w tej aplikacji.
  Wśród critical znajdują się Next.js, proxy-addr i DOMPurify, m.in.
  [GHSA-p293-qw3h-jr36](https://github.com/advisories/GHSA-p293-qw3h-jr36) oraz
  [GHSA-cg2g-xh64-v4q7](https://github.com/advisories/GHSA-cg2g-xh64-v4q7).
  `pnpm-lock.yaml` jest identyczny z origin/main; problem nie wynika z instalacji
  skilli. Wymagany osobny przegląd i PR aktualizacji zależności z testami.
  Z tego powodu foundation jest przygotowane jako draft PR, bez deklaracji
  pełnego zielonego CI lub gotowości aplikacji do wydania.

Nie wykonywano nowego testu wysyłki formularza ani przeglądu wizualnego mobile,
ponieważ nie wprowadzono zmian aplikacji. Nie wysyłano próbnych maili lub
danych zapisów. Brak takich testów nie jest raportowany jako PASS.

## 6. Zmiany w repo i utrzymanie

- Dodano 9 wybranych katalogów `.agents/skills/` w oryginalnej treści upstream.
- Dodano rejestr pełnych SHA, wersji, pochodzenia, hashy i decyzji dla 7 źródeł.
- Dodano licencje i NOTICE, przewodnik wyboru skilli, kontekst marketingowy oraz
  raporty audytu i prób instrukcji.
- Dodano `scripts/agent-skills.py`: weryfikacja integralności, referencji,
  aktywnego discovery oraz odtwarzanie wyłącznie brakujących skilli przez
  dostarczony helper. Nie aktualizuje istniejących instalacji.
- W `AGENTS.md` dodano sekcję zakresu prac i bezpiecznego wyboru skilli.
- `.prettierignore` wyłącza wyłącznie vendored skille, aby formatter nie zmieniał
  ich oryginalnej treści; pozostałe kontrole repo zachowują dotychczasowe reguły.

Nie dodano tras ani UI. `apps/`, package.json, pnpm-lock.yaml, `.github/`, Husky
i konfiguracja Codexa pozostają bez zmian względem bazy tej gałęzi.
Rollback: wycofanie PR usuwa wyłącznie foundation; wcześniejsze globalne skille
i produkcja nie zależą od tych zmian.

## 7. Dodatkowe narzędzia i pominięte moduły

Nie instalowano całych kolekcji. Pominięto dodatkowe moduły Pixi/GSAP, które są
już globalnie dostępne lub zbędne do zakresu bazowego. Pominięto kolejne Three.js
skills, deploy, access tokens, React Native, płatne kanały marketingowe,
subskrypcje, mailing, social automation i masową generację stron SEO.
`web-design-guidelines` pominięto z powodu duplikacji Impeccable i ruchomych
zewnętrznych instrukcji. Graphify odroczono z powodów opisanych wyżej.

Rzeczywistą lukę security może uzupełnić
[OpenAI security-best-practices](https://github.com/openai/skills/blob/main/skills/.curated/security-best-practices/SKILL.md),
obsługujący JavaScript/TypeScript i backend. Sprawdzono entrypoint i zakres;
instalację należy poprzedzić pełnym przeglądem referencji, licencji i pinem.
Nie dodajemy go tylko dla zwiększenia liczby skilli i nie rozpoczynamy teraz
audytu działającego systemu zapisów.

Przy pierwszym zadaniu implementacyjnym zalecane są lokalne Playwright Test
ze stałymi viewportami i baseline screenshots, axe dla automatycznych testów
dostępności oraz profilowanie Lighthouse/DevTools na reprezentatywnych
urządzeniach. To narzędzia uzupełniające brak infrastruktury pomiarowej;
nie zainstalowano ich jako zależności w tej iteracji. Porównania GPU wymagają
stałego środowiska i tolerancji, zgodnie z
[dokumentacją Playwright](https://playwright.dev/docs/test-snapshots).

Nie dodajemy osobnego skilla ogólnego projektowania UI ani kolejnego audytora
wizualnego, bo pokrywa to Impeccable. Dla bieżących API Next.js 16 wykorzystywany
jest Context7 i oficjalne dokumenty, bez niesprawdzonej kolekcji Next skills.

## 8. Proponowany workflow przyszłej przebudowy

1. Discovery: potwierdzić cele, odbiorców, realną ofertę, prawa do zdjęć i źródła
   treści. Zanotować nieznane dane zamiast wymyślać ceny, daty i liczby miejsc.
2. Art direction: z Impeccable rozwinąć „The Living Stage” w oparciu o brief,
   materiały i ograniczenia marki. Zatwierdzić kierunek przed pracą nad stroną.
3. IA i treść: site-architecture/content-strategy, następnie seo-audit/schema/
   ai-seo. Zdefiniować ścieżkę kontaktu, URL-e i odpowiedzi na pytania rodziców.
4. Prototypy wizualne: oddzielne, lokalne eksperymenty. Najpierw HTML/CSS i GSAP;
   Pixi lub R3F wyłącznie gdy konkretny efekt uzasadnia koszt. Nie łączyć trzech
   rendererów w hero bez pomiarów i wyraźnej potrzeby.
5. Kontrakt techniczny: wersje/peer dependencies, budżet pobrania i GPU, fallback
   bez WebGL/JS, reduced motion, obsługa błędów, własność assetów i teardown.
6. Implementacja: małe PR-y, semantyczne SSR i progressive enhancement. Instalacja
   bibliotek dopiero z konkretnym zadaniem; backend Google Cloud/PostgreSQL
   w osobnym zakresie, bez wdrażania Sanity i zmian zapisów przy okazji UI.
7. QA: lint/typecheck/build, deterministyczne desktop/mobile screenshots,
   klawiatura/zoom/czytnik, reduced motion, lifecycle i pomiary wydajności.
   Zapisuj wyniki i ograniczenia urządzeń; brak pomiaru nie jest zaliczeniem.
8. Review i wydanie: review PR, istniejące rulesets i CI, dopiero potem osobno
   autoryzowane wdrożenie. Foundation nie uruchamia ani nie promuje Production.

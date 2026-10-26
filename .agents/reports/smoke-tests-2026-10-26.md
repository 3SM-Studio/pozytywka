# Ograniczone testy skilli — 2026-10-26

Testy polegały na załadowaniu rzeczywistych instrukcji i analizie kodu lub
syntetycznych wzorców. Nie dodano bibliotek animacji ani prototypów do aplikacji.
To dowód dostępności i przydatności instrukcji, nie test renderowania GPU,
pełny audyt wizualny ani pomiar skuteczności marketingowej.

## 1. Impeccable: typografia i kompozycja

Załadowano `SKILL.md`, `reference/typeset.md` i `reference/layout.md` z istniejącej
instalacji. Przejrzano `apps/web/src/components/home/hero-section.tsx`,
`apps/web/src/app/globals.css` i `apps/web/src/app/layout.tsx`.

Wniosek z ograniczonej analizy źródeł: hero ma czytelny układ H1 → opis → CTA,
responsywną skalę nagłówka i zachowany porządek DOM. Montserrat oraz Playfair
Display mają wyraźnie rozdzielone role; `next/font` korzysta z `display: swap`.
Nagłówek ograniczony do `11ch` i dość wąska przestrzeń przy długim polskim tekście
wymagają późniejszego sprawdzenia zawijania na mobile oraz przy zoom 200%.
Duży dekoracyjny panel bez prawdziwej fotografii jest tematem przyszłego art
direction, bez zmiany w tej iteracji. Kontrastu, faktycznego reflow i jakości
renderowanej kompozycji nie potwierdzano samym odczytem klas CSS.

Wykonano jeden lokalny skan:

```powershell
node <global-impeccable>/scripts/detect.mjs --json --no-config --no-design-system --scope type,layout apps/web/src/components/home/hero-section.tsx
```

Wynik: exit 0, `[]`. Detektor działa i nie zgłosił reguł w tej ograniczonej próbie.
Nie jest to pełny `critique`, zrzuty ekranu ani certyfikat jakości. Nie uruchamiano
`context.mjs`, live servera, generowania obrazów ani hooków. Objęte analizą były
instrukcje typografii/layoutu oraz przeglądany statyczny entrypoint detektora.

## 2. GSAP: scroll-driven animation

Załadowano `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-performance`.
Wzorzec testowy: komponent React tworzy tween i ScrollTrigger w efekcie, używa
globalnego selektora `.panel`, animuje `top` i nie zwraca cleanup.

Wynik analizy: wykryte ryzyka wycieku przy zmianie trasy i Strict Mode, zbyt
szerokiego selektora, pracy layoutu i braku reduced motion. Właściwy kierunek:
scope do lokalnego ref, `useGSAP`/`context` z revert, `matchMedia` z wariantem
statycznym, transform zamiast `top`, liniowe ease dla scrub i refresh po zmianie
wymiarów assetów. Nie usuwać triggerów należących do innych komponentów.
Treść pozostaje widoczna bez JS; pin nie blokuje czytania ani nawigacji.
To analiza wzorca, bez instalacji GSAP lub uruchomienia animacji.

## 3. PixiJS v8: scena i lifecycle

Załadowano router `pixijs` oraz moduły application, assets, scene-container,
ticker, performance i accessibility. Wzorzec testowy: `new Application(options)`,
natychmiastowy odczyt canvas, anonimowy ticker, brak obsługi init po unmount
i niszczenie współdzielonej tekstury przez jeden komponent.

Wynik analizy: w v8 trzeba wykonać `await app.init(options)` przed użyciem
renderera/canvas. Init wymaga obsługi odmontowania podczas await; callback
tickera musi dać się usunąć. Ładowanie/unload i destroy tekstur zależą od ich
własności. Dla jednego właściciela aplikacji należy sprawdzić teardown renderer,
canvas i global pools, nie niszcząc zasobów innych aktywnych scen.
Wariant reduced motion może zatrzymać ticker i wyrenderować pojedynczą klatkę;
opis, treść i działania pozostają w HTML. Potwierdzono wzorzec w dokumentacji
PixiJS v8.22.0 przez Context7. Nie wykonywano testu GPU.

## 4. Three.js / React Three Fiber

Załadowano wszystkie trzy nowe moduły `threejs-r3f`, `threejs-performance`
i `threejs-testing`, w tym worksheet profilowania. Wzorzec testowy: `useFrame`
aktualizuje React state, scena tworzy własny drugi RAF i renderer wewnątrz
`Canvas`, a cleanup niszczy teksturę współdzieloną z cache loadera.

Wynik analizy: per-frame mutacje przez ref z deltą czasu, jeden właściciel pętli
i renderera, oddzielne zarządzanie cache oraz zasobami instancji. Canvas za małą
granicą klienta, SSR treści poza nim; `ssr: false` z `next/dynamic` umieszcza się
w Client Component. Przy `frameloop="demand"` mutacje wymagają invalidate;
pomocniki Drei mogą już zapewniać tę integrację. Dobór Fiber i Drei wymaga
sprawdzenia peer dependencies względem React 19.2.7.

Plan sprawdzenia prototypu: Strict Mode, zmiana trasy, błąd ładowania, reduced
motion, brak WebGL, stabilny screenshot z ustalonym seed/czasem/kamerą/DPR oraz
trend pamięci po kolejnych mount/unmount. Instrukcje rozpoznają antywzorce;
nie wykonano kompilacji R3F ani testu na urządzeniu, bo runtime nie jest dodany.

## 5. Marketing: struktura treści i SEO/GEO

Załadowano sześć nowych skilli marketingowych i kontekst Pozytywki.
Przejrzano `routes.ts`, `sitemap.ts`, `robots.ts`, `layout.tsx`, `site-url.ts`
i metadane stron. Bez żądań do Search Console, płatnych narzędzi i zapisów.

Wynik analizy: istnieją canonical, polski język dokumentu, sitemap i metadata.
Sitemap obejmuje również `/wydarzenia`, będące trasą zgodności, a `lastModified`
powstaje z daty generowania. Do przyszłego audytu: sprawdzić zgodność redirectów,
canonical i listy indeksowanych URL-i oraz oparcie dat na zmianie treści.
W źródłach nie znaleziono implementacji JSON-LD, ale sam taki odczyt nie dowodzi
braku schema w renderowanym DOM. Następny audyt powinien zbadać DOM oraz typy
Organization/BreadcrumbList i potwierdzone wydarzenia, bez fikcyjnych recenzji.

Treść o zajęciach, spektaklach, grupach i obozach daje sensowne klastry intencji.
FAQ i bezpośrednie odpowiedzi mogą wynikać wyłącznie z potwierdzonych danych.
Nie oceniono pozycji, Core Web Vitals użytkowników, ruchu, konwersji ani cytowań
AI — brak danych i pomiarów. Żaden wynik tej próby nie gwarantuje rich results
lub widoczności w AI.

## Kontrola instalacji

`python scripts/agent-skills.py verify --codex`: 21/21 wymaganych skilli,
9 nowych jako repo scope, pozostałe jako user scope. Każdy manifest i wszystkie
pliki przeszły sprawdzenie integralności; nowe referencje są dostępne.
`skills/list` nie zwróciło błędów. Wymagane skille były aktywne pod zweryfikowanymi
ścieżkami. Dla Impeccable poprawnie rozpoznano zaobserwowany snapshot.

Na tymczasowych plikach poza repo sprawdzono odrzucenie zmodyfikowanej instrukcji,
brakującej referencji oraz stabilność hasha między LF i CRLF. Próby zakończyły
się zgodnie z oczekiwaniem. Kod witryny pozostawał niezmieniony.

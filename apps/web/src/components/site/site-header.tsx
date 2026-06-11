import type {NavigationItem} from '@/lib/content/types'

type SiteHeaderProps = {
  navigation: NavigationItem[]
}

export function SiteHeader({navigation}: SiteHeaderProps) {
  return (
    <header className="border-border/70 bg-background/90 sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="w-container mx-auto flex min-h-18 items-center justify-between gap-6">
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label="Pozytywka — strona główna"
        >
          <span className="bg-primary text-primary-foreground grid size-11 place-items-center rounded-full text-sm font-bold shadow-sm transition group-hover:scale-105">
            P
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-foreground font-serif text-2xl font-semibold tracking-tight">
              Pozytywka
            </span>
            <span className="text-muted-foreground mt-1 text-[0.65rem] font-semibold tracking-[0.22em] uppercase">
              Pracownia Twórcza
            </span>
          </span>
        </a>

        <nav aria-label="Główna nawigacja" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/75 hover:text-foreground text-sm font-semibold transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="bg-ink text-background hidden min-h-11 items-center rounded-full px-5 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:inline-flex"
        >
          Zapisz się
        </a>

        <details className="group relative md:hidden">
          <summary className="border-border bg-card flex min-h-11 cursor-pointer list-none items-center rounded-full border px-4 text-sm font-semibold marker:hidden">
            Menu
          </summary>
          <div className="border-border bg-card absolute top-14 right-0 w-64 rounded-2xl border p-3 shadow-xl">
            <nav aria-label="Nawigacja mobilna" className="grid gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:bg-muted rounded-xl px-4 py-3 text-sm font-semibold"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#kontakt"
                className="bg-primary text-primary-foreground mt-2 rounded-xl px-4 py-3 text-sm font-bold"
              >
                Zapisz się
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  )
}

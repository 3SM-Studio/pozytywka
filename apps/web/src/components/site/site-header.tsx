import {SiteLogo} from '@/components/site/site-logo'
import type {NavigationItem} from '@/lib/content/types'

type SiteHeaderProps = {
  navigation: NavigationItem[]
}

export function SiteHeader({navigation}: SiteHeaderProps) {
  return (
    <header className="border-outline-variant/60 bg-background sticky top-0 z-50 w-full border-b shadow-[0_1px_10px_rgba(31,27,14,0.06)]">
      <div className="w-container mx-auto flex min-h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Pozytywka — strona główna">
          <SiteLogo size="header" />
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
          className="bg-inverse-surface text-inverse-surface-foreground hover:bg-primary hover:text-primary-foreground inline-flex min-h-11 items-center justify-center rounded-lg px-6 text-sm font-semibold transition-colors max-md:hidden"
        >
          Zapisz się
        </a>

        <details className="group relative md:hidden">
          <summary className="border-outline bg-surface-raised flex min-h-11 cursor-pointer list-none items-center rounded-lg border px-4 text-sm font-semibold marker:hidden">
            Menu
          </summary>
          <div className="border-outline-variant bg-surface-raised absolute top-14 right-0 w-72 rounded-2xl border p-3 shadow-xl">
            <nav aria-label="Nawigacja mobilna" className="grid gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:bg-surface-container rounded-lg px-4 py-3 text-sm font-semibold"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#kontakt"
                className="bg-inverse-surface text-inverse-surface-foreground mt-2 rounded-lg px-4 py-3 text-sm font-bold"
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

import {SiteLogo} from '@/components/site/site-logo'
import {ModeToggle} from '@/components/theme/mode-toggle'
import type {NavigationItem} from '@/lib/content/types'
import Link from 'next/link'

type SiteHeaderProps = {
  navigation: NavigationItem[]
}

export function SiteHeader({navigation}: SiteHeaderProps) {
  return (
    <header className="border-outline-variant/60 bg-background/90 supports-[backdrop-filter]:bg-background/75 dark:bg-background/85 sticky top-0 z-50 w-full border-b shadow-[0_1px_10px_rgba(31,27,14,0.06)] backdrop-blur dark:shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
      <div className="w-container mx-auto flex min-h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Pozytywka — strona główna">
          <SiteLogo size="header" />
        </Link>

        <nav aria-label="Główna nawigacja" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/75 hover:text-foreground dark:hover:text-primary text-sm font-semibold transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link
            href="/kontakt"
            className="bg-inverse-surface text-inverse-surface-foreground hover:bg-primary hover:text-primary-foreground dark:bg-primary-container dark:text-primary-container-foreground dark:hover:bg-primary inline-flex min-h-11 items-center justify-center rounded-lg px-6 text-sm font-semibold transition-colors max-md:hidden dark:shadow-[0_14px_30px_rgba(255,213,74,0.18)]"
          >
            Zapisz się
          </Link>
        </div>

        <details className="group relative md:hidden">
          <summary className="border-outline bg-surface-raised dark:border-outline-variant flex min-h-11 cursor-pointer list-none items-center rounded-lg border px-4 text-sm font-semibold marker:hidden">
            Menu
          </summary>
          <div className="border-outline-variant bg-surface-raised absolute top-14 right-0 w-72 rounded-2xl border p-3 shadow-xl dark:shadow-2xl">
            <nav aria-label="Nawigacja mobilna" className="grid gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:bg-surface-container rounded-lg px-4 py-3 text-sm font-semibold"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="bg-inverse-surface text-inverse-surface-foreground dark:bg-primary-container dark:text-primary-container-foreground mt-2 rounded-lg px-4 py-3 text-sm font-bold"
              >
                Zapisz się
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  )
}

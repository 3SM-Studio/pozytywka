import {SiteLogo} from '@/components/site/site-logo'
import {AppLink} from '@/components/ui/app-link'
import type {FooterContent} from '@/lib/content/types'

type SiteFooterProps = {
  content: FooterContent
}

export function SiteFooter({content}: SiteFooterProps) {
  return (
    <footer
      id="kontakt"
      className="border-outline-variant/60 bg-surface-container-low dark:bg-ink dark:text-inverse-surface-foreground border-t"
    >
      <div className="w-container mx-auto grid gap-10 py-12 md:grid-cols-[1.25fr_1fr_1fr_1fr]">
        <div>
          <SiteLogo size="footer" />
          <p className="text-muted-foreground dark:text-inverse-surface-foreground/70 mt-5 max-w-md text-sm leading-7">
            {content.description}
          </p>
        </div>

        {content.groups.map((group) => (
          <div key={group.id}>
            <h2 className="text-muted-foreground dark:text-primary text-sm font-semibold tracking-[0.14em] uppercase">
              {group.title}
            </h2>
            <ul className="text-foreground/80 dark:text-inverse-surface-foreground/80 mt-4 grid gap-3 text-sm font-semibold">
              {group.links.map((item) => (
                <li key={item.id}>
                  <AppLink
                    href={item.href}
                    className="hover:text-foreground dark:hover:text-primary"
                  >
                    {item.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-muted-foreground dark:text-primary text-sm font-semibold tracking-[0.14em] uppercase">
            Kontakt
          </h2>
          <ul className="text-foreground/80 dark:text-inverse-surface-foreground/75 mt-4 grid gap-3 text-sm">
            {content.contact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-5 flex gap-4 text-sm font-semibold">
            {content.social.map((item) => (
              <AppLink href={item.href} key={item.id} className="hover:text-primary">
                {item.label}
              </AppLink>
            ))}
          </div>
        </div>
      </div>

      <div className="border-outline-variant/60 border-t px-5 py-5">
        <div className="w-container text-muted-foreground dark:text-inverse-surface-foreground/60 mx-auto flex flex-col justify-between gap-4 text-xs md:flex-row">
          <p>© 2026 Pozytywka — Pracownia Twórcza.</p>
          <div className="flex flex-wrap gap-4">
            {content.legal.map((item) => (
              <AppLink
                key={item.id}
                href={item.href}
                className="hover:text-foreground dark:hover:text-primary"
              >
                {item.label}
              </AppLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

import type {HomePageContent} from '@/lib/content/types'

type SiteFooterProps = {
  content: HomePageContent['footer']
}

export function SiteFooter({content}: SiteFooterProps) {
  return (
    <footer id="kontakt" className="border-outline-variant/60 bg-surface-container-low border-t">
      <div className="w-container mx-auto grid gap-10 py-12 md:grid-cols-[1.25fr_1fr_1fr_1fr]">
        <div>
          <div className="border-outline-variant bg-surface-raised grid h-14 w-44 place-items-center rounded-lg border px-4 shadow-sm">
            <span className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-semibold tracking-tight">Pozytywka</span>
            </span>
          </div>
          <p className="text-muted-foreground mt-5 max-w-md text-sm leading-7">
            {content.description}
          </p>
        </div>

        {content.groups.map((group) => (
          <div key={group.title}>
            <h2 className="text-muted-foreground text-sm font-semibold tracking-[0.14em] uppercase">
              {group.title}
            </h2>
            <ul className="text-foreground/80 mt-4 grid gap-3 text-sm font-semibold">
              {group.links.map((item) => (
                <li key={`${group.title}-${item.label}`}>
                  <a href={item.href} className="hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-muted-foreground text-sm font-semibold tracking-[0.14em] uppercase">
            Kontakt
          </h2>
          <ul className="text-foreground/80 mt-4 grid gap-3 text-sm">
            {content.contact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-5 flex gap-4 text-sm font-semibold">
            {content.social.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-primary">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-outline-variant/60 border-t px-5 py-5">
        <div className="w-container text-muted-foreground mx-auto flex flex-col justify-between gap-4 text-xs md:flex-row">
          <p>© 2026 Pozytywka — Pracownia Twórcza.</p>
          <div className="flex flex-wrap gap-4">
            {content.legal.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-foreground">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

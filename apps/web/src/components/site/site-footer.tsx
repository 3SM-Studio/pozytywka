import type {HomePageContent} from '@/lib/content/types'

type SiteFooterProps = {
  content: HomePageContent['footer']
  navigation: HomePageContent['navigation']
}

const footerLinks = [
  {label: 'Teatry', href: '#scena'},
  {label: 'Spektakle', href: '#wydarzenia'},
  {label: 'Wydarzenia', href: '#wydarzenia'},
  {label: 'Obozy', href: '#obozy'},
  {label: 'FAQ', href: '#kontakt'},
]

export function SiteFooter({content, navigation}: SiteFooterProps) {
  return (
    <footer id="kontakt" className="border-border bg-surface-muted border-t">
      <div className="w-container mx-auto grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl font-semibold tracking-tight">Pozytywka</p>
          <p className="text-muted-foreground mt-4 max-w-md text-sm leading-7">
            {content.description}
          </p>
        </div>

        <div>
          <h2 className="text-muted-foreground text-sm font-bold tracking-[0.18em] uppercase">
            Strona
          </h2>
          <ul className="text-foreground/80 mt-4 grid gap-3 text-sm font-semibold">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
            {footerLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-muted-foreground text-sm font-bold tracking-[0.18em] uppercase">
            Kontakt
          </h2>
          <ul className="text-foreground/80 mt-4 grid gap-3 text-sm">
            {content.contact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

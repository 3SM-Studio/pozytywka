import {Container} from '@/components/layout/container'
import {Section} from '@/components/layout/section'
import {AppLink} from '@/components/ui/app-link'
import {LinkButton} from '@/components/ui/link-button'
import {homeAnchors, siteRoutes} from '@/lib/content/routes'
import {siteContent} from '@/lib/content/site'
import type {LinkTarget} from '@/lib/content/types'
import type {Metadata} from 'next'

const contactRoute = siteRoutes.find((route) => route.path === '/kontakt') ?? siteRoutes[0]

export const metadata: Metadata = {
  title: contactRoute.title,
  description: contactRoute.description,
  alternates: {
    canonical: contactRoute.path,
  },
  openGraph: {
    title: `${contactRoute.title} | Pozytywka`,
    description: contactRoute.description,
    url: contactRoute.path,
  },
}

export default function ContactPage() {
  const headingId = 'contact-heading'
  const content = siteContent.contactPage

  return (
    <Section labelledBy={headingId}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(20rem,0.55fr)] lg:items-start">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">
              Kontakt
            </p>
            <h1 id={headingId} className="font-display mt-4 text-4xl font-bold md:text-6xl">
              Kontakt z Pozytywką
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">{content.status}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <ContactMethod title="E-mail" item={content.contactEmail} />
              <ContactMethod title="Telefon" item={content.contactPhone} />
              <ContactMethod title="Godziny kontaktu" value={content.contactHours} />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <LinkButton href={homeAnchors.classes} variant="inverse">
                Zobacz zajęcia
              </LinkButton>
              <LinkButton href={homeAnchors.events} variant="surfaceOutline">
                Zobacz wydarzenia
              </LinkButton>
            </div>
          </div>

          <aside className="border-outline-variant/60 bg-surface-raised rounded-2xl border p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold">Co podać w wiadomości</h2>
            <ul className="text-muted-foreground mt-5 grid gap-3 text-sm leading-6">
              {content.messageGuidance.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="text-primary font-semibold">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-surface-container-low mt-6 rounded-xl p-4 text-sm leading-6">
              <p className="font-semibold">Formularz</p>
              <p className="text-muted-foreground mt-2">{content.formStatus}</p>
            </div>

            <div className="bg-surface-container-low mt-4 rounded-xl p-4 text-sm leading-6">
              <p className="font-semibold">Prywatność</p>
              <p className="text-muted-foreground mt-2">
                <AppLink
                  href={content.privacyDocument.href}
                  className="text-primary font-semibold hover:underline"
                >
                  {content.privacyDocument.label}
                </AppLink>{' '}
                jest teraz dokumentem roboczym.
              </p>
              <p className="text-muted-foreground mt-2">{content.privacyDocument.note}</p>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  )
}

function ContactMethod({
  title,
  item,
  value,
}: {
  title: string
  item?: LinkTarget | null
  value?: string | null
}) {
  const content = item ? (
    <AppLink href={item.href} className="text-primary font-semibold hover:underline">
      {item.label}
    </AppLink>
  ) : (
    <span>Nieopublikowane</span>
  )

  return (
    <div className="border-outline-variant/60 bg-surface-raised rounded-2xl border p-5">
      <h2 className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
        {title}
      </h2>
      <p className="mt-3 text-sm font-semibold">{value ?? content}</p>
    </div>
  )
}

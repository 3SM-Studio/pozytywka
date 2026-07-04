import {ContactForm} from '@/components/contact/contact-form'
import {Container} from '@/components/layout/container'
import {Section} from '@/components/layout/section'
import {SectionHeader} from '@/components/layout/section-header'
import {LinkButton} from '@/components/ui/link-button'
import {homeAnchors, siteRoutes} from '@/lib/content/routes'
import {fallbackContactPage} from '@/lib/content/seed'
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

  return (
    <Section labelledBy={headingId}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.2fr] lg:items-start">
          <div>
            <SectionHeader
              id={headingId}
              eyebrow={fallbackContactPage.eyebrow}
              title={fallbackContactPage.title}
              description={fallbackContactPage.description}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={homeAnchors.classes} variant="inverse">
                Zobacz zajęcia
              </LinkButton>
              <LinkButton href={homeAnchors.camp} variant="surfaceOutline">
                Zobacz obozy
              </LinkButton>
            </div>
            <div className="mt-8 grid gap-3">
              {fallbackContactPage.notes.map((note) => (
                <p
                  key={note}
                  className="border-outline-variant/60 bg-surface-raised rounded-xl border p-4 text-sm leading-7"
                >
                  {note}
                </p>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </Section>
  )
}

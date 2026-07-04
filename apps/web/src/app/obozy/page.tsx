import {Container} from '@/components/layout/container'
import {Section} from '@/components/layout/section'
import {SectionHeader} from '@/components/layout/section-header'
import {LinkButton} from '@/components/ui/link-button'
import {fallbackCamps} from '@/lib/content/seed'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Obozy',
  description: 'Pozytywne Lato i zapytania o artystyczno-rekreacyjne obozy Pozytywki.',
  alternates: {
    canonical: '/obozy',
  },
  openGraph: {
    title: 'Obozy | Pozytywka',
    description: 'Pozytywne Lato i zapytania o artystyczno-rekreacyjne obozy Pozytywki.',
    url: '/obozy',
  },
}

export default function CampsPage() {
  const headingId = 'camps-heading'
  const camp = fallbackCamps[0]

  return (
    <>
      <Section labelledBy={headingId} tone="muted">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeader
                id={headingId}
                eyebrow="Obozy"
                title={camp.title}
                description={camp.description}
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <LinkButton href="/kontakt" variant="inverse" size="wide">
                  Zapytaj o Pozytywne Lato
                </LinkButton>
                <LinkButton href="/zajecia" variant="outline" size="wide">
                  Zobacz zajęcia
                </LinkButton>
              </div>
            </div>
            <div className="border-outline-variant/60 bg-ink text-inverse-surface-foreground rounded-2xl border p-8 shadow-xl lg:col-span-5">
              <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">
                Oferta obozowa
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold">Pozytywne Lato</h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Strona jest gotowa na konkretne turnusy, miejsca, ceny i dokumenty po potwierdzeniu
                ich z klientem.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {camp.details.map((detail) => (
              <article
                key={detail.id}
                className="border-outline-variant/60 bg-surface-raised rounded-2xl border p-6 shadow-sm"
              >
                <p className="text-primary text-sm font-semibold">{detail.icon}</p>
                <h2 className="mt-3 font-serif text-2xl font-semibold">{detail.label}</h2>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}

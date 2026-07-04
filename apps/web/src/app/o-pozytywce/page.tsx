import {Container} from '@/components/layout/container'
import {Section} from '@/components/layout/section'
import {SectionHeader} from '@/components/layout/section-header'
import {LinkButton} from '@/components/ui/link-button'
import {fallbackAboutPage} from '@/lib/content/seed'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'O Pozytywce',
  description: 'Podejście Pozytywki, Iwona Pilarz, scena, wspólnota i twórcza praca.',
  alternates: {
    canonical: '/o-pozytywce',
  },
  openGraph: {
    title: 'O Pozytywce | Pozytywka',
    description: 'Podejście Pozytywki, Iwona Pilarz, scena, wspólnota i twórcza praca.',
    url: '/o-pozytywce',
  },
}

export default function AboutPage() {
  const headingId = 'about-heading'

  return (
    <>
      <Section labelledBy={headingId}>
        <Container>
          <SectionHeader
            id={headingId}
            eyebrow={fallbackAboutPage.eyebrow}
            title={fallbackAboutPage.title}
            description={fallbackAboutPage.description}
          />

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {fallbackAboutPage.pillars.map((pillar) => (
              <article
                key={pillar.id}
                className="border-outline-variant/60 bg-surface-raised rounded-2xl border p-6 shadow-sm"
              >
                <p className="text-primary text-sm font-semibold">{pillar.icon}</p>
                <h2 className="mt-3 font-serif text-2xl font-semibold">{pillar.title}</h2>
                <p className="text-muted-foreground mt-3 text-sm leading-7">{pillar.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div className="border-outline-variant/60 bg-surface-raised rounded-2xl border p-6 shadow-sm">
              <p className="text-primary text-xs font-semibold tracking-[0.14em] uppercase">
                {fallbackAboutPage.featuredPerson.role}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold">
                {fallbackAboutPage.featuredPerson.name}
              </h2>
              <p className="text-muted-foreground mt-3 text-sm leading-7">
                {fallbackAboutPage.featuredPerson.description}
              </p>
            </div>
            <div>
              <h2 className="font-serif text-4xl font-semibold">
                Podejście bez dopisywania faktów
              </h2>
              <p className="text-muted-foreground mt-5 text-lg leading-8">
                Demo zostawia miejsce na prawdziwy biogram, zdjęcia i dorobek, ale nie wymyśla ról,
                dat ani nagród. To świadomy fundament pod CMS i rozmowę z klientem.
              </p>
              <div className="mt-8">
                <LinkButton href="/kontakt" variant="inverse">
                  Skontaktuj się
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

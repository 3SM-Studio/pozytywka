import {Container} from '@/components/layout/container'
import {Section} from '@/components/layout/section'
import {LinkButton} from '@/components/ui/link-button'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Polityka cookies',
  description: 'Techniczna strona dokumentu prawnego Pozytywki.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/polityka-cookies',
  },
}

export default function CookiesPolicyPage() {
  const headingId = 'cookies-policy-heading'

  return (
    <Section labelledBy={headingId}>
      <Container>
        <div className="max-w-3xl">
          <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">
            Dokument prawny
          </p>
          <h1 id={headingId} className="font-display mt-4 text-4xl font-bold md:text-6xl">
            Polityka cookies
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-8">
            Treść tego dokumentu musi zostać uzupełniona i zweryfikowana przed publicznym
            uruchomieniem strony.
          </p>
          <p className="text-muted-foreground mt-4 leading-7">
            Ta podstrona istnieje jako techniczne miejsce na przyszły dokument. Nie stanowi porady
            prawnej ani finalnej polityki cookies.
          </p>
          <LinkButton href="/" variant="outline" className="mt-10">
            Wróć na stronę główną
          </LinkButton>
        </div>
      </Container>
    </Section>
  )
}

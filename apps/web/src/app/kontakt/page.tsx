import {homeAnchors, siteRoutes} from '@/lib/content/routes'
import {LinkButton} from '@/components/ui/link-button'
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
  return (
    <section className="w-container mx-auto px-5 py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">Kontakt</p>
        <h1 className="font-display mt-4 text-4xl font-bold md:text-6xl">
          Dane kontaktowe są przygotowane do uzupełnienia
        </h1>
        <p className="text-muted-foreground mt-6 text-lg leading-8">
          Ta podstrona porządkuje routing i miejsce na przyszłe treści z Sanity. Formularz oraz
          potwierdzone dane kontaktowe zostaną dodane w osobnym etapie.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <LinkButton href={homeAnchors.classes} variant="inverse">
            Zobacz zajęcia
          </LinkButton>
          <LinkButton href={homeAnchors.events} variant="surfaceOutline">
            Zobacz wydarzenia
          </LinkButton>
        </div>
      </div>
    </section>
  )
}

import {homeAnchors, siteRoutes} from '@/lib/content/routes'
import type {Metadata} from 'next'
import Link from 'next/link'

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
          <Link
            href={homeAnchors.classes}
            className="bg-inverse-surface text-inverse-surface-foreground hover:bg-primary hover:text-primary-foreground inline-flex min-h-11 items-center justify-center rounded-lg px-6 text-sm font-semibold transition-colors"
          >
            Zobacz zajęcia
          </Link>
          <Link
            href={homeAnchors.events}
            className="border-outline bg-surface-raised hover:bg-surface-container inline-flex min-h-11 items-center justify-center rounded-lg border px-6 text-sm font-semibold transition-colors"
          >
            Zobacz wydarzenia
          </Link>
        </div>
      </div>
    </section>
  )
}

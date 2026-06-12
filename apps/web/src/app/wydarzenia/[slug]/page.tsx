import {Container} from '@/components/layout/container'
import {Section} from '@/components/layout/section'
import {LinkButton} from '@/components/ui/link-button'
import {eventStatusLabel} from '@/lib/content/display'
import {getEventBySlug, getEventsContent} from '@/lib/content/get-events-content'
import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

type EventPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const content = await getEventsContent()

  return content.items.map((event) => ({
    slug: event.slug,
  }))
}

export async function generateMetadata({params}: EventPageProps): Promise<Metadata> {
  const {slug} = await params
  const event = await getEventBySlug(slug)

  if (!event) {
    return {
      title: 'Wydarzenia',
    }
  }

  return {
    title: event.title,
    description: event.description,
    alternates: {
      canonical: `/wydarzenia/${event.slug}`,
    },
    openGraph: {
      title: `${event.title} | Pozytywka`,
      description: event.description,
      url: `/wydarzenia/${event.slug}`,
    },
  }
}

export default async function EventPage({params}: EventPageProps) {
  const {slug} = await params
  const event = await getEventBySlug(slug)
  const headingId = 'event-detail-heading'

  if (!event) {
    notFound()
  }

  return (
    <Section labelledBy={headingId} tone="muted">
      <Container>
        <div className="max-w-3xl">
          <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">
            {event.type}
          </p>
          <h1 id={headingId} className="font-display mt-4 text-4xl font-bold md:text-6xl">
            {event.title}
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-8">{event.description}</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <DetailItem label="Termin" value={event.dateLabel} />
          <DetailItem label="Godzina" value={event.timeLabel ?? 'Godzina — do potwierdzenia'} />
          <DetailItem label="Lokalizacja" value={event.locationSummary} />
          <DetailItem label="Status" value={eventStatusLabel[event.status]} />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <LinkButton href="/kontakt" variant="inverse">
            Skontaktuj się
          </LinkButton>
          <LinkButton href="/wydarzenia" variant="outline">
            Wróć do wydarzeń
          </LinkButton>
        </div>
      </Container>
    </Section>
  )
}

function DetailItem({label, value}: {label: string; value: string}) {
  return (
    <div className="border-outline-variant/60 bg-surface-raised rounded-2xl border p-5">
      <p className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
        {label}
      </p>
      <p className="mt-2 font-semibold">{value}</p>
    </div>
  )
}

import {Container} from '@/components/layout/container'
import {SectionHeader} from '@/components/layout/section-header'
import {Section} from '@/components/layout/section'
import {LinkButton} from '@/components/ui/link-button'
import {eventStatusLabel} from '@/lib/content/display'
import {getEventsContent} from '@/lib/content/get-events-content'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Wydarzenia',
  description: 'Lista wydarzeń Pozytywki przygotowana na bazie lokalnych danych.',
  alternates: {
    canonical: '/wydarzenia',
  },
  openGraph: {
    title: 'Wydarzenia | Pozytywka',
    description: 'Lista wydarzeń Pozytywki przygotowana na bazie lokalnych danych.',
    url: '/wydarzenia',
  },
}

export default async function EventsPage() {
  const content = await getEventsContent()

  return (
    <Section tone="muted">
      <Container>
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="mt-12 grid gap-4">
          {content.items.map((event) => (
            <article
              key={event.id}
              className="border-outline-variant/60 bg-surface-raised grid gap-6 rounded-2xl border p-6 shadow-sm md:grid-cols-[12rem_1fr_auto] md:items-center"
            >
              <div>
                <p className="text-primary text-sm font-semibold tracking-[0.04em] uppercase">
                  {event.dateLabel}
                </p>
                <p className="text-muted-foreground mt-2 text-xs font-semibold tracking-[0.14em] uppercase">
                  {event.type}
                </p>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-semibold">{event.title}</h2>
                <p className="text-muted-foreground mt-2 text-sm leading-7">{event.description}</p>
                <div className="text-foreground/75 mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  <span>⌖ {event.locationSummary}</span>
                  {event.timeLabel ? <span>◷ {event.timeLabel}</span> : null}
                  <span>{eventStatusLabel[event.status]}</span>
                </div>
              </div>
              <LinkButton href={`/wydarzenia/${event.slug}`} variant="outline">
                Zobacz wydarzenie
              </LinkButton>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}

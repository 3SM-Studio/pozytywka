import {Container} from '@/components/layout/container'
import {Section} from '@/components/layout/section'
import {SectionHeader} from '@/components/layout/section-header'
import {LinkButton} from '@/components/ui/link-button'
import {eventStatusLabel} from '@/lib/content/display'
import {getEventsContent} from '@/lib/content/get-events-content'
import {getEventHref} from '@/lib/content/routes'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Spektakle',
  description: 'Projekty sceniczne, spektakle, musicale i prezentacje Pozytywki.',
  alternates: {
    canonical: '/spektakle',
  },
  openGraph: {
    title: 'Spektakle | Pozytywka',
    description: 'Projekty sceniczne, spektakle, musicale i prezentacje Pozytywki.',
    url: '/spektakle',
  },
}

export default async function ShowsPage() {
  const content = await getEventsContent()
  const headingId = 'shows-heading'

  return (
    <Section labelledBy={headingId} tone="muted">
      <Container>
        <SectionHeader
          id={headingId}
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
                {event.dateLabel ? (
                  <p className="text-primary text-sm font-semibold tracking-[0.04em] uppercase">
                    {event.dateLabel}
                  </p>
                ) : null}
                <p className="text-muted-foreground mt-2 text-xs font-semibold tracking-[0.14em] uppercase">
                  {event.type}
                </p>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-semibold">{event.title}</h2>
                <p className="text-muted-foreground mt-2 text-sm leading-7">{event.description}</p>
                <div className="text-foreground/75 mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  {event.locationSummary ? <span>{event.locationSummary}</span> : null}
                  {event.timeLabel ? <span>{event.timeLabel}</span> : null}
                  <span>{eventStatusLabel[event.status]}</span>
                </div>
              </div>
              <LinkButton href={getEventHref(event.slug)} variant="outline">
                Zobacz projekt
              </LinkButton>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}

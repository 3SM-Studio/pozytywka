import type {HomePageContent} from '@/lib/content/types'
import {Container} from '@/components/layout/container'
import {SectionHeader} from '@/components/layout/section-header'
import {Section} from '@/components/layout/section'
import {AppLink} from '@/components/ui/app-link'
import {LinkButton} from '@/components/ui/link-button'

type EventsPreviewSectionProps = {
  content: HomePageContent['eventsPreview']
}

export function EventsPreviewSection({content}: EventsPreviewSectionProps) {
  const headingId = 'home-events-heading'

  return (
    <Section id="wydarzenia" labelledBy={headingId} tone="muted">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            id={headingId}
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
          <LinkButton
            href={content.action.href}
            variant="surfaceOutline"
            size="wide"
            className="shrink-0"
          >
            {content.action.label}
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </LinkButton>
        </div>

        <div className="mt-12 grid gap-4">
          {content.items.map((item) => (
            <article
              key={item.id}
              className="border-outline-variant/60 bg-surface-raised grid gap-6 rounded-2xl border p-6 shadow-sm md:grid-cols-[12rem_1fr_auto] md:items-center"
            >
              <div>
                {item.dateLabel ? (
                  <p className="text-primary text-sm font-semibold tracking-[0.04em] uppercase">
                    {item.dateLabel}
                  </p>
                ) : null}
                <p className="text-muted-foreground mt-2 text-xs font-semibold tracking-[0.14em] uppercase">
                  {item.type}
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-7">{item.description}</p>
                <div className="text-foreground/75 mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  {item.locationSummary ? (
                    <span>
                      <span aria-hidden="true">⌖</span> {item.locationSummary}
                    </span>
                  ) : null}
                  {item.timeLabel ? (
                    <span>
                      <span aria-hidden="true">◷</span> {item.timeLabel}
                    </span>
                  ) : null}
                </div>
              </div>
              <AppLink href={item.action.href} className="text-primary text-sm font-semibold">
                {item.action.label}
              </AppLink>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}

import type {HomePageContent} from '@/lib/content/types'
import {Container} from '@/components/layout/container'
import {SectionHeader} from '@/components/layout/section-header'
import {Section} from '@/components/layout/section'
import Link from 'next/link'

type EventsPreviewSectionProps = {
  content: HomePageContent['eventsPreview']
}

export function EventsPreviewSection({content}: EventsPreviewSectionProps) {
  return (
    <Section id="wydarzenia" tone="muted">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
          <Link
            href={content.action.href}
            className="border-outline bg-surface text-foreground hover:bg-surface-container-high inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg border px-8 text-sm font-semibold transition-colors"
          >
            {content.action.label}
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>

        <div className="mt-12 grid gap-4">
          {content.items.map((item) => (
            <article
              key={`${item.type}-${item.title}`}
              className="border-outline-variant/60 bg-surface-raised grid gap-6 rounded-2xl border p-6 shadow-sm md:grid-cols-[12rem_1fr_auto] md:items-center"
            >
              <div>
                <p className="text-primary text-sm font-semibold tracking-[0.04em] uppercase">
                  {item.date}
                </p>
                <p className="text-muted-foreground mt-2 text-xs font-semibold tracking-[0.14em] uppercase">
                  {item.type}
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-7">{item.description}</p>
                <div className="text-foreground/75 mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  <span>⌖ {item.place}</span>
                  <span>◷ {item.time}</span>
                </div>
              </div>
              <Link href={item.action.href} className="text-primary text-sm font-semibold">
                {item.action.label}
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}

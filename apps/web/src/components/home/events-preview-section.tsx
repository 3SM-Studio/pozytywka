import type {HomePageContent} from '@/lib/content/types'
import {SectionHeader, SectionShell} from './section-header'

type EventsPreviewSectionProps = {
  content: HomePageContent['eventsPreview']
}

export function EventsPreviewSection({content}: EventsPreviewSectionProps) {
  return (
    <SectionShell id="wydarzenia" tone="muted">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <a
          href={content.action.href}
          className="border-border bg-card text-foreground inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border px-6 text-sm font-bold"
        >
          {content.action.label}
        </a>
      </div>

      <div className="mt-12 grid gap-4">
        {content.items.map((item) => (
          <article
            key={`${item.type}-${item.title}`}
            className="border-border bg-card grid gap-6 rounded-3xl border p-6 shadow-sm md:grid-cols-[12rem_1fr_auto] md:items-center"
          >
            <div>
              <p className="text-primary text-sm font-bold">{item.date}</p>
              <p className="text-muted-foreground mt-2 text-xs font-bold tracking-[0.2em] uppercase">
                {item.type}
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-7">{item.description}</p>
              <p className="text-foreground/75 mt-4 text-sm font-semibold">
                {item.place} · {item.time}
              </p>
            </div>
            <a href="#kontakt" className="text-foreground text-sm font-bold">
              Zobacz wydarzenie →
            </a>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

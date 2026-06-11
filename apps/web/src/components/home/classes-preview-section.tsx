import type {HomePageContent} from '@/lib/content/types'
import {SectionHeader, SectionShell} from './section-header'

type ClassesPreviewSectionProps = {
  content: HomePageContent['classesPreview']
}

export function ClassesPreviewSection({content}: ClassesPreviewSectionProps) {
  return (
    <SectionShell id="zajecia">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <a
          href={content.action.href}
          className="bg-ink text-background inline-flex min-h-12 shrink-0 items-center justify-center rounded-full px-6 text-sm font-bold"
        >
          {content.action.label}
        </a>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {content.items.map((item) => (
          <article
            key={item.title}
            className="border-border bg-card rounded-3xl border p-6 shadow-sm"
          >
            <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
              {item.category}
            </p>
            <h3 className="mt-4 font-serif text-3xl font-semibold tracking-tight">{item.title}</h3>
            <p className="text-muted-foreground mt-4 text-sm leading-7">{item.description}</p>
            <dl className="mt-6 grid gap-3 text-sm">
              <div className="bg-muted rounded-2xl p-4">
                <dt className="font-bold">Informacje</dt>
                <dd className="text-muted-foreground mt-1">{item.meta}</dd>
              </div>
              <div className="border-border rounded-2xl border p-4">
                <dt className="font-bold">Zapisy</dt>
                <dd className="text-muted-foreground mt-1">{item.status}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

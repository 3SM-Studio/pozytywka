import type {HomePageContent} from '@/lib/content/types'
import {SectionHeader, SectionShell} from './section-header'

type StageSectionProps = {
  content: HomePageContent['stage']
}

export function StageSection({content}: StageSectionProps) {
  return (
    <SectionShell id="scena">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-5">
          {content.highlights.map((item) => (
            <article
              key={item.type}
              className="border-border bg-card rounded-3xl border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
                {item.type}
              </p>
              <h3 className="mt-4 font-serif text-3xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-muted-foreground mt-4 leading-7">{item.description}</p>
              <a
                href={item.action.href}
                className="text-foreground mt-6 inline-flex text-sm font-bold"
              >
                {item.action.label}
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

import type {HomePageContent} from '@/lib/content/types'
import {SectionHeader, SectionShell} from './section-header'

type StageSectionProps = {
  content: HomePageContent['stage']
}

export function StageSection({content}: StageSectionProps) {
  return (
    <SectionShell id="scena" tone="surface">
      <div className="mb-14">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
      </div>

      <div className="grid items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="bg-surface-container-highest border-outline-variant/60 grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl border shadow-lg md:min-h-[32rem]">
            <p className="text-muted-foreground max-w-xs px-6 text-center text-sm font-semibold tracking-[0.16em] uppercase">
              {content.mediaLabel}
            </p>
          </div>
        </div>

        <div className="grid gap-10 md:col-span-5">
          {content.highlights.map((item) => (
            <article key={item.type} className="flex flex-col items-start">
              <p className="bg-primary-container text-primary-container-foreground rounded-full px-3 py-1 text-sm font-semibold tracking-[0.04em] uppercase">
                {item.type}
              </p>
              <h3 className="text-foreground mt-4 font-serif text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-muted-foreground mt-3 leading-7">{item.description}</p>
              <a
                href={item.action.href}
                className="border-outline hover:bg-surface-container-high mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border px-6 text-sm font-semibold transition-colors"
              >
                {item.action.label}
              </a>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

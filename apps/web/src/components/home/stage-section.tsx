import type {HomePageContent} from '@/lib/content/types'
import {SectionHeader, SectionShell} from '@/components/layout/section-header'

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
          <div className="border-outline-variant/60 bg-inverse-surface relative isolate grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl border shadow-lg md:min-h-[32rem]">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,215,0,0.28),transparent_18rem),linear-gradient(135deg,rgba(255,248,239,0.12),transparent_45%)]" />
            <div className="absolute inset-0 -z-10 bg-black/25" />
            <p className="text-inverse-surface-foreground/75 max-w-xs px-6 text-center text-sm font-semibold tracking-[0.16em] uppercase">
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

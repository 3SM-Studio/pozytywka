import type {CampContent} from '@/lib/content/types'
import {SectionShell} from './section-header'

type CampSectionProps = {
  content: CampContent
}

export function CampSection({content}: CampSectionProps) {
  return (
    <SectionShell id="obozy">
      <div className="border-border bg-card shadow-foreground/5 grid gap-10 rounded-[2rem] border p-6 shadow-xl md:p-10 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-5xl font-semibold tracking-tight md:text-6xl">
            {content.title}
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl text-lg leading-8">
            {content.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={content.primaryAction.href}
              className="bg-primary text-primary-foreground inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold"
            >
              {content.primaryAction.label}
            </a>
            <a
              href={content.secondaryAction.href}
              className="border-border text-foreground inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-bold"
            >
              {content.secondaryAction.label}
            </a>
          </div>
        </div>

        <div className="bg-surface-muted rounded-3xl p-6">
          <h3 className="font-serif text-2xl font-semibold">Szczegóły aktualnej edycji</h3>
          <ul className="mt-6 grid gap-3">
            {content.details.map((detail) => (
              <li key={detail} className="bg-card rounded-2xl px-4 py-4 text-sm font-semibold">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  )
}

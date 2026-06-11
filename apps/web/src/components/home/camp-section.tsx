import type {CampContent} from '@/lib/content/types'
import {SectionShell} from './section-header'

type CampSectionProps = {
  content: CampContent
}

export function CampSection({content}: CampSectionProps) {
  return (
    <SectionShell id="obozy">
      <div className="grid items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="bg-surface-container-highest border-outline-variant/60 grid aspect-video place-items-center overflow-hidden rounded-2xl border shadow-lg md:h-[31rem]">
            <p className="text-muted-foreground max-w-xs px-6 text-center text-sm font-semibold tracking-[0.16em] uppercase">
              {content.mediaLabel}
            </p>
          </div>
        </div>

        <div className="md:col-span-5">
          <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">
            {content.eyebrow}
          </p>
          <h2 className="text-foreground mt-4 font-serif text-5xl leading-tight font-semibold tracking-tight">
            {content.title}
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-8">{content.description}</p>

          <div className="bg-surface-container-low mt-8 rounded-xl p-6">
            <h3 className="text-sm font-semibold tracking-[0.14em] uppercase">
              {content.detailsHeading}
            </h3>
            <ul className="mt-5 grid gap-3">
              {content.details.map((detail) => (
                <li key={detail.label} className="text-muted-foreground flex items-center gap-3">
                  <span aria-hidden="true" className="text-primary font-bold">
                    {detail.icon}
                  </span>
                  <span>{detail.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={content.primaryAction.href}
              className="bg-primary-container text-primary-container-foreground inline-flex min-h-11 items-center justify-center rounded-lg px-8 text-sm font-semibold transition hover:opacity-90"
            >
              {content.primaryAction.label}
            </a>
            <a
              href={content.secondaryAction.href}
              className="border-outline hover:bg-surface-container-high inline-flex min-h-11 items-center justify-center rounded-lg border px-8 text-sm font-semibold transition-colors"
            >
              {content.secondaryAction.label}
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

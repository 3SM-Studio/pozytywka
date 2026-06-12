import type {CampContent} from '@/lib/content/types'
import {SectionShell} from '@/components/layout/section-header'
import Link from 'next/link'

type CampSectionProps = {
  content: CampContent
}

export function CampSection({content}: CampSectionProps) {
  return (
    <SectionShell id="obozy" tone="muted">
      <div className="grid items-center gap-10 md:grid-cols-12">
        <div className="min-w-0 md:col-span-7">
          <div className="border-outline-variant/70 bg-surface-raised/70 relative isolate grid min-h-[352px] w-full min-w-0 place-items-center overflow-hidden rounded-[2rem] border p-4 shadow-2xl md:min-h-[496px]">
            <div className="bg-ink absolute inset-4 -z-10 rounded-[1.5rem]" />
            <div className="absolute inset-4 -z-10 rounded-[1.5rem] bg-[radial-gradient(circle_at_70%_30%,rgba(255,213,74,0.3),transparent_18rem),linear-gradient(135deg,rgba(255,243,215,0.12),transparent_42%)]" />
            <div className="absolute inset-4 -z-10 rounded-[1.5rem] bg-black/20" />
            <p className="text-inverse-surface-foreground/75 max-w-xs px-6 text-center text-sm font-semibold tracking-[0.16em] uppercase">
              {content.mediaLabel}
            </p>
          </div>
        </div>

        <div className="min-w-0 md:col-span-5">
          <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">
            {content.eyebrow}
          </p>
          <h2 className="text-foreground mt-4 font-serif text-5xl leading-tight font-semibold tracking-tight">
            {content.title}
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-8">{content.description}</p>

          <div className="border-outline-variant/60 bg-surface-raised/70 mt-8 rounded-xl border p-6">
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
            <Link
              href={content.primaryAction.href}
              className="bg-primary-container text-primary-container-foreground inline-flex min-h-11 items-center justify-center rounded-lg px-8 text-sm font-semibold transition hover:opacity-90"
            >
              {content.primaryAction.label}
            </Link>
            <Link
              href={content.secondaryAction.href}
              className="border-outline-variant hover:bg-surface-container-high inline-flex min-h-11 items-center justify-center rounded-lg border px-8 text-sm font-semibold transition-colors"
            >
              {content.secondaryAction.label}
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

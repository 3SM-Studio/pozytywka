import type {HomePageContent} from '@/lib/content/types'
import {SectionShell} from '@/components/layout/section-header'

type FinalCtaSectionProps = {
  content: HomePageContent['finalCta']
}

export function FinalCtaSection({content}: FinalCtaSectionProps) {
  return (
    <SectionShell tone="ink">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-5xl leading-tight font-semibold tracking-tight md:text-6xl">
          {content.title}
        </h2>
        <p className="text-inverse-surface-foreground/75 mt-6 text-lg leading-8">
          {content.description}
        </p>
        <p className="text-primary-container mt-4 text-sm font-semibold tracking-[0.14em] uppercase">
          {content.meta}
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={content.primaryAction.href}
            className="bg-primary-container text-primary-container-foreground inline-flex min-h-11 items-center justify-center rounded-lg px-8 text-sm font-semibold transition hover:opacity-90"
          >
            {content.primaryAction.label}
          </a>
          <a
            href={content.secondaryAction.href}
            className="border-inverse-surface-foreground/40 text-inverse-surface-foreground hover:bg-inverse-surface-foreground/10 inline-flex min-h-11 items-center justify-center rounded-lg border px-8 text-sm font-semibold transition-colors"
          >
            {content.secondaryAction.label}
          </a>
        </div>
      </div>
    </SectionShell>
  )
}

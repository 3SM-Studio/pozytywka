import type {HomePageContent} from '@/lib/content/types'
import {SectionShell} from './section-header'

type FinalCtaSectionProps = {
  content: HomePageContent['finalCta']
}

export function FinalCtaSection({content}: FinalCtaSectionProps) {
  return (
    <SectionShell tone="ink">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-primary text-sm font-bold tracking-[0.22em] uppercase">{content.meta}</p>
        <h2 className="mt-5 font-serif text-5xl leading-tight font-semibold tracking-tight md:text-6xl">
          {content.title}
        </h2>
        <p className="text-background/75 mt-6 text-lg leading-8">{content.description}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={content.primaryAction.href}
            className="bg-primary text-primary-foreground inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold"
          >
            {content.primaryAction.label}
          </a>
          <a
            href={content.secondaryAction.href}
            className="border-background/25 text-background inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-bold"
          >
            {content.secondaryAction.label}
          </a>
        </div>
      </div>
    </SectionShell>
  )
}

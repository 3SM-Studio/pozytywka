import type {HeroContent} from '@/lib/content/types'

type HeroSectionProps = {
  content: HeroContent
}

export function HeroSection({content}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="bg-surface-container-highest relative flex min-h-[80vh] items-center overflow-hidden px-5"
    >
      <div className="absolute inset-0 z-0">
        <div className="from-inverse-surface via-foreground to-primary h-full w-full bg-gradient-to-br" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 grid place-items-center p-8 text-center">
          <p className="max-w-xs rounded-lg border border-white/25 bg-black/25 px-5 py-4 text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">
            {content.mediaLabel}
          </p>
        </div>
      </div>

      <div className="w-container py-section relative z-10 mx-auto">
        <div className="bg-surface/90 max-w-2xl rounded-xl p-8 shadow-lg backdrop-blur-sm md:p-12">
          <h1 className="text-foreground font-serif text-[2.5rem] leading-[1.15] font-bold tracking-[-0.015em] md:text-[4rem] md:leading-[1.08]">
            {content.title}
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-8">{content.description}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={content.primaryAction.href}
              className="bg-inverse-surface text-inverse-surface-foreground hover:bg-primary hover:text-primary-foreground inline-flex min-h-11 items-center justify-center rounded-lg px-8 text-sm font-semibold transition-colors"
            >
              {content.primaryAction.label}
            </a>
            <a
              href={content.secondaryAction.href}
              className="border-outline bg-surface text-foreground hover:bg-surface-container-high inline-flex min-h-11 items-center justify-center rounded-lg border px-8 text-sm font-semibold transition-colors"
            >
              {content.secondaryAction.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

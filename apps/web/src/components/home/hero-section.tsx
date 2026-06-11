import type {HeroContent} from '@/lib/content/types'

type HeroSectionProps = {
  content: HeroContent
}

export function HeroSection({content}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="bg-inverse-surface text-inverse-surface-foreground relative isolate flex min-h-[78vh] items-center overflow-hidden px-5 py-20 md:min-h-[80vh]"
    >
      <div className="absolute inset-0 -z-10">
        <div className="from-inverse-surface via-ink to-primary h-full w-full bg-gradient-to-br" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(255,215,0,0.35),transparent_24rem),radial-gradient(circle_at_24%_78%,rgba(255,248,239,0.16),transparent_28rem)]" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/35 to-transparent" />
      </div>

      <div className="w-container relative z-10 mx-auto flex min-h-[58vh] items-center">
        <div className="bg-surface text-foreground max-w-2xl rounded-2xl p-8 shadow-2xl md:p-12 lg:p-14">
          <h1 className="font-serif text-[2.65rem] leading-[1.08] font-bold tracking-[-0.025em] md:text-[4.25rem] md:leading-[1.02]">
            {content.title}
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-8">
            {content.description}
          </p>
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

      <div className="border-inverse-surface-foreground/25 text-inverse-surface-foreground/75 absolute right-[8%] bottom-[18%] hidden max-w-[18rem] rounded-xl border bg-black/20 px-6 py-5 text-center text-xs font-semibold tracking-[0.18em] uppercase backdrop-blur-sm lg:block">
        {content.mediaLabel}
      </div>
    </section>
  )
}

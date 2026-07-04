import type {HeroContent} from '@/lib/content/types'
import {Section} from '@/components/layout/section'
import {LinkButton} from '@/components/ui/link-button'

type HeroSectionProps = {
  content: HeroContent
}

export function HeroSection({content}: HeroSectionProps) {
  const headingId = 'home-hero-heading'

  return (
    <Section
      id="top"
      labelledBy={headingId}
      className="bg-background text-foreground relative isolate overflow-hidden px-5 py-20 md:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="from-surface-container-low via-background to-surface dark:from-ink h-full w-full bg-gradient-to-br" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,215,0,0.24),transparent_26rem),radial-gradient(circle_at_18%_80%,rgba(112,93,0,0.08),transparent_28rem)] dark:bg-[radial-gradient(circle_at_78%_18%,rgba(255,213,74,0.24),transparent_26rem),radial-gradient(circle_at_18%_80%,rgba(255,184,77,0.12),transparent_28rem)]" />
        <div className="from-background absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t to-transparent" />
      </div>

      <div className="w-container relative z-10 mx-auto grid min-h-[68vh] items-center gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:gap-12">
        <div className="max-w-3xl min-w-0">
          <p className="text-primary mb-5 text-sm font-bold tracking-[0.14em] uppercase sm:tracking-[0.18em]">
            Pozytywka — Pracownia Twórcza
          </p>
          <h1
            id={headingId}
            className="max-w-[11ch] font-serif text-[clamp(2.75rem,9vw,4.5rem)] leading-[1.03] font-bold tracking-tight xl:text-[clamp(4.5rem,5.6vw,5.6rem)]"
          >
            {content.title}
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8 md:text-xl md:leading-9">
            {content.description}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <LinkButton
              href={content.primaryAction.href}
              variant="brand"
              size="lg"
              className="shadow-[0_18px_38px_rgba(255,213,74,0.18)]"
            >
              {content.primaryAction.label}
            </LinkButton>
            <LinkButton
              href={content.secondaryAction.href}
              variant="outline"
              size="lg"
              className="border-outline bg-surface-raised text-foreground font-bold"
            >
              {content.secondaryAction.label}
            </LinkButton>
          </div>
        </div>

        <div className="relative min-h-[24rem] w-full max-w-full min-w-0 sm:min-h-[28rem] xl:min-h-[36rem]">
          <div className="border-outline-variant/70 bg-surface-raised/70 absolute inset-0 overflow-hidden rounded-[2rem] border p-4 shadow-2xl backdrop-blur">
            <div className="bg-ink relative grid h-full place-items-center overflow-hidden rounded-[1.5rem]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_68%_22%,rgba(255,213,74,0.34),transparent_18rem),linear-gradient(135deg,rgba(255,243,215,0.12),transparent_44%)]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-black/20" />
              <p className="text-inverse-surface-foreground/75 relative max-w-xs px-6 text-center text-sm font-semibold tracking-[0.18em] uppercase">
                {content.mediaLabel}
              </p>
            </div>
          </div>

          <div className="border-outline-variant/70 bg-surface-raised/90 absolute right-6 bottom-6 left-6 rounded-2xl border p-5 shadow-2xl backdrop-blur sm:left-auto sm:w-72">
            <p className="text-primary text-xs font-bold tracking-[0.14em] uppercase">
              Teatr • Muzyka • Ruch
            </p>
            <p className="text-muted-foreground mt-2 text-sm leading-6">
              Twórcze działania, zajęcia i sceniczne doświadczenia w jednym miejscu.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

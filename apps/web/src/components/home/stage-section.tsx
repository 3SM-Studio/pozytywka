import type {HomePageContent} from '@/lib/content/types'
import {Container} from '@/components/layout/container'
import {SectionHeader} from '@/components/layout/section-header'
import {Section} from '@/components/layout/section'
import {AppLink} from '@/components/ui/app-link'

type StageSectionProps = {
  content: HomePageContent['stage']
}

export function StageSection({content}: StageSectionProps) {
  const headingId = 'home-stage-heading'

  return (
    <Section id="scena" labelledBy={headingId} tone="surface">
      <Container>
        <div className="mb-14">
          <SectionHeader
            id={headingId}
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </div>

        <div className="grid min-w-0 items-center gap-10 xl:grid-cols-12">
          <div className="min-w-0 xl:col-span-7">
            <div className="border-outline-variant/60 bg-inverse-surface relative isolate grid aspect-[4/3] w-full max-w-full place-items-center overflow-hidden rounded-2xl border shadow-lg sm:min-h-[28rem] xl:min-h-[32rem]">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,215,0,0.28),transparent_18rem),linear-gradient(135deg,rgba(255,248,239,0.12),transparent_45%)]"
              />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/25" />
              <p className="text-inverse-surface-foreground/75 max-w-xs px-6 text-center text-sm font-semibold tracking-[0.16em] uppercase">
                {content.mediaLabel}
              </p>
            </div>
          </div>

          <div className="grid min-w-0 gap-10 xl:col-span-5">
            {content.highlights.map((item) => (
              <article key={item.id} className="flex min-w-0 flex-col items-start">
                <p className="bg-primary-container text-primary-container-foreground rounded-full px-3 py-1 text-sm font-bold tracking-[0.04em] uppercase shadow-[0_0_0_1px_rgba(49,42,20,0.08)]">
                  {item.type}
                </p>
                <h3 className="text-foreground mt-4 font-serif text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-3 leading-7">{item.description}</p>
                <AppLink
                  href={item.action.href}
                  className="border-outline text-foreground hover:bg-surface-container-high mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border px-6 text-sm font-bold transition-colors"
                >
                  {item.action.label}
                </AppLink>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

import type {HeroContent} from '@/lib/content/types'

type HeroSectionProps = {
  content: HeroContent
}

export function HeroSection({content}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="bg-surface-muted relative isolate overflow-hidden px-4 py-20 md:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,var(--primary),transparent_20rem)] opacity-35" />
      <div className="w-container mx-auto grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-primary text-sm font-bold tracking-[0.24em] uppercase">
            {content.eyebrow}
          </p>
          <h1 className="text-foreground mt-6 max-w-4xl font-serif text-5xl leading-[1.05] font-bold tracking-tight md:text-7xl">
            {content.title}
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8 md:text-xl">
            {content.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={content.primaryAction.href}
              className="bg-primary text-primary-foreground inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {content.primaryAction.label}
            </a>
            <a
              href={content.secondaryAction.href}
              className="border-border bg-card text-foreground inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-bold transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {content.secondaryAction.label}
            </a>
          </div>
        </div>

        <div className="border-border bg-card shadow-foreground/10 rounded-[2rem] border p-4 shadow-2xl">
          <div className="from-primary via-surface-muted to-card min-h-[28rem] rounded-[1.5rem] bg-gradient-to-br p-6">
            <div className="bg-background/70 flex h-full min-h-[26rem] flex-col justify-between rounded-[1.25rem] border border-white/55 p-6 backdrop-blur">
              <div>
                <p className="text-foreground/65 text-sm font-bold tracking-[0.18em] uppercase">
                  Aktualny komunikat
                </p>
                <p className="mt-4 font-serif text-4xl leading-tight font-semibold">
                  Program i zapisy zostaną potwierdzone w CMS.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {content.highlights.map((item) => (
                  <span
                    key={item}
                    className="border-border bg-card/75 text-foreground rounded-full border px-4 py-3 text-sm font-bold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

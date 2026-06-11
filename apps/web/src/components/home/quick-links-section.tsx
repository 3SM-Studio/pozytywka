import type {QuickLink} from '@/lib/content/types'

type QuickLinksSectionProps = {
  items: QuickLink[]
}

export function QuickLinksSection({items}: QuickLinksSectionProps) {
  return (
    <section aria-label="Szybkie ścieżki" className="bg-background px-4 py-10">
      <div className="w-container mx-auto grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <a
            key={item.eyebrow}
            href={item.href}
            className="group border-border bg-card rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-primary text-sm font-bold tracking-[0.18em] uppercase">
              {item.eyebrow}
            </p>
            <p className="text-muted-foreground mt-4 text-base leading-7">{item.description}</p>
            <span className="text-foreground mt-6 inline-flex items-center gap-2 text-sm font-bold">
              {item.label}
              <span aria-hidden="true" className="transition group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

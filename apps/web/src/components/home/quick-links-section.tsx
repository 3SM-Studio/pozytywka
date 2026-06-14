import type {QuickLink} from '@/lib/content/types'
import {Container} from '@/components/layout/container'
import {Section} from '@/components/layout/section'
import {AppLink} from '@/components/ui/app-link'

type QuickLinksSectionProps = {
  items: QuickLink[]
}

export function QuickLinksSection({items}: QuickLinksSectionProps) {
  const headingId = 'home-quick-links-heading'

  return (
    <Section labelledBy={headingId} className="px-5 py-16">
      <Container className="grid gap-4 px-0 md:grid-cols-3">
        <h2 id={headingId} className="sr-only">
          Szybkie ścieżki
        </h2>
        {items.map((item) => (
          <AppLink
            key={item.id}
            href={item.href}
            className="group border-outline-variant/70 bg-surface-raised hover:bg-surface-container-low grid gap-4 rounded-2xl border p-6 shadow-sm transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-2xl font-semibold tracking-tight">{item.eyebrow}</h3>
              <span
                aria-hidden="true"
                className="bg-primary-container text-primary-container-foreground grid size-10 shrink-0 place-items-center rounded-full text-lg font-bold"
              >
                {item.icon}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-7">{item.description}</p>
            <span className="text-primary inline-flex items-center gap-2 text-sm font-semibold">
              {item.label}
              <span aria-hidden="true" className="transition group-hover:translate-x-1">
                →
              </span>
            </span>
          </AppLink>
        ))}
      </Container>
    </Section>
  )
}

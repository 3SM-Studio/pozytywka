import {Container} from '@/components/layout/container'
import {Section} from '@/components/layout/section'
import {SectionHeader} from '@/components/layout/section-header'
import {LinkButton} from '@/components/ui/link-button'
import {formatAgeRange} from '@/lib/content/display'
import {fallbackGroups} from '@/lib/content/seed'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Zespoły',
  description: 'Grupy teatralne, wokalno-taneczne, musicalowe i taneczne Pozytywki.',
  alternates: {
    canonical: '/zespoly',
  },
  openGraph: {
    title: 'Zespoły | Pozytywka',
    description: 'Grupy teatralne, wokalno-taneczne, musicalowe i taneczne Pozytywki.',
    url: '/zespoly',
  },
}

export default function GroupsPage() {
  const headingId = 'groups-heading'

  return (
    <Section labelledBy={headingId}>
      <Container>
        <SectionHeader
          id={headingId}
          eyebrow="Zespoły"
          title="Regularne grupy Pozytywki"
          description="Fallback pokazuje strukturę pod CMS: grupy wokalno-taneczne, teatralne, musicalowe, baletowe, taneczne i acrodance."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {fallbackGroups.map((group) => (
            <article
              key={group.slug}
              className="border-outline-variant/60 bg-surface-raised rounded-2xl border p-6 shadow-sm"
            >
              <p className="text-primary text-xs font-semibold tracking-[0.14em] uppercase">
                {group.categoryLabel}
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight">
                {group.title}
              </h2>
              <p className="text-muted-foreground mt-3 text-sm leading-7">{group.description}</p>
              <div className="bg-surface-container-low mt-5 rounded-xl p-4 text-sm">
                <p className="font-semibold">Dla kogo</p>
                <p className="text-muted-foreground mt-1 leading-6">
                  {formatAgeRange(group.ageRange)}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <LinkButton href="/kontakt" variant="inverse">
            Zapytaj o nabór
          </LinkButton>
        </div>
      </Container>
    </Section>
  )
}

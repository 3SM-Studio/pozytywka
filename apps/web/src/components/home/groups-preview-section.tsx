import {Container} from '@/components/layout/container'
import {Section} from '@/components/layout/section'
import {SectionHeader} from '@/components/layout/section-header'
import {AppLink} from '@/components/ui/app-link'
import {LinkButton} from '@/components/ui/link-button'
import type {HomePageContent} from '@/lib/content/types'

type GroupsPreviewSectionProps = {
  content: HomePageContent['groupsPreview']
}

export function GroupsPreviewSection({content}: GroupsPreviewSectionProps) {
  const headingId = 'home-groups-heading'

  return (
    <Section labelledBy={headingId}>
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            id={headingId}
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
          <LinkButton href={content.action.href} variant="surfaceOutline" size="wide">
            {content.action.label}
          </LinkButton>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {content.items.map((group) => (
            <article
              key={group.slug}
              className="border-outline-variant/60 bg-surface-raised rounded-2xl border p-6 shadow-sm"
            >
              <p className="text-primary text-xs font-semibold tracking-[0.14em] uppercase">
                {group.categoryLabel}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold">{group.title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-7">{group.summary}</p>
              <AppLink
                href="/zespoly"
                className="text-primary mt-5 inline-flex text-sm font-semibold"
              >
                Zobacz zespoły
              </AppLink>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}

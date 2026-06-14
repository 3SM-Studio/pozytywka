import {Container} from '@/components/layout/container'
import {SectionHeader} from '@/components/layout/section-header'
import {Section} from '@/components/layout/section'
import {LinkButton} from '@/components/ui/link-button'
import {classStatusLabel, formatClassInfo} from '@/lib/content/display'
import {getActivitiesContent} from '@/lib/content/get-activities-content'
import {getActivityHref} from '@/lib/content/routes'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Zajęcia',
  description: 'Lista zajęć Pozytywki przygotowana na bazie lokalnych danych.',
  alternates: {
    canonical: '/zajecia',
  },
  openGraph: {
    title: 'Zajęcia | Pozytywka',
    description: 'Lista zajęć Pozytywki przygotowana na bazie lokalnych danych.',
    url: '/zajecia',
  },
}

export default async function ActivitiesPage() {
  const content = await getActivitiesContent()
  const headingId = 'activities-heading'

  return (
    <Section labelledBy={headingId}>
      <Container>
        <SectionHeader
          id={headingId}
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {content.items.map((activity) => (
            <article
              key={activity.id}
              className="border-outline-variant/60 bg-surface-raised flex flex-col rounded-2xl border p-6 shadow-sm"
            >
              <p className="text-primary text-xs font-semibold tracking-[0.14em] uppercase">
                {activity.category}
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight">
                {activity.title}
              </h2>
              <p className="text-muted-foreground mt-3 text-sm leading-7">{activity.description}</p>
              <div className="bg-surface-container-low mt-5 rounded-xl p-4 text-sm">
                <p className="font-semibold">Info</p>
                <p className="text-muted-foreground mt-1 leading-6">{formatClassInfo(activity)}</p>
              </div>
              <p className="text-primary mt-4 text-sm font-semibold">
                {classStatusLabel[activity.status]}
              </p>
              <LinkButton
                href={getActivityHref(activity.slug)}
                variant="outline"
                className="mt-6 w-fit"
              >
                Zobacz szczegóły
              </LinkButton>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}

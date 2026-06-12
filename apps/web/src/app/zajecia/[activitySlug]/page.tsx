import {Container} from '@/components/layout/container'
import {Section} from '@/components/layout/section'
import {LinkButton} from '@/components/ui/link-button'
import {classStatusLabel, formatAgeRange} from '@/lib/content/display'
import {getActivitiesContent, getActivityBySlug} from '@/lib/content/get-activities-content'
import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

type ActivityPageProps = {
  params: Promise<{
    activitySlug: string
  }>
}

function withPendingLabel(value: string) {
  return `${value} — do potwierdzenia`
}

export async function generateStaticParams() {
  const content = await getActivitiesContent()

  return content.items.map((activity) => ({
    activitySlug: activity.slug,
  }))
}

export async function generateMetadata({params}: ActivityPageProps): Promise<Metadata> {
  const {activitySlug} = await params
  const activity = await getActivityBySlug(activitySlug)

  if (!activity) {
    return {
      title: 'Zajęcia',
    }
  }

  return {
    title: activity.title,
    description: activity.description,
    alternates: {
      canonical: `/zajecia/${activity.slug}`,
    },
    openGraph: {
      title: `${activity.title} | Pozytywka`,
      description: activity.description,
      url: `/zajecia/${activity.slug}`,
    },
  }
}

export default async function ActivityPage({params}: ActivityPageProps) {
  const {activitySlug} = await params
  const activity = await getActivityBySlug(activitySlug)
  const headingId = 'activity-detail-heading'

  if (!activity) {
    notFound()
  }

  return (
    <Section labelledBy={headingId}>
      <Container>
        <div className="max-w-3xl">
          <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">
            {activity.category}
          </p>
          <h1 id={headingId} className="font-display mt-4 text-4xl font-bold md:text-6xl">
            {activity.title}
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-8">{activity.description}</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <DetailItem label="Wiek" value={formatAgeRange(activity.ageRange)} />
          <DetailItem label="Termin" value={withPendingLabel(activity.scheduleSummary)} />
          <DetailItem label="Lokalizacja" value={withPendingLabel(activity.locationSummary)} />
          <DetailItem label="Status zapisów" value={classStatusLabel[activity.status]} />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <LinkButton href="/kontakt" variant="inverse">
            Skontaktuj się
          </LinkButton>
          <LinkButton href="/zajecia" variant="outline">
            Wróć do zajęć
          </LinkButton>
        </div>
      </Container>
    </Section>
  )
}

function DetailItem({label, value}: {label: string; value: string}) {
  return (
    <div className="border-outline-variant/60 bg-surface-raised rounded-2xl border p-5">
      <p className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
        {label}
      </p>
      <p className="mt-2 font-semibold">{value}</p>
    </div>
  )
}

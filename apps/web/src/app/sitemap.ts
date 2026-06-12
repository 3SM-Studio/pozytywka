import {siteRoutes} from '@/lib/content/routes'
import {getActivitiesContent} from '@/lib/content/get-activities-content'
import {getEventsContent} from '@/lib/content/get-events-content'
import {absoluteUrl} from '@/lib/site-url'
import type {MetadataRoute} from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()
  const [activities, events] = await Promise.all([getActivitiesContent(), getEventsContent()])

  return [
    ...siteRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...activities.items.map((activity) => ({
      url: absoluteUrl(`/zajecia/${activity.slug}`),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...events.items.map((event) => ({
      url: absoluteUrl(`/wydarzenia/${event.slug}`),
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}

import {homePageContent} from '@/lib/content/home-page'
import type {EventPreview} from '@/lib/content/types'

export type EventListItem = EventPreview & {
  slug: string
}

export type EventsContent = {
  eyebrow: string
  title: string
  description: string
  items: EventListItem[]
}

function hasEventSlug(event: EventPreview): event is EventListItem {
  return typeof event.slug === 'string' && event.slug.length > 0
}

export async function getEventsContent(): Promise<EventsContent> {
  return {
    eyebrow: homePageContent.eventsPreview.eyebrow,
    title: homePageContent.eventsPreview.title,
    description: homePageContent.eventsPreview.description,
    items: homePageContent.eventsPreview.items.filter(hasEventSlug),
  }
}

export async function getEventBySlug(slug: string) {
  const content = await getEventsContent()

  return content.items.find((event) => event.slug === slug)
}

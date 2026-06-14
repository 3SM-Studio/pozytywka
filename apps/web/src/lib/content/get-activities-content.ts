import {homePageContent} from '@/lib/content/home-page'
import type {ClassPreview} from '@/lib/content/types'

export type ActivityPreview = ClassPreview & {
  slug: string
}

function hasActivitySlug(activity: ClassPreview): activity is ActivityPreview {
  return typeof activity.slug === 'string' && activity.slug.length > 0
}

export async function getActivitiesContent() {
  return {
    eyebrow: homePageContent.classesPreview.eyebrow,
    title: homePageContent.classesPreview.title,
    description: homePageContent.classesPreview.description,
    items: homePageContent.classesPreview.items.filter(hasActivitySlug),
  }
}

export async function getActivityBySlug(slug: string) {
  const content = await getActivitiesContent()

  return content.items.find((activity) => activity.slug === slug)
}

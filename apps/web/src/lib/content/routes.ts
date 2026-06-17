import type {MetadataRoute, Route} from 'next'
import type {AppHref} from '@/lib/content/types'

export type SiteRoute = {
  path: AppHref
  label: string
  title: string
  description: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

export const siteRoutes = [
  {
    path: '/',
    label: 'Strona główna',
    title: 'Pozytywka — Pracownia Twórcza',
    description:
      'Teatr, muzyka, ruch, spektakle i artystyczne działania dla dzieci, młodzieży i dorosłych.',
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    path: '/kontakt',
    label: 'Kontakt',
    title: 'Kontakt',
    description: 'Informacje o kontakcie z Pozytywką.',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    path: '/zajecia',
    label: 'Zajęcia',
    title: 'Zajęcia',
    description: 'Obszary zajęć planowane w Pozytywce.',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    path: '/wydarzenia',
    label: 'Wydarzenia',
    title: 'Wydarzenia',
    description: 'Wydarzenia i działania sceniczne Pozytywki.',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
] satisfies SiteRoute[]

export const homeAnchors = {
  classes: '/zajecia',
  stage: '/',
  events: '/wydarzenia',
  camp: '/kontakt',
  about: '/',
} as const

export function getActivityHref(slug: string): Route {
  return `/zajecia/${slug}` as Route
}

export function getEventHref(slug: string): Route {
  return `/wydarzenia/${slug}` as Route
}

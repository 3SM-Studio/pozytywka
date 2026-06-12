import type {MetadataRoute} from 'next'

export type SiteRoute = {
  path: string
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
    description:
      'Miejsce na potwierdzone dane kontaktowe Pozytywki, zanim zostanie podłączony formularz i Sanity.',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
] satisfies SiteRoute[]

export const homeAnchors = {
  classes: '/#zajecia',
  stage: '/#scena',
  events: '/#wydarzenia',
  camp: '/#obozy',
  about: '/#o-pozytywce',
} as const

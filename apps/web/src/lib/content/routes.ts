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
  {
    path: '/zajecia',
    label: 'Zajęcia',
    title: 'Zajęcia',
    description: 'Lista zajęć Pozytywki przygotowana pod przyszłe treści z Sanity.',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    path: '/wydarzenia',
    label: 'Wydarzenia',
    title: 'Wydarzenia',
    description: 'Lista wydarzeń Pozytywki przygotowana pod przyszłe treści z Sanity.',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
] satisfies SiteRoute[]

export const homeAnchors = {
  classes: '/#zajecia',
  stage: '/#scena',
  events: '/#wydarzenia',
  camp: '/#obozy',
  about: '/#o-pozytywce',
} as const

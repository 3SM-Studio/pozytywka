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
  {
    path: '/zespoly',
    label: 'Zespoły',
    title: 'Zespoły',
    description: 'Grupy teatralne, wokalno-taneczne, musicalowe i taneczne Pozytywki.',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    path: '/spektakle',
    label: 'Spektakle',
    title: 'Spektakle',
    description: 'Projekty sceniczne, spektakle, musicale i prezentacje Pozytywki.',
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    path: '/obozy',
    label: 'Obozy',
    title: 'Obozy',
    description: 'Pozytywne Lato i zapytania o artystyczno-rekreacyjne obozy Pozytywki.',
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    path: '/o-pozytywce',
    label: 'O Pozytywce',
    title: 'O Pozytywce',
    description: 'Podejście Pozytywki, Iwona Pilarz, scena, wspólnota i twórcza praca.',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
] satisfies SiteRoute[]

export const homeAnchors = {
  classes: '/zajecia',
  groups: '/zespoly',
  stage: '/spektakle',
  events: '/spektakle',
  camp: '/obozy',
  about: '/o-pozytywce',
} as const

export function getActivityHref(slug: string): Route {
  return `/zajecia/${slug}` as Route
}

export function getEventHref(slug: string): Route {
  return `/spektakle/${slug}` as Route
}

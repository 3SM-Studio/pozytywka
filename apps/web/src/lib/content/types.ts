import type {Route} from 'next'

export type InternalHref = Route

export type ExternalHref =
  | `http://${string}`
  | `https://${string}`
  | `mailto:${string}`
  | `tel:${string}`

export type AppHref = InternalHref | ExternalHref

export type LinkTarget = {
  label: string
  href: AppHref
}

export type NavigationItem = LinkTarget

export type AnnouncementContent = {
  message: string
  action: LinkTarget
}

export type HeroContent = {
  title: string
  description: string
  primaryAction: LinkTarget
  secondaryAction: LinkTarget
  mediaLabel: string
}

export type QuickLink = LinkTarget & {
  id: string
  description: string
  eyebrow: string
  icon: string
}

export type StageHighlight = {
  id: string
  type: string
  title: string
  description: string
  action: LinkTarget
}

export type CreativeArea = {
  id: string
  title: string
  description: string
  icon: string
}

export type ClassPreview = {
  id: string
  slug?: string
  category: string
  title: string
  description: string
  ageRange: {
    from: number
    to?: number
  }
  scheduleSummary: string
  locationSummary: string
  status: 'open' | 'waitlist' | 'closed' | 'planned'
  imageLabel: string
  action: LinkTarget
}

export type EventPreview = {
  id: string
  slug?: string
  startsAt?: string
  dateLabel: string
  timeLabel?: string
  locationSummary: string
  status: 'scheduled' | 'cancelled' | 'past' | 'planned'
  type: string
  title: string
  description: string
  action: LinkTarget
}

export type CampDetail = {
  id: string
  icon: string
  label: string
}

export type CampContent = {
  eyebrow: string
  title: string
  description: string
  mediaLabel: string
  detailsHeading: string
  details: CampDetail[]
  primaryAction: LinkTarget
  secondaryAction: LinkTarget
}

export type TeamMember = {
  id: string
  name: string
  role: string
  description: string
  portraitLabel: string
}

export type Testimonial = {
  id: string
  quote: string
  author: string
  caption: string
}

export type FooterLinkGroup = {
  title: string
  links: LinkTarget[]
}

export type FooterContent = {
  description: string
  contact: string[]
  social: LinkTarget[]
  legal: LinkTarget[]
  groups: FooterLinkGroup[]
}

export type SiteContent = {
  announcement: AnnouncementContent
  navigation: NavigationItem[]
  footer: FooterContent
}

export type HomePageContent = {
  hero: HeroContent
  quickLinks: QuickLink[]
  stage: {
    eyebrow: string
    title: string
    description: string
    mediaLabel: string
    highlights: StageHighlight[]
  }
  creativeAreas: {
    title: string
    description: string
    items: CreativeArea[]
  }
  classesPreview: {
    eyebrow: string
    title: string
    description: string
    action: LinkTarget
    items: ClassPreview[]
  }
  eventsPreview: {
    eyebrow: string
    title: string
    description: string
    action: LinkTarget
    items: EventPreview[]
  }
  camp: CampContent
  team: {
    eyebrow: string
    title: string
    description: string
    featured: TeamMember
    action: LinkTarget
    members: TeamMember[]
  }
  testimonials: {
    eyebrow: string
    title: string
    description: string
    items: Testimonial[]
  }
  finalCta: {
    title: string
    description: string
    meta: string
    primaryAction: LinkTarget
    secondaryAction: LinkTarget
  }
}

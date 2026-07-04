import type {Route} from 'next'

export type InternalHref = Route

export type ExternalHref =
  | `http://${string}`
  | `https://${string}`
  | `mailto:${string}`
  | `tel:${string}`

export type AppHref = InternalHref | ExternalHref

export type SourceStatus = 'client-confirmed' | 'public-source' | 'draft'

export type SourceMeta = {
  sourceStatus: SourceStatus
  sourceNote: string
}

export type SeoFields = {
  seoTitle: string
  seoDescription: string
}

export type SlugFields = {
  slug: string
}

export type PublishableDocument = SourceMeta &
  SeoFields &
  SlugFields & {
    title: string
    isPublished: boolean
  }

export type LinkTarget = {
  id: string
  label: string
  href: AppHref
}

export type Cta = LinkTarget & {
  description?: string
}

export type ImageWithAlt = {
  alt: string
  label: string
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

export type AgeRange =
  | {
      kind: 'known'
      from: number
      to?: number
    }
  | {
      kind: 'unknown'
      label: string
    }
  | {
      kind: 'descriptive'
      label: string
    }

export type ActivityDocument = PublishableDocument & {
  category: 'teatr' | 'muzyka' | 'taniec' | 'animacje' | 'warsztaty'
  categoryLabel: string
  summary: string
  description: string
  ageRange: AgeRange
  scheduleSummary?: string
  locationSummary?: string
  status: 'open' | 'waitlist' | 'closed' | 'enquiry' | 'planned'
  image: ImageWithAlt
  tags: string[]
}

export type GroupDocument = PublishableDocument & {
  category: 'wokalno-taneczna' | 'teatralna' | 'musicalowa' | 'taniec'
  categoryLabel: string
  summary: string
  description: string
  ageRange: AgeRange
  status: 'open' | 'waitlist' | 'enquiry'
  relatedActivitySlugs: string[]
}

export type ShowDocument = PublishableDocument & {
  type: 'spektakl' | 'musical' | 'koncert' | 'projekt-sceniczny'
  typeLabel: string
  summary: string
  description: string
  startsAt?: string
  dateLabel?: string
  timeLabel?: string
  locationSummary?: string
  status: 'scheduled' | 'cancelled' | 'past' | 'planned' | 'enquiry'
}

export type CampDocument = PublishableDocument & {
  season: string
  summary: string
  description: string
  details: CampDetail[]
  status: 'enquiry' | 'open' | 'waitlist' | 'closed'
  primaryAction: LinkTarget
  secondaryAction: LinkTarget
}

export type PersonDocument = PublishableDocument & {
  name: string
  role: string
  summary: string
  description: string
  portrait: ImageWithAlt
}

export type TestimonialDocument = PublishableDocument & {
  quote: string
  author: string
  caption: string
  verified: boolean
}

export type LegalPageDocument = PublishableDocument & {
  body: string[]
}

export type SiteSettingsDocument = SourceMeta &
  SeoFields & {
    title: string
    isPublished: boolean
    navigation: NavigationItem[]
    footer: FooterContent
  }

export type HomePageDocument = SourceMeta &
  SeoFields & {
    title: string
    isPublished: boolean
    sections: HomePageContent
  }

export type ClassPreview = {
  id: string
  slug?: string
  category: string
  title: string
  description: string
  ageRange: AgeRange
  scheduleSummary?: string
  locationSummary?: string
  status: ActivityDocument['status']
  imageLabel: string
  action: LinkTarget
}

export type EventPreview = {
  id: string
  slug?: string
  startsAt?: string
  dateLabel?: string
  timeLabel?: string
  locationSummary?: string
  status: ShowDocument['status']
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
  verified: boolean
  quote: string
  author: string
  caption: string
}

export type FooterLinkGroup = {
  id: string
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
  groupsPreview: {
    eyebrow: string
    title: string
    description: string
    action: LinkTarget
    items: GroupDocument[]
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

export type AboutPageContent = {
  eyebrow: string
  title: string
  description: string
  pillars: CreativeArea[]
  featuredPerson: PersonDocument
}

export type ContactPageContent = {
  eyebrow: string
  title: string
  description: string
  contactMethods: LinkTarget[]
  notes: string[]
}

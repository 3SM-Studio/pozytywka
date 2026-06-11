export type LinkTarget = {
  label: string
  href: string
}

export type NavigationItem = LinkTarget

export type HeroContent = {
  eyebrow: string
  title: string
  description: string
  primaryAction: LinkTarget
  secondaryAction: LinkTarget
  highlights: string[]
}

export type QuickLink = LinkTarget & {
  description: string
  eyebrow: string
}

export type StageHighlight = {
  type: string
  title: string
  description: string
  action: LinkTarget
}

export type CreativeArea = {
  title: string
  description: string
}

export type ClassPreview = {
  category: string
  title: string
  description: string
  meta: string
  status: string
}

export type EventPreview = {
  date: string
  type: string
  title: string
  description: string
  place: string
  time: string
}

export type CampContent = {
  eyebrow: string
  title: string
  description: string
  details: string[]
  primaryAction: LinkTarget
  secondaryAction: LinkTarget
}

export type TeamMember = {
  name: string
  role: string
  description: string
}

export type Testimonial = {
  quote: string
  author: string
  caption: string
}

export type HomePageContent = {
  navigation: NavigationItem[]
  hero: HeroContent
  quickLinks: QuickLink[]
  stage: {
    eyebrow: string
    title: string
    description: string
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
    members: TeamMember[]
    action: LinkTarget
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
  footer: {
    description: string
    contact: string[]
  }
}

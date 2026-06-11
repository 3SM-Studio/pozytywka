export type LinkTarget = {
  label: string
  href: string
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
  description: string
  eyebrow: string
  icon: string
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
  icon: string
}

export type ClassPreview = {
  category: string
  title: string
  description: string
  meta: string
  status: string
  imageLabel: string
  action: LinkTarget
}

export type EventPreview = {
  date: string
  type: string
  title: string
  description: string
  place: string
  time: string
  action: LinkTarget
}

export type CampDetail = {
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
  name: string
  role: string
  description: string
  portraitLabel: string
}

export type Testimonial = {
  quote: string
  author: string
  caption: string
}

export type FooterLinkGroup = {
  title: string
  links: LinkTarget[]
}

export type HomePageContent = {
  announcement: AnnouncementContent
  navigation: NavigationItem[]
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
  footer: {
    description: string
    contact: string[]
    social: LinkTarget[]
    legal: LinkTarget[]
    groups: FooterLinkGroup[]
  }
}

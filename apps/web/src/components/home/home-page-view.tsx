import {CampSection} from '@/components/home/camp-section'
import {ClassesPreviewSection} from '@/components/home/classes-preview-section'
import {CreativeAreasSection} from '@/components/home/creative-areas-section'
import {EventsPreviewSection} from '@/components/home/events-preview-section'
import {FinalCtaSection} from '@/components/home/final-cta-section'
import {HeroSection} from '@/components/home/hero-section'
import {QuickLinksSection} from '@/components/home/quick-links-section'
import {StageSection} from '@/components/home/stage-section'
import {TeamPreviewSection} from '@/components/home/team-preview-section'
import {TestimonialsSection} from '@/components/home/testimonials-section'
import type {HomePageContent} from '@/lib/content/types'

type HomePageViewProps = {
  content: HomePageContent
}

export function HomePageView({content}: HomePageViewProps) {
  return (
    <>
      <HeroSection content={content.hero} />
      <QuickLinksSection items={content.quickLinks} />
      <StageSection content={content.stage} />
      <CreativeAreasSection content={content.creativeAreas} />
      <ClassesPreviewSection content={content.classesPreview} />
      <EventsPreviewSection content={content.eventsPreview} />
      <CampSection content={content.camp} />
      <TeamPreviewSection content={content.team} />
      <TestimonialsSection content={content.testimonials} />
      <FinalCtaSection content={content.finalCta} />
    </>
  )
}

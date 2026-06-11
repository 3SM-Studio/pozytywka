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
import {AnnouncementBar} from '@/components/site/announcement-bar'
import {SiteFooter} from '@/components/site/site-footer'
import {SiteHeader} from '@/components/site/site-header'
import {homePageContent} from '@/lib/content/home-page'

export default function Home() {
  return (
    <>
      <AnnouncementBar content={homePageContent.announcement} />
      <SiteHeader navigation={homePageContent.navigation} />
      <main>
        <HeroSection content={homePageContent.hero} />
        <QuickLinksSection items={homePageContent.quickLinks} />
        <StageSection content={homePageContent.stage} />
        <CreativeAreasSection content={homePageContent.creativeAreas} />
        <ClassesPreviewSection content={homePageContent.classesPreview} />
        <EventsPreviewSection content={homePageContent.eventsPreview} />
        <CampSection content={homePageContent.camp} />
        <TeamPreviewSection content={homePageContent.team} />
        <TestimonialsSection content={homePageContent.testimonials} />
        <FinalCtaSection content={homePageContent.finalCta} />
      </main>
      <SiteFooter content={homePageContent.footer} />
    </>
  )
}

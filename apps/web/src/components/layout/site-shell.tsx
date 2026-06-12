import {AnnouncementBar} from '@/components/site/announcement-bar'
import {SiteFooter} from '@/components/site/site-footer'
import {SiteHeader} from '@/components/site/site-header'
import {siteContent} from '@/lib/content/site'

type SiteShellProps = {
  children: React.ReactNode
}

export function SiteShell({children}: SiteShellProps) {
  return (
    <>
      <a
        href="#main-content"
        className="bg-background text-foreground focus:ring-ring sr-only z-[100] rounded-lg px-4 py-3 text-sm font-semibold shadow-lg focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:ring-2 focus:outline-none"
      >
        Przejdź do treści
      </a>
      <AnnouncementBar content={siteContent.announcement} />
      <SiteHeader navigation={siteContent.navigation} />
      <main id="main-content" className="min-h-0">
        {children}
      </main>
      <SiteFooter content={siteContent.footer} />
    </>
  )
}

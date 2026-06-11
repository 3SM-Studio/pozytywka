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
      <AnnouncementBar content={siteContent.announcement} />
      <SiteHeader navigation={siteContent.navigation} />
      {children}
      <SiteFooter content={siteContent.footer} />
    </>
  )
}

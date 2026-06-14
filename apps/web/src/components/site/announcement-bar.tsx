import {AppLink} from '@/components/ui/app-link'
import type {AnnouncementContent} from '@/lib/content/types'

type AnnouncementBarProps = {
  content: AnnouncementContent
}

export function AnnouncementBar({content}: AnnouncementBarProps) {
  return (
    <div className="bg-primary-container text-primary-container-foreground px-5 py-2 text-center text-sm font-semibold dark:shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]">
      <span className="mr-2 tracking-[0.08em] uppercase">{content.message}</span>
      <AppLink
        href={content.action.href}
        className="underline underline-offset-4 transition hover:opacity-75"
      >
        {content.action.label}
      </AppLink>
    </div>
  )
}

import {AppLink} from '@/components/ui/app-link'
import type {AnnouncementContent} from '@/lib/content/types'

type AnnouncementBarProps = {
  content: AnnouncementContent
}

export function AnnouncementBar({content}: AnnouncementBarProps) {
  return (
    <div className="bg-primary-container text-primary-container-foreground px-3 py-2 text-center text-xs font-bold sm:px-5 sm:text-sm dark:shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]">
      <span className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span className="tracking-[0.04em] uppercase sm:tracking-[0.08em]">{content.message}</span>
        <AppLink
          href={content.action.href}
          className="font-extrabold underline underline-offset-4 transition hover:opacity-75"
        >
          {content.action.label}
        </AppLink>
      </span>
    </div>
  )
}

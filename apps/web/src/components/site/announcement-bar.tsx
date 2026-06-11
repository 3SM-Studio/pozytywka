import type {AnnouncementContent} from '@/lib/content/types'

type AnnouncementBarProps = {
  content: AnnouncementContent
}

export function AnnouncementBar({content}: AnnouncementBarProps) {
  return (
    <div className="bg-primary-container text-primary-container-foreground px-5 py-2 text-center text-sm font-semibold">
      <span className="mr-2 tracking-[0.08em] uppercase">{content.message}</span>
      <a
        href={content.action.href}
        className="underline underline-offset-4 transition hover:opacity-75"
      >
        {content.action.label}
      </a>
    </div>
  )
}

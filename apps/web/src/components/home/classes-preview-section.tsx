import type {HomePageContent} from '@/lib/content/types'
import {SectionHeader, SectionShell} from './section-header'

type ClassesPreviewSectionProps = {
  content: HomePageContent['classesPreview']
}

export function ClassesPreviewSection({content}: ClassesPreviewSectionProps) {
  return (
    <SectionShell id="zajecia">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <a
          href={content.action.href}
          className="bg-inverse-surface text-inverse-surface-foreground hover:bg-primary hover:text-primary-foreground inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg px-8 text-sm font-semibold transition-colors"
        >
          {content.action.label}
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </a>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {content.items.map((item) => (
          <article
            key={`${item.category}-${item.title}`}
            className="group border-outline-variant/60 bg-surface-raised overflow-hidden rounded-2xl border shadow-sm"
          >
            <div className="bg-surface-container-highest text-muted-foreground grid aspect-[4/3] place-items-center px-6 text-center text-xs font-semibold tracking-[0.14em] uppercase transition group-hover:scale-[1.02]">
              {item.imageLabel}
            </div>
            <div className="p-6">
              <p className="text-primary text-xs font-semibold tracking-[0.14em] uppercase">
                {item.category}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-muted-foreground mt-3 text-sm leading-7">{item.description}</p>
              <div className="bg-surface-container-low mt-5 rounded-xl p-4 text-sm">
                <p className="font-semibold">Info</p>
                <p className="text-muted-foreground mt-1 leading-6">{item.meta}</p>
              </div>
              <p className="text-primary mt-4 text-sm font-semibold">{item.status}</p>
              <a
                href={item.action.href}
                className="text-foreground mt-5 inline-flex text-sm font-semibold"
              >
                {item.action.label}
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

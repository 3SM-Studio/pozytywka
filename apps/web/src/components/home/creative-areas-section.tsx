import type {HomePageContent} from '@/lib/content/types'
import {SectionHeader, SectionShell} from './section-header'

type CreativeAreasSectionProps = {
  content: HomePageContent['creativeAreas']
}

export function CreativeAreasSection({content}: CreativeAreasSectionProps) {
  return (
    <SectionShell tone="muted">
      <SectionHeader title={content.title} description={content.description} align="center" />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {content.items.map((item) => (
          <article
            key={item.title}
            className="border-outline-variant/70 bg-surface-raised rounded-2xl border p-6"
          >
            <span
              aria-hidden="true"
              className="bg-primary-container text-primary-container-foreground grid size-12 place-items-center rounded-full text-xl font-bold"
            >
              {item.icon}
            </span>
            <h3 className="mt-5 font-serif text-2xl font-semibold tracking-tight">{item.title}</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-7">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

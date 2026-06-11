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
        {content.items.map((item, index) => (
          <article
            key={item.title}
            className="border-border bg-card rounded-3xl border p-6 shadow-sm"
          >
            <div className="bg-primary text-primary-foreground grid size-12 place-items-center rounded-2xl text-sm font-bold">
              {String(index + 1).padStart(2, '0')}
            </div>
            <h3 className="mt-5 font-serif text-2xl font-semibold">{item.title}</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-7">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

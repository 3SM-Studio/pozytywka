import type {HomePageContent} from '@/lib/content/types'
import {SectionHeader, SectionShell} from './section-header'

type TeamPreviewSectionProps = {
  content: HomePageContent['team']
}

export function TeamPreviewSection({content}: TeamPreviewSectionProps) {
  return (
    <SectionShell id="o-pozytywce">
      <SectionHeader
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <article className="border-border bg-card rounded-[2rem] border p-7 shadow-sm">
          <div className="bg-surface-muted text-muted-foreground grid min-h-64 place-items-center rounded-3xl text-center text-sm font-bold tracking-[0.18em] uppercase">
            Zdjęcie — do podmiany
          </div>
          <h3 className="mt-6 font-serif text-3xl font-semibold">{content.featured.name}</h3>
          <p className="text-primary mt-2 text-sm font-bold tracking-[0.18em] uppercase">
            {content.featured.role}
          </p>
          <p className="text-muted-foreground mt-4 leading-7">{content.featured.description}</p>
        </article>

        <div className="grid gap-4">
          {content.members.map((member) => (
            <article
              key={`${member.name}-${member.role}`}
              className="border-border bg-card rounded-3xl border p-6"
            >
              <p className="font-serif text-2xl font-semibold">{member.name}</p>
              <p className="text-primary mt-2 text-sm font-bold tracking-[0.18em] uppercase">
                {member.role}
              </p>
              <p className="text-muted-foreground mt-3 text-sm leading-7">{member.description}</p>
            </article>
          ))}
          <a
            href={content.action.href}
            className="border-border bg-card text-foreground inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-bold"
          >
            {content.action.label} →
          </a>
        </div>
      </div>
    </SectionShell>
  )
}

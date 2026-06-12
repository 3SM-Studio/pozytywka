import type {HomePageContent} from '@/lib/content/types'
import {SectionHeader, SectionShell} from '@/components/layout/section-header'
import Link from 'next/link'

type TeamPreviewSectionProps = {
  content: HomePageContent['team']
}

export function TeamPreviewSection({content}: TeamPreviewSectionProps) {
  return (
    <SectionShell id="o-pozytywce" tone="surface">
      <div className="mb-14">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
      </div>

      <div className="grid gap-8 md:grid-cols-12">
        <article className="border-outline-variant/60 bg-surface-container-low grid gap-8 rounded-2xl border p-8 md:col-span-7 md:grid-cols-[0.9fr_1fr]">
          <div className="bg-surface-container-highest text-muted-foreground grid aspect-[4/5] place-items-center rounded-xl px-6 text-center text-xs font-semibold tracking-[0.14em] uppercase">
            {content.featured.portraitLabel}
          </div>
          <div className="flex flex-col">
            <div>
              <h3 className="font-serif text-3xl font-semibold">{content.featured.name}</h3>
              <p className="text-primary mt-2 text-sm font-semibold tracking-[0.14em] uppercase">
                {content.featured.role}
              </p>
            </div>
            <p className="text-muted-foreground mt-6 leading-7 md:flex-1">
              {content.featured.description}
            </p>
            <Link
              href={content.action.href}
              className="bg-inverse-surface text-inverse-surface-foreground hover:bg-primary hover:text-primary-foreground mt-8 inline-flex min-h-11 w-fit items-center justify-center rounded-lg px-8 text-sm font-semibold transition-colors"
            >
              {content.action.label}
            </Link>
          </div>
        </article>

        <div className="grid gap-5 md:col-span-5">
          {content.members.map((member) => (
            <article
              key={`${member.name}-${member.role}`}
              className="border-outline-variant/60 bg-surface-raised flex items-center gap-4 rounded-2xl border p-4"
            >
              <div className="bg-surface-container-highest text-muted-foreground grid size-20 shrink-0 place-items-center rounded-xl px-2 text-center text-[0.62rem] leading-tight font-semibold uppercase">
                {member.portraitLabel}
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">{member.name}</h3>
                <p className="text-primary mt-1 text-xs font-semibold tracking-[0.12em] uppercase">
                  {member.role}
                </p>
                <p className="text-muted-foreground mt-1 text-xs">{member.description}</p>
              </div>
            </article>
          ))}
          <Link href="#o-pozytywce" className="text-primary mt-2 inline-flex text-sm font-semibold">
            Poznaj cały zespół →
          </Link>
        </div>
      </div>
    </SectionShell>
  )
}

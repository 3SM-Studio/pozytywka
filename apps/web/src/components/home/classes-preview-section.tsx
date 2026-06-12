import type {HomePageContent} from '@/lib/content/types'
import {Container} from '@/components/layout/container'
import {SectionHeader} from '@/components/layout/section-header'
import {Section} from '@/components/layout/section'
import {LinkButton} from '@/components/ui/link-button'
import Link from 'next/link'

type ClassesPreviewSectionProps = {
  content: HomePageContent['classesPreview']
}

export function ClassesPreviewSection({content}: ClassesPreviewSectionProps) {
  return (
    <Section id="zajecia">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
          <LinkButton href={content.action.href} variant="inverse" size="wide" className="shrink-0">
            {content.action.label}
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </LinkButton>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {content.items.map((item) => (
            <article
              key={`${item.category}-${item.title}`}
              className="group border-outline-variant/60 bg-surface-raised overflow-hidden rounded-2xl border shadow-sm"
            >
              <div className="bg-surface-container-highest text-muted-foreground relative grid aspect-[4/3] place-items-center overflow-hidden px-6 text-center text-xs font-semibold tracking-[0.14em] uppercase transition group-hover:scale-[1.02]">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,215,0,0.18),transparent_12rem)]" />
                <span className="relative">{item.imageLabel}</span>
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
                <Link
                  href={item.action.href}
                  className="text-foreground mt-5 inline-flex text-sm font-semibold"
                >
                  {item.action.label}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}

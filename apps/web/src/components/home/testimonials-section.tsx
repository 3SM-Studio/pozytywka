import type {HomePageContent} from '@/lib/content/types'
import {Container} from '@/components/layout/container'
import {SectionHeader} from '@/components/layout/section-header'
import {Section} from '@/components/layout/section'

type TestimonialsSectionProps = {
  content: HomePageContent['testimonials']
}

export function TestimonialsSection({content}: TestimonialsSectionProps) {
  const headingId = 'home-testimonials-heading'

  return (
    <Section labelledBy={headingId}>
      <Container>
        <SectionHeader
          id={headingId}
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {content.items.map((item) => (
            <figure
              key={item.id}
              className="border-outline-variant/60 bg-surface-raised rounded-2xl border p-6"
            >
              <span aria-hidden="true" className="text-primary font-serif text-4xl leading-none">
                “
              </span>
              <blockquote className="mt-3 font-serif text-2xl leading-snug font-semibold">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold">{item.author}</p>
                <p className="text-muted-foreground mt-1 text-sm">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  )
}

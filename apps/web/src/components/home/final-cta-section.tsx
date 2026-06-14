import type {HomePageContent} from '@/lib/content/types'
import {Container} from '@/components/layout/container'
import {Section} from '@/components/layout/section'
import {LinkButton} from '@/components/ui/link-button'

type FinalCtaSectionProps = {
  content: HomePageContent['finalCta']
}

export function FinalCtaSection({content}: FinalCtaSectionProps) {
  const headingId = 'home-final-cta-heading'

  return (
    <Section labelledBy={headingId} tone="ink">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id={headingId}
            className="font-serif text-5xl leading-tight font-semibold tracking-tight md:text-6xl"
          >
            {content.title}
          </h2>
          <p className="text-inverse-surface-foreground/75 mt-6 text-lg leading-8">
            {content.description}
          </p>
          <p className="text-primary-container mt-4 text-sm font-semibold tracking-[0.14em] uppercase">
            {content.meta}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <LinkButton href={content.primaryAction.href} variant="brand" size="wide">
              {content.primaryAction.label}
            </LinkButton>
            <LinkButton href={content.secondaryAction.href} variant="inverseOutline" size="wide">
              {content.secondaryAction.label}
            </LinkButton>
          </div>
        </div>
      </Container>
    </Section>
  )
}

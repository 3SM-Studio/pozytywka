import {cn} from '@/lib/utils'

type SectionHeaderProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  inverse?: boolean
  className?: string
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  inverse = false,
  className,
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  const eyebrowClass = inverse ? 'text-primary-container' : 'text-primary'
  const titleClass = inverse ? 'text-inverse-surface-foreground' : 'text-foreground'
  const descriptionClass = inverse ? 'text-inverse-surface-foreground/75' : 'text-muted-foreground'

  return (
    <div id={id} className={cn('max-w-3xl', alignment, className)}>
      {eyebrow ? (
        <p className={cn(eyebrowClass, 'mb-4 text-sm font-semibold tracking-[0.16em] uppercase')}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          titleClass,
          'font-serif text-4xl leading-tight font-semibold tracking-tight md:text-[3.25rem]',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn(descriptionClass, 'mt-5 text-base leading-8 md:text-lg')}>{description}</p>
      ) : null}
    </div>
  )
}

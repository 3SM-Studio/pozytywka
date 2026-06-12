import {cn} from '@/lib/utils'
import type {ComponentPropsWithoutRef} from 'react'

type SectionTone = 'default' | 'muted' | 'surface' | 'ink'

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  labelledBy?: string
  tone?: SectionTone
}

const sectionToneClass: Record<SectionTone, string> = {
  default: 'bg-background',
  muted: 'bg-surface-container-low',
  surface: 'bg-surface',
  ink: 'bg-ink text-inverse-surface-foreground',
}

export function Section({className, labelledBy, tone = 'default', ...props}: SectionProps) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={cn(sectionToneClass[tone], 'py-section scroll-mt-24', className)}
      {...props}
    />
  )
}

import {cn} from '@/lib/utils'
import type {ComponentPropsWithoutRef} from 'react'

type SectionTone = 'default' | 'muted' | 'surface' | 'ink'

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  tone?: SectionTone
}

const sectionToneClass: Record<SectionTone, string> = {
  default: 'bg-background',
  muted: 'bg-surface-container-low',
  surface: 'bg-surface',
  ink: 'bg-ink text-inverse-surface-foreground',
}

export function Section({className, tone = 'default', ...props}: SectionProps) {
  return (
    <section
      className={cn(sectionToneClass[tone], 'py-section scroll-mt-24', className)}
      {...props}
    />
  )
}

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({eyebrow, title, description, align = 'left'}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-primary mb-4 text-sm font-bold tracking-[0.2em] uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="text-foreground font-serif text-4xl leading-tight font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-muted-foreground mt-5 text-base leading-8 md:text-lg">{description}</p>
      ) : null}
    </div>
  )
}

export function SectionShell({
  id,
  tone = 'default',
  children,
}: {
  id?: string
  tone?: 'default' | 'muted' | 'ink'
  children: React.ReactNode
}) {
  const toneClass = {
    default: 'bg-background',
    muted: 'bg-surface-muted',
    ink: 'bg-ink text-background',
  }[tone]

  return (
    <section id={id} className={`${toneClass} py-section scroll-mt-24 px-4`}>
      <div className="w-container mx-auto">{children}</div>
    </section>
  )
}

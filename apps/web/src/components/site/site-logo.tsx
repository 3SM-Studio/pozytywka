type SiteLogoProps = {
  size?: 'header' | 'footer'
}

export function SiteLogo({size = 'header'}: SiteLogoProps) {
  const boxClass =
    size === 'footer'
      ? 'border-outline-variant bg-surface-raised grid h-14 w-44 place-items-center rounded-lg border px-4 shadow-sm'
      : 'border-outline-variant bg-surface-raised grid h-12 w-40 place-items-center rounded-lg border px-4 text-left shadow-sm'

  return (
    <span className={boxClass}>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-2xl font-semibold tracking-tight">Pozytywka</span>
      </span>
    </span>
  )
}

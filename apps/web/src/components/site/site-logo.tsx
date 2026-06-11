type SiteLogoProps = {
  size?: 'header' | 'footer'
}

export function SiteLogo({size = 'header'}: SiteLogoProps) {
  const boxClass =
    size === 'footer'
      ? 'border-outline-variant/70 bg-surface-raised/80 grid h-14 w-44 place-items-center rounded-xl border px-4 shadow-[0_18px_40px_rgba(0,0,0,0.22)]'
      : 'border-outline-variant/70 bg-surface-raised/80 grid h-12 w-40 place-items-center rounded-xl border px-4 text-left shadow-[0_14px_30px_rgba(0,0,0,0.2)] backdrop-blur'

  return (
    <span className={boxClass}>
      <span className="flex flex-col leading-none">
        <span className="text-primary font-serif text-2xl font-semibold tracking-tight">
          Pozytywka
        </span>
        <span className="text-muted-foreground mt-1 text-[0.58rem] font-semibold tracking-[0.22em] uppercase">
          Pracownia
        </span>
      </span>
    </span>
  )
}

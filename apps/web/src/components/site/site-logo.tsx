type SiteLogoProps = {
  size?: 'header' | 'footer'
}

export function SiteLogo({size = 'header'}: SiteLogoProps) {
  const boxClass =
    size === 'footer'
      ? 'border-outline-variant bg-surface-raised grid h-14 w-44 place-items-center rounded-lg border px-4 shadow-sm dark:border-outline-variant/70 dark:bg-surface-raised/80 dark:rounded-xl dark:shadow-[0_18px_40px_rgba(0,0,0,0.22)]'
      : 'border-outline-variant bg-surface-raised grid h-12 w-40 place-items-center rounded-lg border px-4 text-left shadow-sm dark:border-outline-variant/70 dark:bg-surface-raised/80 dark:rounded-xl dark:shadow-[0_14px_30px_rgba(0,0,0,0.2)] dark:backdrop-blur'

  return (
    <span className={boxClass}>
      <span className="flex flex-col leading-none">
        <span className="dark:text-primary font-serif text-2xl font-semibold tracking-tight">
          Pozytywka
        </span>
        <span className="text-muted-foreground mt-1 text-[0.58rem] font-semibold tracking-[0.22em] uppercase">
          Pracownia
        </span>
      </span>
    </span>
  )
}

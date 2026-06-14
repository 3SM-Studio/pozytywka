import type {AppHref} from '@/lib/content/types'
import Link from 'next/link'
import type {Route} from 'next'
import type {ReactNode} from 'react'

type AppLinkProps = {
  href: AppHref
  children: ReactNode
  className?: string
  ariaLabel?: string
}

function isExternalHref(href: AppHref) {
  return (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  )
}

export function AppLink({href, children, className, ariaLabel}: AppLinkProps) {
  if (isExternalHref(href)) {
    const rel = href.startsWith('http://') || href.startsWith('https://') ? 'noreferrer' : undefined

    return (
      <a href={href} className={className} aria-label={ariaLabel} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href as Route} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}

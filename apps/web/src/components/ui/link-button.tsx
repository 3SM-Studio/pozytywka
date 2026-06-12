import {Button, type ButtonProps} from '@/components/ui/button'
import Link from 'next/link'
import type {ReactNode} from 'react'

type LinkButtonProps = {
  href: string
  children: ReactNode
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  className?: string
}

export function LinkButton({href, children, variant, size, className}: LinkButtonProps) {
  if (href.startsWith('/')) {
    return (
      <Button asChild variant={variant} size={size} className={className}>
        <Link href={href}>{children}</Link>
      </Button>
    )
  }

  if (href.startsWith('http')) {
    return (
      <Button asChild variant={variant} size={size} className={className}>
        <a href={href} rel="noreferrer">
          {children}
        </a>
      </Button>
    )
  }

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={href}>{children}</a>
    </Button>
  )
}

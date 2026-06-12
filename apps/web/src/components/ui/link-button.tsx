import {AppLink} from '@/components/ui/app-link'
import {Button, type ButtonProps} from '@/components/ui/button'
import type {AppHref} from '@/lib/content/types'
import type {ReactNode} from 'react'

type LinkButtonProps = {
  href: AppHref
  children: ReactNode
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  className?: string
}

export function LinkButton({href, children, variant, size, className}: LinkButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <AppLink href={href}>{children}</AppLink>
    </Button>
  )
}

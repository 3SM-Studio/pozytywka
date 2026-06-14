import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'
import type * as React from 'react'

import {cn} from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        brand:
          'bg-primary-container text-primary-container-foreground hover:bg-primary hover:text-primary-foreground',
        inverse:
          'bg-inverse-surface text-inverse-surface-foreground hover:bg-primary hover:text-primary-foreground',
        outline:
          'border border-outline-variant bg-surface-raised text-foreground hover:bg-surface-container-high',
        surfaceOutline:
          'border border-outline bg-surface text-foreground hover:bg-surface-container-high',
        inverseOutline:
          'border border-inverse-surface-foreground/40 text-inverse-surface-foreground hover:bg-inverse-surface-foreground/10',
        ghost: 'hover:bg-surface-container-high hover:text-foreground',
      },
      size: {
        default: 'min-h-11 px-5 py-2.5',
        wide: 'min-h-11 px-8 py-2.5',
        lg: 'min-h-12 px-8 py-3',
        icon: 'size-11',
        iconSm: 'size-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export function Button({className, variant, size, asChild = false, ...props}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return <Comp className={cn(buttonVariants({variant, size, className}))} {...props} />
}

import {cn} from '@/lib/utils'
import type {ComponentPropsWithoutRef} from 'react'

type ContainerProps = ComponentPropsWithoutRef<'div'>

export function Container({className, ...props}: ContainerProps) {
  return <div className={cn('w-container mx-auto px-5', className)} {...props} />
}

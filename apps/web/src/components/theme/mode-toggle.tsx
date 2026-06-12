'use client'

import {Monitor, Moon, Sun} from 'lucide-react'
import {useTheme} from 'next-themes'
import {useEffect, useState} from 'react'

import {Button} from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const themeOptions = [
  {label: 'Jasny', value: 'light', icon: Sun},
  {label: 'Ciemny', value: 'dark', icon: Moon},
  {label: 'Systemowy', value: 'system', icon: Monitor},
] as const

export function ModeToggle() {
  const {setTheme} = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Przełącz motyw">
          <Sun
            aria-hidden="true"
            className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
          />
          <Moon
            aria-hidden="true"
            className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
          />
          <span className="sr-only">Przełącz motyw</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>Jasny</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Ciemny</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>Systemowy</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function MobileThemeControls() {
  const {setTheme, theme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true))

    return () => cancelAnimationFrame(frame)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="border-outline-variant mt-3 grid gap-2 border-t pt-3">
      {themeOptions.map((option) => {
        const Icon = option.icon

        return (
          <Button
            key={option.value}
            type="button"
            variant={theme === option.value ? 'brand' : 'outline'}
            className="min-h-12 justify-start"
            aria-pressed={theme === option.value}
            onClick={() => setTheme(option.value)}
          >
            <Icon aria-hidden="true" className="h-5 w-5" />
            {option.label}
          </Button>
        )
      })}
    </div>
  )
}

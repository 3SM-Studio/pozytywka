import type {Metadata} from 'next'
import {Montserrat, Playfair_Display} from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-montserrat',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Pozytywka — Pracownia Twórcza',
    template: '%s | Pozytywka',
  },
  description:
    'Teatr, muzyka, ruch, spektakle i artystyczne działania dla dzieci, młodzieży i dorosłych.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${montserrat.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}

import {SiteShell} from '@/components/layout/site-shell'
import {ThemeProvider} from '@/components/theme/theme-provider'
import {siteRoutes} from '@/lib/content/routes'
import {getSiteUrl} from '@/lib/site-url'
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

const homeRoute = siteRoutes.find((route) => route.path === '/') ?? siteRoutes[0]

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  applicationName: 'Pozytywka',
  title: {
    default: homeRoute.title,
    template: '%s | Pozytywka',
  },
  description: homeRoute.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: homeRoute.title,
    description: homeRoute.description,
    url: '/',
    siteName: 'Pozytywka',
    locale: 'pl_PL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pl"
      suppressHydrationWarning
      className={`${montserrat.variable} ${playfair.variable}`}
    >
      <body className="grid min-h-svh grid-rows-[auto_auto_minmax(0,1fr)_auto]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  )
}

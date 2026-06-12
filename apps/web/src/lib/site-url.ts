const fallbackSiteUrl = 'http://localhost:3000'

export function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl

  return new URL(siteUrl)
}

export function absoluteUrl(path = '/') {
  return new URL(path, getSiteUrl()).toString()
}

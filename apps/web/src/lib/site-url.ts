const fallbackSiteUrl = 'http://localhost:3000'

export function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()

  if (process.env.NODE_ENV === 'production') {
    if (!siteUrl) {
      throw new Error('NEXT_PUBLIC_SITE_URL must be set in production.')
    }

    const productionUrl = new URL(siteUrl)

    if (productionUrl.hostname === 'localhost' || productionUrl.hostname === '127.0.0.1') {
      throw new Error('NEXT_PUBLIC_SITE_URL must not point to localhost in production.')
    }

    return productionUrl
  }

  return new URL(siteUrl || fallbackSiteUrl)
}

export function absoluteUrl(path = '/') {
  return new URL(path, getSiteUrl()).toString()
}

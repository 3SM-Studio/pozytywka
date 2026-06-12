import {siteRoutes} from '@/lib/content/routes'
import {absoluteUrl} from '@/lib/site-url'
import type {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return siteRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}

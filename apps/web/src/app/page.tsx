import {HomePageView} from '@/components/home/home-page-view'
import {getHomePageContent} from '@/lib/content/get-home-page-content'

export default async function HomePage() {
  const content = await getHomePageContent()

  return <HomePageView content={content} />
}

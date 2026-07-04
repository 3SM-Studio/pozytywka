import {redirect} from 'next/navigation'

type EventAliasPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function EventAliasPage({params}: EventAliasPageProps) {
  const {slug} = await params

  redirect(`/spektakle/${slug}`)
}

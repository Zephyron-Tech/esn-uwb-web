import { Outstatic } from 'outstatic'
import OutstaticClient from '@/components/OutstaticClient'

export default async function Page({
  params
}: {
  params: Promise<{ ost: string[] }>
}) {
  const { ost } = await params
  const ostData = await Outstatic({
    repoOwner: 'Zephyron-Tech',
    repoSlug: 'esn-uwb-web',
    repoBranch: 'main'
  })

  return <OutstaticClient ostData={ostData} params={{ ost }} />
}

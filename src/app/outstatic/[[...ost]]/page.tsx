import { Outstatic } from 'outstatic'
import OutstaticClient from '@/components/OutstaticClient'

export default async function Page(props: {
  params: Promise<{ ost: string[] }>
}) {
  const params = await props.params;
  const ostData = await Outstatic({
    repoOwner: 'Zephyron-Tech',
    repoSlug: 'esn-uwb-web',
    repoBranch: process.env.OST_REPO_BRANCH || 'develop'
  })

  return <OutstaticClient ostData={ostData} params={params} />
}

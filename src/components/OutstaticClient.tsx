'use client'

import { OstClient } from 'outstatic/client'
import 'outstatic/outstatic.css'

export default function OutstaticClient({
  ostData,
  params
}: {
  ostData: any
  params: any
}) {
  return <OstClient ostData={ostData} params={params} />
}

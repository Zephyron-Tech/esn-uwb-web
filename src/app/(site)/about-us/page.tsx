import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import MissionStatement from '@/components/MissionStatement'
import BoardMembers from '@/components/BoardMembers'
import SupportersCta from '@/components/SupportersCta'

export const metadata: Metadata = {
  title: 'About Us | ESN UWB Pilsen',
  description:
    'Learn about ESN UWB Pilsen — our mission, board members, and the organizations that support international student mobility in the City of Beer.',
}

export default function AboutUsPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="About Us"
        subtitle="Get to know the people and mission behind ESN UWB Pilsen"
      />
      <MissionStatement />
      <BoardMembers />
      <SupportersCta />
    </div>
  )
}

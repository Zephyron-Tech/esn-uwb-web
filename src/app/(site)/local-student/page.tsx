import PageHeader from '@/components/PageHeader'
import WhoIsBuddy from '@/components/WhoIsBuddy'
import JoinUsCta from '@/components/JoinUsCta'
import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Local Student | ESN UWB Pilsen',
  description: 'Become a Buddy and help international students in Pilsen. Practice languages, make friends, and join our events.',
}

export default function LocalStudentPage() {
  return (
    <>
      <PageHeader 
        title="For Local Students" 
        subtitle="Join our community, make international friends, and experience the Erasmus spirit right here in Pilsen."
      />
      <WhoIsBuddy />
      <JoinUsCta />
      <ContactForm />
    </>
  )
}

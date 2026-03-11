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
      <JoinUsCta formLink="https://docs.google.com/forms/d/e/1FAIpQLSfKc2mfFASrKf3SP4dPfQ-Yata05vtLdE6Xa-XR1ZwFTlo0vg/viewform?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnzacyviRWeusoHiR5UdJGGpwabr91tXvdFtmcV0kwwjc5FK1FHi6lM0sGmWQ_aem_ozxLM9FJpFoC8wD04khnqQ" />
      <ContactForm />
    </>
  )
}

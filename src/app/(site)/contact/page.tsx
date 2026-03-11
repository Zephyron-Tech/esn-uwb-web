import PageHeader from '@/components/PageHeader'
import ContactInfo from '@/components/ContactInfo'
import LocationMap from '@/components/LocationMap'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | ESN UWB Pilsen',
  description: 'Get in touch with Erasmus Student Network UWB Pilsen. Find our office at Máchova dormitory, check office hours, or reach out via email and social media.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="We are always happy to help. Reach out to our team or drop by our office."
      />
      <ContactInfo />
      <LocationMap />
    </>
  )
}

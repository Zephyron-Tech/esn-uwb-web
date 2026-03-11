import PageHeader from '@/components/PageHeader'
import IncomingGuides from '@/components/IncomingGuides'
import KeyLinksSection from '@/components/KeyLinksSection'
import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Incoming Student | ESN UWB Pilsen',
  description: 'Everything you need to know for your Erasmus in Pilsen. Download survival guides, get your ESNcard, and register for events via Artemis.',
}

export default function IncomingStudentPage() {
  return (
    <>
      <PageHeader 
        title="For Incoming Students" 
        subtitle="Welcome to Pilsen! We are here to make your Erasmus experience unforgettable. Explore our guides and essential services."
      />
      <IncomingGuides />
      <KeyLinksSection />
      {/* Reusing the Contact Form from Phase 5 for consistency */}
      <ContactForm />
    </>
  )
}

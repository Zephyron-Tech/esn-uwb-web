import PageHeader from '@/components/PageHeader'
import SponsorsGrid from '@/components/SponsorsGrid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Partners | ESN UWB Pilsen',
  description: 'Meet the partners and sponsors who support ESN UWB Pilsen. Discover local discounts with your ESNcard.',
}

export default function SponsorsPage() {
  return (
    <>
      <PageHeader 
        title="Our Partners & Sponsors" 
        subtitle="We are proud to collaborate with the University of West Bohemia, national organizations, and local businesses."
      />
      <SponsorsGrid />
    </>
  )
}

import Link from 'next/link'
import { ArrowRight, Handshake } from 'lucide-react'
import { partners } from '@/lib/placeholder-data'

export default function SupportersCta() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
            Our Supporters
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ESN UWB Pilsen is supported by organizations that believe in
            international education and student mobility.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {partners.map((partner) => (
            <span
              key={partner.name}
              className="px-5 py-2.5 bg-gray-50 rounded-full text-sm font-medium text-gray-700 border border-gray-100"
            >
              {partner.name}
            </span>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/sponsors"
            className="inline-flex items-center justify-center px-8 py-4 bg-esn-dark-blue text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Handshake className="mr-2 w-5 h-5" />
            View All Partners & Become a Sponsor
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { partners } from '@/lib/placeholder-data'

export default function Partners() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are grateful to our partners who support international student
            mobility and our mission.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              className="flex items-center justify-center h-24 px-4 bg-white rounded-xl border border-gray-100 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <span className="text-gray-400 font-medium text-xs text-center leading-tight">
                {partner.name}
              </span>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/sponsors"
            className="inline-flex items-center text-esn-dark-blue font-bold hover:text-esn-cyan transition-colors"
          >
            Become a Partner
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

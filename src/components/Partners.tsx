import Link from 'next/link'
import { ArrowRight, Building2, Globe2, GraduationCap, MapPin } from 'lucide-react'

const partnersList = [
  { name: 'University of West Bohemia', icon: Building2 },
  { name: 'ESN Czech Republic', icon: Globe2 },
  { name: 'Erasmus+', icon: GraduationCap },
  { name: 'City of Pilsen', icon: MapPin },
]

export default function Partners() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {partnersList.map((partner) => {
            const Icon = partner.icon
            return (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-esn-cyan mb-4 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-gray-600 font-bold text-sm text-center leading-tight">
                  {partner.name}
                </span>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            href="/partners"
            className="inline-flex items-center px-8 py-4 bg-gray-50 text-esn-dark-blue font-bold rounded-full hover:bg-esn-dark-blue hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Become a Partner
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

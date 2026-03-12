import Link from 'next/link'
import { ArrowRight, GraduationCap, Users, Globe, Building2, School, Beer } from 'lucide-react'
import { partners } from '@/lib/placeholder-data'

const partnerIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'University of West Bohemia': GraduationCap,
  'ESN Czech Republic': Users,
  'Erasmus+': Globe,
  'City of Pilsen': Building2,
  'Student Union UWB': School,
  'Pilsner Urquell': Beer,
}

export default function SupportersCta() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
            Our Supporters
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ESN UWB Pilsen is supported by organizations that believe in
            international education and student mobility.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {partners.map((partner) => {
            const Icon = partnerIcons[partner.name]
            return (
              <a
                key={partner.name}
                href={partner.href}
                className="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-400 group-hover:text-esn-cyan group-hover:bg-esn-cyan/10 transition-colors mb-4 shadow-sm group-hover:shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-gray-600 font-bold text-sm text-center leading-tight group-hover:text-esn-dark-blue transition-colors">
                  {partner.name}
                </span>
              </a>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            href="/sponsors"
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

import { Building2, GraduationCap, Globe, CreditCard, Coffee, Landmark } from 'lucide-react'

// Using Lucide icons as placeholders until real logo assets are provided
const sponsors = [
  {
    name: 'University of West Bohemia',
    category: 'Main Partner',
    icon: <Landmark className="w-16 h-16" />,
    link: 'https://www.zcu.cz/',
    featured: true,
  },
  {
    name: 'ESN CZ',
    category: 'National Level',
    icon: <Globe className="w-16 h-16" />,
    link: 'https://www.esn.cz/',
    featured: true,
  },
  {
    name: 'ESNcard',
    category: 'International Partner',
    icon: <CreditCard className="w-16 h-16" />,
    link: 'https://esncard.org/',
    featured: true,
  },
  {
    name: 'TechTower Pilsen',
    category: 'Local Partner',
    icon: <Building2 className="w-12 h-12" />,
    link: '#',
    featured: false,
  },
  {
    name: 'Student Union UWB',
    category: 'University Partner',
    icon: <GraduationCap className="w-12 h-12" />,
    link: '#',
    featured: false,
  },
  {
    name: 'Local Cafe & Bar',
    category: 'Discounts',
    icon: <Coffee className="w-12 h-12" />,
    link: '#',
    featured: false,
  },
]

export default function SponsorsGrid() {
  const featuredSponsors = sponsors.filter(s => s.featured)
  const regularSponsors = sponsors.filter(s => !s.featured)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">
            Our Main Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These organizations make our work possible. Thank you for supporting international student mobility.
          </p>
        </div>

        {/* Featured Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {featuredSponsors.map((sponsor, index) => (
            <a 
              key={index} 
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 rounded-3xl p-10 flex flex-col items-center text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-esn-dark-blue mb-6 shadow-sm group-hover:scale-110 group-hover:text-esn-cyan transition-all duration-300">
                {sponsor.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">{sponsor.name}</h3>
              <span className="inline-block px-3 py-1 bg-esn-magenta/10 text-esn-magenta text-sm font-bold rounded-full">
                {sponsor.category}
              </span>
            </a>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold font-heading text-gray-900">
            Local & University Partners
          </h2>
        </div>

        {/* Regular Sponsors Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {regularSponsors.map((sponsor, index) => (
            <a 
              key={index} 
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start sm:text-left text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-gray-500 mb-4 sm:mb-0 sm:mr-4 flex-shrink-0 group-hover:scale-105 group-hover:text-esn-orange transition-all duration-300 shadow-sm">
                 {sponsor.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-gray-900 group-hover:text-esn-orange transition-colors">{sponsor.name}</h3>
                <span className="text-sm text-gray-500">{sponsor.category}</span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA to become a sponsor */}
        <div className="mt-24 bg-esn-dark-blue rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-esn-cyan/20 blur-2xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-esn-green/20 blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold font-heading mb-4">Want to become a partner?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Are you a local business or organization looking to reach hundreds of international and local students? 
              Partner with ESN UWB Pilsen through the ESNcard discount system or event sponsorships.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-esn-dark-blue font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us for Partnership
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

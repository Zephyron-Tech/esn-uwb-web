import {
  Heart, Building2, GraduationCap, Package, Bus, Car,
  Apple, BookOpen, Code, Sparkles, Plane, Home,
  Newspaper, Compass, Phone, Shield,
} from 'lucide-react'

const partners = [
  { name: 'Amnesty International', icon: <Heart className="w-10 h-10" />, description: 'Human rights organization' },
  { name: 'BOHO CO', icon: <Home className="w-10 h-10" />, description: '20% discount with code ESNCZ' },
  { name: 'DZS', icon: <GraduationCap className="w-10 h-10" />, description: 'Czech National Agency for International Education and Research' },
  { name: 'Eurosender', icon: <Package className="w-10 h-10" />, description: 'Shipping & relocation services' },
  { name: 'FlixBus', icon: <Bus className="w-10 h-10" />, description: '10% ESNcard discount' },
  { name: 'HoppyGo', icon: <Car className="w-10 h-10" />, description: 'Peer-to-peer car sharing' },
  { name: 'Nesnězeno', icon: <Apple className="w-10 h-10" />, description: '20% off with code ESN20' },
  { name: 'Perlego', icon: <BookOpen className="w-10 h-10" />, description: '15% discount on digital library' },
  { name: 'Quanti s.r.o.', icon: <Code className="w-10 h-10" />, description: 'Software & training company' },
  { name: 'Rise and Shine', icon: <Sparkles className="w-10 h-10" />, description: '50% discount with ESNCZ code' },
  { name: 'Ryanair', icon: <Plane className="w-10 h-10" />, description: '10% discount & free luggage with ESNcard' },
  { name: 'Spotahome', icon: <Building2 className="w-10 h-10" />, description: 'Accommodation booking platform' },
  { name: 'The Economist', icon: <Newspaper className="w-10 h-10" />, description: 'Up to 75% subscription discount' },
  { name: 'Timetravels', icon: <Compass className="w-10 h-10" />, description: '30\u20AC off with ESNcard' },
  { name: 'Vodafone', icon: <Phone className="w-10 h-10" />, description: 'Golden SIM cards for students' },
  { name: 'Záchranka', icon: <Shield className="w-10 h-10" />, description: 'Emergency mobile app' },
]

export default function SponsorsGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ESN CZ partners offering exclusive discounts and benefits to ESNcard holders and Erasmus students.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-gray-400 mb-4 shadow-sm group-hover:scale-110 group-hover:text-esn-cyan transition-all duration-300">
                {partner.icon}
              </div>
              <h3 className="text-base font-bold font-heading text-gray-900 mb-1">{partner.name}</h3>
              <p className="text-sm text-gray-500">{partner.description}</p>
            </div>
          ))}
        </div>

        {/* CTA to become a sponsor */}
        <div className="mt-24 bg-esn-dark-blue rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
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

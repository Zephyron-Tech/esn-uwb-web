import Link from 'next/link'
import { PartyPopper, Users, MapPin, CreditCard, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: <PartyPopper className="w-8 h-8" />,
    title: 'Cultural Events',
    description:
      'Regular social gatherings, themed parties, and cultural exchanges that bring local and international students together.',
    accent: 'bg-esn-cyan/10 text-esn-cyan',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Buddy System',
    description:
      'We pair local Czech students with incoming Erasmus students to help them settle into life in Pilsen.',
    accent: 'bg-esn-magenta/10 text-esn-magenta',
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Travel & Trips',
    description:
      'Organized weekend trips across Czech Republic and Europe — from Prague to the Alps and beyond.',
    accent: 'bg-esn-green/10 text-esn-green',
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: 'ESNcard Discounts',
    description:
      'Exclusive discounts on travel, food, and entertainment across 40+ countries with your ESNcard.',
    accent: 'bg-esn-orange/10 text-esn-orange',
  },
]

export default function AboutPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
            What do we do?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a non-profit international student organization. Our mission
            is to represent international students, providing opportunities for
            cultural understanding and self-development under the principle of
            <strong> Students Helping Students.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-12 ${feature.accent}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/about-us"
            className="inline-flex items-center justify-center px-8 py-4 bg-esn-dark-blue text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Learn More About Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

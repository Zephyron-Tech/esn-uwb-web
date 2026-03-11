import Link from 'next/link'
import { Heart, Compass, ArrowRight } from 'lucide-react'

const paths = [
  {
    icon: <Heart className="w-10 h-10" />,
    heading: 'For Local Students',
    description:
      'Join our Buddy System and help international students discover Pilsen. Practice languages, make lifelong friendships, and gain intercultural experience — all while studying at UWB.',
    ctaText: 'Become a Buddy',
    ctaHref: '/local-student',
    borderColor: 'border-esn-orange',
    bgAccent: 'bg-esn-orange/5',
    buttonBg: 'bg-esn-orange',
    iconColor: 'text-esn-orange',
  },
  {
    icon: <Compass className="w-10 h-10" />,
    heading: 'For Incoming Students',
    description:
      'New to Pilsen? We have got you covered. From airport pickup to city orientation, buddy matching, and a packed events calendar — your Erasmus adventure starts here.',
    ctaText: 'Explore Resources',
    ctaHref: '/incoming-student',
    borderColor: 'border-esn-green',
    bgAccent: 'bg-esn-green/5',
    buttonBg: 'bg-esn-green',
    iconColor: 'text-esn-green',
  },
]

export default function TwoPaths() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
            Find Your Path
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you are a Czech student or arriving on Erasmus, there is a
            place for you in ESN UWB Pilsen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paths.map((path) => (
            <div
              key={path.heading}
              className={`rounded-2xl p-8 md:p-10 border-2 ${path.borderColor} ${path.bgAccent} hover:shadow-lg transition-shadow`}
            >
              <div className={`${path.iconColor} mb-6`}>{path.icon}</div>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                {path.heading}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {path.description}
              </p>
              <Link
                href={path.ctaHref}
                className={`inline-flex items-center justify-center px-8 py-4 ${path.buttonBg} text-white font-bold rounded-full hover:scale-105 transition-transform`}
              >
                {path.ctaText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

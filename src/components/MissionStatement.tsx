import { Heart, Globe, Users, Sparkles } from 'lucide-react'

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    label: 'Students Helping Students',
    accent: 'bg-esn-magenta/10 text-esn-magenta',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    label: 'Cultural Understanding',
    accent: 'bg-esn-cyan/10 text-esn-cyan',
  },
  {
    icon: <Users className="w-6 h-6" />,
    label: 'International Exchange',
    accent: 'bg-esn-green/10 text-esn-green',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    label: 'Self-Development',
    accent: 'bg-esn-orange/10 text-esn-orange',
  },
]

export default function MissionStatement() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: Mission text */}
          <div>
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                The Erasmus Student Network (ESN) is the biggest student
                organisation in Europe. We are present in more than 40 countries,
                with over 500 local sections at universities — and ESN UWB Pilsen
                is one of them.
              </p>
              <p>
                Our mission is to represent international students, thus providing
                opportunities for cultural understanding and self-development
                under the principle of{' '}
                <strong className="text-gray-900">
                  Students Helping Students
                </strong>
                .
              </p>
              <p>
                We support and develop student exchange on a local, national, and
                international level. Whether you are arriving on Erasmus or a
                local student wanting to help, there is a place for you with us.
              </p>
            </div>
          </div>

          {/* Right column: Value cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <div
                key={value.label}
                className="flex items-center gap-4 rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${value.accent}`}
                >
                  {value.icon}
                </div>
                <span className="font-bold font-heading text-gray-900">
                  {value.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

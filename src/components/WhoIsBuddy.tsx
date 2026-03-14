import { Users, Globe2, Languages, HeartHandshake } from 'lucide-react'

const benefits = [
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: 'International Environment',
    description: 'Experience the Erasmus vibe without leaving Pilsen by making friends from all over the world.',
  },
  {
    icon: <Languages className="w-6 h-6" />,
    title: 'Practice Languages',
    description: 'Improve your English or learn a completely new language by talking with native speakers.',
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: 'Help Others',
    description: 'Be the first point of contact for an incoming student and help them settle in a new country.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Join ESN Network',
    description: 'Become part of the biggest student association in Europe and join our local events.',
  },
]

export default function WhoIsBuddy() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
            Who is a Buddy?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Buddy System connects local students with incoming international
            students and turns arrival into belonging. As a Buddy, you will be more than
            just a guide — you will be a first friend, a familiar face, and a helping hand.
            You will help new students find their way around university life, discover the
            city, and experience the local culture with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start p-6 bg-gray-50 rounded-2xl hover:bg-esn-orange/5 border border-transparent hover:border-esn-orange/20 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-esn-orange/10 flex items-center justify-center text-esn-orange mr-6">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

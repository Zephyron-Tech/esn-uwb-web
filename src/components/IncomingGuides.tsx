import { FileText, Download, Map, BookOpen } from 'lucide-react'

const guides = [
  {
    title: 'Survival Guide',
    description: 'Everything you need to know before moving to Pilsen. Visa, accommodation, transportation, and more.',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'bg-esn-cyan',
    link: '#' // Placeholder for CMS-driven PDF link
  },
  {
    title: 'Welcome to Pilsen',
    description: 'A quick introduction to the city of Pilsen, its culture, university campuses, and student life.',
    icon: <Map className="w-8 h-8" />,
    color: 'bg-esn-green',
    link: '#'
  },
  {
    title: 'Buddy System Manual',
    description: 'Learn how the Buddy System works and what to expect from your local student match.',
    icon: <FileText className="w-8 h-8" />,
    color: 'bg-esn-magenta',
    link: '#'
  }
]

export default function IncomingGuides() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
            Essential Guides
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get ready for your Erasmus experience! Download our comprehensive guides to help you navigate your first weeks in Pilsen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative overflow-hidden"
            >
              {/* Decorative top accent */}
              <div className={`absolute top-0 left-0 w-full h-2 ${guide.color}`}></div>
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 ${guide.color} shadow-md group-hover:scale-110 transition-transform`}>
                {guide.icon}
              </div>
              
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                {guide.title}
              </h3>
              
              <p className="text-gray-600 flex-grow mb-8">
                {guide.description}
              </p>
              
              <a 
                href={guide.link}
                className="inline-flex items-center text-esn-dark-blue font-bold hover:text-esn-cyan transition-colors mt-auto"
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

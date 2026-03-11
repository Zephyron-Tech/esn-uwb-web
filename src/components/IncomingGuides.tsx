import { FileText, Download } from 'lucide-react'
import { getDocuments } from 'outstatic/server'

async function getGuides() {
  try {
    const guides = getDocuments('guides', [
      'title', 'description', 'fileUrl', 'publishedAt'
    ])
    return guides.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  } catch (error) {
    console.error("Error fetching guides:", error)
    return []
  }
}

export default async function IncomingGuides() {
  const guides = await getGuides()

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
          {guides.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-500">
              No guides are available at the moment. Please check back later.
            </div>
          ) : (
            guides.map((guide, index) => {
              // Assign brand colors cyclically to the cards
              const colors = ['bg-esn-cyan', 'bg-esn-green', 'bg-esn-magenta', 'bg-esn-orange']
              const color = colors[index % colors.length]

              return (
                <div 
                  key={guide.title} 
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-full h-2 ${color}`}></div>
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 ${color} shadow-md group-hover:scale-110 transition-transform`}>
                    <FileText className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-600 flex-grow mb-8">
                    {guide.description}
                  </p>
                  
                  {guide.fileUrl ? (
                    <a 
                      href={guide.fileUrl as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-esn-dark-blue font-bold hover:text-esn-cyan transition-colors mt-auto"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download PDF
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-gray-400 font-bold mt-auto">
                      File Unavailable
                    </span>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}

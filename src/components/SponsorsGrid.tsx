import { existsSync } from 'fs'
import path from 'path'
import { getDocuments } from 'outstatic/server'
import PartnerLogo from '@/components/PartnerLogo'

interface Partner {
  name: string
  description: string
  logo: string
  slug: string
}

function isValidImage(imagePath: string): boolean {
  if (!imagePath || imagePath.trim() === '') return false
  if (imagePath.startsWith('http')) return true
  if (imagePath.startsWith('/')) {
    return existsSync(path.join(process.cwd(), 'public', imagePath))
  }
  return false
}

async function getPartners(): Promise<Partner[]> {
  try {
    const docs = getDocuments('partners', ['title', 'description', 'coverImage', 'slug'])
    return docs.map((d: any) => ({
      name: d.title,
      description: d.description || '',
      logo: isValidImage(d.coverImage || '') ? d.coverImage : '',
      slug: d.slug || '',
    }))
  } catch (error) {
    console.error('Error fetching partners:', error)
    return []
  }
}

export default async function SponsorsGrid() {
  const partners = await getPartners()

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
              <div className="relative w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-all duration-300 overflow-hidden">
                <PartnerLogo src={partner.logo} alt={partner.name} slug={partner.slug} />
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

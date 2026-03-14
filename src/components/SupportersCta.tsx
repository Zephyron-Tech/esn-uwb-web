import { Users } from 'lucide-react'
import { getDocuments } from 'outstatic/server'

interface Supporter {
  name: string
  role: string
}

async function getSupporters(): Promise<Supporter[]> {
  try {
    const docs = getDocuments('supporters', ['title', 'description', 'slug'])
    return docs.map((d: any) => ({
      name: d.title,
      role: d.description || '',
    }))
  } catch (error) {
    console.error('Error fetching supporters:', error)
    return []
  }
}

export default async function SupportersCta() {
  const supporters = await getSupporters()

  // Group supporters by role
  const grouped: Record<string, string[]> = {}
  for (const s of supporters) {
    if (!grouped[s.role]) grouped[s.role] = []
    grouped[s.role].push(s.name)
  }

  const roles = Object.entries(grouped)

  if (roles.length === 0) return null

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
            Our Supporters
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Supporters are helper roles for our board members, keeping ESN UWB Pilsen running smoothly behind the scenes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {roles.map(([role, people]) => (
            <div
              key={role}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-esn-cyan/10 flex items-center justify-center text-esn-cyan mx-auto mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-esn-dark-blue uppercase tracking-wide mb-3">
                {role}
              </h3>
              <ul className="space-y-1">
                {people.map((name) => (
                  <li key={name} className="text-gray-700 font-medium">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

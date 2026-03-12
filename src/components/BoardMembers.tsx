import { existsSync } from 'fs'
import path from 'path'
import { Mail } from 'lucide-react'
import { type BoardMember } from '@/lib/placeholder-data'
import MemberPhoto from '@/components/MemberPhoto'

import { getDocuments } from 'outstatic/server'

function isValidPhoto(photoPath: string): boolean {
  if (!photoPath || photoPath.trim() === '') return false
  if (photoPath.startsWith('http')) return true
  if (photoPath.startsWith('/')) {
    return existsSync(path.join(process.cwd(), 'public', photoPath))
  }
  return false
}

async function getBoardMembers(): Promise<BoardMember[]> {
  try {
    const members = getDocuments('board-members', [
      'title', 'description', 'coverImage', 'slug', 'email'
    ])
    return members.map((m: any) => ({
      slug: m.slug,
      name: m.title,
      role: m.description,
      photo: isValidPhoto(m.coverImage || '') ? m.coverImage : '',
      email: m.email || '',
    }))
  } catch (error) {
    console.error("Error fetching board members:", error)
    return []
  }
}

export default async function BoardMembers() {
  const members = await getBoardMembers()

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
            Meet Our Board
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The people behind ESN UWB Pilsen — a team of dedicated volunteers
            making your exchange experience the best it can be.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.slug}
              className="bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-esn-cyan group transition-transform duration-300 hover:scale-105">
                <MemberPhoto src={member.photo} alt={member.name} />
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-esn-dark-blue font-medium mb-4">
                {member.role}
              </p>
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center text-sm text-gray-500 hover:text-esn-cyan transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

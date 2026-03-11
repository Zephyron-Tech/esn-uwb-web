import Image from 'next/image'
import { Mail } from 'lucide-react'
import {
  placeholderBoardMembers,
  type BoardMember,
} from '@/lib/placeholder-data'

import { getDocuments } from 'outstatic/server'

async function getBoardMembers(): Promise<BoardMember[]> {
  try {
    const members = getDocuments('board-members', [
      'title', 'description', 'coverImage', 'slug', 'email'
    ])
    return members.map((m: any) => ({
      slug: m.slug,
      name: m.title,
      role: m.description,
      photo: m.coverImage || '',
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
              className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-esn-cyan">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
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

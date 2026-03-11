import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar } from 'lucide-react'
import { placeholderNews, type NewsArticle } from '@/lib/placeholder-data'

import { getDocuments } from 'outstatic/server'

async function getLatestNews(): Promise<any[]> {
  try {
    const posts = getDocuments('news', [
      'title', 'description', 'coverImage', 'publishedAt', 'slug', 'author',
    ])
    return posts
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 3)
  } catch (error) {
    console.error("Error fetching news from Outstatic:", error)
    return []
  }
}

function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateStr))
}

export default async function LatestNews() {
  const articles = await getLatestNews()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
            What&apos;s Happening
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest events, trips, and announcements
            from ESN UWB Pilsen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                {article.coverImage ? (
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-esn-dark-blue/5">
                    <span className="text-gray-400 font-medium text-sm">No Image</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(article.publishedAt)}
                </div>
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3 line-clamp-2 group-hover:text-esn-cyan transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/news"
            className="inline-flex items-center justify-center px-8 py-4 bg-esn-dark-blue text-white font-bold rounded-full hover:scale-105 transition-transform"
          >
            View All News
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

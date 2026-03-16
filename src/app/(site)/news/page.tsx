import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ChevronRight } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { getDocuments } from 'outstatic/server'

export const metadata = {
  title: 'News | ESN UWB Pilsen',
  description: 'Latest news, events, and announcements from ESN UWB Pilsen for international and local students.',
}

async function getNews() {
  try {
    const posts = getDocuments('news', [
      'title', 'description', 'coverImage', 'publishedAt', 'slug', 'author',
    ])
    return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  } catch (error) {
    console.error("Error fetching news:", error)
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

export default async function NewsPage() {
  const articles = await getNews()

  return (
    <>
      <PageHeader
        title="Latest News"
        subtitle="Stay updated with everything happening at ESN UWB Pilsen. Catch up on trips, events, parties, and important announcements."
      />
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Content */}
        {articles.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No news yet!</h3>
            <p className="text-gray-500">Check back later for exciting updates.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  {article.coverImage ? (
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-esn-dark-blue">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-esn-cyan" />
                        <div className="w-3 h-3 rounded-full bg-esn-magenta" />
                        <div className="w-3 h-3 rounded-full bg-esn-green" />
                        <div className="w-3 h-3 rounded-full bg-esn-orange" />
                      </div>
                    </div>
                  )}
                  {/* Category/Tag Overlay (Optional) */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-esn-dark-blue text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    News
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2 text-esn-cyan" />
                    {formatDate(article.publishedAt)}
                  </div>
                  
                  <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3 line-clamp-2 group-hover:text-esn-magenta transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {article.description}
                  </p>
                  
                  {/* Read More Link */}
                  <div className="flex items-center text-esn-cyan font-semibold group-hover:text-esn-dark-blue transition-colors mt-auto">
                    Read article
                    <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        </div>
      </div>
    </>
  )
}

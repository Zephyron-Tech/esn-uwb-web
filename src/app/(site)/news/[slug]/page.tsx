import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ChevronLeft, User } from 'lucide-react'
import { getDocumentBySlug, getDocumentPaths } from 'outstatic/server'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  const posts = getDocumentPaths('news')
  return posts.map((post) => ({
    slug: post.params.slug,
  }))
}

async function getNewsPost(slug: string) {
  try {
    const post = getDocumentBySlug('news', slug, [
      'title',
      'description',
      'coverImage',
      'publishedAt',
      'author',
      'content',
    ])
    return post
  } catch (error) {
    console.error("Error fetching single news post:", error)
    return null
  }
}

function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateStr))
}

export default async function NewsArticlePage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getNewsPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="bg-white min-h-screen pb-24">
      {/* Header / Hero */}
      <div className="relative h-[60vh] w-full bg-esn-dark-blue flex items-end">
        {post.coverImage && (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover opacity-60"
            sizes="100vw"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <Link
            href="/news"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to News
          </Link>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm font-medium">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-esn-cyan" />
              {formatDate(post.publishedAt)}
            </div>
            {post.author?.name && (
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-esn-cyan" />
                {post.author.name}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {post.description && (
          <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12 pb-12 border-b border-gray-100">
            {post.description}
          </p>
        )}
        
        <div className="prose prose-lg md:prose-xl prose-blue max-w-none 
                        prose-headings:font-heading prose-headings:text-esn-dark-blue
                        prose-a:text-esn-cyan hover:prose-a:text-esn-dark-blue prose-a:transition-colors
                        prose-img:rounded-2xl prose-img:shadow-md"
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  )
}

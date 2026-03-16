import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Calendar } from 'lucide-react'
import { getDocumentBySlug, getDocuments } from 'outstatic/server'
import GalleryLightbox from '@/components/GalleryLightbox'

export async function generateStaticParams() {
  const albums = getDocuments('photos', ['slug'])
  return albums.map((album) => ({ slug: album.slug }))
}

const FIELDS = ['title', 'description', 'coverImage', 'publishedAt', 'gallery', 'slug'] as const

async function getAlbum(slug: string) {
  try {
    // Try direct filename lookup first (slug === filename)
    const direct = getDocumentBySlug('photos', slug, [...FIELDS])
    if (direct) return direct
    // Fallback: scan all documents for a matching frontmatter slug
    const all = getDocuments('photos', [...FIELDS])
    return all.find((doc) => doc.slug === slug) ?? null
  } catch {
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

export default async function GalleryAlbumPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const album = await getAlbum(slug)

  if (!album) notFound()

  // Outstatic Gallery UI may store images as objects { src: "..." } or plain strings
  function toSrc(item: unknown): string | null {
    if (typeof item === 'string') return item
    if (item && typeof item === 'object') {
      const obj = item as Record<string, unknown>
      if (typeof obj.src === 'string') return obj.src
      if (typeof obj.url === 'string') return obj.url
      if (typeof obj.label === 'string') return obj.label
      if (typeof obj.filename === 'string') return `/images/${obj.filename}`
    }
    return null
  }

  const photos = Array.isArray(album.gallery)
    ? (album.gallery as unknown[]).map(toSrc).filter((s): s is string => s !== null)
    : []

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Hero */}
      <div className="relative h-64 md:h-96 w-full bg-esn-dark-blue">
        {album.coverImage && (
          <Image
            src={album.coverImage as string}
            alt={album.title as string}
            fill
            className="object-cover opacity-60"
            sizes="100vw"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <Link
            href="/gallery"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors w-fit"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Gallery
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-2">
            {album.title as string}
          </h1>
          <div className="flex items-center text-white/70 text-sm">
            <Calendar className="w-4 h-4 mr-2 text-esn-cyan" />
            {formatDate(album.publishedAt as string)}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {album.description && (
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            {album.description as string}
          </p>
        )}

        {photos.length > 0 ? (
          <GalleryLightbox images={photos} altPrefix={album.title as string} />
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
            <p className="text-gray-500">No photos in this album yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}

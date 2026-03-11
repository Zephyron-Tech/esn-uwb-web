import Image from 'next/image'
import { getDocuments } from 'outstatic/server'

export const metadata = {
  title: 'Gallery | ESN UWB Pilsen',
  description: 'Photos and memories from ESN UWB Pilsen events, trips, and parties.',
}

async function getPhotos() {
  try {
    const photos = getDocuments('photos', [
      'title', 'description', 'coverImage', 'publishedAt', 'slug'
    ])
    return photos.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  } catch (error) {
    console.error("Error fetching photos:", error)
    return []
  }
}

export default async function GalleryPage() {
  const albums = await getPhotos()

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-heading text-bg-esn-dark-blue mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Relive the best memories from our trips, welcoming parties, and events.
          </p>
        </div>

        {/* Content */}
        {albums.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No photos yet!</h3>
            <p className="text-gray-500">Check back later for event memories.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <div
                key={album.slug}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                  {album.coverImage ? (
                    <Image
                      src={album.coverImage}
                      alt={album.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-esn-dark-blue/5">
                      <span className="text-gray-400 font-medium">No Image</span>
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold font-heading text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {album.title}
                    </h3>
                    <p className="text-gray-200 text-sm line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {album.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

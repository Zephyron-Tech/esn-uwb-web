import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* About Preview Section (Placeholder) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-900">
          <h2 className="text-4xl font-bold font-heading mb-8">What do we do?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a non-profit international student organization. Our mission is to represent international students,
            providing opportunities for cultural understanding and self-development under the principle of
            <strong> Students Helping Students.</strong>
          </p>
        </div>
      </section>
    </div>
  )
}

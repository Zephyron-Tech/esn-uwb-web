import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-esn-dark-blue to-black overflow-hidden">
        {/* Background Pattern Placeholder */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-20 w-96 h-96 bg-esn-cyan rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 -right-20 w-96 h-96 bg-esn-magenta rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold font-kelson mb-6 tracking-tight">
            We are <span className="text-esn-cyan">ESN</span> <span className="text-esn-magenta">UWB</span> <span className="text-esn-green">Pilsen</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-10 text-gray-300">
            Connecting international students with local life in the City of Beer. Make your Erasmus experience unforgettable!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/incoming-student" 
              className="px-8 py-4 bg-esn-cyan hover:bg-esn-cyan/90 text-white font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center"
            >
              I am an Incoming Student <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link 
              href="/local-student" 
              className="px-8 py-4 border-2 border-white hover:bg-white hover:text-esn-dark-blue text-white font-bold rounded-full transition-all transform hover:scale-105"
            >
              Join ESN Pilsen
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section (Placeholder) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-900">
          <h2 className="text-4xl font-bold font-kelson mb-8">What do we do?</h2>
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

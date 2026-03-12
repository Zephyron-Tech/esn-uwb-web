import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-esn-dark-blue overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center" suppressHydrationWarning>
      {/* Background Hero Image */}
      <Image
        src="/images/hero.jpg"
        alt="ESN UWB Pilsen students at an event"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      {/* Gradient Overlay — dark left for text readability, fades right to show image */}
      <div className="absolute inset-0 bg-gradient-to-r from-esn-dark-blue via-esn-dark-blue/85 to-esn-dark-blue/30"></div>

      {/* Mobile: stronger overlay for readability */}
      <div className="absolute inset-0 bg-esn-dark-blue/40 md:hidden"></div>

      {/* SVG network pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        aria-hidden="true"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="network-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="2" fill="white" />
              <circle cx="50" cy="30" r="1.5" fill="white" />
              <circle cx="90" cy="15" r="2" fill="white" />
              <circle cx="30" cy="60" r="1.5" fill="white" />
              <circle cx="70" cy="70" r="2" fill="white" />
              <circle cx="15" cy="90" r="1.5" fill="white" />
              <circle cx="85" cy="85" r="2" fill="white" />
              <circle cx="50" cy="95" r="1.5" fill="white" />
              <line x1="10" y1="10" x2="50" y2="30" stroke="white" strokeWidth="0.5" />
              <line x1="50" y1="30" x2="90" y2="15" stroke="white" strokeWidth="0.5" />
              <line x1="50" y1="30" x2="30" y2="60" stroke="white" strokeWidth="0.5" />
              <line x1="30" y1="60" x2="70" y2="70" stroke="white" strokeWidth="0.5" />
              <line x1="70" y1="70" x2="90" y2="15" stroke="white" strokeWidth="0.5" />
              <line x1="70" y1="70" x2="85" y2="85" stroke="white" strokeWidth="0.5" />
              <line x1="15" y1="90" x2="30" y2="60" stroke="white" strokeWidth="0.5" />
              <line x1="15" y1="90" x2="50" y2="95" stroke="white" strokeWidth="0.5" />
              <line x1="85" y1="85" x2="50" y2="95" stroke="white" strokeWidth="0.5" />
              <line x1="10" y1="10" x2="15" y2="90" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-pattern)" />
        </svg>
      </div>

      {/* Colorful top border */}
      <div className="absolute top-0 left-0 w-full h-2 flex z-20">
        <div className="flex-1 bg-esn-cyan"></div>
        <div className="flex-1 bg-esn-magenta"></div>
        <div className="flex-1 bg-esn-green"></div>
        <div className="flex-1 bg-esn-orange"></div>
        <div className="flex-1 bg-esn-dark-blue"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div>
          <h1 className="font-heading uppercase tracking-wide">
            <span className="block text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2">
              Welcome to
            </span>
            <span className="block text-esn-cyan text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold">
              ESN UWB Pilsen
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 font-sans max-w-xl">
            Connecting international students with local life in the City of
            Beer. Make your Erasmus experience unforgettable!
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/local-student"
              className="inline-flex items-center justify-center px-8 py-4 bg-esn-orange text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Buddy for Locals
            </Link>
            <Link
              href="/incoming-student"
              className="inline-flex items-center justify-center px-8 py-4 bg-esn-green text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Guide for Incomings
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

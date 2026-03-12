import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-esn-dark-blue overflow-hidden py-16 md:py-24 lg:py-32">
      {/* SVG network pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
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
              {/* Nodes */}
              <circle cx="10" cy="10" r="2" fill="white" />
              <circle cx="50" cy="30" r="1.5" fill="white" />
              <circle cx="90" cy="15" r="2" fill="white" />
              <circle cx="30" cy="60" r="1.5" fill="white" />
              <circle cx="70" cy="70" r="2" fill="white" />
              <circle cx="15" cy="90" r="1.5" fill="white" />
              <circle cx="85" cy="85" r="2" fill="white" />
              <circle cx="50" cy="95" r="1.5" fill="white" />
              {/* Connections */}
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Left column — Text & CTAs */}
          <div className="md:col-span-3 text-center md:text-left">
            <h1 className="font-heading uppercase tracking-wide">
              <span className="block text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2">
                Welcome to
              </span>
              <span className="block text-esn-cyan text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold">
                ESN UWB Pilsen
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 font-sans max-w-xl mx-auto md:mx-0">
              Connecting international students with local life in the City of
              Beer. Make your Erasmus experience unforgettable!
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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

          {/* Right column — Circle photo composition */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px]">
              {/* Circle 1: Top-right, Magenta border — largest */}
              <div
                className="absolute top-0 right-0 w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full border-4 border-esn-magenta overflow-hidden shadow-2xl z-30 transition-transform duration-500 hover:scale-105"
                style={{ boxShadow: '0 10px 60px rgba(236, 0, 140, 0.4)' }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="https://picsum.photos/seed/esn-hero-1/400/400"
                    alt="International students at an ESN event"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-esn-magenta/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Circle 2: Left-center, Green border */}
              <div
                className="absolute top-1/4 -left-4 w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full border-4 border-esn-green overflow-hidden shadow-2xl z-20 transition-transform duration-500 hover:scale-105"
                style={{ boxShadow: '0 10px 60px rgba(122, 193, 67, 0.4)' }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="https://picsum.photos/seed/esn-hero-2/400/400"
                    alt="Students exploring Pilsen"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 144px, (max-width: 1024px) 176px, 208px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-esn-green/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Circle 3: Bottom-center, Cyan border */}
              <div
                className="absolute bottom-0 left-1/4 w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-esn-cyan overflow-hidden shadow-2xl z-10 transition-transform duration-500 hover:scale-105"
                style={{ boxShadow: '0 10px 60px rgba(0, 174, 239, 0.4)' }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="https://picsum.photos/seed/esn-hero-3/400/400"
                    alt="ESN buddy program activities"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-esn-cyan/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

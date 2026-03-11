interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative bg-esn-dark-blue overflow-hidden py-16 md:py-20">
      {/* Network pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        aria-hidden="true"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="page-header-pattern"
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
          <rect width="100%" height="100%" fill="url(#page-header-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

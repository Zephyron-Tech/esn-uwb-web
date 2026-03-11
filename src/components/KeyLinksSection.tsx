import { CreditCard, CalendarDays, ExternalLink } from 'lucide-react'

export default function KeyLinksSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-esn-dark-blue/5 rounded-l-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The two most important things for your Erasmus life: knowing where to find events, and getting discounts across Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Artemis Card */}
          <div className="bg-esn-dark-blue rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <CalendarDays className="w-32 h-32" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full font-bold text-sm mb-6 w-fit backdrop-blur-sm">
                Event Registration
              </div>
              <h3 className="text-4xl font-bold font-heading mb-4">Artemis</h3>
              <p className="text-blue-100 text-lg mb-8 max-w-md">
                Artemis is our internal system for managing events. You need an account to sign up for trips, parties, and cultural activities organized by ESN UWB Pilsen.
              </p>
              
              <ul className="space-y-3 mb-10 text-blue-50">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-esn-cyan rounded-full mr-3"></div>
                  Book spots for highly demanded trips
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-esn-cyan rounded-full mr-3"></div>
                  See the full calendar of events
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-esn-cyan rounded-full mr-3"></div>
                  Manage your event payments
                </li>
              </ul>
              
              <a 
                href="https://artemis.esn.cz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-esn-cyan text-white font-bold rounded-lg hover:bg-white hover:text-esn-dark-blue transition-colors mt-auto w-fit"
              >
                Go to Artemis
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>

          {/* ESNcard Card */}
          <div className="bg-esn-green rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <CreditCard className="w-32 h-32" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full font-bold text-sm mb-6 w-fit backdrop-blur-sm">
                Discounts & Membership
              </div>
              <h3 className="text-4xl font-bold font-heading mb-4">ESNcard</h3>
              <p className="text-green-50 text-lg mb-8 max-w-md">
                The ESNcard is the membership card of the Erasmus Student Network. It gives you access to all our services and thousands of discounts across Europe.
              </p>
              
              <ul className="space-y-3 mb-10 text-green-50">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  10% discount on Ryanair flights & free luggage
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Discounts in local pubs, cafes, and gyms
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Cheaper entry to ESN UWB events
                </li>
              </ul>
              
              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://esncard.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-esn-green font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  See All Discounts
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-esn-green border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
                >
                  How to get one
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

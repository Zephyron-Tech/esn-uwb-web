import { CreditCard } from 'lucide-react'

export default function KeyLinksSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get access to thousands of discounts across Europe and enjoy exclusive benefits during your Erasmus experience.
          </p>
        </div>

        <div className="flex justify-center">
          {/* ESNcard Card */}
          <div className="bg-esn-green rounded-3xl p-10 md:p-12 text-white shadow-2xl relative overflow-hidden group max-w-4xl w-full hover:shadow-[0_20px_60px_rgba(122,193,67,0.3)] transition-all duration-500">
            {/* Background Icon - enhanced */}
            <div className="absolute -top-10 -right-10 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
              <CreditCard className="w-64 h-64" />
            </div>

            {/* Content Grid: 2 columns on desktop */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* Left Content (3 columns) */}
              <div className="lg:col-span-3">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full font-bold text-sm mb-6 w-fit backdrop-blur-sm">
                  Discounts & Membership
                </div>

                <h3 className="text-5xl font-bold font-heading mb-6">ESNcard</h3>

                <p className="text-green-50 text-lg mb-8 leading-relaxed">
                  The ESNcard is the membership card of the Erasmus Student Network. It gives you access to all our services and thousands of discounts across Europe.
                </p>

                <ul className="space-y-4 mb-10 text-green-50">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-base">Cheaper entry to ESN UWB events</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-base">10% discount on Ryanair flights & free luggage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-base">10% off FlixBus tickets across Europe</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-base">Discounts at 40+ partner brands in food, travel & entertainment</span>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://esncard.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-esn-green font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    See All Discounts
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-8 py-4 bg-esn-green border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    How to get one
                  </a>
                </div>
              </div>

              {/* Right Visual (2 columns) - decorative icon */}
              <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                    <CreditCard className="w-24 h-24 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

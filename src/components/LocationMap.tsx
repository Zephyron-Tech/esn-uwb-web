'use client'

import { Building2 } from 'lucide-react'

export default function LocationMap() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
            How to Get to Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our office is located at the Faculty of Applied Sciences (FAV), University of West Bohemia.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          {/* Text Directions */}
          <div className="w-full lg:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-esn-dark-blue text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-esn-magenta/20 text-esn-magenta mb-8">
              <Building2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold font-heading mb-6">Our Office</h3>

            <ul className="space-y-6 list-none m-0 p-0">
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-esn-cyan before:rounded-full">
                <strong>By Tram:</strong> Take Tram No. 4 to the last stop &quot;Bory&quot;, then walk (~10 min) or take Bus 30/24 to &quot;Západočeská univerzita&quot;.
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-esn-green before:rounded-full">
                <strong>By Bus:</strong> Bus lines 30 and 24 go directly to the &quot;Západočeská univerzita&quot; stop at the Bory campus.
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-esn-orange before:rounded-full">
                <strong>Office:</strong> FAV — Faculty of Applied Sciences, room UN606, 6th floor, Pilsen
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-esn-magenta before:rounded-full">
                <strong>Mailing address:</strong> Kollárova 1239/19, 301 00 Plzeň, CZ
              </li>
            </ul>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Fakulta+aplikovaných+věd+ZČU+Plzeň"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center py-4 px-6 bg-white text-esn-dark-blue font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Map Embed (Interactive iframe) */}
          <div className="w-full lg:w-2/3 h-[400px] lg:h-auto min-h-[500px]">
             <iframe
                src="https://maps.google.com/maps?q=Fakulta+aplikovaných+věd+ZČU+Plzeň&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ESN UWB Pilsen Office Location — FAV"
                className="w-full h-full grayscale-[20%] focus:grayscale-0 transition-all duration-500"
              ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

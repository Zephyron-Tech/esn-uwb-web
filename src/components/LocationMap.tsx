'use client'

import { MapPin } from 'lucide-react'

export default function LocationMap() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
            How to Get to Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our central office is located at Kollárova 1239/19 near the city center. 
            You can reach us easily by walking from the city center or from the central bus station.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          {/* Text Directions */}
          <div className="w-full lg:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-esn-dark-blue text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-esn-magenta/20 text-esn-magenta mb-8">
              <MapPin className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold font-heading mb-6">Central Office</h3>
            
            <ul className="space-y-6 list-none m-0 p-0">
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-esn-cyan before:rounded-full">
                <strong>By Tram:</strong> Take Tram No. 2 to "Palackého náměstí" or Tram 1/2 to "Sady Pětatřicátníků" and walk a few minutes.
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-esn-green before:rounded-full">
                <strong>By Bus:</strong> The main bus station (Centrální autobusové nádraží - CAN) is just around the corner, very close to our office.
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-esn-orange before:rounded-full">
                <strong>Location:</strong> Our office is at Kollárova 1239/19. Just look for our logo or ask around.
              </li>
            </ul>
            
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Kollárova+1239%2F19,+Plzeň" 
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
                src="https://maps.google.com/maps?q=Kollárova+1239%2F19,+Plzeň&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ESN UWB Pilsen Office Location"
                className="w-full h-full grayscale-[20%] contrast-125 focus:grayscale-0 transition-all duration-500"
              ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

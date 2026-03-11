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
            Our office is located at the university dormitories in the Bory campus. 
            You can easily reach us by public transport (Tram 4 or Bus 30).
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          {/* Text Directions */}
          <div className="w-full lg:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-esn-dark-blue text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-esn-magenta/20 text-esn-magenta mb-8">
              <MapPin className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold font-heading mb-6">Máchova Dormitory</h3>
            
            <ul className="space-y-6">
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-esn-cyan before:rounded-full">
                <strong>By Tram:</strong> Take Tram No. 4 towards "Univerzita" and get off at the final stop. Walk approx. 5 minutes towards the dorms.
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-esn-green before:rounded-full">
                <strong>By Bus:</strong> Take Bus No. 30 and get off at "Západočeská univerzita" stop.
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-esn-orange before:rounded-full">
                <strong>Finding the Office:</strong> Once inside the U1/U2 building, follow the signs for ESN or ask at the reception.
              </li>
            </ul>
            
            <a 
              href="https://goo.gl/maps/QWqYjqzD2LwX9D2j6" 
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
                src="https://maps.google.com/maps?q=Koleje%20Z%C4%8CU%20-%20M%C3%A1chova,%20Plze%C5%88&t=&z=15&ie=UTF8&iwloc=&output=embed"
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

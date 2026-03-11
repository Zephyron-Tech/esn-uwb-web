import { MapPin, Mail, Clock, Map as MapIcon } from 'lucide-react'

export default function ContactInfo() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Brand Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-esn-cyan/5 rounded-bl-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question, want to become a partner, or just want to say hi? 
            Here is how you can reach the ESN UWB Pilsen team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Contact Card */}
          <div className="lg:col-span-1 bg-esn-dark-blue rounded-3xl p-8 text-white shadow-xl flex flex-col h-full relative overflow-hidden">
             {/* Decorative lines */}
             <div className="absolute top-0 right-0 w-32 h-32 border-4 border-esn-magenta/20 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
             
             <h3 className="text-2xl font-bold font-heading mb-8 relative z-10">Contact Details</h3>
             
             <div className="space-y-8 relative z-10 flex-grow">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-esn-cyan mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1 text-blue-50">Email us at</h4>
                    <a href="mailto:info@esn.zcu.cz" className="text-lg hover:text-esn-cyan transition-colors">info@esn.zcu.cz</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-esn-magenta mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1 text-blue-50">Visit our office</h4>
                    <p className="text-blue-100 leading-relaxed">
                      Univerzitní 22<br />
                      301 00 Plzeň 3<br />
                      Dormitory Máchova (U1, U2)<br />
                      Czech Republic
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-esn-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1 text-blue-50">Office Hours</h4>
                    <p className="text-blue-100">
                      Check our Instagram for the<br />current week's office hours.
                    </p>
                  </div>
                </div>
             </div>
          </div>

          {/* Social Media & Quick Links */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Instagram Card */}
              <a 
                href="https://www.instagram.com/esnuwbpilsen/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-3xl p-8 text-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-2">Instagram</h3>
                  <p className="text-white/90">Follow us for real-time updates, event photos, and office hours.</p>
                </div>
                <div className="mt-8 flex justify-end">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ExternalLinkIcon />
                  </div>
                </div>
              </a>

              {/* Facebook Card */}
              <a 
                href="https://www.facebook.com/esnuwbpilsen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-[#1877F2] rounded-3xl p-8 text-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-2">Facebook</h3>
                  <p className="text-white/90">Join our exchange student groups and find event details.</p>
                </div>
                <div className="mt-8 flex justify-end">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ExternalLinkIcon />
                  </div>
                </div>
              </a>

               {/* LinkedIn Card */}
               <a 
                href="https://www.linkedin.com/company/esn-uwb-pilsen/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-[#0A66C2] rounded-3xl p-8 text-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between sm:col-span-2"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="max-w-md">
                    <h3 className="text-2xl font-bold font-heading mb-2">LinkedIn</h3>
                    <p className="text-white/90">Connect with us on a professional level. Ideal for potential partners and alumni.</p>
                  </div>
                  <div className="mt-6 sm:mt-0 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <ExternalLinkIcon />
                  </div>
                </div>
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
    </svg>
  )
}

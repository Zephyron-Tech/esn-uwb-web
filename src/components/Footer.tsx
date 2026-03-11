import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Linkedin, ExternalLink, MapPin, Globe } from 'lucide-react'

const socialLinks = [
  { name: 'Instagram', icon: <Instagram size={22} />, href: 'https://www.instagram.com/esnuwbpilsen/' },
  { name: 'Facebook', icon: <Facebook size={22} />, href: 'https://www.facebook.com/esnuwbpilsen' },
  { name: 'LinkedIn', icon: <Linkedin size={22} />, href: 'https://www.linkedin.com/company/esn-uwb-pilsen/' },
]

export default function Footer() {
  return (
    <footer className="bg-esn-dark-blue text-white relative pt-16 pb-8 overflow-hidden">
      {/* Colorful ESN Top Border */}
      <div className="absolute top-0 left-0 w-full h-2 flex">
        <div className="flex-1 bg-esn-cyan"></div>
        <div className="flex-1 bg-esn-magenta"></div>
        <div className="flex-1 bg-esn-green"></div>
        <div className="flex-1 bg-esn-orange"></div>
        <div className="flex-1 bg-esn-dark-blue"></div>
      </div>

      {/* Decorative subtle background accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-esn-cyan/5 rounded-full blur-3xl pointer-events-none animate-float"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-esn-magenta/5 rounded-full blur-3xl pointer-events-none animate-float-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand and Slogan (Takes more space on large screens) */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col space-y-6">
            <div className="bg-white inline-block p-4 rounded-2xl w-max shadow-lg mb-2">
              <Image 
                src="/logo.svg" 
                alt="ESN UWB Pilsen Logo" 
                width={200} 
                height={60} 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-blue-100 text-lg max-w-md leading-relaxed">
              Students helping students. Making your exchange semester in Pilsen unforgettable.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-esn-magenta hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-xl font-bold mb-6 font-heading text-white">Important Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://artemis.esn.org/" target="_blank" rel="noopener noreferrer" className="group flex items-center text-blue-100 hover:text-esn-cyan transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-esn-cyan mr-3 group-hover:scale-150 transition-transform"></span>
                  Artemis System <ExternalLink size={14} className="ml-2 opacity-50 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a href="https://esncard.org/" target="_blank" rel="noopener noreferrer" className="group flex items-center text-blue-100 hover:text-esn-green transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-esn-green mr-3 group-hover:scale-150 transition-transform"></span>
                  ESNcard <ExternalLink size={14} className="ml-2 opacity-50 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <Link href="/about-us" className="group flex items-center text-blue-100 hover:text-esn-magenta transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-esn-magenta mr-3 group-hover:scale-150 transition-transform"></span>
                  About our Board
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group flex items-center text-blue-100 hover:text-esn-orange transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-esn-orange mr-3 group-hover:scale-150 transition-transform"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Address & Contact */}
          <div className="md:col-span-6 lg:col-span-4">
            <h3 className="text-xl font-bold mb-6 font-heading text-white">ESN UWB Pilsen</h3>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-start">
                <Globe size={20} className="text-esn-cyan mr-3 mt-0.5 flex-shrink-0" />
                <span>Erasmus Student Network<br />West Bohemia</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-esn-magenta mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  Univerzitní 22, 301 00 Plzeň<br />
                  Dormitory Máchova (U1, U2)<br />
                  Czech Republic
                </span>
              </li>
            </ul>
            <div className="mt-8 inline-block px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-blue-200">
              Member of ESN Czech Republic & ESN International.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-blue-200 text-sm">
          <p>© {new Date().getFullYear()} ESN UWB Pilsen. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <a href="https://github.com/Zephyron-Tech/esn-uwb-web" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
               GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

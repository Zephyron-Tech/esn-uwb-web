import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Linkedin, ExternalLink } from 'lucide-react'

const socialLinks = [
  { name: 'Instagram', icon: <Instagram size={24} />, href: 'https://www.instagram.com/esn_uwb_pilsen/' },
  { name: 'Facebook', icon: <Facebook size={24} />, href: 'https://www.facebook.com/ESNUWBPilsen' },
  { name: 'LinkedIn', icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/company/esnuwbpilsen/' },
]

export default function Footer() {
  return (
    <footer className="bg-esn-dark-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand and Slogan */}
          <div className="flex flex-col space-y-6">
            <Image 
              src="/logo.svg" 
              alt="ESN Logo" 
              width={200} 
              height={60} 
              className="brightness-0 invert h-12 w-auto"
            />
            <p className="text-gray-300 max-w-xs">
              Students helping students. Making your exchange semester in Pilsen unforgettable.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-esn-cyan transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-kelson">Important Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://artemis.esn.org/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-esn-cyan transition-colors">
                  Artemis System <ExternalLink size={16} className="ml-2" />
                </a>
              </li>
              <li>
                <a href="https://esncard.org/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-esn-cyan transition-colors">
                  ESNcard <ExternalLink size={16} className="ml-2" />
                </a>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-esn-cyan transition-colors">About our Board</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-esn-cyan transition-colors">Contact us</Link>
              </li>
            </ul>
          </div>

          {/* Legal / Project */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-kelson">ESN UWB Pilsen</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Erasmus Student Network West Bohemia<br />
              Univerzitní 8, 301 00 Plzeň<br />
              Czech Republic
            </p>
            <div className="mt-8">
              <p className="text-gray-500 text-xs">
                Member of ESN Czech Republic & ESN International.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} ESN UWB Pilsen. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Globe } from 'lucide-react'

const navLinks = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Local Student', href: '/local-student' },
  { name: 'Incoming Student', href: '/incoming-student' },
  { name: 'News', href: '/news' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
  { name: 'Sponsors', href: '/sponsors' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo.svg"
                alt="ESN UWB Pilsen Logo"
                width={150}
                height={50}
                priority
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-200 relative ${
                  pathname === link.href
                    ? 'text-esn-cyan'
                    : 'text-gray-700 hover:text-esn-cyan'
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-esn-cyan" />
                )}
              </Link>
            ))}

            {/* Lang Switcher Placeholder */}
            <div className="flex items-center space-x-2 border-l pl-8 ml-4 border-gray-200 text-gray-700">
              <Globe size={20} className="text-esn-magenta transition-transform duration-300 hover:rotate-12" />
              <button className="hover:text-esn-cyan font-bold transition-all duration-200 hover:scale-110">
                EN
              </button>
              <span>/</span>
              <button className="hover:text-esn-cyan transition-all duration-200 text-gray-400 hover:scale-110">
                CZ
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-esn-cyan focus:outline-none transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-3 py-4 text-base font-medium border-b border-gray-50 transition-all duration-200 ${
                pathname === link.href
                  ? 'text-esn-cyan bg-esn-cyan/5'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-esn-cyan'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center px-3 py-4 space-x-4">
            <Globe size={20} className="text-esn-magenta" />
            <div className="flex space-x-2 font-medium">
              <button className="text-esn-cyan font-bold transition-transform duration-200 hover:scale-110">
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button className="text-gray-700 transition-all duration-200 hover:text-esn-cyan hover:scale-110">
                CZ
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

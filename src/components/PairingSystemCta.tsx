import { Users, ExternalLink } from 'lucide-react'

export default function PairingSystemCta() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-esn-cyan/10 flex items-center justify-center text-esn-cyan mx-auto mb-8">
            <Users className="w-8 h-8" />
          </div>

          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-6">
            Pairing System for Members
          </h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Already a member? Log in to the pairing system to get matched
            with your incoming Erasmus student.
          </p>

          <a
            href="https://esn-uwb.artemis.esnhk.cz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-esn-cyan text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Open Pairing System
            <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

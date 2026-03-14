import { Heart, ExternalLink } from 'lucide-react'

export default function TrustForm() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-esn-cyan/10 flex items-center justify-center text-esn-cyan mx-auto mb-8">
            <Heart className="w-8 h-8" />
          </div>

          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-6">
            Trust Form
          </h2>

          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            If you have any struggle (e.g. life in Pilsen, personal problems,
            studies, any Erasmus student, Buddy or member of Buddy System), feel
            free to confide in here.
          </p>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            This form is completely <strong className="text-gray-900">ANONYMOUS</strong>.
            We would like you to know that you're not alone. We will try our best
            to help you if you let us. If you don't want to use this form, feel
            free to contact any Board member directly!
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeRTvYnsfIw6nTiZfWEFmQNFrhH7u0hF_bxH4sR---4SkYbLw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-esn-cyan text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Open Trust Form
            <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'

interface JoinUsCtaProps {
  title?: string
  description?: string
  buttonText?: string
  formLink?: string
}

export default function JoinUsCta({
  title = "Ready to become a Buddy?",
  description = "Join our community today and make someone's Erasmus experience unforgettable. Registration takes just a few minutes.",
  buttonText = "Register via Google Forms",
  formLink = "#"
}: JoinUsCtaProps) {
  return (
    <section className="py-24 bg-esn-orange/10 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-esn-orange/20 mix-blend-multiply filter blur-2xl opacity-70"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-esn-magenta/20 mix-blend-multiply filter blur-2xl opacity-70"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold font-heading text-gray-900 mb-6">
          {title}
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        
        <a
          href={formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-esn-orange text-white font-bold rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          {buttonText}
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

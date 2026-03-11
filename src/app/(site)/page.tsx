import Hero from '@/components/Hero'
import AboutPreview from '@/components/AboutPreview'
import TwoPaths from '@/components/TwoPaths'
import LatestNews from '@/components/LatestNews'
import Partners from '@/components/Partners'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutPreview />
      <TwoPaths />
      <LatestNews />
      <Partners />
    </div>
  )
}

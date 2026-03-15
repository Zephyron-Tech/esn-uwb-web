'use client'

import Image from 'next/image'
import {
  Handshake, Plane, Bus, Smartphone, Package, Home, BookOpen, Newspaper,
  Heart, Coffee, Leaf, Sun, Monitor, Clock, ShieldPlus, Sparkles,
  GraduationCap, type LucideIcon,
} from 'lucide-react'
import { useState } from 'react'

const partnerIconMap: Record<string, LucideIcon> = {
  ryanair: Plane,
  flixbus: Bus,
  vodafone: Smartphone,
  eurosender: Package,
  spotahome: Home,
  perlego: BookOpen,
  'the-economist': Newspaper,
  'amnesty-international': Heart,
  'boho-co': Coffee,
  nesnezeno: Leaf,
  'rise-and-shine': Sun,
  quanti: Monitor,
  timetravels: Clock,
  zachranka: ShieldPlus,
  happygo: Sparkles,
  dzs: GraduationCap,
}

export default function PartnerLogo({ src, alt, slug }: { src: string; alt: string; slug?: string }) {
  const [error, setError] = useState(false)
  const Icon = (slug && partnerIconMap[slug]) || Handshake

  if (error || !src || src.trim() === '') {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Icon className="w-10 h-10 text-gray-400" />
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-contain p-2"
      sizes="80px"
      onError={() => setError(true)}
    />
  )
}

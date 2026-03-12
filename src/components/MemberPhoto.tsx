'use client'

import Image from 'next/image'
import { User } from 'lucide-react'
import { useState } from 'react'

export default function MemberPhoto({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false)

  if (error || !src || src.trim() === '') {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <User className="w-16 h-16 text-gray-400" />
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
      sizes="128px"
      onError={() => setError(true)}
    />
  )
}

'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

// ... dein clients array hier lassen ...
const clients = [
  { href: '/logohms.webp' },
  { href: '/logo1.webp' },
  { href: '/MSH LOGO WHITE.png' },
  { href: '/simonlogo.webp' },
  { href: '/Graf_logo.svg' },
  { href: '/logocd.webp' },
  { href: '/heureka-baufinanzierung-brand-logo.png' },
  { href: '/logoalexander.png' },
  { href: '/vlh-nuernberg.webp' },
]

export function MovingLogos() {
  return (
    <div className="w-full py-4 bg-transparent overflow-hidden">
      <div className="flex animate-scroll-infinite w-max hover:pause">
        {/* Wir rendern die Gruppe 3x für nahtlosen Loop auf großen Screens */}
        {[...Array(3)].map((_, groupIndex) => (
          <div key={`group-${groupIndex}`} className="flex items-center">
            {clients.map((client, idx) => (
              <div
                key={`client-${groupIndex}-${idx}`}
                className="relative mx-4 sm:mx-8 w-24 sm:w-32 md:w-40 aspect-[3/2] flex items-center justify-center"
              >
                <Image
                  src={client.href}
                  alt="Partner Logo"
                  fill
                  sizes="(max-width: 768px) 100px, 160px"
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
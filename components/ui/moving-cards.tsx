'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

const clients = [
  {
    href: '/logohms.webp',
  },
  {
    href: '/logo1.webp',
  },
  {
    href: '/MSH LOGO WHITE.png',
  },
  {
    href: '/simonlogo.webp',
  },
  {
    href: '/logo4.webp',
  },
  {
    href: '/logocd.webp',
  },
  {
    href: '/heureka-baufinanzierung-brand-logo.png',
  },
  {
    href: '/logoalexander.png',
  },
]

export function MovingLogos() {
  return (
    <div className="relative bg-transparent py-4 sm:py-6 lg:py-8 w-full">
      {/* Container mit maximalem Platz */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Vollbreite Logo Carousel */}
        <div className="relative w-full overflow-hidden">
          {/* Scrolling Container mit perfekter endloser Schleife */}
          <div className="flex animate-scroll-infinite w-max" style={{ willChange: 'transform' }}>
            {/* Erste Gruppe der Logos */}
            {clients.map((client, idx) => (
              <div
                key={`group1-${idx}`}
                className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4 lg:mx-6 xl:mx-8"
              >
                <Image
                  src={client.href}
                  alt="Client Logo"
                  width={120}
                  height={120}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain opacity-80 hover:opacity-100 transition-all duration-300 filter brightness-110 grayscale hover:grayscale-0 hover:scale-110"
                  priority={false}
                  loading="lazy"
                />
              </div>
            ))}
            {/* Zweite identische Gruppe für nahtlose Schleife */}
            {clients.map((client, idx) => (
              <div
                key={`group2-${idx}`}
                className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4 lg:mx-6 xl:mx-8"
              >
                <Image
                  src={client.href}
                  alt="Client Logo"
                  width={120}
                  height={120}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain opacity-80 hover:opacity-100 transition-all duration-300 filter brightness-110 grayscale hover:grayscale-0 hover:scale-110"
                  priority={false}
                  loading="lazy"
                />
              </div>
            ))}
            {/* Dritte identische Gruppe für perfekte Schleife */}
            {clients.map((client, idx) => (
              <div
                key={`group3-${idx}`}
                className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4 lg:mx-6 xl:mx-8"
              >
                <Image
                  src={client.href}
                  alt="Client Logo"
                  width={120}
                  height={120}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain opacity-80 hover:opacity-100 transition-all duration-300 filter brightness-110 grayscale hover:grayscale-0 hover:scale-110"
                  priority={false}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 
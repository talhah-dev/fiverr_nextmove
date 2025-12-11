'use client';

import React, { useMemo, useCallback, memo } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Star } from 'lucide-react';
import { MovingLogos } from '@/components/ui/moving-cards';

const FlipWords = dynamic(() => import('@/components/ui/flip-word').then(mod => ({ default: mod.FlipWords })), {
  loading: () => <span className="text-[#ff5500] font-medium">Umsatz</span>,
  ssr: true
});

const AnimatedTooltip = dynamic(() => import('@/components/ui/animated-tooltip').then(mod => ({ default: mod.AnimatedTooltip })), {
  loading: () => (
    <div className="flex -space-x-2">
      {[1,2,3,4,5].map(i => (
        <div key={i} className="w-10 h-10 rounded-full bg-gray-700 border-2 border-black" />
      ))}
    </div>
  ),
  ssr: true
});

const Hero = memo(() => {
  const flipWords = useMemo(() => ['Umsatz', 'Reichweite', 'Notartermine'], []);

  const teamMembers = useMemo(() => [
    { id: 1, name: 'Azim Choudhury', designation: 'CD Immobilien Portfolio', image: '/azimchoudry.webp' },
    { id: 2, name: 'Michael Schürdt', designation: 'HMS-Finance Consulting', image: '/P1039493.webp' },
    { id: 3, name: 'Jens Freyer', designation: 'Freyer Immobilien', image: '/P1039309.webp' },
    { id: 4, name: 'Moritz Graf von Bernstorff', designation: 'Graf Bernstorff Consulting', image: '/moritz-graf.webp' },
    { id: 5, name: 'Jacek', designation: 'MSH Immobilien', image: '/profilbild1.webp' },
    { id: 6, name: 'Alexander Kedro', designation: 'Kedro Immobilien', image: '/kedro.webp' },
    { id: 7, name: 'Simon Hauer', designation: 'Finanzhaus Südbaden', image: '/Simon.webp' },
  ], []);

  const handleCtaClick = useCallback(() => {
    window.open('https://lunacal.ai/team/nextmove-digital/meeting', '_blank');
  }, []);

  const handleWordClick = useCallback((word: string) => {
    const websiteLinks: Record<string, string> = {
      'Umsatz': 'https://freyer.immo',
      'Reichweite': 'https://cd-immo.de',
      'Notartermine': 'https://hmsfinance.de'
    };
    const url = websiteLinks[word];
    if (url) window.open(url, '_blank');
  }, []);

  return (
    <section
      className="relative w-full flex flex-col justify-between min-h-screen"
      style={{ zIndex: 10, backgroundColor: 'transparent' }}
    >
      {/* Background Accents (Dekoration) */}
      <div className="absolute top-1/4 right-1/4 h-40 md:h-60 w-40 md:w-60 rounded-full bg-orange-500/10 filter blur-2xl md:blur-3xl animate-pulse-orange -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/3 h-60 md:h-80 w-60 md:w-80 rounded-full bg-orange-500/5 filter blur-2xl md:blur-3xl animate-pulse-orange -z-10 pointer-events-none" style={{ animationDelay: '1s' }}></div>

      {/* Main Content Area */}
      <div className="px-4 mx-auto w-full max-w-7xl flex-grow flex flex-col justify-center pt-28 pb-12 sm:pt-32">
        <div className="w-full max-w-5xl mx-auto">
          <div className="w-full text-center lg:text-left">

            {/* Headline - SOFORT SICHTBAR */}
            <h1 className="mb-6">
              <span className="block text-white font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-tight drop-shadow-lg">
                Mehr Abschlüsse,
              </span>
              <span className="block text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 leading-tight tracking-tight drop-shadow-md">
                weniger&nbsp;Akquise:
              </span>
            </h1>

            {/* Subheadline - SOFORT SICHTBAR */}
            <div className="w-full mb-8 lg:mb-10">
              <h2 className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed drop-shadow-md max-w-3xl mx-auto lg:mx-0">
                Ihr{' '}
                <span className="relative inline font-normal text-white">
                  direkter
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff5500] shadow-[0_0_8px_rgba(255,85,0,0.6)]" />
                </span>{' '}
                Weg zu vorqualifizierten Kunden, die Kapitalanlage Immobilien am Stück kaufen.
              </h2>
            </div>

            {/* Button - SOFORT SICHTBAR */}
            <div className="mt-8 mb-12 flex justify-center lg:justify-start w-full">
              <button
                onClick={handleCtaClick}
                className="relative px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-white font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wider rounded-xl overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,85,0,0.4)] border border-[#ff5500]/60 bg-gradient-to-br from-[#ff5500]/20 to-[#ff5500]/30 backdrop-blur-md"
              >
                <span className="relative z-10">Kostenloses Strategiegespräch</span>
                <div className="absolute inset-0 bg-[#ff5500]/20 blur-xl"></div>
              </button>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-col gap-8">
              {/* Partners Static Logos */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 opacity-90">
                <Image src="/google5.svg" alt="Google" width={90} height={40} className="h-8 w-auto object-contain hover:opacity-100 transition" priority />
                <Image src="/TrustPilot.webp" alt="Trustpilot" width={90} height={40} className="h-8 w-auto object-contain hover:opacity-100 transition" priority />
                <Image src="/ProvenExpert.svg" alt="ProvenExpert" width={90} height={40} className="h-8 w-auto object-contain hover:opacity-100 transition" priority />
              </div>

              {/* Testimonials */}
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-white text-sm sm:text-base mb-4">
                  <span className="font-bold border-b-2 border-[#ff5500]">+50</span> zufriedene Partner
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex -space-x-4">
                    <AnimatedTooltip items={teamMembers} />
                  </div>
                  <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#ff5500] fill-[#ff5500]" />
                      ))}
                    </div>
                    <span className="text-white font-bold">4.9</span>
                    <span className="text-gray-400 text-sm">/5</span>
                  </div>
                </div>
              </div>

              {/* FlipWords */}
              <div className="text-xl sm:text-2xl lg:text-3xl flex justify-center lg:justify-start items-center pb-4">
                <span className="text-white font-light mr-2">Mehr</span>
                <FlipWords
                  words={flipWords}
                  duration={3000}
                  className="text-[#ff5500] font-medium"
                  onWordClick={handleWordClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden SEO Links */}
      <div className="sr-only">
        <a href="/unsere-loesung">Unsere Lösung</a>
        <a href="/referenzen">Referenzen</a>
        <a href="/warum-wir">Warum wir</a>
        <a href="/kontakt">Kontakt</a>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
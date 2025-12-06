'use client';

import React, { useRef, useEffect, useMemo, useCallback, memo } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Star } from 'lucide-react';
import { MovingLogos } from '@/components/ui/moving-cards';

// Lazy load components for better performance
const FlipWords = dynamic(() => import('@/components/ui/flip-word').then(mod => ({ default: mod.FlipWords })), {
  loading: () => <div className="w-40 h-6 bg-gray-800/20 rounded animate-pulse" />,
  ssr: false
});

const AnimatedTooltip = dynamic(() => import('@/components/ui/animated-tooltip').then(mod => ({ default: mod.AnimatedTooltip })), {
  loading: () => <div className="flex space-x-2">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="w-10 h-10 bg-gray-800/20 rounded-full animate-pulse" />
    ))}
  </div>,
  ssr: false
});

const Hero = memo(() => {
  // Animation Refs
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Memoized constants to prevent recreation
  const flipWords = useMemo(() => ['Umsatz', 'Reichweite', 'Notartermine'], []);

  const teamMembers = useMemo(() => [
    {
      id: 1,
      name: 'Azim Choudhury',
      designation: 'CD Immobilien Portfolio',
      image: '/azimchoudry.webp',
    },
    {
      id: 2,
      name: 'Michael Schürdt',
      designation: 'HMS-Finance Consulting',
      image: '/P1039493.webp',
    },
    {
      id: 3,
      name: 'Jens Freyer',
      designation: 'Freyer Immobilien',
      image: '/P1039309.webp',
    },
    {
      id: 4,
      name: 'Alexander Banzhaf',
      designation: 'Banzhaf Immobilien',
      image: '/banzhaf.webp',
    },
    {
      id: 5,
      name: 'Jacek',
      designation: 'MSH Immobilien',
      image: '/profilbild1.webp',
    },
    {
      id: 6,
      name: 'Alexander Kedro',
      designation: 'Kedro Immobilien',
      image: '/kedro.webp',
    },
    {
      id: 7,
      name: 'Simon Hauer',
      designation: 'Finanzhaus Südbaden',
      image: '/Simon.webp',
    },
  ], []);

  // Memoized animation function
  const applyAnimations = useCallback(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    setTimeout(() => {
      if (title) title.classList.add('animate-slide-right');
    }, 100);

    setTimeout(() => {
      if (subtitle) subtitle.classList.add('animate-fade-in');
    }, 300);

    setTimeout(() => {
      if (cta) cta.classList.add('animate-fade-in');
    }, 600);
  }, []);

  useEffect(() => {
    // Starte Animationen nach kurzem Delay, damit DOM vollständig geladen ist
    const timer = setTimeout(applyAnimations, 100);
    return () => clearTimeout(timer);
  }, [applyAnimations]);

  const handleCtaClick = useCallback(() => {
    // Öffne Lunacal-Link in einem neuen Tab
    window.open('https://lunacal.ai/team/nextmove-digital/meeting', '_blank');
  }, []);

  const handleWordClick = useCallback((word: string) => {
    // Website-Links für FlipWords
    const websiteLinks = {
      'Umsatz': 'https://freyer.immo',
      'Reichweite': 'https://cd-immo.de',
      'Notartermine': 'https://hmsfinance.de'
    };

    const url = websiteLinks[word as keyof typeof websiteLinks];
    if (url) {
      window.open(url, '_blank');
    }
  }, []);


  return (
    <section className="relative w-full mt-10 md:mt-5 md:min-h-[clac(100vh-5rem)]" style={{ zIndex: 10 }}>

      {/* <div className="absolute -top-52 left-0">
        <svg
          className="blur-2xl md:blur-3xl filter opacity-40 md:opacity-70"
          width="100%"
          height="100%"
          viewBox="0 0 444 536"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M374.558 127.891C290.893 33.7273 152.005 71.9567 95.2954 136.742C38.5854 201.527 -24.5696 384.971 59.0954 479.135C142.76 573.299 359.895 442.346 416.605 377.561C473.315 312.776 458.223 222.055 374.558 127.891Z"
            fill="url(#paint0_linear_failure)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_failure"
              x1="404.5"
              y1="100"
              x2="44.5"
              y2="436"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ff8040" stopOpacity="0.3" />
              <stop offset="1" stopColor="#ff5500" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
     
      {/* Glühende Orangen-Akzente */}
      <div className="absolute top-1/4 right-1/4 h-40 md:h-60 w-40 md:w-60 rounded-full bg-orange-500/10 filter blur-2xl md:blur-3xl animate-pulse-orange z-10"></div>
      <div className="absolute bottom-1/3 left-1/3 h-60 md:h-80 w-60 md:w-80 rounded-full bg-orange-500/5 filter blur-2xl md:blur-3xl animate-pulse-orange z-10" style={{ animationDelay: '1s' }}></div>

      <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl min-h-[calc(100vh-200px)] lg:min-h-[calc(85vh-400px)] flex items-start pt-5 pb-24 sm:pb-32 lg:pb-2" style={{ zIndex: 20 }}>
        {/* Single Column Layout - Alles auf der linken Seite */}
        <div className="w-full max-w-5xl mx-auto">

          {/* ALLE INHALTE: H1 → H2 → Button → Logos → Testimonials → FlipWords */}
          <div className="w-full relative z-50 text-center justify-center items-center">
            {/* Haupttitel - größer und prominenter */}
            <h1
              ref={titleRef}
              className="relative z-50 mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="block text-white font-semibold"
                style={{
                  lineHeight: '1.1',
                  // textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)',
                  letterSpacing: '-0.02em'
                }}>
                Mehr Abschlüsse,
              </span>
              <span className="block text-white font-semibold "
                style={{
                  // textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
                  letterSpacing: '-0.01em'
                }}>
                weniger&nbsp;Akquise:
              </span>
            </h1>

            <div className="w-full mb-8 text-center justify-center items-center flex lg:mb-8">
              <h2 className="!text-xl max-w-2xl text-white/90 font-light !leading-relaxed"
                style={{
                  // textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                  lineHeight: '1.5'
                }}>
                Ihr{' '}
                <span className="relative inline font-normal">
                  direkter
                  <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#ff5500] shadow-[0_0_8px_rgba(255,85,0,0.6)]" />
                </span>{' '}
                Weg zu vorqualifizierten Kunden, die Kapitalanlage Immobilien am Stück kaufen.
              </h2>
            </div>

            {/* Button - zentriert im Mobile, links im Desktop */}
            <div ref={ctaRef} className="mt-8 sm:mt-8 relative z-40 flex justify-center w-full">
              <button
                onClick={handleCtaClick}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 85, 0, 0.15) 0%, rgba(255, 85, 0, 0.25) 100%)',
                  color: 'white',
                  border: '1px solid rgba(255, 85, 0, 0.6)',
                  borderRadius: '14px',
                  fontWeight: '600',
                  fontSize: '16px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 20px rgba(255, 85, 0, 0.5), inset 0 0 20px rgba(255, 85, 0, 0.1)',
                  cursor: 'pointer',
                  lineHeight: '1.2',
                  backdropFilter: 'blur(10px)',
                }}
                className="relative px-8 py-4 lg:px-10 lg:py-5 btn-orange-glow hover:scale-105"
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: '0',
                    background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.8) 0%, rgba(255, 85, 0, 0.4) 40%, transparent 70%)',
                    filter: 'blur(12px)',
                    opacity: '0.6',
                    zIndex: '-1',
                    transform: 'scale(1.1)'
                  }}
                ></div>

                Kostenloses Strategiegespräch
              </button>
            </div>

            {/* Partner Logos - ohne Background Cards */}
            <div className="flex flex-wrap justify-center items-center mt-8 gap-4 relative z-10 w-full">
              <Image
                src="/google5.svg"
                alt="Google Partners"
                width={100}
                height={50}
                className="object-contain h-auto max-h-8 opacity-90 hover:opacity-100 transition-opacity"
                style={{ width: 'auto' }}
              />
              <Image
                src="/TrustPilot.webp"
                alt="Trustpilot"
                width={100}
                height={50}
                className="object-contain h-auto max-h-8 opacity-90 hover:opacity-100 transition-opacity"
                style={{ width: 'auto' }}
              />
              <Image
                src="/ProvenExpert.svg"
                alt="ProvenExpert"
                width={100}
                height={50}
                className="object-contain h-auto max-h-8 opacity-90 hover:opacity-100 transition-opacity"
                style={{ width: 'auto' }}
              />
            </div>

            {/* Testimonials Section - unter Logos */}
            <div className="relative z-10 w-full flex flex-col items-center mt-8">
              <p className="text-sm sm:text-base lg:text-base font-normal text-white text-center lg:text-left mb-3 flex items-baseline"
                style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                <span className="relative inline-flex items-baseline">
                  <span className="relative">+50</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#ff5500] shadow-[0_0_10px_rgba(255,85,0,0.6)]"></span>
                </span>
                <span className="ml-1">zufriedene Partner</span>
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-3 md:gap-6">
                <div className="scale-[0.75] md:scale-90 lg:scale-100 flex-shrink-0">
                  <AnimatedTooltip items={teamMembers} />
                </div>
                <div className="flex items-center">
                  <div className="flex mr-3">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-4 h-4 lg:w-5 lg:h-5 text-[#ff5500] fill-[#ff5500] mr-1 drop-shadow-[0_0_5px_rgba(255,85,0,0.6)]"
                      />
                    ))}
                  </div>
                  <div className="flex items-center">
                    <span className="text-base lg:text-lg font-semibold text-white" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>4.9</span>
                    <span className="text-xs lg:text-sm text-gray-300 ml-1" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Flip Words Section - ganz unten */}
            {/* <div className="text-lg sm:text-xl md:text-2xl lg:text-2xl flex justify-center lg:justify-start w-full items-center mt-8 mb-8" style={{ lineHeight: '1.2' }}>
                <span className="text-white mr-2 font-light"
                      style={{
                        textShadow: '2px 2px 6px rgba(0,0,0,0.9)',
                        lineHeight: '1.2',
                        display: 'inline-block'
                      }}>
                  Mehr
                </span>
                <FlipWords
                  words={flipWords}
                  duration={3000}
                  className="w-32 sm:w-40 md:w-44 lg:w-48"
                  onWordClick={handleWordClick}
                />
              </div> */}
          </div>
        </div>

        {/* Additional internal links for SEO - hidden but crawlable */}
        <div className="sr-only">
          <a href="/unsere-loesung">Unsere Lösung</a>
          <a href="/referenzen">Referenzen</a>
          <a href="/warum-wir">Warum wir</a>
          <a href="/kontakt">Kontakt</a>
          <a href="/blog">Blog</a>
        </div>
      </div>

      {/* Moving Logos Section - absolut positioniert im unteren Bereich über dem Video */}


      {/* Schwarzer Verlauf am unteren Rand für sanften Übergang */}
      {/* <div
          className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 md:h-56 lg:h-64 w-full pointer-events-none"
          style={{
            zIndex: 25,
            background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.5) 60%, transparent 100%)'
          }}
        /> */}
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
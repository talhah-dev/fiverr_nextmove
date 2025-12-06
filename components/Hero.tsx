'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Star } from 'lucide-react';

// Lazy-load only the tooltip (keeps bundle small)
const AnimatedTooltip = dynamic(
  () =>
    import('@/components/ui/animated-tooltip').then((mod) => ({
      default: mod.AnimatedTooltip,
    })),
  {
    ssr: false,
  }
);

const teamMembers = [
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
];

const Hero = () => {
  const handleCtaClick = useCallback(() => {
    window.open('https://lunacal.ai/team/nextmove-digital/meeting', '_blank');
  }, []);

  return (
    <section className="relative w-full pb-16 lg:pb-24 md:pt-5 pt-10">
      {/* soft orange glows in background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-[15%] h-40 w-40 md:h-60 md:w-60 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute bottom-1/4 left-[10%] h-52 w-52 md:h-72 md:w-72 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-2">
        {/* LEFT: CONTENT */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Main Heading */}
          <div>
            <h1 className="mb-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
              Mehr Abschlüsse, weniger Akquise:
            </h1>

            <p className="mx-auto max-w-xl text-base text-white/90 sm:text-lg md:text-xl lg:mx-0">
              Ihr <span className='bg-[#ff5500]'>direkter</span> Weg zu vorqualifizierten Kunden, die Kapitalanlage Immobilien am Stück
              kaufen.
            </p>
          </div>

          {/* CTA button */}
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={handleCtaClick}
              className="relative overflow-hidden rounded-xl px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-[0_0_18px_rgba(255,85,0,0.6)] transition-transform duration-200 hover:-translate-y-1"
              style={{
                background:
                  '#ff5500',
                border: '1px solid rgba(255,85,0,0.7)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span className="relative z-10">Kostenloses Strategiegespräch</span>
              <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                  background:
                    'radial-gradient(circle at center, rgba(255,85,0,0.8) 0%, rgba(255,85,0,0.35) 40%, transparent 70%)',
                  filter: 'blur(12px)',
                }}
              />
            </button>
          </div>

          {/* Trust logos */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            <Image
              src="/google5.svg"
              alt="Google Bewertungen"
              width={110}
              height={40}
              className="h-8 w-auto opacity-90 transition-opacity hover:opacity-100"
            />
            <Image
              src="/TrustPilot.webp"
              alt="Trustpilot"
              width={120}
              height={40}
              className="h-8 w-auto opacity-90 transition-opacity hover:opacity-100"
            />
            <Image
              src="/ProvenExpert.svg"
              alt="ProvenExpert"
              width={140}
              height={40}
              className="h-8 w-auto opacity-90 transition-opacity hover:opacity-100"
            />
          </div>

          {/* Faces + rating */}
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:gap-6">
            <div className="scale-90 md:scale-100">
              <AnimatedTooltip items={teamMembers} />
            </div>

            <div className="flex flex-col items-center justify-start lg:items-start">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="mr-0.5 h-4 w-4 fill-[#ff5500] text-[#ff5500] drop-shadow-[0_0_4px_rgba(255,85,0,0.6)]"
                    />
                  ))}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-semibold text-white">4.9</span>
                  <span className="text-xs text-gray-300">/5</span>
                </div>
              </div>
              <p className="mt-1 text-sm font-normal text-white">
                +50 zufriedene Partner
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: IMAGE / VISUAL CARD */}
        <div className="relative mx-auto h-[320px] w-full max-w-full sm:h-[380px] lg:h-[40rem]">
          {/* glass card behind image */}
          <div className="absolute inset-0 rounded-3xl border border-white/20 bg-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl" />

          {/* main hero image */}
          <div className="relative m-4 h-[calc(100%-2rem)] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/herobg.jpeg"
              alt="Kapitalanlage Immobilien Skyline"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 380px, 80vw"
            />
            {/* subtle orange overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* small label */}
            <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/90">
              Qualifizierte Immobilien-Interessenten
            </div>
          </div>
        </div>
      </div>

      {/* hidden internal links for SEO */}
      <div className="sr-only">
        <a href="/unsere-loesung">Unsere Lösung</a>
        <a href="/referenzen">Referenzen</a>
        <a href="/warum-wir">Warum wir</a>
        <a href="/kontakt">Kontakt</a>
        <a href="/blog">Blog</a>
      </div>
    </section>
  );
};

export default Hero;

'use client';

import { Carousel } from '@/components/ui/carousel';

// Aktualisierte Slides mit den neuen Bildpfaden
const slides = [
  {
    title: "Immobilien-Marketing",
    button: "Mehr erfahren",
    src: "/Bild1.webp"
  },
  {
    title: "Digitale Leadgenerierung",
    button: "Mehr erfahren",
    src: "/Bild2.webp"
  },
  {
    title: "KI-gestützte Vertriebsstrategien",
    button: "Mehr erfahren",
    src: "/Bild3.webp"
  }
];

export default function SocialProof() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white" style={{ color: 'white !important' }}>
            <span className="text-white" style={{ color: 'white !important' }}>Über</span>
            <span className="relative mx-2 text-white" style={{ color: 'white !important' }}>
              <span className="relative z-10 text-white" style={{ color: 'white !important' }}>23 Mio. €</span>
              <span className="absolute -bottom-1 left-0 right-0 h-4 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50" />
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]" />
            </span>
            <br />
            <span className="text-white" style={{ color: 'white !important' }}>Maklerprovisionen in 2024 generiert</span>
          </h2>
        </div>

        {/* 3D Carousel mit den aktualisierten Bildern */}
        <div className="max-w-6xl mx-auto">
          <Carousel slides={slides} />
        </div>
      </div>
    </section>
  );
} 
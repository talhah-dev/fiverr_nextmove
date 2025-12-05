"use client";
import { useState, useCallback } from 'react';

export default function CTA() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCtaClick = useCallback(() => {
    // Öffne Lunacal-Link in einem neuen Tab
    window.open('https://lunacal.ai/team/nextmove-digital/meeting', '_blank');
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Hamburg.webp Hintergrundbild */}
      <div className="absolute inset-0 w-full h-full">
        {!imageError ? (
          <>
            {/* Hamburg.webp Bild laden */}
            <img 
              src="/Hamburg.webp" 
              alt="Hamburg Hintergrund" 
              className="absolute inset-0 w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            {/* Zeige Ladeindikator, während das Bild lädt */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-black block sm:hidden animate-pulse"></div>
            )}
          </>
        ) : (
          /* Fallback-schwarzer Hintergrund, wenn das Bild nicht geladen werden kann */
          <div className="absolute inset-0 bg-black"></div>
        )}
        
        {/* Dunkles transparentes Overlay wie FailureReasons.tsx */}
        <div className="absolute inset-0 bg-black/75"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl mb-6">
          Worauf wartest du noch?
        </h2>
        <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
          Sichere dir jetzt dein kostenloses Strategiegespräch und erfahre, wie wir deinen Vertrieb auf das nächste Level bringen
        </p>
        
        {/* Button im Hero.tsx Stil */}
        <button
          onClick={handleCtaClick}
          style={{
            background: 'rgba(255, 85, 0, 0.1)',
            color: 'white',
            border: '1px solid rgba(255, 85, 0, 0.5)',
            borderRadius: '14px',
            fontWeight: '600',
            fontSize: '16px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            boxShadow: '0 0 15px rgba(255, 85, 0, 0.4)',
            cursor: 'pointer',
            lineHeight: '1.2',
          }}
          className="relative px-8 py-4 lg:px-10 lg:py-5 btn-orange-glow"
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

          Jetzt Termin vereinbaren
        </button>
      </div>
    </section>
  );
}
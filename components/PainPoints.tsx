"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BsGraphDownArrow, BsCashStack, BsPeople, BsBarChartLine, BsBuilding, BsGlobe, BsClock, BsEyeSlash } from 'react-icons/bs';

const PainPoints = () => {
  const painPoints = [
    {
      title: "Leads kosten >50€/Stück?",
      description: "Während andere qualifizierte Leads für unter 50€ generieren, zahlen Sie das Vierfache für unqualifizierte Interessenten",
      icon: BsCashStack
    },
    {
      title: "Content wird ignoriert?",
      description: "Ihre Posts und Anzeigen erhalten kaum Aufmerksamkeit, weil sie nicht die Schmerzpunkte Ihrer Zielgruppe treffen",
      icon: BsEyeSlash
    },
    {
      title: "Vertriebszeit > 20 Std./Woche?",
      description: "Sie verschwenden über die Hälfte Ihrer Arbeitszeit mit unqualifizierten Leads statt mit echten Kaufinteressenten",
      icon: BsClock
    },
    {
      title: "Phantom-Leads ohne Finanzierung",
      description: "85% Ihrer Anfragen haben keine Finanzierungszusage und verschwenden Ihre wertvolle Zeit",
      icon: BsPeople
    },
    {
      title: "Veraltete Offline-Strategien",
      description: "Während Konkurrenten digital skalieren, verlieren Sie täglich potenzielle Kunden durch ineffiziente Methoden",
      icon: BsBuilding
    },
    {
      title: "Digitale Unsichtbarkeit",
      description: "In der digitalen Welt sind Sie für potenzielle Premium-Kunden praktisch unsichtbar",
      icon: BsGlobe
    }
  ];

  const handleCtaClick = () => {
    // Öffne Lunacal-Link in einem neuen Tab
    window.open('https://lunacal.ai/team/nextmove-digital/meeting', '_blank');
  };

  // Simplified animations for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Enhanced Gradient Background Effect - reduziert für bessere Performance */}
      <div className="absolute inset-0">
        <svg 
          className="blur-2xl md:blur-3xl filter opacity-30 md:opacity-40" 
          width="100%" 
          height="100%" 
          viewBox="0 0 444 536" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M374.558 127.891C290.893 33.7273 152.005 71.9567 95.2954 136.742C38.5854 201.527 -24.5696 384.971 59.0954 479.135C142.76 573.299 359.895 442.346 416.605 377.561C473.315 312.776 458.223 222.055 374.558 127.891Z" 
            fill="url(#paint0_linear)" 
          />
          <defs>
            <linearGradient 
              id="paint0_linear" 
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
      </div>

      {/* Additional floating blur orbs - reduziert für bessere Performance */}
      <div className="absolute top-1/4 left-1/4 w-24 md:w-32 h-24 md:h-32 rounded-full bg-white/5 blur-2xl md:blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 md:w-40 h-32 md:h-40 rounded-full bg-orange-500/10 blur-2xl md:blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative py-10 sm:py-12 lg:py-16 xl:py-18">
        <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-white leading-tight">
            <span className="block sm:inline">Verlieren Sie noch</span>
            <div className="inline-block relative mx-2 mb-2">
              <span className="relative z-10 text-[#ff5500]">Geld & Zeit</span>
              <span className="absolute -bottom-1 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50"></span>
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
            </div>
            <span className="block sm:inline">durch diese Fehler?</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-xl mt-5 sm:mt-6 max-w-4xl mx-auto leading-relaxed px-4">
            Die häufigsten Probleme, die Immobilienmakler täglich Tausende von Euro kosten
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                {/* Glassmorphism Card - kompakter */}
                <div className="relative h-full rounded-2xl p-5 sm:p-6 lg:p-7
                               bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                               backdrop-blur-md backdrop-saturate-150
                               border border-white/[0.08]
                               shadow-[0_8px_32px_0_rgba(255,85,0,0.1)]
                               hover:shadow-[0_16px_48px_0_rgba(255,85,0,0.15)]
                               hover:scale-[1.02] hover:border-white/[0.12]
                               transition-all duration-500 ease-out
                               overflow-hidden
                               min-h-[240px] sm:min-h-[260px] lg:min-h-[280px]">
                  
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shine effect on hover - reduziert für mobile */}
                  <div className="hidden md:block absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon with glassmorphism background - kompakter */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                      <div className="relative flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-md border border-white/[0.08] flex items-center justify-center group-hover:border-orange-500/20 transition-colors duration-300">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#ff5500] group-hover:text-[#ff8040] transition-colors duration-300" />
                        </div>
                        {/* Icon glow effect - reduziert für mobile */}
                        <div className="hidden md:block absolute inset-0 rounded-xl bg-orange-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white group-hover:text-white/90 transition-colors duration-300 leading-tight">
                        {point.title}
                      </h3>
                    </div>
                    
                    <p className="text-white/70 text-sm sm:text-base lg:text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300 flex-grow">
                      {point.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/[0.06] group-hover:border-orange-500/20 transition-colors duration-300">
                      <div className="w-8 sm:w-10 lg:w-12 h-1 bg-gradient-to-r from-[#ff5500] to-[#ff8040] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Outer glow effect - reduziert für mobile */}
                <div className="hidden md:block absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button im Hero-Design - kompakter */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <button 
            onClick={handleCtaClick}
            style={{
              background: 'rgba(255, 85, 0, 0.1)',
              color: 'white',
              border: '1px solid rgba(255, 85, 0, 0.5)',
              borderRadius: '14px',
              fontWeight: '600',
              fontSize: '14px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 15px rgba(255, 85, 0, 0.4)',
              cursor: 'pointer',
              lineHeight: '1.2',
            }}
            className="relative text-sm sm:text-base lg:text-base px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-4 btn-orange-glow"
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

            <span className="block sm:inline">Erkennen Sie sich wieder?</span>
            <span className="block sm:inline sm:ml-2">Wir haben die Lösung</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;

"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { RiCheckboxCircleFill, RiCloseCircleFill } from 'react-icons/ri';
import { BorderBeam } from './ui/border-beam';

const OrangeBlurEffect = () => (
  <div className="absolute -inset-4 right-[-30%] top-[-100%] pointer-events-none z-0">
    <svg className="blur-2xl md:blur-3xl filter opacity-20 md:opacity-30 w-[140%] h-[140%]" viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M135.205 112.719C17.1445 64.6648 -28.2636 -70.487 -76.3175 47.574C-124.371 165.635 107.858 481.381 225.919 529.435C343.98 577.488 303.165 339.654 351.219 221.593C399.273 103.532 253.266 160.773 135.205 112.719Z" fill="url(#orange-gradient)" />
      <defs>
        <linearGradient id="orange-gradient" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff8040" />
          <stop offset="100%" stopColor="#ff5500" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const disadvantages = [
  "Hohe Streuverluste",
  "Schwer messbare Ergebnisse",
  "Lange Vorlaufzeiten",
  "Keine Echtzeit-Anpassungen",
  "Hohe Fixkosten",
  "Keine Branchenspezialisierung",
  "Unklare Zielgruppen",
  "Veraltete Methoden",
  "Keine Erfolgsgarantie"
];

const advantages = [
  "Präzise Zielgruppenansprache",
  "Transparentes Reporting",
  "Schnelle Ergebnisse",
  "Kontinuierliche Optimierung",
  "Leistungsbasierte Vergütung",
  "Branchenspezialisierung",
  "Moderne KI-Technologie",
  "Persönliche Betreuung",
  "Nachweisbare Erfolge"
];

export default function WhyUs() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
  };

  const cardHover = {
    y: -8,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }
  };
  
  return (
    <motion.section 
      className="relative py-16 lg:py-20 bg-black overflow-hidden"
      id="why-us" 
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Enhanced Gradient Background Effect - positioned behind NextMove card - mobile weiter unten */}
      <div className="absolute inset-0 md:left-1/2 lg:left-1/3 top-1/2 md:top-0">
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

      {/* Additional floating blur orbs - reduziert */}
      <div className="absolute top-1/4 left-1/4 w-24 md:w-32 h-24 md:h-32 rounded-full bg-white/5 blur-2xl md:blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 md:w-40 h-32 md:h-40 rounded-full bg-orange-500/10 blur-2xl md:blur-3xl"></div>
      <div className="container mx-auto px-4 relative max-w-6xl">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-18"
          variants={titleVariants}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Warum <span className="relative">
              <span className="relative z-10 text-[#ff5500]">NextMove</span>
              <OrangeBlurEffect />
              </span> Digital ?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-5 lg:mt-6 max-w-2xl mx-auto">
              Wir kombinieren Branchenexpertise mit modernster Technologie, um Resultate zu liefern, die traditionelle Agenturen nicht erreichen können.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Traditionell Card - VERBESSERTE AUSRICHTUNG */}
          <motion.div 
            variants={cardVariants}
            whileHover={cardHover}
            className="group relative"
          >
            {/* Glassmorphism Card */}
            <div className="relative h-full rounded-2xl p-6 lg:p-7
                           bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                           backdrop-blur-md backdrop-saturate-150
                           border border-white/[0.08]
                           shadow-[0_8px_32px_0_rgba(255,85,0,0.1)]
                           hover:shadow-[0_16px_48px_0_rgba(255,85,0,0.15)]
                           hover:scale-[1.02] hover:border-white/[0.12]
                           transition-all duration-500 ease-out
                           overflow-hidden">
              
              {/* Inner glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shine effect on hover */}
              <div className="hidden md:block absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* VERBESSERTE Header Section - Icon und Text auf gleicher Höhe */}
                <div className="flex items-center gap-3 lg:gap-4 mb-5 lg:mb-6 min-h-[3rem] lg:min-h-[4rem]">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-md border border-white/[0.08] flex items-center justify-center group-hover:border-white/20 transition-colors duration-300">
                      <RiCloseCircleFill className="w-5 h-5 lg:w-6 lg:h-6 text-white/40 group-hover:text-white/60 transition-colors duration-300" />
                    </div>
                    {/* Icon glow effect */}
                    <div className="hidden md:block absolute inset-0 rounded-xl bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="flex items-center flex-1">
                    <h3 className="text-lg lg:text-xl font-semibold text-white/80 group-hover:text-white/90 transition-colors duration-300">
                      Traditionell
                    </h3>
                  </div>
                </div>
                
                <ul className="space-y-3 lg:space-y-4 flex-grow">
                  {disadvantages.map((item) => (
                    <li key={item} className="flex items-start">
                      <RiCloseCircleFill className="w-4 h-4 lg:w-5 lg:h-5 text-white/30 flex-shrink-0 mt-1" />
                      <span className="ml-3 text-gray-400 text-sm lg:text-base group-hover:text-gray-300 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <div className="mt-5 lg:mt-6 pt-3 lg:pt-4 border-t border-white/[0.06] group-hover:border-white/20 transition-colors duration-300">
                  <div className="w-8 lg:w-10 h-1 bg-gradient-to-r from-white/40 to-white/20 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Outer glow effect */}
            <div className="hidden md:block absolute -inset-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
          </motion.div>
          
          {/* NextMove Card - VERBESSERTE AUSRICHTUNG */}
          <motion.div 
            variants={cardVariants}
            whileHover={cardHover}
            className="group relative"
          >
            {/* Glassmorphism Card */}
            <div className="relative h-full rounded-2xl p-6 lg:p-7
                           bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                           backdrop-blur-md backdrop-saturate-150
                           border border-orange-500/20
                           shadow-[0_8px_32px_0_rgba(255,85,0,0.1)]
                           hover:shadow-[0_16px_48px_0_rgba(255,85,0,0.15)]
                           hover:scale-[1.02] hover:border-orange-500/[0.12]
                           transition-all duration-500 ease-out
                           overflow-hidden">
              
              {/* BorderBeam Effekt */}
              <BorderBeam colorFrom="#ff5500" colorTo="#ff8040" size={200} duration={15} />
              
              {/* Inner glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shine effect on hover */}
              <div className="hidden md:block absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* VERBESSERTE Header Section - Icon und Logo auf gleicher Höhe */}
                <div className="flex items-center gap-3 lg:gap-4 mb-5 lg:mb-6 min-h-[3rem] lg:min-h-[4rem]">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-md border border-white/[0.08] flex items-center justify-center group-hover:border-orange-500/20 transition-colors duration-300">
                      <RiCheckboxCircleFill className="w-5 h-5 lg:w-6 lg:h-6 text-[#ff5500] group-hover:text-[#ff8040] transition-colors duration-300" />
                    </div>
                    {/* Icon glow effect */}
                    <div className="hidden md:block absolute inset-0 rounded-xl bg-orange-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="flex items-center flex-1">
                    <Image
                      src="/Logo-NMC-2.webp"
                      alt="NextMove Logo"
                      width={400}
                      height={160}
                      className="w-auto h-6 lg:h-8 max-w-[200px] lg:max-w-[280px] object-contain"
                    />
                  </div>
                </div>
                
                <ul className="space-y-3 lg:space-y-4 flex-grow">
                  {advantages.map((item) => (
                    <li key={item} className="flex items-start">
                      <RiCheckboxCircleFill className="w-4 h-4 lg:w-5 lg:h-5 text-[#ff5500] flex-shrink-0 mt-1" />
                      <span className="ml-3 text-gray-200 text-sm lg:text-base group-hover:text-white/90 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <div className="mt-5 lg:mt-6 pt-3 lg:pt-4 border-t border-white/[0.06] group-hover:border-orange-500/20 transition-colors duration-300">
                  <div className="w-8 lg:w-10 h-1 bg-gradient-to-r from-[#ff5500] to-[#ff8040] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Outer glow effect */}
            <div className="hidden md:block absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
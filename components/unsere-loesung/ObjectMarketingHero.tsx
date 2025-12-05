'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Trophy, Zap } from 'lucide-react';

const ObjectMarketingHero = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleCtaClick = () => {
    window.open('https://calendly.com/ali-nextmove-digital/30min?preview_source=et_card&month=2025-03', '_blank');
  };

  const benefits = [
    "Verkaufszeitverkürzung um 60%",
    "Höhere Verkaufspreise durch emotionale Inszenierung", 
    "Premium-Auftritte für Ihre Objekte"
  ];

  const stats = [
    { number: "200+", label: "Verkaufte Objekte", desc: "durch unsere Vermarktung" },
    { number: "48h", label: "Express-Lieferung", desc: "möglich" },
    { number: "100%", label: "Zufriedenheitsgarantie", desc: "oder Geld zurück" }
  ];

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

  return (
    <motion.section 
      className="relative min-h-screen bg-black overflow-hidden flex items-center"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >

      {/* Subtle additional atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-24 md:w-32 h-24 md:h-32 rounded-full bg-orange-500/5 blur-2xl md:blur-3xl z-5"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 md:w-40 h-32 md:h-40 rounded-full bg-orange-500/5 blur-2xl md:blur-3xl z-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 max-w-6xl">
        <div className="flex items-center justify-center min-h-screen">
          
          {/* Centered Content with Glass Effect */}
          <motion.div 
            className="text-center space-y-8 max-w-4xl mx-auto group"
            variants={cardVariants}
          >
            {/* Premium Glassmorphism Container */}
            <div className="relative h-full rounded-2xl p-8 lg:p-12
                           bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                           backdrop-blur-md backdrop-saturate-150
                           border border-white/[0.08]
                           shadow-[0_8px_32px_0_rgba(255,85,0,0.1)]
                           hover:shadow-[0_16px_48px_0_rgba(255,85,0,0.15)]
                           hover:scale-[1.01] hover:border-white/[0.12]
                           transition-all duration-500 ease-out
                           overflow-hidden">
              
              {/* Inner glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shine effect on hover */}
              <div className="hidden md:block absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              </div>

              <div className="relative z-10">
                {/* Badge with glassmorphism */}
                <motion.div 
                  className="inline-flex items-center px-6 py-3 rounded-full border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-orange-500/5 backdrop-blur-sm mb-8"
                  variants={titleVariants}
                >
                  <div className="relative">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-md border border-white/[0.08] flex items-center justify-center mr-3">
                      <Trophy className="w-3 h-3 text-orange-400" />
                    </div>
                  </div>
                  <span className="text-orange-400 text-sm font-semibold tracking-wide">PREMIUM OBJEKTVERMARKTUNG</span>
                </motion.div>
                
                {/* Main Headline - Premium Typography */}
                <motion.div 
                  className="space-y-6 mb-10"
                  variants={titleVariants}
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                    Von der ersten 
                    <span className="relative inline-block mx-2">
                      <span className="relative z-10 text-[#ff5500]">
                        Besichtigung
                      </span>
                      <div className="absolute -bottom-1 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50"></div>
                      <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></div>
                    </span>
                    zum Notartermin
                  </h2>
                  
                  <p className="text-gray-400 text-base sm:text-lg mt-5 lg:mt-6 max-w-3xl mx-auto leading-relaxed">
                    Professionelle Objektinszenierung, die Ihre Immobilien emotional erlebbar macht 
                    und <strong className="text-white">nachweislich schnellere Verkäufe</strong> erzielt.
                  </p>
                </motion.div>

                {/* Benefits List with Premium Glass Icons */}
                <motion.div 
                  className="space-y-4 mb-10 max-w-2xl mx-auto"
                  variants={cardVariants}
                >
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 justify-center group/item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    >
                      <div className="relative flex-shrink-0">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-md border border-white/[0.08] flex items-center justify-center group-hover/item:border-orange-500/20 transition-colors duration-300">
                          <CheckCircle className="w-4 h-4 text-[#ff5500] group-hover/item:text-[#ff8040] transition-colors duration-300" />
                        </div>
                        <div className="hidden md:block absolute inset-0 rounded-lg bg-orange-500/10 blur-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <span className="text-gray-200 text-sm lg:text-base group-hover/item:text-white/90 transition-colors duration-300">{benefit}</span>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Premium CTA Button */}
                <motion.button
                  onClick={handleCtaClick}
                  className="group/cta relative px-8 py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold text-white text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Kostenloses Beratungsgespräch
                    <Zap className="w-5 h-5 group-hover/cta:rotate-12 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300" />
                </motion.button>

                {/* Premium Stats Section */}
                <motion.div 
                  className="mt-10 pt-8 border-t border-white/[0.06] group-hover:border-orange-500/20 transition-colors duration-300"
                  variants={cardVariants}
                >
                  <h3 className="text-lg font-semibold text-white/90 mb-8">Nachweisbare Erfolge:</h3>
                  <div className="grid grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center group/stat"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      >
                        <div className="text-2xl lg:text-3xl font-bold text-[#ff5500] mb-2 group-hover/stat:text-[#ff8040] transition-colors duration-300">{stat.number}</div>
                        <div className="text-white text-sm font-medium mb-1 group-hover/stat:text-white/90 transition-colors duration-300">{stat.label}</div>
                        <div className="text-gray-400 text-xs group-hover/stat:text-gray-300 transition-colors duration-300">{stat.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="mt-6 pt-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#ff5500] to-[#ff8040] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 mx-auto"></div>
                  </div>
                </motion.div>
              </div>
              
              {/* Outer glow effect */}
              <div className="hidden md:block absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ObjectMarketingHero;
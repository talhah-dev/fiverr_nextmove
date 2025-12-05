'use client';

import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { Eye, Video, Camera, Palette, Zap, CheckCircle } from 'lucide-react';

const PremiumServices = () => {
  const services = [
    {
      icon: Video,
      title: "Cinematic Objektfilme",
      description: "Emotionale Inszenierung Ihrer Immobilien mit kinoreifen Aufnahmen, die Kaufinteressenten bereits vor der Besichtigung begeistern.",
      features: ["Professionelle Lichtsetzung", "4K Ultra HD Qualität", "Emotionale Musikuntermalung", "Storytelling-Ansatz"],
      highlight: "60% schnellere Verkäufe",
      gradient: "from-orange-500/20 to-orange-600/10"
    },
    {
      icon: Camera,
      title: "Premium Objektfotografie",
      description: "Hochauflösende Aufnahmen mit professioneller Nachbearbeitung, die jedes Detail Ihrer Immobilie perfekt zur Geltung bringen.",
      features: ["HDR-Technologie", "Weitwinkel & Detailaufnahmen", "Professionelle Nachbearbeitung", "Verschiedene Perspectives"],
      highlight: "Studio-Qualität garantiert",
      gradient: "from-orange-500/20 to-orange-600/10"
    },
    {
      icon: Eye,
      title: "360° Virtual Tours",
      description: "Immersive Rundgänge ermöglichen Interessenten eine realistische Vorab-Besichtigung - jederzeit und von überall aus.",
      features: ["Interaktive Hotspots", "VR-Brillen kompatibel", "Mobile Optimierung", "24/7 verfügbar"],
      highlight: "Internationale Reichweite",
      gradient: "from-orange-500/20 to-orange-600/10"
    },
    {
      icon: Palette,
      title: "3D-Visualisierungen",
      description: "Fotorealistische Renderings für Objekte im Planungsstadium oder virtuelle Renovierungskonzepte mit verschiedenen Einrichtungsstilen.",
      features: ["Photorealistische Qualität", "Verschiedene Einrichtungsstile", "Lichtszenarien-Simulation", "Schnelle Anpassungen"],
      highlight: "Verkaufs-Potenzial visualisieren",
      gradient: "from-orange-500/20 to-orange-600/10"
    },
    {
      icon: Zap,
      title: "Express-Vermarktung",
      description: "Komplette Vermarktungsausstattung in Rekordzeit - von der Aufnahme bis zur finalen Bearbeitung in nur 24-48 Stunden.",
      features: ["24h Express-Service", "Prioritäts-Bearbeitung", "Sofortige Lieferung", "Notfall-Hotline verfügbar"],
      highlight: "Blitzschnelle Umsetzung",
      gradient: "from-orange-500/20 to-orange-600/10"
    },
    {
      icon: Video,
      title: "Social Media Content",
      description: "Optimierte Inhalte für Instagram, Facebook und Co. - perfekt zugeschnitten für maximale Reichweite und Engagement.",
      features: ["Story-Format optimiert", "Reel-ready Content", "Platform-spezifisch", "Hashtag-Strategien inklusive"],
      highlight: "Viral-Potenzial maximieren",
      gradient: "from-orange-500/20 to-orange-600/10"
    }
  ];

  const handleCtaClick = () => {
    window.open('https://calendly.com/ali-nextmove-digital/30min?preview_source=et_card&month=2025-03', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <section className="relative bg-black overflow-hidden py-20 lg:py-28">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-6">
            <span className="text-orange-400 text-sm font-medium tracking-wide">PREMIUM SERVICES</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Jeder Service ein
            <span className="relative inline-block mx-2">
              <span className="relative z-10 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
                Verkaufsbeschleuniger
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Professionelle Objektvermarktung, die nachweislich zu schnelleren Verkäufen und höheren Preisen führt. 
            <strong className="text-white"> Jeder Service ist darauf ausgelegt, Ihre Verkaufsziele zu übertreffen.</strong>
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                <div className={`relative h-full rounded-2xl p-8 
                               bg-gradient-to-br ${service.gradient} 
                               backdrop-blur-md border border-white/10
                               shadow-[0_8px_32px_0_rgba(255,85,0,0.1)]
                               hover:shadow-[0_16px_48px_0_rgba(255,85,0,0.2)]
                               hover:scale-[1.02] hover:border-orange-500/30
                               transition-all duration-500 ease-out
                               overflow-hidden min-h-[420px]`}>
                  
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    
                    {/* Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                      </div>
                      <div className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full">
                        <span className="text-orange-300 text-xs font-medium">{service.highlight}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-100 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {service.description}
                      </p>
                      
                      {/* Features List */}
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Bottom Accent */}
                    <div className="mt-6 pt-4 border-t border-white/10 group-hover:border-orange-500/30 transition-colors duration-300">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="text-orange-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Premium Quality ✓
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Outer Glow */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Bereit, Ihre Objekte professionell zu vermarkten?
            </h3>
            <p className="text-gray-300 text-lg">
              Lassen Sie uns gemeinsam Ihre Verkaufsziele übertreffen.
            </p>
          </div>
          
          <motion.button
            onClick={handleCtaClick}
            className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold text-white text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Kostenloses Strategiegespräch
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumServices;
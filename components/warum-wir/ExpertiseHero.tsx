'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Target, Users, Zap, CheckCircle } from 'lucide-react';

const ExpertiseHero = () => {
  const handleCtaClick = () => {
    window.open('https://calendly.com/ali-nextmove-digital/30min?preview_source=et_card&month=2025-03', '_blank');
  };

  const achievements = [
    { 
      number: "200+", 
      label: "Erfolgreiche Projekte", 
      description: "Makler deutschlandweit vertrauen unserem Können",
      icon: Target 
    },
    { 
      number: "4.9/5", 
      label: "Kundenbewertung", 
      description: "Durchschnittliche Bewertung unserer Partnerschaften",
      icon: Crown 
    },
    { 
      number: "300%", 
      label: "Umsatzsteigerung", 
      description: "Durchschnittlicher ROI unserer Kunden",
      icon: Users 
    }
  ];
  
  const uniqueSellingPoints = [
    "Deutschlands führende Spezialagentur für Immobilienmarketing",
    "5+ Jahre ausschließlicher Fokus auf Immobilienmakler", 
    "Nachweisbare 60% Verkaufszeitverkürzung",
    "Persönliche Betreuung durch erfahrene Branchenexperten"
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Background with Gradient */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            radial-gradient(circle at 15% 25%, rgba(255, 85, 0, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 85% 75%, rgba(255, 85, 0, 0.15) 0%, transparent 50%),
            linear-gradient(135deg, rgba(255, 85, 0, 0.05) 0%, transparent 100%)
          `
        }}
      />

      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/Hamburg.webp')`,
          filter: 'brightness(0.25) contrast(1.1)'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Main Content */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-8">
              <Crown className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-400 text-sm font-medium tracking-wide">MARKTFÜHRER IN DEUTSCHLAND</span>
            </div>
            
            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
              Warum über <span className="relative">
                <span className="relative z-10 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
                  200 Makler
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></span>
              </span>
              <br />uns vertrauen
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Während andere Agenturen verschiedene Branchen bedienen, sind wir 
              <strong className="text-white"> ausschließlich auf Immobilienmakler spezialisiert</strong>.
              <br />Das ist unser Erfolgsgeheimnis.
            </p>

            {/* USPs List */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="grid sm:grid-cols-2 gap-4">
                {uniqueSellingPoints.map((usp, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{usp}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={handleCtaClick}
              className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold text-white text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Jetzt persönliches Gespräch führen
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        </div>

        {/* Achievement Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="relative h-full rounded-2xl p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:shadow-[0_20px_60px_0_rgba(255,85,0,0.2)] hover:scale-105 transition-all duration-500 text-center">
                  
                  {/* Background Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                    </div>
                    
                    {/* Number with Glow Effect */}
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-3 relative">
                      <span className="relative z-10">{achievement.number}</span>
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </div>
                    
                    {/* Label */}
                    <div className="text-lg font-semibold text-white mb-3">{achievement.label}</div>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </div>

                {/* Outer Glow Effect */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseHero;
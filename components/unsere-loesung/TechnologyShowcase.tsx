'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Target, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const TechnologyShowcase = () => {
  const [activeStep, setActiveStep] = useState(0);

  const qualityStandards = [
    {
      id: 'equipment',
      title: 'Premium Equipment',
      subtitle: 'Professionelle Ausrüstung',
      description: 'Modernste Technologie für hochauflösende Aufnahmen in Studioqualität. Jedes Detail wird perfekt eingefangen.',
      features: [
        'Ultra HD 4K Aufzeichnung',
        'Professionelle Stabilisierung',
        'Optimale Lichtverhältnisse',
        'Erstklassige Bildqualität'
      ],
      highlight: 'Studio-Qualität garantiert',
      icon: Award
    },
    {
      id: 'process',
      title: 'Optimierter Workflow',
      subtitle: 'Effiziente Prozesse',
      description: 'Durchdachte Arbeitsabläufe sorgen für konsistente Ergebnisse in kurzer Zeit ohne Qualitätsverluste.',
      features: [
        'Strukturierte Vorbereitung',
        'Professionelle Durchführung',
        'Qualitätskontrolle',
        'Schnelle Lieferung'
      ],
      highlight: 'Zeitoptimiert & zuverlässig',
      icon: Clock
    },
    {
      id: 'results',
      title: 'Nachweisbare Erfolge',
      subtitle: 'Messbare Ergebnisse',
      description: 'Unsere Vermarktungsstrategien führen zu nachweislich schnelleren Verkäufen und höheren Abschlusspreisen.',
      features: [
        '60% schnellere Verkäufe',
        'Höhere Verkaufspreise',
        'Mehr qualifizierte Anfragen',
        'Bessere Marktpositionierung'
      ],
      highlight: 'Erfolg messbar gemacht',
      icon: Target
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Strategische Beratung',
      description: 'Analyse Ihrer Objekte und Entwicklung der optimalen Vermarktungsstrategie',
      duration: '60 Min. Beratung',
      process: 'Kostenloses Erstgespräch'
    },
    {
      step: '02',
      title: 'Professionelle Aufnahmen',
      description: 'Hochwertige Foto- und Videoaufnahmen mit modernster Technik',
      duration: '2-4 Stunden vor Ort',
      process: 'Komplette Objekterfassung'
    },
    {
      step: '03',
      title: 'Premium Nachbearbeitung',
      description: 'Professionelle Bildbearbeitung und Videoschnitt für optimale Präsentation',
      duration: '24-48 Stunden',
      process: 'Perfekte Ausarbeitung'
    },
    {
      step: '04',
      title: 'Strategische Vermarktung',
      description: 'Gezielte Platzierung auf allen relevanten Kanälen für maximale Reichweite',
      duration: 'Sofortige Aktivierung',
      process: 'Vollständige Kampagne'
    }
  ];

  const handleCtaClick = () => {
    window.open('https://calendly.com/ali-nextmove-digital/30min?preview_source=et_card&month=2025-03', '_blank');
  };

  return (
    <section className="relative bg-black overflow-hidden py-20 lg:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255, 85, 0, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255, 85, 0, 0.05) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
        
        {/* Quality Standards Section */}
        <div className="mb-24">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-6">
              <span className="text-orange-400 text-sm font-medium tracking-wide">HÖCHSTE QUALITÄTSSTANDARDS</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Warum unsere
              <span className="relative inline-block mx-2">
                <span className="relative z-10 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
                  Qualität
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></span>
              </span>
              überzeugt
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Modernste Technologie, optimierte Prozesse und nachweisbare Erfolge - 
              so schaffen wir <strong className="text-white">Vermarktung auf Premium-Niveau.</strong>
            </p>
          </motion.div>

          {/* Quality Standards Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Standards Navigation */}
            <div className="space-y-4">
              {qualityStandards.map((standard, index) => {
                const IconComponent = standard.icon;
                return (
                  <motion.button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/30 shadow-[0_8px_32px_0_rgba(255,85,0,0.15)]' 
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        activeStep === index 
                          ? 'bg-orange-500/20 border border-orange-500/30' 
                          : 'bg-white/10 border border-white/10'
                      }`}>
                        <IconComponent className={`w-6 h-6 transition-colors duration-300 ${
                          activeStep === index ? 'text-orange-400' : 'text-gray-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                          activeStep === index ? 'text-white' : 'text-gray-300'
                        }`}>
                          {standard.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{standard.subtitle}</p>
                      </div>
                      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeStep === index 
                          ? 'bg-orange-500 scale-100' 
                          : 'bg-gray-600 scale-75'
                      }`} />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Active Standard Details */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">{qualityStandards[activeStep].title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{qualityStandards[activeStep].description}</p>
                
                <div className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium mb-6">
                  {qualityStandards[activeStep].highlight}
                </div>
              </div>
              
              <div className="space-y-3">
                {qualityStandards[activeStep].features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Workflow Section */}
        <div className="mb-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Unser bewährter
              <span className="text-orange-400"> Workflow</span>
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Von der ersten Beratung bis zur erfolgreichen Vermarktung - 
              so läuft Ihr Projekt bei uns ab.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative rounded-2xl p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 text-center h-full">
                  
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-full flex items-center justify-center text-2xl font-bold text-orange-400">
                    {step.step}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.description}</p>
                  
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-xs">
                      {step.duration}
                    </div>
                    <div className="text-orange-400 text-xs font-medium">
                      {step.process}
                    </div>
                  </div>
                  
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-orange-400/50" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Bereit für Premium-Objektvermarktung?
            </h3>
            <p className="text-gray-300 text-lg">
              Lassen Sie uns Ihre Immobilien mit höchster Qualität in Szene setzen.
            </p>
          </div>
          
          <motion.button
            onClick={handleCtaClick}
            className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold text-white text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Kostenloses Beratungsgespräch
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;
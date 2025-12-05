'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Handshake, CheckCircle, Zap, Star } from 'lucide-react';

const TrustBuilding = () => {
  const handleCtaClick = () => {
    window.open('https://calendly.com/ali-nextmove-digital/30min?preview_source=et_card&month=2025-03', '_blank');
  };

  const trustPillars = [
    {
      icon: Shield,
      title: "100% Transparenz & Datenschutz",
      description: "Ihre Daten und Projekte sind bei uns absolut sicher. DSGVO-konforme Verarbeitung und vollständige Transparenz in allen Prozessen.",
      features: ["DSGVO-konforme Datenverarbeitung", "Vollständige Prozesstransparenz", "Keine versteckten Kosten", "Regelmäßige Updates"],
      trustScore: "Sicherheit: 100%"
    },
    {
      icon: Clock,
      title: "Verlässlichkeit seit 2019",
      description: "Über 5 Jahre bewährte Partnerschaft mit Immobilienmaklern. Termintreue und Zuverlässigkeit sind unsere Kernwerte.",
      features: ["5+ Jahre Markterfahrung", "Garantierte Termineinhaltung", "24/7 Support verfügbar", "Express-Service bei Bedarf"],
      trustScore: "Zuverlässigkeit: 100%"
    },
    {
      icon: Award,
      title: "Nachweisbare Erfolgsgarantie",
      description: "Unsere Ergebnisse sprechen für sich: Messbare Erfolge, zufriedene Kunden und eine Erfolgsquote von über 95%.",
      features: ["95%+ Erfolgsquote", "Messbare ROI-Steigerung", "Kundenbewertung 4.9/5", "Erfolgsgarantie inklusive"],
      trustScore: "Erfolgsquote: 95%+"
    },
    {
      icon: Handshake,
      title: "Persönliche Partnerschaft",
      description: "Sie arbeiten direkt mit unseren Experten zusammen. Kein Callcenter, keine Warteschleifen - nur persönliche Betreuung.",
      features: ["Fester Ansprechpartner", "Direkter Expertencontact", "Individuelle Strategien", "Langfristige Partnerschaft"],
      trustScore: "Kundenzufriedenheit: 4.9/5"
    }
  ];

  const guarantees = [
    {
      title: "Erfolgsgarantie",
      description: "Sollten wir Ihre Verkaufsziele nicht erreichen, arbeiten wir kostenfrei weiter bis zum Erfolg.",
      icon: Award,
      highlight: "Risikofrei"
    },
    {
      title: "Geld-zurück-Garantie",
      description: "Nicht zufrieden? Innerhalb der ersten 30 Tage erhalten Sie Ihr Investment zurück.",
      icon: Shield,
      highlight: "30 Tage"
    },
    {
      title: "Kostenlose Nachbesserung",
      description: "Kleinere Anpassungen und Optimierungen führen wir kostenfrei durch.",
      icon: Star,
      highlight: "Gratis Service"
    }
  ];

  const socialProof = [
    { metric: "200+", label: "Zufriedene Makler", desc: "Deutschlandweit" },
    { metric: "4.9/5", label: "Kundenbewertung", desc: "Durchschnitt" },
    { metric: "95%", label: "Erfolgsquote", desc: "Bei allen Projekten" },
    { metric: "5+", label: "Jahre Erfahrung", desc: "Branchenexklusiv" }
  ];

  return (
    <section className="relative bg-black overflow-hidden py-20 lg:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 85, 0, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 85, 0, 0.05) 0%, transparent 50%)`
        }} />
      </div>

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
            <span className="text-orange-400 text-sm font-medium tracking-wide">VERTRAUEN & GARANTIEN</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Warum Sie uns
            <span className="relative inline-block mx-2">
              <span className="relative z-10 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
                vertrauen können
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Vertrauen ist die Grundlage jeder erfolgreichen Partnerschaft. 
            <strong className="text-white"> Hier sind die Gründe, warum über 200 Makler uns vertrauen.</strong>
          </p>
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {socialProof.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-md border border-orange-500/20 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-3xl font-bold text-orange-400 mb-2">{stat.metric}</div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Pillars */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {trustPillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-full rounded-2xl p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:shadow-[0_20px_60px_0_rgba(255,85,0,0.2)] hover:scale-[1.02] transition-all duration-500">
                  
                  {/* Background Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <IconComponent className="w-7 h-7 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-100 transition-colors duration-300">
                          {pillar.title}
                        </h3>
                        <div className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-xs font-medium mb-3">
                          {pillar.trustScore}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                      {pillar.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-3">
                      {pillar.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outer Glow */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Guarantees Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Unsere Garantien für Sie
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Diese Versprechen können Sie von uns erwarten - 
              <strong className="text-white"> ohne Risiko für Sie.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-orange-500/30 hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-orange-400" />
                  </div>
                  
                  <div className="mb-3">
                    <div className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-xs font-medium mb-2">
                      {guarantee.highlight}
                    </div>
                    <h4 className="text-lg font-semibold text-white">{guarantee.title}</h4>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">{guarantee.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-3xl mx-auto mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Bereit für eine vertrauensvolle Partnerschaft?
            </h3>
            <p className="text-gray-300 text-lg">
              Starten Sie risikofrei mit unserem kostenlosen Beratungsgespräch und 
              <strong className="text-white"> erleben Sie den Unterschied</strong>.
            </p>
          </div>
          
          <motion.button
            onClick={handleCtaClick}
            className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold text-white text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Kostenloses Vertrauensgespräch
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBuilding;
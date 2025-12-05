'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Target, CheckCircle, Zap, Award } from 'lucide-react';

const TeamExpertise = () => {
  const teamHighlights = [
    {
      name: "Ali Siaralizadeh",
      role: "Gründer & Strategic Director",
      expertise: "Immobilien-Marketing Strategien",
      experience: "5+ Jahre Branchenerfahrung",
      image: "/ali3.webp",
      achievements: [
        "200+ erfolgreiche Immobilien-Kampagnen umgesetzt",
        "Spezialist für hochkonvertierende Marketing-Funnels",
        "Zertifizierter Meta & Google Ads Experte"
      ],
      specialties: ["Marketing Strategy", "Lead Generation", "Funnel Optimization"]
    },
    {
      name: "Azim Choudry",
      role: "Creative Director & Brand Strategist",
      expertise: "Visual Branding & Content Creation",
      experience: "7+ Jahre Design-Expertise",
      image: "/azimchoudry.webp",
      achievements: [
        "Premium-Brands für 150+ Immobilienmakler entwickelt",
        "Award-winning Creative Portfolio",
        "Spezialist für emotionale Markeninszenierung"
      ],
      specialties: ["Brand Development", "Creative Direction", "Visual Strategy"]
    }
  ];

  const companyStrengths = [
    {
      icon: Award,
      title: "Branchenexklusivität seit 2019",
      description: "100% Fokus auf Immobilienmakler - keine Ablenkung durch andere Branchen",
      stats: "5+ Jahre Spezialisierung"
    },
    {
      icon: Users,
      title: "200+ erfolgreiche Partnerschaften",
      description: "Deutschlandweite Makler vertrauen unserer bewährten Expertise",
      stats: "200+ zufriedene Kunden"
    },
    {
      icon: Target,
      title: "Nachweisbare 300% ROI-Steigerung",
      description: "Messbare Umsatzsteigerungen durch strategisches Marketing",
      stats: "300% durchschnittlicher ROI"
    },
    {
      icon: Lightbulb,
      title: "Innovative Marketing-Methoden",
      description: "Cutting-Edge Strategien für modernste Immobilienvermarktung",
      stats: "Technologie-Leader"
    }
  ];

  const methodology = [
    {
      title: "Psychologie-basierter Content",
      description: "Jede Marketingbotschaft basiert auf bewährten Verkaufspsychologie-Prinzipien und emotionalen Triggern.",
      icon: Lightbulb
    },
    {
      title: "Datengetriebene Strategien",
      description: "Alle Entscheidungen basieren auf echten Daten und kontinuierlicher Performance-Optimierung.",
      icon: Target
    },
    {
      title: "Branchenspezifisches Know-how",
      description: "Tiefes Verständnis der Immobilienbranche und ihrer spezifischen Herausforderungen.",
      icon: Users
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
          backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255, 85, 0, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 70% 70%, rgba(255, 85, 0, 0.05) 0%, transparent 50%)`
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
            <span className="text-orange-400 text-sm font-medium tracking-wide">UNSER EXPERTENTEAM</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Die Köpfe hinter
            <span className="relative inline-block mx-2">
              <span className="relative z-10 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
                Ihrem Erfolg
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Lernen Sie das erfahrene Team kennen, das Ihre Immobilien-Marketing-Visionen zur Realität macht. 
            <strong className="text-white"> Branchenexpertise trifft auf innovative Strategien.</strong>
          </p>
        </motion.div>

        {/* Team Highlights */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {teamHighlights.map((member, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative rounded-2xl p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:shadow-[0_20px_60px_0_rgba(255,85,0,0.2)] hover:scale-[1.02] transition-all duration-500">
                
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Profile Section */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex-shrink-0">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-orange-400 font-medium mb-2">{member.role}</p>
                      <p className="text-gray-300 text-sm mb-2">{member.expertise}</p>
                      <p className="text-gray-400 text-xs">{member.experience}</p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Award className="w-4 h-4 text-orange-400" />
                      Erfolge & Expertise:
                    </h4>
                    <div className="space-y-3">
                      {member.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Kernkompetenzen:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outer Glow */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Strengths */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {companyStrengths.map((strength, index) => {
            const IconComponent = strength.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-orange-500/30 hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-lg font-bold text-orange-400 mb-2">{strength.stats}</div>
                <h4 className="text-sm font-semibold text-white mb-2">{strength.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{strength.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Methodology */}
        <motion.div 
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Unsere bewährten Methoden
            </h3>
            <p className="text-gray-300 text-lg">
              Diese Prinzipien machen den Unterschied in unserer täglichen Arbeit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {methodology.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-orange-500/30 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-orange-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{method.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{method.description}</p>
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
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Möchten Sie unser Team persönlich kennenlernen?
            </h3>
            <p className="text-gray-300 text-lg">
              Vereinbaren Sie ein kostenloses Strategiegespräch und erleben Sie unsere Expertise.
            </p>
          </div>
          
          <motion.button
            onClick={handleCtaClick}
            className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold text-white text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Team kennenlernen
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamExpertise;
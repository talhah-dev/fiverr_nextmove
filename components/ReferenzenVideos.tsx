'use client';

import React from 'react';
import { motion } from 'framer-motion';

const videoReferenzen = [
  {
    id: 1,
    name: "Michael Schürdt",
    company: "HMS-Finance Consulting",
    description: "Durch die Zusammenarbeit mit NextMove konnte ich meine Leadkosten um 70% senken und gleichzeitig die Qualität der Anfragen erheblich steigern. Die automatisierten Systeme haben mir wochenlang Zeit gespart.",
    videoSrc: "https://play.gumlet.io/embed/6827315c105cb03a34441df5?preload=false&autoplay=false&loop=false&background=false&disable_player_controls=false",
    position: "left"
  },
  {
    id: 2,
    name: "Jens Freyer",
    company: "Freyer Immobilien",
    description: "Die Personal Brand Strategie von NextMove hat meine Sichtbarkeit in der Immobilienbranche revolutioniert. Heute kommen die Kunden zu mir, anstatt dass ich ihnen hinterlaufen muss.",
    videoSrc: "https://play.gumlet.io/embed/6838f13e71151e6b584f492d?preload=false&autoplay=false&loop=false&background=false&disable_player_controls=false",
    position: "right"
  },
  {
    id: 3,
    name: "Alexander Banzhaf",
    company: "Banzhaf Immobilien",
    description: "Das Funnel-System von NextMove arbeitet rund um die Uhr für mich. Während ich schlafe, werden Leads qualifiziert und vorselektiert. Ein Game-Changer für mein Business!",
    videoSrc: "https://play.gumlet.io/embed/6827315c105cb03a34441df5?preload=false&autoplay=false&loop=false&background=false&disable_player_controls=false",
    position: "left"
  },
  {
    id: 4,
    name: "Alexander Kedro",
    company: "Kedro Immobilien",
    description: "Die LinkedIn Automation hat mein Netzwerk und meine Reichweite exponentiell vergrößert. Jeden Tag erreiche ich potenzielle Kunden, ohne manuell Zeit zu investieren.",
    videoSrc: "https://play.gumlet.io/embed/6838f13e71151e6b584f492d?preload=false&autoplay=false&loop=false&background=false&disable_player_controls=false",
    position: "right"
  }
];

export default function ReferenzenVideos() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="relative bg-black py-20 sm:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-500/10 filter blur-[120px] animate-pulse-orange"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-orange-500/5 filter blur-[120px] animate-pulse-orange" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white font-montserrat">
            Unsere <span className="relative">
              <span className="relative z-10 text-[#ff5500]">Erfolgsgeschichten</span>
              <span className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50"></span>
              <span className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mt-6 max-w-3xl mx-auto font-inter leading-relaxed">
            Echte Erfolgsgeschichten von echten Kunden. Erfahren Sie, wie unsere Partner durch die Zusammenarbeit 
            mit NextMove Digital ihre Geschäftsziele erreicht und übertroffen haben.
          </p>
        </motion.div>

        {/* Video Referenzen Grid */}
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="space-y-16 lg:space-y-20">
            {videoReferenzen.map((referenz, index) => (
              <motion.div
                key={referenz.id}
                variants={itemVariants}
                className="group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  referenz.position === 'right' ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Video Container */}
                  <div className={`relative ${referenz.position === 'right' ? 'lg:col-start-2' : ''}`}>
                    <div className="relative rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,85,0,0.1)] hover:shadow-[0_16px_48px_0_rgba(255,85,0,0.15)] hover:scale-[1.02] hover:border-white/[0.12] transition-all duration-500 ease-out">
                      
                      {/* Inner glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Shine effect on hover */}
                      <div className="hidden md:block absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                      </div>

                      <div className="relative z-10">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <iframe
                            loading="lazy"
                            title={`Video Testimonial von ${referenz.name}`}
                            src={referenz.videoSrc}
                            style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
                            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                            allowFullScreen
                          ></iframe>
                        </div>
                        
                        {/* Video Info */}
                        <div className="mt-4 text-center">
                          <h3 className="text-lg font-semibold text-white">{referenz.name}</h3>
                          <p className="text-sm text-gray-400">{referenz.company}</p>
                        </div>
                      </div>

                      {/* Outer glow effect */}
                      <div className="hidden md:block absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
                    </div>
                  </div>

                  {/* Description Container */}
                  <div className={`relative ${referenz.position === 'right' ? 'lg:col-start-1' : ''}`}>
                    <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,85,0,0.1)] hover:shadow-[0_16px_48px_0_rgba(255,85,0,0.15)] hover:scale-[1.02] hover:border-white/[0.12] transition-all duration-500 ease-out min-h-[250px] flex flex-col justify-center">
                      
                      {/* Inner glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Shine effect on hover */}
                      <div className="hidden md:block absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                      </div>

                      <div className="relative z-10">
                        {/* Quote Icon */}
                        <div className="mb-4">
                          <svg className="w-8 h-8 text-[#ff5500] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                        </div>
                        
                        {/* Description Text */}
                        <p className="text-white/90 text-base sm:text-lg leading-relaxed group-hover:text-white transition-colors duration-300 mb-6">
                          {referenz.description}
                        </p>
                        
                        {/* Client Info */}
                        <div className="border-t border-white/[0.06] group-hover:border-orange-500/20 transition-colors duration-300 pt-4">
                          <h4 className="text-white font-semibold text-lg">{referenz.name}</h4>
                          <p className="text-gray-400 text-sm">{referenz.company}</p>
                        </div>

                        {/* Bottom accent line */}
                        <div className="mt-4">
                          <div className="w-12 h-1 bg-gradient-to-r from-[#ff5500] to-[#ff8040] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>

                      {/* Outer glow effect */}
                      <div className="hidden md:block absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
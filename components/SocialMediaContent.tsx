"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Iphone16Pro } from "@/components/ui/iphone-16-pro";
import CountUp from "@/components/ui/CountUp";
import { Play } from 'lucide-react';

interface ContentCardProps {
  imageUrl: string;
  index?: number;
  achievements: {
    metric1: string;
    metric2: string;
    metric3: string;
  };
  layoutDirection?: 'left' | 'right';
  title: string;
  description: string;
}

// Helper function to extract numbers from metric strings
const extractNumber = (text: string): number => {
  const match = text.match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
};

// Parse metric text to get parts before and after number
const parseMetricText = (text: string): {beforeNumber: string, number: number, afterNumber: string} => {
  const number = extractNumber(text);
  const parts = text.split(/\d+/);
  return {
    beforeNumber: parts[0] || '',
    number: number,
    afterNumber: parts[1] || ''
  };
};

const HighlightedMetric: React.FC<{ text: string; index: number }> = ({ text, index }) => {
  const { beforeNumber, number, afterNumber } = parseMetricText(text);
  
  return (
    <span className="text-white/80">
      <span>{beforeNumber}</span>
      <span className="font-semibold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent px-1">
        <CountUp
          from={0}
          to={number}
          duration={1.5}
          delay={index * 0.2}
          className="font-semibold"
        />
      </span>
      <span>{afterNumber}</span>
    </span>
  );
};

const ContentCard: React.FC<ContentCardProps> = ({ 
  imageUrl, 
  index = 0, 
  achievements, 
  layoutDirection = 'left',
  title,
  description 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: index * 0.3
      }
    }
  };

  const phoneVariants = {
    hidden: { 
      opacity: 0,
      x: layoutDirection === 'left' ? -100 : 100,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      x: layoutDirection === 'left' ? 100 : -100
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      className="mb-32 lg:mb-48"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div 
        className={`flex flex-col lg:grid lg:grid-cols-2 items-center gap-8 lg:gap-12 xl:gap-16 ${
          layoutDirection === 'right' ? 'lg:grid-flow-dense' : ''
        }`}
      >
        
        {/* iPhone Section - MASSIVELY ENLARGED */}
        <motion.div 
          className={`relative group w-full lg:col-span-1 flex-shrink-0 ${layoutDirection === 'right' ? 'lg:col-start-2' : 'lg:col-start-1'}`}
          variants={phoneVariants}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="relative max-w-lg mx-auto">
            <motion.div
              className="relative"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.4 }
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <Iphone16Pro
                src={imageUrl}
                className="w-full h-[600px] xl:h-[700px] text-zinc-900"
              />

              {/* Premium Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="bg-black/60 backdrop-blur-md rounded-full p-6 cursor-pointer border border-white/20"
                  whileHover={{ 
                    scale: 1.15,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    borderColor: "rgba(255,255,255,0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  style={{ transitionDelay: `${index * 0.2 + 0.8}s` }}
                >
                  <Play className="w-10 h-10 text-white fill-white" />
                </motion.div>
              </div>

              {/* Subtle Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-xl opacity-0"
                animate={isInView ? {
                  opacity: [0, 0.3, 0],
                  scale: [1, 1.02, 1]
                } : { opacity: 0 }}
                transition={{
                  duration: 4,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section - MATCHING PAINPOINTS TYPOGRAPHY */}
        <motion.div 
          className={`w-full lg:col-span-1 flex-shrink-0 p-4 xs:p-6 sm:p-8 md:p-10 lg:p-8 xl:p-10 2xl:p-12 ${
            layoutDirection === 'left' ? 'text-center lg:text-left' : 'text-center lg:text-right'
          } ${layoutDirection === 'right' ? 'lg:col-start-1' : 'lg:col-start-2'}`}
          variants={contentVariants}
        >
          
          {/* Title and Description - MATCHING HERO/PAINPOINTS STYLE */}
          <div className="mb-12">
            <motion.h3 
              className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {title}
            </motion.h3>
            <motion.p 
              className="text-lg text-white/70 leading-relaxed font-normal max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {description}
            </motion.p>
          </div>

          {/* Results Section - CLEAN CARDS */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[achievements.metric1, achievements.metric2, achievements.metric3].map((metric, idx) => (
              <motion.div 
                key={idx} 
                className="group relative rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, x: layoutDirection === 'left' ? 80 : -80 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: layoutDirection === 'left' ? 80 : -80 }}
                transition={{ delay: 0.7 + idx * 0.15, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -3,
                  transition: { duration: 0.3 }
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                
                <div className="relative z-10">
                  <div className="text-xl font-semibold group-hover:scale-105 transition-transform duration-300">
                    <HighlightedMetric text={metric} index={idx} />
                  </div>
                </div>

                {/* Subtle Accent - MATCHING PAINPOINTS STYLE */}
                <div className="mt-4 pt-4 border-t border-white/10 group-hover:border-orange-500/20 transition-colors duration-300">
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const SocialMediaContent = () => {
  const contentCards: Omit<ContentCardProps, 'index' | 'layoutDirection'>[] = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
      title: "Lead-Magnet",
      description: "Strategisch konzipiertes Reel, das gezielt qualifizierte Interessenten anspricht und zur Kontaktaufnahme motiviert.",
      achievements: {
        metric1: "150% mehr Anfragen in 7 Tagen",
        metric2: "27 qualifizierte Leads generiert",
        metric3: "5 neue Abschlüsse erzielt"
      }
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
      title: "Viral Content",
      description: "Authentischer Content, der durch emotionale Ansprache und Mehrwert eine hohe organische Reichweite erzielt.",
      achievements: {
        metric1: "300% mehr Engagement-Rate",
        metric2: "500 neue Follower gewonnen",
        metric3: "Top-Positionierung im Feed erreicht"
      }
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
      title: "Performance Ad",
      description: "Optimiertes Reel für bezahlte Werbeanzeigen mit klarem Call-to-Action und messbaren Conversion-Zielen.",
      achievements: {
        metric1: "40% weniger Kosten pro Lead",
        metric2: "25% höhere Conversion-Rate",
        metric3: "350% Return on Investment"
      }
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
      title: "Recruiting",
      description: "Gezieltes Employer Branding Reel zur Gewinnung qualifizierter Mitarbeiter und Stärkung der Arbeitgebermarke.",
      achievements: {
        metric1: "15 Top-Bewerbungen erhalten",
        metric2: "50% kürzere Einstellungszeit",
        metric3: "200% mehr Reichweite bei Zielgruppe"
      }
    }
  ];

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Enhanced Gradient Background Effect - Similar to PainPoints */}
      <div className="absolute inset-0">
        <svg 
          className="blur-3xl filter opacity-30" 
          style={{ filter: 'blur(50px)' }} 
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

      {/* Additional floating blur orbs for glassmorphism effect */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-orange-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative py-24 xl:py-32">
        {/* Header Section - MATCHING PAINPOINTS STYLE */}
        <div className="max-w-6xl mx-auto text-center mb-24 xl:mb-32">
          <motion.div 
            className="inline-block border border-white/20 rounded-full px-6 py-2 text-sm text-white/80 mb-8 xl:mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            SOCIAL MEDIA CONTENT
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-8 xl:mb-16 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vertrauen schaffen durch
            <div className="inline-block relative mx-2">
              <span className="relative z-10 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Motion
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-4 bg-gradient-to-r from-orange-400 to-red-500 blur-lg opacity-50"></span>
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500"></span>
            </div>
          </motion.h2>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-white/70 leading-relaxed font-normal">
              Professionelle Finanz-Reels, die nicht nur Aufmerksamkeit erzeugen, sondern echtes Vertrauen und Kunden gewinnen.
            </p>
          </motion.div>
        </div>
        
        {/* Content Cards with Alternating Layout */}
        <div className="space-y-0">
          {contentCards.map((card, index) => (
            <ContentCard
              key={index}
              imageUrl={card.imageUrl}
              index={index}
              achievements={card.achievements}
              layoutDirection={index % 2 === 0 ? 'left' : 'right'}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default SocialMediaContent;

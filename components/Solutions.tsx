'use client';

import React, { useEffect, useRef, useState, useMemo, memo, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RiCheckboxCircleFill } from "react-icons/ri";
import {
  BsShare,
  BsLightningFill,
  BsWindow,
  BsCameraVideoFill,
  BsPersonBadgeFill,
  BsGear
} from 'react-icons/bs';
import Image from 'next/image';
import { LampContainer } from '@/components/ui/lamp-effect';
import dynamic from 'next/dynamic';
import socialBubbleAnimation from "../public/cZpLSLixLK.json";

// Dynamischer Import von Lottie
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div className="w-full h-64 bg-gray-800/50 animate-pulse rounded-lg" />
});

// Optimized Lottie Component
const OptimizedLottie = memo(({ animationData, className }: { animationData: any, className?: string }) => (
  <div className={className}>
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width: '100%', height: '100%' }}
      rendererSettings={{
        preserveAspectRatio: 'xMidYMid meet',
        progressiveLoad: true,
        hideOnTransparent: true
      }}
    />
  </div>
));

OptimizedLottie.displayName = 'OptimizedLottie';

const LinkedInOrbiting = dynamic(() => import('@/components/magicui/linkedin-orbiting').then(mod => ({ default: mod.LinkedInOrbiting })), {
  ssr: false,
  loading: () => <div className="w-32 h-32 bg-gray-800/50 animate-pulse rounded-full mx-auto" />
});

interface SolutionItemProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  description: string;
  features: string[];
  icon?: React.ElementType;
  reverse?: boolean;
  index?: number;
}

const Solutions = memo(() => {
  const containerRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Optimierte Mobile Detection
  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();

    // Debounced resize handler
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Scroll Performance Optimization
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  // Memoized solutions data
  const solutionsData: SolutionItemProps[] = useMemo(() => [
    {
      imgUrl: "/meta-leads.webp",
      subheading: "GEZIELT & DATENGETRIEBEN",
      heading: "Digitale Leadgenerierung",
      description: "Erfolgserprobte Strategien mit denen wir qualifizierte Leads generieren und so nicht nur für Reichweite, sondern auch für zahlende Kunden sorgen.",
      features: [
        "Gezielte Zielgruppenansprache",
        "Automatische Leadgenerierung",
        "Performance-optimierte Kampagnen",
        "Transparentes Reporting",
        "Kosteneffiziente Werbeschaltung"
      ],
      icon: BsShare
    },
    {
      imgUrl: "/simonlanding2.svg",
      subheading: "MODERN & KONVERTIEREND",
      heading: "Webdesign & Landingpages",
      description: "Hochkonvertierende Websites und Landingpages, die Besucher in Kunden verwandeln. Modernes Design kombiniert mit bewährten Conversion-Elementen.",
      features: [
        "Mobile-first Design",
        "Conversion-optimierte Layouts",
        "Schnelle Ladezeiten",
        "Eigener Chatbot",
        "SEO-optimierte Struktur"
      ],
      icon: BsWindow
    },
    {
      imgUrl: "/funnel1.webp",
      subheading: "AUTOMATISIERT & EFFIZIENT",
      heading: "Funnel-Systeme",
      description: "Automatisierte Verkaufstrichter, die rund um die Uhr Leads qualifizieren und in zahlende Kunden verwandeln - ohne manuellen Aufwand.",
      features: [
        "24/7 Lead-Qualifizierung",
        "Automatisierte Nurturing-Kampagnen",
        "Multi-Channel Integration",
        "Performance Tracking",
        "Skalierbare Systeme"
      ],
      icon: BsLightningFill
    },
    {
      imgUrl: "/artwork.webp",
      subheading: "PROFESSIONELL & EMOTIONAL",
      heading: "Hollywood-reifer Content",
      description: "Mit datengetriebenen, kreativen Video-Ads stechen wir aus der Masse heraus und überzeugen Ihre Zielgruppe direkt auf ihrem Smartphone.",
      features: [
        "Professionelle Video-Produktion",
        "Emotionale Storytelling-Ansätze",
        "Datengetriebene Content-Strategien",
        "Multi-Format Optimierung",
        "Viral-Content Entwicklung"
      ],
      icon: BsCameraVideoFill
    },
    {
      imgUrl: "/bb.webp",
      subheading: "AUTHENTISCH & AUTORITÄR",
      heading: "Brand Aufbau",
      description: "Wir verwandeln Sie in eine unwiderstehliche Marke, die Vertrauen schafft und Kunden anzieht.",
      features: [
        "Authentische Markenpositionierung",
        "Content-Strategie für Thought Leadership",
        "Social Media Präsenz aufbauen",
        "Reputation Management",
        "Vertrauensaufbau durch Expertise"
      ],
      icon: BsPersonBadgeFill
    },
    {
      imgUrl: "/process-optimization.webp",
      subheading: "INTELLIGENT & HOCHWERTIG",
      heading: "Prozessoptimierte Vertriebsmethoden",
      description: "Systematische Ansprache vermögender Privatpersonen über LinkedIn und automatisierte CRM-Pipelines für nachhaltigen Investoren-Aufbau im Immobilienbereich.",
      features: [
        "LinkedIn Funnels für High-Net-Worth Individuals",
        "Personalisierte Nachrichten basierend auf Profil-Analyse",
        "Targeting steueroptimierter Immobilien-Investoren",
        "Menschlich wirkende, authentische Kommunikation",
        "Automatisierte Lead-Vorqualifizierung & CRM-Integration"
      ],
      icon: BsGear
    }
  ], []);

  return (
    <section id="solutions" ref={containerRef} className="relative bg-black overflow-hidden">
      {/* Header Section */}
      <div className="relative min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex items-center justify-center">
        <LampContainer>
          <div className="mt-8 sm:mt-16 md:mt-24 lg:mt-36">
            <motion.h2
              initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-tight tracking-tight text-center"
            >
              <span className="block">Das bieten wir</span>
              <div className="relative mt-2 sm:mt-3 inline-block">
                <span className="relative inline-block">
                  <span className="relative z-10 text-white font-semibold">für Sie</span>
                  <span className="absolute bottom-[-4px] md:bottom-[-3px] left-0 w-full h-1.5 md:h-2 bg-[#ff5500]" />
                </span>
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 md:h-4 lg:h-5 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-xl opacity-60"></span>
              </div>
            </motion.h2>
            <motion.p
              initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mt-6 sm:mt-8 md:mt-10 font-light text-center px-4"
            >
              Maßgeschneiderte Digital-Marketing-Lösungen, die Ihr Immobiliengeschäft auf das nächste Level bringen
            </motion.p>
          </div>
        </LampContainer>
      </div>

      {/* Solutions Grid - Modernes 2-Spalten Card Layout (breiter) */}
      <div className="relative z-20 pb-20 pt-8 -mt-8 sm:-mt-16 md:-mt-24 lg:-mt-80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8">
            {solutionsData.map((solution, index) => (
              <SolutionCard
                key={`solution-${index}`}
                {...solution}
                index={index}
                isClient={isClient}
                isScrolling={isScrolling}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

// Moderne Solution Card Komponente
const SolutionCard: React.FC<SolutionItemProps & { isClient?: boolean; isScrolling?: boolean }> = React.memo(({
  imgUrl,
  subheading,
  heading,
  description,
  features,
  icon: IconComponent,
  index = 0,
  isClient = false,
  isScrolling = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Card - Horizontal Layout auf Desktop */}
      <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/[0.08] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
        {/* Glassmorphism inner glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none"></div>

        {/* Card Content Wrapper - Flex für horizontal layout */}
        <div className="flex flex-col sm:flex-row h-full">
          {/* Image/Effect Section - Links auf Desktop */}
          <div className="relative h-48 sm:h-auto sm:w-2/5 flex-shrink-0 overflow-hidden bg-black/20">
          {/* Special content for specific sections */}
          {heading === "Brand Aufbau" ? (
            <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-4">
              {isClient && !isScrolling && (
                <OptimizedLottie
                  animationData={socialBubbleAnimation}
                  className="w-24 h-24 sm:w-32 sm:h-32"
                />
              )}
            </div>
          ) : heading === "Prozessoptimierte Vertriebsmethoden" ? (
            <div className="relative w-full h-full flex items-center justify-center">
              {isClient && (
                <LinkedInOrbiting
                  className="opacity-90"
                  radius={60}
                  iconSize={28}
                  duration={25}
                  speed={0.8}
                  reverse={false}
                />
              )}
            </div>
          ) : (
            <Image
              src={imgUrl}
              alt={heading}
              fill
              className="object-cover"
              loading="lazy"
            />
          )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
          </div>

          {/* Content Section - Rechts auf Desktop */}
          <div className="relative p-5 sm:p-6 flex-1 flex flex-col justify-between">
          {/* Icon & Badge */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/[0.15] to-white/[0.05] backdrop-blur-sm border border-white/[0.1] flex items-center justify-center">
                {IconComponent && (
                  <IconComponent className="w-5 h-5 text-[#ff5500]" />
                )}
              </div>
              <div className="absolute inset-0 rounded-lg bg-orange-500/20 blur-lg opacity-60"></div>
            </div>
            <span className="text-xs tracking-wider font-semibold text-orange-400 uppercase">
              {subheading}
            </span>
          </div>

            {/* Heading */}
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
              {heading}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
              {description}
            </p>

            {/* Features - Top 3 */}
            <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 flex-1">
              {features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start text-xs">
                  <RiCheckboxCircleFill className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff5500] flex-shrink-0 mt-0.5" />
                  <span className="ml-2 text-white/70">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              onClick={() => window.open('https://lunacal.ai/team/nextmove-digital/meeting', '_blank')}
              className="w-full px-4 py-2 sm:py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#ff5500]/10 border border-[#ff5500]/50 rounded-lg hover:bg-[#ff5500]/20 hover:border-[#ff5500]/70 transition-all duration-300"
            >
              Mehr erfahren
            </button>
          </div>
        </div>

        {/* Floating glow effect */}
        {!isScrolling && (
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
        )}
      </div>
    </motion.div>
  );
});

Solutions.displayName = 'Solutions';
SolutionCard.displayName = 'SolutionCard';

export default Solutions;

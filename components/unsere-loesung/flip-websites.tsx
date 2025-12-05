'use client';

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

const websites = [
  { 
    id: 0, 
    title: 'Freyer Immobilien - Vermögen durch Immobilien aufbauen', 
    url: 'https://freyer.immo', 
    button: 'Website besuchen', 
    src: '/freyerimmo-website.webp',
    leads: 20, 
    conversion: "12%", 
    traffic: "+150%",
    description: "Lead-Generierung für Immobilienvermittlung",
    points: [
      "20+ Leads generiert",
      "12% Conversion Rate", 
      "+150% Traffic",
      "Landing Page optimiert",
      "Performance Marketing"
    ]
  },
  { 
    id: 1, 
    title: 'CD Immo - Nachhaltig Vermögen aufbauen & Steuerlast senken', 
    url: 'https://cd-immo.de', 
    button: 'Website besuchen', 
    src: '/cdwebsite.webp',
    leads: 35, 
    conversion: "18%", 
    traffic: "+200%",
    description: "Premium-Design für nachhaltige Investments",
    points: [
      "35+ qualifizierte Leads",
      "18% Conversion Rate",
      "+200% Traffic-Wachstum",
      "SEO-Optimierung",
      "Premium-Design"
    ]
  },
  { 
    id: 2, 
    title: 'HMS Finance - In 4 Wochen zur Immobilie für mehr Kapital', 
    url: 'https://hmsfinance.de', 
    button: 'Website besuchen', 
    src: '/hmsfinancewebsite.webp',
    leads: 45, 
    conversion: "15%", 
    traffic: "+180%",
    description: "KI-Automatisierung für Immobilienfinanzierung",
    points: [
      "45+ Leads durch KI",
      "15% Conversion Rate",
      "+180% Traffic",
      "Chatbot-Integration",
      "Automatisierte Workflows"
    ]
  },
  { 
    id: 3, 
    title: 'Kedro - Mit Immobilien Vermögen aufbauen & Altersvorsorge sichern', 
    url: 'https://kedro-immobilien.de', 
    button: 'Website besuchen', 
    src: '/kedro_landingpage.webp',
    leads: 28, 
    conversion: "14%", 
    traffic: "+160%",
    description: "Verkaufspsychologisch optimierte Gewinnung",
    points: [
      "28+ zielgerichtete Leads",
      "14% Conversion",
      "+160% Traffic",
      "Psychologischer Aufbau",
      "Emotionales Design"
    ]
  },
  { 
    id: 4, 
    title: 'Simon Hauer Immobilien - Enormer Traffic durch individuellen Rechner', 
    url: 'https://www.simonhauer.de', 
    button: 'Website besuchen', 
    src: '/simon-landingpage.webp',
    leads: 50, 
    conversion: "25%", 
    traffic: "+300%",
    description: "Enormer Traffic-Zuwachs durch maßgeschneiderten Steuerrechner",
    points: [
      "50+ hochqualifizierte Leads",
      "25% Conversion durch Rechner", 
      "+300% organischer Traffic",
      "Individueller Steuerrechner",
      "Gamification-Ansatz"
    ]
  }
];

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    url: string;
    src: string;
    leads: number;
    conversion: string;
    traffic: string;
    description: string;
    points: string[];
  }[];
}) => {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 5);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Responsive transform values
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 200 : 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? -200 : -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 5 : 15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 0.8 : 0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 5 : 20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? -100 : -650, isMobile ? 160 : 420]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="flip-websites h-[100vh] sm:h-[120vh] md:h-[130vh] lg:h-[140vh] pt-10 sm:pt-16 md:pt-20 lg:pt-24 pb-4 sm:pb-6 md:pb-8 lg:pb-10 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-black"
    >
      {/* Enhanced Orange Gradient Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <svg 
          className="blur-xl sm:blur-2xl md:blur-3xl filter opacity-20 sm:opacity-30 md:opacity-40" 
          width="100%" 
          height="100%" 
          viewBox="0 0 444 536" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
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

      {/* Additional floating blur orbs */}
      <div className="absolute top-1/4 left-1/4 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 rounded-full bg-white/5 blur-xl sm:blur-2xl md:blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full bg-orange-500/10 blur-xl sm:blur-2xl md:blur-3xl pointer-events-none"></div>

      <Header />
      
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="w-full"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-20 mb-3 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 justify-center px-2 sm:px-4">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-20 mb-0 sm:mb-2 md:mb-4 lg:mb-6 xl:mb-8 justify-center px-2 sm:px-4">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-8 sm:py-12 md:py-16 lg:py-20 xl:py-40 px-4 sm:px-6 lg:px-8 w-full left-0 top-0 z-10">
      <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-3 sm:mb-4 md:mb-6">
        <span className="text-orange-400 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide">UNSERE WEBSITES</span>
      </div>
      
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
        Mehr <span className="relative inline-block text-[#ff5500]">Anfragen</span> durch <br className="hidden sm:block"/> 
        unsere individuell selbstentwickelte Webseite
      </h1>
      <p className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 md:mt-8 text-gray-300">
        Mit Features, die gezielt Interessenten für Immobilien gewinnen: verkaufspsychologischer Aufbau, Premium-Design, SEO-Optimierung, responsives Design und ein eigener Chatbot, der nicht nur Fragen beantwortet, sondern auch verkauft und <span className="relative inline-block text-white">neue Leads generiert</span>.
      </p>
    </div>
  );
};

export const ProductCard = React.memo(({
  product,
  translate,
}: {
  product: {
    title: string;
    url: string;
    src: string;
    leads: number;
    conversion: string;
    traffic: string;
    description: string;
    points: string[];
  };
  translate: MotionValue<number>;
}) => {
  // Mobile-optimierte Bildladelogik
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState<string>("");

  React.useEffect(() => {
    // Preload image
    const img = new Image();
    img.src = product.src;
    img.onload = () => {
      setImageSrc(product.src);
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.error(`Failed to load image: ${product.src}`);
      // Fallback auf placeholder
      setImageSrc('/placeholder.webp');
      setImageLoaded(true);
    };
  }, [product.src]);

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-32 w-48 xs:h-40 xs:w-56 sm:h-48 sm:w-64 md:h-64 md:w-80 lg:h-80 lg:w-96 xl:h-96 xl:w-[32rem] 2xl:w-[42rem] relative shrink-0"
    >
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group-hover/product:shadow-2xl w-full h-full"
      >
        {imageLoaded ? (
          <img
            src={imageSrc}
            height="600"
            width="600"
            className="object-cover object-center absolute h-full w-full inset-0 rounded-lg"
            alt={product.title}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-900/20 to-black/40 animate-pulse" />
        )}
      </a>
      
      {/* Hover Button - Mobile optimiert */}
      <div className="absolute inset-1 sm:inset-2 md:inset-1 lg:-inset-1 flex items-center justify-center opacity-0 group-hover/product:opacity-100 bg-black/50 transition-opacity duration-300 rounded-lg pointer-events-none">
        <button 
          className="bg-[#ff5500] hover:bg-[#ff8040] text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-lg font-medium text-[10px] sm:text-xs md:text-sm lg:text-base transition-colors duration-200 pointer-events-auto shadow-lg"
          onClick={(e) => {
            e.preventDefault();
            window.open(product.url, '_blank');
          }}
        >
          Website besuchen
        </button>
      </div>
    </motion.div>
  );
});

const FlipWebsites = () => {
  return (
    <>
      <HeroParallax products={websites} />
      
      {/* CTA Button Section - Outside parallax */}
      <section className="bg-black pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <button
              onClick={() => window.open('https://lunacal.ai/team/nextmove-digital/meeting', '_blank')}
              style={{
                background: 'rgba(255, 85, 0, 0.1)',
                color: 'white',
                border: '1px solid rgba(255, 85, 0, 0.5)',
                borderRadius: '14px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 15px rgba(255, 85, 0, 0.4)',
                cursor: 'pointer',
                lineHeight: '1.2',
              }}
              className="relative px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 btn-orange-glow text-xs sm:text-sm md:text-base"
            >
              <div
                style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.8) 0%, rgba(255, 85, 0, 0.4) 40%, transparent 70%)',
                  filter: 'blur(12px)',
                  opacity: '0.6',
                  zIndex: '-1',
                  transform: 'scale(1.1)'
                }}
              ></div>
              Webseite kostenlos anfragen
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FlipWebsites;
'use client';

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { BsGraphUpArrow, BsEyeFill, BsPeopleFill, BsCurrencyEuro, BsLightning, BsCheckCircleFill } from 'react-icons/bs';
import { RiCheckboxCircleFill } from 'react-icons/ri';

// Lazy-loading Jumpshare iframe mit IntersectionObserver
const LazyJumpshareEmbed = ({
  embedSrc,
  className = '',
  id
}: {
  embedSrc: string;
  className?: string;
  id?: string;
}) => {
  const ref = React.useRef<HTMLIFrameElement>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          const dataSrc = el.getAttribute('data-src');
          if (dataSrc) {
            el.src = dataSrc;
          }
          setIsLoaded(true);
          io.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [isLoaded]);

  return (
    <div className="relative overflow-hidden rounded-2xl" style={{ width: '300px', height: '533px', backgroundColor: 'transparent' }}>
      <iframe
        ref={ref}
        id={id}
        title={`Jumpshare Embed ${id}`}
        data-src={embedSrc}
        frameBorder={0}
        allowFullScreen
        width="300"
        height="533"
        className={className}
        allow="autoplay; fullscreen; picture-in-picture"
        style={{ backgroundColor: 'transparent', border: 'none', display: 'block' }}
      />
    </div>
  );
};

const StatItem = ({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) => (
  <div className="flex items-start text-left">
    <div className="flex-grow">
      <div className="text-2xl sm:text-3xl font-bold text-black leading-none">{value}</div>
      <div className="text-sm sm:text-base text-gray-600 mt-1">{label}</div>
    </div>
    <RiCheckboxCircleFill className="w-4 h-4 lg:w-5 lg:h-5 text-[#ff5500] flex-shrink-0 mt-1.5 ml-3" />
  </div>
);

const CaseStudySection = () => {
  const handleCtaClick = () => {
    window.open('https://lunacal.ai/team/nextmove-digital/meeting', '_blank', 'noopener,noreferrer');
  };

  const stats1 = [
    { value: '100+', label: 'Qualifizierte Leads', icon: BsPeopleFill },
    { value: '200k+', label: 'Impressionen', icon: BsEyeFill },
    { value: '70k', label: 'Reichweite', icon: BsGraphUpArrow },
    { value: '10€', label: 'Lead-Preis', icon: BsCurrencyEuro },
    { value: '70', label: 'Pre-Qualifiziert', icon: BsCheckCircleFill },
    { value: '20', label: 'Tage', icon: BsLightning },
  ];

  const stats2 = [
    { value: '70+', label: 'Qualifizierte Leads', icon: BsPeopleFill },
    { value: '150k+', label: 'Impressionen', icon: BsEyeFill },
    { value: '50k', label: 'Reichweite', icon: BsGraphUpArrow },
    { value: '12€', label: 'Lead-Preis', icon: BsCurrencyEuro },
    { value: '65%', label: 'Pre-Qualifiziert', icon: BsCheckCircleFill },
    { value: '30', label: 'Tage', icon: BsLightning },
  ];

  return (
    <>
      {/* Netzwerk-Optimierungen für Jumpshare - Videos statt iframes */}
      <Head>
        <link rel="dns-prefetch" href="//jumpshare.com" />
        <link rel="preconnect" href="https://jumpshare.com" crossOrigin="" />
      </Head>

      <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
          {/* Titel */}
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-black">
              Unsere <span className="text-[#ff5500]">Erfolgsgeschichten</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-6 lg:mt-8 max-w-3xl mx-auto">
              Sehen Sie, wie unsere Content-Marketing-Reels messbare Ergebnisse für unsere Kunden generiert haben
            </p>
          </motion.div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 items-center">
            {/* Card links */}
            <motion.div
              className="relative order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 lg:mb-6 leading-tight">
                  <span className="text-[#ff5500]">100 Leads</span> in{' '}
                  <span className="relative inline-block">
                    20 Tagen
                    <span className="absolute bottom-[-6px] md:bottom-[-5px] left-0 w-full h-1.5 md:h-2 bg-[#ff5500]/40" />
                  </span>{' '}
                  durch dieses Reel
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                  Dieses Content-Marketing-Reel generierte für Azim hochqualifizierte Immobilien-Leads für nur 10€ pro Stück und revolutionierte sein Business.
                </p>
              </div>

              {/* Stats */}
              <div className="space-y-3 lg:space-y-4 mb-8">
                {stats1.map((stat, index) => (
                  <div key={index} className="flex items-center">
                    <RiCheckboxCircleFill className="w-4 h-4 lg:w-5 lg:h-5 text-[#ff5500] flex-shrink-0 mr-3" />
                    <div className="flex items-baseline">
                      <div className="relative inline-block mr-3">
                        <span className="text-xl sm:text-2xl font-bold text-black leading-none">{stat.value}</span>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center md:text-left">
                <button
                  onClick={handleCtaClick}
                  className="px-8 py-4 bg-[#ff5500] text-white font-semibold rounded-xl uppercase tracking-wider hover:bg-[#e64a00] transition-colors duration-300"
                >
                  Diese Zahlen erreichen!
                </button>
              </div>
            </motion.div>

            {/* Video rechts – optimiert mit Lazy Loading */}
            <motion.div
              className="relative flex justify-center order-1 md:order-2 [content-visibility:auto] [contain:paint] [contain-intrinsic-size:533px_300px] will-change-[opacity]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <LazyJumpshareEmbed
                id="js_video_azim"
                embedSrc="https://jumpshare.com/embed/BYDSN3sP6sXDLaEapj9w?hideTitle=true&disableDownload=true"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Video links – optimiert mit Lazy Loading */}
            <motion.div
              className="relative flex justify-center order-1 md:order-1 [content-visibility:auto] [contain:paint] [contain-intrinsic-size:533px_300px] will-change-[opacity]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <LazyJumpshareEmbed
                id="js_video_kedro"
                embedSrc="https://jumpshare.com/embed/06NwIz8ze4v9HBhf9jVT?hideTitle=true&disableDownload=true"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Card rechts */}
            <motion.div
              className="relative order-2 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 lg:mb-6 leading-tight">
                  Über <span className="text-[#ff5500]">70 Leads</span> innerhalb{' '}
                  <span className="relative inline-block">
                    einem Monat
                    <span className="absolute bottom-[-6px] md:bottom-[-5px] left-0 w-full h-1.5 md:h-2 bg-[#ff5500]/40" />
                  </span>
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                  Diese Content-Marketing-Strategie generierte für Herr Kedro über 70 qualifizierte Leads in nur einem Monat und steigerte seinen Umsatz erheblich.
                </p>
              </div>

              {/* Stats */}
              <div className="space-y-3 lg:space-y-4 mb-8">
                {stats2.map((stat, index) => (
                  <div key={index} className="flex items-center">
                    <RiCheckboxCircleFill className="w-4 h-4 lg:w-5 lg:h-5 text-[#ff5500] flex-shrink-0 mr-3" />
                    <div className="flex items-baseline">
                      <div className="relative inline-block mr-3">
                        <span className="text-xl sm:text-2xl font-bold text-black leading-none">{stat.value}</span>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center md:text-left">
                <button
                  onClick={handleCtaClick}
                  className="px-8 py-4 bg-[#ff5500] text-white font-semibold rounded-xl uppercase tracking-wider hover:bg-[#e64a00] transition-colors duration-300"
                >
                  Ihren Erfolg starten!
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudySection;

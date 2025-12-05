'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const videoTestimonials = [
  {
    id: 1,
    name: "Oguz Eper",
    company: "ImmoFix24 GmbH",
    videoSrc: "https://play.gumlet.io/embed/689467bea5cebfc625e267e5",
  },
  {
    id: 2,
    name: "Jens Freyer",
    company: "Freyer Immobilien",
    videoSrc: "https://play.gumlet.io/embed/6894665e7afab80a3eeed8af",
  },
  {
    id: 3,
    name: "Azim Choudhury",
    company: "CD Immo Portfolio GmbH",
    videoSrc: "https://play.gumlet.io/embed/68946551a5cebfc625e23262",
  },
  {
    id: 4,
    name: "Alexander Banzhaf",
    company: "ALBA Unternehmens- und Wirtschaftsberatung",
    videoSrc: "https://play.gumlet.io/embed/6894636207ba3f8de70d04a7",
  },
];

// Optimized iframe component for better performance
const OptimizedVideoIframe = React.memo(({ src, title }: { src: string, title: string }) => (
  <div style={{position: 'relative', aspectRatio: '16/9'}}>
    <iframe
      loading="lazy"
      title={title}
      src={src}
      style={{ 
        border: 'none', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        height: '100%', 
        width: '100%',
        contain: 'layout style paint'
      }}
      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
      allowFullScreen
    />
  </div>
));

OptimizedVideoIframe.displayName = 'OptimizedVideoIframe';

const BanzhafVideoIframe = React.memo(() => (
  <div style={{ position: 'relative', aspectRatio: '16/9' }}>
    <iframe
      loading="lazy"
      title="Gumlet video player"
      src="https://play.gumlet.io/embed/6894636207ba3f8de70d04a7?background=false&autoplay=true&loop=true&disableControls=false"
      style={{
        border: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
      }}
      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
      allowFullScreen
    />
  </div>
));

BanzhafVideoIframe.displayName = 'BanzhafVideoIframe';

const OguzVideoIframe = React.memo(() => (
  <div style={{ position: 'relative', aspectRatio: '16/9' }}>
    <iframe
      loading="lazy"
      title="Gumlet video player"
      src="https://play.gumlet.io/embed/689467bea5cebfc625e267e5?background=false&autoplay=true&loop=true&disableControls=false"
      style={{
        border: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
      }}
      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
      allowFullScreen
    />
  </div>
));

OguzVideoIframe.displayName = 'OguzVideoIframe';

const AzimVideoIframe = React.memo(() => (
  <div style={{ position: 'relative', aspectRatio: '16/9' }}>
    <iframe
      loading="lazy"
      title="Gumlet video player"
      src="https://play.gumlet.io/embed/68946551a5cebfc625e23262?background=false&autoplay=true&loop=true&disableControls=false"
      style={{
        border: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
      }}
      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
      allowFullScreen
    />
  </div>
));

AzimVideoIframe.displayName = 'AzimVideoIframe';

const JensVideoIframe = React.memo(() => (
  <div style={{ position: 'relative', aspectRatio: '16/9' }}>
    <iframe
      loading="lazy"
      title="Gumlet video player"
      src="https://play.gumlet.io/embed/6894665e7afab80a3eeed8af?background=false&autoplay=true&loop=true&disableControls=false"
      style={{
        border: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
      }}
      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
      allowFullScreen
    />
  </div>
));

JensVideoIframe.displayName = 'JensVideoIframe';

export default function TestimonialVideo() {
  return (
    <section id="testimonials" className="relative bg-black py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <svg 
          className="blur-2xl md:blur-3xl filter opacity-30 md:opacity-40" 
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

      <div className="absolute top-1/4 left-1/4 w-24 md:w-32 h-24 md:h-32 rounded-full bg-white/5 blur-2xl md:blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 md:w-40 h-32 md:h-40 rounded-full bg-orange-500/10 blur-2xl md:blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white">
            Was unsere <span className="relative">
              <span className="relative z-10 text-[#ff5500]">Kunden</span>
              <span className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50"></span>
              <span className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
            </span> sagen
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mt-6 max-w-2xl mx-auto font-inter">
            Sehen Sie selbst, wie unsere Partner durch die Zusammenarbeit mit uns ihre Ziele erreichen und übertreffen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {videoTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className="relative rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,85,0,0.1)] hover:shadow-[0_16px_48px_0_rgba(255,85,0,0.15)] hover:scale-[1.02] hover:border-white/[0.12] transition-all duration-500 ease-out">
                {testimonial.name === 'Alexander Banzhaf' ? (
                  <BanzhafVideoIframe />
                ) : testimonial.name === 'Oguz Eper' ? (
                  <OguzVideoIframe />
                ) : testimonial.name === 'Azim Choudhury' ? (
                  <AzimVideoIframe />
                ) : testimonial.name === 'Jens Freyer' ? (
                  <JensVideoIframe />
                ) : (
                  <OptimizedVideoIframe 
                    src={testimonial.videoSrc}
                    title={`${testimonial.name} - ${testimonial.company} Testimonial`}
                  />
                )}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                  <div className="mt-3 flex items-center justify-center">
                    <div className="flex mr-4">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className="w-4 h-4 text-[#ff5500] fill-[#ff5500] mr-1"
                        />
                      ))}
                    </div>
                    <div className="flex items-center">
                      <span className="text-base font-semibold text-white">5</span>
                      <span className="text-xs text-gray-400 ml-1">/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
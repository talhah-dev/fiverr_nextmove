'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isNarrowViewport = window.innerWidth <= 1024;
      setIsMobile(isTouchDevice || isNarrowViewport);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      className={cn(
        "relative flex min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-100 md:scale-y-125 items-center justify-center isolate z-0">
        {/* Left cone */}
        <motion.div
          initial={{ opacity: 0.5, width: isMobile ? '4rem' : '8rem' }}
          whileInView={{ opacity: 1, width: isMobile ? '8rem' : '15rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-16 md:h-28 overflow-visible w-[8rem] md:w-[15rem] bg-gradient-conic from-[#ff5500] via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-black h-12 md:h-20 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-12 md:w-20 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right cone */}
        <motion.div
          initial={{ opacity: 0.5, width: isMobile ? '4rem' : '8rem' }}
          whileInView={{ opacity: 1, width: isMobile ? '8rem' : '15rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-16 md:h-28 w-[8rem] md:w-[15rem] bg-gradient-conic from-transparent via-transparent to-[#ff5500] [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-12 md:w-20 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-black h-12 md:h-20 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Central blur */}
        <div className="absolute top-1/2 h-16 md:h-24 w-full translate-y-6 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-16 md:h-24 w-full bg-transparent opacity-10 backdrop-blur-md"></div>

        {/* Central glow */}
        <div className="absolute inset-auto z-50 h-12 md:h-18 w-[8rem] md:w-[14rem] -translate-y-1/2 rounded-full bg-[#ff5500] opacity-50 blur-2xl md:blur-3xl"></div>

        <motion.div
          initial={{ width: isMobile ? '2rem' : '4rem' }}
          whileInView={{ width: isMobile ? '4rem' : '8rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute inset-auto z-30 h-12 md:h-18 w-16 md:w-32 -translate-y-[2rem] md:-translate-y-[3rem] rounded-full bg-[#ff8040] blur-xl md:blur-2xl"
        ></motion.div>

        {/* Lamp line */}
        <motion.div
          initial={{ width: isMobile ? '4rem' : '8rem' }}
          whileInView={{ width: isMobile ? '8rem' : '15rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute inset-auto z-50 h-0.5 w-[8rem] md:w-[15rem] -translate-y-[2.5rem] md:-translate-y-[3.5rem] bg-[#ff8040]"
        ></motion.div>

        {/* Top mask */}
        <div className="absolute inset-auto z-40 h-16 md:h-22 w-full -translate-y-[4rem] md:-translate-y-[6.25rem] bg-black"></div>
      </div>

      <div className="relative z-50 flex -translate-y-48 md:-translate-y-80 lg:-translate-y-96 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

// Keep original LampEffect for backwards compatibility
export const LampEffect = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Left cone */}
        <motion.div
          initial={{ opacity: 0.5, width: '8rem' }}
          whileInView={{ opacity: 1, width: '15rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-28 overflow-visible w-[15rem] bg-gradient-conic from-[#ff5500] via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-black h-20 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-20 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right cone */}
        <motion.div
          initial={{ opacity: 0.5, width: '8rem' }}
          whileInView={{ opacity: 1, width: '15rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-28 w-[15rem] bg-gradient-conic from-transparent via-transparent to-[#ff5500] [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-20 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-black h-20 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Central blur */}
        <div className="absolute top-1/2 h-24 w-full translate-y-6 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-24 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        
        {/* Central glow */}
        <div className="absolute inset-auto z-50 h-18 w-[14rem] -translate-y-1/2 rounded-full bg-[#ff5500] opacity-50 blur-3xl"></div>
        
        <motion.div
          initial={{ width: '4rem' }}
          whileInView={{ width: '8rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute inset-auto z-30 h-18 w-32 -translate-y-[3rem] rounded-full bg-[#ff8040] blur-2xl"
        ></motion.div>

        {/* Lamp line */}
        <motion.div
          initial={{ width: '8rem' }}
          whileInView={{ width: '15rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute inset-auto z-50 h-0.5 w-[15rem] -translate-y-[3.5rem] bg-[#ff8040]"
        ></motion.div>

        {/* Top mask */}
        <div className="absolute inset-auto z-40 h-22 w-full -translate-y-[6.25rem] bg-black"></div>
      </div>
    </div>
  );
};
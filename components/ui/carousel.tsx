"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  title: string;
  button: string;
  src: string;
  url?: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    // Check if device supports touch
    const checkTouchSupport = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchSupport();
    
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    // Disable mouse move effects on touch devices
    if (isTouchDevice) return;
    
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    // Only reset on non-touch devices
    if (!isTouchDevice) {
      xRef.current = 0;
      yRef.current = 0;
    }
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title, url } = slide;

  const handleVisitWebsite = (e: React.MouseEvent) => {
    e.stopPropagation(); // Verhindert dass der Slide-Click ausgelöst wird
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] sm:w-[75vmin] md:w-[80vmin] lg:w-[90vmin] xl:w-[95vmin] h-[45vmin] sm:h-[48vmin] md:h-[52vmin] lg:h-[58vmin] xl:h-[62vmin] mx-[2vmin] sm:mx-[3vmin] md:mx-[3.5vmin] lg:mx-[4vmin] xl:mx-[4.5vmin] z-10 cursor-pointer"
        onClick={() => handleSlideClick(index)}
        onMouseMove={!isTouchDevice ? handleMouseMove : undefined}
        onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
        style={{
          transform:
            current !== index
              ? "scale(0.95) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/90 to-black/90 rounded-[1%] overflow-hidden transition-all duration-150 ease-out border border-orange-500/20"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
            boxShadow: current === index 
              ? "0 8px 32px rgba(255, 85, 0, 0.2), 0 0 20px rgba(255, 85, 0, 0.1)" 
              : "0 4px 16px rgba(0, 0, 0, 0.3)"
          }}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          {current === index && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-1000" />
          )}
          
          {/* Orange accent border for active slide */}
          {current === index && (
            <div className="absolute inset-0 border-2 border-orange-500/40 rounded-[1%] pointer-events-none" />
          )}
        </div>

        <article
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Subtle Website Link */}
          <button
            onClick={handleVisitWebsite}
            className="group inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300"
          >
            <span className="text-white text-sm font-medium">Website besuchen</span>
            <IconArrowNarrowRight 
              className="text-white/70 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" 
              size={16} 
            />
          </button>
        </article>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-orange-500/20 hover:border-orange-500/40 active:scale-95 hover:scale-105 transition-all duration-300 group ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-white group-hover:text-orange-300 transition-all duration-300" size={14} />
    </button>
  );
};

interface CarouselProps {
  slides?: SlideData[];
  className?: string;
}

export function Carousel({ slides: customSlides, className }: CarouselProps) {
  // Standard-Slides mit den Websites
  const defaultSlides: SlideData[] = [
    {
      title: "Freyer Immobilien",
      button: "Website besuchen",
      src: "/Bild1.webp",
      url: "https://freyer.immo"
    },
    {
      title: "CD Immobilien",
      button: "Website besuchen",
      src: "/Bild2.webp",
      url: "https://cd-immo.de"
    },
    {
      title: "HMS Finance",
      button: "Website besuchen",
      src: "/Bild3.webp",
      url: "https://hmsfinance.de"
    },
    {
      title: "Kedro Immobilien",
      button: "Website besuchen",
      src: "/Bild1.webp",
      url: "https://kedro-immobilien.de"
    }
  ];

  // Verwende die übergebenen Slides oder die Standard-Slides
  const slides = customSlides || defaultSlides;
  
  const [current, setCurrent] = useState(2);
  
  // Touch/Swipe handling
  const touchStartRef = useRef({ x: 0, y: 0 });
  const touchEndRef = useRef({ x: 0, y: 0 });

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    
    const diffX = touchStartRef.current.x - touchEndRef.current.x;
    const diffY = touchStartRef.current.y - touchEndRef.current.y;
    const absDiffX = Math.abs(diffX);
    const absDiffY = Math.abs(diffY);
    
    // Only trigger swipe if horizontal movement is greater than vertical
    if (absDiffX > absDiffY && absDiffX > 50) {
      if (diffX > 0) {
        // Swiped left, go to next
        handleNextClick();
      } else {
        // Swiped right, go to previous
        handlePreviousClick();
      }
    }
  };

  const id = useId();

  const baseWrapper = "relative w-[70vmin] sm:w-[75vmin] md:w-[80vmin] lg:w-[90vmin] xl:w-[95vmin] h-[45vmin] sm:h-[48vmin] md:h-[52vmin] lg:h-[58vmin] xl:h-[62vmin] mx-auto";

  return (
    <div
      className={`${baseWrapper} ${className ?? ''}`}
      aria-labelledby={`carousel-heading-${id}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ul
        className="absolute flex mx-[-2vmin] sm:mx-[-3vmin] md:mx-[-3.5vmin] lg:mx-[-4vmin] xl:mx-[-4.5vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      {/* Navigation Controls */}
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)] sm:top-[calc(100%+1.5rem)] md:top-[calc(100%+2rem)] lg:top-[calc(100%+2.5rem)] xl:top-[calc(100%+3rem)] gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
        <CarouselControl
          type="previous"
          title="Vorherige Website"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Nächste Website"
          handleClick={handleNextClick}
        />
      </div>

    </div>
  );
}
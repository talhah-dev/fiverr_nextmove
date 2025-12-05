"use client";

import React, { useState, useEffect } from 'react';

interface Option {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
  link?: string;
}

interface InteractiveSelectorProps {
  options: Option[];
  headline: string;
  subheadline: string;
}

const InteractiveSelector: React.FC<InteractiveSelectorProps> = ({ options, headline, subheadline }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [options]);

  const renderOption = (option: Option, index: number) => {
    const content = (
        <div
        className={`
          option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
          ${activeIndex === index ? 'active' : ''}
        `}
        style={{
          backgroundImage: `url('${option.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backfaceVisibility: 'hidden',
          opacity: animatedOptions.includes(index) ? 1 : 0,
          transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
          minWidth: '60px',
          minHeight: '100px',
          margin: 0,
          borderRadius: '12px',
          border: `2px solid ${activeIndex === index ? '#ff5500' : 'rgba(255, 255, 255, 0.1)'}`,
          cursor: 'pointer',
          backgroundColor: '#18181b',
          boxShadow: activeIndex === index 
            ? '0 20px 60px rgba(255, 85, 0, 0.3)' 
            : '0 10px 30px rgba(0,0,0,0.30)',
          flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
          zIndex: activeIndex === index ? 10 : 1,
          position: 'relative',
          overflow: 'hidden',
          willChange: 'flex-grow, box-shadow, transform',
          transformStyle: 'preserve-3d',
        }}
        onClick={() => handleOptionClick(index)}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
          style={{
            backgroundImage: `url('${option.image}')`,
            transform: activeIndex === index ? 'scale(1.1)' : 'scale(1.2)',
          }}
        ></div>
        
        {/* Shadow effect */}
        <div 
          className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
          style={{
            bottom: '0',
            height: '50%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
            opacity: activeIndex === index ? 1 : 0.8
          }}
        ></div>
        
        {/* Label with icon and info */}
        <div className="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-4 gap-3 w-full">
          {option.icon && (
            <div className="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md shadow-lg border border-white/20 flex-shrink-0 flex-grow-0 transition-all duration-200">
              {option.icon}
            </div>
          )}
          <div className="info text-white whitespace-pre relative">
            <div 
              className="main font-bold text-lg transition-all duration-700 ease-in-out"
              style={{
                opacity: activeIndex === index ? 1 : 0,
                transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
              }}
            >
              {option.title}
            </div>
            <div 
              className="sub text-base text-gray-300 transition-all duration-700 ease-in-out"
              style={{
                opacity: activeIndex === index ? 1 : 0,
                transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
              }}
            >
              {option.description}
            </div>
          </div>
        </div>
      </div>
    );

    if (option.link) {
        return (
            <a key={index} href={option.link} target="_blank" rel="noopener noreferrer" className="contents">
                {content}
            </a>
        )
    }

    return <React.Fragment key={index}>{content}</React.Fragment>;
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black font-sans text-white py-20"> 
      {/* Header Section */}
      <div className="w-full max-w-4xl mx-auto text-center mb-16 px-6">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white animate-fadeInTop delay-300">
            {headline}
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl mt-8 max-w-2xl mx-auto animate-fadeInTop delay-600">
            {subheadline}
        </p>
      </div>

      {/* Options Container */}
      <div className="options flex w-full max-w-[900px] min-w-[600px] h-[400px] mx-0 items-stretch overflow-hidden relative">
        {options.map((option, index) => renderOption(option, index))}
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        .option {
          transition: flex 0.7s ease-in-out, box-shadow 0.7s ease-in-out, border-color 0.7s ease-in-out;
        }

        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector; 
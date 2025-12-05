import React from 'react';

interface CardContainerProps {
  accentText: string;
  title: string;
  description: string;
  imageUrl: string;
  accentColor: string;
  component?: React.ReactNode;
}

const CardContainer: React.FC<CardContainerProps> = ({
  accentText,
  title,
  description,
  imageUrl,
  accentColor,
  component
}) => {
  return (
    <div className="group relative">
      {/* Glasmorphism Card */}
      <div className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden
                     bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                     backdrop-blur-xl backdrop-saturate-150
                     border border-white/[0.08]
                     shadow-[0_8px_32px_0_rgba(255,85,0,0.1)]
                     hover:shadow-[0_16px_48px_0_rgba(255,85,0,0.15)]
                     hover:scale-[1.02] hover:border-white/[0.12]
                     transition-all duration-500 ease-out">
        
        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 h-full relative z-10">
          {/* Text Content Section */}
          <div className="p-4 xs:p-6 sm:p-8 md:p-10 lg:p-8 xl:p-10 2xl:p-12 relative order-1 lg:order-1">
            <div className="flex flex-col h-full">
              {/* Icon/Accent with glassmorphism background */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="relative">
                  <div className="w-10 sm:w-12 md:w-14 h-1 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#ff8040] group-hover:w-16 sm:group-hover:w-18 md:group-hover:w-20 transition-all duration-300"></div>
                  {/* Icon glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-orange-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Accent Text */}
              <span className="text-xs sm:text-sm uppercase mb-3 sm:mb-4 transition-all duration-500 group-hover:translate-x-1 text-[#ff5500] font-medium tracking-wider">
                {accentText}
              </span>
              
              {/* Title - Responsive Typography */}
              <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 
                           font-black mb-4 sm:mb-6 md:mb-8 uppercase 
                           transition-all duration-500 group-hover:translate-x-1 
                           text-white group-hover:text-white/90 
                           leading-tight sm:leading-tight md:leading-tight
                           break-words hyphens-auto">
                {title}
              </h3>
              
              {/* Description - Responsive Text */}
              <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-base 
                          text-white/70 leading-relaxed sm:leading-relaxed md:leading-relaxed 
                          group-hover:text-white/80 transition-colors duration-300
                          mb-4 sm:mb-6 lg:mb-0 lg:flex-1">
                {description}
              </p>
              
              {/* Bottom accent line */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/[0.06] group-hover:border-orange-500/20 transition-colors duration-300">
                <div className="w-8 sm:w-10 md:w-12 h-1 bg-gradient-to-r from-[#ff5500] to-[#ff8040] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          
          {/* Image/Component Section */}
          <div className="relative h-48 xs:h-56 sm:h-64 md:h-72 lg:h-full lg:min-h-[300px] xl:min-h-[350px] 2xl:min-h-[400px] 
                         w-full overflow-hidden order-2 lg:order-2">
            {component ? (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm">
                <div className="scale-75 xs:scale-85 sm:scale-95 md:scale-100 lg:scale-90 xl:scale-100">
                  {component}
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 to-transparent mix-blend-overlay transition-opacity duration-700 group-hover:opacity-70 z-10"></div>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0"></div>
                <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-3 md:p-4">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={imageUrl} 
                      alt={title}
                      className="max-h-[90%] sm:max-h-[95%] w-auto object-contain
                               transition-transform duration-700 group-hover:scale-110 
                               relative z-0"
                      style={{ 
                        maxWidth: '95%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Outer glow effect */}
      <div className="absolute -inset-1 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
    </div>
  );
};

export default CardContainer;
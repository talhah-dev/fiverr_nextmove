'use client';
import { Check, ArrowUpRight, MoreHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";
import CountUp from "./ui/CountUp";


const BusinessSection = () => {
  return (
    <section className="relative bg-black overflow-hidden pt-3 sm:pt-4 lg:pt-5 pb-10 sm:pb-12 lg:pb-16">
      {/* Enhanced Gradient Background Effect */}
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

      {/* Additional floating blur orbs */}
      <div className="absolute top-1/4 left-1/4 w-24 md:w-32 h-24 md:h-32 rounded-full bg-white/5 blur-2xl md:blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 md:w-40 h-32 md:h-40 rounded-full bg-orange-500/10 blur-2xl md:blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <Badge 
              variant="outline" 
              className="bg-white/10 border-[#ff5500]/30 text-[#ff5500] px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm"
            >
              Wachstumsprognose
            </Badge>
            
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                Ihr Wachstumspotenzial mit NextMove
              </h2>
              
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg">
                Sehen Sie, wie unsere maßgeschneiderten Strategien Ihren Umsatz steigern. 
                Wir verwandeln prädiktive Einblicke in reale Cashflows und optimieren 
                Ihre finanzielle Gesundheit nachhaltig.
              </p>
            </div>
            
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-[#ff5500] flex items-center justify-center">
                  <Check className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                </div>
                <span className="text-white text-base lg:text-lg">
                  Konstanter Strom qualifizierter Leads
                </span>
              </div>
              
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-[#ff5500] flex items-center justify-center">
                  <Check className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                </div>
                <span className="text-white text-base lg:text-lg">
                  Messbare Steigerung der Abschlussquote
                </span>
              </div>
            </div>
            
            <button
                onClick={() => window.open('https://lunacal.ai/team/nextmove-digital/meeting', '_blank')}
                style={{
                background: 'rgba(255, 85, 0, 0.1)',
                color: 'white',
                border: '1px solid rgba(255, 85, 0, 0.5)',
                borderRadius: '14px',
                fontWeight: '600',
                fontSize: '16px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 15px rgba(255, 85, 0, 0.4)',
                cursor: 'pointer',
                lineHeight: '1.2',
                }}
                className="relative px-6 py-3 lg:px-8 lg:py-4 btn-orange-glow"
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
                Profitiere jetzt von uns
            </button>
          </div>
          
          {/* Right Dashboard - kompakter */}
          <div className="relative">
            <div className="relative overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md backdrop-saturate-150 border border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,85,0,0.1)] rounded-3xl p-5 md:p-6">
              
              {/* Shine Effect */}
              <div className="shine-effect" />

              {/* Main Chart - kompakter */}
              <div className="relative z-10 mb-5">
                <h3 className="text-white text-lg lg:text-xl font-semibold mb-4 lg:mb-5">
                  ROI-Entwicklung mit NextMove
                </h3>
                
                <div className="relative h-48 lg:h-56 w-full">
                  {/* Span effect behind curve */}
                  <div className="absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-r from-transparent via-[#ff5500]/10 to-transparent blur-3xl"></div>

                  {/* Chart Grid Lines */}
                  <div className="absolute inset-0 grid grid-rows-4 opacity-20">
                    <div className="border-b border-gray-600"></div>
                    <div className="border-b border-gray-600"></div>
                    <div className="border-b border-gray-600"></div>
                    <div className="border-b border-gray-600"></div>
                  </div>
                  
                  {/* Y-Axis Labels */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-gray-400 text-xs lg:text-sm py-2">
                    <span>50%</span>
                    <span>40%</span>
                    <span>30%</span>
                    <span>20%</span>
                    <span>10%</span>
                  </div>
                  
                  {/* Chart Lines SVG */}
                  <svg className="absolute inset-0 w-full h-full ml-6 lg:ml-8" viewBox="0 0 400 200">
                    {/* Orange Line (ROI Growth) */}
                    <path
                      d="M 20 180 Q 80 170 120 140 T 200 80 T 280 60 T 360 40"
                      stroke="#ff5500"
                      strokeWidth="3"
                      fill="none"
                      className="drop-shadow-[0_0_10px_#ff5500]"
                    />
                    
                    {/* White Line (Baseline) */}
                    <path
                      d="M 20 180 Q 60 178 100 175 T 180 170 T 260 168 T 360 165"
                      stroke="rgba(255, 255, 255, 0.3)"
                      strokeWidth="3"
                      fill="none"
                    />
                    
                    {/* Orange Line Glow Effect */}
                    <path
                      d="M 20 180 Q 80 170 120 140 T 200 80 T 280 60 T 360 40"
                      stroke="#ff5500"
                      strokeWidth="6"
                      fill="none"
                      opacity="0.3"
                      className="blur-sm"
                    />
                  </svg>
                  
                  <div className="absolute bottom-0 right-6 lg:right-8 text-gray-400 text-xs lg:text-sm">
                    Letzte 6 Monate
                  </div>
                </div>
              </div>
              
              {/* Revenue Card - kompakter */}
              <Card className="relative z-10 bg-white/20 border-white/10 p-3 lg:p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3 lg:mb-4">
                  <h4 className="text-white/80 font-medium text-sm">
                    Umsatzsteigerung
                  </h4>
                  <MoreHorizontal className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
                </div>

                <div className="flex items-baseline justify-between">
                  <div className="relative">
                    <div className="flex items-baseline space-x-2">
                      <CountUp
                        to={31}
                        duration={3}
                        className="text-2xl lg:text-3xl font-bold text-white"
                      />
                      <span className="text-2xl lg:text-3xl font-bold text-white">%</span>
                    </div>
                    <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-md opacity-50"></span>
                    <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
                  </div>

                  <div className="flex items-center gap-1 text-sm">
                    <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4 text-[#ff5500]" />
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Floating Elements for Premium Feel - kompakter */}
            <div className="absolute -top-3 -right-3 w-6 h-6 lg:w-8 lg:h-8 bg-[#ff5500]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 lg:w-12 lg:h-12 bg-[#ff5500]/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .shine-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .shine-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 15%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 130, 64, 0.2), transparent);
          animation: shine 6s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
          transform: translateX(-150%);
          pointer-events: none;
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-150%) skewX(-25deg);
          }
          50% {
            transform: translateX(800%) skewX(-25deg);
          }
          100% {
            transform: translateX(800%) skewX(-25deg);
          }
        }
      `}</style>
    </section>
  );
};

export default BusinessSection; 
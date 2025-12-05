'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { name: 'Startseite', href: '#top' },
  { name: 'Unsere Lösung', href: '#solutions' },
  { name: 'Warum wir?', href: '#why-us' },
  { name: 'Referenzen', href: '#testimonials' },
  { name: 'Unser Prozess', href: '#timeline' },
];

export const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnWhiteSection, setIsOnWhiteSection] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const whiteSections = document.querySelectorAll('.bg-white');
      const headerHeight = 100;
      let overWhiteSection = false;
      
      whiteSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerHeight && rect.bottom >= 0) {
          overWhiteSection = true;
        }
      });
      
      setIsOnWhiteSection(overWhiteSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = () => {
    window.open('https://lunacal.ai/team/nextmove-digital/meeting', '_blank');
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    setMenuState(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[100] px-4 sm:px-6 lg:px-8">
      <div className={cn(
        'mx-auto mt-3 w-full lg:transition-none transition-all duration-300',
        isScrolled
          ? isOnWhiteSection
            ? 'max-w-5xl bg-black/90 backdrop-blur-xl rounded-2xl px-4 py-2 border-2 border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.5)]'
            : 'max-w-5xl bg-black/30 backdrop-blur-xl rounded-2xl px-4 py-2 glass-effect border-2 border-[#ff5500]/60 shadow-[0_0_25px_rgba(255,85,0,0.5)]'
          : 'max-w-6xl bg-transparent px-4 py-3'
      )}>
        <div className="flex items-center justify-between">
          {/* Logo - direkt in der Navigation */}
          <Link href="/" className="flex-shrink-0 inline-block">
            <Image
              src="/Logo-NMC-2.webp"
              alt="NextMove Logo"
              width={400}
              height={400}
              className={cn(
                'w-auto lg:transition-none transition-all duration-300',
                isScrolled
                  ? 'h-5 sm:h-6'
                  : 'h-6 sm:h-7 md:h-8'
              )}
              style={{
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))'
              }}
              priority
            />
          </Link>

          {/* Desktop Navigation - zentriert */}
          <nav className="hidden lg:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={cn(
                  "transition-all duration-200 relative group cursor-pointer",
                  isOnWhiteSection && isScrolled
                    ? "text-white hover:text-gray-200"
                    : "text-gray-200 hover:text-white"
                )}
              >
                <span className="text-sm font-medium tracking-wide" 
                      style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                  {item.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff8040] to-[#ff5500] transition-all duration-300 group-hover:w-full shadow-[0_0_5px_rgba(255,85,0,0.6)]"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex">
            <button
              onClick={handleCtaClick}
              className={cn(
                'relative overflow-hidden lg:transition-none transition-all duration-300 font-semibold uppercase tracking-wider hover:scale-105',
                isScrolled
                  ? 'px-3 py-2 text-xs rounded-lg'
                  : 'px-6 py-3 text-sm rounded-lg',
                isOnWhiteSection && isScrolled ? '' : 'btn-orange-glow'
              )}
              style={
                isOnWhiteSection && isScrolled
                  ? {
                      background: 'linear-gradient(135deg, rgba(255, 85, 0, 0.9) 0%, rgba(255, 85, 0, 1) 100%)',
                      color: 'white',
                      border: '2px solid rgba(255, 85, 0, 1)',
                      boxShadow: '0 0 25px rgba(255, 85, 0, 0.6), inset 0 0 15px rgba(255, 85, 0, 0.2)',
                      textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                    }
                  : {
                      background: 'linear-gradient(135deg, rgba(255, 85, 0, 0.2) 0%, rgba(255, 85, 0, 0.3) 100%)',
                      color: 'white',
                      border: '2px solid rgba(255, 85, 0, 0.6)',
                      boxShadow: '0 0 20px rgba(255, 85, 0, 0.4), inset 0 0 15px rgba(255, 85, 0, 0.1)',
                      backdropFilter: 'blur(10px)',
                      textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                    }
              }
            >
              <div 
                className="absolute inset-0 -z-10"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.7) 0%, rgba(255, 85, 0, 0.3) 40%, transparent 70%)',
                  filter: 'blur(10px)',
                  transform: 'scale(1.2)'
                }}
              />
              
              <span>
                {isScrolled ? 'Beratung' : 'Kostenlose Beratung'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuState(!menuState)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              isOnWhiteSection && isScrolled
                ? "text-white hover:text-gray-300"
                : "text-white hover:text-orange-400"
            )}
            style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))' }}
            aria-label={menuState ? 'Menü schließen' : 'Menü öffnen'}
          >
            {menuState ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuState && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 mx-4 z-[110] shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="text-gray-200 hover:text-white transition-colors duration-200 relative group cursor-pointer"
                >
                  <span className="text-base font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                    {item.name}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff8040] to-[#ff5500] transition-all duration-300 group-hover:w-full shadow-[0_0_5px_rgba(255,85,0,0.6)]"></span>
                </a>
              ))}
              
              {/* Mobile CTA Button */}
              <button 
                onClick={() => {
                  handleCtaClick();
                  setMenuState(false);
                }}
                className="relative overflow-hidden px-5 py-2.5 text-sm font-semibold uppercase tracking-wide rounded-lg mt-4 transition-all duration-300 btn-orange-glow hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 85, 0, 0.2) 0%, rgba(255, 85, 0, 0.3) 100%)',
                  color: 'white',
                  border: '2px solid rgba(255, 85, 0, 0.6)',
                  boxShadow: '0 0 20px rgba(255, 85, 0, 0.4), inset 0 0 15px rgba(255, 85, 0, 0.1)',
                  backdropFilter: 'blur(10px)',
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                }}
              >
                <div 
                  className="absolute inset-0 -z-10"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.7) 0%, rgba(255, 85, 0, 0.3) 40%, transparent 70%)',
                    filter: 'blur(10px)',
                    transform: 'scale(1.1)'
                  }}
                />
                
                <span>Kostenlose Beratung</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
'use client';

import { useEffect } from 'react';

export default function MobileScrollOptimizer() {
  useEffect(() => {
    // Nur auf mobilen Geräten ausführen
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTouch = 'ontouchstart' in window;
    
    if (isMobile || isTouch) {
      // CSS für optimiertes Touch-Scrolling
      const style = document.createElement('style');
      style.textContent = `
        /* Touch-Scrolling Optimierungen */
        * {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        body, html {
          overscroll-behavior: none;
          -webkit-overflow-scrolling: touch;
          scroll-behavior: auto !important;
        }

        /* Deaktiviere komplexe Animationen bei Touch-Scrolling */
        @media (max-width: 768px) {
          .framer-motion-component {
            animation: none !important;
            transition: none !important;
          }
          
          [data-framer-motion] {
            animation: none !important;
            transition: none !important;
          }

          /* Vereinfachte Hover-Effekte */
          .group:hover {
            transform: none !important;
            scale: 1 !important;
          }

          /* Reduzierte Komplexität von Blur-Effekten */
          .backdrop-blur-md {
            backdrop-filter: none !important;
            background: rgba(0, 0, 0, 0.3) !important;
          }

          .blur-3xl, .blur-2xl, .blur-xl {
            filter: none !important;
            opacity: 0.1 !important;
          }
        }
      `;
      document.head.appendChild(style);

      // Scroll-Performance optimieren
      let ticking = false;

      const optimizeScrolling = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Entferne will-change während des Scrollens
            document.body.style.willChange = 'auto';
            ticking = false;
          });
          ticking = true;
        }
      };

      // Passive Event Listener für bessere Performance
      document.addEventListener('touchstart', optimizeScrolling, { passive: true });
      document.addEventListener('touchmove', optimizeScrolling, { passive: true });
      document.addEventListener('scroll', optimizeScrolling, { passive: true });

      // Cleanup
      return () => {
        document.removeEventListener('touchstart', optimizeScrolling);
        document.removeEventListener('touchmove', optimizeScrolling);
        document.removeEventListener('scroll', optimizeScrolling);
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    }
  }, []);

  return null;
}
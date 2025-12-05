'use client';

import React, { memo, useEffect } from 'react';

const VideoBackground = memo(() => {
  useEffect(() => {
    console.log('✅ VideoBackground Component mounted');
    console.log('⏳ Loading Vimeo video: 1129496452');

    // iOS Safari Fix für Viewport-Höhe
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      // Auch für width setzen für bessere iOS Kontrolle
      const vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty('--vw', `${vw}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);

    // Initial check nach kurzer Verzögerung für iOS Safari
    setTimeout(setViewportHeight, 100);

    return () => {
      window.removeEventListener('resize', setViewportHeight);
      window.removeEventListener('orientationchange', setViewportHeight);
    };
  }, []);

  return (
    <div
      className="video-backdrop bg-black"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        pointerEvents: 'none',
        backgroundColor: '#000000',
        zIndex: 0
      }}
    >
      {/* Video Wrapper für iOS Safari Fix */}
      <div
        className="vimeo-wrapper bg-black"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/1129496452?background=1&autoplay=1&muted=1&loop=1&playsinline=1&autopause=0&quality=auto"
          className="vimeo-iframe bg-black"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '100vh',
            minWidth: '100vw',
            minHeight: '100vh',
            border: 0,
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)'
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          // webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          title="hamburg-harbor-drone-2025-08-28-13-26-29-utc"
          onLoad={() => console.log('✅ Vimeo iframe loaded - background mode active')}
          onError={(e) => console.error('❌ Vimeo iframe error:', e)}
        />
      </div>

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%),
            linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.85) 100%)
          `,
          pointerEvents: 'none',
          zIndex: 2
        }}
      />

      {/* Optimierte Styles für Safari Mobile und Desktop */}
      <style>{`
        /* CSS-Variablen Fallback */
        :root {
          --vh: 1vh;
          --vw: 1vw;
        }

        /* Basis-Styling für alle Geräte */
        .video-backdrop {
          position: fixed !important;
          inset: 0 !important;
        }

        .vimeo-wrapper {
          position: absolute !important;
          inset: 0 !important;
          container-type: size;
        }

        .vimeo-iframe {
          object-fit: cover;
          position: absolute !important;
        }

        /* Desktop und große Bildschirme */
        @media screen and (min-width: 768px) {
          .vimeo-iframe {
            width: 100vw !important;
            height: 56.25vw !important; /* 16:9 Ratio */
            min-height: 100vh !important;
            min-width: 177.78vh !important; /* 16:9 Ratio */
          }
        }

        /* Mobile Geräte allgemein */
        @media screen and (max-width: 767px) {
          .vimeo-iframe {
            width: 100vw !important;
            height: 177.78vw !important; /* 16:9 basierend auf Breite für Portrait */
            min-height: 100vh !important;
            transform: translate(-50%, -50%) !important;
          }
        }

        /* Mobile Portrait spezifisch */
        @media screen and (max-width: 767px) and (orientation: portrait) {
          .vimeo-iframe {
            width: 100vw !important;
            height: 177.78vw !important; /* 16:9 ratio basierend auf viewport width */
            min-height: 100vh !important;
            transform: translate(-50%, -50%) scale(1.15) !important;
          }
        }

        /* iOS Safari spezifische Optimierung */
        @supports (-webkit-touch-callout: none) {
          /* iOS Geräte */
          .video-backdrop {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            height: calc(var(--vh, 1vh) * 100) !important;
          }

          .vimeo-wrapper {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            height: calc(var(--vh, 1vh) * 100) !important;
          }

          .vimeo-iframe {
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            width: 100vw !important;
            height: 177.78vw !important;
            min-height: calc(var(--vh, 1vh) * 100) !important;
            min-width: 100vw !important;
            transform: translate(-50%, -50%) scale(1.2) !important;
            -webkit-transform: translate(-50%, -50%) scale(1.2) !important;
            transform-origin: center center !important;
          }
        }

        /* iPhone Portrait Mode */
        @media screen and (max-width: 430px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
          .vimeo-iframe {
            width: 100vw !important;
            height: 177.78vw !important;
            min-height: calc(var(--vh, 1vh) * 100) !important;
            transform: translate(-50%, -50%) scale(1.25) !important;
            -webkit-transform: translate(-50%, -50%) scale(1.25) !important;
          }
        }

        /* iPhone Landscape Mode */
        @media screen and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
          .vimeo-iframe {
            width: calc(var(--vw, 1vw) * 100) !important;
            height: calc(var(--vh, 1vh) * 100) !important;
            transform: scale(1.2) !important;
            -webkit-transform: scale(1.2) !important;
          }
        }

        /* iPad spezifische Anpassungen */
        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
          .vimeo-iframe {
            width: 100vw !important;
            height: 56.25vw !important;
            min-height: 100vh !important;
            transform: translate(-50%, -50%) scale(1.1) !important;
            -webkit-transform: translate(-50%, -50%) scale(1.1) !important;
          }
        }

        /* iPad Portrait */
        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
          .vimeo-iframe {
            width: 100vw !important;
            height: 177.78vw !important;
            min-height: 100vh !important;
            transform: translate(-50%, -50%) scale(1.15) !important;
            -webkit-transform: translate(-50%, -50%) scale(1.15) !important;
          }
        }
      `}</style>
    </div>
  );
});

VideoBackground.displayName = 'VideoBackground';

export default VideoBackground;
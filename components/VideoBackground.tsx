'use client';

import React, { memo } from 'react';

const VideoBackground = memo(() => {
  return (
    <>
      {/* Kritische CSS für sofortige korrekte Darstellung */}
      <style jsx global>{`
        .video-bg-container {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          overflow: hidden !important;
          pointer-events: none !important;
          z-index: 0 !important;
        }

        .video-bg-iframe {
          position: absolute !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          pointer-events: none !important;
          border: none !important;
          z-index: 1 !important;
          /* Default für 16:9 Desktop */
          width: 100vw !important;
          height: 56.25vw !important;
          min-height: 100vh !important;
        }

        @media (max-aspect-ratio: 16/9) {
          .video-bg-iframe {
            width: 177.78vh !important;
            height: 100vh !important;
            min-height: auto !important;
          }
        }

        .video-bg-overlay {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          z-index: 2 !important;
          background: radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%),
                      linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.9) 100%) !important;
        }
      `}</style>

      <div className="video-bg-container">
        {/* Schwarzer Fallback-Hintergrund */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#000',
            zIndex: 0,
          }}
        />

        {/* Video Iframe */}
        <iframe
          src="https://player.vimeo.com/video/1129496452?background=1&autoplay=1&muted=1&loop=1&playsinline=1&autopause=0&quality=auto&dnt=1"
          allow="autoplay; fullscreen; picture-in-picture"
          title="background-video"
          className="video-bg-iframe"
        />

        {/* Overlay */}
        <div className="video-bg-overlay" />
      </div>
    </>
  );
});

VideoBackground.displayName = 'VideoBackground';

export default VideoBackground;

'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface OptimizedVideoProps {
  gifSrc: string;
  webpSrc?: string;
  mp4Src?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  gifSrc,
  webpSrc,
  mp4Src,
  alt,
  width,
  height,
  className = ""
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fallback zu GIF wenn moderne Formate nicht verfügbar
  const handleError = () => {
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Zeige MP4 Video wenn verfügbar, sonst WebP, sonst GIF
  if (mp4Src && !hasError) {
    return (
      <div className={`relative ${className}`}>
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-800/20 rounded-3xl animate-pulse flex items-center justify-center">
            <div className="text-white/60">Loading...</div>
          </div>
        )}
        <video
          autoPlay
          muted
          loop
          playsInline
          width={width}
          height={height}
          className="rounded-3xl shadow-2xl w-full h-auto"
          onLoadedData={handleLoad}
          onError={handleError}
        >
          <source src={mp4Src} type="video/mp4" />
          {webpSrc && <source src={webpSrc} type="image/webp" />}
          {/* Fallback zu Image component für GIF */}
          <Image
            src={gifSrc}
            alt={alt}
            width={width}
            height={height}
            className="rounded-3xl shadow-2xl w-full h-auto"
            loading="lazy"
            unoptimized
          />
        </video>
      </div>
    );
  }

  // Fallback zu Next.js Image für GIF/WebP
  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800/20 rounded-3xl animate-pulse flex items-center justify-center">
          <div className="text-white/60">Loading...</div>
        </div>
      )}
      <Image
        src={hasError ? gifSrc : (webpSrc || gifSrc)}
        alt={alt}
        width={width}
        height={height}
        className="rounded-3xl shadow-2xl w-full h-auto"
        loading="lazy"
        unoptimized={hasError}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default OptimizedVideo;
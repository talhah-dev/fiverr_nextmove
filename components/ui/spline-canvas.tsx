'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SplineCanvasProps {
  scene: string;
  className?: string;
}

const SplineCanvas: React.FC<SplineCanvasProps> = ({ scene, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Canvas-Größe an Container anpassen
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Einfache Animation als Fallback
    let animationFrame: number;
    let rotation = 0;
    
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Canvas löschen
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Hintergrund
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Mittelpunkt berechnen
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Größe basierend auf Canvas-Dimensionen
      const size = Math.min(canvas.width, canvas.height) * 0.3;
      
      // Rotation aktualisieren
      rotation += 0.01;
      
      // 3D-ähnliches Objekt zeichnen
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      
      // Würfel zeichnen
      ctx.beginPath();
      ctx.moveTo(-size/2, -size/2);
      ctx.lineTo(size/2, -size/2);
      ctx.lineTo(size/2, size/2);
      ctx.lineTo(-size/2, size/2);
      ctx.closePath();
      
      // Farbverlauf
      const gradient = ctx.createLinearGradient(-size/2, -size/2, size/2, size/2);
      gradient.addColorStop(0, '#ff8040');
      gradient.addColorStop(1, '#ff5500');
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // 3D-Effekt
      ctx.beginPath();
      ctx.moveTo(size/2, -size/2);
      ctx.lineTo(size/2 + size/4, -size/2 + size/4);
      ctx.lineTo(size/2 + size/4, size/2 + size/4);
      ctx.lineTo(size/2, size/2);
      ctx.closePath();
      
      ctx.fillStyle = 'rgba(255, 85, 0, 0.7)';
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(-size/2, size/2);
      ctx.lineTo(-size/2 + size/4, size/2 + size/4);
      ctx.lineTo(size/2 + size/4, size/2 + size/4);
      ctx.lineTo(size/2, size/2);
      ctx.closePath();
      
      ctx.fillStyle = 'rgba(255, 85, 0, 0.5)';
      ctx.fill();
      
      ctx.restore();
      
      // Animation fortsetzen
      animationFrame = requestAnimationFrame(animate);
      
      // Loading-Status aktualisieren
      if (isLoading) {
        setIsLoading(false);
      }
    };
    
    // Animation starten
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, [isLoading]);

  return (
    <div className={`relative ${className || 'w-full h-full'}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-[#ff5500] border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-white text-sm">3D-Content wird geladen...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <p className="text-red-500">{error}</p>
            <p className="text-white mt-2">Bitte versuche es später erneut.</p>
          </div>
        </div>
      )}
      
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};

export default SplineCanvas; 
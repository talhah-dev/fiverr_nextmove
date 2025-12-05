"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Cpu, Lock, Sparkles, TrendingUp } from "lucide-react";

const icons: { [key: string]: React.ElementType } = {
  Zap,
  Cpu,
  Lock,
  Sparkles,
  TrendingUp,
};

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface GradientCardProps {
  feature: Feature;
}

export const GradientCard: React.FC<GradientCardProps> = ({ feature }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setMousePosition({ x, y });
      const rotateX = -(y / rect.height) * 8;
      const rotateY = (x / rect.width) * 8;
      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const IconComponent = icons[feature.icon];

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full overflow-hidden rounded-[32px]"
      style={{
        height: "380px",
        transformStyle: "preserve-3d",
        backgroundColor: "#0e131f",
        boxShadow:
          "0 -10px 100px 10px rgba(255, 85, 0, 0.15), 0 0 10px 0 rgba(0, 0, 0, 0.5)",
        perspective: 1000,
      }}
      initial={{ y: 0 }}
      animate={{
        y: isHovered ? -5 : 0,
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* glossy overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-35"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(2px)",
        }}
        animate={{
          opacity: isHovered ? 0.7 : 0.5,
          rotateX: -rotation.x * 0.2,
          rotateY: -rotation.y * 0.2,
          z: 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* dark base */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, #000000 0%, #000000 70%)",
        }}
        animate={{ z: -1 }}
      />

      {/* noise layers */}
      <motion.div
        className="absolute inset-0 z-10 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        animate={{ z: -0.5 }}
      />
      <motion.div
        className="absolute inset-0 z-11 pointer-events-none opacity-10 mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='smudge'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.01' numOctaves='3' seed='5' stitchTiles='stitch'/%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23smudge)'/%3E%3C/svg%3E")`,
          backdropFilter: "blur(1px)",
        }}
        animate={{ z: -0.25 }}
      />

      {/* orange glow – raised a bit higher */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 h-3/4"
        style={{
          background: `
            radial-gradient(ellipse at bottom right, rgba(255, 85, 0, 0.7) -10%, rgba(255, 85, 0, 0) 70%),
            radial-gradient(ellipse at bottom left, rgba(255, 128, 64, 0.7) -10%, rgba(255, 128, 64, 0) 70%)
          `,
          filter: "blur(40px)",
        }}
        animate={{
          opacity: isHovered ? 0.9 : 0.8,
          y: isHovered ? rotation.x * 0.5 : 0,
          z: 0,
        }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-21 h-3/4"
        style={{
          background: `
            radial-gradient(circle at bottom center, rgba(255, 85, 0, 0.7) -20%, rgba(255, 85, 0, 0) 60%)
          `,
          filter: "blur(45px)",
        }}
        animate={{
          opacity: isHovered ? 0.85 : 0.75,
          y: isHovered ? `calc(8% + ${rotation.x * 0.3}px)` : "8%",
          z: 0,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* bottom highlight line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-25 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.05) 100%)",
        }}
        animate={{
          boxShadow: isHovered
            ? "0 0 20px 4px rgba(255, 85, 0, 0.9), 0 0 30px 6px rgba(255, 85, 0, 0.7), 0 0 40px 8px rgba(255, 128, 64, 0.5)"
            : "0 0 15px 3px rgba(255, 85, 0, 0.8), 0 0 25px 5px rgba(255, 85, 0, 0.6), 0 0 35px 7px rgba(255, 128, 64, 0.4)",
          opacity: isHovered ? 1 : 0.9,
          z: 0.5,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* CONTENT */}
      <motion.div
        className="relative z-40 flex h-full flex-col p-6"
        animate={{ z: 2 }}
      >
        {/* top icon */}
        <motion.div
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-full"
          style={{
            background:
              "linear-gradient(225deg, #171c2c 0%, #121624 100%)",
            position: "relative",
            overflow: "hidden",
          }}
          initial={{ filter: "blur(3px)", opacity: 0.7 }}
          animate={{
            filter: "blur(0px)",
            opacity: 1,
            boxShadow: isHovered
              ? "0 8px 16px -2px rgba(0, 0, 0, 0.3), 0 4px 8px -1px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.15), inset -2px -2px 5px rgba(0, 0, 0, 0.7)"
              : "0 6px 12px -2px rgba(0, 0, 0, 0.25), 0 3px 6px -1px rgba(0, 0, 0, 0.15), inset 1px 1px 3px rgba(255, 255, 255, 0.12), inset -2px -2px 4px rgba(0, 0, 0, 0.5)",
            z: isHovered ? 10 : 5,
            y: isHovered ? -2 : 0,
            rotateX: isHovered ? -rotation.x * 0.5 : 0,
            rotateY: isHovered ? -rotation.y * 0.5 : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="absolute top-0 left-0 h-2/3 w-2/3 opacity-40"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(255, 255, 255, 0.5), transparent 80%)",
              pointerEvents: "none",
              filter: "blur(10px)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 h-1/2 w-full opacity-50"
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)",
              pointerEvents: "none",
              backdropFilter: "blur(3px)",
            }}
          />
          <div className="relative z-10 flex h-full w-full items-center justify-center text-orange-400">
            <IconComponent size={24} />
          </div>
        </motion.div>

        {/* title + description */}
        <motion.div
          className="flex flex-grow flex-col"
          animate={{
            z: isHovered ? 5 : 2,
            rotateX: isHovered ? -rotation.x * 0.3 : 0,
            rotateY: isHovered ? -rotation.y * 0.3 : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <motion.h3
              className="mb-2 text-xl font-medium text-white"
              style={{ letterSpacing: "-0.01em", lineHeight: 1.2 }}
            >
              {feature.title}
            </motion.h3>
            <motion.p
              className="text-sm text-gray-300"
              style={{ lineHeight: 1.5, fontWeight: 350 }}
            >
              {feature.description}
            </motion.p>
          </div>

          {/* NEW bottom row to fill empty space */}
          <motion.div
            className="mt-auto flex items-center justify-between pt-6"
            animate={{
              opacity: 1,
              y: isHovered ? -2 : 0,
            }}
            transition={{ duration: 0.35 }}
          >
            {/* left: glowing status text */}
            <div className="flex items-center gap-2 text-xs text-orange-200/90">
              <span className="inline-flex h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(255,140,64,0.9)]" />
              <span className="truncate">
                Immer aktiv für Ihre Ergebnisse
              </span>
            </div>

            {/* right: small circular accent icon */}
            <motion.div
              className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-500/40 bg-black/40 text-orange-400 shadow-[0_0_18px_rgba(255,120,64,0.7)]"
              animate={{
                scale: isHovered ? 1.05 : 1,
                y: isHovered ? -1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <TrendingUp size={18} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

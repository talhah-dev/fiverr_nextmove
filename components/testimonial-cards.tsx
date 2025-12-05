"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { Star } from "lucide-react";
import Image from 'next/image';

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: "front" | "second" | "third" | "fourth" | "fifth";
  id: number;
  author: string;
  avatar: string;
  role: string;
}

export function TestimonialCard({ handleShuffle, testimonial, position, id, author, avatar, role }: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  const variants = {
    front:  { x: "0%",   rotate: "-4deg", scale: 1,    zIndex: 5 },
    second: { x: "12%",  rotate: "-2deg", scale: 0.96, zIndex: 4 },
    third:  { x: "24%",  rotate: "0deg",  scale: 0.92, zIndex: 3 },
    fourth: { x: "36%",  rotate: "2deg",  scale: 0.88, zIndex: 2 },
    fifth:  { x: "48%",  rotate: "4deg",  scale: 0.84, zIndex: 1 },
  };

  const animationProps = variants[position];

  return (
    <motion.div
      style={{
        zIndex: animationProps.zIndex,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}
      animate={animationProps}
      drag={isFront}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        let clientX = 0;
        if ('touches' in e && e.touches.length > 0) {
          clientX = e.touches[0].clientX;
        } else if ('clientX' in e) {
          clientX = e.clientX;
        }
        dragRef.current = clientX;
      }}
      onDragEnd={(e) => {
        let clientX = 0;
        if ('changedTouches' in e && e.changedTouches.length > 0) {
          clientX = e.changedTouches[0].clientX;
        } else if ('clientX' in e) {
          clientX = e.clientX;
        }
        if (dragRef.current - clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[340px] w-[280px] select-none place-content-center space-y-4 rounded-xl ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <Image
        src={avatar}
        alt={`Avatar of ${author}`}
        width={72}
        height={72}
        className="pointer-events-none mx-auto h-18 w-18 rounded-full border-2 border-orange-500/60 bg-white object-cover shadow-lg"
      />
      <div className="text-center px-4">
        <span className="block text-sm font-bold text-orange-500" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{author}</span>
        <span className="block text-xs text-white/80">{role}</span>
      </div>
      <span className="text-center text-sm italic text-white/90 px-4 line-clamp-3">"{testimonial}"</span>
      <div className="flex justify-center items-center">
        <div className="flex mr-4">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className="w-5 h-5 text-[#ff5500] fill-[#ff5500] mr-1"
            />
          ))}
        </div>
        <div className="flex items-center">
          <span className="text-lg font-semibold text-white">5</span>
          <span className="text-sm text-gray-400 ml-1">/5</span>
        </div>
      </div>
    </motion.div>
  );
} 
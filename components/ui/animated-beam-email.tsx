'use client';

import { cn } from '@/lib/utils';
import React, { useRef } from 'react';
import { AnimatedBeam, Circle } from '@/components/ui/animated-beam';
import { RiMailLine, RiMailSendLine, RiRobot2Fill, RiUserHeartLine, RiBarChartBoxLine } from 'react-icons/ri';

export default function EmailBeamAnimation({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const analyticsRef = useRef<HTMLDivElement>(null);
  const sendRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        'relative flex w-full max-w-[500px] mx-auto items-center justify-center overflow-hidden rounded-lg bg-black/20 p-10',
        className
      )}
      ref={containerRef}
    >
      <div className='flex h-full w-full flex-row items-stretch justify-between gap-10'>
        {/* Linke Spalte */}
        <div className='flex flex-col justify-center gap-4'>
          <Circle ref={emailRef} className="border-blue-500">
            <RiMailLine className="w-6 h-6 text-blue-500" />
          </Circle>
          <Circle ref={aiRef} className="border-[#ff5500]">
            <RiRobot2Fill className="w-6 h-6 text-[#ff5500]" />
          </Circle>
        </div>

        {/* Mittlere Spalte */}
        <div className='flex flex-col justify-center gap-4'>
          <Circle ref={sendRef} className='h-16 w-16 bg-blue-500 border-blue-500'>
            <RiMailSendLine className="w-8 h-8 text-white" />
          </Circle>
        </div>

        {/* Rechte Spalte */}
        <div className='flex flex-col justify-center gap-4'>
          <Circle ref={userRef} className="border-purple-500">
            <RiUserHeartLine className="w-6 h-6 text-purple-500" />
          </Circle>
          <Circle ref={analyticsRef} className="border-green-500">
            <RiBarChartBoxLine className="w-6 h-6 text-green-500" />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={emailRef}
        toRef={sendRef}
        duration={3}
        gradientStartColor="#3b82f6"
        gradientStopColor="#3b82f6"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={aiRef}
        toRef={sendRef}
        duration={3}
        gradientStartColor="#ff5500"
        gradientStopColor="#ff8040"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={sendRef}
        toRef={userRef}
        duration={3}
        gradientStartColor="#3b82f6"
        gradientStopColor="#a855f7"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={sendRef}
        toRef={analyticsRef}
        duration={3}
        gradientStartColor="#3b82f6"
        gradientStopColor="#22c55e"
      />
    </div>
  );
} 
'use client';

import { cn } from '@/lib/utils';
import React, { useRef } from 'react';
import { AnimatedBeam, Circle } from './animated-beam';
import { RiLinkedinFill, RiMessage2Fill, RiRobot2Fill, RiUserSmileLine, RiCheckboxCircleFill } from 'react-icons/ri';

const LinkedInBeamAnimation = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const linkedInRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        'relative flex w-full max-w-[500px] mx-auto items-center justify-center overflow-hidden rounded-lg bg-black/20 p-10',
        className
      )}
      ref={containerRef}
    >
      <div className='flex h-full w-full flex-row items-stretch justify-between gap-10'>
        <div className='flex flex-col justify-center gap-4'>
          <Circle ref={messageRef} className="border-[#0a66c2]">
            <RiMessage2Fill className="w-6 h-6 text-[#0a66c2]" />
          </Circle>
          <Circle ref={aiRef} className="border-[#ff5500]">
            <RiRobot2Fill className="w-6 h-6 text-[#ff5500]" />
          </Circle>
        </div>
        <div className='flex flex-col justify-center'>
          <Circle ref={linkedInRef} className='h-16 w-16 bg-[#0a66c2] border-[#0a66c2]'>
            <RiLinkedinFill className="w-8 h-8 text-white" />
          </Circle>
        </div>
        <div className='flex flex-col justify-center gap-4'>
          <Circle ref={userRef} className="border-white">
            <RiUserSmileLine className="w-6 h-6 text-white" />
          </Circle>
          <Circle ref={successRef} className="border-green-500">
            <RiCheckboxCircleFill className="w-6 h-6 text-green-500" />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={messageRef}
        toRef={linkedInRef}
        duration={3}
        gradientStartColor="#0a66c2"
        gradientStopColor="#0a66c2"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={aiRef}
        toRef={linkedInRef}
        duration={3}
        gradientStartColor="#ff5500"
        gradientStopColor="#ff8040"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={linkedInRef}
        toRef={userRef}
        duration={3}
        gradientStartColor="#0a66c2"
        gradientStopColor="#ffffff"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={linkedInRef}
        toRef={successRef}
        duration={3}
        gradientStartColor="#0a66c2"
        gradientStopColor="#22c55e"
      />
    </div>
  );
};

export default LinkedInBeamAnimation; 
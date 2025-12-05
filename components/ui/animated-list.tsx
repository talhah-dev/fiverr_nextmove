"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const AnimatedList = ({ children, className, speed = 20 }: Props) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current || !itemRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem);
      }
    });

    const scroll = scrollerRef.current;
    const itemHeight = itemRef.current.offsetHeight;
    let scrollPos = 0;

    const animate = () => {
      if (!scroll) return;
      scrollPos += 1;
      scroll.style.transform = `translateY(-${scrollPos}px)`;

      if (scrollPos >= itemHeight) {
        scrollPos = 0;
        scroll.style.transform = 'translateY(0)';
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0,black_10%,black_90%,transparent_100%)]",
        className
      )}
    >
      <div ref={scrollerRef} className="flex flex-col gap-2">
        {React.Children.map(children, (child, index) => (
          <div ref={index === 0 ? itemRef : null} key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}; 
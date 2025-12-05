import { cn } from "@/lib/utils";
import React from "react";

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  
  return (
    <div className="absolute inset-0">
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <circle
            className="stroke-white/20 stroke-[1px]"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={{
              "--duration": `${calculatedDuration}s`,
              "--radius": `${radius}px`,
              "--angle": angle,
            } as React.CSSProperties}
            className={cn(
              "absolute left-1/2 top-1/2",
              "transform-gpu animate-orbit",
              { "[animation-direction:reverse]": reverse },
              className
            )}
          >
            <div 
              className="flex items-center justify-center"
              style={{
                width: `${iconSize}px`,
                height: `${iconSize}px`,
              }}
            >
              {child}
            </div>
          </div>
        );
      })}
    </div>
  );
}

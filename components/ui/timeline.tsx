"use client";

import React, { createContext, useContext } from "react";
import { cn } from "@/lib/utils";

interface TimelineContextValue {
  defaultValue?: number;
}

const TimelineContext = createContext<TimelineContextValue>({});

const useTimeline = () => {
  const context = useContext(TimelineContext);
  return context;
};

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: number;
  orientation?: "horizontal" | "vertical";
}

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, defaultValue, orientation = "vertical", children, ...props }, ref) => {
    return (
      <TimelineContext.Provider value={{ defaultValue }}>
        <div
          ref={ref}
          className={cn(
            "relative",
            orientation === "vertical" ? "space-y-8" : "flex space-x-8",
            "group/timeline",
            className
          )}
          data-orientation={orientation}
          {...props}
        >
          {children}
        </div>
      </TimelineContext.Provider>
    );
  }
);
Timeline.displayName = "Timeline";

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number;
}

export const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, step, children, ...props }, ref) => {
    const { defaultValue } = useTimeline();
    const isActive = defaultValue ? step <= defaultValue : false;
    const isPast = defaultValue ? step < defaultValue : false;
    const isCurrent = defaultValue ? step === defaultValue : false;

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex items-start",
          "group-data-[orientation=horizontal]/timeline:flex-col",
          "group-data-[orientation=horizontal]/timeline:items-center",
          className
        )}
        data-step={step}
        data-active={isActive}
        data-current={isCurrent}
        data-past={isPast}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TimelineItem.displayName = "TimelineItem";

export const TimelineHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex items-center gap-4",
      "group-data-[orientation=horizontal]/timeline:flex-col",
      "group-data-[orientation=horizontal]/timeline:gap-2",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
TimelineHeader.displayName = "TimelineHeader";

export const TimelineSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute left-6 top-12 h-full w-0.5",
      "bg-gradient-to-b from-orange-500/20 via-orange-500/40 to-transparent",
      "group-data-[orientation=horizontal]/timeline:left-auto",
      "group-data-[orientation=horizontal]/timeline:top-6",
      "group-data-[orientation=horizontal]/timeline:h-0.5",
      "group-data-[orientation=horizontal]/timeline:w-full",
      "group-data-[orientation=horizontal]/timeline:bg-gradient-to-r",
      className
    )}
    data-slot="timeline-separator"
    {...props}
  />
));
TimelineSeparator.displayName = "TimelineSeparator";

export const TimelineIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative z-10 flex h-12 w-12 items-center justify-center rounded-full",
      "bg-black border-2 border-orange-500",
      "shadow-lg shadow-orange-500/20",
      "group-data-[orientation=horizontal]/timeline:h-8",
      "group-data-[orientation=horizontal]/timeline:w-8",
      className
    )}
    data-slot="timeline-indicator"
    {...props}
  >
    <div className="h-3 w-3 rounded-full bg-orange-500" />
  </div>
));
TimelineIndicator.displayName = "TimelineIndicator";

export const TimelineDate = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm text-orange-500 font-medium tracking-wide",
      "group-data-[orientation=horizontal]/timeline:text-xs",
      className
    )}
    {...props}
  />
));
TimelineDate.displayName = "TimelineDate";

export const TimelineTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold text-white",
      "group-data-[orientation=horizontal]/timeline:text-base",
      className
    )}
    {...props}
  />
));
TimelineTitle.displayName = "TimelineTitle";

export const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative ml-16 mt-4",
      "backdrop-blur-xl bg-white/[0.02] border border-white/[0.08]",
      "rounded-2xl p-6 shadow-2xl",
      "group-data-[orientation=horizontal]/timeline:ml-0",
      "group-data-[orientation=horizontal]/timeline:mt-6",
      className
    )}
    {...props}
  >
    {/* Glassmorphism inner glow */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none"></div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
));
TimelineContent.displayName = "TimelineContent";

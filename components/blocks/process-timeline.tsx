'use client';

import * as React from "react";
import { useMeasure } from "@uidotdev/usehooks";
import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

import { cn } from "@/lib/utils";

const processCardVariants = cva("flex border backdrop-blur-lg", {
  variants: {
    variant: {
      orange:
        "flex border text-slate-50 border-orange-900/50 backdrop-blur-lg bg-gradient-to-br from-[rgba(15,23,42,0.7)_40%] to-[#ff5500_120%]",
      light: "shadow",
    },
    size: {
      sm: "min-w-[25%] max-w-[25%]",
      md: "min-w-[50%] max-w-[50%]",
      lg: "min-w-[75%] max-w-[75%]",
      xl: "min-w-full max-w-full",
    },
  },
  defaultVariants: {
    variant: "orange",
    size: "md",
  },
});

interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>;
}

interface ProcessCardProps extends React.HTMLAttributes<HTMLDivElement> {
  itemsLength: number;
  index: number;
  variant?: "orange" | "light";
  size?: "sm" | "md" | "lg" | "xl";
}

const ContainerScrollContext = React.createContext<
  ContainerScrollContextValue | undefined
>(undefined);

function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext);
  if (!context) {
    throw new Error(
      "useContainerScrollContext must be used within a ContainerScroll Component"
    );
  }
  return context;
}

export const ContainerScroll = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });
  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn("relative min-h-[120vh]", className)}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  );
};

export const ContainerSticky = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("sticky left-0 top-0 w-full overflow-hidden", className)}
    {...props}
  />
));
ContainerSticky.displayName = "ContainerSticky";

export const ProcessCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
));
ProcessCardTitle.displayName = "ProcessCardTitle";

export const ProcessCardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-8 p-6", className)}
    {...props}
  />
));
ProcessCardBody.displayName = "ProcessCardBody";

export const ProcessCard: React.FC<ProcessCardProps> = ({
  className,
  style,
  variant = "orange",
  size = "md",
  itemsLength,
  index,
  children,
  ...props
}) => {
  const { scrollYProgress } = useContainerScrollContext();
  const start = index / itemsLength;
  const end = start + 1 / itemsLength;
  
  const [innerWidth, setInnerWidth] = React.useState(0);
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setInnerWidth(window.innerWidth);
      
      const handleResize = () => {
        setInnerWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const x = useTransform(
    scrollYProgress,
    [start, end],
    [innerWidth, -((width ?? 0) * index) + 64 * index]
  );

  // Separate motion-specific props from HTML props
  const motionProps = {
    ref,
    style: {
      x: index > 0 ? x : 0,
      ...style,
    },
    className: cn(processCardVariants({ variant, size }), className),
  };

  return (
    <motion.div {...motionProps}>
      {children}
    </motion.div>
  );
};

ProcessCard.displayName = "ProcessCard"; 
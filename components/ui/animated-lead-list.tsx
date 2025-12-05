'use client';

import { cn } from "@/lib/utils";
import { AnimatedList } from "./animated-list";
import { RiMetaLine } from 'react-icons/ri';

interface Lead {
  name: string;
  source: string;
  time: string;
  icon: React.ReactNode;
}

const leads: Lead[] = [
  {
    name: "Neuer Lead",
    source: "Meta Ads",
    time: "Gerade eben",
    icon: <RiMetaLine className="w-4 h-4 text-[#0668E1]" />,
  },
  {
    name: "Neuer Lead",
    source: "Meta Ads",
    time: "Vor 10 Min",
    icon: <RiMetaLine className="w-4 h-4 text-[#0668E1]" />,
  },
  {
    name: "Neuer Lead",
    source: "Meta Ads",
    time: "Vor 40 Min",
    icon: <RiMetaLine className="w-4 h-4 text-[#0668E1]" />,
  },
  {
    name: "Neuer Lead",
    source: "Meta Ads",
    time: "Vor 1 Std",
    icon: <RiMetaLine className="w-4 h-4 text-[#0668E1]" />,
  }
];

const extendedLeads = Array.from({ length: 4 }, () => leads).flat();

const LeadNotification = ({ name, source, icon, time }: Lead) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full overflow-hidden rounded-lg p-1.5",
        "transition-all duration-200 ease-in-out hover:scale-[102%]",
        "bg-black/40 backdrop-blur-sm border border-white/10",
      )}
    >
      <div className="flex flex-row items-center gap-1.5">
        <div
          className="flex size-4 md:size-5 items-center justify-center rounded-md shrink-0 bg-white"
        >
          {icon}
        </div>
        <div className="flex flex-col overflow-hidden min-w-0">
          <figcaption className="flex flex-row items-center gap-1 text-white/90">
            <span className="text-[9px] md:text-[11px] font-medium">{name}</span>
            <span className="text-[7px] md:text-[8px] text-white/60 shrink-0">{time}</span>
          </figcaption>
          <p className="text-[7px] md:text-[9px] text-white/60">
            {source}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function LeadAnimatedList({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute flex flex-col overflow-hidden z-20",
        // Gemeinsame Styles für Mobile und Desktop
        "right-[2%] top-1/2 -translate-y-1/2",
        // Desktop Styles
        "md:h-[240px] md:w-[200px] md:py-3",
        // Mobile Styles
        "h-[180px] w-[120px] py-2",
        className
      )}
    >
      <AnimatedList 
        speed={15} 
        className="px-1"
      >
        {extendedLeads.map((lead, idx) => (
          <div key={idx} className="mb-2">
            <LeadNotification {...lead} />
          </div>
        ))}
      </AnimatedList>
    </div>
  );
} 
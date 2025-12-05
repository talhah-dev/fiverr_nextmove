"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const techLogos = [
  "/tech/logo.webp",
  "/tech/logo1.webp",
  "/tech/logo2.webp",
  "/tech/logo3.webp",
  "/tech/logo4.webp",
];

const firstRow = techLogos;
const secondRow = [...techLogos].reverse();
const thirdRow = techLogos;
const fourthRow = [...techLogos].reverse();

const LogoCard = ({ src }: { src: string }) => {
  return (
    <div className={cn(
      "relative mx-4 h-20 w-20 overflow-hidden rounded-xl border p-4",
      "border-gray-950/[.1] bg-white/80 hover:bg-white",
      "dark:border-gray-50/[.1] dark:bg-white/10 dark:hover:bg-white/20",
    )}>
      <Image
        src={src}
        alt="Technology Logo"
        fill
        className="object-contain p-2"
      />
    </div>
  );
};

export function MarqueeTech() {
  return (
    <section className="relative py-20 bg-black">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="relative flex h-[400px] w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
        <div
          className="flex flex-row items-center gap-4"
          style={{
            transform:
              "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
          }}
        >
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map((logo, i) => (
              <LogoCard key={i} src={logo} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
            {secondRow.map((logo, i) => (
              <LogoCard key={i} src={logo} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
            {thirdRow.map((logo, i) => (
              <LogoCard key={i} src={logo} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]" vertical>
            {fourthRow.map((logo, i) => (
              <LogoCard key={i} src={logo} />
            ))}
          </Marquee>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
      </div>
    </section>
  );
} 
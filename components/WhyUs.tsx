"use client";
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { RiCheckboxCircleFill, RiCloseCircleFill } from "react-icons/ri";
import { BorderBeam } from "./ui/border-beam";

const disadvantages = [
  "Hohe Streuverluste",
  "Schwer messbare Ergebnisse",
  "Lange Vorlaufzeiten",
  "Keine Echtzeit-Anpassungen",
  "Hohe Fixkosten",
  "Keine Branchenspezialisierung",
  "Unklare Zielgruppen",
  "Veraltete Methoden",
  "Keine Erfolgsgarantie",
];

const advantages = [
  "Präzise Zielgruppenansprache",
  "Transparentes Reporting",
  "Schnelle Ergebnisse",
  "Kontinuierliche Optimierung",
  "Leistungsbasierte Vergütung",
  "Branchenspezialisierung",
  "Moderne KI-Technologie",
  "Persönliche Betreuung",
  "Nachweisbare Erfolge",
];

export default function WhyUs() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const cardHover = {
    y: -6,
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] as const },
  };

  return (
    <motion.section
      id="why-us"
      ref={ref}
      className="relative overflow-hidden bg-white py-16 lg:py-20"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* subtle background accent */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          className="absolute -right-24 -top-24 h-72 w-72 blur-3xl opacity-40"
          viewBox="0 0 444 536"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M374.558 127.891C290.893 33.7273 152.005 71.9567 95.2954 136.742C38.5854 201.527 -24.5696 384.971 59.0954 479.135C142.76 573.299 359.895 442.346 416.605 377.561C473.315 312.776 458.223 222.055 374.558 127.891Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="404.5"
              y1="100"
              x2="44.5"
              y2="436"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ff8040" stopOpacity="0.18" />
              <stop offset="1" stopColor="#ff5500" stopOpacity="0.12" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
          variants={titleVariants}
        >
          <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Warum{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#ff5500]">NextMove</span>
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]" />
            </span>{" "}
            Digital?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
            Wir kombinieren Branchenexpertise mit moderner Technologie, um
            Ergebnisse zu liefern, die klassische Agenturen nicht erreichen.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {/* Traditionell */}
          <motion.div
            variants={cardVariants}
            whileHover={cardHover}
            className="group relative"
          >
            <div
              className="relative h-full rounded-2xl border border-slate-200/80 bg-white/90
                         p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)]
                         transition-all duration-300 ease-out hover:-translate-y-1
                         hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]
                         lg:p-7"
            >
              <div className="relative z-10 flex h-full flex-col">
                {/* header */}
                <div className="mb-5 flex min-h-[3rem] items-center gap-3 lg:mb-6 lg:gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 lg:h-12 lg:w-12">
                    <RiCloseCircleFill className="h-5 w-5 lg:h-6 lg:w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 lg:text-2xl">
                    Traditionell
                  </h3>
                </div>

                <ul className="flex-grow space-y-3 lg:space-y-4">
                  {disadvantages.map((item) => (
                    <li key={item} className="flex items-start">
                      <RiCloseCircleFill className="mt-1 h-4 w-4 flex-shrink-0 text-slate-300 lg:h-5 lg:w-5" />
                      <span className="ml-3 text-sm leading-relaxed text-slate-600 lg:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-slate-200 pt-3 lg:mt-6 lg:pt-4">
                  <div className="h-[3px] w-10 rounded-full bg-slate-200" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* NextMove */}
          <motion.div
            variants={cardVariants}
            whileHover={cardHover}
            className="group relative"
          >
            <div
              className="relative h-full rounded-2xl border border-orange-200 bg-white
                         p-6 shadow-[0_14px_35px_rgba(249,115,22,0.18)]
                         transition-all duration-300 ease-out hover:-translate-y-1
                         hover:border-orange-300 hover:shadow-[0_18px_45px_rgba(249,115,22,0.22)]
                         lg:p-7"
            >
              {/* subtle animated border beam */}
              <BorderBeam
                colorFrom="#ff5500"
                colorTo="#ff8040"
                size={220}
                duration={16}
              />

              <div className="relative z-10 flex h-full flex-col">
                {/* header */}
                <div className="mb-5 flex min-h-[3rem] items-center gap-3 lg:mb-6 lg:gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-orange-100 bg-orange-50 text-[#ff5500] lg:h-12 lg:w-12">
                    <RiCheckboxCircleFill className="h-5 w-5 lg:h-6 lg:w-6" />
                  </div>
                  <div className="flex flex-1 items-center">
                    <Image
                      src="/Logo-NMC-2.webp"
                      alt="NextMove Logo"
                      width={260}
                      height={80}
                      className="h-6 w-auto max-w-[220px] brightness-0 object-contain lg:h-8 lg:max-w-[260px]"
                    />
                  </div>
                </div>

                <ul className="flex-grow space-y-3 lg:space-y-4">
                  {advantages.map((item) => (
                    <li key={item} className="flex items-start">
                      <RiCheckboxCircleFill className="mt-1 h-4 w-4 flex-shrink-0 text-[#ff5500] lg:h-5 lg:w-5" />
                      <span className="ml-3 text-sm leading-relaxed text-slate-700 lg:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-orange-100 pt-3 lg:mt-6 lg:pt-4">
                  <div className="h-[3px] w-10 rounded-full bg-gradient-to-r from-[#ff5500] to-[#ff8040]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

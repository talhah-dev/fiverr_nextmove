"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  BsCashStack,
  BsPeople,
  BsBuilding,
  BsGlobe,
  BsClock,
  BsEyeSlash,
} from "react-icons/bs";

const PainPoints = () => {
  const painPoints = [
    {
      title: "Leads kosten >50€/Stück?",
      description:
        "Während andere qualifizierte Leads für unter 50€ generieren, zahlen Sie das Vierfache für unqualifizierte Interessenten.",
      icon: BsCashStack,
    },
    {
      title: "Content wird ignoriert?",
      description:
        "Ihre Posts und Anzeigen erhalten kaum Aufmerksamkeit, weil sie nicht die Schmerzpunkte Ihrer Zielgruppe treffen.",
      icon: BsEyeSlash,
    },
    {
      title: "Vertriebszeit > 20 Std./Woche?",
      description:
        "Sie verschwenden über die Hälfte Ihrer Arbeitszeit mit unqualifizierten Leads statt mit echten Kaufinteressenten.",
      icon: BsClock,
    },
    {
      title: "Phantom-Leads ohne Finanzierung",
      description:
        "85% Ihrer Anfragen haben keine Finanzierungszusage und blockieren Ihre Kapazitäten im Vertrieb.",
      icon: BsPeople,
    },
    {
      title: "Veraltete Offline-Strategien",
      description:
        "Während Konkurrenten digital skalieren, verlieren Sie täglich potenzielle Kunden durch ineffiziente Methoden.",
      icon: BsBuilding,
    },
    {
      title: "Digitale Unsichtbarkeit",
      description:
        "In der digitalen Welt sind Sie für potenzielle Premium-Kunden praktisch unsichtbar.",
      icon: BsGlobe,
    },
  ];

  const handleCtaClick = () => {
    window.open("https://lunacal.ai/team/nextmove-digital/meeting", "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <svg
          className="absolute right-[-10%] top-[-10%] h-72 w-72 blur-3xl opacity-40"
          viewBox="0 0 444 536"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M374.558 127.891C290.893 33.7273 152.005 71.9567 95.2954 136.742C38.5854 201.527 -24.5696 384.971 59.0954 479.135C142.76 573.299 359.895 442.346 416.605 377.561C473.315 312.776 458.223 222.055 374.558 127.891Z"
            fill="url(#paint0_linear_light)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_light"
              x1="404.5"
              y1="100"
              x2="44.5"
              y2="436"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ff8040" stopOpacity="0.18" />
              <stop offset="1" stopColor="#ff5500" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        {/* heading */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12 lg:mb-16">
          <h2 className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="block sm:inline">Verlieren Sie noch</span>{" "}
            <span className="relative inline-block mx-1 sm:mx-2">
              <span className="relative z-10 text-[#ff5500]">Geld &amp; Zeit</span>
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]" />
            </span>
            <span className="block sm:inline">
              durch diese typischen Vertriebsfehler?
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
            Die häufigsten Stolpersteine, die Immobilienmaklern jeden Monat
            tausende Euro Umsatz kosten.
          </p>
        </div>

        {/* cards */}
        <motion.div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <motion.div key={index} variants={cardVariants} className="group">
                <div
                  className="relative flex h-full flex-col rounded-2xl border border-slate-200/80 
                             bg-white/90 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] 
                             transition-all duration-300 ease-out hover:-translate-y-1 
                             hover:border-orange-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] 
                             sm:p-6 lg:p-7"
                >
                  <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-center sm:gap-4">
                    <div className="relative flex-shrink-0">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl 
                                   border border-orange-100 bg-orange-50/70 text-[#ff5500] 
                                   sm:h-12 sm:w-12 lg:h-14 lg:w-14"
                      >
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                      </div>
                    </div>
                    <h3 className="text-base font-semibold leading-tight text-slate-900 sm:text-lg lg:text-xl">
                      {point.title}
                    </h3>
                  </div>

                  <p className="flex-grow text-sm leading-relaxed text-slate-600 sm:text-base">
                    {point.description}
                  </p>

                  <div className="mt-4 border-t border-slate-200 pt-3 sm:mt-5 sm:pt-4">
                    <div className="h-[3px] w-10 rounded-full bg-gradient-to-r from-[#ff5500] to-[#ff8040] opacity-80" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="mt-10 text-center sm:mt-12 lg:mt-14">
          <button
            onClick={handleCtaClick}
            className="relative inline-flex items-center justify-center rounded-xl 
                       border border-[#ff5500] bg-[#ff5500] px-7 py-3 text-sm font-semibold 
                       uppercase tracking-[0.15em] text-white shadow-[0_10px_30px_rgba(255,85,0,0.35)] 
                       transition-transform duration-200 hover:scale-[1.03] sm:px-9 sm:py-3.5 sm:text-base"
          >
            <span className="relative z-10">
              Erkennen Sie sich wieder? &nbsp;Wir zeigen Ihnen die Lösung
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;

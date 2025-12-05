"use client";
import React, { useState } from "react";
import { TestimonialCard } from "./testimonial-cards";
import { MoveLeft, MoveRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    testimonial: "Wir generieren täglich qualifizierte Leads mit Nextmove Digital. Mehr Termine, mehr Abschlüsse und ein signifikantes Wachstum unseres Geschäfts.",
    author: "Michael Schürdt",
    avatar: "/P1039493.webp",
    role: "Kapitalanlage-Berater"
  },
  {
    id: 2,
    testimonial: "Mehr als 40 Anfragen in den ersten Wochen! 16 neue Besichtigungstermine und eine Reichweite von über 160.000 Konten.",
    author: "Jens Freyer",
    avatar: "/P1039309.webp",
    role: "Freyer Immobilien"
  },
  {
    id: 3,
    testimonial: "Innerhalb der ersten 3 Wochen konnten wir bereits mithilfe von NextMove Digital über 100 Leads generieren.",
    author: "Azim Chowdhury",
    avatar: "/azim.webp",
    role: "CD Immoportfolio GmbH"
  },
  {
    id: 4,
    testimonial: "Die Zusammenarbeit hat unsere Erwartungen übertroffen. Professionell, zielgerichtet und mit messbaren Ergebnissen.",
    author: "Alexander Banzhaf",
    avatar: "/banzhaf.webp",
    role: "Banzhaf Immobilien"
  },
  {
    id: 5,
    testimonial: "Endlich ein Partner, der die Immobilienbranche versteht. Die Lead-Qualität ist hervorragend.",
    author: "Alexander Kedro",
    avatar: "/kedro.webp",
    role: "Kedro Immobilien"
  }
];

const positions = ["front", "second", "third", "fourth", "fifth"] as const;

export default function Testimonials() {
  const [order, setOrder] = useState([0, 1, 2, 3, 4]);

  const handleShuffle = () => {
    setOrder((prev) => [...prev.slice(1), prev[0]]);
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[500px] lg:min-h-[550px] py-16 lg:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center max-w-[90vw] sm:max-w-none text-white mb-16 lg:mb-18">
          Was unsere
          <div className="relative inline-block mx-2">
            <span className="relative z-10">Kunden</span>
            <span className="absolute -bottom-1 left-0 right-0 h-3 lg:h-4 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50" />
            <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]" />
          </div>
          <span className="block sm:inline">sagen</span>
        </h2>
        
        <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px] h-[400px] lg:h-[450px] mx-auto">
          {order.map((idx, i) => (
            <TestimonialCard
              key={testimonials[idx].id}
              handleShuffle={handleShuffle}
              testimonial={testimonials[idx].testimonial}
              position={positions[i]}
              id={testimonials[idx].id}
              author={testimonials[idx].author}
              avatar={testimonials[idx].avatar}
              role={testimonials[idx].role}
            />
          ))}
        </div>
        
        <div className="mt-6 lg:mt-8 flex items-center justify-center text-white/50 space-x-3 lg:space-x-4">
          <MoveLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          <span className="text-xs lg:text-sm font-medium uppercase tracking-widest">
            Wischen zum Entdecken
          </span>
          <MoveRight className="w-5 h-5 lg:w-6 lg:h-6" />
        </div>
      </div>
    </section>
  );
}

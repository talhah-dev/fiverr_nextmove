"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after 200px scroll
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[150]">

            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="
      flex items-center justify-center
      h-11 w-11 rounded-full
      bg-black/80 border border-[#ff5500]/60
      text-[#ff5500]
      shadow-[0_0_18px_rgba(255,85,0,0.5)]
      backdrop-blur-md
      hover:bg-[#ff5500]
      hover:text-black
      hover:shadow-[0_0_26px_rgba(255,110,40,0.75)]
      transition-all duration-300
      "
            >
                <ArrowUp className="h-4 w-4" />
            </button>
        </div>
    );
}

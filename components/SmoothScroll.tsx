"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "@studio-freight/lenis/dist/lenis.css";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => t, // linear easing (can adjust)
      touchMultiplier: 2,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

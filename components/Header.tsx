'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Startseite", href: "#top" },
  { name: "Unsere Lösung", href: "#solutions" },
  { name: "Warum wir?", href: "#why-us" },
  { name: "Referenzen", href: "#testimonials" },
  { name: "Unser Prozess", href: "#timeline" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleCTA = () =>
    window.open("https://lunacal.ai/team/nextmove-digital/meeting", "_blank");

  return (
    <header
      className={cn(
        "fixed top-0 mt-5 left-0 w-full z-[100] transition-all duration-300",
        isScrolled ? "py-2 backdrop-blu r-xl bg- black/40 shado w-lg" : "py-4 bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo-NMC-2.webp"
            width={180}
            height={50}
            alt="NextMove Logo"
            className="h-8 w-auto drop-shadow-xl"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleNavClick(item.href)}
              className="text-white/90 hover:text-white transition relative group text-sm tracking-wide"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500] group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={handleCTA}
          className="hidden lg:block px-5 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide 
                     bg-gradient-to-r from-[#ff8040] to-[#ff5500] text-white shadow-lg hover:scale-105 
                     transition-transform"
        >
          Beratung
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed left-0 right-0 bg-black/80 backdrop-blur-xl transition-all duration-300 overflow-hidden",
          open ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col items-center py-6 space-y-5">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleNavClick(item.href)}
              className="text-white/90 hover:text-white text-base tracking-wide transition"
            >
              {item.name}
            </button>
          ))}

          <button
            onClick={handleCTA}
            className="mt-4 px-6 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide 
                       bg-gradient-to-r from-[#ff8040] to-[#ff5500] text-white shadow-lg transition hover:scale-105"
          >
            Beratung
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
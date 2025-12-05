"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Linkedin, Instagram, Facebook, Anchor } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black pt-16 pb-8">
      {/* subtle orange glow at the top of footer */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-10 h-20 opacity-60"
        style={{
          background:
            "radial-gradient(circle at top, rgba(255, 120, 64, 0.35), transparent 70%)",
          filter: "blur(28px)",
        }}
      />

      <div className="max-w-7xl w-full relative mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-[1.4fr,1fr,1fr]">
          {/* Logo + Beschreibung */}
          <div>
            <Image
              src="/Logonextmove.webp"
              alt="NextMove Digital Logo"
              width={180}
              height={60}
              className="mb-6"
            />

            <p className="mb-4 max-w-sm text-sm text-gray-400">
              Spezialisiert auf Performance Marketing für Finanzberater und
              Immobilien-Profis.
            </p>

            {/* Contact */}
            <div className="mb-6 space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#ff8040]" />
                <a
                  href="mailto:info@nextmove-digital.de"
                  className="hover:text-[#ff5500] transition-colors"
                >
                  info@nextmove-digital.de
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#ff8040]" />
                <span>Hamburg, Deutschland</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex space-x-3">
              <Link
                href="https://linkedin.com"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-300 shadow-sm transition-all hover:bg-[#ff5500] hover:text-black hover:shadow-[0_0_18px_rgba(255,120,64,0.8)]"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-300 shadow-sm transition-all hover:bg-[#ff5500] hover:text-black hover:shadow-[0_0_18px_rgba(255,120,64,0.8)]"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://facebook.com"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-300 shadow-sm transition-all hover:bg-[#ff5500] hover:text-black hover:shadow-[0_0_18px_rgba(255,120,64,0.8)]"
              >
                <Facebook size={18} />
              </Link>
            </div>
          </div>

          {/* Dienstleistungen */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
              Dienstleistungen
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 transition-colors hover:text-[#ff5500]"
                >
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 transition-colors hover:text-[#ff5500]"
                >
                  Lead-Generierung
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 transition-colors hover:text-[#ff5500]"
                >
                  Kampagnen-Management
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 transition-colors hover:text-[#ff5500]"
                >
                  Conversion-Optimierung
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
              Rechtliches
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/impressum"
                  className="text-gray-300 transition-colors hover:text-[#ff5500]"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-gray-300 transition-colors hover:text-[#ff5500]"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/agb"
                  className="text-gray-300 transition-colors hover:text-[#ff5500]"
                >
                  AGB
                </Link>
              </li>
              <li>
                <Link
                  href="/widerrufungsbelehrung"
                  className="text-gray-300 transition-colors hover:text-[#ff5500]"
                >
                  Widerrufsbelehrung
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 transition-colors hover:text-[#ff5500]"
                >
                  Cookie-Richtlinie
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2025 NextMove Digital. Alle Rechte vorbehalten.</p>

          <div className="flex items-center gap-2">
            <span>Designed &amp; Developed in Hamburg</span>
            <Anchor className="h-4 w-4 text-[#ff5500]" />
          </div>
        </div>
      </div>
    </footer>
  );
}

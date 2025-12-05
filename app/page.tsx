import { Metadata } from 'next';
import { Header } from '@/components/Header';
import Hero from '@/components/Hero';
import VideoBackground from '@/components/VideoBackground';
import Script from 'next/script';
import { JsonLd, schemas } from '@/components/SEO/JsonLd';

export const preferredRegion = ['fra1', 'dub1', 'arn1', 'cdg1'];

// Static imports for critical components (no dynamic loading)
import PainPoints from '@/components/PainPoints';
import Solutions from '@/components/Solutions';
import FlipWebsites from '@/components/unsere-loesung/flip-websites';
import FailureReasons from '@/components/FailureReasons';
import TestimonialVideo from '@/components/TestimonialVideo';
import AdsDesign from '@/components/AdsDesign';
import CaseStudySection from '@/components/CaseStudySection';
import Team from '@/components/Team';
import Timeline from '@/components/Timeline';
import WhyUs from '@/components/WhyUs';
import CTA from '@/components/CTA';
import CalendlyWidget from '@/components/CalendlyWidget';
import Questions from '@/components/Questions';
import Footer from '@/components/Footer';
import NextMove from '@/components/NextMove';
import BusinessSection from '@/components/BusinessSection';

export const metadata: Metadata = {
  title: 'Immobilien Leads & Maklerkunden | Deutschland, Österreich & Schweiz',
  description: 'Qualifizierte Leadgenerierung für Immobilienmakler und Finanzberater in Deutschland, Österreich und der Schweiz. Performance Marketing mit nachweisbarem ROI. Über 500 zufriedene Kunden.',
  keywords: [
    'Immobilien Leads Deutschland',
    'Immobilien Leads Österreich',
    'Immobilien Leads Schweiz',
    'Immobilienmakler Leads Berlin',
    'Immobilienmakler Leads München',
    'Immobilienmakler Leads Wien',
    'Immobilienmakler Leads Zürich',
    'Social Media Marketing Makler',
    'Leads für Makler generieren',
    'Finanzberater Leads Deutschland',
    'Qualifizierte Immobilien Leads',
    'Immobilien Akquise',
    'Performance Marketing Immobilienmakler',
    'Digitales Marketing Finanzdienstleister'
  ],
  alternates: {
    canonical: 'https://nextmove-digital.de/',
    languages: {
      'de-DE': 'https://nextmove-digital.de/de',
      'de-AT': 'https://nextmove-digital.de/at',
      'de-CH': 'https://nextmove-digital.de/ch'
    }
  },
  openGraph: {
    title: 'Immobilien Leads & Maklerkunden | Deutschland, Österreich & Schweiz',
    description: 'Qualifizierte Leadgenerierung in Deutschland, Österreich und der Schweiz mit nachweisbarem ROI. Performance Marketing für Immobilienmakler und Finanzberater.',
    url: 'https://nextmove-digital.de',
    siteName: 'NextMove Digital',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://nextmove-digital.de/og-image-home.webp',
        width: 1200,
        height: 630,
        alt: 'NextMove Digital - Immobilien Leads Deutschland, Österreich & Schweiz'
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      {/* Global Video Background - visible behind Header and Hero */}
      <div className="md:block brightness-75 bg-black hidden">
        <VideoBackground />
      </div>

      <JsonLd data={schemas.enhancedFaqPage()} id="faq-page" />

      <Script id="schema-org" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "NextMove Digital",
            "url": "https://nextmove-digital.de",
            "logo": "https://nextmove-digital.de/logo-nextmove.jpeg",
            "description": "Spezialisiert auf Lead-Generierung für Finanzberater und Immobilienmakler ohne Google Ads",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Papenstraße 23",
              "addressLocality": "Hamburg",
              "postalCode": "22089",
              "addressCountry": "DE"
            },
            "telephone": "+491795914490",
            "email": "info@nextmove-digital.de",
            "priceRange": "€€",
            "openingHours": "Mo-Fr 09:00-18:00",
            "sameAs": [
              "https://www.linkedin.com/company/nextmove-consulting",
              "https://www.instagram.com/nextmove_consulting",
              "https://www.facebook.com/nextmove-digital"
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 53.5511,
                "longitude": 9.9937
              },
              "geoRadius": "1000"
            },
            "knowsAbout": [
              "Lead-Generierung für Finanzberater",
              "Performance Marketing",
              "Social Media Ads",
              "Organische Leads ohne Google Ads",
              "Digitales Marketing für Finanzbranche"
            ]
          }
        `}
      </Script>

      <Header />

      <main className="relative flex min-h-screen flex-col bg-transparent overflow-x-hidden max-w-full pt-24 sm:pt-28 lg:pt-32" style={{ zIndex: 5 }}>
        {/* Hero Section - erster Inhalt nach Header */}
        <div className="relative ">
          <Hero />
        </div>

        <FailureReasons />
        <BusinessSection />


        {/* Übergang zwischen PainPoints und Solutions */}
        <div className="relative">
          <PainPoints />
          <TestimonialVideo />
          {/* Solutions enthält intern ein H1-Element in der Sticky-Überschrift. Das wird durch H2 ersetzt, um nur eine H1 auf der Seite zu haben. */}
          <Solutions />
        </div>
        <AdsDesign />
        {/* <FlipWebsites /> */}
        <div className="w-full bg-black text-white">
          <section className="relative mx-auto flex md:py-20 py-12 max-w-7xl flex-col items-center justify-center px-4 text-center">
            <div className="relative z-10 flex flex-col items-center">
              <span className="mb-6 inline-flex rounded-full bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em]">
                Unsere Websites
              </span>

              <h1 className="text-4xl font-extrabold !leading-tight sm:text-5xl md:text-7xl">
                Mehr{" "}
                <span className="text-orange-500">
                  Anfragen
                </span>{" "}
                durch unsere individuell
                selbstentwickelte Webseite
              </h1>

              <p className="mt-6 max-w-3xl text-sm sm:text-base text-neutral-200">
                Mit Features, die gezielt Interessenten für Immobilien gewinnen:
                verkaufspsychologischer Aufbau, Premium-Design, SEO-Optimierung,
                responsives Design und ein eigener Chatbot, der nicht nur Fragen
                beantwortet, sondern auch verkauft und neue Leads generiert.
              </p>

              <button
                type="button"
                className="mt-10 rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-lg transition hover:bg-orange-400"
              >
                Webseite kostenlos anfragen
              </button>
            </div>
          </section>
        </div>
        <CaseStudySection />
        <NextMove />
        {/* <Team /> */}
        <Timeline />
        <WhyUs />
        <CTA />
        <CalendlyWidget />
        <Questions />
        <Footer />
      </main>
    </>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/Header';
import Hero from '@/components/Hero';
import VideoBackground from '@/components/VideoBackground';
import { MovingLogos } from '@/components/ui/moving-cards'
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
  title: 'Immobilien Leads Deutschland | Makler Leads Berlin, München, Hamburg',
  description: 'Qualifizierte Leadgenerierung für Immobilienmakler und Finanzberater in Deutschland. Performance Marketing mit nachweisbarem ROI in Berlin, München, Hamburg, Köln, Frankfurt und weiteren Städten.',
  keywords: [
    'Immobilien Leads Deutschland',
    'Immobilienmakler Leads Berlin',
    'Immobilienmakler Leads München',
    'Immobilienmakler Leads Hamburg',
    'Immobilienmakler Leads Köln',
    'Immobilienmakler Leads Frankfurt',
    'Immobilienmakler Leads Stuttgart',
    'Immobilienmakler Leads Düsseldorf',
    'Immobilienmakler Leads Dortmund',
    'Immobilienmakler Leads Essen',
    'Immobilienmakler Leads Leipzig',
    'Leads für Makler Deutschland',
    'Social Media Marketing Makler Deutschland',
    'Finanzberater Leads Deutschland',
    'Qualifizierte Immobilien Leads',
    'Immobilien Akquise Deutschland',
    'Performance Marketing Immobilienmakler',
    'Digitales Marketing Finanzdienstleister Deutschland'
  ],
  alternates: {
    canonical: 'https://nextmove-digital.de/de',
    languages: {
      'de-DE': 'https://nextmove-digital.de/de',
      'de-AT': 'https://nextmove-digital.de/at',
      'de-CH': 'https://nextmove-digital.de/ch'
    }
  },
  openGraph: {
    title: 'Immobilien Leads Deutschland | Makler Leads Berlin, München, Hamburg',
    description: 'Qualifizierte Leadgenerierung für Immobilienmakler und Finanzberater in Deutschland mit nachweisbarem ROI. Performance Marketing in Berlin, München, Hamburg und ganz Deutschland.',
    url: 'https://nextmove-digital.de/de',
    siteName: 'NextMove Digital',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://nextmove-digital.de/og-image-home.webp',
        width: 1200,
        height: 630,
        alt: 'NextMove Digital - Immobilien Leads Deutschland'
      }
    ]
  }
};

export default function DeutschlandPage() {
  return (
    <>
      {/* Global Video Background - visible behind Header and Hero */}
      <VideoBackground />

      <JsonLd data={schemas.enhancedFaqPage()} id="faq-page" />
      <JsonLd data={schemas.organization} id="organization" />
      <JsonLd data={{
        ...schemas.service('Deutschland', 'DE'),
        areaServed: {
          '@type': 'Country',
          name: 'Deutschland',
          addressCountry: 'DE'
        }
      }} id="service" />

      <Script id="schema-org-de" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "NextMove Digital - Deutschland",
            "url": "https://nextmove-digital.de/de",
            "logo": "https://nextmove-digital.de/logo-nextmove.jpeg",
            "description": "Spezialisiert auf Lead-Generierung für Finanzberater und Immobilienmakler in Deutschland ohne Google Ads",
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
              "@type": "Country",
              "name": "Deutschland",
              "addressCountry": "DE"
            },
            "knowsAbout": [
              "Lead-Generierung für Finanzberater Deutschland",
              "Lead-Generierung für Immobilienmakler Deutschland",
              "Performance Marketing Deutschland",
              "Social Media Ads Deutschland",
              "Organische Leads ohne Google Ads",
              "Digitales Marketing für Finanzbranche"
            ]
          }
        `}
      </Script>

      <Header />

      <main className="relative flex min-h-screen flex-col bg-transparent overflow-x-hidden max-w-full pt-24 sm:pt-28 lg:pt-32" style={{ zIndex: 5 }}>
        {/* Hero Section - erster Inhalt nach Header */}
        <div className="relative">
          <Hero />
        </div>

        <MovingLogos />
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
        <FlipWebsites />
        <CaseStudySection />
        <NextMove />
        <Team />
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

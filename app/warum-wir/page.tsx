import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';

const ExpertiseHero = dynamic(() => import('@/components/warum-wir/ExpertiseHero'));
const TrustBuilding = dynamic(() => import('@/components/warum-wir/TrustBuilding'));
const TeamExpertise = dynamic(() => import('@/components/warum-wir/TeamExpertise'));
const CTA = dynamic(() => import('@/components/CTA'));
const Footer = dynamic(() => import('@/components/Footer'));

export const metadata: Metadata = {
  title: 'Warum wir? - NextMove Digital | Vertrauensvolle Experten für Immobilien-Marketing',
  description: 'Erfahren Sie, warum über 50 Makler NextMove Digital vertrauen. Branchenexpertise seit 2019, persönlicher Service und nachweisbare Erfolge bei jedem Projekt.',
  keywords: 'NextMove Digital Expertise, Immobilienmakler Marketing Experten, Vertrauensvolle Agentur, Drohnenaufnahmen Profis, 5 Jahre Erfahrung Immobilien',
  alternates: {
    canonical: '/warum-wir',
  },
};

export default function WarumWir() {
  return (
    <>
      <Header />
      
      <main className="flex min-h-screen flex-col bg-black overflow-x-hidden max-w-full pt-24 sm:pt-28 lg:pt-32">
        {/* Expertise Hero Section */}
        <div className="relative">
          <ExpertiseHero />
        </div>
        
        {/* Trust Building Section */}
        <div className="relative">
          <TrustBuilding />
        </div>
        
        {/* Team Expertise Section */}
        <TeamExpertise />
        
        {/* Call to Action */}
        <CTA />
        
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
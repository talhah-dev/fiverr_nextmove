import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';

const KontaktContent = dynamic(() => import('@/components/KontaktContent'));
const CalendlyWidget = dynamic(() => import('@/components/CalendlyWidget'));
const Footer = dynamic(() => import('@/components/Footer'));

export const metadata: Metadata = {
  title: 'Kontakt - NextMove Digital | Ihr Partner für digitales Marketing',
  description: 'Nehmen Sie Kontakt mit NextMove Digital auf. Buchen Sie Ihr kostenloses Strategiegespräch und starten Sie durch mit professioneller Lead-Generierung.',
  keywords: 'NextMove Digital Kontakt, Strategiegespräch buchen, Finanzberater Marketing Beratung, Leadgenerierung Anfrage',
  alternates: {
    canonical: '/kontakt',
  },
};

export default function Kontakt() {
  return (
    <>
      <Header />
      
      <main className="flex min-h-screen flex-col bg-black overflow-x-hidden max-w-full pt-24 sm:pt-28 lg:pt-32">
        {/* Kontakt Content */}
        <KontaktContent />
        
        {/* Calendly Widget */}
        <CalendlyWidget />
        
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
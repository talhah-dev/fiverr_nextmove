import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';

const ReferenzenVideos = dynamic(() => import('@/components/ReferenzenVideos'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const CTA = dynamic(() => import('@/components/CTA'));
const Footer = dynamic(() => import('@/components/Footer'));

export const metadata: Metadata = {
  title: 'Referenzen & Portfolio - NextMove Digital | Erfolgreiche Objektvermarktung',
  description: 'Sehen Sie unsere erfolgreichen Projekte: Drohnenaufnahmen, Objektfotografie und Virtual Tours für über 50 zufriedene Immobilienmakler deutschlandweit.',
  keywords: 'NextMove Portfolio, Drohnenaufnahmen Referenzen, Immobilien Fotografie Beispiele, Virtual Tours Portfolio, Makler Testimonials, Objektvermarktung Erfolge',
  alternates: {
    canonical: '/referenzen',
  },
};

export default function Referenzen() {
  return (
    <>
      <Header />
      
      <main className="flex min-h-screen flex-col bg-black overflow-x-hidden max-w-full pt-24 sm:pt-28 lg:pt-32">
        {/* Video Referenzen Section */}
        <div className="relative">
          <ReferenzenVideos />
        </div>
        
        {/* Text Testimonials */}
        <Testimonials />
        
        {/* Call to Action */}
        <CTA />
        
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
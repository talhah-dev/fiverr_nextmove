import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';

const BlogContent = dynamic(() => import('@/components/BlogContent'));
const Footer = dynamic(() => import('@/components/Footer'));

export const metadata: Metadata = {
  title: 'Blog - NextMove Digital | Insights & Tipps für Finanzberater',
  description: 'Entdecken Sie wertvolle Insights, Tipps und Strategien für erfolgreiches digitales Marketing in der Finanzbranche.',
  keywords: 'Marketing Blog, Finanzberater Tipps, Lead-Generierung Strategien, Digital Marketing Insights',
  alternates: {
    canonical: '/blog',
  },
};

export default function Blog() {
  return (
    <>
      <Header />
      
      <main className="flex min-h-screen flex-col bg-black overflow-x-hidden max-w-full pt-24 sm:pt-28 lg:pt-32">
        {/* Blog Content */}
        <BlogContent />
        
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
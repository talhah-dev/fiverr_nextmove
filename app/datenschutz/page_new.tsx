import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Nextmove Digital',
  description: 'Datenschutzerklärung von Nextmove Digital. Hier erfahren Sie, wie wir Ihre personenbezogenen Daten verarbeiten.',
  alternates: { canonical: '/datenschutz' },
  robots: { index: true, follow: true },
};

export default function Datenschutzerklaerung() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Header />
      <div className="container mx-auto px-4 pt-36 pb-20 flex-grow">
        <div className="max-w-4xl mx-auto bg-black/50 p-8 md:p-12 rounded-xl border border-white/10">
          <div 
            className="text-gray-300"
            dangerouslySetInnerHTML={{
              __html: `

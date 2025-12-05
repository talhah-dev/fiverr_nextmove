import './globals.css';
import './fonts.css';
import type { Metadata } from 'next';
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import OrangeCursor from '@/components/OrangeCursor';
import ScrollPositionManager from '@/components/ScrollPositionManager';
import MobileScrollOptimizer from '@/components/MobileScrollOptimizer';
import CookieBanner from '@/components/CookieBanner';
import { Suspense } from 'react';
import Analytics from './analytics';

export const metadata: Metadata = {
  title: {
    template: '%s | Nextmove Digital - Immobilien Leads Deutschland, Österreich & Schweiz',
    default: 'Nextmove Digital - Leadgenerierung für Immobilienmakler & Finanzberater in Deutschland, Österreich & Schweiz',
  },
  description: 'Nextmove Digital generiert qualifizierte Leads für Immobilienmakler und Finanzberater in Deutschland, Österreich und der Schweiz mit nachweisbarem ROI. KI-gestützte Vertriebsstrategien und digitales Marketing für mehr Kunden und Umsatz.',
  keywords: [
    'Immobilien Leads Deutschland',
    'Immobilien Leads Österreich',
    'Immobilien Leads Schweiz',
    'Immobilienmakler Leads Berlin',
    'Immobilienmakler Leads München',
    'Immobilienmakler Leads Hamburg',
    'Immobilienmakler Leads Wien',
    'Immobilienmakler Leads Zürich',
    'Social Media Marketing Makler',
    'Leads für Makler generieren',
    'Finanzberater Leads Deutschland',
    'Digitales Marketing Immobilienmakler',
    'Qualifizierte Immobilien Leads',
    'Immobilien Akquise Deutschland'
  ],
  authors: [{ name: 'Ali Alizadah', url: 'https://nextmove-digital.de/team/ali-alizadah' }],
  creator: 'Nextmove Digital',
  publisher: 'Nextmove Digital',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nextmove-digital.de'),
  alternates: {
    canonical: 'https://nextmove-digital.de',
    languages: {
      'de-DE': 'https://nextmove-digital.de/de',
      'de-AT': 'https://nextmove-digital.de/at',
      'de-CH': 'https://nextmove-digital.de/ch',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Mt8Tg_hyITdx1MhHvUCpn9LkbE7bkgun0nZo3y9rzwY',
  },
  category: 'Digital Marketing',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://nextmove-digital.de',
    title: 'Nextmove Digital - Leadgenerierung für Immobilienmakler & Finanzberater',
    description: 'Wir generieren qualifizierte Leads für Finanzberater und Immobilien-Profis mit nachweisbarem ROI',
    siteName: 'Nextmove Digital',
    images: [
      {
        url: 'https://nextmove-digital.de/Logonextmove.webp',
        width: 1200,
        height: 630,
        alt: 'Nextmove Digital - Leadgenerierung für Immobilienmakler & Finanzberater'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nextmove Digital - Leadgenerierung für Immobilienmakler',
    description: 'Wir generieren qualifizierte Leads für Finanzberater und Immobilien-Profis mit nachweisbarem ROI',
    creator: '@nextmoveconsult',
    images: ['https://nextmove-digital.de/Logonextmove.webp']
  },
  icons: {
    icon: [
      { url: '/logo-nextmove.jpeg', type: 'image/jpeg', sizes: 'any' },
    ],
    apple: '/logo-nextmove.jpeg',
    shortcut: '/logo-nextmove.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo-nextmove.jpeg" type="image/jpeg" sizes="any" />
        <link rel="apple-touch-icon" href="/logo-nextmove.jpeg" />
        <link rel="shortcut icon" href="/logo-nextmove.jpeg" />
        <meta name="google-site-verification" content="Mt8Tg_hyITdx1MhHvUCpn9LkbE7bkgun0nZo3y9rzwY" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Nextmove Digital',
              url: 'https://nextmove-digital.de',
              logo: 'https://nextmove-digital.de/logo-nextmove.jpeg',
              description: 'Nextmove Digital generiert qualifizierte Leads für Immobilienmakler und Finanzberater mit nachweisbarem ROI.',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                areaServed: ['DE', 'AT', 'CH'],
                availableLanguage: ['German'],
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Papenstraße 23',
                addressLocality: 'Hamburg',
                postalCode: '22089',
                addressCountry: 'DE'
              },
              sameAs: [
                'https://www.facebook.com/nextmove-digital',
                'https://www.instagram.com/nextmove_digital',
                'https://www.linkedin.com/company/nextmove-digital',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Leadgenerierung für Immobilienmakler und Finanzberater',
              provider: {
                '@type': 'Organization',
                name: 'Nextmove Digital'
              },
              description: 'Qualifizierte Leads für Immobilienmakler und Finanzberater mit nachweisbarem ROI durch KI-gestützte Vertriebsstrategien.',
              areaServed: {
                '@type': 'Country',
                name: 'Deutschland'
              },
              audience: {
                '@type': 'Audience',
                audienceType: 'Immobilienmakler, Finanzberater, Immobilienprofis'
              },
              serviceType: 'Digitales Marketing und Leadgenerierung'
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Wie generiere ich als Immobilienmakler effektiv neue Leads?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Erfolgreiche Leadgenerierung für Immobilienmakler basiert heute auf mehreren Säulen: Erstens, nutzen Sie Social Media-Plattformen wie Facebook und Instagram für zielgerichtete Anzeigen. Zweitens, optimieren Sie Ihre Online-Präsenz mit einer professionellen Website und SEO. Drittens, setzen Sie auf Content-Marketing mit Mehrwert für potenzielle Kunden. Bei professioneller Umsetzung sehen unsere Kunden oft schon nach 2-3 Wochen die ersten qualifizierten Leads, mit deutlicher Steigerung nach 4-6 Wochen dank kontinuierlicher Datenoptimierung.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Wie verkaufe ich meine Immobilien schneller und zu besseren Preisen?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Für schnellere Immobilienverkäufe zu besseren Preisen sind drei Faktoren entscheidend: Erstens, eine professionelle Präsentation mit hochwertigen Fotos, Videos und virtuellen Rundgängen. Zweitens, eine präzise Preisgestaltung basierend auf Marktanalysen. Drittens, die gezielte Ansprache der richtigen Käuferzielgruppe über digitale Kanäle. Unsere spezialisierten Marketingstrategien helfen Immobilienprofis, genau die Käufer zu erreichen, die aktiv nach Ihren Angeboten suchen, was zu schnelleren Abschlüssen und besseren Konditionen führt.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Wie gewinne ich als Finanzberater qualifizierte Neukunden?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Die Neukundengewinnung für Finanzberater erfordert heute eine strategische digitale Präsenz: Erstens, setzen Sie auf LinkedIn für die B2B-Leadgenerierung mit gezieltem Content und Networking. Zweitens, nutzen Sie personalisierte E-Mail-Kampagnen mit wertvollen Finanzinformationen. Drittens, etablieren Sie sich als Experte durch Webinare und digitale Beratungsangebote. Unsere Kunden profitieren von einem transparenten Reporting-System, das genau zeigt, welche Strategien die besten Leads generieren.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Was kostet professionelle Leadgenerierung für Immobilienmakler?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Für effektive Leadgenerierung im Immobilienbereich empfehlen wir ein Werbebudget von mindestens 2.000€ monatlich plus unsere Betreuungsgebühr. Diese Investition rentiert sich schnell: Ein einziger erfolgreicher Immobilienabschluss bringt Ihnen ein Vielfaches davon ein. Unsere Kunden erzielen durchschnittlich 30-50 qualifizierte Leads pro Monat, was zu 5-10 Besichtigungsterminen und 1-3 Abschlüssen führt.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Wie steigere ich meine Sichtbarkeit als Immobilienmakler im Internet?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Die digitale Sichtbarkeit für Immobilienmakler lässt sich durch mehrere Strategien deutlich erhöhen: Erstens, lokale SEO-Optimierung Ihrer Website für relevante Suchbegriffe in Ihrer Region. Zweitens, regelmäßige Erstellung von hochwertigem Content zu Immobilienthemen. Drittens, aktives Management Ihrer Google Business-Präsenz mit Kundenbewertungen. Viertens, strategisches Social-Media-Marketing auf Instagram und Facebook.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Wie nutze ich LinkedIn erfolgreich für die Kundenakquise?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'LinkedIn ist heute eines der effektivsten Tools für B2B-Leadgenerierung, besonders für Finanz- und Immobilienprofis. Erfolgreiche Strategien umfassen: Erstens, die Optimierung Ihres persönlichen Profils mit Fokus auf Kundennutzen. Zweitens, gezieltes Content-Marketing mit Branchenexpertise. Drittens, systematisches Networking mit Ihrer Zielgruppe. Viertens, automatisierte aber personalisierte Kontaktanfragen. Unsere LinkedIn-Automation-Lösungen ermöglichen es Ihnen, täglich 20-30 qualifizierte Kontakte zu knüpfen.'
                  }
                }
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://nextmove-digital.de'
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Unsere Lösung',
                  item: 'https://nextmove-digital.de/unsere-loesung'
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Kontakt',
                  item: 'https://nextmove-digital.de/kontakt'
                }
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
                name: 'Nextmove Digital',
              image: 'https://nextmove-digital.de/logo-nextmove.jpeg',
              '@id': 'https://nextmove-digital.de',
              url: 'https://nextmove-digital.de',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Papenstraße 23',
                addressLocality: 'Hamburg',
                postalCode: '22089',
                addressCountry: 'DE'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 53.587,
                longitude: 10.079
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday'
                ],
                opens: '09:00',
                closes: '18:00'
              },
              priceRange: '€€'
            }),
          }}
        />
        <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </head>
      <body className="overflow-x-hidden relative" suppressHydrationWarning>
        <Suspense>
          <Analytics />
        </Suspense>
        {/* Mobile Scroll Optimizer */}
        <MobileScrollOptimizer />
        {/* Scroll Position Manager */}
        <ScrollPositionManager />
        {/* Orangefarbener Custom Cursor als Client-Komponente */}
        <OrangeCursor />
        <ScrollProgress className="bg-gradient-to-r from-[#ff5500] via-[#ff8040] to-[#ff5500]" />
        <div className="overflow-x-hidden max-w-full">
          {children}
        </div>
        {/* Cookie Banner */}
        <CookieBanner />
      </body>
    </html>
  );
}

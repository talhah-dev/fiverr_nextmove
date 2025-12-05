import Script from 'next/script';

interface JsonLdProps {
  data: Record<string, any>;
  id?: string;
}

export function JsonLd({ data, id = 'json-ld' }: JsonLdProps) {
  return (
    <Script 
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Predefined schemas for consistency
export const schemas = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NextMove Digital',
    url: 'https://nextmove-digital.de',
    logo: 'https://nextmove-digital.de/Logonextmove.webp',
    description: 'Performance Marketing und Lead-Generierung für Finanzberater und Immobilienmakler in Deutschland, Österreich und der Schweiz',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Papenstraße 23',
      addressLocality: 'Hamburg',
      postalCode: '22089',
      addressCountry: 'DE'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49-179-5914490',
      contactType: 'sales',
      areaServed: ['DE', 'AT', 'CH'],
      availableLanguage: 'German'
    },
    sameAs: [
      'https://www.linkedin.com/company/nextmove-digital',
      'https://www.facebook.com/nextmove-digital',
      'https://www.instagram.com/nextmove_digital'
    ]
  },

  service: (city: string, country: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Lead-Generierung für Finanzberater und Immobilienmakler in ${city}`,
    description: `Professionelle Lead-Generierung und Performance Marketing für Finanzberater und Immobilienmakler in ${city}. Qualifizierte Leads ohne hohe Werbekosten.`,
    provider: {
      '@type': 'Organization',
      name: 'NextMove Digital',
      url: 'https://nextmove-digital.de',
      logo: 'https://nextmove-digital.de/Logonextmove.webp',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+49-179-5914490',
        contactType: 'customer service',
        areaServed: ['DE', 'AT', 'CH'],
        availableLanguage: ['German'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        }
      }
    },
    areaServed: {
      '@type': 'City',
      name: city,
      addressCountry: country.toUpperCase()
    },
    serviceType: [
      'Lead-Generierung',
      'Performance Marketing',
      'Social Media Marketing',
      'Kundenakquise'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Leadgenerierung Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Immobilienmakler Leadgenerierung',
            description: 'Qualifizierte Leads für Immobilienmakler mit Fokus auf Verkäufer und Käufer'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Finanzberater Leadgenerierung', 
            description: 'Qualifizierte Leads für Finanzberater und Finanzdienstleister'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      reviewCount: 127,
      bestRating: 5,
      worstRating: 1
    }
  }),

  faqPage: (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }),

  breadcrumbList: (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }),

  enhancedFaqPage: () => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wie funktioniert Leadgenerierung für Immobilienmakler?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Leadgenerierung für Immobilienmakler funktioniert durch gezielte digitale Marketingstrategien, die potenzielle Verkäufer und Käufer ansprechen. Wir nutzen Social Media Marketing, SEO-optimierte Landing Pages und datengetriebene Kampagnen, um qualifizierte Leads zu generieren. Der Prozess beginnt mit der Zielgruppenanalyse, gefolgt von der Erstellung relevanter Inhalte und der Schaltung gezielter Werbeanzeigen. Durch kontinuierliche Optimierung und A/B-Testing erreichen wir Conversion-Raten von durchschnittlich 15-25%.'
        }
      },
      {
        '@type': 'Question',
        name: 'Was kostet professionelle Leadgenerierung in Deutschland, Österreich und der Schweiz?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die Kosten für professionelle Leadgenerierung variieren je nach Zielgruppe und Umfang. Für Immobilienmakler empfehlen wir ein monatliches Werbebudget von mindestens 2.000€ plus Betreuungsgebühr. Finanzberater können bereits mit 1.500€ monatlich starten. Diese Investition amortisiert sich schnell: Ein einziger erfolgreicher Immobilienabschluss oder Finanzberatungsauftrag bringt ein Vielfaches der Investition zurück. Unsere Kunden erzielen durchschnittlich einen ROI von 300-500%.'
        }
      },
      {
        '@type': 'Question',
        name: 'Welche Unterschiede gibt es bei der Leadgenerierung in Deutschland, Österreich und der Schweiz?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die Leadgenerierung erfordert länderspezifische Anpassungen. In Deutschland funktionieren Facebook und Instagram Ads besonders gut, während in der Schweiz LinkedIn für Finanzdienstleister effektiver ist. Österreich zeigt starke Resonanz auf lokale Inhalte und regionale Bezüge. Die Compliance-Anforderungen variieren: Deutschland hat strenge DSGVO-Vorgaben, die Schweiz zusätzliche Datenschutzbestimmungen. Unsere Kampagnen werden für jedes Land individuell optimiert, um maximale Conversion-Raten zu erzielen.'
        }
      },
      {
        '@type': 'Question',
        name: 'Wie erreiche ich als Immobilienmakler qualifizierte Verkäufer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Qualifizierte Verkäufer erreichen Sie durch gezielte digitale Kampagnen, die auf Immobilienbesitzer mit Verkaufsabsicht ausgerichtet sind. Nutzen Sie Social Media Targeting basierend auf Immobilienbesitz, Alter und Lebenssituation. Erstellen Sie Inhalte, die typische Verkäufer-Sorgen adressieren: Wertermittlung, optimaler Verkaufszeitpunkt, Dokumentation. Unsere Kampagnen generieren durchschnittlich 15-25 qualifizierte Verkäufer-Leads pro Monat.'
        }
      },
      {
        '@type': 'Question',
        name: 'Welche Leadkosten sind 2025 typisch für Immobilienmakler?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die Leadkosten für Immobilienmakler variieren 2025 je nach Region: In Deutschland liegen qualifizierte Verkäufer-Leads bei 40-80€, Käufer-Leads bei 20-40€. In Österreich und der Schweiz sind die Kosten höher (80-150€ für Verkäufer). Bei durchschnittlichen Provisionen von 5.000-15.000€ pro Abschluss amortisiert sich die Investition bereits beim ersten erfolgreichen Deal.'
        }
      }
    ]
  }),

  // New LocalBusiness schema for city pages
  localBusiness: (city: string, country: string, countryCode: string) => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://nextmove-digital.de/${countryCode.toLowerCase()}/${city.toLowerCase().replace(/ü/g, 'ue').replace(/ö/g, 'oe').replace(/ä/g, 'ae')}`,
    name: `NextMove Digital - ${city}`,
    description: `Leadgenerierung und Performance Marketing für Immobilienmakler und Finanzberater in ${city}, ${country}`,
    url: `https://nextmove-digital.de/${countryCode.toLowerCase()}/${city.toLowerCase().replace(/ü/g, 'ue').replace(/ö/g, 'oe').replace(/ä/g, 'ae')}`,
    image: 'https://nextmove-digital.de/Logonextmove.webp',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressCountry: countryCode
    },
    areaServed: {
      '@type': 'City',
      name: city,
      addressCountry: countryCode
    },
    serviceType: [
      'Leadgenerierung',
      'Performance Marketing',
      'Social Media Marketing',
      'Immobilienmakler Marketing',
      'Finanzberater Akquise'
    ],
    priceRange: '€€',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      reviewCount: 127,
      bestRating: 5,
      worstRating: 1
    }
  })
};

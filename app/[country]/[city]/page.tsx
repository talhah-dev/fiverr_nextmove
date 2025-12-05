import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import { JsonLd, schemas } from '@/components/SEO/JsonLd';

interface CityInfo {
  name: string;
  description: string;
  marketInfo: string;
  caseStudy: {
    client: string;
    increase: string;
    timeframe: string;
    details: string;
  };
  testimonial: {
    text: string;
    author: string;
    company: string;
  };
}

// City data with unique local content
const cityData: Record<string, Record<string, CityInfo>> = {
  de: {
    berlin: {
      name: 'Berlin',
      description: 'Deutschlands Hauptstadt mit über 3,7 Millionen Einwohnern',
      marketInfo: 'Mit über 8.000 Finanzberatern und 2.500 Immobilienmaklern ist Berlin der größte Markt Deutschlands.',
      caseStudy: {
        client: 'Berliner Finanzberatung Schmidt',
        increase: '+340%',
        timeframe: '6 Monate',
        details: 'Steigerung qualifizierter Leads von 12 auf 53 pro Monat durch LinkedIn Marketing'
      },
      testimonial: {
        text: 'NextMove Digital hat unsere Leadgenerierung revolutioniert. Endlich erhalten wir qualifizierte Anfragen ohne teure Google Ads.',
        author: 'Thomas Schmidt',
        company: 'Finanzberatung Schmidt Berlin'
      }
    },
    muenchen: {
      name: 'München',
      description: 'Bayerns Wirtschaftszentrum mit 1,5 Millionen Einwohnern',
      marketInfo: 'München hat mit durchschnittlich 850.000€ die höchsten Immobilienpreise Deutschlands - entsprechend lukrative Provisionen.',
      caseStudy: {
        client: 'Münchener Immobilien Konzept',
        increase: '+280%',
        timeframe: '4 Monate',
        details: 'Von 8 auf 30 qualifizierte Immobilien-Leads monatlich durch Social Media Marketing'
      },
      testimonial: {
        text: 'Die Qualität der Leads ist beeindruckend. Wir schließen 40% mehr Verträge ab als früher.',
        author: 'Maria Huber',
        company: 'Immobilien Konzept München'
      }
    },
    hamburg: {
      name: 'Hamburg',
      description: 'Norddeutschlands Metropole mit 1,9 Millionen Einwohnern',
      marketInfo: 'Hamburg ist der zweitgrößte Immobilienmarkt Deutschlands mit starkem Wachstum im Bereich Hafencity.',
      caseStudy: {
        client: 'Hanseatische Finanzplanung',
        increase: '+190%',
        timeframe: '5 Monate',
        details: 'Verdreifachung der monatlichen Beratungstermine durch strategisches Content Marketing'
      },
      testimonial: {
        text: 'Endlich eine Agentur, die unsere Branche versteht. Die Leads sind hochwertig und konversionsbereit.',
        author: 'Klaus Meyer',
        company: 'Hanseatische Finanzplanung'
      }
    }
  },
  at: {
    wien: {
      name: 'Wien',
      description: 'Österreichs Hauptstadt mit 1,9 Millionen Einwohnern',
      marketInfo: 'Wien vereint 40% aller österreichischen Finanzdienstleister und ist Zentrum des Immobilienmarktes.',
      caseStudy: {
        client: 'Wiener Vermögensberatung Klassik',
        increase: '+250%',
        timeframe: '4 Monate',
        details: 'Steigerung von Neukunden-Terminen von 15 auf 52 monatlich durch LinkedIn Automatisierung'
      },
      testimonial: {
        text: 'NextMove Digital kennt den österreichischen Markt perfekt. Unsere Conversion-Rate hat sich verdoppelt.',
        author: 'Dr. Andreas Müller',
        company: 'Vermögensberatung Klassik Wien'
      }
    }
  },
  ch: {
    zuerich: {
      name: 'Zürich',
      description: 'Schweizer Finanzmetropole mit 434.000 Einwohnern',
      marketInfo: 'Zürich beherbergt 60% aller Schweizer Privatbanken und hat den aktivsten Immobilienmarkt der Schweiz.',
      caseStudy: {
        client: 'Zürcher Anlageberatung Premium',
        increase: '+320%',
        timeframe: '6 Monate',
        details: 'Steigerung Vermögensverwaltungs-Mandate von CHF 2.4M auf CHF 10.1M durch gezielte UHNW-Ansprache'
      },
      testimonial: {
        text: 'Die Schweizer Compliance-Anforderungen wurden perfekt berücksichtigt. Exzellente Resultate.',
        author: 'Dr. Beat Zimmermann',
        company: 'Anlageberatung Premium Zürich'
      }
    },
    genf: {
      name: 'Genf',
      description: 'Internationales Finanzzentrum mit 203.000 Einwohnern',
      marketInfo: 'Genf ist Sitz von 120 internationalen Banken und hat die höchste Millionärsdichte der Schweiz.',
      caseStudy: {
        client: 'Geneva Wealth Management',
        increase: '+280%',
        timeframe: '5 Monate',
        details: 'Internationale Kundenbasis von 45 auf 171 HNW-Klienten durch mehrsprachiges Marketing'
      },
      testimonial: {
        text: 'Outstanding results in the Geneva market. Professional approach to international wealth management.',
        author: 'Jean-Pierre Dubois',
        company: 'Geneva Wealth Management'
      }
    }
  }
};

const faqs = {
  de: [
    {
      question: 'Wie funktioniert Lead-Generierung ohne Google Ads?',
      answer: 'Wir nutzen LinkedIn Marketing, Facebook Ads, Content Marketing und SEO um qualifizierte Leads zu generieren. Diese Kanäle sind oft kostengünstiger und zielgerichteter als Google Ads.'
    },
    {
      question: 'Welche Kosten entstehen für die Lead-Generierung?',
      answer: 'Unsere Preise richten sich nach dem Performance-Modell. Sie zahlen nur für qualifizierte Leads, die tatsächlich zu Terminen führen. Durchschnittlich 50-80€ pro Lead.'
    },
    {
      question: 'Wie lange dauert es bis erste Ergebnisse sichtbar sind?',
      answer: 'In der Regel sehen Sie erste qualifizierte Leads bereits nach 2-3 Wochen. Die volle Performance erreichen wir meist nach 6-8 Wochen Optimierung.'
    },
    {
      question: 'Arbeiten Sie nur mit großen Beratungsunternehmen?',
      answer: 'Nein, wir arbeiten mit Einzelberatern, kleinen Teams und großen Unternehmen. Unsere Lösungen skalieren je nach Kundenbedarf.'
    },
    {
      question: 'Wie messen Sie die Qualität der Leads?',
      answer: 'Wir tracken Terminrate, Abschlussquote und Kundenwert. Nur Leads die zu echten Beratungsterminen führen, werden als qualifiziert gewertet.'
    }
  ],
  at: [
    {
      question: 'Berücksichtigen Sie österreichische Compliance-Vorschriften?',
      answer: 'Ja, alle Marketing-Maßnahmen entsprechen den Vorgaben der FMA und österreichischen Datenschutzbestimmungen. Compliance ist bei uns Standard.'
    },
    {
      question: 'Funktioniert Performance Marketing auch im österreichischen Markt?',
      answer: 'Absolut. Der österreichische Markt reagiert sehr gut auf professionelles LinkedIn Marketing und zielgerichtete Social Media Kampagnen.'
    },
    {
      question: 'Welche Erfahrung haben Sie mit österreichischen Kunden?',
      answer: 'Wir arbeiten seit 3 Jahren erfolgreich mit österreichischen Finanzberatern und Immobilienmaklern. Lokale Marktkenntnis ist unser Vorteil.'
    },
    {
      question: 'Wie hoch sind die durchschnittlichen Lead-Kosten in Österreich?',
      answer: 'In Österreich liegen qualifizierte Leads zwischen 60-90€. Dies ist deutlich günstiger als traditionelle Akquise-Methoden.'
    },
    {
      question: 'Sprechen Sie Deutsch oder nur Englisch?',
      answer: 'Wir sind ein deutschsprachiges Team und kommunizieren ausschließlich auf Deutsch. Alle Kampagnen werden in deutscher Sprache erstellt.'
    }
  ],
  ch: [
    {
      question: 'Entsprechen Ihre Services den Schweizer Finanzmarktgesetzen?',
      answer: 'Ja, alle Marketing-Aktivitäten sind FINMA-konform. Wir kennen die strengen Schweizer Compliance-Anforderungen und setzen sie um.'
    },
    {
      question: 'Arbeiten Sie mit UHNWIs (Ultra High Net Worth Individuals)?',
      answer: 'Ja, wir haben spezielle Strategien für die Ansprache vermögender Privatkunden entwickelt. Diskretion und Professionalität stehen dabei im Vordergrund.'
    },
    {
      question: 'Wie funktioniert Lead-Generierung in der mehrsprachigen Schweiz?',
      answer: 'Wir erstellen Kampagnen in Deutsch und Französisch, je nach Zielregion. Für die italienischsprachige Schweiz arbeiten wir mit lokalen Partnern.'
    },
    {
      question: 'Was kostet Lead-Generierung in der Schweiz?',
      answer: 'Schweizer Leads liegen zwischen CHF 80-150 pro qualifiziertem Lead. Höhere Kosten, aber auch deutlich höhere Kundenwerte rechtfertigen dies.'
    },
    {
      question: 'Haben Sie Erfahrung mit Schweizer Privatbanken?',
      answer: 'Ja, wir arbeiten mit mehreren Privatbanken und Family Offices. Vertraulichkeit und white-glove Service sind unser Standard.'
    }
  ]
};

type Country = keyof typeof cityData;
type City<T extends Country> = keyof typeof cityData[T];

export async function generateStaticParams() {
  const params: Array<{ country: string; city: string }> = [];
  
  Object.entries(cityData).forEach(([country, cities]) => {
    Object.keys(cities).forEach(city => {
      params.push({ country, city });
    });
  });
  
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; city: string }>;
}): Promise<Metadata> {
  const { country, city } = await params;
  
  if (!cityData[country as Country]) {
    return {
      title: 'Seite nicht gefunden',
    };
  }

  const countryData = cityData[country as Country];
  const cityInfo = countryData[city as keyof typeof countryData];
  
  if (!cityInfo) {
    return {
      title: 'Seite nicht gefunden',
    };
  }

  const countryNames = { de: 'Deutschland', at: 'Österreich', ch: 'Schweiz' };
  
  return {
    title: `Finanzberater & Immobilienmakler Leads ${cityInfo.name} | NextMove Digital`,
    description: `Lead-Generierung für Finanzberater und Immobilienmakler in ${cityInfo.name}. Performance Marketing ohne hohe Werbekosten. Qualifizierte Leads garantiert.`,
    alternates: {
      canonical: `https://nextmove-digital.de/${country}/${city}`,
      languages: {
        'de-DE': 'https://nextmove-digital.de/de',
        'de-AT': 'https://nextmove-digital.de/at', 
        'de-CH': 'https://nextmove-digital.de/ch'
      }
    },
    openGraph: {
      title: `Lead-Generierung ${cityInfo.name} | NextMove Digital`,
      description: `Performance Marketing für Finanzberater und Immobilienmakler in ${cityInfo.name}`,
      url: `https://nextmove-digital.de/${country}/${city}`,
    }
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ country: string; city: string }>;
}) {
  const { country, city } = await params;
  
  if (!cityData[country as Country]) {
    notFound();
  }

  const countryData = cityData[country as Country];
  const cityInfo = countryData[city as keyof typeof countryData];
  
  if (!cityInfo) {
    notFound();
  }

  const countryNames = { de: 'Deutschland', at: 'Österreich', ch: 'Schweiz' };
  const cityFaqs = faqs[country as keyof typeof faqs] || faqs.de;

  const breadcrumbs = [
    { name: 'Home', url: 'https://nextmove-digital.de' },
    { name: countryNames[country as keyof typeof countryNames], url: `https://nextmove-digital.de/${country}` },
    { name: cityInfo.name, url: `https://nextmove-digital.de/${country}/${city}` }
  ];

  return (
    <>
      <JsonLd data={schemas.service(cityInfo.name, country)} />
      <JsonLd data={schemas.faqPage(cityFaqs)} />
      <JsonLd data={schemas.breadcrumbList(breadcrumbs)} />

      <Header />
      
      <main className="flex min-h-screen flex-col bg-black">
        <div className="container mx-auto px-4 py-16 flex-grow">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Lead-Generierung für Finanzberater in{' '}
              <span className="bg-gradient-to-r from-[#ff8040] to-[#ff5500] bg-clip-text text-transparent">
                {cityInfo.name}
              </span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-8">
              {cityInfo.description}. Performance Marketing für qualifizierte Leads ohne hohe Werbekosten.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left">
              <p className="text-gray-300">{cityInfo.marketInfo}</p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Für Finanzberater</h2>
              <ul className="space-y-3 text-gray-300">
                <li>• LinkedIn Lead-Generierung</li>
                <li>• Automatisierte Kundenakquise</li>
                <li>• Content Marketing Strategie</li>
                <li>• Performance-basierte Abrechnung</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Für Immobilienmakler</h2>
              <ul className="space-y-3 text-gray-300">
                <li>• Social Media Marketing</li>
                <li>• Verkäufer & Käufer Leads</li>
                <li>• Lokale SEO Optimierung</li>
                <li>• ROI-nachweisbare Resultate</li>
              </ul>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-r from-[#ff8040]/10 to-[#ff5500]/10 border border-orange-500/20 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6">Erfolgsgeschichte aus {cityInfo.name}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">{cityInfo.caseStudy.increase}</div>
                <div className="text-gray-300">Mehr Leads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">{cityInfo.caseStudy.timeframe}</div>
                <div className="text-gray-300">Zeitrahmen</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-white mb-2">{cityInfo.caseStudy.client}</div>
                <div className="text-gray-300 text-sm">{cityInfo.caseStudy.details}</div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-16">
            <blockquote className="text-lg text-gray-300 mb-6 italic">
              "{cityInfo.testimonial.text}"
            </blockquote>
            <div className="text-white font-semibold">{cityInfo.testimonial.author}</div>
            <div className="text-gray-400 text-sm">{cityInfo.testimonial.company}</div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Häufige Fragen zur Lead-Generierung in {cityInfo.name}
            </h2>
            <div className="space-y-6">
              {cityFaqs.map((faq, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#ff8040] to-[#ff5500] rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">
              Bereit für mehr Leads in {cityInfo.name}?
            </h2>
            <p className="text-white/90 mb-6">
              Kostenloses Strategiegespräch - analysieren Sie Ihr Potenzial
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-orange-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Termin vereinbaren
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Link 
              href={`/${country}`}
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              ← Zurück zu {countryNames[country as keyof typeof countryNames]}
            </Link>
            <Link 
              href="/"
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              Hauptseite →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

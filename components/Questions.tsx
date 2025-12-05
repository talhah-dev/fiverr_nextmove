"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Questions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: "Wie generiere ich als Immobilienmakler effektiv neue Leads?",
      answer: "Erfolgreiche Leadgenerierung für Immobilienmakler basiert heute auf mehreren Säulen: Erstens, nutzen Sie Social Media-Plattformen wie Facebook und Instagram für zielgerichtete Anzeigen. Zweitens, optimieren Sie Ihre Online-Präsenz mit einer professionellen Website und SEO. Drittens, setzen Sie auf Content-Marketing mit Mehrwert für potenzielle Kunden. Bei professioneller Umsetzung sehen unsere Kunden oft schon nach 2-3 Wochen die ersten qualifizierten Leads, mit deutlicher Steigerung nach 4-6 Wochen dank kontinuierlicher Datenoptimierung."
    },
    {
      question: "Wie erreiche ich als Immobilienmakler qualifizierte Verkäufer?",
      answer: "Qualifizierte Verkäufer erreichen Sie durch gezielte digitale Kampagnen, die auf Immobilienbesitzer mit Verkaufsabsicht ausgerichtet sind. Nutzen Sie Social Media Targeting basierend auf Immobilienbesitz, Alter und Lebenssituation. Erstellen Sie Inhalte, die typische Verkäufer-Sorgen adressieren: Wertermittlung, optimaler Verkaufszeitpunkt, Dokumentation. Unsere Kampagnen generieren durchschnittlich 15-25 qualifizierte Verkäufer-Leads pro Monat, mit Conversion-Raten von 20-30% zu Beratungsgesprächen."
    },
    {
      question: "Wie verkaufe ich meine Immobilien schneller und zu besseren Preisen?",
      answer: "Für schnellere Immobilienverkäufe zu besseren Preisen sind drei Faktoren entscheidend: Erstens, eine professionelle Präsentation mit hochwertigen Fotos, Videos und virtuellen Rundgängen. Zweitens, eine präzise Preisgestaltung basierend auf Marktanalysen. Drittens, die gezielte Ansprache der richtigen Käuferzielgruppe über digitale Kanäle. Unsere spezialisierten Marketingstrategien helfen Immobilienprofis, genau die Käufer zu erreichen, die aktiv nach Ihren Angeboten suchen, was zu schnelleren Abschlüssen und besseren Konditionen führt."
    },
    {
      question: "Wie gewinne ich als Finanzberater qualifizierte Neukunden?",
      answer: "Die Neukundengewinnung für Finanzberater erfordert heute eine strategische digitale Präsenz: Erstens, setzen Sie auf LinkedIn für die B2B-Leadgenerierung mit gezieltem Content und Networking. Zweitens, nutzen Sie personalisierte E-Mail-Kampagnen mit wertvollen Finanzinformationen. Drittens, etablieren Sie sich als Experte durch Webinare und digitale Beratungsangebote. Unsere Kunden profitieren von einem transparenten Reporting-System, das genau zeigt, welche Strategien die besten Leads generieren. Für die optimale Betreuung dieser Leads bieten wir zusätzlich Gesprächsleitfäden und Nachverfolgungs-Tipps."
    },
    {
      question: "Was kostet professionelle Leadgenerierung für Immobilienmakler?",
      answer: "Für effektive Leadgenerierung im Immobilienbereich empfehlen wir ein Werbebudget von mindestens 2.000€ monatlich plus unsere Betreuungsgebühr. Diese Investition rentiert sich schnell: Ein einziger erfolgreicher Immobilienabschluss bringt Ihnen ein Vielfaches davon ein. Unsere Kunden erzielen durchschnittlich 30-50 qualifizierte Leads pro Monat, was zu 5-10 Besichtigungsterminen und 1-3 Abschlüssen führt. Wir können auch individuelle Lösungen entwickeln – manchmal ist es sinnvoll, kleiner zu starten und dann mit nachgewiesenem ROI zu skalieren."
    },
    {
      question: "Wie steigere ich meine Sichtbarkeit als Immobilienmakler im Internet?",
      answer: "Die digitale Sichtbarkeit für Immobilienmakler lässt sich durch mehrere Strategien deutlich erhöhen: Erstens, lokale SEO-Optimierung Ihrer Website für relevante Suchbegriffe in Ihrer Region. Zweitens, regelmäßige Erstellung von hochwertigem Content zu Immobilienthemen. Drittens, aktives Management Ihrer Google Business-Präsenz mit Kundenbewertungen. Viertens, strategisches Social-Media-Marketing auf Instagram und Facebook. Wir übernehmen den kompletten technischen Teil dieser Strategien – von der SEO-Optimierung über Content-Erstellung bis zur Kampagnensteuerung, damit Sie sich auf Ihr Kerngeschäft konzentrieren können."
    },
    {
      question: "Wie nutze ich LinkedIn erfolgreich für die Kundenakquise?",
      answer: "LinkedIn ist heute eines der effektivsten Tools für B2B-Leadgenerierung, besonders für Finanz- und Immobilienprofis. Erfolgreiche Strategien umfassen: Erstens, die Optimierung Ihres persönlichen Profils mit Fokus auf Kundennutzen. Zweitens, gezieltes Content-Marketing mit Branchenexpertise. Drittens, systematisches Networking mit Ihrer Zielgruppe. Viertens, automatisierte aber personalisierte Kontaktanfragen. Unsere LinkedIn-Automation-Lösungen ermöglichen es Ihnen, täglich 20-30 qualifizierte Kontakte zu knüpfen und Ihr Netzwerk strategisch zu erweitern, ohne selbst Zeit investieren zu müssen."
    },
    {
      question: "Welche Leadkosten sind 2025 typisch für Immobilienmakler?",
      answer: "Die Leadkosten für Immobilienmakler variieren 2025 je nach Region und Kampagnenart: In Deutschland liegen qualifizierte Verkäufer-Leads bei 40-80€, Käufer-Leads bei 20-40€. In Österreich und der Schweiz sind die Kosten höher (80-150€ für Verkäufer). Entscheidend ist nicht der einzelne Lead-Preis, sondern der ROI: Bei durchschnittlichen Provisionen von 5.000-15.000€ pro Abschluss amortisiert sich die Investition bereits beim ersten erfolgreichen Deal. Unsere Kunden erreichen Conversion-Raten von 15-25%."
    },
    {
      question: "Wie funktioniert Social Media Akquise für Makler?",
      answer: "Social Media Akquise für Makler funktioniert durch strategisches Targeting auf Facebook und Instagram: Wir definieren Ihre Zielgruppe präzise nach Demografie, Interessen und Verhalten. Durch ansprechende Anzeigen mit Immobilien-Content und klaren Call-to-Actions generieren wir qualifizierte Leads. Der Vorteil gegenüber Google Ads: Niedrigere Kosten pro Lead und bessere Skalierbarkeit. Unsere Kampagnen erreichen durchschnittlich 30-50 Leads pro Monat bei einem Werbebudget von 2.000-3.000€."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl">
            Häufig gestellte{" "}
            <span className="relative">
              <span className="relative z-10">Fragen</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ff8040] to-[#ff5500]" />
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-400">
            Alles, was du über erfolgreiche Leadgenerierung für Finanzberater
            und Immobilienmakler wissen musst
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-lg border border-white/10 bg-black transition-all duration-200 hover:border-[#ff5500]/50"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className="flex text-left text-lg font-semibold text-white">
                    {item.question}
                  </span>

                  {isOpen ? (
                    <ChevronUp className="h-6 w-6 text-[#ff5500]" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                  )}
                </button>

                {/* animated content */}
                <div
                  className={`
                    px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-out
                    ${isOpen ? "pb-5 sm:pb-6" : "pb-0 sm:pb-0"}
                  `}
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 
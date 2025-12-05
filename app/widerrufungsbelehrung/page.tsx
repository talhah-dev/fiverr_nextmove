import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Widerrufsbelehrung | Nextmove Digital GmbH',
  description: 'Widerrufsbelehrung und Muster-Widerrufsformular für Verbraucher der Nextmove Digital GmbH gemäß § 312g BGB.',
  alternates: {
    canonical: '/widerrufungsbelehrung',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Widerrufsbelehrung() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Header />
      <div className="container mx-auto px-4 pt-36 pb-20 flex-grow">
        <div className="max-w-4xl mx-auto bg-black/50 p-8 rounded-xl border border-white/10">
          <h1 className="text-3xl font-bold text-white mb-8">Widerrufsbelehrung</h1>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Widerrufsrecht für Verbraucher</h2>

              <p className="mb-4 italic">
                <em>Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können.</em>
              </p>

              <p className="mb-4">
                Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses.
              </p>

              <p className="mb-4">
                Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Nextmove Digital GmbH, i. Gr, Papenstraße 23, 22089 Hamburg, Telefon: +49 176 32408924, E-Mail: info@nextmove-digital.de) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
              </p>

              <p className="mb-6">
                Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Folgen des Widerrufs</h2>

              <p className="mb-4">
                Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
              </p>

              <p className="mb-6">
                Haben Sie verlangt, dass die Dienstleistung während der Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
              </p>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10">
            <Link href="/" className="text-[#ff5500] hover:underline">
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

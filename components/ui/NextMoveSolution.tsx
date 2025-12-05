import { GradientCard } from './gradient-card';
import { BorderBeam } from "./border-beam";

const features = [
    { 
      icon: 'Zap', 
      title: "Automatisiert", 
      description: "Automatisierte Workflows sparen Ihnen Zeit und steigern die Effizienz." 
    },
    { 
      icon: 'Cpu', 
      title: "Leistungsstark", 
      description: "Verwalten Sie all Ihre Kundendaten und -interaktionen an einem Ort." 
    },
    { 
      icon: 'Lock', 
      title: "Sicher & DSGVO-konform", 
      description: "Ihre Daten sind bei uns sicher und nach höchsten Standards geschützt." 
    },
    { 
      icon: 'Sparkles', 
      title: "KI-gestützt", 
      description: "Nutzen Sie künstliche Intelligenz für bessere Einblicke und optimierte Prozesse." 
    }
];

export function NextMoveSolution() {
    return (
        <section className="py-16 md:py-32 bg-black text-white">
            <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
                <div className="relative z-10 text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-normal text-white" style={{fontFamily: 'Inter, Inter Placeholder, sans-serif'}}>
                        Ihr eigenes <span className="text-[#ff5500]">NextMove-Kundenportal</span>
                    </h2>
                    <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-300" style={{fontFamily: 'Inter, Inter Placeholder, sans-serif'}}>
                        Das All-in-One-Tool für Ihren Erfolg: DSGVO-konformes CRM, Lead-Management, Performance-Tracking und automatisierte Workflows – alles an einem Ort.
                    </p>
                </div>
                
                <div className="relative rounded-2xl border border-orange-500/20 bg-gray-900/50 p-4 md:p-6 shadow-2xl shadow-orange-500/10">
                    <BorderBeam colorFrom="#ff5500" colorTo="#ff8040" />
                    <div className="aspect-video relative rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t z-1 from-black/50 via-transparent to-black/20"></div>
                        <img 
                            src="/nextmoveportal.webp" 
                            className="absolute inset-0 w-full h-full object-cover z-0" 
                            alt="NextMove Kundenportal Dashboard" 
                        />
                         <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
                   {features.map((feature, index) => (
                       <GradientCard key={index} feature={feature} />
                   ))}
                </div>
            </div>
        </section>
    )
} 
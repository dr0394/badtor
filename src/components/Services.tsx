import { motion } from 'framer-motion';
import { Sparkles, Building2, Stethoscope, Home, Hammer, Hotel, ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useState } from 'react';
import ServiceModal from './ServiceModal';

interface ServicesProps {
  onOpenQuoteModal: () => void;
}

const Services = ({ onOpenQuoteModal }: ServicesProps) => {
  const isMobile = useReducedMotion();
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      icon: Sparkles,
      title: 'Glas- & Fensterreinigung',
      shortDesc: 'Kristallklare Fenster für mehr Durchblick',
      fullDesc: 'Professionelle Glas- und Fensterreinigung für Privat- und Geschäftskunden. Streifenfreie Ergebnisse und strahlende Sauberkeit für alle Glasflächen.',
      image: 'https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Fensterreinigung buchen',
      details: [
        'Innen- und Außenreinigung aller Fenster',
        'Rahmen- und Fensterbankpflege',
        'Entfernung hartnäckiger Verschmutzungen',
        'Streifenfreie Reinigung',
        'Auch für schwer zugängliche Fenster',
        'Regelmäßige Wartungsverträge möglich',
        'Umweltfreundliche Reinigungsmittel'
      ],
      benefits: [
        'Kristallklare Sicht',
        'Mehr Lichteinfall',
        'Professionelles Ergebnis',
        'Zeitersparnis',
        'Sichere Arbeit auch in der Höhe',
        'Flexible Terminvereinbarung'
      ]
    },
    {
      icon: Building2,
      title: 'Büro & Unterhaltsreinigung',
      shortDesc: 'Saubere Arbeitsumgebung für produktives Arbeiten',
      fullDesc: 'Regelmäßige und zuverlässige Büroreinigung für ein gepflegtes Arbeitsumfeld. Wir sorgen für Sauberkeit und Hygiene in Ihren Geschäftsräumen.',
      image: 'https://images.pexels.com/photos/4239039/pexels-photo-4239039.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Büroreinigung anfragen',
      details: [
        'Tägliche oder wöchentliche Reinigung',
        'Staubsaugen und Bodenpflege',
        'Schreibtisch- und Oberflächenreinigung',
        'Sanitärreinigung und -desinfektion',
        'Papierkorb-Entleerung',
        'Küchen- und Pausenraumreinigung',
        'Individuelle Reinigungspläne'
      ],
      benefits: [
        'Gesundes Arbeitsklima',
        'Professioneller Eindruck',
        'Erhöhte Mitarbeiterzufriedenheit',
        'Flexible Reinigungszeiten',
        'Zuverlässiger Service',
        'Transparente Preisgestaltung'
      ]
    },
    {
      icon: Stethoscope,
      title: 'Praxis- & Kanzleienreinigung',
      shortDesc: 'Hygiene und Sauberkeit für höchste Ansprüche',
      fullDesc: 'Spezialisierte Reinigung für Arztpraxen, Kanzleien und professionelle Büros. Höchste Hygienestandards und diskrete Arbeitsweise.',
      image: 'https://images.pexels.com/photos/4107283/pexels-photo-4107283.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Praxisreinigung planen',
      details: [
        'Desinfektion nach medizinischen Standards',
        'Wartezimmer und Behandlungsräume',
        'Sanitäre Anlagen nach Hygienevorschriften',
        'Empfangsbereich und Flure',
        'Diskrete Arbeitsweise außerhalb der Öffnungszeiten',
        'Spezielle Reinigung medizinischer Geräte',
        'Dokumentierte Reinigungsprotokolle'
      ],
      benefits: [
        'Höchste Hygienestandards',
        'Vertrauensvolle Zusammenarbeit',
        'Fachgerechte Desinfektion',
        'Patientensicherheit',
        'Einhaltung aller Vorschriften',
        'Zertifizierte Reinigung'
      ]
    },
    {
      icon: Home,
      title: 'Treppenhausreinigung',
      shortDesc: 'Saubere und gepflegte Eingangsbereiche',
      fullDesc: 'Regelmäßige Treppenhausreinigung für Wohngebäude und Mehrfamilienhäuser. Für einen einladenden ersten Eindruck.',
      image: 'https://images.pexels.com/photos/1904769/pexels-photo-1904769.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Treppenhausreinigung buchen',
      details: [
        'Treppenstufen und Handläufe',
        'Fußleisten und Fensterbänke',
        'Briefkästen und Klingelschilder',
        'Eingangsbereiche und Flure',
        'Aufzüge und Fahrstühle',
        'Keller- und Dachbodenzugänge',
        'Wöchentliche oder 14-tägige Reinigung'
      ],
      benefits: [
        'Gepflegter Eingangsbereich',
        'Erhöhte Wohnqualität',
        'Wertsteigerung der Immobilie',
        'Zufriedene Mieter',
        'Regelmäßige Pflege',
        'Faire Preise'
      ]
    },
    {
      icon: Hammer,
      title: 'Bau- & Grundreinigung',
      shortDesc: 'Nach der Baustelle kommt die Sauberkeit',
      fullDesc: 'Professionelle Endreinigung nach Bau- und Renovierungsarbeiten. Wir entfernen Baustaub und -schmutz gründlich und hinterlassen bezugsfertige Räume.',
      image: 'https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Baureinigung anfragen',
      details: [
        'Grobe und feine Bauendreinigung',
        'Entfernung von Farb- und Kleberesten',
        'Fenster- und Rahmenreinigung',
        'Boden- und Fliesenreinigung',
        'Sanitäreinrichtungen reinigen',
        'Entfernung von Baustaub und Schmutz',
        'Grundreinigung vor Bezug'
      ],
      benefits: [
        'Bezugsfertige Räume',
        'Gründliche Reinigung',
        'Professionelle Ausrüstung',
        'Schnelle Abwicklung',
        'Erfahrung mit Baustellen',
        'Zuverlässige Durchführung'
      ]
    },
    {
      icon: Hotel,
      title: 'Hotel- & Ferienwohnung',
      shortDesc: 'Perfekte Sauberkeit für Ihre Gäste',
      fullDesc: 'Spezialisierte Reinigung für Hotels, Pensionen und Ferienwohnungen. Schneller Wechselservice und höchste Qualitätsstandards für zufriedene Gäste.',
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Hotelreinigung besprechen',
      details: [
        'Zimmerreinigung zwischen Gästen',
        'Bettwäsche und Handtuchwechsel',
        'Badezimmerreinigung und -desinfektion',
        'Staubsaugen und Bodenpflege',
        'Auffüllen von Amenities',
        'Küchen- und Gemeinschaftsräume',
        'Flexibler Check-in/Check-out Service'
      ],
      benefits: [
        'Zufriedene Gäste',
        'Positive Bewertungen',
        'Schneller Wechselservice',
        'Höchste Sauberkeitsstandards',
        'Flexible Einsatzzeiten',
        'Erfahrung im Gastgewerbe'
      ]
    },
  ];

  const handleRequestQuote = (serviceName: string) => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-tor-teal/10 border border-tor-teal/30 px-5 py-2 rounded-full mb-6">
              <span className="text-tor-teal font-light text-xs tracking-[0.2em] uppercase">Unsere Leistungen</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6">
              Professionelle Reinigung
              <br />
              <span className="text-tor-teal font-normal italic">für jeden Bedarf</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 font-light leading-relaxed">
              Von Fensterreinigung bis zur Hotelreinigung – wir bieten Ihnen das komplette Leistungsspektrum aus einer Hand
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedService(service)}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-tor-teal hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-tor-teal stroke-[1.5]" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-normal tracking-tight text-gray-900 group-hover:text-tor-teal transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed mb-4 line-clamp-2">
                    {service.shortDesc}
                  </p>
                  <div className="flex items-center text-tor-teal text-sm font-normal group-hover:gap-2 transition-all">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-tor-teal/5 to-tor-teal/10 border border-tor-teal/20 rounded-2xl p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-light tracking-tight mb-4 text-gray-900">
                Haben Sie spezielle Anforderungen?
              </h3>
              <p className="text-base text-gray-600 font-light leading-relaxed mb-6 max-w-2xl mx-auto">
                Kontaktieren Sie uns für eine individuelle Beratung und kostenloses Angebot. Wir erstellen Ihnen ein maßgeschneidertes Reinigungskonzept.
              </p>
              <motion.button
                whileHover={isMobile ? {} : { scale: 1.02 }}
                whileTap={isMobile ? {} : { scale: 0.98 }}
                onClick={onOpenQuoteModal}
                className="bg-tor-teal hover:bg-tor-teal-light text-white px-10 py-4 rounded-md font-normal text-sm tracking-wide transition-all inline-flex items-center gap-2 shadow-lg"
              >
                Jetzt Angebot anfordern
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        onRequestQuote={onOpenQuoteModal}
        service={selectedService}
      />
    </>
  );
};

export default Services;

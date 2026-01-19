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
      image: 'https://images.pexels.com/photos/18885426/pexels-photo-18885426.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      image: 'https://images.pexels.com/photos/10567236/pexels-photo-10567236.jpeg',
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
      image: '/praxisreinigung.png',
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
      image: '/treppenhausreinigung.png',
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
      image: '/grundreinigung.png',
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
      image: '/hotelreinigung.png',
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
      <section id="services" className="py-24 bg-gradient-to-br from-clean-sky via-white to-clean-ice relative overflow-hidden">
        <div className="absolute inset-0 texture-dots opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-clean-aqua/15 border-3 border-clean-aqua px-6 py-3 rounded-xl mb-6">
              <span className="text-clean-aqua font-bold text-xs tracking-[0.3em] uppercase">Unsere Leistungen</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-clean-navy font-roboto">
              Professionelle Reinigung
              <br />
              <span className="text-clean-aqua">für jeden Bedarf</span>
            </h2>
            <p className="text-base sm:text-lg text-clean-blue max-w-3xl mx-auto px-4 font-bold leading-relaxed">
              Von Fensterreinigung bis zur Hotelreinigung – wir bieten Ihnen das komplette Leistungsspektrum aus einer Hand
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedService(service)}
                whileHover={isMobile ? {} : { y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl bg-white border-4 border-clean-aqua hover:border-clean-aqua-light hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-clean-blue-dark/90 via-clean-blue/40 to-transparent" />
                  <div className="absolute top-4 right-4 w-14 h-14 bg-clean-aqua backdrop-blur-sm rounded-xl flex items-center justify-center shadow-xl border-b-4 border-clean-aqua-dark">
                    <service.icon className="w-7 h-7 text-white stroke-[2.5]" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold tracking-tight text-clean-navy group-hover:text-clean-aqua transition-colors mb-2 font-roboto">
                    {service.title}
                  </h3>
                  <p className="text-sm text-clean-blue font-bold leading-relaxed mb-4 line-clamp-2">
                    {service.shortDesc}
                  </p>
                  <div className="flex items-center text-clean-aqua text-sm font-bold group-hover:gap-2 transition-all">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity stroke-[2.5]" />
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
            <div className="bg-gradient-to-r from-clean-aqua/15 via-clean-sky to-clean-aqua/10 border-4 border-clean-aqua rounded-2xl p-8 sm:p-12 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-clean-navy font-roboto">
                Haben Sie spezielle Anforderungen?
              </h3>
              <p className="text-base text-clean-blue font-bold leading-relaxed mb-6 max-w-2xl mx-auto">
                Kontaktieren Sie uns für eine individuelle Beratung und kostenloses Angebot. Wir erstellen Ihnen ein maßgeschneidertes Reinigungskonzept.
              </p>
              <motion.button
                whileHover={isMobile ? {} : { scale: 1.05 }}
                whileTap={isMobile ? {} : { scale: 0.95 }}
                onClick={onOpenQuoteModal}
                className="bg-clean-aqua hover:bg-clean-aqua-light text-white px-10 py-4 rounded-xl font-bold text-base tracking-wide transition-all inline-flex items-center gap-2 shadow-xl border-b-4 border-clean-aqua-dark"
              >
                Jetzt Angebot anfordern
                <ArrowRight className="w-5 h-5" />
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

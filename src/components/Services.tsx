import { motion } from 'framer-motion';
import { Bath, Accessibility, Droplet, Hammer, Shield, ArrowRight } from 'lucide-react';
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
      icon: Accessibility,
      title: 'Barrierefreie Badsanierung',
      shortDesc: 'Sicher und komfortabel für jedes Alter',
      fullDesc: 'Wir machen Ihr Badezimmer barrierefrei und schaffen einen sicheren, komfortablen Raum. Bodengleiche Duschen, breite Türen, Haltegriffe und ergonomische Armaturen sorgen für maximale Sicherheit und Selbstständigkeit.',
      image: 'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Barrierefreies Bad planen',
      details: [
        'Bodengleiche, befahrbare Duschen für Rollstuhl und Rollator',
        'Rutschfeste Bodenbeläge für maximale Sicherheit',
        'Ergonomische Haltegriffe an allen wichtigen Stellen',
        'Unterfahrbare Waschtische',
        'Höhenverstellbare WCs',
        'Schwellenfreie Zugänge',
        'Optimale Beleuchtung für bessere Sicht'
      ],
      benefits: [
        'Mehr Selbstständigkeit im Alltag',
        'Erhöhte Sicherheit und Sturzprävention',
        'Komfort für alle Altersgruppen',
        'Wertsteigerung Ihrer Immobilie',
        'Umsetzung in 3-5 Tagen',
        'Förderungsfähig durch KfW'
      ]
    },
    {
      icon: Droplet,
      title: 'Wanne-zu-Dusche-Umbau',
      shortDesc: 'Aus Ihrer Badewanne wird eine moderne Dusche',
      fullDesc: 'Ersetzen Sie Ihre alte Badewanne durch eine geräumige, ebenerdige Dusche. Perfekt für Senioren und Menschen mit eingeschränkter Mobilität. Der Umbau erfolgt schnell, sauber und ohne große Baumaßnahmen.',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Duschumbau anfragen',
      details: [
        'Entfernung der alten Badewanne',
        'Installation einer bodengleichen Dusche',
        'Montage von Duschkabine oder -vorhang',
        'Rutschfeste Duschböden',
        'Moderne Armaturen und Duschsysteme',
        'Fliesenarbeiten und Abdichtung',
        'Befahrbar mit Rollstuhl oder Rollator'
      ],
      benefits: [
        'Leichter Ein- und Ausstieg',
        'Mehr Bewegungsfreiheit',
        'Geringerer Wasserverbrauch',
        'Modernes Design',
        'Schnelle Umsetzung in 3-5 Tagen',
        'Pflegeleicht und hygienisch'
      ]
    },
    {
      icon: Bath,
      title: 'Komplette Badsanierung',
      shortDesc: 'Ihr Traumbad nach Ihren Wünschen',
      fullDesc: 'Von der Planung bis zur Fertigstellung übernehmen wir die komplette Sanierung Ihres Badezimmers. Maßgeschneiderte Lösungen, hochwertige Materialien und professionelle Handwerkskunst aus einer Hand.',
      image: 'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Komplettsanierung planen',
      details: [
        'Individuelle Planung durch Architekten',
        'Demontage der alten Sanitärinstallationen',
        'Neue Fliesen, Böden und Wandgestaltung',
        'Installation moderner Sanitärobjekte',
        'Elektroarbeiten und Beleuchtung',
        'Lüftung und Heizung',
        'Abschließende Reinigung und Übergabe'
      ],
      benefits: [
        'Alles aus einer Hand',
        'Individuelle Gestaltung',
        'Hochwertige Materialien',
        'Transparente Kostenplanung',
        'Erfahrenes Team',
        'Termingerechte Fertigstellung'
      ]
    },
    {
      icon: Hammer,
      title: 'Teilsanierung & Modernisierung',
      shortDesc: 'Gezielte Verbesserungen für Ihr Bad',
      fullDesc: 'Nicht immer ist eine Komplettsanierung nötig. Wir modernisieren gezielt einzelne Bereiche Ihres Bades – neue Armaturen, Fliesen, Dusche oder Beleuchtung nach Ihren Wünschen.',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Modernisierung besprechen',
      details: [
        'Austausch einzelner Sanitärobjekte',
        'Neue Armaturen und Duschsysteme',
        'Fliesenerneuerung in Teilbereichen',
        'LED-Beleuchtungskonzepte',
        'Neue Waschtische und Unterschränke',
        'Spiegelschränke und Accessoires',
        'Modernisierung der Heizung'
      ],
      benefits: [
        'Kostengünstige Alternative',
        'Schnelle Umsetzung',
        'Gezielte Verbesserungen',
        'Weniger Aufwand',
        'Moderne Optik',
        'Wertsteigerung'
      ]
    },
    {
      icon: Shield,
      title: 'Notfall-Badsanierung',
      shortDesc: 'Schnelle Hilfe bei Wasserschäden',
      fullDesc: 'Bei Wasserschäden oder defekten Leitungen ist schnelles Handeln gefragt. Wir sanieren Ihr Bad nach Wasserschäden professionell und helfen bei der Schadensabwicklung.',
      image: 'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Notfall melden',
      details: [
        'Sofortige Schadensaufnahme',
        'Trocknung der betroffenen Bereiche',
        'Entfernung beschädigter Materialien',
        'Neuinstallation der Sanitäranlagen',
        'Fliesenarbeiten und Abdichtung',
        'Unterstützung bei Versicherungsfragen',
        'Schnellstmögliche Wiederherstellung'
      ],
      benefits: [
        'Schnelle Reaktionszeit',
        'Erfahrung mit Versicherungen',
        'Professionelle Trocknung',
        'Schadensbegrenzung',
        'Komplette Wiederherstellung',
        'Beratung zur Prävention'
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
              Professionelle Badsanierung
              <br />
              <span className="text-tor-teal font-normal italic">für jeden Bedarf</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 font-light leading-relaxed">
              Von barrierefreien Bädern bis zur Komplettmodernisierung – wir bieten Ihnen das komplette Leistungsspektrum aus einer Hand
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
                Kontaktieren Sie uns für eine individuelle Beratung und kostenlosen Vermessungstermin. Wir erstellen Ihnen ein maßgeschneidertes Angebot.
              </p>
              <motion.button
                whileHover={isMobile ? {} : { scale: 1.02 }}
                whileTap={isMobile ? {} : { scale: 0.98 }}
                onClick={onOpenQuoteModal}
                className="bg-tor-teal hover:bg-tor-teal-light text-white px-10 py-4 rounded-md font-normal text-sm tracking-wide transition-all inline-flex items-center gap-2 shadow-lg"
              >
                Jetzt Vermessungstermin buchen
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

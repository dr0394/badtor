import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Ruler, PenTool, Hammer, Key, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface FeaturesProps {
  onOpenQuoteModal: () => void;
}

const Features = ({ onOpenQuoteModal }: FeaturesProps) => {
  const isMobile = useReducedMotion();

  const steps = [
    {
      icon: Phone,
      title: 'Beratung & Bedarfsermittlung',
      description: 'Persönliches Gespräch zur Analyse Ihrer Anforderungen und Wünsche für Ihr barrierefreies Bad'
    },
    {
      icon: Ruler,
      title: 'Vermessungstermin vor Ort',
      description: 'Unser Team misst Ihr Badezimmer aus und bespricht alle Details mit Ihnen'
    },
    {
      icon: PenTool,
      title: 'Individuelle Planung',
      description: 'Anhand der Messdaten erstellen unsere Architekten ein maßgeschneidertes Konzept'
    },
    {
      icon: CheckCircle2,
      title: 'Materialauswahl',
      description: 'Nur hochwertige, langlebige Materialien, die strenge Qualitätsstandards erfüllen'
    },
    {
      icon: Hammer,
      title: 'Umbau & Installation',
      description: 'Professionelle Umsetzung in ca. 3–5 Arbeitstagen je nach Aufwand'
    },
    {
      icon: Key,
      title: 'Übergabe & Einweisung',
      description: 'Das fertiggestellte Bad wird übergeben, Handhabung und Pflege werden erläutert'
    },
    {
      icon: HeadphonesIcon,
      title: 'Nachbetreuung',
      description: 'Unser Team bleibt ansprechbar für alle Servicefragen auch nach der Fertigstellung'
    }
  ];

  const features = [
    'Beratung & Vermessung kostenfrei',
    'Individuelle Badplanung',
    'Hochwertige Materialien',
    'Barrierefreie Lösungen',
    'Schnelle Umsetzung (3-5 Tage)',
    'Alles aus einer Hand',
    'Schlüsselfertige Übergabe',
    'Qualitätsgarantie',
    'Erfahrenes Team seit 1999',
    'Kompetente Architekten',
    'Faire & transparente Preise',
    'Zufriedenheitsgarantie'
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-tor-teal/10 border border-tor-teal/30 px-5 py-2 rounded-full mb-6">
            <span className="text-tor-teal font-light text-xs tracking-[0.2em] uppercase">So funktioniert's</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6">
            Ihr Weg zum
            <br />
            <span className="text-tor-teal font-normal italic">barrierefreien Bad</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 font-light leading-relaxed">
            Von der ersten Beratung bis zur Nachbetreuung –
            wir begleiten Sie professionell durch den gesamten Badsanierungsprozess
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 h-full hover:border-tor-teal transition-all">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-tor-teal rounded-full flex items-center justify-center text-white font-normal shadow-lg">
                  {index + 1}
                </div>
                <div className="w-14 h-14 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-tor-teal stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-normal tracking-tight text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 sm:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-light tracking-tight mb-4 text-gray-900">
              Unsere Leistungsmerkmale
            </h3>
            <p className="text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-6">
              Was Sie bei TOR GmbH erwarten können
            </p>
            <motion.button
              whileHover={isMobile ? {} : { scale: 1.02 }}
              whileTap={isMobile ? {} : { scale: 0.98 }}
              onClick={onOpenQuoteModal}
              className="bg-tor-teal hover:bg-tor-teal-light text-white px-8 py-3 rounded-md font-normal text-sm tracking-wide transition-all inline-flex items-center gap-2"
            >
              Kostenlos Angebot anfragen
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-tor-teal flex-shrink-0 stroke-[1.5]" />
                <span className="text-sm text-gray-700 font-light">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

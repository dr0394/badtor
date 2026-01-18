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
      title: 'Anfrage stellen',
      description: 'Kontaktieren Sie uns telefonisch, per E-Mail oder über unser Kontaktformular'
    },
    {
      icon: Ruler,
      title: 'Besichtigung vor Ort',
      description: 'Wir vereinbaren einen Termin und besichtigen die zu reinigenden Räumlichkeiten'
    },
    {
      icon: PenTool,
      title: 'Individuelles Angebot',
      description: 'Sie erhalten ein maßgeschneidertes Angebot basierend auf Ihren Anforderungen'
    },
    {
      icon: CheckCircle2,
      title: 'Terminvereinbarung',
      description: 'Wir planen die Reinigung flexibel nach Ihrem Zeitplan'
    },
    {
      icon: Hammer,
      title: 'Professionelle Durchführung',
      description: 'Unser geschultes Team führt die Reinigung gründlich und zuverlässig durch'
    },
    {
      icon: Key,
      title: 'Qualitätskontrolle',
      description: 'Wir überprüfen das Ergebnis und stellen sicher, dass Sie zufrieden sind'
    },
    {
      icon: HeadphonesIcon,
      title: 'Regelmäßiger Service',
      description: 'Auf Wunsch bieten wir Ihnen regelmäßige Reinigungsverträge an'
    }
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
            Ihr Weg zur
            <br />
            <span className="text-tor-teal font-normal italic">perfekten Sauberkeit</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 font-light leading-relaxed">
            Von der ersten Anfrage bis zum regelmäßigen Service –
            wir begleiten Sie professionell durch den gesamten Reinigungsprozess
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
          className="text-center"
        >
          <motion.button
            whileHover={isMobile ? {} : { scale: 1.02 }}
            whileTap={isMobile ? {} : { scale: 0.98 }}
            onClick={onOpenQuoteModal}
            className="bg-tor-teal hover:bg-tor-teal-light text-white px-10 py-4 rounded-md font-normal text-sm tracking-wide transition-all inline-flex items-center gap-2 shadow-lg"
          >
            Jetzt Angebot anfragen
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

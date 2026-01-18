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
    <section id="features" className="py-24 bg-craft-navy relative overflow-hidden">
      <div className="absolute inset-0 texture-dots opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-craft-copper/20 border-2 border-craft-copper px-6 py-3 rounded mb-6">
            <span className="text-craft-copper font-bold text-xs tracking-[0.25em] uppercase">Unser Prozess</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white font-roboto">
            Von Anfrage bis
            <br />
            <span className="text-craft-copper">zur Fertigstellung</span>
          </h2>
          <p className="text-base sm:text-lg text-craft-sand max-w-3xl mx-auto px-4 font-medium leading-relaxed">
            Klar strukturiert und zuverlässig – Schritt für Schritt zu perfekter Sauberkeit
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
              whileHover={isMobile ? {} : { y: -8, scale: 1.02 }}
              className="relative"
            >
              <div className="bg-craft-sand-light border-4 border-craft-copper rounded p-8 h-full hover:border-craft-rust transition-all shadow-xl">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-craft-rust rounded flex items-center justify-center text-white font-bold shadow-xl border-b-4 border-craft-rust-dark">
                  {index + 1}
                </div>
                <div className="w-16 h-16 bg-white border-4 border-craft-copper rounded flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="w-8 h-8 text-craft-rust stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-craft-charcoal mb-3 font-roboto">
                  {step.title}
                </h3>
                <p className="text-sm text-craft-gray font-medium leading-relaxed">
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
            whileHover={isMobile ? {} : { scale: 1.05 }}
            whileTap={isMobile ? {} : { scale: 0.95 }}
            onClick={onOpenQuoteModal}
            className="bg-craft-rust hover:bg-craft-rust-light text-white px-12 py-5 rounded font-bold text-base tracking-wide transition-all inline-flex items-center gap-3 shadow-2xl border-b-4 border-craft-rust-dark hover:border-craft-rust"
          >
            Jetzt Angebot anfragen
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

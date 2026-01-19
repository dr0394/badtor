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
    <section id="features" className="py-24 bg-gradient-to-br from-clean-blue-dark via-clean-blue to-clean-aqua-dark relative overflow-hidden">
      <div className="absolute inset-0 texture-grid opacity-15"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-clean-aqua-light/30 border-3 border-clean-aqua-light px-6 py-3 rounded-xl mb-6 backdrop-blur-sm">
            <span className="text-white font-bold text-xs tracking-[0.3em] uppercase drop-shadow-lg">Unser Prozess</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white font-roboto drop-shadow-2xl">
            Von Anfrage bis
            <br />
            <span className="text-clean-aqua-light">zur Perfektion</span>
          </h2>
          <p className="text-base sm:text-lg text-clean-ice max-w-3xl mx-auto px-4 font-bold leading-relaxed drop-shadow-lg">
            Klar strukturiert und transparent – Ihr Weg zur kristallklaren Sauberkeit
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
              whileHover={isMobile ? {} : { y: -10, scale: 1.03 }}
              className="relative"
            >
              <div className="bg-white border-4 border-clean-aqua rounded-2xl p-8 h-full hover:border-clean-aqua-light hover:shadow-2xl transition-all">
                <div className="absolute -top-5 -left-5 w-14 h-14 bg-clean-aqua rounded-xl flex items-center justify-center text-white font-bold shadow-2xl border-b-4 border-clean-aqua-dark text-xl">
                  {index + 1}
                </div>
                <div className="w-16 h-16 bg-clean-sky border-4 border-clean-aqua rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="w-8 h-8 text-clean-aqua stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-clean-navy mb-3 font-roboto">
                  {step.title}
                </h3>
                <p className="text-sm text-clean-blue font-bold leading-relaxed">
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
            className="bg-clean-aqua hover:bg-clean-aqua-light text-white px-12 py-5 rounded-xl font-bold text-lg tracking-wide transition-all inline-flex items-center gap-3 shadow-2xl border-b-4 border-clean-aqua-dark hover:border-clean-aqua"
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

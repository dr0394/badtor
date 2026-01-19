import { motion } from 'framer-motion';
import { Shield, Users, Award, Clock, Heart, TrendingUp, ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface WhyUsProps {
  onOpenQuoteModal: () => void;
}

const WhyUs = ({ onOpenQuoteModal }: WhyUsProps) => {
  const isMobile = useReducedMotion();

  const reasons = [
    {
      icon: Shield,
      title: 'Zuverlässig & Vertrauenswürdig',
      description: 'Pünktlich, diskret und mit höchster Sorgfalt für Ihre Zufriedenheit'
    },
    {
      icon: Users,
      title: 'Geschultes Personal',
      description: 'Professionelle und freundliche Mitarbeiter mit langjähriger Erfahrung'
    },
    {
      icon: Award,
      title: 'Höchste Qualitätsstandards',
      description: 'Gründliche Reinigung mit professionellen Methoden und Geräten'
    },
    {
      icon: Clock,
      title: 'Flexible Zeiten',
      description: 'Reinigung nach Ihrem Zeitplan – auch abends und am Wochenende'
    },
    {
      icon: Heart,
      title: 'Individuelle Konzepte',
      description: 'Maßgeschneiderte Reinigungspläne für Ihre speziellen Anforderungen'
    },
    {
      icon: TrendingUp,
      title: 'Faire Preise',
      description: 'Transparente Kostenstruktur ohne versteckte Gebühren'
    }
  ];

  return (
    <section id="why-us" className="relative py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 texture-diagonal opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-clean-aqua/15 border-3 border-clean-aqua px-6 py-3 rounded-xl mb-6">
            <span className="text-clean-aqua font-bold text-xs tracking-[0.3em] uppercase">Warum Prima?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-clean-navy font-roboto">
            Ihr verlässlicher Partner
            <br />
            <span className="text-clean-aqua">für Reinigung</span>
          </h2>
          <p className="text-base sm:text-lg text-clean-blue max-w-3xl mx-auto px-4 font-bold leading-relaxed">
            Mit professionellem Service, höchster Qualität und einem engagierten Team
            setzen wir Maßstäbe in der Reinigungsbranche
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={isMobile ? {} : { y: -8, scale: 1.02 }}
              className="bg-clean-sky border-4 border-clean-aqua rounded-2xl p-8 hover:border-clean-aqua-light hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-clean-aqua/15 rounded-xl flex items-center justify-center mb-6 border-2 border-clean-aqua">
                <reason.icon className="w-8 h-8 text-clean-aqua stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-clean-navy mb-3 font-roboto">
                {reason.title}
              </h3>
              <p className="text-sm text-clean-blue font-bold leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-clean-aqua/15 via-clean-sky to-clean-aqua/10 rounded-2xl p-8 sm:p-12 border-4 border-clean-aqua shadow-xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-clean-navy font-roboto">
                Überzeugen Sie sich selbst von unserer Qualität
              </h3>
              <p className="text-base text-clean-blue font-bold leading-relaxed mb-6">
                Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot.
                Wir beraten Sie gerne persönlich und erstellen ein maßgeschneidertes Reinigungskonzept für Sie.
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;

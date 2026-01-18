import { motion } from 'framer-motion';
import { Shield, Users, Award, Clock, Heart, TrendingUp } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const WhyUs = () => {
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
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-tor-teal/10 border border-tor-teal/30 px-5 py-2 rounded-full mb-6">
            <span className="text-tor-teal font-light text-xs tracking-[0.2em] uppercase">Warum Prima?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6">
            Ihr verlässlicher Partner
            <br />
            <span className="text-tor-teal font-normal italic">für Reinigung</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 font-light leading-relaxed">
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
              whileHover={isMobile ? {} : { y: -5 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-tor-teal transition-all"
            >
              <div className="w-14 h-14 bg-tor-teal/10 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-tor-teal stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-normal tracking-tight text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
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
          <div className="bg-gradient-to-r from-tor-teal/10 via-tor-teal/5 to-transparent rounded-2xl p-8 sm:p-12 border border-tor-teal/20">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-light tracking-tight mb-4 text-gray-900">
                Überzeugen Sie sich selbst von unserer Qualität
              </h3>
              <p className="text-base text-gray-600 font-light leading-relaxed mb-6">
                Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot.
                Wir beraten Sie gerne persönlich und erstellen ein maßgeschneidertes Reinigungskonzept für Sie.
              </p>
              <motion.button
                whileHover={isMobile ? {} : { scale: 1.02 }}
                whileTap={isMobile ? {} : { scale: 0.98 }}
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-tor-teal hover:bg-tor-teal-light text-white px-10 py-4 rounded-md font-normal text-sm tracking-wide transition-all inline-flex items-center gap-2"
              >
                Jetzt Kontakt aufnehmen
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;

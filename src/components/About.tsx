import { motion } from 'framer-motion';
import { Heart, CheckCircle2, Award, Users, ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface AboutProps {
  onOpenQuoteModal: () => void;
}

const About = ({ onOpenQuoteModal }: AboutProps) => {
  const isMobile = useReducedMotion();

  const values = [
    { icon: Heart, title: 'B2B-Spezialist', description: 'Auf gewerbliche Reinigung fokussiert' },
    { icon: CheckCircle2, title: 'Höchste Standards', description: 'Professionelle Reinigung nach Industriestandards' },
    { icon: Award, title: 'Langfristige Verträge', description: 'Planbare Kosten für Ihr Unternehmen' },
    { icon: Users, title: 'Zertifiziertes Personal', description: 'Geschulte Fachkräfte für Ihren Betrieb' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-tor-teal/20 to-transparent rounded-2xl blur-xl" />
              <img
                src="https://images.pexels.com/photos/6195276/pexels-photo-6195276.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Prima Reinigungsservice"
                className="relative rounded-2xl border border-tor-teal/30 shadow-xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-tor-teal px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl shadow-xl">
                <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white">100%</div>
                <div className="text-xs sm:text-sm font-light tracking-wide text-white/90">Zufriedenheit</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-tor-teal/10 border border-tor-teal/30 px-5 py-2 rounded-full mb-6">
              <span className="text-tor-teal font-light text-xs tracking-[0.2em] uppercase">Über Prima Reinigungsservice</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-6">
              Ihr B2B-Partner für
              <br />
              <span className="text-tor-teal font-normal italic">gewerbliche Reinigung</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed font-light">
              Prima Reinigungsservice ist Ihr spezialisierter Partner für professionelle Unternehmensreinigung in Velbert und Umgebung. Wir bieten maßgeschneiderte Reinigungslösungen für Büros, Praxen, Kanzleien, Hotels und Gewerbeflächen.
            </p>
            <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 leading-relaxed font-light">
              Als verlässlicher B2B-Partner verstehen wir die hohen Anforderungen an Sauberkeit und Hygiene in Ihrem Unternehmen. Mit geschultem Fachpersonal, modernen Reinigungsmethoden und flexiblen Einsatzzeiten sorgen wir für ein gepflegtes, professionelles Arbeitsumfeld – damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={isMobile ? {} : { y: -3 }}
                  className="bg-white border border-tor-teal/20 p-4 sm:p-5 rounded-lg"
                >
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-tor-teal mb-2 sm:mb-3 stroke-[1.5]" />
                  <div className="font-normal text-sm sm:text-base mb-1 sm:mb-2 text-gray-900">{value.title}</div>
                  <div className="text-xs sm:text-sm text-gray-500 font-light">{value.description}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={isMobile ? {} : { scale: 1.02 }}
                whileTap={isMobile ? {} : { scale: 0.98 }}
                onClick={onOpenQuoteModal}
                className="bg-tor-teal hover:bg-tor-teal-light text-white px-8 py-3 rounded-md font-normal text-sm tracking-wide transition-all inline-flex items-center gap-2"
              >
                Kostenloses Angebot
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={isMobile ? {} : { scale: 1.02 }}
                whileTap={isMobile ? {} : { scale: 0.98 }}
                onClick={() => {
                  const element = document.getElementById('services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent hover:bg-gray-100 text-gray-700 px-8 py-3 rounded-md font-light text-sm tracking-wide transition-all border border-gray-300 inline-flex items-center gap-2"
              >
                Unsere Leistungen
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

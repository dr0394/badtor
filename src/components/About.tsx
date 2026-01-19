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
    <section id="about" className="py-24 bg-gradient-to-br from-white via-clean-sky to-clean-ice relative overflow-hidden">
      <div className="absolute inset-0 texture-grid opacity-15"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-clean-aqua/30 to-clean-blue/20 rounded-2xl blur-2xl" />
              <img
                src="https://images.pexels.com/photos/6195276/pexels-photo-6195276.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Prima Reinigungsservice"
                className="relative rounded-2xl border-4 border-clean-aqua shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-clean-aqua px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl shadow-2xl border-b-4 border-clean-aqua-dark">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">100%</div>
                <div className="text-xs sm:text-sm font-bold tracking-wide text-white">Zufriedenheit</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-clean-aqua/15 border-3 border-clean-aqua px-6 py-3 rounded-xl mb-6">
              <span className="text-clean-aqua font-bold text-xs tracking-[0.3em] uppercase">Über Prima Reinigungsservice</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-clean-navy font-roboto">
              Ihr B2B-Partner für
              <br />
              <span className="text-clean-aqua">gewerbliche Reinigung</span>
            </h2>
            <p className="text-base sm:text-lg text-clean-blue mb-4 sm:mb-6 leading-relaxed font-bold">
              Prima Reinigungsservice ist Ihr spezialisierter Partner für professionelle Unternehmensreinigung in Velbert und Umgebung. Wir bieten maßgeschneiderte Reinigungslösungen für Büros, Praxen, Kanzleien, Hotels und Gewerbeflächen.
            </p>
            <p className="text-sm sm:text-base text-clean-blue mb-6 sm:mb-8 leading-relaxed font-semibold">
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
                  whileHover={isMobile ? {} : { y: -5, scale: 1.02 }}
                  className="bg-white border-4 border-clean-aqua p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                >
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-clean-aqua mb-2 sm:mb-3 stroke-[2.5]" />
                  <div className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-clean-navy">{value.title}</div>
                  <div className="text-xs sm:text-sm text-clean-blue font-bold">{value.description}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={isMobile ? {} : { scale: 1.05 }}
                whileTap={isMobile ? {} : { scale: 0.95 }}
                onClick={onOpenQuoteModal}
                className="bg-clean-aqua hover:bg-clean-aqua-light text-white px-8 py-3 rounded-xl font-bold text-sm tracking-wide transition-all inline-flex items-center gap-2 shadow-xl border-b-4 border-clean-aqua-dark"
              >
                Kostenloses Angebot
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={isMobile ? {} : { scale: 1.05 }}
                whileTap={isMobile ? {} : { scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white hover:bg-clean-sky text-clean-navy px-8 py-3 rounded-xl font-bold text-sm tracking-wide transition-all border-3 border-clean-aqua inline-flex items-center gap-2 shadow-lg"
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

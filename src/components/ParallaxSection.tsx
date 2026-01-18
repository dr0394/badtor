import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ParallaxSectionProps {
  onOpenQuoteModal: () => void;
}

const ParallaxSection = ({ onOpenQuoteModal }: ParallaxSectionProps) => {
  const isMobile = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const benefits = [
    'Über 500 zufriedene Kunden in Velbert',
    'Professionelle Reinigung seit über 10 Jahren',
    '100% Zufriedenheitsgarantie',
    'Flexible Termine & faire Preise'
  ];

  return (
    <section ref={ref} className="relative h-[600px] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=300"
          alt="Professionelle Reinigung"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full">
                <span className="text-white font-light text-xs tracking-[0.2em] uppercase">
                  Vertrauen & Qualität
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight">
                Ihre Zufriedenheit ist
                <br />
                <span className="font-normal italic">unser Antrieb</span>
              </h2>

              <p className="text-lg text-white/90 font-light leading-relaxed">
                Mit Leidenschaft für Sauberkeit und einem erfahrenen Team setzen wir Maßstäbe
                in der professionellen Reinigung. Vertrauen Sie auf unsere Expertise.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-tor-teal flex-shrink-0" />
                    <span className="text-sm font-light">{benefit}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={isMobile ? {} : { scale: 1.05 }}
                whileTap={isMobile ? {} : { scale: 0.95 }}
                onClick={onOpenQuoteModal}
                className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-md font-normal text-sm tracking-wide transition-all inline-flex items-center gap-2 shadow-2xl"
              >
                Kostenloses Angebot erhalten
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;

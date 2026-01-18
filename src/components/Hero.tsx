import { motion } from 'framer-motion';
import { Sparkles, Shield, Clock, Award, ChevronDown, Star } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

const Hero = ({ onOpenQuoteModal }: HeroProps) => {
  const isMobile = useReducedMotion();

  const features = [
    { icon: Sparkles, title: 'Gewerblich & Privat', subtitle: 'Alle Bereiche' },
    { icon: Shield, title: 'Zertifiziert', subtitle: 'Höchste Standards' },
    { icon: Clock, title: 'Flexibel', subtitle: 'Nach Ihrem Zeitplan' },
    { icon: Award, title: 'B2B-Fokus', subtitle: 'Für Unternehmen' },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-20 overflow-hidden bg-craft-navy">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-craft-navy via-craft-navy-light/95 to-craft-navy/90 z-10" />
        <div className="absolute inset-0 texture-grid opacity-30 z-20" />
        <img
          src="https://i.imgur.com/H72xD3O.png"
          alt="Professionelle Reinigung"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block"
            >
              <div className="bg-craft-rust/20 border-2 border-craft-rust px-6 py-3 rounded mb-8">
                <span className="text-craft-rust font-semibold text-xs tracking-[0.25em] uppercase">
                  Velbert & Umgebung
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-white font-roboto"
            >
              Sauberkeit mit
              <br />
              <span className="text-craft-rust">Handschlag-Qualität</span>
            </motion.h1>

            <motion.p
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-craft-sand mb-6 lg:mb-10 leading-relaxed max-w-xl font-light"
            >
              Professionelle Reinigung für Büros, Praxen und Hotels. Ehrlich. Gründlich. Verlässlich. Wie ein guter Handwerker – nur für Sauberkeit.
            </motion.p>

            {/* Mobile Image - Between subtitle and benefits */}
            <motion.div
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="lg:hidden relative rounded overflow-hidden border-4 border-craft-rust shadow-2xl mb-8"
            >
              <img
                src="https://i.imgur.com/H72xD3O.png"
                alt="Professionelle Reinigung"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-craft-charcoal/95 to-transparent p-6">
                <div className="text-xl font-bold tracking-wide mb-1 text-white font-roboto">B2B-Reinigung</div>
                <div className="text-craft-sand font-light text-sm">
                  Zuverlässig wie das Handwerk
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={isMobile ? {} : { scale: 1.05, y: -4 }}
                  className="bg-craft-sand-light/95 backdrop-blur-sm border-l-4 border-craft-rust p-5 rounded shadow-lg"
                >
                  <feature.icon className="w-8 h-8 text-craft-rust mb-3 stroke-[2]" />
                  <div className="font-bold text-sm text-craft-charcoal mb-1">{feature.title}</div>
                  <div className="text-xs text-craft-gray font-medium">{feature.subtitle}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={isMobile ? {} : { scale: 1.05 }}
                  whileTap={isMobile ? {} : { scale: 0.95 }}
                  onClick={onOpenQuoteModal}
                  className="bg-craft-rust hover:bg-craft-rust-light text-white px-10 py-4 rounded font-bold text-base tracking-wide transition-all shadow-lg border-b-4 border-craft-rust-dark hover:border-craft-rust"
                >
                  Kostenlos anfragen
                </motion.button>
                <motion.button
                  whileHover={isMobile ? {} : { scale: 1.05 }}
                  whileTap={isMobile ? {} : { scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('services');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-craft-sand-light hover:bg-white text-craft-charcoal px-10 py-4 rounded font-semibold text-base tracking-wide transition-all border-2 border-craft-sand shadow-lg"
                >
                  Unsere Leistungen
                </motion.button>
              </div>

              <div className="bg-craft-sand-light/95 backdrop-blur-sm border-2 border-craft-copper rounded p-5 inline-flex items-center gap-4 shadow-lg">
                <div className="w-11 h-11 bg-white rounded flex items-center justify-center flex-shrink-0 border-2 border-craft-copper">
                  <svg className="w-7 h-7" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    <path fill="none" d="M0 0h48v48H0z"/>
                  </svg>
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-craft-copper text-craft-copper" />
                    ))}
                  </div>
                  <div className="text-sm font-bold text-craft-charcoal">4,9 von 5,0 Sternen</div>
                  <div className="text-xs text-craft-gray font-semibold">Google Bewertungen</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -top-4 -right-4 bg-craft-rust px-6 py-4 rounded shadow-2xl z-10 border-b-4 border-craft-rust-dark">
              <div className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">Einsatzgebiet</div>
              <div className="text-lg font-bold text-white font-roboto">Velbert & Umgebung</div>
            </div>
            <div className="relative rounded overflow-hidden border-4 border-craft-rust shadow-2xl">
              <img
                src="https://i.imgur.com/H72xD3O.png"
                alt="Professionelle Reinigung"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-craft-charcoal/95 to-transparent p-8 border-t-4 border-craft-rust">
                <div className="text-2xl font-bold tracking-wide mb-2 text-white font-roboto">B2B-Reinigung</div>
                <div className="text-craft-sand font-medium text-base">
                  Zuverlässig wie das Handwerk
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-10 h-10 text-craft-rust stroke-[3]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import { Bath, Shield, Clock, Award, ChevronDown, Star } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

const Hero = ({ onOpenQuoteModal }: HeroProps) => {
  const isMobile = useReducedMotion();

  const features = [
    { icon: Bath, title: 'Barrierefreie Bäder', subtitle: 'In 3-5 Tagen' },
    { icon: Shield, title: 'Seit 1999', subtitle: 'Erfahrung & Qualität' },
    { icon: Clock, title: 'Schnelle Umsetzung', subtitle: 'Ohne lange Wartezeiten' },
    { icon: Award, title: 'Maßgeschneidert', subtitle: 'Nach Ihren Wünschen' },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-20 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-tor-beige/60 to-tor-beige/30 z-10" />
        <img
          src="https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Wanne zu Dusche Umbau"
          className="w-full h-full object-cover opacity-40"
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
              <div className="bg-tor-teal/10 border border-tor-teal/30 px-5 py-2 rounded-full mb-8">
                <span className="text-tor-teal font-light text-xs tracking-[0.2em] uppercase">
                  Ihr Partner in Freiburg & Stuttgart
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-8 leading-[1.15] text-gray-900"
            >
              Barrierefreie Bäder in 3–5 Tagen –
              <br />
              <span className="text-tor-teal font-normal italic">Ihre neue Wohlfühloase</span>
            </motion.h1>

            <motion.p
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 mb-10 font-light leading-relaxed max-w-xl"
            >
              Wir verwandeln Ihr Bad in einen sicheren und komfortablen Raum – maßgeschneidert für Ihre Bedürfnisse. Spezialisiert auf barrierefreie Badezimmer und Wannen-zu-Dusche-Umbauten.
            </motion.p>

            <motion.div
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={isMobile ? {} : { scale: 1.02, y: -2 }}
                  className="bg-white/90 backdrop-blur-sm border border-tor-teal/20 p-5 rounded-lg"
                >
                  <feature.icon className="w-7 h-7 text-tor-teal mb-3 stroke-[1.5]" />
                  <div className="font-normal text-sm text-gray-900 mb-1">{feature.title}</div>
                  <div className="text-xs text-gray-500 font-light">{feature.subtitle}</div>
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
                  whileHover={isMobile ? {} : { scale: 1.02 }}
                  whileTap={isMobile ? {} : { scale: 0.98 }}
                  onClick={onOpenQuoteModal}
                  className="bg-tor-teal hover:bg-tor-teal-light text-white px-10 py-4 rounded-md font-normal text-sm tracking-wide transition-all"
                >
                  Vermessungstermin vereinbaren
                </motion.button>
                <motion.button
                  whileHover={isMobile ? {} : { scale: 1.02 }}
                  whileTap={isMobile ? {} : { scale: 0.98 }}
                  onClick={() => {
                    const element = document.getElementById('services');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-transparent hover:bg-gray-50 text-gray-700 px-10 py-4 rounded-md font-light text-sm tracking-wide transition-all border border-gray-300"
                >
                  Unsere Leistungen
                </motion.button>
              </div>

              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-5 inline-flex items-center gap-4">
                <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-100">
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
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <div className="text-sm font-normal text-gray-900">4,9 von 5,0 Sternen</div>
                  <div className="text-xs text-gray-500 font-light">Basierend auf Google Bewertungen</div>
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
            <div className="absolute -top-4 -right-4 bg-tor-teal px-6 py-3 rounded-lg shadow-xl z-10">
              <div className="text-[10px] font-light tracking-[0.15em] text-white/90 uppercase">Standorte</div>
              <div className="text-lg font-normal text-white">Freiburg & Stuttgart</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-tor-teal/30 shadow-xl">
              <img
                src="https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Komplette Badsanierung"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tor-teal/80 to-transparent p-8">
                <div className="text-2xl font-light tracking-wide mb-2 text-white">Qualität & Erfahrung seit 1999</div>
                <div className="text-white/90 font-light text-sm">
                  Traditionelle Bauweise des Schwarzwaldes trifft auf moderne Technologie
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
          <ChevronDown className="w-8 h-8 text-tor-teal" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import { Home, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface HomeCleaningProps {
  onOpenQuoteModal: () => void;
}

const HomeCleaning = ({ onOpenQuoteModal }: HomeCleaningProps) => {
  const isMobile = useReducedMotion();

  const homeServices = [
    {
      title: 'Fensterreinigung',
      description: 'Streifenfreie Fenster und makellose Glasflächen für Ihr Zuhause',
      icon: Sparkles
    },
    {
      title: 'Grundreinigung',
      description: 'Gründliche Reinigung nach Umzug oder Renovierung',
      icon: CheckCircle2
    },
    {
      title: 'Treppenhausreinigung',
      description: 'Regelmäßige Pflege für gepflegte Gemeinschaftsbereiche',
      icon: Home
    }
  ];

  return (
    <section id="home-cleaning" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-tor-teal/10 border border-tor-teal/30 px-5 py-2 rounded-full mb-6">
              <span className="text-tor-teal font-light text-xs tracking-[0.2em] uppercase">
                Für Ihr Zuhause
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6">
              Sauberes Zuhause –
              <br />
              <span className="text-tor-teal font-normal italic">mehr Lebensqualität</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed font-light">
              Neben unseren B2B-Services bieten wir auch erstklassige Reinigungsleistungen für Privatkunden.
              Von der Fensterreinigung über Grundreinigung bis zur Treppenhausreinigung – wir sorgen für
              ein sauberes und gepflegtes Zuhause.
            </p>

            <div className="space-y-4 mb-8">
              {homeServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white border border-gray-200 p-5 rounded-xl hover:border-tor-teal transition-all"
                >
                  <div className="w-12 h-12 bg-tor-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-tor-teal stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-normal text-base text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={isMobile ? {} : { scale: 1.02 }}
              whileTap={isMobile ? {} : { scale: 0.98 }}
              onClick={onOpenQuoteModal}
              className="bg-tor-teal hover:bg-tor-teal-light text-white px-10 py-4 rounded-md font-normal text-sm tracking-wide transition-all inline-flex items-center gap-2 shadow-lg"
            >
              Jetzt Angebot für Privat anfragen
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-tor-teal/20 to-transparent rounded-2xl blur-xl" />
            <img
              src="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Reinigung für Zuhause"
              className="relative rounded-2xl border border-tor-teal/30 shadow-xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl shadow-xl border border-gray-200">
              <div className="text-xs text-gray-500 mb-1 font-light">Auch für</div>
              <div className="text-lg sm:text-xl md:text-2xl font-normal text-gray-900">Privatkunden</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeCleaning;

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
    <section id="home-cleaning" className="py-24 bg-gradient-to-br from-clean-ice via-white to-clean-sky relative overflow-hidden">
      <div className="absolute inset-0 texture-diagonal opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-clean-aqua/15 border-3 border-clean-aqua px-6 py-3 rounded-xl mb-6">
              <span className="text-clean-aqua font-bold text-xs tracking-[0.3em] uppercase">
                Für Ihr Zuhause
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-clean-navy font-roboto">
              Sauberes Zuhause –
              <br />
              <span className="text-clean-aqua">mehr Lebensqualität</span>
            </h2>
            <p className="text-base sm:text-lg text-clean-blue mb-6 leading-relaxed font-bold">
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
                  whileHover={isMobile ? {} : { x: 5 }}
                  className="flex items-start gap-4 bg-white border-4 border-clean-aqua p-5 rounded-xl hover:border-clean-aqua-light hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-clean-aqua/15 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-clean-aqua">
                    <service.icon className="w-7 h-7 text-clean-aqua stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-clean-navy mb-1">{service.title}</h3>
                    <p className="text-sm text-clean-blue font-bold leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={isMobile ? {} : { scale: 0.95 }}
              onClick={onOpenQuoteModal}
              className="bg-clean-aqua hover:bg-clean-aqua-light text-white px-10 py-4 rounded-xl font-bold text-base tracking-wide transition-all inline-flex items-center gap-2 shadow-xl border-b-4 border-clean-aqua-dark"
            >
              Jetzt Angebot für Privat anfragen
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-clean-aqua/30 to-clean-blue/20 rounded-2xl blur-2xl" />
            <img
              src="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Reinigung für Zuhause"
              className="relative rounded-2xl border-4 border-clean-aqua shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-clean-aqua px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl shadow-2xl border-b-4 border-clean-aqua-dark">
              <div className="text-xs text-white mb-1 font-bold">Auch für</div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">Privatkunden</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeCleaning;

import { motion } from 'framer-motion';
import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Instagram = () => {
  const isMobile = useReducedMotion();
  const instagramUrl = 'https://www.instagram.com/prima.reinigungsservice/?hl=en';

  return (
    <section id="instagram" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <InstagramIcon className="w-8 h-8 text-wandura-olive" />
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-gray-900">
              Folge uns auf Instagram
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Entdecke unsere neuesten Projekte, Vorher-Nachher-Transformationen und Einblicke in unsere tägliche Arbeit
          </p>
        </motion.div>

        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
        >
          <div className="p-8 sm:p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-2xl mb-6">
              <InstagramIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-normal text-gray-900 mb-3">@prima.reinigungsservice</h3>
            <p className="text-gray-600 mb-8 font-light max-w-md mx-auto">
              Besuche unser Instagram-Profil und sieh dir unsere Posts an – echte Projekte, echte Ergebnisse
            </p>
            <motion.a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-wandura-olive text-white px-8 py-4 rounded-lg hover:bg-wandura-olive-light transition-colors font-normal"
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={isMobile ? {} : { scale: 0.95 }}
            >
              <InstagramIcon className="w-5 h-5" />
              Instagram besuchen
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>

          <div className="border-t border-gray-200">
            <img
              src="/bildschirmfoto_2025-12-13_um_13.05.46.png"
              alt="Instagram Grid"
              className="w-full h-auto"
            />
          </div>

          <div className="flex justify-center border-t border-gray-200">
            <div className="grid grid-cols-2 gap-0 max-w-2xl w-full">
              {[
                { label: 'Projekte', value: '100+' },
                { label: 'Follower', value: '400' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 sm:p-8 text-center border-r border-gray-200 last:border-r-0"
                >
                  <div className="text-2xl sm:text-3xl font-normal text-wandura-olive mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500 font-light">
            Markiere uns in deinen Stories mit{' '}
            <span className="text-wandura-olive font-normal">@prima.reinigungsservice</span> und wir teilen deine Transformation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram;

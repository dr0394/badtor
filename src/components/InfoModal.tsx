import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Clock, Award, Euro } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal?: () => void;
}

const InfoModal = ({ isOpen, onClose, onOpenQuoteModal }: InfoModalProps) => {
  const benefits = [
    {
      icon: Shield,
      title: 'Qualitätsgarantie',
      description:
        'Als Meisterbetrieb stehen wir zu unserer Arbeit. Sie erhalten umfassende Garantie auf alle ausgeführten Malerarbeiten – für Ihre langfristige Zufriedenheit.',
      features: [
        'Meisterqualität mit Garantie',
        'Hochwertige Materialien',
        'Langlebige Ergebnisse',
      ],
    },
    {
      icon: Clock,
      title: 'Zuverlässige Planung',
      description:
        'Transparente Zeitplanung und pünktliche Ausführung. Wir halten vereinbarte Termine ein und informieren Sie rechtzeitig über jeden Schritt.',
      features: [
        'Verbindliche Terminvereinbarung',
        'Kostenlose Erstberatung vor Ort',
        'Klare Zeitplanung',
      ],
    },
    {
      icon: Award,
      title: 'Erfahrung & Kompetenz',
      description:
        'Mit jahrelanger Erfahrung in Fulda verwurzelt. Wir kombinieren traditionelles Handwerk mit modernen Techniken für optimale Ergebnisse.',
      features: [
        'Qualifizierte Fachkräfte',
        'Moderne Arbeitsmethoden',
        'Regionale Verwurzelung',
      ],
    },
    {
      icon: Euro,
      title: 'Faire & transparente Preise',
      description:
        'Ehrliche Kalkulation ohne versteckte Kosten. Sie erhalten ein detailliertes Angebot und zahlen genau das, was wir gemeinsam vereinbart haben.',
      features: [
        'Transparente Kostenaufstellung',
        'Keine Überraschungen',
        'Faire Preisgestaltung',
      ],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl mx-2 sm:mx-4"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900">Warum <span className="font-normal italic text-wandura-olive">Wandura</span>?</h2>
                <p className="text-sm sm:text-base text-gray-600 mt-1 font-light">Ihre Vorteile im Überblick</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-10 h-10 bg-wandura-olive hover:bg-wandura-olive-light rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>
            </div>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 border-l-4 border-wandura-olive rounded-lg p-4 sm:p-6 hover:border-wandura-olive-light transition-colors"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-wandura-olive/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-wandura-olive stroke-[1.5]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-normal tracking-tight mb-2 text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed font-light">
                        {benefit.description}
                      </p>
                      <ul className="space-y-2">
                        {benefit.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-500 font-light">
                            <div className="w-1.5 h-1.5 bg-wandura-olive rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="bg-gradient-to-r from-wandura-olive/10 to-transparent border border-wandura-olive/30 rounded-xl p-4 sm:p-6">
                <div className="text-xl sm:text-2xl font-light mb-2 sm:mb-3 text-gray-900">Überzeugt?</div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 font-light leading-relaxed">
                  Lassen Sie uns gemeinsam Ihre Räume verwandeln. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onClose();
                    if (onOpenQuoteModal) {
                      onOpenQuoteModal();
                    }
                  }}
                  className="bg-wandura-olive hover:bg-wandura-olive-light text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-normal text-sm sm:text-base tracking-wide transition-colors"
                >
                  Angebot anfragen
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;

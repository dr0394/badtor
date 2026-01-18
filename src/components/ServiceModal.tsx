import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote?: () => void;
  service: {
    title: string;
    fullDesc: string;
    details: string[];
    benefits: string[];
    image: string;
  } | null;
}

const ServiceModal = ({ isOpen, onClose, onRequestQuote, service }: ServiceModalProps) => {
  if (!service) return null;

  const handleContactClick = () => {
    onClose();
    if (onRequestQuote) {
      setTimeout(() => {
        onRequestQuote();
      }, 300);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
                <h2 className="text-2xl font-normal text-gray-900">{service.title}</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-light">{service.fullDesc}</p>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-tor-teal rounded-full" />
                    Leistungsdetails
                  </h3>
                  <ul className="space-y-3">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-tor-teal flex-shrink-0 mt-0.5 stroke-[1.5]" />
                        <span className="text-sm text-gray-700 font-light leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-tor-teal rounded-full" />
                    Ihre Vorteile
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <CheckCircle2 className="w-5 h-5 text-tor-teal flex-shrink-0 mt-0.5 stroke-[1.5]" />
                        <span className="text-sm text-gray-700 font-light leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-tor-teal/10 to-transparent border border-tor-teal/20 rounded-xl p-6">
                  <h3 className="text-lg font-normal text-gray-900 mb-2">
                    Interessiert an dieser Dienstleistung?
                  </h3>
                  <p className="text-sm text-gray-600 font-light mb-4">
                    Kontaktieren Sie uns für einen kostenlosen Vermessungstermin und unverbindliches Angebot.
                    Wir beraten Sie gerne persönlich.
                  </p>
                  <button
                    onClick={handleContactClick}
                    className="bg-tor-teal hover:bg-tor-teal-light text-white px-6 py-3 rounded-md font-normal text-sm tracking-wide transition-all inline-flex items-center gap-2"
                  >
                    Jetzt Vermessungstermin buchen
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;

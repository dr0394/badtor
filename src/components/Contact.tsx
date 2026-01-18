import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ContactProps {
  onOpenQuoteModal: () => void;
}

const Contact = ({ onOpenQuoteModal }: ContactProps) => {
  const isMobile = useReducedMotion();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreeTerms: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', agreeTerms: false });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefon',
      value: '0162 465 7495',
      link: 'tel:+491624657495',
    },
    {
      icon: Mail,
      label: 'E-Mail',
      value: 'bau@tor-bad.de',
      link: 'mailto:bau@tor-bad.de',
    },
    {
      icon: MapPin,
      label: 'Freiburg',
      value: 'Engesserstraße 3, 79108 Freiburg',
      link: 'https://maps.google.com/?q=Engesserstraße+3+Freiburg',
    },
    {
      icon: MapPin,
      label: 'Stuttgart',
      value: 'Hasenbergstr. 40, 70175 Stuttgart',
      link: 'https://maps.google.com/?q=Hasenbergstr+40+Stuttgart',
    },
    {
      icon: Clock,
      label: 'Öffnungszeiten',
      value: 'Mo-Fr 8:00-17:00 Uhr',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block bg-tor-teal/10 border border-tor-teal/30 px-5 py-2 rounded-full mb-6">
            <span className="text-tor-teal font-light text-xs tracking-[0.2em] uppercase">Kontakt</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6">
            Ihr Traumbad beginnt
            <br />
            <span className="text-tor-teal font-normal italic">mit einem Gespräch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 font-light leading-relaxed mb-6">
            Kontaktieren Sie uns für eine kostenlose Beratung und Vermessungstermin. Wir erstellen Ihnen ein unverbindliches Angebot
          </p>
          <motion.button
            whileHover={isMobile ? {} : { scale: 1.02 }}
            whileTap={isMobile ? {} : { scale: 0.98 }}
            onClick={onOpenQuoteModal}
            className="bg-tor-teal hover:bg-tor-teal-light text-white px-8 py-3 rounded-md font-normal text-sm tracking-wide transition-all inline-flex items-center gap-2"
          >
            Schnell-Anfrage starten
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <info.icon className="w-7 h-7 text-tor-teal mb-3 stroke-[1.5]" />
                  <div className="text-xs font-normal text-gray-600 mb-1">{info.label}</div>
                  {info.link ? (
                    <a href={info.link} className="text-sm font-light text-gray-900 hover:text-tor-teal-light transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-sm font-light text-gray-900">{info.value}</div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="font-normal text-base mb-2 text-gray-900">Unsere Standorte</h3>
              <p className="text-sm text-gray-500 font-light mb-4">
                Wir sind für Sie in Freiburg und Stuttgart vor Ort
              </p>
              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                <MapPin className="w-10 h-10 text-tor-teal stroke-[1.5]" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-normal mb-2 text-gray-900">Vorname *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-tor-teal transition-colors font-light text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-normal mb-2 text-gray-900">Nachname *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-tor-teal transition-colors font-light text-gray-900"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-normal mb-2 text-gray-900">E-Mail *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-tor-teal transition-colors font-light text-gray-900"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-normal mb-2 text-gray-900">Telefon</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-tor-teal transition-colors font-light text-gray-900"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-normal mb-2 text-gray-900">Nachricht *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-tor-teal transition-colors resize-none font-light text-gray-900"
                />
              </div>

              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="mt-1"
                  />
                  <span className="text-sm text-gray-600 font-light">
                    Ich stimme den Geschäftsbedingungen und der Datenschutzerklärung zu *
                  </span>
                </label>
              </div>

              {isSubmitted ? (
                <div className="bg-tor-teal text-white px-6 py-4 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 stroke-[1.5]" />
                  <span className="font-normal">Vielen Dank! Wir melden uns bei Ihnen.</span>
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-tor-teal hover:bg-tor-teal-light text-white px-6 py-4 rounded-lg font-normal tracking-wide transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 stroke-[1.5]" />
                  Nachricht senden
                </button>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

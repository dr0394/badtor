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
      value: '02051 / 436 0 763',
      link: 'tel:+4920514360763',
    },
    {
      icon: Mail,
      label: 'E-Mail',
      value: 'Info.prima.rs@gmail.com',
      link: 'mailto:Info.prima.rs@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Standort',
      value: 'Velbert & Umgebung',
      link: 'https://maps.google.com/?q=Velbert',
    },
    {
      icon: Clock,
      label: 'Erreichbarkeit',
      value: 'Mo-Fr 8:00-18:00 Uhr',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-clean-sky via-white to-clean-ice relative overflow-hidden">
      <div className="absolute inset-0 texture-grid opacity-15"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block bg-clean-aqua/15 border-3 border-clean-aqua px-6 py-3 rounded-xl mb-6">
            <span className="text-clean-aqua font-bold text-xs tracking-[0.3em] uppercase">Kontakt</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-clean-navy font-roboto">
            Sauberkeit beginnt
            <br />
            <span className="text-clean-aqua">mit einem Anruf</span>
          </h2>
          <p className="text-base sm:text-lg text-clean-blue max-w-3xl mx-auto px-4 font-bold leading-relaxed mb-6">
            Kontaktieren Sie uns für eine kostenlose Beratung. Wir erstellen Ihnen ein unverbindliches Angebot
          </p>
          <motion.button
            whileHover={isMobile ? {} : { scale: 1.05 }}
            whileTap={isMobile ? {} : { scale: 0.95 }}
            onClick={onOpenQuoteModal}
            className="bg-clean-aqua hover:bg-clean-aqua-light text-white px-8 py-3 rounded-xl font-bold text-base tracking-wide transition-all inline-flex items-center gap-2 shadow-xl border-b-4 border-clean-aqua-dark"
          >
            Schnell-Anfrage starten
            <ArrowRight className="w-5 h-5" />
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
                  whileHover={isMobile ? {} : { y: -5 }}
                  className="bg-white border-4 border-clean-aqua rounded-xl p-6 hover:border-clean-aqua-light hover:shadow-xl transition-all"
                >
                  <info.icon className="w-7 h-7 text-clean-aqua mb-3 stroke-[2.5]" />
                  <div className="text-xs font-bold text-clean-blue mb-1">{info.label}</div>
                  {info.link ? (
                    <a href={info.link} className="text-sm font-bold text-clean-navy hover:text-clean-aqua transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-sm font-bold text-clean-navy">{info.value}</div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-clean-aqua rounded-xl p-6 shadow-lg"
            >
              <h3 className="font-bold text-base mb-2 text-clean-navy">Unser Einsatzgebiet</h3>
              <p className="text-sm text-clean-blue font-bold mb-4">
                Wir sind für Sie in Velbert und Umgebung im Einsatz
              </p>
              <div className="bg-clean-sky rounded-xl h-48 flex items-center justify-center border-2 border-clean-aqua">
                <MapPin className="w-12 h-12 text-clean-aqua stroke-[2.5]" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white border-4 border-clean-aqua rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-bold mb-2 text-clean-navy">Vorname *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 bg-clean-sky border-2 border-clean-aqua rounded-xl focus:outline-none focus:border-clean-aqua-light transition-colors font-bold text-clean-navy"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-clean-navy">Nachname *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 bg-clean-sky border-2 border-clean-aqua rounded-xl focus:outline-none focus:border-clean-aqua-light transition-colors font-bold text-clean-navy"
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
                  className="w-full px-4 py-3 bg-clean-sky border-2 border-clean-aqua rounded-xl focus:outline-none focus:border-clean-aqua-light transition-colors resize-none font-bold text-clean-navy"
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
                <div className="bg-clean-aqua text-white px-6 py-4 rounded-xl flex items-center gap-3 border-b-4 border-clean-aqua-dark">
                  <CheckCircle className="w-5 h-5 stroke-[1.5]" />
                  <span className="font-normal">Vielen Dank! Wir melden uns bei Ihnen.</span>
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-clean-aqua hover:bg-clean-aqua-light text-white px-6 py-4 rounded-xl font-bold tracking-wide transition-all flex items-center justify-center gap-2 shadow-xl border-b-4 border-clean-aqua-dark"
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

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Home, Paintbrush, Building2, Leaf, LayoutGrid, Wallpaper, Mail } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  projectType: string;
  area: string;
  timeframe: string;
  additionalInfo: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    area: '',
    timeframe: '',
    additionalInfo: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const projectTypes = [
    { icon: Home, label: 'Glas- & Fensterreinigung', value: 'fenster' },
    { icon: Building2, label: 'Büro & Unterhaltsreinigung', value: 'buero' },
    { icon: Paintbrush, label: 'Praxis- & Kanzleienreinigung', value: 'praxis' },
    { icon: Leaf, label: 'Treppenhausreinigung', value: 'treppenhaus' },
    { icon: LayoutGrid, label: 'Bau- & Grundreinigung', value: 'bau' },
    { icon: Wallpaper, label: 'Hotel- & Ferienwohnung', value: 'hotel' },
  ];

  const timeframes = [
    { label: 'So schnell wie möglich', value: 'asap' },
    { label: 'Innerhalb von 1 Monat', value: '1month' },
    { label: 'In 1-3 Monaten', value: '1-3months' },
    { label: 'In 3-6 Monaten', value: '3-6months' },
    { label: 'Noch keine feste Planung', value: 'flexible' },
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    const selectedProject = projectTypes.find(p => p.value === formData.projectType);
    const selectedTimeframe = timeframes.find(t => t.value === formData.timeframe);

    const subject = `Anfrage: ${selectedProject?.label || 'Reinigung'}`;
    const body = `Hallo Prima Reinigungsservice Team,

ich interessiere mich für folgende Dienstleistung:

Dienstleistung: ${selectedProject?.label || formData.projectType}
Fläche: ${formData.area} m²
Zeitrahmen: ${selectedTimeframe?.label || formData.timeframe}

Zusätzliche Informationen:
${formData.additionalInfo}

Meine Kontaktdaten:
Name: ${formData.firstName} ${formData.lastName}
E-Mail: ${formData.email}
Telefon: ${formData.phone}

Ich freue mich auf Ihre Rückmeldung und ein unverbindliches Angebot.

Mit freundlichen Grüßen
${formData.firstName} ${formData.lastName}`;

    const mailtoLink = `mailto:Info.prima.rs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    handleClose();
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      projectType: '',
      area: '',
      timeframe: '',
      additionalInfo: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
    onClose();
  };

  const canProceed = () => {
    if (step === 1) return formData.projectType !== '';
    if (step === 2) return formData.area !== '' && formData.timeframe !== '';
    if (step === 3) return formData.firstName !== '' && formData.lastName !== '' && formData.email !== '';
    return false;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
                <div>
                  <h2 className="text-2xl font-normal text-gray-900">Angebot anfragen</h2>
                  <p className="text-sm text-gray-500 font-light mt-1">Schritt {step} von 3</p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex gap-2 mb-8">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`flex-1 h-2 rounded-full transition-all ${
                        i <= step ? 'bg-tor-teal' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-xl font-normal mb-2">Welche Reinigung benötigen Sie?</h3>
                      <p className="text-sm text-gray-500 font-light mb-6">
                        Wählen Sie die Reinigungsart aus, die am besten zu Ihrem Vorhaben passt.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {projectTypes.map((type) => (
                          <button
                            key={type.value}
                            onClick={() => setFormData({ ...formData, projectType: type.value })}
                            className={`p-4 border-2 rounded-xl transition-all text-left ${
                              formData.projectType === type.value
                                ? 'border-tor-teal bg-tor-teal/5'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <type.icon className={`w-6 h-6 mb-2 ${
                              formData.projectType === type.value ? 'text-tor-teal' : 'text-gray-600'
                            }`} />
                            <div className="text-sm font-normal">{type.label}</div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-xl font-normal mb-2">Projektdetails</h3>
                      <p className="text-sm text-gray-500 font-light mb-6">
                        Teilen Sie uns mehr über Ihr Projekt mit.
                      </p>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-normal mb-2">Fläche in m² *</label>
                          <input
                            type="number"
                            value={formData.area}
                            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                            placeholder="z.B. 50"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-tor-teal transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-normal mb-2">Gewünschter Zeitrahmen *</label>
                          <div className="space-y-2">
                            {timeframes.map((time) => (
                              <button
                                key={time.value}
                                onClick={() => setFormData({ ...formData, timeframe: time.value })}
                                className={`w-full p-3 border-2 rounded-lg transition-all text-left text-sm ${
                                  formData.timeframe === time.value
                                    ? 'border-tor-teal bg-tor-teal/5'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                {time.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-normal mb-2">Zusätzliche Informationen</label>
                          <textarea
                            value={formData.additionalInfo}
                            onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                            rows={4}
                            placeholder="Beschreiben Sie hier weitere Details zu Ihrem Projekt..."
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-tor-teal transition-colors resize-none"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-xl font-normal mb-2">Ihre Kontaktdaten</h3>
                      <p className="text-sm text-gray-500 font-light mb-6">
                        Wie können wir Sie erreichen?
                      </p>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-normal mb-2">Vorname *</label>
                            <input
                              type="text"
                              value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-tor-teal transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-normal mb-2">Nachname *</label>
                            <input
                              type="text"
                              value={formData.lastName}
                              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-tor-teal transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-normal mb-2">E-Mail *</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-tor-teal transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-normal mb-2">Telefon</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-tor-teal transition-colors"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex items-center justify-between">
                <button
                  onClick={handleBack}
                  disabled={step === 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-normal transition-all ${
                    step === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Zurück
                </button>

                {step < 3 ? (
                  <button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-normal transition-all ${
                      canProceed()
                        ? 'bg-tor-teal hover:bg-tor-teal/90 text-white'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Weiter
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed()}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-normal transition-all ${
                      canProceed()
                        ? 'bg-tor-teal hover:bg-tor-teal/90 text-white'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    Anfrage senden
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;

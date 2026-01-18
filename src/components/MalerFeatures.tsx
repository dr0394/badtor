import { motion } from 'framer-motion';
import { MessageCircle, Heart, Sparkles, Eye, Layers, Shield, MapPin, Smile, Award } from 'lucide-react';

const MalerFeatures = () => {
  const advantages = [
    {
      icon: MessageCircle,
      title: 'Ehrliche Beratung auf Augenhöhe',
      description: 'Transparente Kommunikation und Empfehlungen, die wirklich zu Ihrem Projekt passen',
    },
    {
      icon: Heart,
      title: 'Ein gutes Gefühl vor dem ersten Pinselstrich',
      description: 'Klare Absprachen und verlässliche Planung für Ihr Vertrauen von Anfang an',
    },
    {
      icon: Sparkles,
      title: 'Saubere Arbeit – minimaler Stress',
      description: 'Professioneller Schutz und penible Sauberkeit während der gesamten Ausführung',
    },
    {
      icon: Eye,
      title: 'Qualität, die man sieht und lange spürt',
      description: 'Hochwertige Materialien und fachgerechte Verarbeitung für dauerhafte Ergebnisse',
    },
    {
      icon: Layers,
      title: 'Alles aus einer Hand – kein Organisationschaos',
      description: 'Von der Planung bis zur Fertigstellung - ein Ansprechpartner für alles',
    },
    {
      icon: Shield,
      title: 'Verlässlichkeit statt Überraschungen',
      description: 'Garantiert ohne versteckte Kosten und mit termintreuer Ausführung',
    },
    {
      icon: MapPin,
      title: 'Regionaler Partner & echte Erreichbarkeit',
      description: 'Vor Ort in Fulda verwurzelt und jederzeit für Sie ansprechbar',
    },
    {
      icon: Smile,
      title: 'Ein Ergebnis, das jeden Tag Freude macht',
      description: 'Räume, die begeistern und sich nach Zuhause anfühlen',
    },
    {
      icon: Award,
      title: 'Hochwertige Materialien & moderne Techniken',
      description: 'Bewährtes Handwerk kombiniert mit innovativen Lösungen',
    },
  ];

  return (
    <section id="advantages" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-wandura-olive rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-wandura-blue rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block bg-wandura-olive/10 border border-wandura-olive/30 px-5 py-2 rounded-full mb-6">
            <span className="text-wandura-olive font-light text-xs tracking-[0.2em] uppercase">Ihre Vorteile</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6">
            Warum Kunden uns
            <br />
            <span className="text-wandura-olive font-normal italic">vertrauen</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Sie profitieren von unserer Erfahrung, Präzision und Leidenschaft für sauberes Handwerk – garantiert ohne versteckte Kosten
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative bg-gray-50 border border-gray-200 rounded-xl p-6 h-full group-hover:border-wandura-olive transition-all">
                <div className="w-12 h-12 bg-wandura-olive/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-wandura-olive group-hover:scale-105 transition-all">
                  <advantage.icon className="w-6 h-6 text-wandura-olive group-hover:text-white stroke-[1.5]" />
                </div>

                <h3 className="text-base font-normal tracking-tight mb-2 text-gray-900 group-hover:text-wandura-olive transition-colors leading-snug">
                  {advantage.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-wandura-olive/10 via-wandura-olive-light/10 to-wandura-olive/10 border border-wandura-olive/30 rounded-2xl p-6 sm:p-8 md:p-10 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight mb-3 sm:mb-4">
                  Überzeugt?
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 font-light">
                  Lassen Sie uns gemeinsam Ihre Räume verwandeln
                </p>
              </div>
              <a
                href="#contact"
                className="bg-wandura-olive hover:bg-wandura-olive-light text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-normal text-base tracking-wide transition-all whitespace-nowrap"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MalerFeatures;

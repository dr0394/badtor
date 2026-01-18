import { motion } from 'framer-motion';
import { CheckCircle2, Home, Building2, Leaf, LayoutGrid, Wallpaper, ArrowRight } from 'lucide-react';

const ServiceDetails = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Sektion 4: Innenraumgestaltung & Malerarbeiten */}
      <section id="innenraum" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-wandura-olive/10 border border-wandura-olive/30 px-5 py-2 rounded-full mb-6">
              <span className="text-wandura-olive font-light text-xs tracking-[0.2em] uppercase">Innenräume</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
              Räume, die <span className="text-wandura-olive font-normal italic">begeistern</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-normal mb-4 flex items-center gap-3">
                <Home className="w-7 h-7 text-wandura-olive stroke-[1.5]" />
                Innenraumgestaltung
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-light">
                Mit Farben, Licht, Oberflächen und Atmosphäre verwandeln wir Wohn- und Arbeitsräume in Orte,
                die beruhigen, inspirieren und einfach gut tun. Individuelle Raumkonzepte statt Standardlösungen.
              </p>
              <ul className="space-y-3">
                {[
                  'Individuelle Konzepte für Ihre Räume',
                  'Sichere Farbberatung vom Fachmann',
                  'Saubere & präzise Ausführung',
                  'Hochwertige Materialien',
                  'Stressfreie Abwicklung',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-wandura-olive flex-shrink-0 mt-0.5 stroke-[1.5]" />
                    <span className="text-gray-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-wandura-olive/30 shadow-lg">
                <img
                  src="https://i.imgur.com/Gm2g8o9.jpeg"
                  alt="Innenraumgestaltung"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <h3 className="text-2xl font-normal mb-4 text-gray-900">Malerarbeiten</h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-light">
                Neue Farben lassen Räume jeden Tag aufs Neue begeistern. Wir setzen Ihre Farbwünsche
                mit höchster Präzision um – für ein Ergebnis, das Sie lange Freude macht.
              </p>
              <ul className="space-y-3">
                {[
                  'Individualität & Präzision in jedem Pinselstrich',
                  'Zuverlässigkeit & Transparenz',
                  'Qualität, die man sieht und spürt',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-wandura-olive flex-shrink-0 mt-0.5 stroke-[1.5]" />
                    <span className="text-gray-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden border border-wandura-olive/30 shadow-lg">
                <img
                  src="https://i.imgur.com/0iUDQzO.jpeg"
                  alt="Malerarbeiten"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sektion 5: Fassadengestaltung & -sanierung */}
      <section id="fassade" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-wandura-olive/10 border border-wandura-olive/30 px-5 py-2 rounded-full mb-6">
              <span className="text-wandura-olive font-light text-xs tracking-[0.2em] uppercase">Fassaden</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
              Weil Ihr Zuhause es <span className="text-wandura-olive font-normal italic">wert ist</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Building2 className="w-10 h-10 text-wandura-olive mb-6 stroke-[1.5]" />
              <p className="text-xl text-gray-700 mb-6 leading-relaxed font-light">
                Die Fassade ist das Gesicht Ihres Hauses – sie schafft den ersten Eindruck und schützt
                vor Wind, Wetter und Umwelteinflüssen.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed font-light">
                Mit hochwertigen Materialien und fachgerechter Ausführung erhält Ihre Fassade neue
                Ausstrahlung und der Schutz hält langfristig.
              </p>

              <h4 className="font-normal text-base mb-4 text-gray-900">Gründe für rechtzeitige Sanierung:</h4>
              <ul className="space-y-3 mb-8">
                {[
                  'Schutz der Bausubstanz',
                  'Vermeidung von Feuchte- und Schimmelschäden',
                  'Minimierung von Folgekosten',
                  'Nachhaltige Wertsteigerung',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-wandura-olive flex-shrink-0 mt-0.5 stroke-[1.5]" />
                    <span className="text-gray-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="bg-wandura-olive hover:bg-wandura-olive-light text-white px-8 py-3 rounded-md font-normal text-sm tracking-wide transition-all inline-flex items-center gap-2"
              >
                Fassade auffrischen lassen
                <ArrowRight className="w-4 h-4 stroke-[1.5]" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-wandura-olive/30 shadow-lg">
                <img
                  src="https://i.imgur.com/jewRVIq.jpeg"
                  alt="Fassadengestaltung"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sektion 6: Gesundes Wohnen mit Naturkalk */}
      <section id="naturkalk" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-wandura-olive/10 border border-wandura-olive/30 px-5 py-2 rounded-full mb-6">
              <span className="text-wandura-olive font-light text-xs tracking-[0.2em] uppercase">Kalkkind</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
              Gesundes Wohnen mit <span className="text-wandura-olive font-normal italic">Naturkalk</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-wandura-olive/30 shadow-lg">
                <img
                  src="https://i.imgur.com/UvoyAPY.jpeg"
                  alt="Naturkalk Wand"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Leaf className="w-10 h-10 text-wandura-olive mb-6 stroke-[1.5]" />
              <p className="text-xl text-gray-700 mb-6 leading-relaxed font-light">
                100% natürliche Kalkputze – emissionsfrei, schimmelhemmend und antibakteriell.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed font-light">
                Sie regulieren die Feuchtigkeit, reinigen die Raumluft auf natürliche Weise und schaffen
                ein Wohngefühl, das leicht, sauber und gesund ist – ideal für Allergiker und Familien.
              </p>

              <h4 className="font-normal text-base mb-4 text-gray-900">Design trifft Nachhaltigkeit:</h4>
              <p className="text-gray-600 mb-6 leading-relaxed font-light">
                Jede Wand ist ein handgefertigtes Unikat. Glatte, strukturierte oder marmorierte Oberflächen
                sorgen für sichtbare Tiefe und Charakter.
              </p>

              <div className="bg-gray-50 border-l-4 border-wandura-olive p-6 rounded-lg mb-8">
                <p className="text-gray-700 font-light italic">
                  "KalkKind ist mehr als nur Wandbelag – es ist ein Statement für gesundes, bewusstes und
                  stilvolles Wohnen."
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="bg-wandura-olive hover:bg-wandura-olive-light text-white px-8 py-3 rounded-md font-normal text-sm tracking-wide transition-all inline-flex items-center gap-2"
              >
                Mehr über Naturkalk erfahren
                <ArrowRight className="w-4 h-4 stroke-[1.5]" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sektion 7: Designböden */}
      <section id="boeden" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-wandura-olive/10 border border-wandura-olive/30 px-5 py-2 rounded-full mb-6">
              <span className="text-wandura-olive font-light text-xs tracking-[0.2em] uppercase">Bodenbeläge</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
              Stil, Komfort und Gefühl <span className="text-wandura-olive font-normal italic">unter Ihren Füßen</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LayoutGrid className="w-10 h-10 text-wandura-olive mb-6 stroke-[1.5]" />
              <p className="text-xl text-gray-700 mb-6 leading-relaxed font-light">
                Ein Boden ist mehr als nur eine Oberfläche – er trägt jeden Schritt und bestimmt,
                wie sich Wohnen anfühlt.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed font-light">
                Mit hochwertigen Designböden verwandeln wir Räume in Orte voller Wärme, Stil und Geborgenheit.
              </p>

              <h4 className="font-normal text-base mb-4 text-gray-900">Ihre Vorteile:</h4>
              <ul className="space-y-3 mb-8">
                {[
                  'Angenehm leise & fußwarm',
                  'Extrem pflegeleicht & widerstandsfähig',
                  'Ideal für Wohnräume, Küche & Flur',
                  'Große Designvielfalt (modern bis klassisch)',
                  'Saubere & staubarme Verlegung',
                  'Perfekte Untergrundvorbereitung für langlebige Ergebnisse',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-wandura-olive flex-shrink-0 mt-0.5 stroke-[1.5]" />
                    <span className="text-gray-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="bg-wandura-olive hover:bg-wandura-olive-light text-white px-8 py-3 rounded-md font-normal text-sm tracking-wide transition-all inline-flex items-center gap-2"
              >
                Unverbindlich beraten lassen
                <ArrowRight className="w-4 h-4 stroke-[1.5]" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-wandura-olive/30 shadow-lg">
                <img
                  src="https://i.imgur.com/2LE43Z9.jpeg"
                  alt="Designböden"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sektion 8: Tapezierarbeiten & kreative Wandgestaltung */}
      <section id="tapeten" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-wandura-olive/10 border border-wandura-olive/30 px-5 py-2 rounded-full mb-6">
              <span className="text-wandura-olive font-light text-xs tracking-[0.2em] uppercase">Tapeten</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
              Wände, die <span className="text-wandura-olive font-normal italic">Charakter zeigen</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-wandura-olive/30 shadow-lg">
                <img
                  src="https://i.imgur.com/AtAGqr9.jpeg"
                  alt="Tapezierarbeiten"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Wallpaper className="w-10 h-10 text-wandura-olive mb-6 stroke-[1.5]" />
              <p className="text-xl text-gray-700 mb-6 leading-relaxed font-light">
                Tapeten verändern Räume komplett – sie schaffen Tiefe, bringen Struktur oder Wärme ein
                oder setzen einen gezielten Akzent, der Persönlichkeit verleiht.
              </p>

              <h4 className="font-normal text-base mb-4 text-gray-900">Professionelle Vorbereitung & Ausführung:</h4>
              <ul className="space-y-3 mb-8">
                {[
                  'Perfekte Untergrundvorbereitung',
                  'Exakte Übergänge & saubere Kanten',
                  'Große Materialvielfalt von klassisch bis exklusiv',
                  'Staubarme Ausführung',
                  'Zuverlässige Termine & transparente Abläufe',
                  'Langlebige Qualität',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-wandura-olive flex-shrink-0 mt-0.5 stroke-[1.5]" />
                    <span className="text-gray-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 border-l-4 border-wandura-olive p-6 rounded-lg mb-8">
                <p className="text-gray-700 font-light italic">
                  "Wir geben Ihren Wänden neue Ausstrahlung – und Sie genießen Räume, die jeden Tag aufs
                  Neue begeistern."
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="bg-wandura-olive hover:bg-wandura-olive-light text-white px-8 py-3 rounded-md font-normal text-sm tracking-wide transition-all inline-flex items-center gap-2"
              >
                Anfragen
                <ArrowRight className="w-4 h-4 stroke-[1.5]" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;

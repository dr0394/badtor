import { motion } from 'framer-motion';
import { Users, Briefcase, HeadphonesIcon, HardHat, UserPlus } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Team = () => {
  const isMobile = useReducedMotion();
  const team = [
    {
      name: 'Thomas Völker',
      role: 'Inhaber / Geschäftsführer',
      icon: Briefcase,
      image: 'https://i.imgur.com/2vvjOC8.jpeg',
    },
    {
      name: 'Sabrina Fey',
      role: 'Assistentin des Geschäftsführers',
      icon: HeadphonesIcon,
      image: 'https://i.imgur.com/GDEKrsN.jpeg',
    },
    {
      name: 'Marco Danne',
      role: 'Vorarbeiter / Projektleiter',
      icon: HardHat,
      image: 'https://i.imgur.com/kIkYcTc.jpeg',
    },
    {
      name: 'Dominik Herber',
      role: 'Vorarbeiter / Projektleiter',
      icon: HardHat,
      image: 'https://i.imgur.com/ZXYwfqE.jpeg',
    },
    {
      name: 'Imre Beleznai',
      role: 'Vorarbeiter',
      icon: HardHat,
      image: 'https://i.imgur.com/RZ5eVWF.jpeg',
    },
    {
      name: 'Zoe Lauer',
      role: 'Facharbeiterin',
      icon: HardHat,
      image: 'https://i.imgur.com/U5dZIQp.jpeg',
    },
    {
      name: 'Benedikt Schoech',
      role: 'Auszubildender 3. Lehrjahr',
      icon: HardHat,
      image: 'https://i.imgur.com/HrVCzWd.jpeg',
    },
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-wandura-olive/10 border border-wandura-olive/30 px-5 py-2 rounded-full mb-6">
            <span className="text-wandura-olive font-light text-xs tracking-[0.2em] uppercase">Unser Team</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6">
            Die Menschen hinter
            <br />
            <span className="text-wandura-olive font-normal italic">Wandura</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Lernen Sie das Team kennen, das mit Leidenschaft, Erfahrung und handwerklichem Können Ihre Projekte verwirklicht
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={isMobile ? {} : { y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-200 hover:border-wandura-olive transition-all"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-wandura-olive rounded-lg flex items-center justify-center">
                    <member.icon className="w-4 h-4 text-white stroke-[1.5]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-normal text-gray-900">{member.name}</h3>
                    <p className="text-sm text-wandura-olive font-light">{member.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Most-Wanted Card */}
          <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: team.length * 0.1 }}
            whileHover={isMobile ? {} : { y: -10 }}
            className="group relative overflow-hidden rounded-2xl bg-gray-50 border-2 border-dashed border-wandura-olive/30 hover:border-wandura-olive transition-all"
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src="https://i.imgur.com/JJzJ5Nf.png"
                alt="Stellenangebot"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-white text-center">
              <div className="w-16 h-16 bg-wandura-olive rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all">
                <UserPlus className="w-7 h-7 text-white stroke-[1.5]" />
              </div>

              <h3 className="text-xl font-normal mb-2 text-gray-900">Most Wanted</h3>
              <p className="text-sm text-gray-600 font-light mb-4">
                Verstärke unser Team
              </p>

              <a
                href="#contact"
                className="bg-wandura-olive hover:bg-wandura-olive-light text-white px-6 py-2 rounded-md font-normal text-sm tracking-wide transition-all inline-flex items-center gap-2"
              >
                <Users className="w-4 h-4 stroke-[1.5]" />
                Bewerben
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center"
        >
          <Users className="w-10 h-10 text-wandura-olive mx-auto mb-4 stroke-[1.5]" />
          <h3 className="text-xl font-normal mb-3 text-gray-900">Ein Team, ein Ziel</h3>
          <p className="text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Gemeinsam setzen wir auf Qualität, Präzision und Leidenschaft. Jedes Teammitglied bringt
            Expertise und Engagement ein, damit Ihr Projekt zum Erfolg wird.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;

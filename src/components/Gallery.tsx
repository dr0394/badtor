import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Gallery = () => {
  const isMobile = useReducedMotion();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('alle');

  const projects = [
    {
      src: 'https://i.imgur.com/jewRVIq.jpeg',
      category: 'fassade',
      title: 'Fassadenanstrich Einfamilienhaus',
    },
    {
      src: 'https://i.imgur.com/0iUDQzO.jpeg',
      category: 'innen',
      title: 'Malerarbeiten Wohnbereich',
    },
    {
      src: 'https://i.imgur.com/UvoyAPY.jpeg',
      category: 'naturkalk',
      title: 'Naturkalk Wohnraum',
    },
    {
      src: 'https://i.imgur.com/tZ77fvC.jpeg',
      category: 'innen',
      title: 'Büroumbau',
    },
    {
      src: 'https://i.imgur.com/2LE43Z9.jpeg',
      category: 'boeden',
      title: 'Designboden Verlegung',
    },
    {
      src: 'https://i.imgur.com/AtAGqr9.jpeg',
      category: 'tapeten',
      title: 'Tapezierarbeiten',
    },
    {
      src: 'https://i.imgur.com/jhSzEr2.jpeg',
      category: 'boeden',
      title: 'Bodenverlegung',
    },
    {
      src: 'https://i.imgur.com/LWImnin.jpeg',
      category: 'innen',
      title: 'Balken & Holzarbeiten',
    },
  ];

  const categories = [
    { value: 'alle', label: 'Alle Projekte' },
    { value: 'fassade', label: 'Fassaden' },
    { value: 'innen', label: 'Innenräume' },
    { value: 'naturkalk', label: 'Naturkalk' },
    { value: 'boeden', label: 'Designböden' },
    { value: 'tapeten', label: 'Tapeten' },
  ];

  const filteredProjects = filter === 'alle'
    ? projects
    : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-wandura-olive/10 border border-wandura-olive/30 px-5 py-2 rounded-full mb-6">
            <span className="text-wandura-olive font-light text-xs tracking-[0.2em] uppercase">Referenzen</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6">
            Unsere
            <br />
            <span className="text-wandura-olive font-normal italic">Projekte</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Mit über 4,9 / 5 Sternen bei 28 Bewertungen – ein Eindruck unserer Arbeit
          </p>
        </motion.div>

        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-normal text-sm tracking-wide transition-all ${
                filter === cat.value
                  ? 'bg-wandura-olive text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={isMobile ? {} : { y: -10 }}
              onClick={() => setSelectedImage(project.src)}
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-gray-50 border border-gray-200 hover:border-wandura-olive transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="font-normal text-sm text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <motion.button
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-wandura-olive rounded-full flex items-center justify-center hover:bg-wandura-olive-light transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img
              initial={isMobile ? { scale: 1 } : { scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Projekt Detail"
              className="max-w-full max-h-full rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Gallery = () => {
  const isMobile = useReducedMotion();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      src: 'https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Fensterreinigung',
    },
    {
      src: 'https://images.pexels.com/photos/4239039/pexels-photo-4239039.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Büroreinigung',
    },
    {
      src: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Gewerbliche Reinigung',
    },
    {
      src: 'https://images.pexels.com/photos/5824471/pexels-photo-5824471.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Gründliche Bodenreinigung',
    },
    {
      src: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Sanitärreinigung',
    },
    {
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Professionelle Reinigung',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-craft-sand-light relative overflow-hidden">
      <div className="absolute inset-0 texture-diagonal opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-craft-olive/20 border-2 border-craft-olive px-6 py-3 rounded mb-6">
            <span className="text-craft-olive font-bold text-xs tracking-[0.25em] uppercase">Unsere Arbeit</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-craft-charcoal font-roboto">
            Machen Sie sich ein Bild
            <br />
            <span className="text-craft-olive">von unserer Arbeit</span>
          </h2>
          <p className="text-base sm:text-lg text-craft-gray max-w-3xl mx-auto font-medium leading-relaxed">
            Handwerkliche Präzision trifft auf professionelle Reinigung – ein Einblick in unsere Projekte
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={isMobile ? {} : { y: -8, scale: 1.02 }}
              onClick={() => setSelectedImage(project.src)}
              className="group relative overflow-hidden rounded cursor-pointer bg-white border-4 border-craft-olive hover:border-craft-rust hover:shadow-2xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-craft-charcoal/90 via-craft-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform border-t-4 border-craft-rust">
                <h3 className="font-bold text-base text-white font-roboto">{project.title}</h3>
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
            className="fixed inset-0 z-50 bg-craft-navy/95 flex items-center justify-center p-4"
          >
            <motion.button
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-14 h-14 bg-craft-rust rounded flex items-center justify-center hover:bg-craft-rust-light transition-colors border-b-4 border-craft-rust-dark shadow-xl"
            >
              <X className="w-7 h-7 text-white stroke-[3]" />
            </motion.button>
            <motion.img
              initial={isMobile ? { scale: 1 } : { scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Reinigung Detail"
              className="max-w-full max-h-full rounded border-4 border-craft-rust shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

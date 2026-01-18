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
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-tor-teal/10 border border-tor-teal/30 px-5 py-2 rounded-full mb-6">
            <span className="text-tor-teal font-light text-xs tracking-[0.2em] uppercase">Unsere Arbeit</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6">
            Machen Sie sich ein Bild
            <br />
            <span className="text-tor-teal font-normal italic">von unserer Arbeit</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Sauberkeit, auf die Sie sich verlassen können – ein Einblick in unsere professionellen Reinigungsergebnisse
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
              whileHover={isMobile ? {} : { y: -10 }}
              onClick={() => setSelectedImage(project.src)}
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-gray-50 border border-gray-200 hover:border-tor-teal hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="font-normal text-base text-white">{project.title}</h3>
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
              className="absolute top-4 right-4 w-12 h-12 bg-tor-teal rounded-full flex items-center justify-center hover:bg-tor-teal-light transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img
              initial={isMobile ? { scale: 1 } : { scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Reinigung Detail"
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

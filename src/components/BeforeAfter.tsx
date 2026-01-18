import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfter = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const projects = [
    {
      title: 'Büroreinigung',
      location: 'Velbert',
      before: 'https://images.pexels.com/photos/6197118/pexels-photo-6197118.jpeg?auto=compress&cs=tinysrgb&w=1200',
      after: 'https://images.pexels.com/photos/4239039/pexels-photo-4239039.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Fensterreinigung',
      location: 'Velbert',
      before: 'https://images.pexels.com/photos/6197111/pexels-photo-6197111.jpeg?auto=compress&cs=tinysrgb&w=1200',
      after: 'https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Treppenhausreinigung',
      location: 'Velbert',
      before: 'https://images.pexels.com/photos/6195276/pexels-photo-6195276.jpeg?auto=compress&cs=tinysrgb&w=1200',
      after: 'https://images.pexels.com/photos/1904769/pexels-photo-1904769.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % projects.length);
    setSliderPosition(50);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + projects.length) % projects.length);
    setSliderPosition(50);
  };

  return (
    <section id="before-after" className="py-16 sm:py-20 md:py-24 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block bg-tor-teal/20 border border-tor-teal px-4 py-2 rounded-full mb-4">
            <span className="text-tor-teal font-bold text-sm tracking-widest">TRANSFORMATION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 sm:mb-6">
            VORHER / NACHHER
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Sehen Sie selbst, wie wir Räume verwandeln - mit Präzision und Leidenschaft
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border-2 border-zinc-700">
            <div className="p-4 sm:p-6 border-b border-zinc-700">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-2">
                {projects[activeSlide].title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-400">{projects[activeSlide].location}</p>
            </div>

            <div
              className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden cursor-ew-resize select-none"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              <div className="absolute inset-0">
                <img
                  src={projects[activeSlide].after}
                  alt="Nachher"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-tor-teal px-3 sm:px-4 py-1 sm:py-2 rounded-lg">
                  <span className="text-xs sm:text-sm font-bold tracking-wider">NACHHER</span>
                </div>
              </div>

              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={projects[activeSlide].before}
                  alt="Vorher"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-zinc-700 px-3 sm:px-4 py-1 sm:py-2 rounded-lg">
                  <span className="text-xs sm:text-sm font-bold tracking-wider">VORHER</span>
                </div>
              </div>

              <div
                className="absolute top-0 bottom-0 w-1 bg-tor-teal cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-tor-teal rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 absolute left-1" />
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 absolute right-1" />
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 flex items-center justify-between border-t border-zinc-700">
              <button
                onClick={prevSlide}
                className="bg-zinc-800 hover:bg-zinc-700 p-2 sm:p-3 rounded-lg transition-colors border border-zinc-600"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="flex gap-2 sm:gap-3">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveSlide(index);
                      setSliderPosition(50);
                    }}
                    className={`h-2 sm:h-3 rounded-full transition-all ${
                      index === activeSlide
                        ? 'w-8 sm:w-12 bg-tor-teal'
                        : 'w-2 sm:w-3 bg-zinc-600 hover:bg-zinc-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-zinc-800 hover:bg-zinc-700 p-2 sm:p-3 rounded-lg transition-colors border border-zinc-600"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          <p className="text-center text-xs sm:text-sm text-zinc-500 mt-4 sm:mt-6">
            Ziehen Sie den Schieberegler, um den Vergleich zu sehen
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;

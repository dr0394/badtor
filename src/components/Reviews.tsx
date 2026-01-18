import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Reviews = () => {
  const isMobile = useReducedMotion();
  const reviews = [
    {
      name: 'Christian H.',
      rating: 5,
      text: 'Kompetente Beratung, schnelle und saubere Ausführung, hohe Qualität und Zuverlässigkeit. Jederzeit gerne wieder!',
      initial: 'CH',
    },
    {
      name: 'Matthias R.',
      rating: 5,
      text: 'Verständliche Vorabplanung, Termineinhaltung, nettes Team und sauberes Ergebnis. Absolut empfehlenswert!',
      initial: 'MR',
    },
    {
      name: 'Barbara G.',
      rating: 5,
      text: 'Zeitnahe, saubere und schnelle Malerarbeit. Vielen Dank für die tolle Arbeit!',
      initial: 'BG',
    },
    {
      name: 'Holger O. J.',
      rating: 5,
      text: 'Fachkompetenz, Qualitätsanspruch, Termintreue und Sauberkeit – alles perfekt. Sehr zufrieden!',
      initial: 'HJ',
    },
  ];

  const avgRating = 4.9;
  const totalReviews = 28;

  return (
    <section id="reviews" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block bg-wandura-olive/10 border border-wandura-olive/30 px-5 py-2 rounded-full mb-6">
            <span className="text-wandura-olive font-light text-xs tracking-[0.2em] uppercase">Kundenstimmen</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6">
            Was Kunden über
            <br />
            <span className="text-wandura-olive font-normal italic">uns sagen</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-4">
            <div className="flex items-center gap-3">
              <div className="text-5xl sm:text-6xl font-light text-wandura-olive">{avgRating}</div>
              <div className="flex flex-col items-start">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-light">{totalReviews} Google Bewertungen</div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-normal text-sm tracking-wide transition-colors flex items-center gap-2 border border-gray-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                <path fill="none" d="M0 0h48v48H0z"/>
              </svg>
              Alle Bewertungen ansehen
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 relative hover:border-wandura-olive transition-colors"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-wandura-olive/20" />

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-wandura-olive flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-normal text-base">{review.initial}</span>
                </div>
                <div className="flex-1">
                  <div className="font-normal text-base text-gray-900">{review.name}</div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-white border border-gray-200 rounded-2xl p-8"
        >
          <h3 className="text-xl font-normal mb-2 text-gray-900">Stolz auf 4,9 / 5 Sterne</h3>
          <p className="text-gray-500 font-light">
            Mit {totalReviews} authentischen Google-Bewertungen gehören wir zu den am besten bewerteten Malerbetrieben in Fulda
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;

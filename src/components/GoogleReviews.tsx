import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const GoogleReviews = () => {
  const isMobile = useReducedMotion();

  const reviews = [
    {
      author: 'Sabine K.',
      rating: 5,
      date: 'vor 1 Woche',
      text: 'Sehr zuverlässig und gründlich! Die Fenster waren noch nie so sauber. Das Team arbeitet schnell und professionell. Absolute Empfehlung!'
    },
    {
      author: 'Michael B.',
      rating: 5,
      date: 'vor 2 Wochen',
      text: 'Prima Reinigungsservice macht unsere Büroreinigung seit 6 Monaten. Immer pünktlich, freundlich und sehr gründlich. Super Service!'
    },
    {
      author: 'Andrea L.',
      rating: 5,
      date: 'vor 3 Wochen',
      text: 'Die Grundreinigung nach unserem Umbau war perfekt. Alle Farbreste und Baustaub wurden restlos entfernt. Vielen Dank für die tolle Arbeit!'
    },
    {
      author: 'Frank W.',
      rating: 5,
      date: 'vor 1 Monat',
      text: 'Unser Treppenhaus wird wöchentlich gereinigt und sieht immer makellos aus. Sehr zuverlässiges Team und faire Preise.'
    },
    {
      author: 'Julia H.',
      rating: 5,
      date: 'vor 1 Monat',
      text: 'Als Praxisbetreiberin bin ich sehr zufrieden mit der hygienischen und diskreten Reinigung. Das Team kennt sich mit den hohen Anforderungen aus.'
    },
    {
      author: 'Thomas G.',
      rating: 5,
      date: 'vor 2 Monaten',
      text: 'Für unsere Ferienwohnung genau der richtige Service. Schneller Wechselservice zwischen den Gästen und immer einwandfreie Sauberkeit!'
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-gradient-to-br from-clean-sky via-white to-clean-ice relative overflow-hidden">
      <div className="absolute inset-0 texture-dots opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-clean-aqua/15 border-3 border-clean-aqua px-6 py-3 rounded-xl mb-6">
            <span className="text-clean-aqua font-bold text-xs tracking-[0.3em] uppercase">Kundenbewertungen</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-clean-navy font-roboto">
            Was unsere Kunden
            <br />
            <span className="text-clean-aqua">über uns sagen</span>
          </h2>
          <p className="text-base sm:text-lg text-clean-blue max-w-3xl mx-auto px-4 font-bold leading-relaxed mb-8">
            Vertrauen Sie auf die Erfahrungen unserer zufriedenen Kunden
          </p>

          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center border-4 border-clean-aqua shadow-xl">
              <svg className="w-10 h-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                <path fill="none" d="M0 0h48v48H0z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <div className="text-2xl font-bold text-clean-navy font-roboto">4,9 von 5,0</div>
              <div className="text-sm text-clean-blue font-bold">Basierend auf Google Bewertungen</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={isMobile ? {} : { y: -8, scale: 1.02 }}
              className="bg-white border-4 border-clean-aqua rounded-2xl p-6 hover:border-clean-aqua-light hover:shadow-2xl transition-all relative"
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-10 h-10 text-clean-aqua" />
              </div>

              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-clean-aqua rounded-xl flex items-center justify-center text-white font-bold shadow-lg border-b-4 border-clean-aqua-dark">
                  {review.author.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-clean-navy font-roboto">{review.author}</div>
                  <div className="text-xs text-clean-blue font-bold">{review.date}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-sm text-clean-blue font-bold leading-relaxed">
                {review.text}
              </p>

              <div className="mt-4 pt-4 border-t-2 border-clean-aqua/20 flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  <path fill="none" d="M0 0h48v48H0z"/>
                </svg>
                <span className="text-xs text-clean-blue font-bold">Verifizierte Google Bewertung</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;

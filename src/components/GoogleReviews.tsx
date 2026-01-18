import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const GoogleReviews = () => {
  const isMobile = useReducedMotion();

  const reviews = [
    {
      author: 'Petra Zimmermann',
      rating: 5,
      date: 'vor 2 Wochen',
      text: 'Unser barrierefreies Bad wurde in nur 4 Tagen fertiggestellt. Das Team von TOR GmbH war sehr professionell und die Qualität ist hervorragend. Wir können endlich wieder selbstständig duschen!'
    },
    {
      author: 'Klaus Meier',
      rating: 5,
      date: 'vor 1 Monat',
      text: 'Die Umwandlung unserer Badewanne in eine ebenerdige Dusche war die beste Entscheidung! Herr Sverdlov hat uns hervorragend beraten. Alles lief reibungslos ab.'
    },
    {
      author: 'Maria Schneider',
      rating: 5,
      date: 'vor 2 Monaten',
      text: 'Vom Vermessungstermin bis zur Fertigstellung lief alles perfekt. Das Team war pünktlich, sauber und sehr freundlich. Die Qualität der Materialien ist erstklassig!'
    },
    {
      author: 'Hans-Peter Wagner',
      rating: 5,
      date: 'vor 3 Monaten',
      text: 'Schnelle und professionelle Badsanierung! Die Handwerker waren sehr erfahren und haben sauber gearbeitet. Das Ergebnis übertrifft unsere Erwartungen. Absolute Empfehlung!'
    },
    {
      author: 'Ingrid Hoffmann',
      rating: 5,
      date: 'vor 4 Monaten',
      text: 'Wir sind begeistert von unserem neuen barrierefreien Bad. Die Planung war individuell auf unsere Bedürfnisse zugeschnitten. Toller Service von Anfang bis Ende!'
    },
    {
      author: 'Werner Fischer',
      rating: 5,
      date: 'vor 5 Monaten',
      text: 'Die TOR GmbH hat unser Bad komplett saniert. Faire Preise, transparente Abwicklung und höchste Qualität. Nach 25 Jahren im Geschäft wissen sie, was sie tun!'
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-hn-aqua/10 border border-hn-aqua/30 px-5 py-2 rounded-full mb-6">
            <span className="text-hn-aqua font-light text-xs tracking-[0.2em] uppercase">Kundenbewertungen</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6">
            Was unsere Kunden
            <br />
            <span className="text-hn-aqua font-normal italic">über uns sagen</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 font-light leading-relaxed mb-8">
            Vertrauen Sie auf die Erfahrungen unserer zufriedenen Kunden
          </p>

          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center border border-gray-200">
              <svg className="w-9 h-9" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
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
              <div className="text-2xl font-normal text-gray-900">4,9 von 5,0</div>
              <div className="text-sm text-gray-500 font-light">Basierend auf Google Bewertungen</div>
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
              whileHover={isMobile ? {} : { y: -5 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-hn-aqua transition-all relative"
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-8 h-8 text-hn-aqua" />
              </div>

              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-hn-aqua to-hn-aqua-light rounded-full flex items-center justify-center text-white font-normal">
                  {review.author.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-normal text-gray-900">{review.author}</div>
                  <div className="text-xs text-gray-500 font-light">{review.date}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {review.text}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  <path fill="none" d="M0 0h48v48H0z"/>
                </svg>
                <span className="text-xs text-gray-500 font-light">Verifizierte Google Bewertung</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;

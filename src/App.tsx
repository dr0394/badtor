import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Features from './components/Features';
import GoogleReviews from './components/GoogleReviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Prima Reinigungsservice – Professionelle Reinigung in Velbert & Umgebung';
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <Header onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <Services onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <BeforeAfter />
      <Features onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <About />
      <WhyUs />
      <GoogleReviews />
      <Contact onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import ParallaxSection from './components/ParallaxSection';
import HomeCleaning from './components/HomeCleaning';
import BeforeAfter from './components/BeforeAfter';
import Features from './components/Features';
import GoogleReviews from './components/GoogleReviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Prima Reinigungsservice – Professionelle Reinigung in Velbert & Umgebung';

    // Scroll to top on navigation
    const handleNavigation = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Listen for navigation clicks
    document.addEventListener('navigationClick', handleNavigation);

    return () => {
      document.removeEventListener('navigationClick', handleNavigation);
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Header onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <Services onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <About onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <ParallaxSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <HomeCleaning onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <BeforeAfter />
      <Features onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <WhyUs onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <GoogleReviews />
      <Contact onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <Footer />
      <WhatsAppButton />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}

export default App;

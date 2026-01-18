import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Instagram } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

const Header = ({ onOpenQuoteModal }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Über uns', id: 'about' },
    { label: 'Leistungen', id: 'services' },
    { label: 'Kontakt', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/primalogo.png"
              alt="Prima Reinigungsservice"
              className="h-12 w-auto"
            />
          </motion.div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-normal tracking-wide text-gray-700 hover:text-tor-teal transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+4920514360763"
              className="text-gray-700 hover:text-tor-teal transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 stroke-[1.5]" />
              <span className="text-sm">02051 / 436 0 763</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="bg-tor-teal hover:bg-tor-teal-light text-white px-6 py-2.5 rounded-md font-normal text-sm tracking-wide transition-all"
            >
              Angebot anfordern
            </button>
          </div>

          <button
            className="lg:hidden text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-base font-normal tracking-wide text-gray-900 hover:text-tor-teal transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+4920514360763"
              className="flex items-center gap-2 text-tor-teal text-base font-normal py-2"
            >
              <Phone className="w-4 h-4" />
              02051 / 436 0 763
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-tor-teal hover:bg-tor-teal-light text-white px-6 py-3 rounded-md font-normal text-sm tracking-wide transition-all"
            >
              Angebot anfordern
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;

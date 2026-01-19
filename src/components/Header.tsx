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
    // Scroll to top if clicking on hero/home
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
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
        isScrolled ? 'bg-white/98 backdrop-blur-lg border-b-4 border-clean-aqua shadow-xl' : 'bg-white/95 backdrop-blur-md border-b-2 border-clean-sky'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.08 }}
          >
            <img
              src="/primalogo.png"
              alt="Prima Reinigungsservice"
              className="h-14 w-auto"
            />
          </motion.div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-bold tracking-wide text-clean-navy hover:text-clean-aqua transition-colors border-b-3 border-transparent hover:border-clean-aqua pb-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+4920514360763"
              className="text-clean-navy hover:text-clean-aqua transition-colors flex items-center gap-2 font-bold"
            >
              <Phone className="w-5 h-5 stroke-[2.5]" />
              <span className="text-sm font-bold">02051 / 436 0 763</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="bg-clean-aqua hover:bg-clean-aqua-light text-white px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-all shadow-xl border-b-4 border-clean-aqua-dark hover:border-clean-aqua"
            >
              Angebot anfordern
            </button>
          </div>

          <button
            className="lg:hidden text-clean-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7 stroke-[2.5]" /> : <Menu className="w-7 h-7 stroke-[2.5]" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-clean-ice border-t-4 border-clean-aqua shadow-2xl"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-base font-bold tracking-wide text-clean-navy hover:text-clean-aqua transition-colors py-3 border-l-4 border-transparent hover:border-clean-aqua pl-4"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+4920514360763"
              className="flex items-center gap-3 text-clean-aqua text-base font-bold py-3 border-l-4 border-clean-aqua pl-4"
            >
              <Phone className="w-5 h-5 stroke-[2.5]" />
              02051 / 436 0 763
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-clean-aqua hover:bg-clean-aqua-light text-white px-6 py-4 rounded-xl font-bold text-base tracking-wide transition-all shadow-xl border-b-4 border-clean-aqua-dark"
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

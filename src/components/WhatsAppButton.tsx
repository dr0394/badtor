import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const WhatsAppButton = () => {
  const isMobile = useReducedMotion();

  return (
    <motion.a
      href="https://wa.me/4920514360763"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={isMobile ? {} : { scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#22c55e] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center group transition-colors"
      aria-label="WhatsApp Kontakt"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-light">
        Jetzt bei WhatsApp schreiben
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;

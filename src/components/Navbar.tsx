import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50' 
          : 'bg-slate-950/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Zap className="text-emerald-400" size={32} />
              <div className="absolute inset-0 bg-emerald-400/20 blur-lg rounded-full" />
            </div>
            <span className="text-white font-bold text-xl">Aurora Technologies</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('sous')}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Sous App
            </button>
            <button 
              onClick={() => scrollToSection('technologies')}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Technologies
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300"
            >
              Start Project
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-6 border-t border-slate-800/50"
          >
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-300 hover:text-emerald-400 transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('sous')}
                className="text-slate-300 hover:text-emerald-400 transition-colors text-left"
              >
                Sous App
              </button>
              <button 
                onClick={() => scrollToSection('technologies')}
                className="text-slate-300 hover:text-emerald-400 transition-colors text-left"
              >
                Technologies
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-300 hover:text-emerald-400 transition-colors text-left"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-6 py-3 rounded-full font-medium w-fit"
              >
                Start Project
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
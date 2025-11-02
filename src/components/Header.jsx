import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg dark:shadow-gray-900 border-b dark:border-gray-900 py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container-custom px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="h-10 flex items-center justify-center"
            >
              <img 
                src={theme === 'dark' ? '/logo_inverted.jpeg' : '/logo.jpeg'}
                alt="Clowd Icon" 
                className="h-full w-auto object-contain"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="h-8 hidden sm:flex items-center justify-center"
            >
              <img 
                src={theme === 'dark' ? '/logo_text_inverted.jpeg' : '/logo_text.jpeg'}
                alt="Clowd" 
                className="h-full w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-neutral-medium dark:text-gray-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
            <Link to="/contact" className="btn-primary text-sm py-3 px-6">
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-2xl text-neutral dark:text-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black shadow-2xl dark:shadow-accent/10 border-t dark:border-gray-900 backdrop-blur-lg"
          >
            <div className="container-custom px-6 py-8 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'bg-accent/10 dark:bg-accent/20 text-accent border-l-4 border-accent'
                        : 'text-neutral dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-accent border-l-4 border-transparent'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="pt-4 mt-4 border-t dark:border-gray-800"
              >
                <Link
                  to="/contact"
                  className="block w-full bg-accent hover:bg-accent/90 text-black font-semibold text-center py-4 rounded-lg shadow-lg shadow-accent/20 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;

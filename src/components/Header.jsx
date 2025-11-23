import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { saasCategories } from '../data/saasProductsData';

const Header = () => {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSaasDropdownOpen, setIsSaasDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
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
    setIsSaasDropdownOpen(false);
    setIsResourcesDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AI Solutions', path: '/use-cases' },
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
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                location.pathname === '/'
                  ? 'text-accent'
                  : 'text-neutral-medium dark:text-gray-200'
              }`}
            >
              Home
            </Link>
            
            {/* AI Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSaasDropdownOpen(true)}
              onMouseLeave={() => setIsSaasDropdownOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent flex items-center ${
                  location.pathname.startsWith('/saas')
                    ? 'text-accent'
                    : 'text-neutral-medium dark:text-gray-200'
                }`}
              >
                Products
                <FaChevronDown className={`ml-1 text-xs transition-transform duration-300 ${isSaasDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isSaasDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl dark:shadow-accent/20 overflow-hidden z-50"
                  >
                    <Link
                      to="/saas"
                      className="block px-6 py-3 text-sm font-semibold text-accent hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors border-b border-gray-200 dark:border-gray-800"
                    >
                      View All Products →
                    </Link>
                    {saasCategories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <Link
                          key={category.id}
                          to={`/saas/${category.id}`}
                          className="block px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group"
                        >
                          <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-3 flex-shrink-0`}>
                              <IconComponent className="text-white text-sm" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-semibold text-neutral dark:text-white group-hover:text-accent transition-colors truncate">
                                {category.name}
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link
              to="/use-cases"
              className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                location.pathname === '/use-cases' || location.pathname.startsWith('/use-cases/')
                  ? 'text-accent'
                  : 'text-neutral-medium dark:text-gray-200'
              }`}
            >
              Solutions
            </Link>
            
            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsResourcesDropdownOpen(true)}
              onMouseLeave={() => setIsResourcesDropdownOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent flex items-center ${
                  location.pathname.startsWith('/industries') || 
                  location.pathname.startsWith('/integrations') || 
                  location.pathname.startsWith('/case-studies') || 
                  location.pathname === '/roi-calculator' ||
                  location.pathname === '/pricing' ||
                  location.pathname.startsWith('/docs') ||
                  location.pathname.startsWith('/blog')
                    ? 'text-accent'
                    : 'text-neutral-medium dark:text-gray-200'
                }`}
              >
                Resources
                <FaChevronDown className={`ml-1 text-xs transition-transform duration-300 ${isResourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isResourcesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl dark:shadow-accent/20 overflow-hidden z-50"
                  >
                    <Link
                      to="/industries"
                      className="block px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors border-b border-gray-200 dark:border-gray-800"
                    >
                      <div className="text-sm font-semibold text-neutral dark:text-white">Industries</div>
                      <div className="text-xs text-neutral-medium dark:text-gray-400 mt-1">Solutions by industry</div>
                    </Link>
                    <Link
                      to="/integrations"
                      className="block px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors border-b border-gray-200 dark:border-gray-800"
                    >
                      <div className="text-sm font-semibold text-neutral dark:text-white">Integrations</div>
                      <div className="text-xs text-neutral-medium dark:text-gray-400 mt-1">Connect your tools</div>
                    </Link>
                    <Link
                      to="/case-studies"
                      className="block px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors border-b border-gray-200 dark:border-gray-800"
                    >
                      <div className="text-sm font-semibold text-neutral dark:text-white">Case Studies</div>
                      <div className="text-xs text-neutral-medium dark:text-gray-400 mt-1">Customer success stories</div>
                    </Link>
                    <Link
                      to="/roi-calculator"
                      className="block px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors border-b border-gray-200 dark:border-gray-800"
                    >
                      <div className="text-sm font-semibold text-neutral dark:text-white">ROI Calculator</div>
                      <div className="text-xs text-neutral-medium dark:text-gray-400 mt-1">Calculate your returns</div>
                    </Link>
                    <Link
                      to="/pricing"
                      className="block px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors border-b border-gray-200 dark:border-gray-800"
                    >
                      <div className="text-sm font-semibold text-neutral dark:text-white">Pricing</div>
                      <div className="text-xs text-neutral-medium dark:text-gray-400 mt-1">Plans & pricing</div>
                    </Link>
                    <Link
                      to="/docs"
                      className="block px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors border-b border-gray-200 dark:border-gray-800"
                    >
                      <div className="text-sm font-semibold text-neutral dark:text-white">Documentation</div>
                      <div className="text-xs text-neutral-medium dark:text-gray-400 mt-1">API & guides</div>
                    </Link>
                    <Link
                      to="/blog"
                      className="block px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                    >
                      <div className="text-sm font-semibold text-neutral dark:text-white">Blog</div>
                      <div className="text-xs text-neutral-medium dark:text-gray-400 mt-1">Latest insights</div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                location.pathname === '/about'
                  ? 'text-accent'
                  : 'text-neutral-medium dark:text-gray-200'
              }`}
            >
              About
            </Link>
            
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                location.pathname === '/contact'
                  ? 'text-accent'
                  : 'text-neutral-medium dark:text-gray-200'
              }`}
            >
              Contact
            </Link>

            <ThemeToggle />
            <Link to="/contact" className="btn-primary text-sm py-3 px-6">
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
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
            className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-black shadow-2xl dark:shadow-accent/10 border-t dark:border-gray-900 backdrop-blur-lg max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="container-custom px-6 py-8 space-y-2">
              {/* Home */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0 }}
              >
                <Link
                  to="/"
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                    location.pathname === '/'
                      ? 'bg-accent/10 dark:bg-accent/20 text-accent border-l-4 border-accent'
                      : 'text-neutral dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-accent border-l-4 border-transparent'
                  }`}
                >
                  Home
                </Link>
              </motion.div>
              
              {/* Solutions */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Link
                  to="/use-cases"
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                    location.pathname === '/use-cases' || location.pathname.startsWith('/use-cases/')
                      ? 'bg-accent/10 dark:bg-accent/20 text-accent border-l-4 border-accent'
                      : 'text-neutral dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-accent border-l-4 border-transparent'
                  }`}
                >
                  Solutions
                </Link>
              </motion.div>
              
              {/* Mobile AI Products */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <button
                  onClick={() => setIsSaasDropdownOpen(!isSaasDropdownOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                    location.pathname.startsWith('/saas')
                      ? 'bg-accent/10 dark:bg-accent/20 text-accent border-l-4 border-accent'
                      : 'text-neutral dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-accent border-l-4 border-transparent'
                  }`}
                >
                  Products
                  <FaChevronDown className={`text-xs transition-transform duration-300 ${isSaasDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isSaasDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 ml-4 space-y-2 overflow-hidden"
                    >
                      <Link
                        to="/saas"
                        className="block px-4 py-2 rounded-lg text-sm font-medium text-accent hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                      >
                        View All Products →
                      </Link>
                      {saasCategories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                          <Link
                            key={category.id}
                            to={`/saas/${category.id}`}
                            className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                          >
                            <div className="flex items-center">
                              <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-2 flex-shrink-0`}>
                                <IconComponent className="text-white text-xs" />
                              </div>
                              <span className="text-sm text-neutral dark:text-gray-300">
                                {category.name}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              {/* Resources Section in Mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="pt-4 border-t border-gray-200 dark:border-gray-800"
              >
                <div className="px-4 py-2 text-xs font-bold text-neutral-medium dark:text-gray-500 uppercase tracking-wider">
                  Resources
                </div>
                
                <Link
                  to="/industries"
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname.startsWith('/industries')
                      ? 'bg-accent/10 dark:bg-accent/20 text-accent border-l-4 border-accent'
                      : 'text-neutral dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-accent border-l-4 border-transparent'
                  }`}
                >
                  Industries
                </Link>
                
                <Link
                  to="/integrations"
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === '/integrations'
                      ? 'bg-accent/10 dark:bg-accent/20 text-accent border-l-4 border-accent'
                      : 'text-neutral dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-accent border-l-4 border-transparent'
                  }`}
                >
                  Integrations
                </Link>
                
                <Link
                  to="/case-studies"
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname.startsWith('/case-studies')
                      ? 'bg-accent/10 dark:bg-accent/20 text-accent border-l-4 border-accent'
                      : 'text-neutral dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-accent border-l-4 border-transparent'
                  }`}
                >
                  Case Studies
                </Link>
                
                <Link
                  to="/roi-calculator"
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === '/roi-calculator'
                      ? 'bg-accent/10 dark:bg-accent/20 text-accent border-l-4 border-accent'
                      : 'text-neutral dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-accent border-l-4 border-transparent'
                  }`}
                >
                  ROI Calculator
                </Link>
                
                <Link
                  to="/pricing"
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === '/pricing'
                      ? 'bg-accent/10 dark:bg-accent/20 text-accent border-l-4 border-accent'
                      : 'text-neutral dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-accent border-l-4 border-transparent'
                  }`}
                >
                  Pricing
                </Link>
                
                <Link
                  to="/docs"
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname.startsWith('/docs')
                      ? 'bg-accent/10 dark:bg-accent/20 text-accent border-l-4 border-accent'
                      : 'text-neutral dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-accent border-l-4 border-transparent'
                  }`}
                >
                  Documentation
                </Link>
                
                <Link
                  to="/blog"
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname.startsWith('/blog')
                      ? 'bg-accent/10 dark:bg-accent/20 text-accent border-l-4 border-accent'
                      : 'text-neutral dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-accent border-l-4 border-transparent'
                  }`}
                >
                  Blog
                </Link>
              </motion.div>
              
              {/* About */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="pt-4 border-t border-gray-200 dark:border-gray-800"
              >
                <Link
                  to="/about"
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                    location.pathname === '/about'
                      ? 'bg-accent/10 dark:bg-accent/20 text-accent border-l-4 border-accent'
                      : 'text-neutral dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-accent border-l-4 border-transparent'
                  }`}
                >
                  About
                </Link>
              </motion.div>
              
              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.45 }}
              >
                <Link
                  to="/contact"
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                    location.pathname === '/contact'
                      ? 'bg-accent/10 dark:bg-accent/20 text-accent border-l-4 border-accent'
                      : 'text-neutral dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-accent border-l-4 border-transparent'
                  }`}
                >
                  Contact
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
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

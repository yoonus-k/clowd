import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Use Cases', path: '/use-cases' },
      { name: 'Contact', path: '/contact' },
    ],
    useCases: [
      { name: 'Supply Chain Intelligence', path: '/use-cases/supply-chain' },
      { name: 'Document Processing', path: '/use-cases/document-processing' },
      { name: 'Demand Forecasting', path: '/use-cases/demand-forecasting' },
      { name: 'Customer Service AI', path: '/use-cases/customer-service' },
      { name: 'Financial Intelligence', path: '/use-cases/financial-intelligence' },
    ],
    contact: [
      { icon: FaMapMarkerAlt, text: 'Jeddah, Saudi Arabia' },
      { icon: FaEnvelope, text: 'info@clowd.ai' },
      { icon: FaPhone, text: '+966 XX XXX XXXX' },
    ],
  };

  return (
    <footer className="bg-primary dark:bg-black text-white border-t dark:border-gray-900 transition-colors duration-300">
      <div className="container-custom px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="h-8 flex items-center justify-center">
                <img 
                  src="/logo_with_text_inverted.jpeg"
                  alt="Clowd" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              AI-driven solutions that transform business operations. We bridge the gap between AI capability and business execution.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#00D4FF' }}
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#00D4FF' }}
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a
                href="mailto:info@clowd.ai"
                whileHover={{ scale: 1.1, color: '#00D4FF' }}
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <FaEnvelope size={24} />
              </motion.a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.useCases.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <item.icon className="text-accent mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Clowd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

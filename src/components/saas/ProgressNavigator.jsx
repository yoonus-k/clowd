import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaExclamationTriangle, 
  FaLightbulb, 
  FaStar, 
  FaChartLine, 
  FaBriefcase,
  FaPlug,
  FaCalculator,
  FaCog,
  FaRocket,
  FaDollarSign,
  FaQuestionCircle,
  FaCheck
} from 'react-icons/fa';

const ProgressNavigator = ({ productName, onOpenChange }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = (open) => {
    setIsOpen(open);
    if (onOpenChange) {
      onOpenChange(open);
    }
  };

  const sections = [
    { id: 'hero', label: 'Overview', icon: FaRocket },
    { id: 'problems', label: 'Problems', icon: FaExclamationTriangle },
    { id: 'solution', label: 'Solution', icon: FaLightbulb },
    { id: 'features', label: 'Features', icon: FaStar },
    { id: 'business-value', label: 'Business Value', icon: FaChartLine },
    { id: 'use-cases', label: 'Use Cases', icon: FaBriefcase },
    { id: 'integrations', label: 'Integrations', icon: FaPlug },
    { id: 'roi-calculator', label: 'ROI Calculator', icon: FaCalculator },
    { id: 'tech-specs', label: 'Tech Specs', icon: FaCog },
    { id: 'implementation', label: 'Implementation', icon: FaRocket },
    { id: 'pricing', label: 'Pricing', icon: FaDollarSign },
    { id: 'faq', label: 'FAQ', icon: FaQuestionCircle }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);

      // Show navigator after scrolling past hero
      setIsVisible(scrolled > 300);

      // Detect active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      let newActiveSection = activeSection;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150) {
            newActiveSection = section.id;
            break;
          }
        }
      }
      
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
        
        // Auto-scroll sidebar to keep active section visible
        const sidebarScroller = document.getElementById('sidebar-scroller');
        const activeButton = document.getElementById(`nav-${newActiveSection}`);
        if (sidebarScroller && activeButton) {
          const scrollerRect = sidebarScroller.getBoundingClientRect();
          const buttonRect = activeButton.getBoundingClientRect();
          
          // Check if button is below visible area
          if (buttonRect.bottom > scrollerRect.bottom - 20) {
            activeButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          // Check if button is above visible area
          else if (buttonRect.top < scrollerRect.top + 20) {
            activeButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <AnimatePresence>
        {isVisible && !isOpen && (
          <motion.button
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -60, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => toggleSidebar(true)}
            className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-accent hover:bg-accent-dark text-white p-3 rounded-r-xl shadow-lg items-center gap-2 group"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-xs font-semibold whitespace-nowrap">Navigation</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar Navigator */}
      <AnimatePresence>
        {isVisible && isOpen && (
          <motion.div
            initial={{ x: -320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -320, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="hidden lg:block fixed left-0 top-20 bottom-0 z-40 w-80"
          >
            <div className="h-full bg-white dark:bg-gray-800 shadow-2xl border-r border-gray-200 dark:border-gray-700 flex flex-col">
              {/* Header */}
              <div className="p-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    PAGE NAVIGATION
                  </div>
                  <button
                    onClick={() => toggleSidebar(false)}
                    className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    title="Close navigation"
                  >
                    <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="text-lg font-bold text-primary">
                      {Math.round(scrollProgress)}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      style={{ width: `${scrollProgress}%` }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Items */}
              <div 
                id="sidebar-scroller"
                className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600"
              >
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  const isPassed = sections.findIndex(s => s.id === activeSection) > index;
                  
                  return (
                    <button
                      key={section.id}
                      id={`nav-${section.id}`}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                        isActive
                          ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105'
                          : isPassed
                          ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className={`flex-shrink-0 text-lg ${isActive ? 'text-white' : ''}`}>
                        {isPassed ? (
                          <FaCheck className="text-base" />
                        ) : (
                          <Icon className="text-base" />
                        )}
                      </div>
                      <div className="flex-1 text-left">
                        <span className="text-sm font-semibold block">
                          {section.label}
                        </span>
                        <span className="text-xs opacity-75">
                          Section {index + 1} of {sections.length}
                        </span>
                      </div>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="w-2 h-8 bg-white rounded-full"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Completed
                  </span>
                  <span className="font-bold text-green-600 dark:text-green-400">
                    {sections.filter((s, i) => sections.findIndex(sec => sec.id === activeSection) > i).length} / {sections.length}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Top Progress Bar */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-16 left-0 right-0 z-40"
          >
            <div className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
              {/* Progress Bar */}
              <div className="h-1 bg-gray-200 dark:bg-gray-700">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  style={{ width: `${scrollProgress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              {/* Current Section Indicator */}
              <div className="px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {(() => {
                    const currentSection = sections.find(s => s.id === activeSection);
                    const Icon = currentSection?.icon || FaRocket;
                    return (
                      <>
                        <Icon className="text-primary text-sm" />
                        <span className="text-sm font-semibold text-neutral dark:text-white">
                          {currentSection?.label || 'Overview'}
                        </span>
                      </>
                    );
                  })()}
                </div>
                <span className="text-xs font-bold text-primary">
                  {Math.round(scrollProgress)}%
                </span>
              </div>

              {/* Horizontal Section Dots */}
              <div className="px-4 pb-3 flex items-center gap-1 overflow-x-auto scrollbar-none">
                {sections.map((section, index) => {
                  const isActive = activeSection === section.id;
                  const isPassed = sections.findIndex(s => s.id === activeSection) > index;
                  
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex-shrink-0 w-2 h-2 rounded-full transition-all duration-200 ${
                        isActive
                          ? 'bg-primary w-8'
                          : isPassed
                          ? 'bg-green-500'
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      title={section.label}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProgressNavigator;

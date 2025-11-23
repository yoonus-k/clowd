import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaMicrophone, FaCalendarAlt, FaCheck, FaTimes } from 'react-icons/fa';

const LiveDemo = ({ product }) => {
  const [isDemoPlaying, setIsDemoPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const handleTryDemo = () => {
    setIsDemoPlaying(true);
    // In production, this would trigger actual demo functionality
  };

  const handleVoiceTest = () => {
    setIsRecording(!isRecording);
    // In production, this would handle voice input
  };

  const handleScheduleDemo = () => {
    // In production, this would open Calendly or booking system
    window.open('https://calendly.com/clowd-demo', '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Demo Preview */}
        <div>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Try It Yourself
            </span>
            <h3 className="text-3xl font-bold text-neutral dark:text-white mb-4">
              Experience {product.name} Live
            </h3>
            <p className="text-neutral-medium dark:text-gray-300 leading-relaxed">
              No signup required. Test all features instantly and see how it works for your business.
            </p>
          </div>

          {/* Demo Preview Image/Video */}
          <div className="relative rounded-xl overflow-hidden bg-gray-900 shadow-2xl">
            {!isDemoPlaying ? (
              <div className="relative">
                {/* Demo Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                      <FaPlay className="text-4xl text-white ml-1" />
                    </div>
                    <p className="text-white font-semibold">Watch Demo Video</p>
                    <p className="text-white/70 text-sm">2 minutes</p>
                  </div>
                </div>
                {/* Play Overlay */}
                <button
                  onClick={handleTryDemo}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-all duration-300 group"
                >
                  <div className="w-20 h-20 rounded-full bg-accent hover:bg-accent-dark text-white flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                    <FaPlay className="text-3xl ml-1" />
                  </div>
                </button>
              </div>
            ) : (
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                {/* Simulated Demo Interface */}
                <div className="text-center p-8">
                  <div className="inline-block animate-pulse mb-4">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                      <div className="w-12 h-12 rounded-full bg-accent/40 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-accent"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-white font-semibold mb-2">Demo is Running...</p>
                  <p className="text-white/70 text-sm mb-4">Simulating real-world usage</p>
                  <button
                    onClick={() => setIsDemoPlaying(false)}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    Stop Demo
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Demo Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="text-2xl font-bold text-accent mb-1">2min</div>
              <div className="text-xs text-neutral-medium dark:text-gray-400">Setup Time</div>
            </div>
            <div className="text-center p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-xs text-neutral-medium dark:text-gray-400">Cloud-Based</div>
            </div>
            <div className="text-center p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="text-2xl font-bold text-blue-600 mb-1">14d</div>
              <div className="text-xs text-neutral-medium dark:text-gray-400">Free Trial</div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Options */}
        <div className="space-y-6">
          {/* Quick Demo Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 cursor-pointer"
            onClick={handleTryDemo}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <FaPlay className="text-xl text-accent" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-neutral dark:text-white mb-2">
                  Quick Interactive Demo
                </h4>
                <p className="text-sm text-neutral-medium dark:text-gray-400 mb-3">
                  Explore all features in a sandbox environment. No installation needed.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded text-xs">
                    <FaCheck className="mr-1" /> No signup
                  </span>
                  <span className="inline-flex items-center px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded text-xs">
                    <FaCheck className="mr-1" /> 2 minutes
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Voice Test (for voice-enabled products) */}
          {product.category === 'industry' && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 cursor-pointer"
              onClick={handleVoiceTest}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${isRecording ? 'bg-red-500' : 'bg-purple-500/10'} flex items-center justify-center flex-shrink-0 transition-all duration-300`}>
                  <FaMicrophone className={`text-xl ${isRecording ? 'text-white animate-pulse' : 'text-purple-600'}`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-neutral dark:text-white mb-2">
                    Test Voice Commands
                  </h4>
                  <p className="text-sm text-neutral-medium dark:text-gray-400 mb-3">
                    Try our AI voice recognition with your own voice in Arabic or English.
                  </p>
                  <AnimatePresence>
                    {isRecording && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3 border border-red-200 dark:border-red-800"
                      >
                        <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
                          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                          Listening... Try saying "Show me today's menu"
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}

          {/* Schedule Personal Demo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-accent to-accent-dark text-white rounded-xl p-6 cursor-pointer shadow-lg"
            onClick={handleScheduleDemo}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <FaCalendarAlt className="text-xl" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-2">
                  Schedule Personal Demo
                </h4>
                <p className="text-sm text-white/90 mb-3">
                  Get a customized walkthrough from our product experts. See how it works with your specific data.
                </p>
                <div className="flex items-center text-xs text-white/80">
                  <FaCheck className="mr-2" />
                  <span>15-minute call • Free consultation • No obligation</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What You'll See */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
            <h5 className="text-sm font-bold text-neutral dark:text-white mb-4">
              What You'll Experience:
            </h5>
            <ul className="space-y-2">
              {[
                'Real-time AI processing speed',
                'Actual user interface and workflow',
                'Integration with your existing tools',
                'Custom reporting and analytics'
              ].map((item, index) => (
                <li key={index} className="flex items-start text-sm text-neutral-medium dark:text-gray-400">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;

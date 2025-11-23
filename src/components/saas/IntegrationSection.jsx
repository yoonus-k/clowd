import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaTools, FaBook, FaPlug } from 'react-icons/fa';

const IntegrationSection = ({ integrations, installTime, hardwareRequired, apiDocs, productName }) => {
  return (
    <section className="section-padding bg-white dark:bg-black border-y dark:border-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
            Integrations & Compatibility
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
            Works With Your <span className="text-accent">Existing Tools</span>
          </h2>
          <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto">
            Seamless integration with the platforms you already use. No complex setup required.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent/20 dark:to-accent/10 rounded-xl p-6 text-center border border-accent/20"
          >
            <FaClock className="text-accent text-3xl mx-auto mb-3" />
            <div className="text-2xl font-bold text-neutral dark:text-white mb-1">{installTime}</div>
            <div className="text-sm text-neutral-medium dark:text-gray-400">Installation Time</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-green-500/10 to-green-500/5 dark:from-green-500/20 dark:to-green-500/10 rounded-xl p-6 text-center border border-green-500/20"
          >
            <FaTools className="text-green-500 text-3xl mx-auto mb-3" />
            <div className="text-2xl font-bold text-neutral dark:text-white mb-1">
              {hardwareRequired ? 'Required' : 'Zero Hardware'}
            </div>
            <div className="text-sm text-neutral-medium dark:text-gray-400">Hardware Needed</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 dark:from-purple-500/20 dark:to-purple-500/10 rounded-xl p-6 text-center border border-purple-500/20"
          >
            <FaBook className="text-purple-500 text-3xl mx-auto mb-3" />
            <div className="text-2xl font-bold text-neutral dark:text-white mb-1">Available</div>
            <div className="text-sm text-neutral-medium dark:text-gray-400">API Documentation</div>
          </motion.div>
        </div>

        {/* Integration Cards */}
        {integrations && integrations.length > 0 && (
          <>
            <h3 className="text-2xl font-display font-bold text-neutral dark:text-white mb-8 text-center">
              Seamless Integrations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-neutral-light dark:bg-gray-950 border dark:border-gray-800 rounded-xl p-6 hover:border-accent dark:hover:border-accent transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center">
                    {integration.logo ? (
                      <img 
                        src={integration.logo} 
                        alt={integration.name}
                        className="h-12 w-12 object-contain mb-3"
                      />
                    ) : (
                      <FaPlug className="text-accent text-3xl mb-3" />
                    )}
                    <h4 className="font-semibold text-neutral dark:text-white mb-1">
                      {integration.name}
                    </h4>
                    {integration.status && (
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        integration.status === 'live' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                          : integration.status === 'beta'
                          ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                      }`}>
                        {integration.status === 'live' ? 'Live' : integration.status === 'beta' ? 'Beta' : 'Coming Soon'}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* How It Works Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-accent/5 to-blue-500/5 dark:from-accent/10 dark:to-blue-500/10 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral dark:text-white mb-8 text-center">
            Plug & Play Integration
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-accent text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-semibold text-neutral dark:text-white mb-2">Sign Up</h4>
              <p className="text-sm text-neutral-medium dark:text-gray-400">
                Create account in 2 minutes
              </p>
            </div>

            <div className="hidden md:block text-accent text-2xl">→</div>

            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-accent text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-semibold text-neutral dark:text-white mb-2">Connect</h4>
              <p className="text-sm text-neutral-medium dark:text-gray-400">
                Link your platforms
              </p>
            </div>

            <div className="hidden md:block text-accent text-2xl">→</div>

            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-accent text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-semibold text-neutral dark:text-white mb-2">Launch</h4>
              <p className="text-sm text-neutral-medium dark:text-gray-400">
                Start using AI instantly
              </p>
            </div>
          </div>

          {apiDocs && (
            <div className="mt-8 text-center">
              <a 
                href={apiDocs}
                className="inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors"
              >
                <FaBook className="mr-2" />
                View API Documentation
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationSection;

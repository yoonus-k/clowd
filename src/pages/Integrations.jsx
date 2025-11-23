import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck, FaClock, FaSearch, FaBook, FaPlug } from 'react-icons/fa';
import { integrations, integrationCategories, getIntegrationsByCategory, getPopularIntegrations } from '../data/integrationsData';

const Integrations = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter integrations based on category and search
  const filteredIntegrations = getIntegrationsByCategory(selectedCategory).filter(integration =>
    integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    integration.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const popularIntegrations = getPopularIntegrations();

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaPlug className="mr-2" />
              <span className="text-sm font-semibold">20+ Integrations Available</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Connect Everything
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Seamlessly integrate Clowd AI with your favorite tools and platforms
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Request Integration
                <FaArrowRight className="ml-2" />
              </Link>
              <a
                href="#integrations"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Browse Integrations
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950 border-y dark:border-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '20+', label: 'Active Integrations' },
              { value: '10 min', label: 'Avg Setup Time' },
              { value: '99.9%', label: 'API Uptime' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-neutral-medium dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-4">
              Most Popular Integrations
            </h2>
            <p className="text-xl text-neutral-medium dark:text-gray-300">
              Connect with the tools your team already uses
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {popularIntegrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <motion.div
                  key={integration.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${integration.gradient} p-6 rounded-2xl text-white text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer h-full flex flex-col items-center justify-center`}>
                    <Icon className="text-5xl mb-3" />
                    <h3 className="font-bold text-lg">{integration.name}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="#all-integrations"
              className="inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              View All Integrations
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section id="all-integrations" className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-neutral dark:text-white mb-8 text-center">
              All Integrations
            </h2>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-medium dark:text-gray-400" />
                <input
                  type="text"
                  placeholder="Search integrations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:border-accent text-neutral dark:text-white"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {integrationCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-accent text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-900 text-neutral dark:text-white border border-gray-200 dark:border-gray-800 hover:border-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIntegrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <motion.div
                  key={integration.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl dark:hover:shadow-accent/10 transition-all duration-300 group"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${integration.gradient} p-6 text-white`}>
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="text-4xl" />
                      {integration.popular && (
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{integration.name}</h3>
                    <p className="text-sm text-white/90">{integration.category}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-neutral-medium dark:text-gray-400 mb-6">
                      {integration.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {integration.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <FaCheck className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-sm text-neutral dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Setup Time */}
                    <div className="flex items-center text-sm text-neutral-medium dark:text-gray-400 mb-6">
                      <FaClock className="mr-2 text-accent" />
                      <span>Setup time: {integration.setupTime}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Link
                        to="/contact"
                        className="flex-1 bg-accent hover:bg-accent/90 text-white font-semibold px-4 py-2 rounded-lg transition-all text-center"
                      >
                        Connect
                      </Link>
                      <a
                        href={integration.apiDocs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-accent transition-colors"
                        title="API Documentation"
                      >
                        <FaBook className="text-accent" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredIntegrations.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-neutral-medium dark:text-gray-400 mb-4">
                No integrations found
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="text-accent hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-accent text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Need a Custom Integration?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our team can build custom integrations for your specific workflow and tools
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Integration Team
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;

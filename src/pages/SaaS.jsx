import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaRocket, FaCheckCircle } from 'react-icons/fa';
import { saasCategories } from '../data/saasProductsData';

const SaaS = () => {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-accent dark:from-gray-950 dark:via-gray-900 dark:to-black text-white overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-accent/20 text-accent px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center">
                <FaRocket className="mr-2" />
                Ready-to-Use AI Solutions
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              AI Products Powered by{' '}
              <span className="text-accent">AI Innovation</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Choose from our suite of industry-specific AI tools designed to solve real business problems. 
              Start with a 14-day free trial, no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-green-400"
              >
                <FaCheckCircle />
                <span>14-Day Free Trial</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-green-400"
              >
                <FaCheckCircle />
                <span>No Credit Card Required</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-green-400"
              >
                <FaCheckCircle />
                <span>Cancel Anytime</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding bg-white dark:bg-black border-t dark:border-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
              Browse AI Products by Category
            </h2>
            <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto">
              Select a category to discover AI-powered tools tailored to your industry needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saasCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={`/saas/${category.id}`}
                    className="block h-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-900 rounded-2xl p-8 hover:shadow-2xl dark:hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white text-3xl" />
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-neutral dark:text-white mb-3 group-hover:text-accent dark:group-hover:text-accent transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-neutral-medium dark:text-gray-400 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      View Products
                      <FaArrowRight className="ml-2" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-accent dark:from-gray-950 dark:to-gray-900 text-white border-t dark:border-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-accent mb-2">17+</div>
              <div className="text-gray-200">AI Products</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-accent mb-2">5</div>
              <div className="text-gray-200">Industry Categories</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-accent mb-2">14 Days</div>
              <div className="text-gray-200">Free Trial</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-gray-200">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white dark:bg-black border-t dark:border-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary to-accent dark:from-gray-950 dark:to-gray-900 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Not Sure Which Product Fits Your Needs?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation with our experts to find the perfect AI solution for your business
              </p>
              <Link
                to="/contact"
                className="bg-white dark:bg-accent text-primary dark:text-black hover:bg-gray-100 dark:hover:bg-accent/90 font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center text-lg shadow-xl"
              >
                Schedule Free Consultation
                <FaArrowRight className="ml-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SaaS;

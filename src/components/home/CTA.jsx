import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendar } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-accent dark:from-gray-950 dark:via-gray-900 dark:to-black text-white relative overflow-hidden border-t dark:border-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
              Stop losing money to inefficiency. Schedule a free consultation and discover 
              how AI can revolutionize your operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white dark:bg-accent text-primary dark:text-black hover:bg-gray-100 dark:hover:bg-accent/90 font-semibold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center text-lg"
              >
                <FaCalendar className="mr-3" />
                Schedule Free Consultation
                <FaArrowRight className="ml-3" />
              </Link>
              <Link
                to="/use-cases"
                className="border-2 border-white dark:border-accent text-white dark:text-accent hover:bg-white dark:hover:bg-accent hover:text-primary dark:hover:text-black font-semibold px-10 py-5 rounded-lg transition-all duration-300 inline-flex items-center text-lg"
              >
                Explore AI Solutions
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-sm p-6 rounded-xl border dark:border-gray-800"
              >
                <div className="text-3xl font-bold mb-2">15 min</div>
                <div className="text-gray-300 dark:text-gray-400">Free Consultation</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-sm p-6 rounded-xl border dark:border-gray-800"
              >
                <div className="text-3xl font-bold mb-2">No Obligation</div>
                <div className="text-gray-300 dark:text-gray-400">Just Insights</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-sm p-6 rounded-xl border dark:border-gray-800"
              >
                <div className="text-3xl font-bold mb-2">Instant Value</div>
                <div className="text-gray-300 dark:text-gray-400">Get Actionable Ideas</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaChartLine, FaDollarSign } from 'react-icons/fa';

const ProblemSection = ({ problems, productName }) => {
  const icons = [FaExclamationTriangle, FaChartLine, FaDollarSign];

  return (
    <section className="section-padding bg-red-50 dark:bg-gray-950 border-y dark:border-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold mb-4">
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
            Lost Revenue <span className="text-red-600 dark:text-red-400">Every Single Day</span>
          </h2>
          <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto">
            Without {productName}, businesses are hemorrhaging money due to inefficiencies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-black border-2 border-red-200 dark:border-red-900/30 rounded-xl p-8 hover:border-red-400 dark:hover:border-red-700 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="text-red-600 dark:text-red-400 text-2xl" />
                </div>
                
                <div className="text-center">
                  <div className="text-5xl font-display font-bold text-red-600 dark:text-red-400 mb-3">
                    {problem.stat}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-neutral dark:text-white mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-neutral-medium dark:text-gray-400 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cost of Inaction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 bg-gradient-to-r from-red-500 to-red-600 dark:from-red-900 dark:to-red-800 rounded-2xl text-white text-center"
        >
          <FaDollarSign className="text-5xl mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
            The Cost of Doing Nothing
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Every day without {productName} means lost opportunities, wasted resources, and falling behind competitors who are already using AI
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;

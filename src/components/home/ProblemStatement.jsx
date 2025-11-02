import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaMoneyBillWave, FaClock, FaChartLine } from 'react-icons/fa';

const ProblemStatement = () => {
  const painPoints = [
    {
      icon: FaMoneyBillWave,
      stat: '$1.3T',
      label: 'Lost Annually',
      description: 'Businesses lose over $1.3 trillion annually due to operational inefficiencies',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: FaClock,
      stat: '40%',
      label: 'Time Wasted',
      description: 'Employees spend 40% of their time on repetitive manual tasks',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: FaChartLine,
      stat: '23%',
      label: 'Revenue Impact',
      description: 'Poor forecasting and planning lead to 23% revenue loss in supply chains',
      color: 'from-yellow-500 to-red-500',
    },
    {
      icon: FaExclamationTriangle,
      stat: '65%',
      label: 'Budget Overruns',
      description: 'Projects exceed budgets due to lack of intelligent automation and insights',
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <section className="section-padding bg-neutral-light dark:bg-black transition-colors duration-300 border-t dark:border-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
            The Hidden Cost of <span className="gradient-text">Inefficiency</span>
          </h2>
          <p className="text-xl text-neutral-medium dark:text-white max-w-3xl mx-auto">
            While AI technology advances rapidly, most businesses struggle to leverage its potential. 
            The result? Massive losses in productivity, revenue, and competitive advantage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <point.icon className="text-white text-2xl" />
                </div>
                <div className={`text-4xl font-display font-bold bg-gradient-to-r ${point.color} bg-clip-text text-transparent mb-2`}>
                  {point.stat}
                </div>
                <div className="text-sm font-semibold text-neutral dark:text-white uppercase tracking-wide mb-3">
                  {point.label}
                </div>
              </div>
              <p className="text-neutral-medium dark:text-gray-300 text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 bg-gradient-to-r from-warning/10 to-warning/5 dark:from-warning/20 dark:to-warning/10 border-l-4 border-warning rounded-lg"
        >
          <h3 className="text-2xl font-display font-bold text-neutral dark:text-white mb-4 flex items-center">
            <FaExclamationTriangle className="text-warning mr-3" />
            The Bottom Line
          </h3>
          <p className="text-lg text-neutral-medium dark:text-gray-300 leading-relaxed">
            Without intelligent automation, businesses are hemorrhaging money, time, and opportunities. 
            The gap between what AI can do and what most companies are actually doing is costing them 
            their competitive edge. <span className="font-semibold text-neutral dark:text-white">It's time to close that gap.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;

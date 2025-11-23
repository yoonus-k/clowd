import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTruck, FaFileAlt, FaChartLine, FaRobot, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

const UseCasesGrid = () => {
  const useCases = [
    {
      id: 'supply-chain',
      icon: FaTruck,
      title: 'Supply Chain Intelligence',
      description: 'Real-time optimization, demand prediction, and logistics automation that reduces costs by 30%.',
      painPoint: '23% of revenue lost to inefficiencies',
      color: 'from-blue-500 to-cyan-500',
      stats: { reduction: '30%', metric: 'Cost Reduction' },
    },
    {
      id: 'document-processing',
      icon: FaFileAlt,
      title: 'Document Processing',
      description: 'Intelligent extraction, classification, and workflow automation for instant document handling.',
      painPoint: '40% of time wasted on data entry',
      color: 'from-purple-500 to-pink-500',
      stats: { reduction: '10x', metric: 'Faster Processing' },
    },
    {
      id: 'demand-forecasting',
      icon: FaChartLine,
      title: 'Demand Forecasting',
      description: 'ML-powered predictions for inventory, staffing, and resource allocation across industries.',
      painPoint: '$1.1T lost to poor inventory',
      color: 'from-green-500 to-emerald-500',
      stats: { reduction: '95%', metric: 'Forecast Accuracy' },
    },
    {
      id: 'customer-service',
      icon: FaRobot,
      title: 'AI Customer Service',
      description: 'Autonomous agents handling L1/L2 support 24/7 with human-level comprehension.',
      painPoint: '65% of costs on repetitive queries',
      color: 'from-orange-500 to-red-500',
      stats: { reduction: '60%', metric: 'Support Costs' },
    },
    {
      id: 'financial-intelligence',
      icon: FaShieldAlt,
      title: 'Financial Intelligence',
      description: 'Real-time transaction monitoring, fraud detection, and predictive financial analytics.',
      painPoint: '5% of revenue lost to fraud',
      color: 'from-indigo-500 to-purple-500',
      stats: { reduction: '99%', metric: 'Fraud Detection' },
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
            Transform Every Aspect of <span className="gradient-text">Your Business</span>
          </h2>
          <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto">
            Industry-specific AI solutions designed to solve your most pressing operational challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.slice(0, 3).map((useCase, index) => (
            <UseCaseCard key={useCase.id} useCase={useCase} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {useCases.slice(3).map((useCase, index) => (
            <UseCaseCard key={useCase.id} useCase={useCase} index={index + 3} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/use-cases" className="btn-primary inline-flex items-center">
            View All AI Solutions
            <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const UseCaseCard = ({ useCase, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/use-cases/${useCase.id}`} className="block h-full">
        <div className="card h-full group cursor-pointer">
          {/* Icon and Badge */}
          <div className="flex items-start justify-between mb-6">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <useCase.icon className="text-white text-2xl" />
            </div>
            <div className="bg-warning/10 text-warning text-xs font-semibold px-3 py-1 rounded-full">
              {useCase.painPoint}
            </div>
          </div>

          {/* Title and Description */}
          <h3 className="text-2xl font-display font-bold text-neutral dark:text-white mb-3 group-hover:text-accent transition-colors">
            {useCase.title}
          </h3>
          <p className="text-neutral-medium dark:text-gray-300 mb-6 leading-relaxed">
            {useCase.description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-800">
            <div>
              <div className={`text-3xl font-display font-bold bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent`}>
                {useCase.stats.reduction}
              </div>
              <div className="text-sm text-neutral-medium dark:text-gray-400">{useCase.stats.metric}</div>
            </div>
            <FaArrowRight className="text-accent text-xl group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default UseCasesGrid;

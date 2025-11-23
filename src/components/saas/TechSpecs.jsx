import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaClock, FaTools, FaLock, FaHeadset, FaSync, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const TechSpecs = ({ specs }) => {
  const {
    languages = ['Arabic', 'English'],
    deploymentTime = '10 minutes',
    hardware = 'Zero hardware required',
    training = 'Zero training needed',
    uptime = '99.9% SLA',
    security = ['SSL encryption', 'GDPR compliant', 'Saudi data laws'],
    support = '24/7 WhatsApp & phone',
    updates = 'Automatic, no downtime'
  } = specs || {};

  const techItems = [
    {
      icon: FaGlobe,
      title: 'Languages',
      value: Array.isArray(languages) ? languages.join(', ') : languages,
      color: 'blue'
    },
    {
      icon: FaClock,
      title: 'Deployment',
      value: deploymentTime,
      color: 'green'
    },
    {
      icon: FaTools,
      title: 'Hardware',
      value: hardware,
      color: 'purple'
    },
    {
      icon: FaSync,
      title: 'Updates',
      value: updates,
      color: 'cyan'
    },
    {
      icon: FaShieldAlt,
      title: 'Uptime SLA',
      value: uptime,
      color: 'red'
    },
    {
      icon: FaHeadset,
      title: 'Support',
      value: support,
      color: 'orange'
    }
  ];

  const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    cyan: 'from-cyan-500 to-cyan-600',
    red: 'from-red-500 to-red-600',
    orange: 'from-orange-500 to-orange-600'
  };

  return (
    <section className="section-padding bg-neutral-light dark:bg-gray-950 border-y dark:border-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Technical Specifications
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
            Enterprise-Grade <span className="text-accent">Infrastructure</span>
          </h2>
          <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto">
            Built for reliability, security, and performance at scale
          </p>
        </motion.div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-black border dark:border-gray-800 rounded-xl p-6 hover:border-accent dark:hover:border-accent transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${colorMap[item.color]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-display font-semibold text-neutral dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-medium dark:text-gray-400">
                  {item.value}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary to-primary-light dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="flex items-center justify-center mb-8">
            <FaLock className="text-4xl text-accent mr-4" />
            <h3 className="text-2xl md:text-3xl font-display font-bold">
              Security & Compliance
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {security.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <FaCheckCircle className="text-accent flex-shrink-0" />
                <span className="text-gray-200">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-300 text-sm">
              Enterprise-grade security infrastructure trusted by businesses across Saudi Arabia
            </p>
          </div>
        </motion.div>

        {/* Training Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-3 bg-green-50 dark:bg-green-900/20 px-8 py-4 rounded-full border-2 border-green-500 dark:border-green-700">
            <FaCheckCircle className="text-green-500 text-2xl" />
            <span className="text-neutral dark:text-white font-semibold text-lg">
              {training}
            </span>
          </div>
          <p className="mt-4 text-neutral-medium dark:text-gray-400">
            Your team can start using it immediately after setup
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSpecs;

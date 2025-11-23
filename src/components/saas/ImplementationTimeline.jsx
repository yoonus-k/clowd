import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCalendar, FaRocket, FaHeadset, FaCog } from 'react-icons/fa';

const ImplementationTimeline = ({ timeline }) => {
  const defaultTimeline = timeline || [
    {
      day: 'Day 1',
      title: 'Sign Up & Onboarding',
      description: 'Create account and receive credentials',
      icon: FaCheckCircle,
      color: 'blue'
    },
    {
      day: 'Day 2',
      title: '10-Min Integration Call',
      description: 'Quick setup with our technical team',
      icon: FaHeadset,
      color: 'purple'
    },
    {
      day: 'Day 3',
      title: 'Configuration & Testing',
      description: 'Customize settings and test with your data',
      icon: FaCog,
      color: 'orange'
    },
    {
      day: 'Day 4-14',
      title: 'Free Trial Period',
      description: 'Use full features with no commitment',
      icon: FaCalendar,
      color: 'green'
    },
    {
      day: 'Day 15',
      title: 'Go Live or Full Refund',
      description: 'Continue with paid plan or cancel anytime',
      icon: FaRocket,
      color: 'cyan'
    }
  ];

  const colorMap = {
    blue: { bg: 'from-blue-500 to-blue-600', border: 'border-blue-500' },
    purple: { bg: 'from-purple-500 to-purple-600', border: 'border-purple-500' },
    orange: { bg: 'from-orange-500 to-orange-600', border: 'border-orange-500' },
    green: { bg: 'from-green-500 to-green-600', border: 'border-green-500' },
    cyan: { bg: 'from-cyan-500 to-cyan-600', border: 'border-cyan-500' }
  };

  return (
    <section className="section-padding bg-white dark:bg-black border-y dark:border-gray-900">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold mb-4">
            Implementation Timeline
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
            From Signup to <span className="text-accent">Success</span> in 15 Days
          </h2>
          <p className="text-xl text-neutral-medium dark:text-gray-300">
            Fast, simple setup with zero risk. Try it free for 14 days.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-blue-500 to-green-500 hidden md:block"></div>

          <div className="space-y-8">
            {defaultTimeline.map((step, index) => {
              const Icon = step.icon;
              const colors = colorMap[step.color];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-start">
                    {/* Icon Circle */}
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-full flex items-center justify-center text-white text-2xl shadow-lg z-10 relative`}>
                      <Icon />
                    </div>

                    {/* Content Card */}
                    <div className="ml-6 flex-1">
                      <div className={`bg-neutral-light dark:bg-gray-950 border-2 ${colors.border} dark:border-opacity-50 rounded-xl p-6 hover:border-accent dark:hover:border-accent transition-all duration-300`}>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`inline-block px-3 py-1 bg-gradient-to-r ${colors.bg} text-white rounded-full text-sm font-semibold`}>
                            {step.day}
                          </span>
                        </div>
                        <h3 className="text-xl font-display font-bold text-neutral dark:text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-neutral-medium dark:text-gray-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Guarantee Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 text-center border-2 border-green-500 dark:border-green-700"
        >
          <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-display font-bold text-neutral dark:text-white mb-3">
            Zero Risk Guarantee
          </h3>
          <p className="text-neutral-medium dark:text-gray-300 max-w-2xl mx-auto">
            Not satisfied? Cancel anytime during the 14-day trial period with no questions asked. 
            If you're not seeing results, you don't pay a single riyal.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="inline-flex items-center text-green-600 dark:text-green-400 font-semibold">
              <FaCheckCircle className="mr-2" />
              No Credit Card Required
            </div>
            <div className="inline-flex items-center text-green-600 dark:text-green-400 font-semibold">
              <FaCheckCircle className="mr-2" />
              Cancel Anytime
            </div>
            <div className="inline-flex items-center text-green-600 dark:text-green-400 font-semibold">
              <FaCheckCircle className="mr-2" />
              Full Feature Access
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImplementationTimeline;

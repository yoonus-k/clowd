import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaRocket, FaHandshake, FaChartLine } from 'react-icons/fa';

const WhyClowd = () => {
  const reasons = [
    {
      icon: FaRocket,
      title: 'Rapid Deployment',
      description: 'Get up and running in weeks, not months. Our solutions are designed for quick implementation with minimal disruption.',
    },
    {
      icon: FaChartLine,
      title: 'Measurable Results',
      description: 'Track ROI from day one with comprehensive analytics and performance metrics. See the impact in real-time.',
    },
    {
      icon: FaHandshake,
      title: 'Strategic Partnership',
      description: 'We\'re not just a vendor – we\'re your technical co-founders, committed to your long-term success.',
    },
    {
      icon: FaCheckCircle,
      title: 'Proven Expertise',
      description: 'Built by founders who understand both the technical and business sides of AI implementation.',
    },
  ];

  return (
    <section className="section-padding bg-white dark:bg-black transition-colors duration-300 border-t dark:border-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
            Why Choose <span className="gradient-text">Clowd</span>
          </h2>
          <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto">
            We bridge the gap between AI capability and business execution, delivering solutions that actually work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <reason.icon className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-display font-bold text-neutral dark:text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-neutral-medium dark:text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial or Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-primary to-primary-light dark:from-gray-950 dark:to-gray-900 p-12 rounded-2xl text-center shadow-2xl dark:shadow-accent/10 border dark:border-gray-900"
        >
          <p className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
            "The future belongs to companies that can harness AI effectively. We're here to make sure that's you."
          </p>
          <div className="text-accent font-semibold text-lg">
            — Clowd Team, Jeddah, Saudi Arabia
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyClowd;

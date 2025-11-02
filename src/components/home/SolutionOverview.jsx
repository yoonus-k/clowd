import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaCheck, FaBrain, FaChartBar, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SolutionOverview = () => {
  const features = [
    {
      icon: FaBrain,
      title: 'Agentic AI Systems',
      description: 'Autonomous AI agents that handle complex tasks independently, learning and adapting in real-time.',
    },
    {
      icon: FaChartBar,
      title: 'Data-Driven Insights',
      description: 'Transform raw data into actionable intelligence with predictive analytics and ML models.',
    },
    {
      icon: FaCog,
      title: 'Seamless Integration',
      description: 'Easy-to-deploy solutions that integrate with your existing systems and workflows.',
    },
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Automate repetitive tasks and free up your team',
    'Make faster, smarter decisions with real-time insights',
    'Scale operations without proportional cost increases',
    'Gain competitive advantage through AI adoption',
    'Measurable ROI within the first quarter',
  ];

  return (
    <section className="section-padding bg-white dark:bg-black transition-colors duration-300 border-t dark:border-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                Our Solution
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
              AI That Actually <span className="gradient-text">Works for Your Business</span>
            </h2>
            
            <p className="text-lg text-neutral-medium dark:text-gray-300 mb-8 leading-relaxed">
              We don't just build AI tools – we create intelligent systems that understand your business, 
              adapt to your needs, and deliver measurable results. Our solutions are designed to solve 
              real operational challenges across industries.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="text-accent text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-neutral dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-medium dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/use-cases" className="btn-primary inline-flex items-center">
              Explore Use Cases
              <FaRocket className="ml-2" />
            </Link>
          </motion.div>

          {/* Right - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-primary to-primary-light dark:from-gray-950 dark:to-gray-900 p-8 rounded-2xl shadow-2xl dark:shadow-accent/10 border dark:border-gray-900">
              <h3 className="text-3xl font-display font-bold text-white mb-8">
                What You Get
              </h3>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <p className="text-white font-medium">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <p className="text-accent font-semibold text-sm mb-2">PROVEN RESULTS</p>
                <p className="text-white text-lg leading-relaxed">
                  Our clients see an average ROI of <span className="font-bold text-accent">350%</span> within 
                  the first year of implementation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;

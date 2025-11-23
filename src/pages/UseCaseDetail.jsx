import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTruck, FaFileAlt, FaChartLine, FaRobot, FaShieldAlt, FaCheck, FaArrowRight, FaIndustry } from 'react-icons/fa';
import { useCasesData } from '../data/useCasesData';

const iconMap = {
  FaTruck,
  FaFileAlt,
  FaChartLine,
  FaRobot,
  FaShieldAlt,
};

const UseCaseDetail = () => {
  const { id } = useParams();
  const useCase = useCasesData[id];

  if (!useCase) {
    return <Navigate to="/use-cases" replace />;
  }

  const Icon = iconMap[useCase.icon];

  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${useCase.color} dark:from-gray-950 dark:via-gray-900 dark:to-black text-white section-padding relative overflow-hidden border-b dark:border-gray-900`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl mb-8"
            >
              <Icon className="text-6xl" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-display font-bold mb-6"
            >
              {useCase.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl text-white/90 mb-8"
            >
              {useCase.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link to="/contact" className="bg-white dark:bg-accent text-neutral dark:text-black hover:bg-gray-100 dark:hover:bg-accent/90 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
                Request Demo
                <FaArrowRight className="ml-2" />
              </Link>
              <Link to="/contact" className="border-2 border-white dark:border-accent text-white dark:text-accent hover:bg-white dark:hover:bg-accent hover:text-neutral dark:hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
                Schedule Consultation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="text-5xl font-display font-bold mb-2">{useCase.hero.stat}</div>
              <div className="text-xl font-semibold mb-3">{useCase.hero.statLabel}</div>
              <p className="text-white/90">{useCase.hero.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="section-padding bg-neutral-light dark:bg-black border-t dark:border-gray-900 transition-colors duration-300">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-neutral dark:text-white mb-4">
              The Problem
            </h2>
            <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto">
              Without intelligent automation, businesses are losing money every single day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCase.painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className={`text-5xl font-display font-bold bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent mb-3`}>
                  {point.stat}
                </div>
                <div className="text-lg font-semibold text-neutral dark:text-white mb-3">{point.label}</div>
                <p className="text-neutral-medium dark:text-gray-300">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-white dark:bg-black border-t dark:border-gray-900 transition-colors duration-300">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-neutral dark:text-white mb-4">
              Our Solution
            </h2>
            <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto">
              {useCase.solution.overview}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCase.solution.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-neutral-light dark:bg-gray-950 dark:border dark:border-gray-900 rounded-xl"
              >
                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${useCase.color} rounded-lg flex items-center justify-center shadow-lg dark:shadow-accent/20`}>
                  <FaCheck className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-neutral dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-medium dark:text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-neutral-light dark:bg-black border-t dark:border-gray-900 transition-colors duration-300">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-neutral dark:text-white mb-4">
              Key Benefits
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCase.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex items-center space-x-3 bg-white dark:bg-gray-950 dark:border dark:border-gray-900 p-4 rounded-lg shadow-md dark:shadow-accent/10"
              >
                <FaCheck className={`text-2xl bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent flex-shrink-0`} />
                <p className="text-neutral dark:text-white font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section-padding bg-white dark:bg-black border-t dark:border-gray-900 transition-colors duration-300">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className={`bg-gradient-to-br ${useCase.color} text-white p-12 rounded-2xl shadow-2xl`}>
              <h2 className="text-3xl font-display font-bold mb-8">Case Study</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Client</h3>
                  <p className="text-white/90">{useCase.caseStudy.company}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Challenge</h3>
                  <p className="text-white/90">{useCase.caseStudy.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Solution</h3>
                  <p className="text-white/90">{useCase.caseStudy.solution}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {useCase.caseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <FaCheck className="text-white mt-1 flex-shrink-0" />
                        <p className="text-white/90">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-neutral-light dark:bg-black border-t dark:border-gray-900 transition-colors duration-300">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-display font-bold text-neutral dark:text-white mb-8">
              Industries We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {useCase.industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`bg-gradient-to-r ${useCase.color} text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2`}
                >
                  <FaIndustry />
                  <span>{industry}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section-padding bg-gradient-to-br ${useCase.color} dark:from-gray-950 dark:via-gray-900 dark:to-black text-white border-t dark:border-gray-900 transition-colors duration-300`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a free consultation to discover how this solution can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white dark:bg-accent text-neutral dark:text-black hover:bg-gray-100 dark:hover:bg-accent/90 font-semibold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center text-lg">
                Schedule Consultation
                <FaArrowRight className="ml-3" />
              </Link>
              <Link to="/use-cases" className="border-2 border-white dark:border-accent text-white dark:text-accent hover:bg-white dark:hover:bg-accent hover:text-neutral dark:hover:text-black font-semibold px-10 py-5 rounded-lg transition-all duration-300 inline-flex items-center justify-center text-lg">
                View All AI Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UseCaseDetail;

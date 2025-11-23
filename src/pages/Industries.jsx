import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { industries } from '../data/industriesData';

const Industries = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              AI Solutions for Every Industry
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Tailored artificial intelligence tools designed for your specific industry challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Schedule Industry Expert Call
                <FaArrowRight className="ml-2" />
              </Link>
              <a
                href="#industries"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Explore Industries
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950 border-y dark:border-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '180+', label: 'Businesses Served' },
              { value: '5', label: 'Industries Covered' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-neutral-medium dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="industries" className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
              Choose Your Industry
            </h2>
            <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto">
              Discover AI solutions specifically designed for your industry's unique challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={`/industries/${industry.id}`}
                    className="block bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl dark:hover:shadow-accent/10 transition-all duration-300 group h-full"
                  >
                    {/* Gradient Header */}
                    <div className={`bg-gradient-to-br ${industry.gradient} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full"></div>
                      </div>
                      <div className="relative z-10">
                        <Icon className="text-5xl mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
                        <p className="text-white/90 text-sm">{industry.stats.customersServed} customers served</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-neutral-medium dark:text-gray-400 mb-6">
                        {industry.description}
                      </p>

                      {/* Key Benefits */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-sm">
                          <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-neutral dark:text-gray-300">
                            {industry.stats.avgTimeSaved} time saved
                          </span>
                        </div>
                        <div className="flex items-center text-sm">
                          <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-neutral dark:text-gray-300">
                            {industry.stats.avgRevIncrease} revenue increase
                          </span>
                        </div>
                        <div className="flex items-center text-sm">
                          <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-neutral dark:text-gray-300">
                            {industry.stats.avgCostReduction} cost reduction
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                        Explore Solutions
                        <FaArrowRight className="ml-2" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-accent text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We create custom AI solutions for businesses in any industry. Let's discuss your specific needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us for Custom Solutions
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;

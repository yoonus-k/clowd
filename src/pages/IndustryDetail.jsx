import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { FaArrowRight, FaCheck, FaExclamationTriangle, FaChartLine, FaUsers, FaStar } from 'react-icons/fa';
import { getIndustryById } from '../data/industriesData';
import { saasProducts } from '../data/saasProductsData';

const IndustryDetail = () => {
  const { industryId } = useParams();
  const industry = getIndustryById(industryId);

  // Redirect if industry not found
  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const Icon = industry.icon;
  
  // Get recommended products for this industry
  const recommendedProducts = saasProducts.filter(product => 
    industry.products.includes(product.id)
  );

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${industry.gradient} text-white overflow-hidden pt-32 pb-20`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/industries"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
            >
              ← Back to Industries
            </Link>

            <div className="flex items-center mb-6">
              <Icon className="text-6xl mr-4" />
              <h1 className="text-5xl md:text-6xl font-display font-bold">
                {industry.name}
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
              {industry.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#solutions"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                View Solutions
                <FaArrowRight className="ml-2" />
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950 border-y dark:border-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaUsers className="text-4xl text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-neutral dark:text-white mb-2">
                {industry.stats.customersServed}
              </div>
              <div className="text-neutral-medium dark:text-gray-400">Customers Served</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <FaChartLine className="text-4xl text-green-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-neutral dark:text-white mb-2">
                {industry.stats.avgTimeSaved}
              </div>
              <div className="text-neutral-medium dark:text-gray-400">Avg Time Saved</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <FaChartLine className="text-4xl text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-neutral dark:text-white mb-2">
                {industry.stats.avgRevIncrease}
              </div>
              <div className="text-neutral-medium dark:text-gray-400">Revenue Increase</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <FaChartLine className="text-4xl text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-neutral dark:text-white mb-2">
                {industry.stats.avgCostReduction}
              </div>
              <div className="text-neutral-medium dark:text-gray-400">Cost Reduction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Challenges Section */}
      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
              Common Challenges We Solve
            </h2>
            <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto">
              Industry-specific problems that our AI solutions address
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-2 border-red-200 dark:border-red-800 rounded-2xl p-8"
              >
                <div className="flex items-start mb-4">
                  <FaExclamationTriangle className="text-3xl text-red-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-neutral dark:text-white mb-2">
                      {challenge.title}
                    </h3>
                    <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {challenge.stat}
                    </div>
                  </div>
                </div>
                <p className="text-neutral-medium dark:text-gray-400">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Solutions Section */}
      <section id="solutions" className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
              Recommended Solutions
            </h2>
            <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto">
              AI-powered tools designed specifically for {industry.name.toLowerCase()}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/saas/${product.id}`}
                  className="block bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl dark:hover:shadow-accent/10 transition-all duration-300 group h-full"
                >
                  {/* Product Header */}
                  <div className={`bg-gradient-to-br ${product.gradient} p-6 text-white`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{product.icon}</div>
                      {product.badge && (
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-white/90 text-sm">{product.tagline}</p>
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <p className="text-neutral-medium dark:text-gray-400 mb-6">
                      {product.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <FaCheck className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-sm text-neutral dark:text-gray-300">
                            {feature.title}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-accent mb-1">
                        {product.pricing.monthly}
                        <span className="text-lg text-neutral-medium dark:text-gray-400">/mo</span>
                      </div>
                      <div className="text-sm text-neutral-medium dark:text-gray-400">
                        {product.pricing.trial}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More
                      <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-12 text-center border-2 border-gray-200 dark:border-gray-700">
              <FaStar className="text-5xl text-yellow-500 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-medium text-neutral dark:text-white mb-8 italic">
                "{industry.testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="text-left">
                  <div className="font-bold text-lg text-neutral dark:text-white">
                    {industry.testimonial.author}
                  </div>
                  <div className="text-neutral-medium dark:text-gray-400">
                    {industry.testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section-padding bg-gradient-to-br ${industry.gradient} text-white`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join {industry.stats.customersServed} businesses in {industry.name.toLowerCase()} already using Clowd AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Schedule Free Consultation
                <FaArrowRight className="ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;

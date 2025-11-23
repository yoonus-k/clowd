import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaExclamationTriangle, FaLightbulb, FaChartLine, FaQuoteLeft, FaPlay } from 'react-icons/fa';
import { getCaseStudyBySlug } from '../data/caseStudiesData';
import { saasProducts } from '../data/saasProductsData';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const caseStudy = getCaseStudyBySlug(slug);

  // Redirect if case study not found
  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  // Get related products
  const relatedProducts = saasProducts.filter(product =>
    caseStudy.products.includes(product.id)
  );

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
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
            >
              ← Back to Case Studies
            </Link>

            <div className="max-w-4xl">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold">{caseStudy.industry}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                {caseStudy.customer}
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-6">
                {caseStudy.location} • {caseStudy.size}
              </p>

              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Results Overview */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950 border-y dark:border-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-neutral dark:text-white mb-4">
              Results at a Glance
            </h2>
            <p className="text-lg text-neutral-medium dark:text-gray-300">
              Key metrics achieved with Clowd AI
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Object.entries(caseStudy.results).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800 rounded-2xl p-6 text-center"
              >
                <FaCheckCircle className="text-3xl text-green-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {value}
                </div>
                <div className="text-sm text-neutral-medium dark:text-gray-400 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-2 border-red-200 dark:border-red-800 rounded-3xl p-12">
              <div className="flex items-center mb-6">
                <FaExclamationTriangle className="text-4xl text-red-500 mr-4" />
                <h2 className="text-3xl font-bold text-neutral dark:text-white">The Challenge</h2>
              </div>
              <p className="text-lg text-neutral-medium dark:text-gray-300 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-3xl p-12">
              <div className="flex items-center mb-6">
                <FaLightbulb className="text-4xl text-blue-500 mr-4" />
                <h2 className="text-3xl font-bold text-neutral dark:text-white">The Solution</h2>
              </div>
              <p className="text-lg text-neutral-medium dark:text-gray-300 leading-relaxed mb-8">
                {caseStudy.solution}
              </p>

              {/* Implementation Details */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold text-neutral dark:text-white mb-4">
                  Implementation Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-neutral-medium dark:text-gray-400 mb-1">Duration</div>
                    <div className="text-lg font-semibold text-accent">{caseStudy.implementation.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-medium dark:text-gray-400 mb-1">Team</div>
                    <div className="text-lg font-semibold text-neutral dark:text-white">{caseStudy.implementation.team}</div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-sm font-semibold text-neutral dark:text-white mb-3">Challenges Overcome:</div>
                  <ul className="space-y-2">
                    {caseStudy.implementation.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start text-neutral-medium dark:text-gray-400">
                        <span className="text-blue-500 mr-2">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <div className="text-sm font-semibold text-neutral dark:text-white mb-2">How We Solved It:</div>
                  <p className="text-neutral-medium dark:text-gray-400">{caseStudy.implementation.overcome}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Metrics */}
      {caseStudy.metrics && (
        <section className="section-padding bg-white dark:bg-black">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <FaChartLine className="text-5xl text-accent mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-neutral dark:text-white mb-4">
                  Detailed Metrics
                </h2>
                <p className="text-lg text-neutral-medium dark:text-gray-300">
                  Before and after comparison
                </p>
              </div>

              <div className="space-y-6">
                {caseStudy.metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-neutral dark:text-white">{metric.label}</h3>
                      <span className={`text-2xl font-bold ${
                        metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-neutral-medium dark:text-gray-400 mb-1">Before</div>
                        <div className="text-2xl font-bold text-neutral dark:text-white">{metric.before}</div>
                      </div>
                      <div>
                        <div className="text-sm text-neutral-medium dark:text-gray-400 mb-1">After</div>
                        <div className="text-2xl font-bold text-accent">{metric.after}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-12 border-2 border-accent/20 shadow-2xl">
              <FaQuoteLeft className="text-5xl text-accent mb-6" />
              <blockquote className="text-2xl md:text-3xl font-medium text-neutral dark:text-white mb-8 leading-relaxed italic">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div>
                  <div className="font-bold text-xl text-neutral dark:text-white">
                    {caseStudy.testimonial.author}
                  </div>
                  <div className="text-neutral-medium dark:text-gray-400">
                    {caseStudy.testimonial.title}
                  </div>
                  <div className="text-accent font-semibold mt-1">
                    {caseStudy.customer}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Used */}
      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral dark:text-white mb-4">
              Products Used in This Success Story
            </h2>
            <p className="text-lg text-neutral-medium dark:text-gray-300">
              Explore the AI solutions that powered this transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/saas/${product.id}`}
                  className="block bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl dark:hover:shadow-accent/10 transition-all duration-300 group h-full"
                >
                  <div className={`bg-gradient-to-br ${product.gradient} p-6 text-white`}>
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-white/90 text-sm">{product.tagline}</p>
                  </div>
                  <div className="p-6">
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-accent text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how Clowd AI can transform your business
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
                to="/case-studies"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                View More Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;

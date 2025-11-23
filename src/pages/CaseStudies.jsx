import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaSearch, FaPlay, FaCheckCircle } from 'react-icons/fa';
import { caseStudies, industries, getCaseStudiesByIndustry, getFeaturedCaseStudies } from '../data/caseStudiesData';

const CaseStudies = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter case studies
  const filteredCaseStudies = getCaseStudiesByIndustry(selectedIndustry).filter(cs =>
    cs.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cs.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cs.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const featuredCaseStudies = getFeaturedCaseStudies();

  const ResultCard = ({ result }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl dark:hover:shadow-accent/10 transition-all duration-300 group"
    >
      <Link to={`/case-studies/${result.slug}`}>
        {/* Gradient Header */}
        <div className="bg-gradient-to-br from-primary to-accent p-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full"></div>
          </div>
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-1">{result.customer}</h3>
                <p className="text-white/80 text-sm">{result.industry}</p>
              </div>
              {result.videoUrl && (
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                  <FaPlay className="text-white" />
                </div>
              )}
            </div>
            <div className="flex items-center text-sm text-white/90">
              <span className="mr-4">📍 {result.location}</span>
              <span>{result.size}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Challenge Preview */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-red-500 mb-2">CHALLENGE</h4>
            <p className="text-neutral-medium dark:text-gray-400 line-clamp-3">
              {result.challenge}
            </p>
          </div>

          {/* Key Results Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {Object.entries(result.results).slice(0, 4).map(([key, value], idx) => (
              <div key={idx} className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {value}
                </div>
                <div className="text-xs text-neutral-medium dark:text-gray-400 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {result.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 text-neutral dark:text-gray-300 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
            Read Full Case Study
            <FaArrowRight className="ml-2" />
          </div>
        </div>
      </Link>
    </motion.div>
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
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaCheckCircle className="mr-2" />
              <span className="text-sm font-semibold">Real Results from Real Businesses</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              See how businesses across Saudi Arabia are transforming with Clowd AI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Start Your Success Story
                <FaArrowRight className="ml-2" />
              </Link>
              <a
                href="#case-studies"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Browse Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950 border-y dark:border-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '180+', label: 'Success Stories' },
              { value: '35%', label: 'Avg Revenue Increase' },
              { value: '42%', label: 'Avg Time Saved' },
              { value: '3.2 weeks', label: 'Avg ROI Timeline' }
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

      {/* Featured Case Studies */}
      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-neutral-medium dark:text-gray-300">
              Businesses that achieved remarkable results with Clowd AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCaseStudies.slice(0, 3).map((cs, index) => (
              <ResultCard key={cs.id} result={cs} />
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section id="case-studies" className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-neutral dark:text-white mb-8 text-center">
              All Case Studies
            </h2>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-medium dark:text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by company, challenge, or tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:border-accent text-neutral dark:text-white"
                />
              </div>
            </div>

            {/* Industry Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedIndustry === industry
                      ? 'bg-accent text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-900 text-neutral dark:text-white border border-gray-200 dark:border-gray-800 hover:border-accent'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((cs, index) => (
              <ResultCard key={cs.id} result={cs} />
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-neutral-medium dark:text-gray-400 mb-4">
                No case studies found
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedIndustry('All Industries');
                }}
                className="text-accent hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          )}
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 180+ businesses transforming their operations with AI
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule Free Consultation
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

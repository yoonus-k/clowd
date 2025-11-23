import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSearch, FaArrowRight, FaBook, FaClock } from 'react-icons/fa';
import { useState } from 'react';
import { docsCategories, docs, getDocsByCategory, getFeaturedDocs, searchDocs } from '../data/docsData';

const Docs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocs = searchQuery 
    ? searchDocs(searchQuery)
    : getDocsByCategory(selectedCategory);

  const featuredDocs = getFeaturedDocs();

  const difficultyColors = {
    'Beginner': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    'Intermediate': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    'Advanced': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
  };

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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <FaBook className="text-4xl" />
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Documentation Hub
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Everything you need to integrate, deploy, and optimize Clowd AI solutions
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-neutral-medium text-xl" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 rounded-2xl text-neutral dark:text-white bg-white dark:bg-gray-900 border-2 border-transparent focus:border-accent focus:outline-none text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950 border-b dark:border-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Documentation Pages', value: docs.length.toString() },
              { label: 'Code Examples', value: '50+' },
              { label: 'API Endpoints', value: '30+' },
              { label: 'Video Tutorials', value: '15+' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-neutral-medium dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-neutral dark:text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-neutral-medium dark:text-gray-400">
              Find exactly what you need in our organized documentation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {docsCategories.map((category, idx) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSearchQuery('');
                }}
                className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-br ' + category.color + ' border-transparent text-white shadow-xl scale-105'
                    : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-accent'
                }`}
              >
                <category.icon className="text-3xl mb-3" />
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className={`text-sm ${selectedCategory === category.id ? 'text-white/90' : 'text-neutral-medium dark:text-gray-400'}`}>
                  {category.description}
                </p>
              </motion.button>
            ))}
          </div>

          {/* All Docs Button */}
          <div className="text-center">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-800 text-neutral dark:text-white hover:bg-accent hover:text-white'
              }`}
            >
              View All Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Featured Docs */}
      {selectedCategory === 'all' && !searchQuery && (
        <section className="section-padding bg-gray-50 dark:bg-gray-950">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-neutral dark:text-white mb-2">
                Featured Documentation
              </h2>
              <p className="text-neutral-medium dark:text-gray-400">
                Most popular and essential guides to get you started
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDocs.slice(0, 6).map((doc, idx) => {
                const category = docsCategories.find(c => c.id === doc.category);
                return (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      to={`/docs/${doc.slug}`}
                      className="block h-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-accent hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl mb-4 text-white text-xl`}>
                        <category.icon />
                      </div>
                      
                      <h3 className="text-xl font-bold text-neutral dark:text-white mb-3 group-hover:text-accent transition-colors">
                        {doc.title}
                      </h3>
                      
                      <p className="text-neutral-medium dark:text-gray-400 mb-4 line-clamp-2">
                        {doc.description}
                      </p>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[doc.difficulty]}`}>
                            {doc.difficulty}
                          </span>
                          <span className="flex items-center text-neutral-medium dark:text-gray-400">
                            <FaClock className="mr-1" />
                            {doc.readTime}
                          </span>
                        </div>
                        <FaArrowRight className="text-accent group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Docs / Search Results */}
      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral dark:text-white mb-2">
              {searchQuery ? `Search Results (${filteredDocs.length})` : 
               selectedCategory === 'all' ? 'All Documentation' : 
               docsCategories.find(c => c.id === selectedCategory)?.name}
            </h2>
            {!searchQuery && selectedCategory !== 'all' && (
              <p className="text-neutral-medium dark:text-gray-400">
                {docsCategories.find(c => c.id === selectedCategory)?.description}
              </p>
            )}
          </motion.div>

          {filteredDocs.length > 0 ? (
            <div className="space-y-4">
              {filteredDocs.map((doc, idx) => {
                const category = docsCategories.find(c => c.id === doc.category);
                return (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={`/docs/${doc.slug}`}
                      className="flex items-start bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-accent hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white text-xl mr-4`}>
                        <category.icon />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-neutral dark:text-white mb-2 group-hover:text-accent transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-neutral-medium dark:text-gray-400 mb-3">
                          {doc.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[doc.difficulty]}`}>
                            {doc.difficulty}
                          </span>
                          <span className="flex items-center text-neutral-medium dark:text-gray-400">
                            <FaClock className="mr-1" />
                            {doc.readTime}
                          </span>
                          <span className="text-neutral-medium dark:text-gray-400">
                            Updated {doc.lastUpdated}
                          </span>
                        </div>
                      </div>

                      <FaArrowRight className="flex-shrink-0 text-accent text-xl ml-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FaBook className="text-6xl text-neutral-medium dark:text-gray-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-neutral dark:text-white mb-4">
                No documentation found
              </h3>
              <p className="text-neutral-medium dark:text-gray-400 mb-8">
                Try adjusting your search or browse different categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="btn-primary inline-flex items-center"
              >
                View All Documentation
                <FaArrowRight className="ml-2" />
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
              Need Help?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Can't find what you're looking for? Our support team is here to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Contact Support
                <FaArrowRight className="ml-2" />
              </Link>
              <a
                href="mailto:support@clowd.ai"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Docs;

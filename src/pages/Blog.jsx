import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSearch, FaArrowRight, FaClock, FaUser, FaCalendar, FaTag } from 'react-icons/fa';
import { useState } from 'react';
import { blogCategories, blogPosts, getBlogPostsByCategory, getFeaturedBlogPosts, searchBlogPosts } from '../data/blogData';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = searchQuery 
    ? searchBlogPosts(searchQuery)
    : getBlogPostsByCategory(selectedCategory);

  const featuredPosts = getFeaturedBlogPosts();

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
              Clowd AI Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Insights, trends, and success stories from the forefront of AI innovation in Saudi Arabia
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-neutral-medium text-xl" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 rounded-2xl text-neutral dark:text-white bg-white dark:bg-gray-900 border-2 border-transparent focus:border-accent focus:outline-none text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && !searchQuery && (
        <section className="section-padding bg-white dark:bg-black">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-neutral dark:text-white mb-2">
                Featured Articles
              </h2>
              <p className="text-neutral-medium dark:text-gray-400">
                Our most popular and impactful content
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredPosts.slice(0, 2).map((post, idx) => {
                const category = blogCategories.find(c => c.id === post.category);
                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="block h-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden hover:border-accent hover:shadow-2xl transition-all duration-300 group"
                    >
                      <div className={`bg-gradient-to-br ${category.color} p-8 text-white h-48 flex items-end`}>
                        <div>
                          <div className="flex items-center mb-3">
                            <category.icon className="mr-2" />
                            <span className="text-sm font-semibold">{category.name}</span>
                          </div>
                          <h3 className="text-2xl font-bold group-hover:underline">
                            {post.title}
                          </h3>
                        </div>
                      </div>

                      <div className="p-8">
                        <p className="text-neutral-medium dark:text-gray-400 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-sm text-neutral-medium dark:text-gray-400">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <FaUser className="mr-2" />
                              {post.author.name}
                            </span>
                            <span className="flex items-center">
                              <FaClock className="mr-2" />
                              {post.readTime}
                            </span>
                          </div>
                          <FaArrowRight className="text-accent group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950 border-y dark:border-gray-900">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSearchQuery('');
                }}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-accent text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-900 text-neutral dark:text-white border border-gray-200 dark:border-gray-800 hover:border-accent'
                }`}
              >
                <category.icon className="mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts / Search Results */}
      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral dark:text-white mb-2">
              {searchQuery ? `Search Results (${filteredPosts.length})` : 
               selectedCategory === 'all' ? 'Latest Articles' : 
               blogCategories.find(c => c.id === selectedCategory)?.name}
            </h2>
          </motion.div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => {
                const category = blogCategories.find(c => c.id === post.category);
                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="block h-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-accent hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className={`bg-gradient-to-br ${category.color} p-6 text-white h-32 flex items-end`}>
                        <div className="flex items-center">
                          <category.icon className="mr-2" />
                          <span className="text-sm font-semibold">{category.name}</span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-neutral dark:text-white mb-3 group-hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-neutral-medium dark:text-gray-400 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="inline-flex items-center text-xs bg-gray-100 dark:bg-gray-800 text-neutral-medium dark:text-gray-400 px-3 py-1 rounded-full"
                            >
                              <FaTag className="mr-1 text-[10px]" />
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-neutral-medium dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-800">
                          <div className="flex items-center space-x-3">
                            <span className="flex items-center">
                              <FaClock className="mr-1" />
                              {post.readTime}
                            </span>
                            <span className="flex items-center">
                              <FaCalendar className="mr-1" />
                              {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </span>
                          </div>
                          <FaArrowRight className="text-accent group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
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
              <FaSearch className="text-6xl text-neutral-medium dark:text-gray-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-neutral dark:text-white mb-4">
                No articles found
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
                View All Articles
                <FaArrowRight className="ml-2" />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-accent text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest AI insights, success stories, and product updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-neutral dark:text-white bg-white dark:bg-gray-900 border-2 border-transparent focus:border-white focus:outline-none"
              />
              <button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              Join 5,000+ subscribers. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

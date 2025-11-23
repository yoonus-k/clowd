import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { FaArrowLeft, FaClock, FaUser, FaCalendar, FaTag, FaArrowRight, FaShareAlt } from 'react-icons/fa';
import { getBlogPostBySlug, blogCategories, getRecentBlogPosts } from '../data/blogData';

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);
  const recentPosts = getRecentBlogPosts(3);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const category = blogCategories.find(c => c.id === post.category);
  const relatedPosts = recentPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${category.color} text-white overflow-hidden pt-32 pb-20`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container-custom relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to Blog
            </Link>

            <div className="flex items-center space-x-3 mb-4">
              <category.icon className="text-2xl" />
              <span className="text-white/80 font-semibold">{category.name}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-white/80 mb-6">
              <div className="flex items-center">
                <FaUser className="mr-2" />
                <div>
                  <div className="font-semibold text-white">{post.author.name}</div>
                  <div className="text-sm">{post.author.title}</div>
                </div>
              </div>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center">
                <FaCalendar className="mr-2" />
                {new Date(post.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center">
                <FaClock className="mr-2" />
                {post.readTime} read
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full"
                >
                  <FaTag className="mr-2 text-xs" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom max-w-4xl">
          <article className="prose dark:prose-invert max-w-none">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl text-neutral dark:text-gray-300 leading-relaxed mb-12 font-medium"
            >
              {post.content.intro}
            </motion.div>

            {/* Sections */}
            {post.content.sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="mb-10"
              >
                <h2 className="text-3xl font-bold text-neutral dark:text-white mb-4">
                  {section.heading}
                </h2>
                <p className="text-lg text-neutral-medium dark:text-gray-400 leading-relaxed">
                  {section.body}
                </p>
              </motion.div>
            ))}

            {/* Conclusion */}
            {post.content.conclusion && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 border-l-4 border-accent rounded-r-2xl p-8 mt-12"
              >
                <h3 className="text-2xl font-bold text-neutral dark:text-white mb-4">
                  Conclusion
                </h3>
                <p className="text-lg text-neutral-medium dark:text-gray-400 leading-relaxed">
                  {post.content.conclusion}
                </p>
              </motion.div>
            )}
          </article>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-neutral dark:text-white flex items-center">
                <FaShareAlt className="mr-3 text-accent" />
                Share This Article
              </h3>
              <div className="flex gap-3">
                <button className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors">
                  <FaShareAlt />
                </button>
                <button className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors">
                  <FaShareAlt />
                </button>
                <button className="w-12 h-12 rounded-full bg-gray-600 hover:bg-gray-700 text-white flex items-center justify-center transition-colors">
                  <FaShareAlt />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gray-50 dark:bg-gray-900 rounded-3xl p-8"
          >
            <div className="flex items-start">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold mr-6 flex-shrink-0">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral dark:text-white mb-2">
                  {post.author.name}
                </h3>
                <p className="text-accent font-semibold mb-3">
                  {post.author.title}
                </p>
                <p className="text-neutral-medium dark:text-gray-400">
                  Expert in AI solutions with a passion for helping businesses leverage artificial intelligence to achieve their goals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-gray-50 dark:bg-gray-950">
          <div className="container-custom max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-neutral dark:text-white mb-4">
                Continue Reading
              </h2>
              <p className="text-neutral-medium dark:text-gray-400">
                More insights and stories you might enjoy
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost, idx) => {
                const relatedCategory = blogCategories.find(c => c.id === relatedPost.category);
                return (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="block h-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-accent hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className={`bg-gradient-to-br ${relatedCategory.color} p-6 text-white h-32 flex items-end`}>
                        <div className="flex items-center">
                          <relatedCategory.icon className="mr-2" />
                          <span className="text-sm font-semibold">{relatedCategory.name}</span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-neutral dark:text-white mb-3 group-hover:text-accent transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        
                        <p className="text-neutral-medium dark:text-gray-400 mb-4 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-sm text-neutral-medium dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-800">
                          <span className="flex items-center">
                            <FaClock className="mr-1" />
                            {relatedPost.readTime}
                          </span>
                          <FaArrowRight className="text-accent group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/blog"
                className="btn-primary inline-flex items-center"
              >
                View All Articles
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      )}

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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your 14-day free trial today and see the results for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Start Free Trial
                <FaArrowRight className="ml-2" />
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;

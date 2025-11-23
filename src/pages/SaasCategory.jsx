import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { getCategoryById, getProductsByCategory } from '../data/saasProductsData';

const SaasCategory = () => {
  const { categoryId } = useParams();
  const category = getCategoryById(categoryId);
  const products = getProductsByCategory(categoryId);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral dark:text-white mb-4">Category Not Found</h1>
          <Link to="/saas" className="text-accent hover:underline">
            Back to AI Products
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = category.icon;

  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${category.color} text-white overflow-hidden pt-32 pb-20`}>
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
              to="/saas"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to All Categories
            </Link>

            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-6">
                <IconComponent className="text-4xl" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
                  {category.name}
                </h1>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white dark:bg-black border-t dark:border-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
              Available Products
            </h2>
            <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto">
              {products.length} AI-powered solution{products.length !== 1 ? 's' : ''} to transform your {category.name.toLowerCase()}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const ProductIcon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={`/saas/${categoryId}/${product.id}`}
                    className="block h-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-900 rounded-2xl p-8 hover:shadow-2xl dark:hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <ProductIcon className="text-white text-2xl" />
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-neutral dark:text-white mb-3 group-hover:text-accent dark:group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-lg text-accent dark:text-accent mb-3 font-semibold">
                      {product.tagline}
                    </p>
                    
                    <p className="text-neutral-medium dark:text-gray-400 mb-6 leading-relaxed">
                      {product.shortDescription}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-neutral-medium dark:text-gray-500">
                        Starting at ${product.pricing.starter.price}/mo
                      </div>
                      <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        Learn More
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
      <section className="section-padding bg-gradient-to-br from-primary to-accent dark:from-gray-950 dark:to-gray-900 text-white border-t dark:border-gray-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial today. No credit card required.
            </p>
            <Link
              to="/contact"
              className="bg-white dark:bg-accent text-primary dark:text-black hover:bg-gray-100 dark:hover:bg-accent/90 font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center text-lg shadow-xl"
            >
              Start Free Trial
              <FaArrowRight className="ml-3" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SaasCategory;

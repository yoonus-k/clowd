import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck, FaTimes, FaStar, FaChartLine } from 'react-icons/fa';
import { useState } from 'react';
import { saasProducts } from '../data/saasProductsData';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // monthly or annual
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'finance', name: 'Finance' },
    { id: 'operations', name: 'Operations' },
    { id: 'industry', name: 'Industry-Specific' }
  ];

  // Filter products by category
  const filteredProducts = selectedCategory === 'all' 
    ? saasProducts 
    : saasProducts.filter(p => p.category === selectedCategory);

  // Calculate annual price (20% discount)
  const getPrice = (product) => {
    // Use professional tier pricing, or starter if professional not available
    const tier = product.pricing?.professional || product.pricing?.starter;
    if (!tier || !tier.price) return 0;
    
    const price = typeof tier.price === 'number' ? tier.price : parseInt(String(tier.price).replace(/[^0-9]/g, ''));
    if (billingCycle === 'annual') {
      return Math.round(price * 12 * 0.8); // 20% discount
    }
    return price;
  };

  const getPriceLabel = (product) => {
    const price = getPrice(product);
    if (price === 0) return 'Contact Sales';
    if (billingCycle === 'annual') {
      return `${price.toLocaleString()} SAR/year`;
    }
    return `${price.toLocaleString()} SAR/mo`;
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
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Choose the AI solutions that fit your business needs. All plans include 14-day free trial.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-2 mb-8">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-primary shadow-lg'
                    : 'text-white hover:text-white/80'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  billingCycle === 'annual'
                    ? 'bg-white text-primary shadow-lg'
                    : 'text-white hover:text-white/80'
                }`}
              >
                Annual
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Save 20%</span>
              </button>
            </div>

            <p className="text-white/80 text-sm">
              All prices in Saudi Riyals (SAR) • No setup fees • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950 border-y dark:border-gray-900">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-accent text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-900 text-neutral dark:text-white border border-gray-200 dark:border-gray-800 hover:border-accent'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden hover:shadow-2xl dark:hover:shadow-accent/10 hover:border-accent transition-all duration-300 flex flex-col"
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${product.gradient} p-6 text-white`}>
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-white/90 text-sm mb-4">{product.tagline}</p>
                  
                  {product.badge && (
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Pricing */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <div className="text-4xl font-bold text-accent mb-2">
                    {getPriceLabel(product)}
                  </div>
                  <div className="text-sm text-neutral-medium dark:text-gray-400 mb-4">
                    {(product.pricing?.professional || product.pricing?.starter)?.trial ? 
                      `${(product.pricing?.professional || product.pricing?.starter).trial}-day free trial` : 
                      'Free trial available'}
                  </div>
                  {billingCycle === 'annual' && getPrice(product) > 0 && (
                    <div className="text-xs text-green-600 dark:text-green-400 font-semibold">
                      Save {Math.round(getPrice(product) * 0.25).toLocaleString()} SAR/year
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="p-6 flex-1">
                  <div className="space-y-3 mb-6">
                    {product.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <FaCheck className="text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-sm text-neutral dark:text-gray-300">{feature.title}</span>
                      </div>
                    ))}
                    {product.features.length > 5 && (
                      <div className="text-sm text-accent font-semibold">
                        + {product.features.length - 5} more features
                      </div>
                    )}
                  </div>

                  {/* ROI Highlight */}
                  {(product.pricing?.professional?.roi || product.pricing?.starter?.roi) && (
                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
                      <div className="flex items-center text-green-600 dark:text-green-400 mb-2">
                        <FaChartLine className="mr-2" />
                        <span className="text-sm font-semibold">Expected ROI</span>
                      </div>
                      <div className="text-xs text-neutral-medium dark:text-gray-400">
                        Payback in {(product.pricing?.professional?.roi || product.pricing?.starter?.roi)?.paybackPeriod}
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="p-6 pt-0">
                  <Link
                    to={`/saas/${product.id}`}
                    className="block w-full bg-accent hover:bg-accent/90 text-white font-semibold text-center py-4 rounded-lg transition-all duration-300 transform hover:scale-105 mb-3"
                  >
                    Start Free Trial
                  </Link>
                  <Link
                    to={`/saas/${product.id}`}
                    className="block w-full text-center text-accent hover:text-accent/80 text-sm font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-accent text-white rounded-3xl p-12 text-center"
          >
            <FaStar className="text-5xl mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Enterprise Solutions</h2>
            <p className="text-xl text-white/90 mb-8">
              Need custom solutions, dedicated support, or multiple products? Our enterprise plans offer unlimited flexibility.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <FaCheck className="text-3xl mx-auto mb-3" />
                <div className="font-semibold mb-2">Unlimited Users</div>
                <div className="text-sm text-white/80">Scale without limits</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <FaCheck className="text-3xl mx-auto mb-3" />
                <div className="font-semibold mb-2">Priority Support</div>
                <div className="text-sm text-white/80">24/7 dedicated team</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <FaCheck className="text-3xl mx-auto mb-3" />
                <div className="font-semibold mb-2">Custom Integration</div>
                <div className="text-sm text-white/80">Tailored to your needs</div>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Sales Team
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-neutral dark:text-white mb-6">
              Pricing FAQs
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'Can I switch plans anytime?',
                a: 'Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards (Visa, Mastercard, Amex), bank transfers, and Saudi-specific payment methods like Mada and STC Pay.'
              },
              {
                q: 'Is there a long-term contract?',
                a: 'No contracts required. Pay monthly or save 20% with annual billing. Cancel anytime with no penalties.'
              },
              {
                q: 'What happens after the free trial?',
                a: 'After 14 days, you\'ll be charged based on your selected plan. You can cancel before the trial ends with no charges.'
              },
              {
                q: 'Do you offer refunds?',
                a: 'Yes! We offer a 30-day money-back guarantee if you\'re not satisfied with our service.'
              },
              {
                q: 'Can I use multiple products?',
                a: 'Absolutely! Each product is priced separately. Contact us for bundle discounts when using 3+ products.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-neutral dark:text-white mb-3">{faq.q}</h3>
                <p className="text-neutral-medium dark:text-gray-400">{faq.a}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your 14-day free trial today. No credit card required.
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
                to="/roi-calculator"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Calculate ROI
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

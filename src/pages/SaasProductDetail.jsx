import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft, FaCheck, FaRocket, FaClock, FaDollarSign, FaChartLine } from 'react-icons/fa';
import { getProductById, getCategoryById } from '../data/saasProductsData';
import ProblemSection from '../components/saas/ProblemSection';
import IntegrationSection from '../components/saas/IntegrationSection';
import TechSpecs from '../components/saas/TechSpecs';
import ROICalculator from '../components/saas/ROICalculator';
import ImplementationTimeline from '../components/saas/ImplementationTimeline';
import FAQAccordion from '../components/saas/FAQAccordion';
import ProgressNavigator from '../components/saas/ProgressNavigator';
import CaseStudyCard from '../components/saas/CaseStudyCard';
import LiveDemo from '../components/saas/LiveDemo';
import DashboardPreview from '../components/saas/DashboardPreview';

const SaasProductDetail = () => {
  const { categoryId, productId } = useParams();
  const product = getProductById(productId);
  const category = getCategoryById(categoryId);
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [showSidebarPadding, setShowSidebarPadding] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowSidebarPadding(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!product || !category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral dark:text-white mb-4">Product Not Found</h1>
          <Link to="/saas" className="text-accent hover:underline">
            Back to SaaS Products
          </Link>
        </div>
      </div>
    );
  }

  const ProductIcon = product.icon;
  const CategoryIcon = category.icon;

  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">
      {/* Progress Navigator */}
      <ProgressNavigator 
        productName={product.name}
        onOpenChange={setSidebarOpen}
      />

      {/* Main Content - Add left padding for sidebar on desktop when scrolled and open */}
      <div 
        className="transition-all duration-400 ease-in-out"
        style={{ 
          paddingLeft: typeof window !== 'undefined' && window.innerWidth >= 1024 && showSidebarPadding && sidebarOpen ? '320px' : '0' 
        }}
      >
        {/* Hero Section */}
        <section id="hero" className={`relative bg-gradient-to-br ${category.color} text-white overflow-hidden pt-32 pb-20`}>
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
              to={`/saas/${categoryId}`}
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to {category.name}
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                    <ProductIcon className="text-4xl" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80 mb-1">{category.name}</div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold">
                      {product.name}
                    </h1>
                  </div>
                </div>

                <p className="text-2xl text-white/90 mb-6 font-semibold">
                  {product.tagline}
                </p>

                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  {product.shortDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-xl"
                  >
                    <FaRocket className="mr-2" />
                    Start 14-Day Free Trial
                  </Link>
                  <a
                    href="#pricing"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                  >
                    View Pricing
                    <FaArrowRight className="ml-2" />
                  </a>
                </div>

                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-2" />
                    <span>14-Day Free Trial</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-2" />
                    <span>No Credit Card</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-2" />
                    <span>Cancel Anytime</span>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
                    <div className="text-center">
                      <ProductIcon className="text-8xl mb-6 mx-auto" />
                      <div className="text-3xl font-bold mb-2">{product.name}</div>
                      <div className="text-lg text-white/80">AI-Powered Solution</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section - NEW */}
      <div id="problems">
        {product.problems && <ProblemSection problems={product.problems} productName={product.name} />}
      </div>

      {/* Solution Overview - Keep existing simple version for context */}
      <section id="solution" className="section-padding bg-white dark:bg-black border-y dark:border-gray-900">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold mb-4">
              The Solution
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
              {product.name} <span className="text-green-600 dark:text-green-400">Solves This</span>
            </h2>
            <p className="text-xl text-neutral-medium dark:text-gray-300 leading-relaxed">
              {product.solution}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Demo Section - NEW */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950 border-t dark:border-gray-900">
        <div className="container-custom">
          <LiveDemo product={product} />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section-padding bg-gray-50 dark:bg-gray-950 border-t dark:border-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to solve {product.problem.toLowerCase()}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:shadow-xl dark:hover:shadow-accent/10 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                    <FeatureIcon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-medium dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section id="business-value" className="section-padding bg-white dark:bg-black border-t dark:border-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
              Business Value
            </h2>
            <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto">
              Real impact on your bottom line
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/10 dark:from-blue-500/20 dark:to-blue-600/20 rounded-xl border border-blue-500/20 dark:border-blue-500/30"
            >
              <FaClock className="text-4xl text-blue-500 mb-4 mx-auto" />
              <div className="text-3xl font-bold text-neutral dark:text-white mb-2">
                {product.businessValue.timeSaved}
              </div>
              <div className="text-neutral-medium dark:text-gray-400">Time Saved</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 bg-gradient-to-br from-green-500/10 to-green-600/10 dark:from-green-500/20 dark:to-green-600/20 rounded-xl border border-green-500/20 dark:border-green-500/30"
            >
              <FaDollarSign className="text-4xl text-green-500 mb-4 mx-auto" />
              <div className="text-3xl font-bold text-neutral dark:text-white mb-2">
                {product.businessValue.costReduction}
              </div>
              <div className="text-neutral-medium dark:text-gray-400">Cost Reduction</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-purple-600/10 dark:from-purple-500/20 dark:to-purple-600/20 rounded-xl border border-purple-500/20 dark:border-purple-500/30"
            >
              <FaRocket className="text-4xl text-purple-500 mb-4 mx-auto" />
              <div className="text-3xl font-bold text-neutral dark:text-white mb-2">
                {product.businessValue.efficiency}
              </div>
              <div className="text-neutral-medium dark:text-gray-400">Efficiency Gain</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/10 dark:from-orange-500/20 dark:to-orange-600/20 rounded-xl border border-orange-500/20 dark:border-orange-500/30"
            >
              <FaRocket className="text-4xl text-orange-500 mb-4 mx-auto" />
              <div className="text-3xl font-bold text-neutral dark:text-white mb-2">
                {product.businessValue.roi}
              </div>
              <div className="text-neutral-medium dark:text-gray-400">ROI Timeline</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview - NEW */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950 border-t dark:border-gray-900">
        <div className="container-custom">
          <DashboardPreview product={product} />
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="section-padding bg-gray-50 dark:bg-gray-950 border-t dark:border-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
              Real-World Use Cases
            </h2>
            <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto">
              See how businesses like yours are using {product.name}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8"
              >
                <div className="text-6xl mb-4 opacity-20">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-neutral dark:text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-neutral-medium dark:text-gray-400 leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies - NEW */}
      {product.caseStudies && product.caseStudies.length > 0 && (
        <section className="section-padding bg-white dark:bg-black border-t dark:border-gray-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold mb-4">
                Success Stories
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
                Real Results from Real Customers
              </h2>
              <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto">
                See how businesses achieved measurable ROI with {product.name}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {product.caseStudies.map((caseStudy, index) => (
                <CaseStudyCard key={index} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Integration Section - NEW */}
      <div id="integrations">
        {product.integrations && (
          <IntegrationSection
            integrations={product.integrations}
            installTime={product.installTime}
            hardwareRequired={product.hardwareRequired}
            apiDocs={product.apiDocs}
            productName={product.name}
          />
        )}
      </div>

      {/* ROI Calculator - NEW */}
      <div id="roi-calculator">
        {product.roiCalculator && (
          <ROICalculator
            productName={product.name}
            defaultInputs={product.roiCalculator.defaultInputs}
            calculations={product.roiCalculator}
          />
        )}
      </div>

      {/* Technical Specifications - NEW */}
      <div id="tech-specs">
        {product.techSpecs && <TechSpecs specs={product.techSpecs} />}
      </div>

      {/* Implementation Timeline - NEW */}
      <div id="implementation">
        <ImplementationTimeline />
      </div>

      {/* Pricing */}
      <section id="pricing" className="section-padding bg-white dark:bg-black border-t dark:border-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Start with a 14-day free trial. No credit card required.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`bg-white dark:bg-gray-950 border-2 ${
                selectedPlan === 'starter' ? 'border-accent' : 'border-gray-200 dark:border-gray-800'
              } rounded-2xl p-8 hover:shadow-xl dark:hover:shadow-accent/10 transition-all duration-300 cursor-pointer`}
              onClick={() => setSelectedPlan('starter')}
            >
              <h3 className="text-2xl font-bold text-neutral dark:text-white mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-neutral dark:text-white">
                  {product.pricing.starter.price} {product.pricing.starter.currency || 'SAR'}
                </span>
                <span className="text-neutral-medium dark:text-gray-400">/month</span>
              </div>
              {product.pricing.starter.roi && (
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 mb-4">
                  <div className="text-sm text-green-700 dark:text-green-400 font-semibold">
                    ROI in {product.pricing.starter.roi.paybackPeriod}
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-500">
                    Save {product.pricing.starter.roi.monthlySavings} SAR/month
                  </div>
                </div>
              )}
              <ul className="space-y-3 mb-8">
                {product.pricing.starter.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-neutral-medium dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="block w-full text-center bg-gray-100 dark:bg-gray-800 text-neutral dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Start Free Trial
              </Link>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`bg-white dark:bg-gray-950 border-2 border-accent rounded-2xl p-8 hover:shadow-xl dark:hover:shadow-accent/20 transition-all duration-300 cursor-pointer relative transform scale-105`}
              onClick={() => setSelectedPlan('professional')}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-neutral dark:text-white mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-neutral dark:text-white">
                  {product.pricing.professional.price} {product.pricing.professional.currency || 'SAR'}
                </span>
                <span className="text-neutral-medium dark:text-gray-400">/month</span>
              </div>
              {product.pricing.professional.roi && (
                <div className="bg-accent/10 rounded-lg p-3 mb-4">
                  <div className="text-sm text-accent font-semibold">
                    ROI in {product.pricing.professional.roi.paybackPeriod}
                  </div>
                  <div className="text-xs text-accent/80">
                    Save {product.pricing.professional.roi.monthlySavings} SAR/month
                  </div>
                </div>
              )}
              <ul className="space-y-3 mb-8">
                {product.pricing.professional.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-neutral-medium dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`bg-white dark:bg-gray-950 border-2 ${
                selectedPlan === 'enterprise' ? 'border-accent' : 'border-gray-200 dark:border-gray-800'
              } rounded-2xl p-8 hover:shadow-xl dark:hover:shadow-accent/10 transition-all duration-300 cursor-pointer`}
              onClick={() => setSelectedPlan('enterprise')}
            >
              <h3 className="text-2xl font-bold text-neutral dark:text-white mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-neutral dark:text-white">Custom</span>
                <span className="text-neutral-medium dark:text-gray-400">/month</span>
              </div>
              {product.pricing.enterprise.roi && (
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 mb-4">
                  <div className="text-sm text-purple-700 dark:text-purple-400 font-semibold">
                    ROI in {product.pricing.enterprise.roi.paybackPeriod}
                  </div>
                  <div className="text-xs text-purple-600 dark:text-purple-500">
                    Save {product.pricing.enterprise.roi.monthlySavings} SAR/month
                  </div>
                </div>
              )}
              <ul className="space-y-3 mb-8">
                {product.pricing.enterprise.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-neutral-medium dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="block w-full text-center bg-gray-100 dark:bg-gray-800 text-neutral dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq">
        {product.faqs ? (
          <FAQAccordion faqs={product.faqs} />
        ) : (
          <FAQAccordion />
        )}
      </div>

      {/* Final CTA */}
      <section className={`section-padding bg-gradient-to-br ${category.color} text-white border-t dark:border-gray-900`}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Join thousands of businesses using {product.name} to solve {product.problem.toLowerCase()}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center text-lg shadow-xl"
              >
                <FaRocket className="mr-2" />
                Start 14-Day Free Trial
              </Link>
              <Link
                to={`/saas/${categoryId}`}
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-10 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center text-lg"
              >
                View More Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default SaasProductDetail;

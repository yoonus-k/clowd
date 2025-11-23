import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaChartLine, FaDollarSign, FaArrowRight, FaClock } from 'react-icons/fa';

const ROICalculator = ({ productName, defaultInputs, calculations }) => {
  const [inputs, setInputs] = useState(defaultInputs || {
    currentCost: 10000,
    volume: 100,
    efficiency: 50
  });

  const [results, setResults] = useState(null);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const calculateROI = () => {
    // Sample calculation - customize per product
    const monthlySavings = inputs.currentCost * (inputs.efficiency / 100);
    const productCost = calculations?.productCost || 1500;
    const netSavings = monthlySavings - productCost;
    const paybackDays = productCost / (monthlySavings / 30);
    const annualROI = ((netSavings * 12) / (productCost * 12)) * 100;

    setResults({
      monthlySavings: Math.round(monthlySavings),
      productCost,
      netSavings: Math.round(netSavings),
      paybackDays: Math.round(paybackDays * 10) / 10,
      annualROI: Math.round(annualROI),
      annualSavings: Math.round(netSavings * 12)
    });
  };

  return (
    <section className="section-padding bg-gradient-to-br from-accent/5 to-blue-500/5 dark:from-accent/10 dark:to-blue-500/10 border-y dark:border-gray-900">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
            ROI Calculator
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
            Calculate Your <span className="text-accent">Savings</span>
          </h2>
          <p className="text-xl text-neutral-medium dark:text-gray-300">
            See exactly how much {productName} will save your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-black rounded-2xl p-8 border-2 dark:border-gray-800"
          >
            <div className="flex items-center mb-6">
              <FaCalculator className="text-accent text-2xl mr-3" />
              <h3 className="text-2xl font-display font-bold text-neutral dark:text-white">
                Your Current Situation
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-neutral dark:text-white mb-2">
                  Monthly Operating Cost (SAR)
                </label>
                <input
                  type="number"
                  value={inputs.currentCost}
                  onChange={(e) => handleInputChange('currentCost', e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-light dark:bg-gray-950 border dark:border-gray-800 rounded-lg text-neutral dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="10000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral dark:text-white mb-2">
                  Daily Volume/Orders
                </label>
                <input
                  type="number"
                  value={inputs.volume}
                  onChange={(e) => handleInputChange('volume', e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-light dark:bg-gray-950 border dark:border-gray-800 rounded-lg text-neutral dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral dark:text-white mb-2">
                  Expected Efficiency Gain (%)
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="10"
                    max="80"
                    value={inputs.efficiency}
                    onChange={(e) => handleInputChange('efficiency', e.target.value)}
                    className="w-full h-2 bg-neutral-light dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                  <div className="flex justify-between text-sm text-neutral-medium dark:text-gray-400 mt-2">
                    <span>10%</span>
                    <span className="font-bold text-accent">{inputs.efficiency}%</span>
                    <span>80%</span>
                  </div>
                </div>
              </div>

              <button
                onClick={calculateROI}
                className="w-full bg-accent hover:bg-accent/90 text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
              >
                Calculate My ROI
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Results Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-accent to-blue-500 dark:from-accent/90 dark:to-blue-600 rounded-2xl p-8 text-white"
          >
            <div className="flex items-center mb-6">
              <FaChartLine className="text-white text-2xl mr-3" />
              <h3 className="text-2xl font-display font-bold">
                Your Potential Savings
              </h3>
            </div>

            {results ? (
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm opacity-90">Monthly Savings</span>
                    <FaDollarSign className="opacity-60" />
                  </div>
                  <div className="text-4xl font-bold">{results.monthlySavings.toLocaleString()} SAR</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm opacity-90">Product Cost</span>
                    <FaDollarSign className="opacity-60" />
                  </div>
                  <div className="text-4xl font-bold">{results.productCost.toLocaleString()} SAR</div>
                  <div className="text-sm opacity-75 mt-1">per month</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm opacity-90">Net Monthly Profit</span>
                    <FaDollarSign className="opacity-60" />
                  </div>
                  <div className="text-4xl font-bold text-green-300">
                    +{results.netSavings.toLocaleString()} SAR
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <FaClock className="text-2xl mb-2 opacity-80" />
                    <div className="text-2xl font-bold">{results.paybackDays}</div>
                    <div className="text-xs opacity-75">Days to ROI</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <FaChartLine className="text-2xl mb-2 opacity-80" />
                    <div className="text-2xl font-bold">{results.annualROI}%</div>
                    <div className="text-xs opacity-75">Annual ROI</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-sm opacity-90 mb-2">First Year Total Savings</div>
                    <div className="text-3xl font-bold text-green-300">
                      {results.annualSavings.toLocaleString()} SAR
                    </div>
                  </div>
                </div>

                <button className="w-full bg-white text-accent hover:bg-gray-100 font-semibold py-4 px-6 rounded-lg transition-all duration-300">
                  Schedule Demo to Unlock These Savings
                </button>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center opacity-80">
                  <FaCalculator className="text-6xl mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Enter your details and click calculate to see your potential ROI</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-medium dark:text-gray-400 mb-4">
            These are conservative estimates. Most customers see even better results.
          </p>
          <a href="/contact" className="text-accent hover:text-accent/80 font-semibold inline-flex items-center">
            Schedule a personalized ROI consultation
            <FaArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;

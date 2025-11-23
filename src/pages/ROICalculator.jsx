import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, FaCalculator, FaCheckCircle, FaChartLine, 
  FaUtensils, FaShoppingCart, FaChartBar, FaIndustry, FaHospital 
} from 'react-icons/fa';

const ROICalculator = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('restaurant');
  const [inputs, setInputs] = useState({
    // Restaurant inputs
    dailyCustomers: 150,
    avgOrderValue: 80,
    staffCount: 8,
    avgHourlyWage: 30,
    monthlyRent: 15000,
    
    // Retail inputs
    monthlyRevenue: 500000,
    cartAbandonmentRate: 70,
    avgCartValue: 420,
    
    // Manufacturing inputs
    productionLines: 5,
    downtimeHours: 340,
    hourlyProductionCost: 5000,
    
    // Healthcare inputs
    dailyPatients: 200,
    noShowRate: 28,
    avgAppointmentValue: 250,
    adminHours: 160
  });

  const industries = [
    { id: 'restaurant', name: 'Restaurants', icon: FaUtensils, color: 'from-orange-500 to-red-500' },
    { id: 'retail', name: 'Retail', icon: FaShoppingCart, color: 'from-blue-500 to-cyan-500' },
    { id: 'manufacturing', name: 'Manufacturing', icon: FaIndustry, color: 'from-gray-600 to-gray-800' },
    { id: 'healthcare', name: 'Healthcare', icon: FaHospital, color: 'from-teal-500 to-blue-600' }
  ];

  const handleInputChange = (key, value) => {
    setInputs(prev => ({ ...prev, [key]: parseFloat(value) || 0 }));
  };

  const calculateROI = () => {
    let results = {};

    switch (selectedIndustry) {
      case 'restaurant':
        const currentMonthlyRevenue = inputs.dailyCustomers * inputs.avgOrderValue * 30;
        const revenueIncrease = currentMonthlyRevenue * 0.28; // 28% increase
        const laborSavings = inputs.staffCount * inputs.avgHourlyWage * 40 * 4 * 0.35; // 35% time saved
        const monthlyBenefit = revenueIncrease + laborSavings;
        const productCost = 1200; // AI Waiter monthly cost
        const monthlyProfit = monthlyBenefit - productCost;
        const annualProfit = monthlyProfit * 12;
        const roiMonths = productCost / monthlyProfit;

        results = {
          currentRevenue: currentMonthlyRevenue,
          revenueIncrease,
          laborSavings,
          monthlyBenefit,
          productCost,
          monthlyProfit,
          annualProfit,
          roiMonths: Math.ceil(roiMonths),
          roi: ((annualProfit / (productCost * 12)) * 100).toFixed(0)
        };
        break;

      case 'retail':
        const recoveredCarts = (inputs.monthlyRevenue / inputs.avgCartValue) * (inputs.cartAbandonmentRate / 100) * 0.23; // 23% recovery
        const recoveredRevenue = recoveredCarts * inputs.avgCartValue;
        const conversionImprovement = inputs.monthlyRevenue * 0.32; // 32% conversion increase
        const monthlyGain = recoveredRevenue + conversionImprovement;
        const retailCost = 1500;
        const retailProfit = monthlyGain - retailCost;

        results = {
          currentRevenue: inputs.monthlyRevenue,
          recoveredCarts: Math.round(recoveredCarts),
          recoveredRevenue,
          conversionImprovement,
          monthlyBenefit: monthlyGain,
          productCost: retailCost,
          monthlyProfit: retailProfit,
          annualProfit: retailProfit * 12,
          roiMonths: Math.ceil(retailCost / retailProfit),
          roi: ((retailProfit * 12 / (retailCost * 12)) * 100).toFixed(0)
        };
        break;

      case 'manufacturing':
        const downtimeSavings = inputs.downtimeHours * 0.68 * inputs.hourlyProductionCost; // 68% reduction annually
        const maintenanceSavings = inputs.productionLines * 50000 * 0.42; // 42% cost reduction
        const annualSavings = downtimeSavings + maintenanceSavings;
        const mfgCost = 2500;
        const mfgMonthlyProfit = (annualSavings / 12) - mfgCost;

        results = {
          downtimeSavings,
          maintenanceSavings,
          monthlyBenefit: annualSavings / 12,
          productCost: mfgCost,
          monthlyProfit: mfgMonthlyProfit,
          annualProfit: annualSavings - (mfgCost * 12),
          roiMonths: Math.ceil((mfgCost * 12) / annualSavings * 12),
          roi: ((annualSavings / (mfgCost * 12)) * 100).toFixed(0)
        };
        break;

      case 'healthcare':
        const noShowRevenueLost = inputs.dailyPatients * (inputs.noShowRate / 100) * inputs.avgAppointmentValue * 30;
        const noShowRecovered = noShowRevenueLost * 0.72; // 72% reduction
        const adminCostSavings = inputs.adminHours * 50 * 0.55; // 55% time saved, 50 SAR/hr
        const healthMonthlyBenefit = noShowRecovered + adminCostSavings;
        const healthCost = 1800;
        const healthProfit = healthMonthlyBenefit - healthCost;

        results = {
          noShowRevenueLost,
          noShowRecovered,
          adminSavings: adminCostSavings,
          monthlyBenefit: healthMonthlyBenefit,
          productCost: healthCost,
          monthlyProfit: healthProfit,
          annualProfit: healthProfit * 12,
          roiMonths: Math.ceil(healthCost / healthProfit),
          roi: ((healthProfit * 12 / (healthCost * 12)) * 100).toFixed(0)
        };
        break;

      default:
        results = {};
    }

    return results;
  };

  const results = calculateROI();
  const currentIndustry = industries.find(ind => ind.id === selectedIndustry);
  const IndustryIcon = currentIndustry.icon;

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
            <FaCalculator className="text-6xl mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              ROI Calculator
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Calculate your potential return on investment with Clowd AI solutions
            </p>
            <p className="text-white/80">
              Based on real data from 180+ businesses. Results are estimates and may vary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Selector */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950 border-y dark:border-gray-900">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-neutral dark:text-white mb-4">
              Select Your Industry
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <motion.button
                  key={industry.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`p-6 rounded-2xl transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? `bg-gradient-to-br ${industry.color} text-white shadow-2xl`
                      : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-neutral dark:text-white hover:border-accent'
                  }`}
                >
                  <Icon className="text-4xl mx-auto mb-3" />
                  <div className="font-semibold">{industry.name}</div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-800">
                <div className="flex items-center mb-6">
                  <IndustryIcon className="text-3xl text-accent mr-3" />
                  <h3 className="text-2xl font-bold text-neutral dark:text-white">
                    Your Business Metrics
                  </h3>
                </div>

                <div className="space-y-6">
                  {selectedIndustry === 'restaurant' && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-neutral dark:text-white mb-2">
                          Daily Customers
                        </label>
                        <input
                          type="number"
                          value={inputs.dailyCustomers}
                          onChange={(e) => handleInputChange('dailyCustomers', e.target.value)}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-accent text-neutral dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral dark:text-white mb-2">
                          Average Order Value (SAR)
                        </label>
                        <input
                          type="number"
                          value={inputs.avgOrderValue}
                          onChange={(e) => handleInputChange('avgOrderValue', e.target.value)}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-accent text-neutral dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral dark:text-white mb-2">
                          Number of Staff
                        </label>
                        <input
                          type="number"
                          value={inputs.staffCount}
                          onChange={(e) => handleInputChange('staffCount', e.target.value)}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-accent text-neutral dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral dark:text-white mb-2">
                          Average Hourly Wage (SAR)
                        </label>
                        <input
                          type="number"
                          value={inputs.avgHourlyWage}
                          onChange={(e) => handleInputChange('avgHourlyWage', e.target.value)}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-accent text-neutral dark:text-white"
                        />
                      </div>
                    </>
                  )}

                  {selectedIndustry === 'retail' && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-neutral dark:text-white mb-2">
                          Monthly Revenue (SAR)
                        </label>
                        <input
                          type="number"
                          value={inputs.monthlyRevenue}
                          onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-accent text-neutral dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral dark:text-white mb-2">
                          Cart Abandonment Rate (%)
                        </label>
                        <input
                          type="number"
                          value={inputs.cartAbandonmentRate}
                          onChange={(e) => handleInputChange('cartAbandonmentRate', e.target.value)}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-accent text-neutral dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral dark:text-white mb-2">
                          Average Cart Value (SAR)
                        </label>
                        <input
                          type="number"
                          value={inputs.avgCartValue}
                          onChange={(e) => handleInputChange('avgCartValue', e.target.value)}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-accent text-neutral dark:text-white"
                        />
                      </div>
                    </>
                  )}

                  {selectedIndustry === 'manufacturing' && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-neutral dark:text-white mb-2">
                          Production Lines
                        </label>
                        <input
                          type="number"
                          value={inputs.productionLines}
                          onChange={(e) => handleInputChange('productionLines', e.target.value)}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-accent text-neutral dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral dark:text-white mb-2">
                          Annual Downtime (hours)
                        </label>
                        <input
                          type="number"
                          value={inputs.downtimeHours}
                          onChange={(e) => handleInputChange('downtimeHours', e.target.value)}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-accent text-neutral dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral dark:text-white mb-2">
                          Hourly Production Cost (SAR)
                        </label>
                        <input
                          type="number"
                          value={inputs.hourlyProductionCost}
                          onChange={(e) => handleInputChange('hourlyProductionCost', e.target.value)}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-accent text-neutral dark:text-white"
                        />
                      </div>
                    </>
                  )}

                  {selectedIndustry === 'healthcare' && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-neutral dark:text-white mb-2">
                          Daily Patients
                        </label>
                        <input
                          type="number"
                          value={inputs.dailyPatients}
                          onChange={(e) => handleInputChange('dailyPatients', e.target.value)}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-accent text-neutral dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral dark:text-white mb-2">
                          No-Show Rate (%)
                        </label>
                        <input
                          type="number"
                          value={inputs.noShowRate}
                          onChange={(e) => handleInputChange('noShowRate', e.target.value)}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-accent text-neutral dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral dark:text-white mb-2">
                          Avg Appointment Value (SAR)
                        </label>
                        <input
                          type="number"
                          value={inputs.avgAppointmentValue}
                          onChange={(e) => handleInputChange('avgAppointmentValue', e.target.value)}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-accent text-neutral dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral dark:text-white mb-2">
                          Monthly Admin Hours
                        </label>
                        <input
                          type="number"
                          value={inputs.adminHours}
                          onChange={(e) => handleInputChange('adminHours', e.target.value)}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-accent text-neutral dark:text-white"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={`bg-gradient-to-br ${currentIndustry.color} text-white rounded-3xl p-8 shadow-2xl`}>
                <div className="flex items-center mb-8">
                  <FaChartLine className="text-4xl mr-3" />
                  <h3 className="text-3xl font-bold">Your Potential ROI</h3>
                </div>

                <div className="space-y-6">
                  {/* ROI Badge */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-sm font-semibold mb-2">Return on Investment</div>
                    <div className="text-6xl font-bold mb-2">{results.roi}%</div>
                    <div className="text-sm">in the first year</div>
                  </div>

                  {/* Key Metrics */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                    <div className="flex justify-between items-center border-b border-white/20 pb-4">
                      <span className="text-white/90">Monthly Product Cost</span>
                      <span className="font-bold text-2xl">{results.productCost?.toLocaleString()} SAR</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-4">
                      <span className="text-white/90">Monthly Benefit</span>
                      <span className="font-bold text-2xl text-green-300">{results.monthlyBenefit?.toLocaleString()} SAR</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-4">
                      <span className="text-white/90">Monthly Net Profit</span>
                      <span className="font-bold text-2xl text-green-300">{results.monthlyProfit?.toLocaleString()} SAR</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/90">Annual Net Profit</span>
                      <span className="font-bold text-3xl text-green-300">{results.annualProfit?.toLocaleString()} SAR</span>
                    </div>
                  </div>

                  {/* ROI Timeline */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <FaCheckCircle className="text-5xl mx-auto mb-3" />
                    <div className="text-sm font-semibold mb-2">Break-Even Point</div>
                    <div className="text-4xl font-bold mb-2">{results.roiMonths} {results.roiMonths === 1 ? 'month' : 'months'}</div>
                    <div className="text-sm text-white/80">Product pays for itself</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-xl font-bold text-neutral dark:text-white mb-4">
              About These Calculations
            </h3>
            <p className="text-neutral-medium dark:text-gray-400 mb-4">
              These ROI estimates are based on real performance data from 180+ businesses using Clowd AI solutions. 
              Actual results may vary depending on your specific business conditions, implementation quality, and market factors.
            </p>
            <p className="text-neutral-medium dark:text-gray-400">
              For a personalized ROI analysis based on your exact situation, contact our team for a free consultation.
            </p>
          </motion.div>
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
              Ready to Achieve These Results?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a free consultation to discuss your specific needs and ROI potential
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
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ROICalculator;

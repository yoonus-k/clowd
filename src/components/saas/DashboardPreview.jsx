import { motion } from 'framer-motion';
import { FaChartLine, FaChartBar, FaChartPie, FaDownload, FaExpand } from 'react-icons/fa';

const DashboardPreview = ({ product }) => {
  // Sample metrics based on product category
  const getDashboardMetrics = () => {
    const categoryMetrics = {
      marketing: [
        { label: 'Content Generated', value: '1,247', change: '+23%', trend: 'up' },
        { label: 'Engagement Rate', value: '4.8%', change: '+1.2%', trend: 'up' },
        { label: 'Time Saved', value: '47hrs', change: '+15hrs', trend: 'up' },
        { label: 'Cost Savings', value: '12,450 SAR', change: '+3,200', trend: 'up' }
      ],
      ecommerce: [
        { label: 'Conversion Rate', value: '3.4%', change: '+0.8%', trend: 'up' },
        { label: 'Cart Recovery', value: '68%', change: '+12%', trend: 'up' },
        { label: 'Avg Order Value', value: '245 SAR', change: '+18%', trend: 'up' },
        { label: 'Revenue Growth', value: '24,500 SAR', change: '+5,200', trend: 'up' }
      ],
      finance: [
        { label: 'Transactions', value: '8,423', change: '+1,234', trend: 'up' },
        { label: 'Accuracy Rate', value: '99.7%', change: '+0.3%', trend: 'up' },
        { label: 'Processing Time', value: '1.2s', change: '-0.4s', trend: 'up' },
        { label: 'Cost Saved', value: '18,900 SAR', change: '+4,100', trend: 'up' }
      ],
      operations: [
        { label: 'Tasks Automated', value: '342', change: '+89', trend: 'up' },
        { label: 'Team Efficiency', value: '87%', change: '+12%', trend: 'up' },
        { label: 'Time Saved', value: '124hrs', change: '+32hrs', trend: 'up' },
        { label: 'Projects Done', value: '23', change: '+8', trend: 'up' }
      ],
      industry: [
        { label: 'Orders Processed', value: '1,847', change: '+234', trend: 'up' },
        { label: 'Customer Rating', value: '4.9/5', change: '+0.3', trend: 'up' },
        { label: 'Service Speed', value: '2.3min', change: '-1.2min', trend: 'up' },
        { label: 'Revenue', value: '89,400 SAR', change: '+12,300', trend: 'up' }
      ]
    };

    return categoryMetrics[product.category] || categoryMetrics.marketing;
  };

  const metrics = getDashboardMetrics();

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
              Your Dashboard
            </span>
            <h3 className="text-3xl font-bold text-neutral dark:text-white mb-2">
              Real-Time Analytics & Insights
            </h3>
            <p className="text-neutral-medium dark:text-gray-300">
              Track performance, measure ROI, and make data-driven decisions
            </p>
          </div>
          <div className="hidden lg:flex gap-2">
            <button className="p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700">
              <FaDownload className="text-neutral-medium dark:text-gray-400" />
            </button>
            <button className="p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700">
              <FaExpand className="text-neutral-medium dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
          >
            <div className="text-sm text-neutral-medium dark:text-gray-400 mb-2">
              {metric.label}
            </div>
            <div className="flex items-end justify-between">
              <div className="text-3xl font-bold text-neutral dark:text-white">
                {metric.value}
              </div>
              <div className="flex items-center text-sm font-semibold text-green-600 dark:text-green-400">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 011 1v4a1 1 0 01-2 0V9.414l-3.293 3.293a1 1 0 01-1.414-1.414L9.586 8H8a1 1 0 010-2h4z" clipRule="evenodd" />
                </svg>
                {metric.change}
              </div>
            </div>
            {/* Mini trend line */}
            <div className="mt-4 h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '70%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dashboard Mockup */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-semibold">
              Overview
            </button>
            <button className="px-4 py-2 text-neutral-medium dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-semibold transition-colors">
              Detailed
            </button>
            <button className="px-4 py-2 text-neutral-medium dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-semibold transition-colors">
              Export
            </button>
          </div>
          <select className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-neutral dark:text-white">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
        </div>

        {/* Chart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Line Chart */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-neutral dark:text-white">Performance Trend</h4>
              <FaChartLine className="text-accent text-xl" />
            </div>
            <div className="h-48 flex items-end justify-between gap-2">
              {[40, 65, 55, 80, 75, 90, 85, 95].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="flex-1 bg-gradient-to-t from-accent to-accent/50 rounded-t-lg min-w-[20px]"
                />
              ))}
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-neutral dark:text-white">Category Breakdown</h4>
              <FaChartBar className="text-blue-600 text-xl" />
            </div>
            <div className="space-y-3">
              {[
                { label: 'Category A', value: 85, color: 'bg-blue-600' },
                { label: 'Category B', value: 65, color: 'bg-green-600' },
                { label: 'Category C', value: 45, color: 'bg-yellow-600' },
                { label: 'Category D', value: 30, color: 'bg-red-600' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-24 text-sm text-neutral-medium dark:text-gray-400">{item.label}</div>
                  <div className="flex-1 h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                  <div className="w-12 text-sm font-semibold text-neutral dark:text-white">{item.value}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: FaChartLine, label: 'Real-time Updates', desc: 'Live data every second' },
            { icon: FaDownload, label: 'Export Reports', desc: 'PDF, Excel, CSV formats' },
            { icon: FaChartPie, label: 'Custom Views', desc: 'Build your own dashboards' }
          ].map((feature, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="text-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-neutral dark:text-white mb-1">
                  {feature.label}
                </div>
                <div className="text-xs text-neutral-medium dark:text-gray-400">
                  {feature.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <p className="text-neutral-medium dark:text-gray-400 mb-4">
          This is what your dashboard will look like with real data
        </p>
        <button className="px-8 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
          Start Free Trial to See Your Data
        </button>
      </div>
    </div>
  );
};

export default DashboardPreview;

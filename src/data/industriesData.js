import { FaUtensils, FaShoppingCart, FaChartLine, FaIndustry, FaHospital } from 'react-icons/fa';

export const industries = [
  {
    id: 'restaurants',
    name: 'Restaurants & Cafes',
    icon: FaUtensils,
    hero: '/images/industries/restaurants.jpg',
    gradient: 'from-orange-500 to-red-500',
    description: 'Transform your restaurant operations with AI-powered solutions that boost efficiency and customer satisfaction',
    challenges: [
      {
        title: 'High Staff Turnover',
        description: 'Training costs spike with 60%+ annual turnover rates',
        stat: '60%'
      },
      {
        title: 'Slow Service During Peak Hours',
        description: 'Lost revenue from customers leaving due to wait times',
        stat: '23%'
      },
      {
        title: 'Inventory Waste',
        description: 'Poor forecasting leads to food waste and lost profits',
        stat: '18%'
      }
    ],
    products: ['ai-waiter', 'supply-chain-ai', 'customer-feedback-ai'],
    stats: {
      customersServed: '50+',
      avgTimeSaved: '35%',
      avgRevIncrease: '18%',
      avgCostReduction: '25%'
    },
    caseStudies: ['riyadh-cafe', 'jeddah-bistro'],
    testimonial: {
      quote: 'Clowd AI transformed our restaurant. We serve 30% more customers with the same staff size.',
      author: 'Ahmed Al-Saud',
      title: 'Owner, Riyadh Cafe Co.',
      avatar: null
    }
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    icon: FaShoppingCart,
    hero: '/images/industries/retail.jpg',
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Optimize inventory, personalize customer experiences, and boost sales with intelligent retail solutions',
    challenges: [
      {
        title: 'Cart Abandonment',
        description: 'Average 70% of online shoppers abandon their carts',
        stat: '70%'
      },
      {
        title: 'Inventory Management',
        description: 'Overstocking and stockouts cost retailers billions',
        stat: '30%'
      },
      {
        title: 'Customer Retention',
        description: 'Acquiring new customers costs 5x more than retention',
        stat: '5x'
      }
    ],
    products: ['ecommerce-recommender', 'customer-retention-ai', 'smart-inventory'],
    stats: {
      customersServed: '40+',
      avgTimeSaved: '28%',
      avgRevIncrease: '32%',
      avgCostReduction: '22%'
    },
    caseStudies: ['jeddah-boutique', 'riyadh-electronics'],
    testimonial: {
      quote: 'Our conversion rate doubled after implementing AI recommendations. ROI was achieved in 2 weeks.',
      author: 'Sarah Al-Mansour',
      title: 'CEO, Jeddah Fashion Boutique',
      avatar: null
    }
  },
  {
    id: 'finance',
    name: 'Finance & Banking',
    icon: FaChartLine,
    hero: '/images/industries/finance.jpg',
    gradient: 'from-green-500 to-emerald-500',
    description: 'Enhance decision-making, reduce fraud, and automate processes with AI-driven financial tools',
    challenges: [
      {
        title: 'Fraud Detection',
        description: 'Financial institutions lose billions to fraud annually',
        stat: '$42B'
      },
      {
        title: 'Manual Processing',
        description: 'Hours wasted on repetitive data entry and analysis',
        stat: '40hrs/week'
      },
      {
        title: 'Risk Assessment',
        description: 'Inaccurate predictions lead to bad lending decisions',
        stat: '15%'
      }
    ],
    products: ['finance-insights-tool', 'predictive-analytics', 'cost-estimator'],
    stats: {
      customersServed: '25+',
      avgTimeSaved: '45%',
      avgRevIncrease: '28%',
      avgCostReduction: '38%'
    },
    caseStudies: ['saudi-bank', 'investment-firm'],
    testimonial: {
      quote: 'AI analytics helped us reduce fraud by 60% and cut processing time in half.',
      author: 'Dr. Khalid Mansour',
      title: 'CTO, Saudi Finance Corp',
      avatar: null
    }
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Supply Chain',
    icon: FaIndustry,
    hero: '/images/industries/manufacturing.jpg',
    gradient: 'from-gray-600 to-gray-800',
    description: 'Optimize production, predict maintenance needs, and streamline supply chain with smart automation',
    challenges: [
      {
        title: 'Equipment Downtime',
        description: 'Unplanned maintenance stops production and costs millions',
        stat: '20%'
      },
      {
        title: 'Supply Chain Delays',
        description: 'Poor forecasting leads to costly inventory issues',
        stat: '30%'
      },
      {
        title: 'Quality Control',
        description: 'Manual inspection misses defects and slows production',
        stat: '12%'
      }
    ],
    products: ['supply-chain-ai', 'predictive-maintenance', 'quality-control-ai'],
    stats: {
      customersServed: '30+',
      avgTimeSaved: '42%',
      avgRevIncrease: '25%',
      avgCostReduction: '35%'
    },
    caseStudies: ['riyadh-manufacturing', 'jeddah-logistics'],
    testimonial: {
      quote: 'Predictive maintenance reduced our downtime by 40%. The ROI was incredible.',
      author: 'Omar Al-Rashid',
      title: 'Operations Director, Riyadh Manufacturing',
      avatar: null
    }
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Medical',
    icon: FaHospital,
    hero: '/images/industries/healthcare.jpg',
    gradient: 'from-teal-500 to-blue-600',
    description: 'Improve patient care, streamline operations, and reduce costs with healthcare AI solutions',
    challenges: [
      {
        title: 'Administrative Burden',
        description: 'Doctors spend 50% of time on paperwork instead of patients',
        stat: '50%'
      },
      {
        title: 'Appointment No-Shows',
        description: 'No-show rates cost healthcare billions in lost revenue',
        stat: '23%'
      },
      {
        title: 'Patient Wait Times',
        description: 'Long waits decrease satisfaction and quality of care',
        stat: '45min'
      }
    ],
    products: ['medlink-clinic', 'appointment-ai', 'patient-insights'],
    stats: {
      customersServed: '35+',
      avgTimeSaved: '38%',
      avgRevIncrease: '22%',
      avgCostReduction: '28%'
    },
    caseStudies: ['riyadh-clinic', 'jeddah-hospital'],
    testimonial: {
      quote: 'Our clinic now serves 40% more patients daily with better care quality.',
      author: 'Dr. Fatima Al-Zahrani',
      title: 'Director, Riyadh Medical Center',
      avatar: null
    }
  }
];

export const getIndustryById = (id) => {
  return industries.find(industry => industry.id === id);
};

// Comprehensive case studies data for all industries and products

export const caseStudies = [
  // Restaurants & Food Service
  {
    id: 'riyadh-cafe',
    slug: 'riyadh-cafe-ai-waiter',
    customer: 'Riyadh Cafe Co.',
    industry: 'Restaurants & Cafes',
    location: 'Riyadh, Saudi Arabia',
    size: '15 employees, 80 seats',
    logo: null,
    featuredImage: '/images/case-studies/riyadh-cafe.jpg',
    challenge: 'During peak hours, the cafe struggled with long wait times and order errors. Staff turnover was high at 65% annually, making it difficult to maintain service quality. Customers frequently complained about slow service, leading to lost revenue.',
    solution: 'Implemented AI Waiter system with voice ordering, automated kitchen routing, and real-time table management. Staff were trained in 2 days and the system went live within a week.',
    implementation: {
      duration: '1 week',
      team: '1 Clowd specialist + 2 cafe managers',
      challenges: ['Initial staff resistance', 'Wi-Fi infrastructure upgrade', 'Menu digitization'],
      overcome: 'Hands-on training sessions and phased rollout starting with 10 tables'
    },
    results: {
      timeSaved: '42 hours/week',
      revenueIncrease: '+28%',
      customerSatisfaction: '+35%',
      orderAccuracy: '99.2%',
      tablesTurnover: '+40%',
      staffRetention: '+25%'
    },
    metrics: [
      { label: 'Peak Hour Capacity', before: '45 orders/hr', after: '78 orders/hr', change: '+73%' },
      { label: 'Average Wait Time', before: '18 minutes', after: '7 minutes', change: '-61%' },
      { label: 'Order Errors', before: '12%', after: '0.8%', change: '-93%' },
      { label: 'Staff Required', before: '6 waiters', after: '3 waiters', change: '-50%' }
    ],
    testimonial: {
      quote: 'AI Waiter transformed our business overnight. We now serve 30% more customers during rush hour with half the staff stress. The ROI was achieved in just 3 weeks.',
      author: 'Ahmed Al-Saud',
      title: 'Owner & General Manager',
      avatar: null
    },
    products: ['ai-waiter', 'customer-feedback-ai'],
    tags: ['AI Automation', 'Customer Service', 'Restaurant Tech'],
    datePublished: '2024-01-15',
    featured: true,
    videoUrl: null
  },
  {
    id: 'jeddah-bistro',
    slug: 'jeddah-bistro-supply-chain',
    customer: 'Jeddah French Bistro',
    industry: 'Restaurants & Cafes',
    location: 'Jeddah, Saudi Arabia',
    size: '25 employees, 120 seats',
    logo: null,
    featuredImage: '/images/case-studies/jeddah-bistro.jpg',
    challenge: 'Food waste was costing 18% of revenue due to poor inventory forecasting. Fresh ingredients would spoil, while popular items would run out during service, disappointing customers.',
    solution: 'Deployed Supply Chain AI to predict demand, automate ordering, and track inventory in real-time. Integrated with existing POS and supplier systems.',
    implementation: {
      duration: '10 days',
      team: '1 Clowd specialist + 1 head chef + 1 manager',
      challenges: ['Supplier integration', 'Historical data migration', 'Staff adoption'],
      overcome: 'Direct API connections to major suppliers and 3-day training program'
    },
    results: {
      wasteReduction: '-75%',
      costSavings: '84,000 SAR/year',
      stockouts: '-92%',
      orderingTime: '-80%'
    },
    metrics: [
      { label: 'Food Waste', before: '18%', after: '4.5%', change: '-75%' },
      { label: 'Ordering Time', before: '4 hrs/week', after: '45 min/week', change: '-81%' },
      { label: 'Stock Accuracy', before: '72%', after: '98%', change: '+36%' },
      { label: 'Supplier Orders', before: '5/week', after: '2/week', change: '-60%' }
    ],
    testimonial: {
      quote: 'We cut food waste by 75% in the first month. The system paid for itself in 6 weeks from savings alone.',
      author: 'Chef Pierre Dubois',
      title: 'Executive Chef & Co-Owner',
      avatar: null
    },
    products: ['supply-chain-ai'],
    tags: ['Inventory Management', 'Cost Reduction', 'Sustainability'],
    datePublished: '2024-02-01',
    featured: true,
    videoUrl: null
  },

  // Retail & E-commerce
  {
    id: 'jeddah-boutique',
    slug: 'jeddah-fashion-boutique-ai-recommendations',
    customer: 'Jeddah Fashion Boutique',
    industry: 'Retail & E-commerce',
    location: 'Jeddah, Saudi Arabia',
    size: '12 employees, 2,400 online customers',
    logo: null,
    featuredImage: '/images/case-studies/jeddah-boutique.jpg',
    challenge: 'Online cart abandonment rate was 72%, costing hundreds of thousands in lost sales. Product recommendations were generic and irrelevant, leading to low conversion rates.',
    solution: 'Implemented E-commerce Recommender with personalized product suggestions, automated cart recovery emails, and dynamic pricing optimization.',
    implementation: {
      duration: '2 weeks',
      team: '1 Clowd specialist + 1 e-commerce manager',
      challenges: ['Shopify integration', 'Customer data privacy', 'Email deliverability'],
      overcome: 'Custom Shopify app and GDPR-compliant data handling'
    },
    results: {
      conversionRate: '+127%',
      cartAbandonment: '-45%',
      avgOrderValue: '+32%',
      emailRecovery: '23% recovery rate',
      roiAchieved: '2 weeks'
    },
    metrics: [
      { label: 'Conversion Rate', before: '1.2%', after: '2.7%', change: '+125%' },
      { label: 'Cart Abandonment', before: '72%', after: '40%', change: '-44%' },
      { label: 'Avg Order Value', before: '420 SAR', after: '554 SAR', change: '+32%' },
      { label: 'Revenue per Visitor', before: '5.04 SAR', after: '14.96 SAR', change: '+197%' }
    ],
    testimonial: {
      quote: 'Our conversion rate more than doubled in 2 weeks. The AI recommendations feel like having a personal stylist for every customer.',
      author: 'Sarah Al-Mansour',
      title: 'CEO & Founder',
      avatar: null
    },
    products: ['ecommerce-recommender', 'customer-retention-ai'],
    tags: ['E-commerce', 'Personalization', 'Conversion Optimization'],
    datePublished: '2024-01-20',
    featured: true,
    videoUrl: null
  },
  {
    id: 'riyadh-electronics',
    slug: 'riyadh-electronics-smart-inventory',
    customer: 'Riyadh Electronics Hub',
    industry: 'Retail & E-commerce',
    location: 'Riyadh, Saudi Arabia',
    size: '35 employees, 3 retail locations',
    logo: null,
    featuredImage: '/images/case-studies/riyadh-electronics.jpg',
    challenge: 'Managing inventory across 3 stores was chaotic. Popular items would be out of stock in one location while overstocked in another, leading to lost sales and tied-up capital.',
    solution: 'Deployed Smart Inventory system with demand forecasting, automatic stock transfers between locations, and supplier integration for just-in-time ordering.',
    implementation: {
      duration: '3 weeks',
      team: '1 Clowd specialist + 3 store managers',
      challenges: ['Legacy POS integration', 'Multi-location sync', 'Staff training'],
      overcome: 'Custom middleware and location-specific training sessions'
    },
    results: {
      stockAccuracy: '+92%',
      capitalFreed: '480,000 SAR',
      stockouts: '-78%',
      transferEfficiency: '+65%'
    },
    metrics: [
      { label: 'Stock Accuracy', before: '68%', after: '98%', change: '+44%' },
      { label: 'Overstock Items', before: '340', after: '45', change: '-87%' },
      { label: 'Stockout Incidents', before: '89/month', after: '20/month', change: '-78%' },
      { label: 'Inventory Turns', before: '4.2/year', after: '8.7/year', change: '+107%' }
    ],
    testimonial: {
      quote: 'We freed up nearly half a million SAR in working capital. Stock transfers are automatic and accurate.',
      author: 'Omar Al-Rashid',
      title: 'Operations Director',
      avatar: null
    },
    products: ['smart-inventory'],
    tags: ['Inventory Management', 'Multi-Location', 'Retail Operations'],
    datePublished: '2024-02-10',
    featured: false,
    videoUrl: null
  },

  // Finance & Banking
  {
    id: 'saudi-bank',
    slug: 'saudi-finance-fraud-detection',
    customer: 'Saudi Finance Corp',
    industry: 'Finance & Banking',
    location: 'Riyadh, Saudi Arabia',
    size: '450 employees, 50,000 customers',
    logo: null,
    featuredImage: '/images/case-studies/saudi-bank.jpg',
    challenge: 'Fraud was costing millions annually, with manual review processes catching only 60% of fraudulent transactions. False positives were frustrating legitimate customers.',
    solution: 'Implemented AI-powered fraud detection with real-time transaction monitoring, behavioral analysis, and automated risk scoring.',
    implementation: {
      duration: '6 weeks',
      team: '2 Clowd specialists + 4 bank IT staff + compliance team',
      challenges: ['Regulatory compliance', 'Legacy system integration', 'Real-time processing'],
      overcome: 'SAMA-approved architecture and phased rollout with shadow mode testing'
    },
    results: {
      fraudDetection: '+95%',
      falsePositives: '-68%',
      processingTime: '-92%',
      annualSavings: '12.4M SAR'
    },
    metrics: [
      { label: 'Fraud Detection Rate', before: '60%', after: '98%', change: '+63%' },
      { label: 'False Positive Rate', before: '25%', after: '8%', change: '-68%' },
      { label: 'Review Time', before: '2.5 hours', after: '12 minutes', change: '-92%' },
      { label: 'Customer Complaints', before: '340/month', after: '85/month', change: '-75%' }
    ],
    testimonial: {
      quote: 'AI fraud detection saved us over 12 million SAR in the first year while improving customer experience. It\'s a game-changer.',
      author: 'Dr. Khalid Mansour',
      title: 'Chief Technology Officer',
      avatar: null
    },
    products: ['finance-insights-tool', 'predictive-analytics'],
    tags: ['Fraud Detection', 'Financial Services', 'Security'],
    datePublished: '2024-01-25',
    featured: true,
    videoUrl: null
  },

  // Manufacturing
  {
    id: 'riyadh-manufacturing',
    slug: 'riyadh-manufacturing-predictive-maintenance',
    customer: 'Riyadh Manufacturing Ltd',
    industry: 'Manufacturing & Supply Chain',
    location: 'Riyadh Industrial City, Saudi Arabia',
    size: '120 employees, 8 production lines',
    logo: null,
    featuredImage: '/images/case-studies/riyadh-manufacturing.jpg',
    challenge: 'Unplanned equipment downtime was costing 2.1M SAR annually. Reactive maintenance led to production delays, missed deadlines, and frustrated customers.',
    solution: 'Deployed Predictive Maintenance AI with IoT sensor integration, real-time monitoring, and automated maintenance scheduling.',
    implementation: {
      duration: '4 weeks',
      team: '2 Clowd specialists + 2 maintenance engineers + production manager',
      challenges: ['IoT sensor installation', 'Historical data quality', 'Shift worker training'],
      overcome: 'Custom sensor packages and 24/7 support during initial deployment'
    },
    results: {
      downtimeReduction: '-68%',
      maintenanceCosts: '-42%',
      productionEfficiency: '+23%',
      annualSavings: '1.8M SAR'
    },
    metrics: [
      { label: 'Unplanned Downtime', before: '340 hrs/year', after: '110 hrs/year', change: '-68%' },
      { label: 'Maintenance Costs', before: '840K SAR', after: '490K SAR', change: '-42%' },
      { label: 'Production Output', before: '1,240 units/day', after: '1,525 units/day', change: '+23%' },
      { label: 'Equipment Lifespan', before: '8.2 years', after: '11.5 years', change: '+40%' }
    ],
    testimonial: {
      quote: 'We cut downtime by 68% and saved 1.8 million SAR in the first year. Predictive maintenance is now core to our operations.',
      author: 'Eng. Omar Al-Rashid',
      title: 'Operations Director',
      avatar: null
    },
    products: ['predictive-maintenance', 'quality-control-ai'],
    tags: ['Predictive Maintenance', 'Manufacturing', 'IoT'],
    datePublished: '2024-02-05',
    featured: true,
    videoUrl: null
  },

  // Healthcare
  {
    id: 'riyadh-clinic',
    slug: 'riyadh-medical-center-patient-insights',
    customer: 'Riyadh Medical Center',
    industry: 'Healthcare & Medical',
    location: 'Riyadh, Saudi Arabia',
    size: '80 employees, 200 patients/day',
    logo: null,
    featuredImage: '/images/case-studies/riyadh-clinic.jpg',
    challenge: 'Patient no-show rate was 28%, wasting doctor time and slots. Administrative burden consumed 40% of staff time, reducing patient care quality.',
    solution: 'Implemented MedLink Clinic system with automated appointment reminders, patient insights dashboard, and administrative automation.',
    implementation: {
      duration: '3 weeks',
      team: '1 Clowd specialist + clinic administrator + IT support',
      challenges: ['Patient data privacy', 'EMR integration', 'Staff workflow changes'],
      overcome: 'MOH-compliant data handling and gradual workflow integration'
    },
    results: {
      noShowReduction: '-72%',
      adminTimeSaved: '160 hrs/month',
      patientSatisfaction: '+45%',
      revenueIncrease: '+32%'
    },
    metrics: [
      { label: 'No-Show Rate', before: '28%', after: '7.8%', change: '-72%' },
      { label: 'Admin Time', before: '40%', after: '18%', change: '-55%' },
      { label: 'Patients Served', before: '180/day', after: '252/day', change: '+40%' },
      { label: 'Patient Wait Time', before: '42 min', after: '18 min', change: '-57%' }
    ],
    testimonial: {
      quote: 'We now serve 40% more patients daily with better care quality. The AI handles admin work so our staff can focus on patients.',
      author: 'Dr. Fatima Al-Zahrani',
      title: 'Medical Director',
      avatar: null
    },
    products: ['medlink-clinic', 'appointment-ai', 'patient-insights'],
    tags: ['Healthcare', 'Patient Care', 'Administrative Automation'],
    datePublished: '2024-01-30',
    featured: true,
    videoUrl: null
  }
];

export const industries = [
  'All Industries',
  'Restaurants & Cafes',
  'Retail & E-commerce',
  'Finance & Banking',
  'Manufacturing & Supply Chain',
  'Healthcare & Medical'
];

export const resultTypes = [
  'All Results',
  'Revenue Increase',
  'Cost Reduction',
  'Time Savings',
  'Efficiency Improvement'
];

export const getCaseStudiesByIndustry = (industry) => {
  if (industry === 'All Industries') return caseStudies;
  return caseStudies.filter(cs => cs.industry === industry);
};

export const getCaseStudiesByTag = (tag) => {
  return caseStudies.filter(cs => cs.tags.includes(tag));
};

export const getFeaturedCaseStudies = () => {
  return caseStudies.filter(cs => cs.featured);
};

export const getCaseStudyById = (id) => {
  return caseStudies.find(cs => cs.id === id);
};

export const getCaseStudyBySlug = (slug) => {
  return caseStudies.find(cs => cs.slug === slug);
};

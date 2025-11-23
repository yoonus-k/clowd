import { FaPenFancy, FaChartLine, FaEnvelope, FaUsers, FaStar, FaRobot, FaShoppingCart, FaUserShield, FaCalculator, FaFileContract, FaClipboardCheck, FaCalendarAlt, FaConciergeBell, FaHospital, FaBrain, FaTruck } from 'react-icons/fa';

export const saasCategories = [
  {
    id: 'marketing',
    name: 'Marketing & Growth',
    description: 'AI-powered tools to accelerate your marketing efforts and grow your brand',
    icon: FaChartLine,
    color: 'from-purple-500 to-pink-500',
    accentColor: 'purple'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & Retail',
    description: 'Smart solutions to boost sales and retain customers',
    icon: FaShoppingCart,
    color: 'from-blue-500 to-cyan-500',
    accentColor: 'blue'
  },
  {
    id: 'finance',
    name: 'Analytics & Finance',
    description: 'Intelligent insights for better financial decisions',
    icon: FaCalculator,
    color: 'from-green-500 to-emerald-500',
    accentColor: 'green'
  },
  {
    id: 'operations',
    name: 'Operations & Productivity',
    description: 'Streamline workflows and boost team productivity',
    icon: FaClipboardCheck,
    color: 'from-orange-500 to-red-500',
    accentColor: 'orange'
  },
  {
    id: 'industry',
    name: 'Industry Solutions',
    description: 'Specialized AI tools for specific industries',
    icon: FaBrain,
    color: 'from-indigo-500 to-purple-500',
    accentColor: 'indigo'
  }
];

export const saasProducts = [
  // Marketing & Growth
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    category: 'marketing',
    tagline: 'Create engaging content in seconds, not hours',
    shortDescription: 'Generate high-quality text, images, and schedule posts automatically',
    problem: 'Businesses struggle to produce fresh, engaging content consistently across multiple platforms',
    solution: 'Our AI generates professional content (text, visuals, captions) and schedules optimal posting times',
    targetAudience: ['Businesses', 'E-commerce Stores', 'Marketing Agencies', 'Content Creators'],
    icon: FaPenFancy,
    // Enhanced Phase 1 Data
    problems: [
      {
        stat: '15hrs/week',
        title: 'Time Wasted on Content Creation',
        description: 'Marketing teams spend countless hours brainstorming, writing, and designing content manually'
      },
      {
        stat: '60%',
        title: 'Higher Content Costs',
        description: 'Hiring freelancers and designers for each piece of content drains marketing budgets'
      },
      {
        stat: '3x',
        title: 'Inconsistent Posting Schedule',
        description: 'Irregular posting leads to 3x lower engagement and lost audience growth opportunities'
      }
    ],
    integrations: [
      { name: 'Instagram', status: 'live' },
      { name: 'Facebook', status: 'live' },
      { name: 'Twitter/X', status: 'live' },
      { name: 'LinkedIn', status: 'live' },
      { name: 'TikTok', status: 'beta' },
      { name: 'Shopify', status: 'live' },
      { name: 'WordPress', status: 'live' },
      { name: 'Canva', status: 'coming-soon' }
    ],
    installTime: '5 minutes',
    hardwareRequired: false,
    apiDocs: '/docs/api/content-generator',
    techSpecs: {
      languages: ['Arabic', 'English', 'French'],
      deploymentTime: '5 minutes',
      hardware: 'Zero hardware required',
      training: 'Zero training needed - intuitive interface',
      uptime: '99.9% SLA',
      security: ['SSL encryption', 'GDPR compliant', 'Saudi data laws', 'SOC 2 Type II'],
      support: '24/7 WhatsApp, phone & email',
      updates: 'Automatic weekly updates, no downtime'
    },
    roiCalculator: {
      productCost: 799,
      defaultInputs: {
        currentCost: 5000,
        hoursSpent: 15,
        postsPerWeek: 20
      }
    },
    features: [
      {
        title: 'AI Text Generation',
        description: 'Create blog posts, social media captions, ads, and more with advanced AI',
        icon: FaPenFancy
      },
      {
        title: 'Visual Content Creation',
        description: 'Generate images, graphics, and visual assets tailored to your brand',
        icon: FaChartLine
      },
      {
        title: 'Smart Scheduling',
        description: 'Auto-schedule posts at optimal times for maximum engagement',
        icon: FaCalendarAlt
      },
      {
        title: 'Multi-Platform Support',
        description: 'Publish to all major social media platforms from one dashboard',
        icon: FaUsers
      }
    ],
    businessValue: {
      timeSaved: '15 hours per week',
      costReduction: '60% lower content costs',
      efficiency: '10x faster content production',
      roi: '300% ROI in 6 months'
    },
    useCases: [
      {
        title: 'E-commerce Product Descriptions',
        description: 'Generate compelling product descriptions that convert browsers into buyers'
      },
      {
        title: 'Social Media Management',
        description: 'Maintain consistent posting schedule across all platforms automatically'
      },
      {
        title: 'Blog Content at Scale',
        description: 'Produce SEO-optimized blog posts to drive organic traffic'
      }
    ],
    pricing: {
      starter: {
        price: 299,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['50 AI generations/month', '3 social accounts', 'Basic templates', 'Email support'],
        roi: {
          monthlySavings: 1500,
          paybackPeriod: '6 days'
        }
      },
      professional: {
        price: 799,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['500 AI generations/month', '10 social accounts', 'Premium templates', 'Priority support', 'API access', 'Custom branding'],
        roi: {
          monthlySavings: 4500,
          paybackPeriod: '5 days'
        }
      },
      enterprise: {
        price: 'Custom',
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Unlimited generations', 'Unlimited accounts', 'White-label option', 'Dedicated manager', 'Custom integrations', 'SLA guarantee'],
        roi: {
          monthlySavings: '10,000+',
          paybackPeriod: '3 days'
        }
      }
    },
    caseStudies: [
      {
        id: 'riyadh-fashion-boutique',
        customer: 'Riyadh Fashion Boutique',
        industry: 'E-commerce & Retail',
        logo: null,
        challenge: 'Struggled to maintain consistent social media presence across 5 platforms. Spent 20+ hours weekly creating content manually, resulting in inconsistent posting and low engagement.',
        solution: 'Implemented AI Content Generator to automate social posts, product descriptions, and email campaigns. Integrated with Instagram, Facebook, Twitter, and Shopify store.',
        results: {
          timeSaved: '18hrs/week',
          engagementRate: '+127%',
          contentVolume: '10x',
          conversionRate: '+23%'
        },
        quote: 'AI Content Generator transformed our social media strategy. We went from posting 3 times a week to daily content that actually converts. Our engagement doubled in the first month.',
        author: {
          name: 'Sarah Al-Mansour',
          title: 'Marketing Director'
        },
        video: null
      },
      {
        id: 'jeddah-marketing-agency',
        customer: 'Jeddah Marketing Agency',
        industry: 'Marketing & Advertising',
        logo: null,
        challenge: 'Agency managing 15 client accounts struggled with content production bottlenecks. Freelancer costs were eating 40% of project budgets and deadlines were constantly missed.',
        solution: 'Adopted AI Content Generator Professional plan. Created branded templates for each client and automated content workflows. Trained team to use AI for first drafts and polish manually.',
        results: {
          clientCapacity: '+60%',
          productionCosts: '-45%',
          turnaroundTime: '-3 days',
          clientSatisfaction: '4.9/5'
        },
        quote: 'This tool paid for itself in 4 days. We can now serve 24 clients with the same team size. Our profit margins increased by 35% while delivering better quality content faster.',
        author: {
          name: 'Omar Khalil',
          title: 'Agency CEO'
        },
        video: null
      }
    ]
  },
  {
    id: 'social-trend-tracker',
    name: 'Social Trend Tracker',
    category: 'marketing',
    tagline: 'Never miss a viral moment',
    shortDescription: 'Track trends in real-time and get instant content suggestions',
    problem: 'Brands miss viral opportunities because they can\'t track trends fast enough',
    solution: 'Real-time trend analysis with instant alerts and AI-generated content suggestions',
    targetAudience: ['Marketing Agencies', 'Influencers', 'Brand Managers', 'Content Creators'],
    icon: FaChartLine,
    problems: [
      {
        stat: '20hrs/week',
        title: 'Time Lost on Manual Research',
        description: 'Marketing teams waste hours scrolling through platforms trying to spot trends manually'
      },
      {
        stat: '48hrs',
        title: 'Late to Viral Moments',
        description: 'By the time you spot a trend, competitors have already capitalized on it'
      },
      {
        stat: '70%',
        title: 'Missed Engagement Opportunities',
        description: 'Without real-time alerts, brands miss 70% of trending moments relevant to their audience'
      }
    ],
    integrations: [
      { name: 'Twitter/X', status: 'live' },
      { name: 'Instagram', status: 'live' },
      { name: 'TikTok', status: 'live' },
      { name: 'LinkedIn', status: 'live' },
      { name: 'YouTube', status: 'beta' },
      { name: 'Reddit', status: 'live' },
      { name: 'Google Trends', status: 'live' },
      { name: 'Slack', status: 'coming-soon' }
    ],
    installTime: '3 minutes',
    hardwareRequired: false,
    apiDocs: '/docs/api/trend-tracker',
    techSpecs: {
      languages: ['Arabic', 'English', 'French', 'Spanish'],
      deploymentTime: '3 minutes',
      hardware: 'Zero hardware required',
      training: 'Zero training needed - instant setup',
      uptime: '99.9% SLA',
      security: ['SSL encryption', 'GDPR compliant', 'Saudi data laws', 'SOC 2 Type II'],
      support: '24/7 WhatsApp, phone & email',
      updates: 'Real-time trend updates, automatic platform updates'
    },
    roiCalculator: {
      productCost: 199,
      defaultInputs: {
        currentCost: 3000,
        hoursSpent: 20,
        campaignsPerMonth: 10
      }
    },
    features: [
      {
        title: 'Real-Time Trend Analysis',
        description: 'Monitor trending topics across all major social platforms',
        icon: FaChartLine
      },
      {
        title: 'Instant Alerts',
        description: 'Get notified immediately when relevant trends emerge',
        icon: FaStar
      },
      {
        title: 'Content Suggestions',
        description: 'AI generates trend-based content ideas tailored to your brand',
        icon: FaPenFancy
      },
      {
        title: 'Competitor Tracking',
        description: 'See what\'s working for your competitors in real-time',
        icon: FaUsers
      }
    ],
    businessValue: {
      timeSaved: '20 hours per week on research',
      costReduction: '50% faster campaign launch',
      efficiency: 'Catch trends 3x faster',
      roi: '250% increase in engagement'
    },
    useCases: [
      {
        title: 'Viral Campaign Creation',
        description: 'Launch trend-based campaigns while the topic is still hot'
      },
      {
        title: 'Influencer Collaboration',
        description: 'Identify trending collaborations and partnerships'
      },
      {
        title: 'Crisis Management',
        description: 'Monitor brand mentions and respond to issues immediately'
      }
    ],
    pricing: {
      starter: {
        price: 79,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['5 keyword tracking', 'Daily reports', 'Basic alerts', 'Email support'],
        roi: {
          monthlySavings: 800,
          paybackPeriod: '3 days'
        }
      },
      professional: {
        price: 199,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['50 keyword tracking', 'Real-time alerts', 'Content suggestions', 'Priority support', 'Competitor analysis'],
        roi: {
          monthlySavings: 2500,
          paybackPeriod: '2 days'
        }
      },
      enterprise: {
        price: 'Custom',
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Unlimited tracking', 'Custom alerts', 'Dedicated analyst', 'API access', 'White-label reports'],
        roi: {
          monthlySavings: '8,000+',
          paybackPeriod: '1 day'
        }
      }
    }
  },
  {
    id: 'smart-email-campaigns',
    name: 'Smart Email Campaigns',
    category: 'marketing',
    tagline: 'Emails that convert, powered by AI',
    shortDescription: 'Generate personalized emails and send at optimal times',
    problem: 'Email campaigns have low open rates and poor engagement',
    solution: 'AI-generated personalized emails with optimal send-time predictions',
    targetAudience: ['Businesses', 'E-commerce Stores', 'SaaS Companies', 'Marketing Teams'],
    icon: FaEnvelope,
    problems: [
      {
        stat: '12hrs/week',
        title: 'Time Wasted Writing Emails',
        description: 'Marketing teams spend hours crafting email copy that often gets ignored'
      },
      {
        stat: '15%',
        title: 'Low Open Rates',
        description: 'Poor timing and generic content result in emails that never get opened'
      },
      {
        stat: '2%',
        title: 'Minimal Conversions',
        description: 'Un-personalized emails fail to drive action, wasting advertising budgets'
      }
    ],
    integrations: [
      { name: 'Gmail', status: 'live' },
      { name: 'Outlook', status: 'live' },
      { name: 'Mailchimp', status: 'live' },
      { name: 'Shopify', status: 'live' },
      { name: 'WooCommerce', status: 'live' },
      { name: 'HubSpot', status: 'beta' },
      { name: 'Salesforce', status: 'live' },
      { name: 'Zapier', status: 'coming-soon' }
    ],
    installTime: '10 minutes',
    hardwareRequired: false,
    apiDocs: '/docs/api/email-campaigns',
    techSpecs: {
      languages: ['Arabic', 'English', 'French'],
      deploymentTime: '10 minutes',
      hardware: 'Zero hardware required',
      training: 'Zero training needed',
      uptime: '99.9% SLA',
      security: ['SSL encryption', 'GDPR compliant', 'CAN-SPAM compliant', 'SOC 2 Type II'],
      support: '24/7 WhatsApp, phone & email',
      updates: 'Automatic weekly updates'
    },
    roiCalculator: {
      productCost: 179,
      defaultInputs: {
        currentCost: 2500,
        contacts: 5000,
        emailsPerMonth: 50000
      }
    },
    features: [
      {
        title: 'AI Email Generation',
        description: 'Create compelling email copy that resonates with your audience',
        icon: FaEnvelope
      },
      {
        title: 'Send-Time Optimization',
        description: 'AI predicts the best time to reach each subscriber',
        icon: FaCalendarAlt
      },
      {
        title: 'Personalization Engine',
        description: 'Dynamic content based on user behavior and preferences',
        icon: FaUsers
      },
      {
        title: 'A/B Testing',
        description: 'Automatically test and optimize email variations',
        icon: FaChartLine
      }
    ],
    businessValue: {
      timeSaved: '12 hours per week',
      costReduction: '40% lower acquisition cost',
      efficiency: '2x higher open rates',
      roi: '180% increase in conversions'
    },
    useCases: [
      {
        title: 'Welcome Series',
        description: 'Onboard new subscribers with personalized welcome sequences'
      },
      {
        title: 'Cart Abandonment',
        description: 'Recover lost sales with timely, personalized reminders'
      },
      {
        title: 'Re-engagement Campaigns',
        description: 'Win back inactive customers with targeted offers'
      }
    ],
    pricing: {
      starter: {
        price: 59,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['1,000 contacts', '10,000 emails/month', 'Basic templates', 'Email support'],
        roi: {
          monthlySavings: 600,
          paybackPeriod: '3 days'
        }
      },
      professional: {
        price: 179,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['10,000 contacts', '100,000 emails/month', 'AI personalization', 'Priority support', 'Advanced analytics'],
        roi: {
          monthlySavings: 2000,
          paybackPeriod: '2 days'
        }
      },
      enterprise: {
        price: 'Custom',
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Unlimited contacts', 'Unlimited emails', 'Dedicated IP', 'Custom integrations', 'Dedicated manager'],
        roi: {
          monthlySavings: '7,000+',
          paybackPeriod: '1 day'
        }
      }
    }
  },
  {
    id: 'influencer-matching',
    name: 'Influencer Matching Tool',
    category: 'marketing',
    tagline: 'Find the perfect influencer for your brand',
    shortDescription: 'AI-powered influencer discovery and analysis',
    problem: 'Brands struggle to find authentic influencers with the right audience',
    solution: 'Analyze audience demographics and engagement to recommend perfect matches',
    targetAudience: ['Marketing Agencies', 'Brands', 'E-commerce Businesses', 'PR Teams'],
    icon: FaUsers,
    problems: [
      {
        stat: '25hrs/campaign',
        title: 'Time Wasted Finding Influencers',
        description: 'Marketing teams manually research hundreds of profiles to find the right fit'
      },
      {
        stat: '40%',
        title: 'Wrong Influencer Matches',
        description: 'Poor audience alignment leads to wasted budgets and failed campaigns'
      },
      {
        stat: '50%',
        title: 'Fake Followers Problem',
        description: 'Brands lose money partnering with influencers who have purchased fake engagement'
      }
    ],
    integrations: [
      { name: 'Instagram', status: 'live' },
      { name: 'TikTok', status: 'live' },
      { name: 'YouTube', status: 'live' },
      { name: 'Twitter/X', status: 'live' },
      { name: 'LinkedIn', status: 'beta' },
      { name: 'HubSpot', status: 'live' },
      { name: 'Google Sheets', status: 'live' },
      { name: 'Salesforce', status: 'coming-soon' }
    ],
    installTime: '5 minutes',
    hardwareRequired: false,
    apiDocs: '/docs/api/influencer-matching',
    techSpecs: {
      languages: ['Arabic', 'English', 'French', 'Spanish'],
      deploymentTime: '5 minutes',
      hardware: 'Zero hardware required',
      training: 'Zero training needed',
      uptime: '99.9% SLA',
      security: ['SSL encryption', 'GDPR compliant', 'Saudi data laws', 'SOC 2 Type II'],
      support: '24/7 WhatsApp, phone & email',
      updates: 'Daily database updates, weekly feature releases'
    },
    roiCalculator: {
      productCost: 299,
      defaultInputs: {
        currentCost: 8000,
        campaignsPerMonth: 3,
        hoursSpent: 25
      }
    },
    features: [
      {
        title: 'Smart Matching Algorithm',
        description: 'Find influencers whose audience matches your target market',
        icon: FaBrain
      },
      {
        title: 'Audience Analysis',
        description: 'Deep insights into influencer audience demographics and behavior',
        icon: FaChartLine
      },
      {
        title: 'Engagement Scoring',
        description: 'Identify authentic engagement vs fake followers',
        icon: FaStar
      },
      {
        title: 'Campaign Management',
        description: 'Manage relationships and track campaign performance',
        icon: FaClipboardCheck
      }
    ],
    businessValue: {
      timeSaved: '25 hours per campaign',
      costReduction: '50% better ROI',
      efficiency: 'Find matches 10x faster',
      roi: '400% campaign ROI'
    },
    useCases: [
      {
        title: 'Product Launches',
        description: 'Find influencers to amplify your product launch'
      },
      {
        title: 'Brand Awareness',
        description: 'Build brand visibility with authentic partnerships'
      },
      {
        title: 'Niche Marketing',
        description: 'Reach specific demographics through micro-influencers'
      }
    ],
    pricing: {
      starter: {
        price: 99,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['100 searches/month', 'Basic analytics', '3 user seats', 'Email support'],
        roi: {
          monthlySavings: 1200,
          paybackPeriod: '2 days'
        }
      },
      professional: {
        price: 299,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Unlimited searches', 'Advanced analytics', '10 user seats', 'Campaign management', 'Priority support'],
        roi: {
          monthlySavings: 4000,
          paybackPeriod: '2 days'
        }
      },
      enterprise: {
        price: 'Custom',
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Custom database', 'White-label reports', 'Dedicated account manager', 'API access', 'Contract management'],
        roi: {
          monthlySavings: '12,000+',
          paybackPeriod: '1 day'
        }
      }
    }
  },
  {
    id: 'review-management',
    name: 'Review Management SaaS',
    category: 'marketing',
    tagline: 'Turn reviews into your competitive advantage',
    shortDescription: 'Collect, analyze, and respond to customer reviews intelligently',
    problem: 'Businesses struggle to manage reviews across multiple platforms',
    solution: 'Centralized review management with AI-powered response suggestions',
    targetAudience: ['Restaurants', 'Retail Stores', 'Service Businesses', 'E-commerce'],
    icon: FaStar,
    problems: [
      {
        stat: '10hrs/week',
        title: 'Time Wasted Checking Multiple Platforms',
        description: 'Business owners manually check Google, Yelp, Facebook and more to monitor reviews'
      },
      {
        stat: '65%',
        title: 'Negative Reviews Go Unanswered',
        description: 'Missed review notifications lead to angry customers and damaged reputation'
      },
      {
        stat: '3.5x',
        title: 'Lost Customers from Bad Reviews',
        description: 'Unmanaged negative reviews cost 3.5x more customers than poor service itself'
      }
    ],
    integrations: [
      { name: 'Google Business', status: 'live' },
      { name: 'Yelp', status: 'live' },
      { name: 'Facebook', status: 'live' },
      { name: 'TripAdvisor', status: 'live' },
      { name: 'Trustpilot', status: 'beta' },
      { name: 'Amazon', status: 'live' },
      { name: 'Zomato', status: 'live' },
      { name: 'Instagram', status: 'coming-soon' }
    ],
    installTime: '8 minutes',
    hardwareRequired: false,
    apiDocs: '/docs/api/review-management',
    techSpecs: {
      languages: ['Arabic', 'English', 'French'],
      deploymentTime: '8 minutes',
      hardware: 'Zero hardware required',
      training: 'Zero training needed',
      uptime: '99.9% SLA',
      security: ['SSL encryption', 'GDPR compliant', 'Saudi data laws', 'SOC 2 Type II'],
      support: '24/7 WhatsApp, phone & email',
      updates: 'Real-time review monitoring, weekly AI improvements'
    },
    roiCalculator: {
      productCost: 129,
      defaultInputs: {
        currentCost: 1500,
        locations: 5,
        reviewsPerMonth: 100
      }
    },
    features: [
      {
        title: 'Multi-Platform Monitoring',
        description: 'Track reviews from Google, Yelp, Facebook, and more',
        icon: FaStar
      },
      {
        title: 'Sentiment Analysis',
        description: 'AI analyzes review sentiment and identifies trends',
        icon: FaBrain
      },
      {
        title: 'Smart Responses',
        description: 'AI suggests professional responses to reviews',
        icon: FaRobot
      },
      {
        title: 'Review Requests',
        description: 'Automate review requests to happy customers',
        icon: FaEnvelope
      }
    ],
    businessValue: {
      timeSaved: '10 hours per week',
      costReduction: '30% increase in positive reviews',
      efficiency: 'Respond 5x faster',
      roi: '150% boost in online reputation'
    },
    useCases: [
      {
        title: 'Reputation Recovery',
        description: 'Address negative reviews professionally and improve ratings'
      },
      {
        title: 'Competitive Intelligence',
        description: 'Compare your reviews with competitors'
      },
      {
        title: 'Customer Insights',
        description: 'Extract actionable insights from customer feedback'
      }
    ],
    pricing: {
      starter: {
        price: 49,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['3 locations', '50 reviews/month', 'Basic analytics', 'Email support'],
        roi: {
          monthlySavings: 500,
          paybackPeriod: '3 days'
        }
      },
      professional: {
        price: 129,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['10 locations', 'Unlimited reviews', 'AI responses', 'Priority support', 'Sentiment analysis'],
        roi: {
          monthlySavings: 1500,
          paybackPeriod: '2 days'
        }
      },
      enterprise: {
        price: 'Custom',
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Unlimited locations', 'White-label', 'Custom integrations', 'Dedicated manager', 'Advanced reporting'],
        roi: {
          monthlySavings: '5,000+',
          paybackPeriod: '1 day'
        }
      }
    }
  },

  // E-commerce & Retail
  {
    id: 'ecommerce-recommender',
    name: 'E-commerce Recommender',
    category: 'ecommerce',
    tagline: 'Personalized shopping experiences that convert',
    shortDescription: 'AI-powered product recommendations to boost sales',
    problem: 'Customers get overwhelmed by too many choices and leave without buying',
    solution: 'Smart AI recommendations based on browsing behavior and purchase history',
    targetAudience: ['E-commerce Stores', 'Online Retailers', 'Marketplaces', 'Fashion Brands'],
    icon: FaShoppingCart,
    problems: [
      {
        stat: '70%',
        title: 'Cart Abandonment Rate',
        description: 'Customers leave without buying because they can\'t find the right products'
      },
      {
        stat: '35%',
        title: 'Lower Conversion Rates',
        description: 'Generic product displays fail to capture individual customer preferences'
      },
      {
        stat: '40%',
        title: 'Lost Revenue per Customer',
        description: 'Without personalization, stores miss cross-sell and upsell opportunities'
      }
    ],
    integrations: [
      { name: 'Shopify', status: 'live' },
      { name: 'WooCommerce', status: 'live' },
      { name: 'Magento', status: 'live' },
      { name: 'BigCommerce', status: 'live' },
      { name: 'PrestaShop', status: 'beta' },
      { name: 'Wix', status: 'live' },
      { name: 'Salesforce Commerce', status: 'live' },
      { name: 'Custom API', status: 'coming-soon' }
    ],
    installTime: '15 minutes',
    hardwareRequired: false,
    apiDocs: '/docs/api/ecommerce-recommender',
    techSpecs: {
      languages: ['Arabic', 'English', 'French'],
      deploymentTime: '15 minutes plugin install',
      hardware: 'Zero hardware required',
      training: 'Auto-learns from your data',
      uptime: '99.9% SLA',
      security: ['SSL encryption', 'PCI DSS compliant', 'GDPR compliant', 'SOC 2 Type II'],
      support: '24/7 WhatsApp, phone & email',
      updates: 'Real-time ML model updates'
    },
    roiCalculator: {
      productCost: 199,
      defaultInputs: {
        currentRevenue: 50000,
        ordersPerMonth: 1000,
        avgOrderValue: 150
      }
    },
    features: [
      {
        title: 'Behavioral Analysis',
        description: 'Track and analyze customer browsing patterns in real-time',
        icon: FaBrain
      },
      {
        title: 'Smart Recommendations',
        description: 'Show the right products at the right time',
        icon: FaShoppingCart
      },
      {
        title: 'Cross-Sell Engine',
        description: 'Increase average order value with intelligent bundling',
        icon: FaChartLine
      },
      {
        title: 'Email Personalization',
        description: 'Send personalized product recommendations via email',
        icon: FaEnvelope
      }
    ],
    businessValue: {
      timeSaved: 'Automated recommendations',
      costReduction: '35% higher conversion rate',
      efficiency: '25% increase in AOV',
      roi: '280% revenue increase'
    },
    useCases: [
      {
        title: 'Homepage Personalization',
        description: 'Show different products to different customers'
      },
      {
        title: 'Cart Upsells',
        description: 'Suggest complementary products at checkout'
      },
      {
        title: 'Post-Purchase',
        description: 'Recommend related products after purchase'
      }
    ],
    pricing: {
      starter: {
        price: 79,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Up to 1,000 orders/month', 'Basic recommendations', 'Email support', 'Shopify/WooCommerce integration'],
        roi: {
          monthlySavings: 1000,
          paybackPeriod: '2 days'
        }
      },
      professional: {
        price: 199,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Up to 10,000 orders/month', 'Advanced AI', 'A/B testing', 'Priority support', 'Custom integrations'],
        roi: {
          monthlySavings: 3500,
          paybackPeriod: '1 day'
        }
      },
      enterprise: {
        price: 'Custom',
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Unlimited orders', 'Custom ML models', 'Dedicated data scientist', 'API access', 'White-label'],
        roi: {
          monthlySavings: '15,000+',
          paybackPeriod: '1 day'
        }
      }
    }
  },
  {
    id: 'customer-retention-ai',
    name: 'Customer Retention AI',
    category: 'ecommerce',
    tagline: 'Keep your customers before they leave',
    shortDescription: 'Predict and prevent customer churn with AI',
    problem: 'Subscription businesses lose customers without knowing why',
    solution: 'AI predicts which customers are at risk and suggests retention strategies',
    targetAudience: ['SaaS Companies', 'Subscription Services', 'Membership Sites', 'E-commerce'],
    icon: FaUserShield,
    problems: [
      {
        stat: '45%',
        title: 'Customer Churn Rate',
        description: 'Businesses lose nearly half their customers without knowing why or when they\'ll leave'
      },
      {
        stat: '5x',
        title: 'Cost of New vs Retained Customers',
        description: 'Acquiring new customers costs 5x more than retaining existing ones'
      },
      {
        stat: '15hrs/week',
        title: 'Manual Customer Monitoring',
        description: 'Teams waste hours manually tracking engagement scores and usage patterns'
      }
    ],
    integrations: [
      { name: 'Stripe', status: 'live' },
      { name: 'Chargebee', status: 'live' },
      { name: 'Recurly', status: 'beta' },
      { name: 'HubSpot', status: 'live' },
      { name: 'Salesforce', status: 'live' },
      { name: 'Intercom', status: 'live' },
      { name: 'Mailchimp', status: 'live' },
      { name: 'Zendesk', status: 'coming-soon' }
    ],
    installTime: '10 minutes',
    hardwareRequired: false,
    apiDocs: '/docs/api/customer-retention',
    techSpecs: {
      languages: ['Arabic', 'English', 'French'],
      deploymentTime: '10 minutes',
      hardware: 'Zero hardware required',
      training: 'AI learns from your customer data',
      uptime: '99.9% SLA',
      security: ['SSL encryption', 'GDPR compliant', 'PCI DSS compliant', 'SOC 2 Type II'],
      support: '24/7 WhatsApp, phone & email',
      updates: 'Daily churn predictions, weekly model improvements'
    },
    roiCalculator: {
      productCost: 249,
      defaultInputs: {
        customerCount: 3000,
        churnRate: 45,
        avgLTV: 2000
      }
    },
    features: [
      {
        title: 'Churn Prediction',
        description: 'Identify at-risk customers before they cancel',
        icon: FaBrain
      },
      {
        title: 'Automated Interventions',
        description: 'Trigger personalized retention campaigns automatically',
        icon: FaRobot
      },
      {
        title: 'Health Scoring',
        description: 'Monitor customer engagement and satisfaction scores',
        icon: FaChartLine
      },
      {
        title: 'Win-Back Campaigns',
        description: 'Re-engage churned customers with targeted offers',
        icon: FaEnvelope
      }
    ],
    businessValue: {
      timeSaved: '15 hours per week',
      costReduction: '45% reduction in churn',
      efficiency: 'Save 3x more customers',
      roi: '350% LTV increase'
    },
    useCases: [
      {
        title: 'Subscription Services',
        description: 'Reduce monthly churn and increase LTV'
      },
      {
        title: 'SaaS Products',
        description: 'Identify and save at-risk accounts'
      },
      {
        title: 'Membership Programs',
        description: 'Keep members engaged and renewing'
      }
    ],
    pricing: {
      starter: {
        price: 99,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Up to 500 customers', 'Basic churn prediction', 'Email alerts', 'Email support'],
        roi: {
          monthlySavings: 1500,
          paybackPeriod: '2 days'
        }
      },
      professional: {
        price: 249,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Up to 5,000 customers', 'Advanced AI models', 'Automated campaigns', 'Priority support', 'Integrations'],
        roi: {
          monthlySavings: 5000,
          paybackPeriod: '1 day'
        }
      },
      enterprise: {
        price: 'Custom',
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Unlimited customers', 'Custom models', 'Dedicated CSM', 'API access', 'White-label'],
        roi: {
          monthlySavings: '20,000+',
          paybackPeriod: '1 day'
        }
      }
    }
  },

  // Analytics & Finance
  {
    id: 'finance-insights',
    name: 'Finance Insights Tool',
    category: 'finance',
    tagline: 'Financial intelligence for smarter decisions',
    shortDescription: 'Transform financial data into actionable insights',
    problem: 'Small businesses struggle to understand their financial data',
    solution: 'AI-powered reports and alerts that highlight what matters most',
    targetAudience: ['Small Businesses', 'Startups', 'Accountants', 'Finance Teams'],
    icon: FaCalculator,
    problems: [
      {
        stat: '20hrs/month',
        title: 'Time Wasted on Manual Reports',
        description: 'Small businesses spend hours creating financial reports and still miss important insights'
      },
      {
        stat: '25%',
        title: 'Unnecessary Expenses',
        description: 'Without real-time alerts, businesses continue wasteful spending patterns'
      },
      {
        stat: '60%',
        title: 'Poor Cash Flow Visibility',
        description: 'Businesses fail due to cash flow problems they could have predicted'
      }
    ],
    integrations: [
      { name: 'QuickBooks', status: 'live' },
      { name: 'Xero', status: 'live' },
      { name: 'FreshBooks', status: 'live' },
      { name: 'Wave', status: 'beta' },
      { name: 'Zoho Books', status: 'live' },
      { name: 'Sage', status: 'live' },
      { name: 'Excel', status: 'live' },
      { name: 'Google Sheets', status: 'coming-soon' }
    ],
    installTime: '15 minutes',
    hardwareRequired: false,
    apiDocs: '/docs/api/finance-insights',
    techSpecs: {
      languages: ['Arabic', 'English', 'French'],
      deploymentTime: '15 minutes',
      hardware: 'Zero hardware required',
      training: 'Zero training needed',
      uptime: '99.9% SLA',
      security: ['Bank-level encryption', 'GDPR compliant', 'SOC 2 Type II', 'ISO 27001'],
      support: '24/7 WhatsApp, phone & email',
      updates: 'Daily data sync, weekly AI improvements'
    },
    roiCalculator: {
      productCost: 179,
      defaultInputs: {
        monthlyExpenses: 50000,
        hoursOnReports: 20,
        businessCount: 1
      }
    },
    features: [
      {
        title: 'Smart Reports',
        description: 'Auto-generated financial reports with AI insights',
        icon: FaFileContract
      },
      {
        title: 'Expense Alerts',
        description: 'Get notified about unusual spending patterns',
        icon: FaStar
      },
      {
        title: 'Cash Flow Forecasting',
        description: 'Predict future cash flow with high accuracy',
        icon: FaChartLine
      },
      {
        title: 'Tax Optimization',
        description: 'Identify tax-saving opportunities automatically',
        icon: FaCalculator
      }
    ],
    businessValue: {
      timeSaved: '20 hours per month',
      costReduction: '25% reduction in expenses',
      efficiency: 'Real-time visibility',
      roi: '200% better financial decisions'
    },
    useCases: [
      {
        title: 'Budget Management',
        description: 'Track and optimize departmental budgets'
      },
      {
        title: 'Expense Control',
        description: 'Identify and eliminate wasteful spending'
      },
      {
        title: 'Financial Planning',
        description: 'Make data-driven financial decisions'
      }
    ],
    pricing: {
      starter: {
        price: 69,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['1 business', 'Basic reports', 'Monthly insights', 'Email support'],
        roi: {
          monthlySavings: 800,
          paybackPeriod: '2 days'
        }
      },
      professional: {
        price: 179,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['3 businesses', 'Advanced AI', 'Real-time alerts', 'Priority support', 'Integrations'],
        roi: {
          monthlySavings: 2500,
          paybackPeriod: '2 days'
        }
      },
      enterprise: {
        price: 'Custom',
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Unlimited businesses', 'Custom reports', 'Dedicated accountant', 'API access', 'White-label'],
        roi: {
          monthlySavings: '10,000+',
          paybackPeriod: '1 day'
        }
      }
    }
  },
  {
    id: 'insightedge',
    name: 'InsightEdge – Predictive Analytics',
    category: 'finance',
    tagline: 'See the future of your business',
    shortDescription: 'AI-powered predictive analytics for proactive decision making',
    problem: 'Businesses lack visibility into future market changes and performance',
    solution: 'Analyze historical data to predict sales, detect risks, and provide actionable recommendations',
    targetAudience: ['Large Enterprises', 'Mid-Size Companies', 'Finance Teams', 'C-Suite Executives'],
    icon: FaBrain,
    problems: [
      {
        stat: '30hrs/month',
        title: 'Time Spent on Analysis',
        description: 'Finance teams waste hours creating forecasts that are often inaccurate'
      },
      {
        stat: '40%',
        title: 'Slower Decision Making',
        description: 'Without predictive insights, executives make reactive rather than proactive decisions'
      },
      {
        stat: '95%',
        title: 'Missed Market Opportunities',
        description: 'Businesses miss revenue opportunities because they can\'t predict market changes'
      }
    ],
    integrations: [
      { name: 'Salesforce', status: 'live' },
      { name: 'SAP', status: 'live' },
      { name: 'Oracle', status: 'live' },
      { name: 'Microsoft Dynamics', status: 'live' },
      { name: 'NetSuite', status: 'beta' },
      { name: 'Power BI', status: 'live' },
      { name: 'Tableau', status: 'live' },
      { name: 'SQL Database', status: 'coming-soon' }
    ],
    installTime: '30 minutes',
    hardwareRequired: false,
    apiDocs: '/docs/api/insightedge',
    techSpecs: {
      languages: ['Arabic', 'English', 'French'],
      deploymentTime: '30 minutes with data scientist',
      hardware: 'Zero hardware required - cloud-based',
      training: 'Custom training for your team included',
      uptime: '99.99% SLA',
      security: ['Enterprise-grade encryption', 'GDPR compliant', 'SOC 2 Type II', 'ISO 27001'],
      support: '24/7 dedicated support team',
      updates: 'Real-time data processing, monthly model updates'
    },
    roiCalculator: {
      productCost: 699,
      defaultInputs: {
        annualRevenue: 10000000,
        forecastingHours: 30,
        decisionSpeed: 40
      }
    },
    features: [
      {
        title: 'Sales Forecasting',
        description: 'Predict future revenue with 95% accuracy',
        icon: FaChartLine
      },
      {
        title: 'Risk Detection',
        description: 'Identify potential risks before they impact business',
        icon: FaStar
      },
      {
        title: 'Smart Dashboards',
        description: 'Interactive dashboards with real-time insights',
        icon: FaClipboardCheck
      },
      {
        title: 'Operational Recommendations',
        description: 'AI suggests actions to improve performance',
        icon: FaBrain
      }
    ],
    businessValue: {
      timeSaved: '30 hours per month on analysis',
      costReduction: '40% faster decision making',
      efficiency: '95% forecast accuracy',
      roi: '500% strategic advantage'
    },
    useCases: [
      {
        title: 'Revenue Planning',
        description: 'Forecast revenue and plan resources accordingly'
      },
      {
        title: 'Risk Management',
        description: 'Detect financial and operational risks early'
      },
      {
        title: 'Market Analysis',
        description: 'Understand market trends and competitor moves'
      }
    ],
    pricing: {
      starter: {
        price: 299,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Basic forecasting', '5 users', 'Standard reports', 'Email support'],
        roi: {
          monthlySavings: 3000,
          paybackPeriod: '3 days'
        }
      },
      professional: {
        price: 699,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Advanced AI', '20 users', 'Custom dashboards', 'Priority support', 'API access'],
        roi: {
          monthlySavings: 8000,
          paybackPeriod: '2 days'
        }
      },
      enterprise: {
        price: 'Custom',
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Custom ML models', 'Unlimited users', 'Dedicated data scientist', 'White-label', 'SLA'],
        roi: {
          monthlySavings: '25,000+',
          paybackPeriod: '1 day'
        }
      }
    }
  },
  {
    id: 'project-cost-estimator',
    name: 'Project Cost Estimator',
    category: 'finance',
    tagline: 'Accurate project estimates in minutes',
    shortDescription: 'AI-powered cost estimation for construction and engineering',
    problem: 'Project cost estimation is slow and often inaccurate',
    solution: 'Instant AI-powered cost estimates based on historical data and market rates',
    targetAudience: ['Engineering Firms', 'Contractors', 'Construction Companies', 'Architects'],
    icon: FaCalculator,
    problems: [
      {
        stat: '15hrs/estimate',
        title: 'Time Wasted on Manual Estimates',
        description: 'Engineers spend hours manually calculating costs for each project bid'
      },
      {
        stat: '20%',
        title: 'Inaccurate Bids',
        description: 'Manual estimates lead to underpricing (losing money) or overpricing (losing bids)'
      },
      {
        stat: '60%',
        title: 'Lost Competitive Bids',
        description: 'Slow estimation process means missing bid deadlines and losing projects'
      }
    ],
    integrations: [
      { name: 'Procore', status: 'live' },
      { name: 'PlanSwift', status: 'live' },
      { name: 'AutoCAD', status: 'beta' },
      { name: 'Bluebeam', status: 'live' },
      { name: 'Excel', status: 'live' },
      { name: 'QuickBooks', status: 'live' },
      { name: 'Sage', status: 'live' },
      { name: 'SAP', status: 'coming-soon' }
    ],
    installTime: '20 minutes',
    hardwareRequired: false,
    apiDocs: '/docs/api/cost-estimator',
    techSpecs: {
      languages: ['Arabic', 'English', 'French'],
      deploymentTime: '20 minutes',
      hardware: 'Zero hardware required',
      training: 'Industry-specific training included',
      uptime: '99.9% SLA',
      security: ['SSL encryption', 'GDPR compliant', 'SOC 2 Type II', 'ISO 27001'],
      support: '24/7 WhatsApp, phone & email',
      updates: 'Daily material price updates, weekly feature releases'
    },
    roiCalculator: {
      productCost: 299,
      defaultInputs: {
        estimatesPerMonth: 20,
        hoursPerEstimate: 15,
        bidWinRate: 30
      }
    },
    features: [
      {
        title: 'Instant Estimates',
        description: 'Generate detailed cost breakdowns in minutes',
        icon: FaCalculator
      },
      {
        title: 'Historical Data Analysis',
        description: 'Learn from past projects to improve accuracy',
        icon: FaChartLine
      },
      {
        title: 'Market Price Updates',
        description: 'Real-time material and labor cost updates',
        icon: FaStar
      },
      {
        title: 'Proposal Generation',
        description: 'Create professional proposals automatically',
        icon: FaFileContract
      }
    ],
    businessValue: {
      timeSaved: '15 hours per estimate',
      costReduction: '20% more accurate bids',
      efficiency: '10x faster estimates',
      roi: '250% win more projects'
    },
    useCases: [
      {
        title: 'Bid Preparation',
        description: 'Prepare competitive bids quickly and accurately'
      },
      {
        title: 'Budget Planning',
        description: 'Help clients understand project costs upfront'
      },
      {
        title: 'Cost Comparison',
        description: 'Compare different approaches and materials'
      }
    ],
    pricing: {
      starter: {
        price: 129,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['20 estimates/month', 'Basic templates', 'Standard materials DB', 'Email support'],
        roi: {
          monthlySavings: 1500,
          paybackPeriod: '2 days'
        }
      },
      professional: {
        price: 299,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Unlimited estimates', 'Custom templates', 'Full materials DB', 'Priority support', 'Proposal generator'],
        roi: {
          monthlySavings: 4000,
          paybackPeriod: '2 days'
        }
      },
      enterprise: {
        price: 'Custom',
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Multi-user', 'Custom database', 'API access', 'White-label', 'Dedicated support'],
        roi: {
          monthlySavings: '15,000+',
          paybackPeriod: '1 day'
        }
      }
    }
  },

  // Operations & Productivity
  {
    id: 'meeting-summarizer',
    name: 'Meeting Summarizer',
    category: 'operations',
    tagline: 'Never take meeting notes again',
    shortDescription: 'AI transcribes, summarizes, and extracts action items from meetings',
    problem: 'Teams waste time in meetings and lose important information',
    solution: 'Automatic transcription, intelligent summaries, and action item extraction',
    targetAudience: ['Corporate Teams', 'Remote Teams', 'Consultants', 'Startups'],
    icon: FaClipboardCheck,
    problems: [
      {
        stat: '5hrs/week',
        title: 'Time Wasted Taking Notes',
        description: 'Employees spend hours per week taking meeting notes instead of participating'
      },
      {
        stat: '70%',
        title: 'Lost Information',
        description: 'Critical action items and decisions get lost when notes are incomplete or missing'
      },
      {
        stat: '30%',
        title: 'Unproductive Meetings',
        description: 'Without clear documentation, teams repeat discussions and miss deadlines'
      }
    ],
    integrations: [
      { name: 'Zoom', status: 'live' },
      { name: 'Microsoft Teams', status: 'live' },
      { name: 'Google Meet', status: 'live' },
      { name: 'Slack', status: 'live' },
      { name: 'Notion', status: 'beta' },
      { name: 'Asana', status: 'live' },
      { name: 'Trello', status: 'live' },
      { name: 'Jira', status: 'coming-soon' }
    ],
    installTime: '5 minutes',
    hardwareRequired: false,
    apiDocs: '/docs/api/meeting-summarizer',
    techSpecs: {
      languages: ['Arabic', 'English', 'French', 'Spanish', 'German', '50+ total'],
      deploymentTime: '5 minutes plugin install',
      hardware: 'Zero hardware required',
      training: 'Zero training needed',
      uptime: '99.9% SLA',
      security: ['End-to-end encryption', 'GDPR compliant', 'SOC 2 Type II', 'ISO 27001'],
      support: '24/7 WhatsApp, phone & email',
      updates: 'Real-time transcription, weekly AI improvements'
    },
    roiCalculator: {
      productCost: 99,
      defaultInputs: {
        meetingsPerWeek: 10,
        hoursPerMeeting: 1,
        teamSize: 10
      }
    },
    features: [
      {
        title: 'Auto Transcription',
        description: 'Convert speech to text with 98% accuracy',
        icon: FaFileContract
      },
      {
        title: 'Smart Summaries',
        description: 'AI generates concise meeting summaries',
        icon: FaBrain
      },
      {
        title: 'Action Items',
        description: 'Automatically extract and assign tasks',
        icon: FaClipboardCheck
      },
      {
        title: 'Multi-Language',
        description: 'Support for 50+ languages',
        icon: FaUsers
      }
    ],
    businessValue: {
      timeSaved: '5 hours per week per person',
      costReduction: '70% reduction in meeting time',
      efficiency: '100% information retention',
      roi: '400% productivity boost'
    },
    useCases: [
      {
        title: 'Team Standups',
        description: 'Document daily standups automatically'
      },
      {
        title: 'Client Meetings',
        description: 'Share accurate meeting notes with clients'
      },
      {
        title: 'Training Sessions',
        description: 'Create searchable training documentation'
      }
    ],
    pricing: {
      starter: {
        price: 29,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['10 hours/month', 'Basic transcription', '3 users', 'Email support'],
        roi: {
          monthlySavings: 400,
          paybackPeriod: '2 days'
        }
      },
      professional: {
        price: 99,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['50 hours/month', 'AI summaries', '10 users', 'Priority support', 'Integrations'],
        roi: {
          monthlySavings: 1500,
          paybackPeriod: '2 days'
        }
      },
      enterprise: {
        price: 'Custom',
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Unlimited hours', 'Custom vocabulary', 'Unlimited users', 'API access', 'White-label'],
        roi: {
          monthlySavings: '6,000+',
          paybackPeriod: '1 day'
        }
      }
    }
  },
  {
    id: 'eventsync',
    name: 'EventSync – Event Management',
    category: 'operations',
    tagline: 'Manage events like a pro',
    shortDescription: 'Complete event management platform with sponsor CRM',
    problem: 'Event organizers struggle with scattered data and sponsor management',
    solution: 'Unified dashboard for attendees, sponsors, teams, and performance tracking',
    targetAudience: ['Event Organizers', 'Corporations', 'Universities', 'Conference Planners'],
    icon: FaCalendarAlt,
    problems: [
      {
        stat: '40hrs/event',
        title: 'Time Wasted on Manual Coordination',
        description: 'Event teams waste hours managing spreadsheets, emails, and disconnected tools'
      },
      {
        stat: '30%',
        title: 'Lower Attendance Rates',
        description: 'Poor communication and disorganized registration lead to no-shows'
      },
      {
        stat: '50%',
        title: 'Sponsor Dissatisfaction',
        description: 'Scattered sponsor data and missed deliverables damage sponsor relationships'
      }
    ],
    integrations: [
      { name: 'Eventbrite', status: 'live' },
      { name: 'Zoom', status: 'live' },
      { name: 'Microsoft Teams', status: 'live' },
      { name: 'Mailchimp', status: 'live' },
      { name: 'Stripe', status: 'live' },
      { name: 'PayPal', status: 'beta' },
      { name: 'Google Calendar', status: 'live' },
      { name: 'Salesforce', status: 'coming-soon' }
    ],
    installTime: '15 minutes',
    hardwareRequired: false,
    apiDocs: '/docs/api/eventsync',
    techSpecs: {
      languages: ['Arabic', 'English', 'French'],
      deploymentTime: '15 minutes',
      hardware: 'Zero hardware required',
      training: 'Team onboarding included',
      uptime: '99.9% SLA',
      security: ['SSL encryption', 'PCI DSS compliant', 'GDPR compliant', 'SOC 2 Type II'],
      support: '24/7 WhatsApp, phone & email',
      updates: 'Real-time data sync, monthly feature releases'
    },
    roiCalculator: {
      productCost: 399,
      defaultInputs: {
        eventsPerYear: 12,
        attendeesPerEvent: 500,
        hoursPerEvent: 40
      }
    },
    features: [
      {
        title: 'Attendee Management',
        description: 'Track registrations, check-ins, and engagement',
        icon: FaUsers
      },
      {
        title: 'Sponsor CRM',
        description: 'Manage sponsor relationships and deliverables',
        icon: FaStar
      },
      {
        title: 'Team Collaboration',
        description: 'Coordinate teams and assign tasks efficiently',
        icon: FaClipboardCheck
      },
      {
        title: 'Performance Analytics',
        description: 'Real-time event metrics and ROI tracking',
        icon: FaChartLine
      }
    ],
    businessValue: {
      timeSaved: '40 hours per event',
      costReduction: '50% faster setup',
      efficiency: '30% higher attendance',
      roi: '200% sponsor satisfaction'
    },
    useCases: [
      {
        title: 'Corporate Events',
        description: 'Manage company conferences and town halls'
      },
      {
        title: 'Trade Shows',
        description: 'Handle large-scale exhibitions and sponsor booths'
      },
      {
        title: 'Educational Events',
        description: 'Organize university events and career fairs'
      }
    ],
    pricing: {
      starter: {
        price: 149,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Up to 500 attendees', '5 events/year', 'Basic features', 'Email support'],
        roi: {
          monthlySavings: 1800,
          paybackPeriod: '2 days'
        }
      },
      professional: {
        price: 399,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Up to 5,000 attendees', 'Unlimited events', 'Sponsor CRM', 'Priority support', 'Custom branding'],
        roi: {
          monthlySavings: 5000,
          paybackPeriod: '2 days'
        }
      },
      enterprise: {
        price: 'Custom',
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Unlimited attendees', 'White-label', 'Dedicated manager', 'API access', 'Custom features'],
        roi: {
          monthlySavings: '18,000+',
          paybackPeriod: '1 day'
        }
      }
    }
  },
  {
    id: 'smartsupply',
    name: 'SmartSupply – Supply Chain AI',
    category: 'operations',
    tagline: 'Optimize your supply chain with AI',
    shortDescription: 'AI-powered supply chain management and forecasting',
    problem: 'Supply chain disruptions and high costs hurt profitability',
    solution: 'Demand forecasting, shipment tracking, and smart inventory management',
    targetAudience: ['Manufacturers', 'Wholesalers', 'Distributors', 'Logistics Companies'],
    icon: FaTruck,
    problems: [
      {
        stat: '25hrs/week',
        title: 'Time Wasted on Manual Tracking',
        description: 'Supply chain teams manually track shipments and inventory across multiple systems'
      },
      {
        stat: '30%',
        title: 'Higher Inventory Costs',
        description: 'Poor demand forecasting leads to excess stock or costly stockouts'
      },
      {
        stat: '40%',
        title: 'Slower Fulfillment',
        description: 'Supply chain inefficiencies delay deliveries and frustrate customers'
      }
    ],
    integrations: [
      { name: 'SAP', status: 'live' },
      { name: 'Oracle NetSuite', status: 'live' },
      { name: 'Shopify', status: 'live' },
      { name: 'WooCommerce', status: 'live' },
      { name: 'FedEx', status: 'beta' },
      { name: 'UPS', status: 'live' },
      { name: 'DHL', status: 'live' },
      { name: 'Aramex', status: 'coming-soon' }
    ],
    installTime: '30 minutes',
    hardwareRequired: false,
    apiDocs: '/docs/api/smartsupply',
    techSpecs: {
      languages: ['Arabic', 'English', 'French'],
      deploymentTime: '30 minutes with integration support',
      hardware: 'Zero hardware required',
      training: 'AI trains on your historical data',
      uptime: '99.9% SLA',
      security: ['SSL encryption', 'GDPR compliant', 'SOC 2 Type II', 'ISO 27001'],
      support: '24/7 WhatsApp, phone & email',
      updates: 'Real-time tracking updates, weekly AI model improvements'
    },
    roiCalculator: {
      productCost: 499,
      defaultInputs: {
        inventoryValue: 500000,
        shipmentsPerMonth: 1000,
        hoursSpent: 25
      }
    },
    features: [
      {
        title: 'Demand Forecasting',
        description: 'Predict demand with 90% accuracy',
        icon: FaChartLine
      },
      {
        title: 'Shipment Tracking',
        description: 'Real-time visibility of all shipments',
        icon: FaTruck
      },
      {
        title: 'Smart Inventory',
        description: 'Optimize stock levels automatically',
        icon: FaClipboardCheck
      },
      {
        title: 'Delay Alerts',
        description: 'Get notified about potential disruptions',
        icon: FaStar
      }
    ],
    businessValue: {
      timeSaved: '25 hours per week',
      costReduction: '30% lower inventory costs',
      efficiency: '40% faster fulfillment',
      roi: '350% operational efficiency'
    },
    useCases: [
      {
        title: 'Inventory Optimization',
        description: 'Reduce excess stock and stockouts'
      },
      {
        title: 'Supplier Management',
        description: 'Track supplier performance and reliability'
      },
      {
        title: 'Logistics Planning',
        description: 'Optimize routes and reduce shipping costs'
      }
    ],
    pricing: {
      starter: {
        price: 199,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Up to 100 SKUs', 'Basic forecasting', '3 users', 'Email support'],
        roi: {
          monthlySavings: 2500,
          paybackPeriod: '2 days'
        }
      },
      professional: {
        price: 499,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Up to 1,000 SKUs', 'Advanced AI', '10 users', 'Priority support', 'API access'],
        roi: {
          monthlySavings: 7000,
          paybackPeriod: '2 days'
        }
      },
      enterprise: {
        price: 'Custom',
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Unlimited SKUs', 'Custom models', 'Unlimited users', 'Dedicated manager', 'White-label'],
        roi: {
          monthlySavings: '25,000+',
          paybackPeriod: '1 day'
        }
      }
    }
  },
  {
    id: 'contract-review-ai',
    name: 'Contract Review AI',
    category: 'operations',
    tagline: 'Review contracts in seconds, not hours',
    shortDescription: 'AI-powered contract analysis and risk detection',
    problem: 'Legal teams spend too much time reviewing routine contracts',
    solution: 'Automatic summarization and extraction of key terms and risks',
    targetAudience: ['Law Firms', 'Legal Departments', 'Real Estate', 'Procurement Teams'],
    icon: FaFileContract,
    problems: [
      {
        stat: '20hrs/week',
        title: 'Time Wasted on Manual Review',
        description: 'Legal teams spend hours reading through routine contracts line by line'
      },
      {
        stat: '80%',
        title: 'Slower Contract Processing',
        description: 'Manual review bottlenecks delay deals and frustrate business partners'
      },
      {
        stat: '5%',
        title: 'Missed Risk Clauses',
        description: 'Human reviewers miss hidden risks buried in complex legal language'
      }
    ],
    integrations: [
      { name: 'DocuSign', status: 'live' },
      { name: 'Adobe Sign', status: 'live' },
      { name: 'PandaDoc', status: 'live' },
      { name: 'Google Drive', status: 'live' },
      { name: 'Dropbox', status: 'beta' },
      { name: 'OneDrive', status: 'live' },
      { name: 'Box', status: 'live' },
      { name: 'Salesforce', status: 'coming-soon' }
    ],
    installTime: '10 minutes',
    hardwareRequired: false,
    apiDocs: '/docs/api/contract-review',
    techSpecs: {
      languages: ['Arabic', 'English', 'French'],
      deploymentTime: '10 minutes',
      hardware: 'Zero hardware required',
      training: 'Pre-trained on 1M+ contracts',
      uptime: '99.9% SLA',
      security: ['Bank-level encryption', 'GDPR compliant', 'SOC 2 Type II', 'Attorney-client privilege protected'],
      support: '24/7 WhatsApp, phone & email',
      updates: 'Weekly legal database updates'
    },
    roiCalculator: {
      productCost: 299,
      defaultInputs: {
        contractsPerMonth: 100,
        hoursPerContract: 2,
        legalCostPerHour: 500
      }
    },
    features: [
      {
        title: 'Instant Summaries',
        description: 'Get contract summaries in seconds',
        icon: FaFileContract
      },
      {
        title: 'Key Terms Extraction',
        description: 'Automatically identify important clauses',
        icon: FaBrain
      },
      {
        title: 'Risk Detection',
        description: 'Highlight potential legal risks',
        icon: FaStar
      },
      {
        title: 'Comparison Tools',
        description: 'Compare multiple contracts side-by-side',
        icon: FaClipboardCheck
      }
    ],
    businessValue: {
      timeSaved: '20 hours per week',
      costReduction: '80% faster reviews',
      efficiency: '95% accuracy',
      roi: '300% cost savings'
    },
    useCases: [
      {
        title: 'Vendor Contracts',
        description: 'Review supplier and vendor agreements quickly'
      },
      {
        title: 'Employment Agreements',
        description: 'Standardize and review employment contracts'
      },
      {
        title: 'Real Estate Deals',
        description: 'Analyze property agreements and leases'
      }
    ],
    pricing: {
      starter: {
        price: 99,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['50 contracts/month', 'Basic analysis', '3 users', 'Email support'],
        roi: {
          monthlySavings: 1200,
          paybackPeriod: '2 days'
        }
      },
      professional: {
        price: 299,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['500 contracts/month', 'Advanced AI', '10 users', 'Priority support', 'Custom clauses'],
        roi: {
          monthlySavings: 4500,
          paybackPeriod: '2 days'
        }
      },
      enterprise: {
        price: 'Custom',
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Unlimited contracts', 'Custom AI training', 'Unlimited users', 'API access', 'White-label'],
        roi: {
          monthlySavings: '20,000+',
          paybackPeriod: '1 day'
        }
      }
    }
  },

  // Industry Solutions
  {
    id: 'clowdserve',
    name: 'ClowdServe – AI Waiter',
    category: 'industry',
    tagline: 'The future of restaurant service',
    shortDescription: 'AI voice assistant for restaurants and cafes',
    problem: 'Crowded restaurants struggle with slow service and miscommunication',
    solution: 'Smart AI waiter that takes orders, makes recommendations, and integrates with POS',
    targetAudience: ['Restaurants', 'Cafes', 'Food Courts', 'Hotel Dining'],
    icon: FaConciergeBell,
    problems: [
      {
        stat: '30%',
        title: 'Slower Service During Rush Hours',
        description: 'Understaffed restaurants lose customers due to long wait times and slow order taking'
      },
      {
        stat: '40%',
        title: 'Higher Labor Costs',
        description: 'Hiring and training waitstaff is expensive, especially with high turnover rates'
      },
      {
        stat: '25%',
        title: 'Order Mistakes Cost Money',
        description: 'Miscommunication between customers and staff leads to wrong orders and wasted food'
      }
    ],
    integrations: [
      { name: 'Square POS', status: 'live' },
      { name: 'Toast POS', status: 'live' },
      { name: 'Clover', status: 'live' },
      { name: 'Lightspeed', status: 'beta' },
      { name: 'Shopify POS', status: 'live' },
      { name: 'Aloha POS', status: 'live' },
      { name: 'Oracle Micros', status: 'live' },
      { name: 'Custom POS', status: 'coming-soon' }
    ],
    installTime: '2 hours',
    hardwareRequired: true,
    apiDocs: '/docs/api/clowdserve',
    techSpecs: {
      languages: ['Arabic', 'English', 'French', 'Spanish', 'Hindi', '10+ total'],
      deploymentTime: '2 hours with on-site setup',
      hardware: 'Tablet or kiosk provided',
      training: 'Staff training included',
      uptime: '99.9% SLA',
      security: ['PCI DSS compliant', 'GDPR compliant', 'SOC 2 Type II', 'Local data storage option'],
      support: '24/7 WhatsApp, phone & on-site support',
      updates: 'Real-time menu updates, monthly AI improvements'
    },
    roiCalculator: {
      productCost: 499,
      defaultInputs: {
        tablesServed: 100,
        avgOrderValue: 150,
        laborCostPerMonth: 15000
      }
    },
    features: [
      {
        title: 'Voice Ordering',
        description: 'Customers order using natural voice commands',
        icon: FaConciergeBell
      },
      {
        title: 'Smart Recommendations',
        description: 'AI suggests dishes based on preferences',
        icon: FaBrain
      },
      {
        title: 'POS Integration',
        description: 'Seamless connection with existing systems',
        icon: FaClipboardCheck
      },
      {
        title: 'Satisfaction Analytics',
        description: 'Track customer satisfaction in real-time',
        icon: FaChartLine
      }
    ],
    businessValue: {
      timeSaved: '30% faster service',
      costReduction: '40% lower labor costs',
      efficiency: '50% more tables served',
      roi: '200% revenue increase'
    },
    useCases: [
      {
        title: 'Quick Service',
        description: 'Speed up service during rush hours'
      },
      {
        title: 'Multi-Language Support',
        description: 'Serve international customers easily'
      },
      {
        title: 'Upselling',
        description: 'Increase average order value with smart suggestions'
      }
    ],
    pricing: {
      starter: {
        price: 199,
        currency: 'SAR',
        period: 'month',
        setupFee: 500,
        trial: 14,
        features: ['Up to 50 tables', 'Basic AI', '2 languages', 'Email support'],
        roi: {
          monthlySavings: 2500,
          paybackPeriod: '3 days'
        }
      },
      professional: {
        price: 499,
        currency: 'SAR',
        period: 'month',
        setupFee: 1000,
        trial: 14,
        features: ['Up to 200 tables', 'Advanced AI', '10 languages', 'Priority support', 'Custom menu'],
        roi: {
          monthlySavings: 8000,
          paybackPeriod: '2 days'
        }
      },
      enterprise: {
        price: 'Custom',
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Unlimited tables', 'Multi-location', 'White-label', 'Dedicated support', 'Custom features'],
        roi: {
          monthlySavings: '30,000+',
          paybackPeriod: '1 day'
        }
      }
    }
  },
  {
    id: 'medlink',
    name: 'MedLink – Clinic Management',
    category: 'industry',
    tagline: 'Modern healthcare management',
    shortDescription: 'Complete clinic and patient management system',
    problem: 'Clinics struggle with paperwork, scheduling, and patient follow-up',
    solution: 'Digital patient records, online booking, and automated reminders',
    targetAudience: ['Clinics', 'Small Hospitals', 'Dental Practices', 'Medical Centers'],
    icon: FaHospital,
    problems: [
      {
        stat: '15hrs/week',
        title: 'Time Wasted on Paperwork',
        description: 'Medical staff spend hours on manual record-keeping instead of patient care'
      },
      {
        stat: '40%',
        title: 'Patient No-Shows',
        description: 'Without automated reminders, clinics lose revenue from missed appointments'
      },
      {
        stat: '60%',
        title: 'Scheduling Chaos',
        description: 'Manual scheduling leads to double-bookings, long wait times, and frustrated patients'
      }
    ],
    integrations: [
      { name: 'WhatsApp', status: 'live' },
      { name: 'SMS Gateway', status: 'live' },
      { name: 'Email', status: 'live' },
      { name: 'Google Calendar', status: 'live' },
      { name: 'Stripe', status: 'beta' },
      { name: 'PayTabs', status: 'live' },
      { name: 'Mada', status: 'live' },
      { name: 'Insurance APIs', status: 'coming-soon' }
    ],
    installTime: '1 day',
    hardwareRequired: false,
    apiDocs: '/docs/api/medlink',
    techSpecs: {
      languages: ['Arabic', 'English', 'French'],
      deploymentTime: '1 day with data migration',
      hardware: 'Zero hardware required - works on any device',
      training: 'Full staff training included',
      uptime: '99.99% SLA',
      security: ['HIPAA compliant', 'HL7 FHIR', 'GDPR compliant', 'SOC 2 Type II', 'ISO 27001'],
      support: '24/7 medical IT support',
      updates: 'Monthly compliance updates, weekly feature releases'
    },
    roiCalculator: {
      productCost: 349,
      defaultInputs: {
        patientsPerDay: 50,
        noShowRate: 40,
        avgAppointmentValue: 200
      }
    },
    features: [
      {
        title: 'Online Booking',
        description: 'Patients book appointments 24/7',
        icon: FaCalendarAlt
      },
      {
        title: 'Digital Records',
        description: 'Paperless patient files and history',
        icon: FaFileContract
      },
      {
        title: 'Auto Reminders',
        description: 'Reduce no-shows with SMS/email reminders',
        icon: FaStar
      },
      {
        title: 'Performance Reports',
        description: 'Track doctor efficiency and patient satisfaction',
        icon: FaChartLine
      }
    ],
    businessValue: {
      timeSaved: '15 hours per week',
      costReduction: '60% less paperwork',
      efficiency: '40% fewer no-shows',
      roi: '250% patient satisfaction'
    },
    useCases: [
      {
        title: 'Appointment Management',
        description: 'Streamline scheduling and reduce wait times'
      },
      {
        title: 'Patient Portal',
        description: 'Give patients access to their medical records'
      },
      {
        title: 'Billing Integration',
        description: 'Automate invoicing and insurance claims'
      }
    ],
    pricing: {
      starter: {
        price: 129,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Up to 500 patients', '2 doctors', 'Basic features', 'Email support'],
        roi: {
          monthlySavings: 1500,
          paybackPeriod: '2 days'
        }
      },
      professional: {
        price: 349,
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Up to 5,000 patients', '10 doctors', 'Advanced features', 'Priority support', 'Integrations'],
        roi: {
          monthlySavings: 5000,
          paybackPeriod: '2 days'
        }
      },
      enterprise: {
        price: 'Custom',
        currency: 'SAR',
        period: 'month',
        setupFee: 0,
        trial: 14,
        features: ['Unlimited patients', 'Unlimited doctors', 'Multi-location', 'API access', 'White-label'],
        roi: {
          monthlySavings: '20,000+',
          paybackPeriod: '1 day'
        }
      }
    }
  }
];

// Helper function to get products by category
export const getProductsByCategory = (categoryId) => {
  return saasProducts.filter(product => product.category === categoryId);
};

// Helper function to get category by id
export const getCategoryById = (categoryId) => {
  return saasCategories.find(cat => cat.id === categoryId);
};

// Helper function to get product by id
export const getProductById = (productId) => {
  return saasProducts.find(product => product.id === productId);
};

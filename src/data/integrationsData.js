import { 
  FaCreditCard, FaShoppingCart, FaUsers, FaEnvelope, FaWhatsapp, 
  FaSlack, FaGoogle, FaFacebook, FaInstagram, FaTwitter,
  FaShopify, FaWordpress, FaMailchimp, FaSalesforce, FaStripe,
  FaPaypal, FaSquare, FaApple, FaMicrosoft, FaDropbox
} from 'react-icons/fa';

export const integrationCategories = [
  'All',
  'Payment Gateways',
  'E-commerce Platforms',
  'CRM Systems',
  'Communication Tools',
  'Marketing Platforms',
  'Productivity Tools',
  'Cloud Storage'
];

export const integrations = [
  // Payment Gateways
  {
    id: 'stripe',
    name: 'Stripe',
    icon: FaStripe,
    category: 'Payment Gateways',
    description: 'Complete payment processing with support for cards, wallets, and local payment methods',
    features: ['Instant setup', 'Automatic reconciliation', 'Real-time analytics', 'Fraud detection'],
    setupTime: '5 min',
    supported: true,
    popular: true,
    apiDocs: 'https://stripe.com/docs/api',
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: FaPaypal,
    category: 'Payment Gateways',
    description: 'Accept payments from customers worldwide with PayPal Business',
    features: ['Global reach', 'Buyer protection', 'Mobile payments', 'Invoice generation'],
    setupTime: '10 min',
    supported: true,
    popular: true,
    apiDocs: 'https://developer.paypal.com',
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    id: 'square',
    name: 'Square',
    icon: FaSquare,
    category: 'Payment Gateways',
    description: 'Unified payment processing for online and in-person transactions',
    features: ['POS integration', 'Inventory sync', 'Customer profiles', 'Gift cards'],
    setupTime: '8 min',
    supported: true,
    popular: false,
    apiDocs: 'https://developer.squareup.com',
    gradient: 'from-gray-700 to-black'
  },

  // E-commerce Platforms
  {
    id: 'shopify',
    name: 'Shopify',
    icon: FaShopify,
    category: 'E-commerce Platforms',
    description: 'Seamlessly integrate with Shopify stores for product and order management',
    features: ['Product sync', 'Order automation', 'Inventory updates', 'Customer data'],
    setupTime: '15 min',
    supported: true,
    popular: true,
    apiDocs: 'https://shopify.dev/api',
    gradient: 'from-green-500 to-green-700'
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    icon: FaShoppingCart,
    category: 'E-commerce Platforms',
    description: 'Connect your WordPress WooCommerce store with AI-powered tools',
    features: ['Product management', 'Order tracking', 'Analytics sync', 'Customer insights'],
    setupTime: '12 min',
    supported: true,
    popular: true,
    apiDocs: 'https://woocommerce.github.io/woocommerce-rest-api-docs',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'magento',
    name: 'Magento',
    icon: FaShoppingCart,
    category: 'E-commerce Platforms',
    description: 'Enterprise-level integration for Magento e-commerce platforms',
    features: ['Multi-store support', 'Advanced catalog', 'B2B features', 'Custom workflows'],
    setupTime: '20 min',
    supported: true,
    popular: false,
    apiDocs: 'https://devdocs.magento.com',
    gradient: 'from-orange-500 to-red-600'
  },

  // CRM Systems
  {
    id: 'salesforce',
    name: 'Salesforce',
    icon: FaSalesforce,
    category: 'CRM Systems',
    description: 'Sync customer data and insights with Salesforce CRM',
    features: ['Contact sync', 'Lead scoring', 'Deal tracking', 'Activity logging'],
    setupTime: '25 min',
    supported: true,
    popular: true,
    apiDocs: 'https://developer.salesforce.com',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    icon: FaUsers,
    category: 'CRM Systems',
    description: 'Integrate with HubSpot for marketing, sales, and service automation',
    features: ['Contact management', 'Email tracking', 'Pipeline sync', 'Workflow automation'],
    setupTime: '15 min',
    supported: true,
    popular: true,
    apiDocs: 'https://developers.hubspot.com',
    gradient: 'from-orange-400 to-orange-600'
  },
  {
    id: 'zoho-crm',
    name: 'Zoho CRM',
    icon: FaUsers,
    category: 'CRM Systems',
    description: 'Connect Zoho CRM for comprehensive customer relationship management',
    features: ['Lead management', 'Sales automation', 'Analytics', 'Custom modules'],
    setupTime: '18 min',
    supported: true,
    popular: false,
    apiDocs: 'https://www.zoho.com/crm/developer',
    gradient: 'from-red-500 to-yellow-500'
  },

  // Communication Tools
  {
    id: 'whatsapp',
    name: 'WhatsApp Business',
    icon: FaWhatsapp,
    category: 'Communication Tools',
    description: 'Send automated messages and notifications via WhatsApp Business API',
    features: ['Message templates', 'Rich media', 'Chatbot integration', 'Customer support'],
    setupTime: '30 min',
    supported: true,
    popular: true,
    apiDocs: 'https://developers.facebook.com/docs/whatsapp',
    gradient: 'from-green-400 to-green-600'
  },
  {
    id: 'slack',
    name: 'Slack',
    icon: FaSlack,
    category: 'Communication Tools',
    description: 'Receive alerts and notifications in your Slack workspace',
    features: ['Channel notifications', 'Bot commands', 'Workflow triggers', 'File sharing'],
    setupTime: '5 min',
    supported: true,
    popular: true,
    apiDocs: 'https://api.slack.com',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'microsoft-teams',
    name: 'Microsoft Teams',
    icon: FaMicrosoft,
    category: 'Communication Tools',
    description: 'Integrate with Microsoft Teams for enterprise communication',
    features: ['Team channels', 'Meeting alerts', 'File collaboration', 'Bot integration'],
    setupTime: '10 min',
    supported: true,
    popular: true,
    apiDocs: 'https://docs.microsoft.com/en-us/microsoftteams',
    gradient: 'from-blue-600 to-indigo-600'
  },

  // Marketing Platforms
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    icon: FaMailchimp,
    category: 'Marketing Platforms',
    description: 'Sync contacts and automate email marketing campaigns',
    features: ['Audience sync', 'Campaign triggers', 'Analytics', 'Segmentation'],
    setupTime: '12 min',
    supported: true,
    popular: true,
    apiDocs: 'https://mailchimp.com/developer',
    gradient: 'from-yellow-400 to-yellow-600'
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    icon: FaGoogle,
    category: 'Marketing Platforms',
    description: 'Track and analyze customer behavior with Google Analytics integration',
    features: ['Event tracking', 'Conversion goals', 'Custom reports', 'Real-time data'],
    setupTime: '8 min',
    supported: true,
    popular: true,
    apiDocs: 'https://developers.google.com/analytics',
    gradient: 'from-red-500 to-yellow-500'
  },
  {
    id: 'facebook-ads',
    name: 'Facebook Ads',
    icon: FaFacebook,
    category: 'Marketing Platforms',
    description: 'Optimize ad campaigns with AI-driven insights and automation',
    features: ['Campaign sync', 'Audience builder', 'ROI tracking', 'A/B testing'],
    setupTime: '15 min',
    supported: true,
    popular: true,
    apiDocs: 'https://developers.facebook.com/docs/marketing-apis',
    gradient: 'from-blue-600 to-blue-800'
  },
  {
    id: 'instagram',
    name: 'Instagram Business',
    icon: FaInstagram,
    category: 'Marketing Platforms',
    description: 'Manage Instagram posts, stories, and engagement with automation',
    features: ['Auto-posting', 'Story scheduling', 'Engagement analytics', 'Hashtag optimizer'],
    setupTime: '10 min',
    supported: true,
    popular: true,
    apiDocs: 'https://developers.facebook.com/docs/instagram-api',
    gradient: 'from-pink-500 via-purple-500 to-yellow-500'
  },
  {
    id: 'twitter',
    name: 'Twitter (X)',
    icon: FaTwitter,
    category: 'Marketing Platforms',
    description: 'Schedule tweets and analyze social media performance',
    features: ['Tweet scheduler', 'Analytics dashboard', 'Mention tracking', 'Thread creator'],
    setupTime: '8 min',
    supported: true,
    popular: false,
    apiDocs: 'https://developer.twitter.com',
    gradient: 'from-blue-400 to-blue-600'
  },

  // Productivity Tools
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    icon: FaGoogle,
    category: 'Productivity Tools',
    description: 'Integrate with Gmail, Calendar, Drive, and other Google services',
    features: ['Email sync', 'Calendar integration', 'Drive storage', 'Docs collaboration'],
    setupTime: '10 min',
    supported: true,
    popular: true,
    apiDocs: 'https://developers.google.com/workspace',
    gradient: 'from-blue-500 to-green-500'
  },
  {
    id: 'microsoft-365',
    name: 'Microsoft 365',
    icon: FaMicrosoft,
    category: 'Productivity Tools',
    description: 'Connect with Outlook, OneDrive, and Microsoft Office apps',
    features: ['Outlook sync', 'OneDrive storage', 'Teams integration', 'Office automation'],
    setupTime: '12 min',
    supported: true,
    popular: true,
    apiDocs: 'https://docs.microsoft.com/en-us/graph',
    gradient: 'from-blue-600 to-blue-800'
  },

  // Cloud Storage
  {
    id: 'dropbox',
    name: 'Dropbox',
    icon: FaDropbox,
    category: 'Cloud Storage',
    description: 'Store and share files with Dropbox cloud storage integration',
    features: ['File sync', 'Shared folders', 'Version control', 'Team spaces'],
    setupTime: '8 min',
    supported: true,
    popular: true,
    apiDocs: 'https://www.dropbox.com/developers',
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    id: 'google-drive',
    name: 'Google Drive',
    icon: FaGoogle,
    category: 'Cloud Storage',
    description: 'Access and manage files stored in Google Drive',
    features: ['File management', 'Real-time collaboration', 'Shared drives', 'Version history'],
    setupTime: '6 min',
    supported: true,
    popular: true,
    apiDocs: 'https://developers.google.com/drive',
    gradient: 'from-green-500 to-yellow-500'
  }
];

export const getIntegrationsByCategory = (category) => {
  if (category === 'All') return integrations;
  return integrations.filter(integration => integration.category === category);
};

export const getPopularIntegrations = () => {
  return integrations.filter(integration => integration.popular);
};

export const getIntegrationById = (id) => {
  return integrations.find(integration => integration.id === id);
};

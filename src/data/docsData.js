import { FaRocket, FaCode, FaPlug, FaGraduationCap, FaTools, FaShieldAlt, FaChartLine, FaCog } from 'react-icons/fa';

export const docsCategories = [
  {
    id: 'getting-started',
    name: 'Getting Started',
    icon: FaRocket,
    description: 'Everything you need to get up and running',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'api-reference',
    name: 'API Reference',
    icon: FaCode,
    description: 'Complete API documentation and endpoints',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'integrations',
    name: 'Integrations',
    icon: FaPlug,
    description: 'Connect with your favorite tools',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'tutorials',
    name: 'Tutorials',
    icon: FaGraduationCap,
    description: 'Step-by-step guides and best practices',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'troubleshooting',
    name: 'Troubleshooting',
    icon: FaTools,
    description: 'Common issues and solutions',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'security',
    name: 'Security',
    icon: FaShieldAlt,
    description: 'Security best practices and compliance',
    color: 'from-red-500 to-pink-500'
  }
];

export const docs = [
  // Getting Started
  {
    id: 'quick-start',
    slug: 'quick-start',
    category: 'getting-started',
    title: 'Quick Start Guide',
    description: 'Get started with Clowd AI in 5 minutes',
    readTime: '5 min',
    difficulty: 'Beginner',
    lastUpdated: '2024-01-20',
    featured: true,
    content: {
      intro: 'Welcome to Clowd AI! This guide will help you set up your first AI solution in minutes.',
      sections: [
        {
          title: '1. Create Your Account',
          content: 'Sign up for a free 14-day trial at clowd.ai/signup. No credit card required.',
          code: null
        },
        {
          title: '2. Choose Your Product',
          content: 'Select the AI product that best fits your needs from our dashboard. Popular choices: AI Waiter, E-commerce AI, Customer Service AI.',
          code: null
        },
        {
          title: '3. Install & Configure',
          content: 'Follow the one-click installation process. Our setup wizard will guide you through the configuration.',
          code: `
// Example: Initialize Clowd AI SDK
import ClowdAI from '@clowd/ai-sdk';

const clowd = new ClowdAI({
  apiKey: 'your_api_key_here',
  region: 'saudi-arabia'
});

// Start using AI features
await clowd.init();
          `.trim()
        },
        {
          title: '4. Test Your Setup',
          content: 'Use our testing dashboard to verify everything is working correctly. Run sample queries and check responses.',
          code: null
        },
        {
          title: '5. Go Live',
          content: 'Deploy your AI solution to production. Our team is available 24/7 for support.',
          code: null
        }
      ],
      tips: [
        'Start with a small pilot before full deployment',
        'Use our sandbox environment for testing',
        'Check out our video tutorials for visual guidance'
      ],
      nextSteps: ['api-authentication', 'product-configuration', 'integration-basics']
    }
  },
  {
    id: 'system-requirements',
    slug: 'system-requirements',
    category: 'getting-started',
    title: 'System Requirements',
    description: 'Technical requirements for running Clowd AI',
    readTime: '3 min',
    difficulty: 'Beginner',
    lastUpdated: '2024-01-18',
    featured: false,
    content: {
      intro: 'Ensure your system meets these requirements for optimal performance.',
      sections: [
        {
          title: 'Browser Support',
          content: 'Chrome 90+, Firefox 88+, Safari 14+, Edge 90+',
          code: null
        },
        {
          title: 'Network Requirements',
          content: 'Minimum 5 Mbps internet connection. HTTPS required for production.',
          code: null
        },
        {
          title: 'API Rate Limits',
          content: 'Standard plan: 1000 requests/hour. Pro plan: 10,000 requests/hour. Enterprise: Unlimited.',
          code: null
        }
      ],
      tips: ['Use CDN for faster response times', 'Enable gzip compression', 'Implement caching strategies'],
      nextSteps: ['api-reference', 'performance-optimization']
    }
  },

  // API Reference
  {
    id: 'api-authentication',
    slug: 'api-authentication',
    category: 'api-reference',
    title: 'API Authentication',
    description: 'Secure your API requests with authentication',
    readTime: '8 min',
    difficulty: 'Intermediate',
    lastUpdated: '2024-01-19',
    featured: true,
    content: {
      intro: 'Learn how to authenticate your API requests using API keys and OAuth 2.0.',
      sections: [
        {
          title: 'API Key Authentication',
          content: 'The simplest way to authenticate. Include your API key in the request headers.',
          code: `
// API Key Authentication
fetch('https://api.clowd.ai/v1/analyze', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    text: 'Sample text to analyze'
  })
});
          `.trim()
        },
        {
          title: 'OAuth 2.0 Flow',
          content: 'For third-party integrations, use OAuth 2.0 for secure authorization.',
          code: `
// OAuth 2.0 Authentication
const oauth = new ClowdOAuth({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  redirectUri: 'https://yourapp.com/callback'
});

const authUrl = oauth.getAuthorizationUrl();
// Redirect user to authUrl
          `.trim()
        },
        {
          title: 'Rate Limiting',
          content: 'All requests are rate-limited. Check response headers for remaining quota.',
          code: `
// Check rate limit headers
const response = await fetch('https://api.clowd.ai/v1/analyze');
console.log('Remaining:', response.headers.get('X-RateLimit-Remaining'));
console.log('Reset:', response.headers.get('X-RateLimit-Reset'));
          `.trim()
        }
      ],
      tips: ['Store API keys securely', 'Rotate keys regularly', 'Use environment variables'],
      nextSteps: ['api-endpoints', 'error-handling', 'webhooks']
    }
  },
  {
    id: 'api-endpoints',
    slug: 'api-endpoints',
    category: 'api-reference',
    title: 'API Endpoints Reference',
    description: 'Complete list of available API endpoints',
    readTime: '15 min',
    difficulty: 'Intermediate',
    lastUpdated: '2024-01-21',
    featured: true,
    content: {
      intro: 'Complete reference for all Clowd AI API endpoints.',
      sections: [
        {
          title: 'POST /v1/analyze',
          content: 'Analyze text using AI models.',
          code: `
POST https://api.clowd.ai/v1/analyze
Content-Type: application/json

{
  "text": "Your text here",
  "language": "ar",
  "model": "gpt-4"
}

Response:
{
  "sentiment": "positive",
  "keywords": ["keyword1", "keyword2"],
  "summary": "AI-generated summary"
}
          `.trim()
        },
        {
          title: 'GET /v1/products',
          content: 'List all available AI products.',
          code: `
GET https://api.clowd.ai/v1/products
Authorization: Bearer YOUR_API_KEY

Response:
{
  "products": [
    {
      "id": "ai-waiter",
      "name": "AI Waiter",
      "status": "active"
    }
  ]
}
          `.trim()
        }
      ],
      tips: ['Use pagination for large datasets', 'Cache responses when possible'],
      nextSteps: ['webhooks', 'error-handling']
    }
  },

  // Integrations
  {
    id: 'integration-basics',
    slug: 'integration-basics',
    category: 'integrations',
    title: 'Integration Basics',
    description: 'Learn how to integrate Clowd AI with external services',
    readTime: '10 min',
    difficulty: 'Intermediate',
    lastUpdated: '2024-01-17',
    featured: true,
    content: {
      intro: 'Connect Clowd AI with your existing tools and workflows.',
      sections: [
        {
          title: 'Webhook Setup',
          content: 'Receive real-time notifications about events.',
          code: `
// Configure webhook endpoint
POST https://api.clowd.ai/v1/webhooks
{
  "url": "https://yourapp.com/webhook",
  "events": ["order.created", "analysis.completed"]
}
          `.trim()
        },
        {
          title: 'Stripe Integration',
          content: 'Accept payments using Stripe.',
          code: `
import { ClowdStripe } from '@clowd/stripe';

const stripe = new ClowdStripe({
  apiKey: 'your_stripe_key'
});

await stripe.processPayment(orderId);
          `.trim()
        }
      ],
      tips: ['Test webhooks with ngrok during development', 'Verify webhook signatures'],
      nextSteps: ['stripe-integration', 'shopify-integration']
    }
  },

  // Tutorials
  {
    id: 'restaurant-setup',
    slug: 'restaurant-setup-tutorial',
    category: 'tutorials',
    title: 'Setting Up AI Waiter for Restaurants',
    description: 'Complete guide to deploying AI Waiter in your restaurant',
    readTime: '20 min',
    difficulty: 'Beginner',
    lastUpdated: '2024-01-16',
    featured: true,
    content: {
      intro: 'Step-by-step tutorial for implementing AI Waiter in your restaurant.',
      sections: [
        {
          title: 'Step 1: Menu Setup',
          content: 'Upload your menu items with photos and descriptions.',
          code: null
        },
        {
          title: 'Step 2: QR Code Generation',
          content: 'Generate unique QR codes for each table.',
          code: null
        },
        {
          title: 'Step 3: Staff Training',
          content: 'Train your staff to handle the new system.',
          code: null
        },
        {
          title: 'Step 4: Pilot Testing',
          content: 'Run a pilot test with select tables.',
          code: null
        },
        {
          title: 'Step 5: Full Deployment',
          content: 'Roll out to all tables and monitor performance.',
          code: null
        }
      ],
      tips: ['Start with lunch service for testing', 'Have backup tablets ready', 'Monitor customer feedback closely'],
      nextSteps: ['analytics-dashboard', 'troubleshooting-orders']
    }
  },

  // Troubleshooting
  {
    id: 'common-issues',
    slug: 'common-issues',
    category: 'troubleshooting',
    title: 'Common Issues & Solutions',
    description: 'Quick fixes for frequent problems',
    readTime: '12 min',
    difficulty: 'Beginner',
    lastUpdated: '2024-01-15',
    featured: true,
    content: {
      intro: 'Solutions to the most common issues users face.',
      sections: [
        {
          title: 'API 401 Unauthorized',
          content: 'Check if your API key is valid and properly formatted.',
          code: `
// Correct format
headers: {
  'Authorization': 'Bearer sk_live_xxxxxxxxxxxx'
}
          `.trim()
        },
        {
          title: 'Slow Response Times',
          content: 'Enable caching and use CDN for static assets.',
          code: null
        },
        {
          title: 'Integration Not Working',
          content: 'Verify webhook URLs are accessible and return 200 status.',
          code: null
        }
      ],
      tips: ['Check system status page first', 'Enable debug logging', 'Contact support with error logs'],
      nextSteps: ['api-authentication', 'performance-optimization']
    }
  },

  // Security
  {
    id: 'security-best-practices',
    slug: 'security-best-practices',
    category: 'security',
    title: 'Security Best Practices',
    description: 'Keep your implementation secure',
    readTime: '10 min',
    difficulty: 'Advanced',
    lastUpdated: '2024-01-14',
    featured: true,
    content: {
      intro: 'Learn how to secure your Clowd AI implementation.',
      sections: [
        {
          title: 'API Key Security',
          content: 'Never expose API keys in client-side code. Use environment variables.',
          code: `
// ❌ Wrong - Never do this
const apiKey = 'sk_live_123456789';

// ✅ Correct - Use environment variables
const apiKey = process.env.CLOWD_API_KEY;
          `.trim()
        },
        {
          title: 'HTTPS Only',
          content: 'Always use HTTPS in production. Redirect HTTP to HTTPS.',
          code: null
        },
        {
          title: 'Data Encryption',
          content: 'All data is encrypted at rest and in transit using AES-256.',
          code: null
        }
      ],
      tips: ['Implement IP whitelisting', 'Use webhook signature verification', 'Regular security audits'],
      nextSteps: ['compliance', 'data-privacy']
    }
  }
];

// Helper functions
export const getDocsByCategory = (categoryId) => {
  if (categoryId === 'all') return docs;
  return docs.filter(doc => doc.category === categoryId);
};

export const getFeaturedDocs = () => {
  return docs.filter(doc => doc.featured);
};

export const getDocBySlug = (slug) => {
  return docs.find(doc => doc.slug === slug);
};

export const searchDocs = (query) => {
  const lowerQuery = query.toLowerCase();
  return docs.filter(doc =>
    doc.title.toLowerCase().includes(lowerQuery) ||
    doc.description.toLowerCase().includes(lowerQuery) ||
    doc.content.intro.toLowerCase().includes(lowerQuery)
  );
};

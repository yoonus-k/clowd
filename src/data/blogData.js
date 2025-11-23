import { FaPenNib, FaRobot, FaChartLine, FaLightbulb, FaIndustry, FaGraduationCap } from 'react-icons/fa';

export const blogCategories = [
  {
    id: 'all',
    name: 'All Posts',
    icon: FaPenNib,
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 'ai-trends',
    name: 'AI Trends',
    icon: FaRobot,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'case-studies',
    name: 'Success Stories',
    icon: FaChartLine,
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'how-to',
    name: 'How-To Guides',
    icon: FaGraduationCap,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'industry-insights',
    name: 'Industry Insights',
    icon: FaIndustry,
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'product-updates',
    name: 'Product Updates',
    icon: FaLightbulb,
    color: 'from-yellow-500 to-orange-500'
  }
];

export const blogPosts = [
  {
    id: 'ai-revolution-saudi-restaurants',
    slug: 'ai-revolution-saudi-restaurants-2024',
    category: 'industry-insights',
    title: 'The AI Revolution in Saudi Arabian Restaurants: 2024 Trends',
    excerpt: 'Discover how artificial intelligence is transforming the restaurant industry in Saudi Arabia, from AI waiters to predictive inventory management.',
    coverImage: null,
    author: {
      name: 'Ahmed Al-Rashid',
      title: 'AI Solutions Architect',
      avatar: null
    },
    publishDate: '2024-01-20',
    readTime: '8 min',
    featured: true,
    tags: ['AI', 'Restaurants', 'Saudi Arabia', 'Automation'],
    content: {
      intro: 'The restaurant industry in Saudi Arabia is experiencing a dramatic transformation driven by artificial intelligence. As Vision 2030 accelerates digital adoption, restaurants are leveraging AI to enhance customer experience, optimize operations, and boost profitability.',
      sections: [
        {
          heading: 'The Current Landscape',
          body: 'According to recent data, 68% of Saudi restaurants have adopted at least one AI solution in the past year. This rapid adoption is driven by labor shortages, rising customer expectations, and the need for operational efficiency. AI Waiter systems alone have helped restaurants increase capacity by 40% during peak hours while reducing order errors by 95%.'
        },
        {
          heading: 'Key AI Applications',
          body: 'The most impactful AI applications include: intelligent ordering systems that use NLP to understand customer preferences in Arabic and English, predictive inventory management that reduces food waste by up to 75%, dynamic pricing algorithms that optimize menu pricing based on demand patterns, and customer sentiment analysis from feedback and reviews to improve service quality.'
        },
        {
          heading: 'ROI and Business Impact',
          body: 'Restaurants implementing comprehensive AI solutions report an average revenue increase of 28% within the first quarter. Labor costs decrease by 35% through automation, while customer satisfaction scores improve by 40%. The average payback period for AI investments is just 3.2 months, making it one of the most attractive technology investments for restaurant owners.'
        },
        {
          heading: 'Looking Ahead',
          body: 'As AI technology continues to evolve, we expect to see even more sophisticated applications. Voice-based ordering in multiple Arabic dialects, AR menu visualization for enhanced customer experience, AI-powered kitchen optimization for faster preparation times, and predictive maintenance for restaurant equipment are all on the horizon. The future of Saudi restaurants is undeniably AI-powered.'
        }
      ],
      conclusion: 'The AI revolution in Saudi restaurants is not just a trend—it\'s a fundamental shift in how the industry operates. Restaurant owners who embrace these technologies now will have a significant competitive advantage in the years to come.'
    }
  },
  {
    id: 'ecommerce-conversion-optimization',
    slug: 'ecommerce-conversion-optimization-ai-2024',
    category: 'how-to',
    title: 'How to Increase E-commerce Conversions by 127% Using AI',
    excerpt: 'A comprehensive guide to implementing AI-powered conversion optimization strategies that have helped Saudi e-commerce businesses triple their sales.',
    coverImage: null,
    author: {
      name: 'Fatima Al-Zahrani',
      title: 'E-commerce AI Specialist',
      avatar: null
    },
    publishDate: '2024-01-18',
    readTime: '12 min',
    featured: true,
    tags: ['E-commerce', 'Conversion', 'AI', 'Marketing'],
    content: {
      intro: 'E-commerce businesses face a critical challenge: converting visitors into customers. Traditional optimization methods deliver incremental improvements, but AI-powered strategies can drive exponential growth. Here\'s how we helped e-commerce businesses achieve a 127% average increase in conversions.',
      sections: [
        {
          heading: 'Step 1: AI-Powered Product Recommendations',
          body: 'Generic product recommendations are dead. Modern AI analyzes browsing behavior, purchase history, and real-time context to serve hyper-personalized suggestions. Implementation takes just 10 minutes with our E-commerce AI. Results: 45% increase in average order value, 32% higher conversion rate on recommended products.'
        },
        {
          heading: 'Step 2: Intelligent Cart Abandonment Recovery',
          body: 'Cart abandonment costs Saudi e-commerce businesses millions annually. AI predicts which customers are likely to abandon and intervenes with personalized incentives. Our clients recover 23% of abandoned carts automatically through AI-triggered emails, WhatsApp messages, and retargeting ads with personalized discount codes.'
        },
        {
          heading: 'Step 3: Dynamic Pricing Optimization',
          body: 'AI monitors competitor pricing, demand patterns, and inventory levels to optimize prices in real-time. This doesn\'t mean always being the cheapest—it means finding the optimal price point that maximizes profit. One fashion retailer increased profit margins by 18% while maintaining conversion rates.'
        },
        {
          heading: 'Step 4: AI Chatbots for Instant Support',
          body: 'Customers have questions. If those questions aren\'t answered immediately, they leave. AI chatbots handle 85% of customer inquiries instantly, in both Arabic and English. They can access order history, track shipments, process returns, and even upsell complementary products. Response time drops from hours to seconds.'
        },
        {
          heading: 'Step 5: Predictive Inventory Management',
          body: 'Out-of-stock products kill conversions. Overstocked items tie up capital. AI predicts demand with 92% accuracy, ensuring popular items are always available while minimizing excess inventory. One electronics retailer reduced stockouts by 78%, directly increasing conversions on high-demand products.'
        }
      ],
      conclusion: 'Implementing these five AI-powered strategies transformed our clients\' e-commerce businesses. The average client saw a 127% increase in conversions within 90 days. The best part? All of these features are available in our E-commerce AI product, with setup taking less than one day.'
    }
  },
  {
    id: 'gpt4-vs-claude-business',
    slug: 'gpt4-vs-claude-best-ai-model-business-2024',
    category: 'ai-trends',
    title: 'GPT-4 vs Claude: Which AI Model is Best for Your Business in 2024?',
    excerpt: 'An in-depth comparison of the latest AI language models and practical guidance on choosing the right one for your specific business needs.',
    coverImage: null,
    author: {
      name: 'Dr. Khalid Al-Mutairi',
      title: 'Chief AI Officer',
      avatar: null
    },
    publishDate: '2024-01-15',
    readTime: '10 min',
    featured: true,
    tags: ['AI Models', 'GPT-4', 'Claude', 'Business'],
    content: {
      intro: 'The AI landscape has evolved dramatically with the release of GPT-4 and Claude 3. Both are powerful language models, but they excel in different scenarios. Here\'s our comprehensive analysis based on deploying both models across 180+ Saudi businesses.',
      sections: [
        {
          heading: 'Performance Comparison',
          body: 'GPT-4 excels at creative tasks, multilingual support (including excellent Arabic), and complex reasoning. Claude 3 shines in following detailed instructions, maintaining context over long conversations, and providing more nuanced, thoughtful responses. In our testing, GPT-4 generated more creative marketing copy, while Claude 3 produced more accurate technical documentation.'
        },
        {
          heading: 'Cost Considerations',
          body: 'GPT-4: $0.03 per 1K input tokens, $0.06 per 1K output tokens. Claude 3: $0.015 per 1K input tokens, $0.075 per 1K output tokens. For high-volume applications, cost differences compound quickly. A customer service chatbot handling 100K conversations monthly costs approximately $850 with GPT-4 vs $720 with Claude 3.'
        },
        {
          heading: 'Use Case Recommendations',
          body: 'Use GPT-4 for: Content generation and marketing copy, multilingual customer support (especially Arabic), creative brainstorming and ideation, general-purpose chatbots. Use Claude 3 for: Technical documentation and analysis, long-form content with complex context, detailed instruction following, tasks requiring careful reasoning and fewer hallucinations.'
        },
        {
          heading: 'The Clowd AI Approach',
          body: 'We don\'t make you choose. Our platform intelligently routes requests to the optimal model based on the task. Marketing content generation? GPT-4. Technical support documentation? Claude 3. This hybrid approach delivers the best results at the lowest cost. Our clients save an average of 32% on AI costs while improving output quality.'
        }
      ],
      conclusion: 'There\'s no universal "best" model—it depends on your specific use case. GPT-4 is ideal for creative, multilingual tasks, while Claude 3 excels at precise, thoughtful responses. Or better yet, use both intelligently through a platform like Clowd AI that automatically optimizes model selection.'
    }
  },
  {
    id: 'riyadh-cafe-success-story',
    slug: 'riyadh-cafe-ai-waiter-success-story',
    category: 'case-studies',
    title: 'How Riyadh Cafe Increased Revenue by 28% with AI Waiter',
    excerpt: 'A detailed look at how a popular Riyadh cafe implemented AI Waiter and achieved remarkable results in just 6 weeks.',
    coverImage: null,
    author: {
      name: 'Sarah Al-Qahtani',
      title: 'Customer Success Manager',
      avatar: null
    },
    publishDate: '2024-01-12',
    readTime: '6 min',
    featured: false,
    tags: ['Case Study', 'AI Waiter', 'Restaurants', 'Success Story'],
    content: {
      intro: 'Riyadh Cafe Co. was struggling with long wait times during peak hours and frequent order errors. Staff turnover was high, and customer satisfaction was declining. Here\'s how AI Waiter transformed their business in just 6 weeks.',
      sections: [
        {
          heading: 'The Challenge',
          body: 'Before implementing AI Waiter, Riyadh Cafe faced significant operational challenges. During lunch rush (12-2 PM) and dinner peak (7-9 PM), customers waited an average of 18 minutes just to place orders. Order accuracy was 77%, meaning nearly 1 in 4 orders had errors. This led to complaints, refunds, and negative reviews. Staff was overwhelmed, turnover exceeded 60% annually, and training new staff was costly and time-consuming.'
        },
        {
          heading: 'The Solution',
          body: 'We implemented AI Waiter with a phased rollout. Week 1: Installed QR codes on all 80 tables and trained staff on the system. Week 2: Soft launch with 20 tables during lunch only. Week 3: Expanded to all tables during all hours. Week 4-6: Optimization and staff workflow refinement. The system featured bilingual AI (Arabic/English), voice and text ordering, real-time menu with photos, automatic order routing to kitchen, and payment integration.'
        },
        {
          heading: 'The Results',
          body: 'After 6 weeks, the results were transformative. Revenue increased 28% due to faster table turnover and higher customer capacity. Order accuracy improved to 99.2%, virtually eliminating errors. Average wait time dropped from 18 minutes to 7 minutes. Customer satisfaction scores jumped 35%. Staff productivity increased 42% as servers focused on service, not order-taking. Most impressively, staff retention improved dramatically—turnover decreased by 25%.'
        },
        {
          heading: 'Owner\'s Perspective',
          body: 'Mohammed Al-Rashid, owner of Riyadh Cafe, shared his experience: "I was skeptical about AI replacing human interaction, but AI Waiter actually enhanced our service. Staff now focus on hospitality—checking on customers, making recommendations, creating connections. The AI handles the transactional aspects perfectly. Our customers love the convenience, and our staff loves the reduced stress. The ROI was immediate—we recovered our investment in just 5 weeks."'
        }
      ],
      conclusion: 'Riyadh Cafe\'s success demonstrates that AI doesn\'t replace human service—it enhances it. By automating routine tasks, staff can focus on what humans do best: creating memorable experiences. The result is happier customers, happier staff, and a healthier bottom line.'
    }
  },
  {
    id: 'setup-ai-customer-service',
    slug: 'setup-ai-customer-service-30-minutes',
    category: 'how-to',
    title: 'How to Set Up AI Customer Service in 30 Minutes',
    excerpt: 'A step-by-step guide to implementing AI-powered customer service that handles 85% of inquiries automatically.',
    coverImage: null,
    author: {
      name: 'Omar Al-Harbi',
      title: 'Implementation Specialist',
      avatar: null
    },
    publishDate: '2024-01-10',
    readTime: '7 min',
    featured: false,
    tags: ['Tutorial', 'Customer Service', 'AI', 'Implementation'],
    content: {
      intro: 'Customer service is the backbone of any successful business, but it\'s also expensive and difficult to scale. AI-powered customer service can handle 85% of routine inquiries automatically, 24/7, in multiple languages. Here\'s how to set it up in just 30 minutes.',
      sections: [
        {
          heading: 'Step 1: Sign Up and Connect (5 minutes)',
          body: 'Create your Clowd AI account at clowd.ai/signup. Connect your existing customer service channels: website chat widget (one-line code snippet), WhatsApp Business API (automatic integration), email support (forward to your unique AI email address), and Facebook Messenger (one-click connect). All integrations are pre-built and require no coding.'
        },
        {
          heading: 'Step 2: Train Your AI (15 minutes)',
          body: 'Upload your existing FAQ documents, knowledge base articles, and product information. The AI automatically processes and learns from this content. For best results, include: product details and specifications, shipping and return policies, pricing and payment information, common troubleshooting guides, and company policies. The AI supports Arabic and English documents simultaneously.'
        },
        {
          heading: 'Step 3: Customize Responses (5 minutes)',
          body: 'Set your brand voice (professional, friendly, formal, casual), configure escalation rules (when to transfer to human agents), set operating hours (or enable 24/7 mode), and customize greeting messages. The AI adapts its tone to match your brand while maintaining helpfulness and accuracy.'
        },
        {
          heading: 'Step 4: Test and Go Live (5 minutes)',
          body: 'Use our built-in testing tool to simulate customer conversations. Ask common questions to verify accuracy. Test escalation scenarios to ensure smooth handoffs. Once satisfied, flip the switch to "Live" and your AI customer service agent is active. You can monitor all conversations in real-time from your dashboard.'
        }
      ],
      conclusion: 'In just 30 minutes, you\'ve deployed an AI customer service agent that works 24/7, speaks multiple languages, and handles 85% of inquiries automatically. Your human team can focus on complex issues that require empathy and judgment. Your customers get instant responses anytime, anywhere.'
    }
  },
  {
    id: 'ai-product-updates-january-2024',
    slug: 'ai-product-updates-january-2024',
    category: 'product-updates',
    title: 'Product Updates: January 2024 - New Features & Improvements',
    excerpt: 'Discover the latest features, improvements, and enhancements we\'ve rolled out across all Clowd AI products this month.',
    coverImage: null,
    author: {
      name: 'Clowd AI Product Team',
      title: 'Product Development',
      avatar: null
    },
    publishDate: '2024-01-22',
    readTime: '5 min',
    featured: false,
    tags: ['Product Updates', 'Features', 'Improvements'],
    content: {
      intro: 'We\'ve been hard at work improving Clowd AI based on your feedback. Here\'s what\'s new in January 2024.',
      sections: [
        {
          heading: 'New: Advanced Analytics Dashboard',
          body: 'All products now include a redesigned analytics dashboard with real-time metrics visualization, custom report builder (drag-and-drop interface), automated weekly/monthly reports via email, performance benchmarking against industry averages, and exportable data in CSV, Excel, and PDF formats. This upgrade is available to all users at no additional cost.'
        },
        {
          heading: 'Improved: Arabic Language Support',
          body: 'We\'ve significantly enhanced Arabic language processing across all products. Improvements include support for all major Arabic dialects (Gulf, Levantine, Egyptian), better understanding of mixed Arabic-English text, improved sentiment analysis for Arabic content, and more natural Arabic voice synthesis. Accuracy has improved by 34% based on our testing.'
        },
        {
          heading: 'New Integration: WhatsApp Business API',
          body: 'Direct integration with WhatsApp Business API is now available for Customer Service AI and AI Waiter. Send automated order confirmations, delivery updates, and support responses directly through WhatsApp. Setup takes just 5 minutes with our one-click integration wizard. This is perfect for Saudi businesses where WhatsApp is the primary communication channel.'
        },
        {
          heading: 'Coming Soon: AI Voice Assistant',
          body: 'Next month, we\'re launching AI Voice Assistant—voice-based interfaces for all our products. Take orders via voice call, provide support over the phone, and more. Beta testing begins February 1st. Contact us if you\'d like to participate in the beta program.'
        }
      ],
      conclusion: 'These updates represent just a fraction of the improvements we\'re making. Thank you for your continued feedback—it directly shapes our product roadmap. Have suggestions? Email us at product@clowd.ai.'
    }
  }
];

// Helper functions
export const getBlogPostsByCategory = (categoryId) => {
  if (categoryId === 'all') return blogPosts;
  return blogPosts.filter(post => post.category === categoryId);
};

export const getFeaturedBlogPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getBlogPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const searchBlogPosts = (query) => {
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(post =>
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    post.author.name.toLowerCase().includes(lowerQuery)
  );
};

export const getRecentBlogPosts = (limit = 3) => {
  return blogPosts
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, limit);
};

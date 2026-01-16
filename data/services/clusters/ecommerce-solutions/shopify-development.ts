import { ServiceData } from '@/components/services/sections';

export const shopifyDevelopmentData: ServiceData = {
  name: 'Shopify Development',
  slug: 'shopify-development',
  tagline: 'Build beautiful, high-converting Shopify stores that leverage the platform\'s full potential for your brand',
  category: 'E-commerce Solutions',
  description: 'Our Shopify development services create custom online stores that maximize the platform\'s capabilities. From theme customization to app development and Plus implementations, we build Shopify stores that stand out and sell effectively.',

  hero: {
    headline: 'Expert Shopify Development for Growing Brands',
    subheadline: 'Custom Shopify stores built by certified experts who know how to leverage every feature, app, and customization to drive your sales.',
    description: 'Shopify powers millions of successful stores for good reason—it\'s reliable, scalable, and feature-rich. But unlocking its full potential requires expertise. Our Shopify developers create custom themes, build private apps, implement complex integrations, and optimize every aspect of your store for conversions. Whether you\'re launching or scaling, we make Shopify work for you.',
    keyFeatures: [
      'Custom Shopify theme development',
      'Shopify Plus implementations',
      'Custom app development',
      'Third-party integrations',
      'Migration services',
      'Performance optimization'
    ],
    badges: ['Shopify Partners', 'Plus Certified', 'Theme Experts', 'App Developers']
  },

  painPoints: [
    {
      icon: 'layout',
      title: 'Generic Theme Limitations',
      description: 'Your store looks like every other Shopify site. Template themes don\'t reflect your brand or provide the features you need.',
      stat: '85%',
      statLabel: 'of customers judge credibility by website design'
    },
    {
      icon: 'puzzle',
      title: 'App Overload',
      description: 'You\'ve installed dozens of apps that slow your site, conflict with each other, and cost a fortune in monthly fees.',
      stat: '42%',
      statLabel: 'of Shopify stores have 10+ apps causing slowdowns'
    },
    {
      icon: 'clock',
      title: 'Slow Performance',
      description: 'Heavy themes and excessive apps make your store slow, hurting conversions and frustrating customers.',
      stat: '70%',
      statLabel: 'of Shopify stores fail Core Web Vitals'
    },
    {
      icon: 'link',
      title: 'Integration Challenges',
      description: 'Your business tools don\'t connect properly with Shopify, creating manual work and data inconsistencies.',
      stat: '56%',
      statLabel: 'of merchants struggle with system integrations'
    },
    {
      icon: 'trending-down',
      title: 'Low Conversion Rates',
      description: 'Your store gets traffic but visitors aren\'t buying. The default checkout experience isn\'t optimized for your customers.',
      stat: '2.86%',
      statLabel: 'average Shopify conversion rate (often lower)'
    },
    {
      icon: 'lock',
      title: 'Outgrowing Standard Shopify',
      description: 'You need advanced features like checkout customization, B2B functionality, or multi-store that require Shopify Plus.',
      stat: '35%',
      statLabel: 'of growing brands need to upgrade to Plus'
    }
  ],

  solutions: [
    {
      icon: 'palette',
      title: 'Custom Theme Development',
      description: 'Unique, brand-aligned Shopify themes built from scratch or heavily customized for your specific needs.',
      highlights: [
        'Custom design implementation',
        'Shopify 2.0 theme architecture',
        'Section & block customization',
        'Mobile-optimized layouts',
        'Brand consistency',
        'Performance optimization'
      ]
    },
    {
      icon: 'code',
      title: 'Shopify Plus Development',
      description: 'Enterprise-grade Shopify implementations leveraging Plus-exclusive features for high-volume merchants.',
      highlights: [
        'Checkout extensibility',
        'Shopify Functions',
        'B2B & wholesale features',
        'Multi-location inventory',
        'Advanced automation',
        'Dedicated support integration'
      ]
    },
    {
      icon: 'box',
      title: 'Custom App Development',
      description: 'Private Shopify apps that add custom functionality without the overhead and limitations of third-party apps.',
      highlights: [
        'Custom functionality',
        'Admin interface extensions',
        'Storefront features',
        'Third-party integrations',
        'Performance-optimized',
        'No recurring app fees'
      ]
    },
    {
      icon: 'link',
      title: 'Integration Services',
      description: 'Connect Shopify seamlessly with your ERP, CRM, fulfillment, and other business systems.',
      highlights: [
        'ERP integration (NetSuite, SAP)',
        'CRM integration (Salesforce, HubSpot)',
        'Fulfillment/3PL connections',
        'Accounting sync',
        'Marketing platform integration',
        'Custom API development'
      ]
    },
    {
      icon: 'refresh-cw',
      title: 'Migration Services',
      description: 'Seamless migration from other platforms to Shopify with complete data transfer and SEO preservation.',
      highlights: [
        'Platform migration planning',
        'Product data migration',
        'Customer data transfer',
        'Order history import',
        'URL redirects & SEO',
        'Design recreation'
      ]
    },
    {
      icon: 'zap',
      title: 'Performance Optimization',
      description: 'Speed up your existing Shopify store with code optimization, app cleanup, and performance best practices.',
      highlights: [
        'Theme code optimization',
        'App audit & consolidation',
        'Image optimization',
        'Lazy loading implementation',
        'Core Web Vitals fixes',
        'Performance monitoring'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'search',
        title: 'Discovery & Strategy',
        description: 'Understand your business needs, current pain points, and goals to plan the optimal Shopify solution.',
        duration: '1 week',
        deliverables: [
          'Requirements documentation',
          'Technical specification',
          'App/integration recommendations',
          'Theme architecture plan',
          'Project timeline',
          'Budget estimate'
        ]
      },
      {
        icon: 'figma',
        title: 'Design',
        description: 'Create custom designs for your Shopify store that align with your brand and optimize for conversions.',
        duration: '2-3 weeks',
        deliverables: [
          'Homepage design',
          'Product page templates',
          'Collection page templates',
          'Cart & checkout design',
          'Mobile designs',
          'Design system'
        ]
      },
      {
        icon: 'code',
        title: 'Theme Development',
        description: 'Build your custom Shopify theme using modern 2.0 architecture and best practices.',
        duration: '3-6 weeks',
        deliverables: [
          'Custom theme build',
          'Section development',
          'Block configuration',
          'Metafield setup',
          'Liquid templates',
          'JavaScript functionality'
        ]
      },
      {
        icon: 'plug',
        title: 'Integrations & Apps',
        description: 'Set up required apps and build custom integrations to connect your business systems.',
        duration: '1-3 weeks',
        deliverables: [
          'App installation & config',
          'Custom app development',
          'API integrations',
          'Data sync setup',
          'Automation workflows',
          'Testing & validation'
        ]
      },
      {
        icon: 'package',
        title: 'Content & Launch Prep',
        description: 'Populate content, configure settings, and prepare for a smooth launch.',
        duration: '1-2 weeks',
        deliverables: [
          'Content population',
          'Product setup',
          'SEO configuration',
          'Payment setup',
          'Shipping configuration',
          'Testing & QA'
        ]
      },
      {
        icon: 'rocket',
        title: 'Launch & Optimization',
        description: 'Launch your store and provide ongoing support with performance optimization.',
        duration: 'Ongoing',
        deliverables: [
          'Go-live support',
          'DNS configuration',
          'Performance monitoring',
          'Bug fixes',
          'Conversion optimization',
          'Ongoing maintenance'
        ]
      }
    ],
    totalDuration: '8-16 weeks depending on scope'
  },

  benefits: [
    {
      icon: 'star',
      title: 'Unique Brand Experience',
      description: 'Stand out from competitors with a custom design that perfectly reflects your brand identity.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'custom to your brand'
    },
    {
      icon: 'zap',
      title: 'Faster Performance',
      description: 'Clean, optimized code delivers faster load times and better Core Web Vitals scores.',
      stat: '50',
      statSuffix: '%',
      statLabel: 'faster than average Shopify stores'
    },
    {
      icon: 'trending-up',
      title: 'Higher Conversions',
      description: 'Optimized user experience and checkout flow increase your conversion rate significantly.',
      stat: '30',
      statSuffix: '%',
      statLabel: 'average conversion rate improvement'
    },
    {
      icon: 'dollar-sign',
      title: 'Reduced App Costs',
      description: 'Custom development eliminates the need for multiple expensive third-party apps.',
      stat: '60',
      statSuffix: '%',
      statLabel: 'reduction in monthly app costs'
    },
    {
      icon: 'settings',
      title: 'Full Customization',
      description: 'No limitations—build exactly the functionality your business needs with custom development.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'tailored to your needs'
    },
    {
      icon: 'shield',
      title: 'Expert Support',
      description: 'Ongoing support from Shopify experts who know your store inside and out.',
      stat: '24',
      statSuffix: 'hr',
      statLabel: 'average response time'
    }
  ],

  techStack: [
    {
      name: 'Shopify Technologies',
      description: 'Core Shopify development technologies and tools.',
      technologies: [
        { name: 'Liquid', icon: '/icons/tech/shopify.svg', category: 'Templating', proficiency: 'expert' },
        { name: 'Shopify CLI', icon: '/icons/tech/shopify.svg', category: 'Development', proficiency: 'expert' },
        { name: 'Theme Kit', icon: '/icons/tech/shopify.svg', category: 'Development', proficiency: 'expert' },
        { name: 'Storefront API', icon: '/icons/tech/shopify.svg', category: 'API', proficiency: 'expert' },
        { name: 'Admin API', icon: '/icons/tech/shopify.svg', category: 'API', proficiency: 'expert' },
        { name: 'Shopify Functions', icon: '/icons/tech/shopify.svg', category: 'Customization', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Frontend Technologies',
      description: 'Modern frontend tools for Shopify development.',
      technologies: [
        { name: 'JavaScript', icon: '/icons/tech/javascript.svg', category: 'Language', proficiency: 'expert' },
        { name: 'Alpine.js', icon: '/icons/tech/alpinejs.svg', category: 'Framework', proficiency: 'expert' },
        { name: 'Tailwind CSS', icon: '/icons/tech/tailwind.svg', category: 'Styling', proficiency: 'expert' },
        { name: 'React', icon: '/icons/tech/react.svg', category: 'Library', proficiency: 'expert' },
        { name: 'Hydrogen', icon: '/icons/tech/shopify.svg', category: 'Headless', proficiency: 'advanced' },
        { name: 'Remix', icon: '/icons/tech/remix.svg', category: 'Framework', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Popular Integrations',
      description: 'Common tools we integrate with Shopify stores.',
      technologies: [
        { name: 'Klaviyo', icon: '/icons/tech/klaviyo.svg', category: 'Email', proficiency: 'expert' },
        { name: 'Recharge', icon: '/icons/tech/recharge.svg', category: 'Subscriptions', proficiency: 'expert' },
        { name: 'Gorgias', icon: '/icons/tech/gorgias.svg', category: 'Support', proficiency: 'expert' },
        { name: 'ShipStation', icon: '/icons/tech/shipstation.svg', category: 'Shipping', proficiency: 'expert' },
        { name: 'Yotpo', icon: '/icons/tech/yotpo.svg', category: 'Reviews', proficiency: 'advanced' },
        { name: 'Nosto', icon: '/icons/tech/nosto.svg', category: 'Personalization', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Development Tools',
      description: 'Tools we use for efficient Shopify development.',
      technologies: [
        { name: 'GitHub', icon: '/icons/tech/github.svg', category: 'Version Control', proficiency: 'expert' },
        { name: 'Figma', icon: '/icons/tech/figma.svg', category: 'Design', proficiency: 'expert' },
        { name: 'Postman', icon: '/icons/tech/postman.svg', category: 'API Testing', proficiency: 'expert' },
        { name: 'Lighthouse', icon: '/icons/tech/lighthouse.svg', category: 'Performance', proficiency: 'expert' },
        { name: 'GTmetrix', icon: '/icons/tech/gtmetrix.svg', category: 'Performance', proficiency: 'advanced' },
        { name: 'BrowserStack', icon: '/icons/tech/browserstack.svg', category: 'Testing', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Theme Customization',
        description: 'Customize an existing Shopify theme to match your brand and add specific features.',
        price: '$5,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Premium Theme Purchase', included: true },
          { name: 'Brand Customization', included: true },
          { name: 'Section Customization', included: true },
          { name: 'Mobile Optimization', included: true },
          { name: 'App Setup (up to 5)', included: true },
          { name: 'Basic SEO Setup', included: true },
          { name: '2-Week Timeline', included: true },
          { name: '30-Day Support', included: true }
        ],
        ctaText: 'Customize Theme',
        highlighted: false
      },
      {
        name: 'Custom Store Build',
        description: 'Fully custom Shopify store with unique design and tailored functionality.',
        price: '$20,000',
        priceNote: 'Starting price',
        badge: 'Most Popular',
        features: [
          { name: 'Custom Theme Design', included: true },
          { name: 'Custom Theme Development', included: true },
          { name: 'Unlimited Sections', included: true },
          { name: 'Performance Optimization', included: true },
          { name: 'App Integration', included: true },
          { name: 'Migration Support', included: true },
          { name: '8-12 Week Timeline', included: true },
          { name: '90-Day Support', included: true }
        ],
        ctaText: 'Build Custom Store',
        highlighted: true
      },
      {
        name: 'Shopify Plus',
        description: 'Enterprise Shopify Plus implementation with advanced customization and integrations.',
        price: '$50,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Plus Store Setup', included: true },
          { name: 'Checkout Customization', included: true },
          { name: 'Shopify Functions', included: true },
          { name: 'B2B/Wholesale Features', included: true },
          { name: 'Custom App Development', included: true },
          { name: 'ERP/CRM Integration', included: true },
          { name: 'Multi-Store Setup', included: true },
          { name: '12-Month Support', included: true }
        ],
        ctaText: 'Contact for Plus',
        highlighted: false
      }
    ],
    customNote: 'Need a specific Shopify solution? We offer custom app development, headless implementations with Hydrogen, and ongoing retainer support. Contact us for custom pricing.'
  },

  portfolio: [
    {
      title: 'Luxury Skincare Brand',
      client: 'Lumière Beauty',
      industry: 'Beauty & Cosmetics',
      description: 'Custom Shopify Plus store for premium skincare brand with focus on brand storytelling and product education.',
      challenge: 'Luxury brand needed premium online experience matching their high-end retail stores. Required custom quiz for product recommendations and seamless subscription integration.',
      solution: 'Built custom Shopify Plus theme with rich media storytelling, custom skin analysis quiz, Recharge subscription integration, and Klaviyo-powered personalization.',
      results: [
        '4.8% conversion rate',
        '45% subscription rate',
        '2.1s load time',
        '3x revenue growth'
      ],
      metrics: [
        { label: 'Conversion Rate', value: '4.8%' },
        { label: 'Subscription Rate', value: '45%' },
        { label: 'Load Time', value: '2.1s' },
        { label: 'Revenue Growth', value: '3x' }
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      tags: ['Shopify Plus', 'Beauty', 'Subscriptions', 'Custom Theme']
    },
    {
      title: 'Athletic Apparel Store',
      client: 'Peak Athletics',
      industry: 'Sportswear',
      description: 'High-performance Shopify store for growing athletic apparel brand with complex size/color variants.',
      challenge: 'Fast-growing brand needed scalable solution for thousands of SKUs with complex variant combinations. Required integration with 3PL and influencer tracking.',
      solution: 'Developed custom Shopify theme with advanced filtering, size recommendation tool, 3PL integration, and custom app for influencer attribution and discount codes.',
      results: [
        '200% traffic growth handled',
        '35% conversion increase',
        '65% mobile sales',
        '$2M monthly revenue'
      ],
      metrics: [
        { label: 'Traffic Growth', value: '200%' },
        { label: 'Conversion Increase', value: '35%' },
        { label: 'Mobile Sales', value: '65%' },
        { label: 'Monthly Revenue', value: '$2M' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['Shopify', 'Apparel', 'High Volume', 'Custom App']
    },
    {
      title: 'Gourmet Food Marketplace',
      client: 'Artisan Eats',
      industry: 'Food & Beverage',
      description: 'Multi-vendor Shopify marketplace for artisan food producers with complex shipping requirements.',
      challenge: 'Marketplace connecting specialty food producers needed multi-vendor functionality, split payments, and complex shipping rules for perishable items.',
      solution: 'Built Shopify Plus store with Multi-vendor app customization, Stripe Connect for split payments, custom shipping rules engine, and temperature-controlled fulfillment integration.',
      results: [
        '150 active vendors',
        '$500K monthly GMV',
        '4.7 customer rating',
        '25% repeat rate'
      ],
      metrics: [
        { label: 'Active Vendors', value: '150' },
        { label: 'Monthly GMV', value: '$500K' },
        { label: 'Customer Rating', value: '4.7★' },
        { label: 'Repeat Rate', value: '25%' }
      ],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      tags: ['Shopify Plus', 'Marketplace', 'Multi-Vendor', 'Food']
    },
    {
      title: 'Home Decor E-commerce',
      client: 'Modern Nest',
      industry: 'Home & Living',
      description: 'Visually stunning Shopify store for home decor brand with room visualization and AR features.',
      challenge: 'Home decor brand needed immersive shopping experience with room visualization, AR try-before-you-buy, and seamless integration with interior design services.',
      solution: 'Created custom Shopify theme with 3D product views, AR placement feature, room mood boards, and booking system for design consultations.',
      results: [
        '52% increase in conversions',
        '40% reduction in returns',
        '3.2s average session duration',
        '$1.5M quarterly revenue'
      ],
      metrics: [
        { label: 'Conversion Lift', value: '52%' },
        { label: 'Return Reduction', value: '40%' },
        { label: 'Session Duration', value: '3.2min' },
        { label: 'Quarterly Revenue', value: '$1.5M' }
      ],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['Shopify', 'Home Decor', 'AR Features', 'Custom Theme']
    }
  ],

  testimonials: [
    {
      quote: 'Our custom Shopify store finally matches the luxury experience of our physical stores. The team understood our brand and delivered beyond expectations.',
      author: 'Alexandra White',
      role: 'E-commerce Director',
      company: 'Lumière Beauty',
      rating: 5,
      location: 'New York, NY'
    },
    {
      quote: 'They built us a store that can handle our explosive growth. The custom app for influencer tracking alone has transformed our marketing.',
      author: 'Jason Park',
      role: 'Founder',
      company: 'Peak Athletics',
      rating: 5,
      location: 'Denver, CO'
    },
    {
      quote: 'Building a multi-vendor marketplace on Shopify seemed impossible until we found this team. They made it work beautifully.',
      author: 'Maria Santos',
      role: 'CEO',
      company: 'Artisan Eats',
      rating: 5,
      location: 'San Francisco, CA'
    }
  ],

  faqs: [
    {
      question: 'Should I use Shopify or Shopify Plus?',
      answer: 'Standard Shopify works great for most businesses up to several million in annual revenue. Consider Shopify Plus ($2,000+/month) when you need: checkout customization (discounts, upsells, custom fields), B2B/wholesale functionality, advanced automation with Shopify Flow, lower transaction fees (0.25% vs 2%), multiple expansion stores, or dedicated support. We\'ll help you determine the right fit based on your current needs and growth trajectory.'
    },
    {
      question: 'How long does Shopify store development take?',
      answer: 'Timeline depends on scope: Theme customization takes 2-4 weeks. Custom theme development takes 8-12 weeks. Shopify Plus implementations with custom apps and integrations take 12-20 weeks. We can often phase projects, launching core functionality first and adding features iteratively. Rush timelines are possible for additional investment.'
    },
    {
      question: 'Can you migrate my store from another platform?',
      answer: 'Yes, we regularly migrate stores from WooCommerce, Magento, BigCommerce, Squarespace, and custom platforms to Shopify. Our migration includes: complete product data with images and variants, customer accounts and order history, blog posts and pages, URL redirects for SEO preservation, and design recreation or improvement. Typical migrations take 4-8 weeks depending on data complexity.'
    },
    {
      question: 'Do you build custom Shopify apps?',
      answer: 'Yes, we develop custom private apps when third-party apps don\'t meet your needs or when you want to eliminate monthly app fees. Common custom apps we build include: unique product customizers, loyalty and rewards programs, subscription modifications, ERP/inventory integrations, customer portals, and wholesale/B2B functionality. Custom apps are owned by you with no recurring fees.'
    },
    {
      question: 'What about headless Shopify with Hydrogen?',
      answer: 'We offer headless Shopify development using Hydrogen (Shopify\'s React framework) for brands that need ultimate frontend flexibility while keeping Shopify\'s robust commerce backend. Headless is ideal when you need: extreme performance optimization, complex product configurations, unique interactive experiences, or integration with other content systems. It requires more investment but offers maximum flexibility.'
    },
    {
      question: 'How do you handle ongoing maintenance?',
      answer: 'We offer flexible support arrangements: hourly support for ad-hoc needs, monthly retainers for consistent support and small enhancements, and dedicated team arrangements for high-growth brands. Support includes: bug fixes and issue resolution, theme updates and compatibility, app management, performance monitoring, and strategic consultation. Most clients choose monthly retainers ranging from $1,500-$5,000 depending on needs.'
    }
  ],

  relatedServices: [
    {
      name: 'E-commerce Website Development',
      slug: 'ecommerce-website-development',
      description: 'Full-service e-commerce development for all platforms and custom solutions.',
      icon: 'shopping-cart'
    },
    {
      name: 'WooCommerce Development',
      slug: 'woocommerce-development',
      description: 'WordPress-based e-commerce for content-rich stores and flexibility.',
      icon: 'wordpress'
    },
    {
      name: 'Payment Gateway Integration',
      slug: 'payment-gateway-integration',
      description: 'Secure payment processing setup and optimization.',
      icon: 'credit-card'
    },
    {
      name: 'E-commerce Analytics',
      slug: 'ecommerce-analytics',
      description: 'Data-driven insights to optimize your Shopify store performance.',
      icon: 'bar-chart-2'
    }
  ],

  seo: {
    title: 'Shopify Development Services | Custom Shopify Store Development',
    description: 'Expert Shopify development services. Custom themes, Shopify Plus implementations, app development, and migrations by certified Shopify partners.',
    keywords: [
      'Shopify development',
      'Shopify developer',
      'custom Shopify theme',
      'Shopify Plus development',
      'Shopify store development',
      'Shopify app development',
      'Shopify migration',
      'Shopify experts',
      'Shopify partner',
      'Shopify customization'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Shopify Development Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      description: 'Expert Shopify development services including custom theme development, Shopify Plus implementations, app development, and platform migrations.'
    }
  }
};

export default shopifyDevelopmentData;

import { ServiceData } from '@/components/services/sections';

export const woocommerceDevelopmentData: ServiceData = {
  name: 'WooCommerce Development',
  slug: 'woocommerce-development',
  tagline: 'Build powerful, flexible online stores with WooCommerce that leverage WordPress\'s content capabilities and endless customization options',
  category: 'E-commerce Solutions',
  description: 'Our WooCommerce development services create custom e-commerce solutions that combine the flexibility of WordPress with powerful online selling capabilities. We build, customize, and optimize WooCommerce stores for businesses that need content-rich shopping experiences.',

  hero: {
    headline: 'WooCommerce Stores Built for Your Business',
    subheadline: 'Custom WooCommerce development that harnesses the power of WordPress for content-rich, highly customizable e-commerce experiences.',
    description: 'WooCommerce powers over 25% of all online stores because of its flexibility and WordPress integration. But that flexibility requires expertise to harness properly. Our WooCommerce developers create custom themes, build plugins, optimize performance, and integrate the tools your business needs. Get the best of content marketing and e-commerce in one powerful platform.',
    keyFeatures: [
      'Custom WooCommerce themes',
      'Plugin development & customization',
      'Performance optimization',
      'Payment & shipping integration',
      'Multi-vendor marketplaces',
      'Subscription & membership sites'
    ],
    badges: ['WooCommerce Experts', 'WordPress Developers', 'Plugin Specialists', 'Performance Optimizers']
  },

  painPoints: [
    {
      icon: 'clock',
      title: 'Slow Store Performance',
      description: 'Your WooCommerce store is painfully slow. Too many plugins, unoptimized images, and poor hosting make customers abandon before checkout.',
      stat: '40%',
      statLabel: 'of users abandon sites loading over 3 seconds'
    },
    {
      icon: 'puzzle',
      title: 'Plugin Conflicts',
      description: 'Your site breaks after updates. Incompatible plugins create conflicts, security vulnerabilities, and unpredictable behavior.',
      stat: '52%',
      statLabel: 'of WooCommerce issues caused by plugin conflicts'
    },
    {
      icon: 'shield-off',
      title: 'Security Vulnerabilities',
      description: 'WordPress sites are common hacking targets. Outdated plugins, weak configurations, and poor practices put your store at risk.',
      stat: '90%',
      statLabel: 'of hacked CMS sites are WordPress'
    },
    {
      icon: 'layout',
      title: 'Limited Theme Customization',
      description: 'Your theme doesn\'t do what you need. Customization attempts create messy code and make updates risky.',
      stat: '68%',
      statLabel: 'of merchants frustrated with theme limitations'
    },
    {
      icon: 'trending-down',
      title: 'Poor Mobile Experience',
      description: 'Your store doesn\'t work well on mobile devices. Navigation is difficult and checkout is frustrating on smartphones.',
      stat: '67%',
      statLabel: 'of e-commerce traffic from mobile devices'
    },
    {
      icon: 'database',
      title: 'Scaling Challenges',
      description: 'Your store slows to a crawl as products and traffic increase. Database bloat and hosting limitations restrict growth.',
      stat: '45%',
      statLabel: 'of WooCommerce stores have scaling issues'
    }
  ],

  solutions: [
    {
      icon: 'palette',
      title: 'Custom Theme Development',
      description: 'Unique WooCommerce themes built specifically for your brand and business requirements.',
      highlights: [
        'Custom design implementation',
        'Block editor integration',
        'WooCommerce template customization',
        'Mobile-responsive layouts',
        'Performance-optimized code',
        'Easy content management'
      ]
    },
    {
      icon: 'code',
      title: 'Plugin Development',
      description: 'Custom WooCommerce plugins that add exactly the functionality you need without bloating your site.',
      highlights: [
        'Custom functionality',
        'Third-party integrations',
        'Checkout modifications',
        'Product customizers',
        'Shipping calculators',
        'Pricing rules engines'
      ]
    },
    {
      icon: 'zap',
      title: 'Performance Optimization',
      description: 'Speed up your WooCommerce store with database optimization, caching, and code improvements.',
      highlights: [
        'Database optimization',
        'Caching implementation',
        'Plugin audit & cleanup',
        'Image optimization',
        'CDN integration',
        'Hosting optimization'
      ]
    },
    {
      icon: 'shield',
      title: 'Security Hardening',
      description: 'Protect your WooCommerce store from hackers, malware, and vulnerabilities.',
      highlights: [
        'Security audit',
        'Firewall configuration',
        'Malware scanning',
        'SSL implementation',
        'Regular updates',
        'Backup systems'
      ]
    },
    {
      icon: 'users',
      title: 'Multi-Vendor Marketplaces',
      description: 'Build marketplace platforms where multiple sellers can list and sell their products.',
      highlights: [
        'Vendor management',
        'Commission structures',
        'Vendor dashboards',
        'Product moderation',
        'Split payments',
        'Seller ratings & reviews'
      ]
    },
    {
      icon: 'repeat',
      title: 'Subscriptions & Memberships',
      description: 'Recurring revenue models with subscription products and membership access controls.',
      highlights: [
        'Subscription products',
        'Membership tiers',
        'Content restrictions',
        'Recurring billing',
        'Trial periods',
        'Member management'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'search',
        title: 'Discovery & Planning',
        description: 'Analyze your requirements, existing site (if any), and goals to plan the optimal WooCommerce solution.',
        duration: '1-2 weeks',
        deliverables: [
          'Requirements document',
          'Technical specification',
          'Plugin recommendations',
          'Hosting recommendations',
          'Site architecture',
          'Project timeline'
        ]
      },
      {
        icon: 'figma',
        title: 'Design',
        description: 'Create custom designs that align with your brand and optimize the shopping experience.',
        duration: '2-3 weeks',
        deliverables: [
          'Homepage design',
          'Shop page templates',
          'Product page templates',
          'Cart & checkout design',
          'Account pages',
          'Mobile designs'
        ]
      },
      {
        icon: 'code',
        title: 'Development',
        description: 'Build your custom WooCommerce theme and any required plugins or integrations.',
        duration: '4-8 weeks',
        deliverables: [
          'Custom theme development',
          'WooCommerce configuration',
          'Plugin development',
          'Payment integration',
          'Shipping setup',
          'Third-party integrations'
        ]
      },
      {
        icon: 'package',
        title: 'Content & Products',
        description: 'Populate your store with products and content, configure settings for launch.',
        duration: '1-2 weeks',
        deliverables: [
          'Product import',
          'Content migration',
          'SEO configuration',
          'Email setup',
          'Tax configuration',
          'Shipping rules'
        ]
      },
      {
        icon: 'check-circle',
        title: 'Testing & Optimization',
        description: 'Comprehensive testing and performance optimization before launch.',
        duration: '1-2 weeks',
        deliverables: [
          'Functional testing',
          'Payment testing',
          'Performance testing',
          'Security testing',
          'Mobile testing',
          'Browser testing'
        ]
      },
      {
        icon: 'rocket',
        title: 'Launch & Support',
        description: 'Deploy to production with ongoing maintenance and support.',
        duration: 'Ongoing',
        deliverables: [
          'Production deployment',
          'DNS configuration',
          'Performance monitoring',
          'Security monitoring',
          'Regular updates',
          'Ongoing support'
        ]
      }
    ],
    totalDuration: '10-18 weeks depending on complexity'
  },

  benefits: [
    {
      icon: 'code',
      title: 'Complete Flexibility',
      description: 'No limitations on customization. Build exactly what your business needs with full code access.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'customizable platform'
    },
    {
      icon: 'file-text',
      title: 'Content Marketing Power',
      description: 'WordPress\'s world-class blogging and content capabilities integrated with your store.',
      stat: '#1',
      statSuffix: '',
      statLabel: 'CMS for content marketing'
    },
    {
      icon: 'dollar-sign',
      title: 'Lower Total Cost',
      description: 'No monthly platform fees. Pay only for hosting and the plugins you actually need.',
      stat: '0',
      statSuffix: '%',
      statLabel: 'platform transaction fees'
    },
    {
      icon: 'database',
      title: 'Data Ownership',
      description: 'Own all your data. No platform lock-in. Export everything whenever you want.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'data ownership'
    },
    {
      icon: 'globe',
      title: 'SEO Advantages',
      description: 'WordPress\'s SEO-friendly structure combined with powerful content capabilities.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'better organic visibility potential'
    },
    {
      icon: 'users',
      title: 'Massive Ecosystem',
      description: 'Access to thousands of plugins, themes, and developers worldwide.',
      stat: '50K+',
      statSuffix: '',
      statLabel: 'plugins available'
    }
  ],

  techStack: [
    {
      name: 'WordPress & WooCommerce',
      description: 'Core platform technologies.',
      technologies: [
        { name: 'WordPress', icon: '/icons/tech/wordpress.svg', category: 'CMS', proficiency: 'expert' },
        { name: 'WooCommerce', icon: '/icons/tech/woocommerce.svg', category: 'E-commerce', proficiency: 'expert' },
        { name: 'PHP', icon: '/icons/tech/php.svg', category: 'Language', proficiency: 'expert' },
        { name: 'MySQL', icon: '/icons/tech/mysql.svg', category: 'Database', proficiency: 'expert' },
        { name: 'REST API', icon: '/icons/tech/api.svg', category: 'API', proficiency: 'expert' },
        { name: 'Gutenberg', icon: '/icons/tech/wordpress.svg', category: 'Editor', proficiency: 'expert' }
      ]
    },
    {
      name: 'Frontend Technologies',
      description: 'Modern frontend for WooCommerce development.',
      technologies: [
        { name: 'JavaScript', icon: '/icons/tech/javascript.svg', category: 'Language', proficiency: 'expert' },
        { name: 'React', icon: '/icons/tech/react.svg', category: 'Library', proficiency: 'expert' },
        { name: 'SCSS', icon: '/icons/tech/sass.svg', category: 'Styling', proficiency: 'expert' },
        { name: 'Tailwind CSS', icon: '/icons/tech/tailwind.svg', category: 'Styling', proficiency: 'expert' },
        { name: 'Alpine.js', icon: '/icons/tech/alpinejs.svg', category: 'Framework', proficiency: 'advanced' },
        { name: 'Webpack', icon: '/icons/tech/webpack.svg', category: 'Build', proficiency: 'expert' }
      ]
    },
    {
      name: 'Popular Plugins',
      description: 'Trusted plugins we work with regularly.',
      technologies: [
        { name: 'WooCommerce Subscriptions', icon: '/icons/tech/woocommerce.svg', category: 'Subscriptions', proficiency: 'expert' },
        { name: 'WooCommerce Memberships', icon: '/icons/tech/woocommerce.svg', category: 'Memberships', proficiency: 'expert' },
        { name: 'Dokan', icon: '/icons/tech/dokan.svg', category: 'Marketplace', proficiency: 'advanced' },
        { name: 'WPBakery', icon: '/icons/tech/wpbakery.svg', category: 'Builder', proficiency: 'expert' },
        { name: 'Elementor', icon: '/icons/tech/elementor.svg', category: 'Builder', proficiency: 'expert' },
        { name: 'WPML', icon: '/icons/tech/wpml.svg', category: 'Multilingual', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Hosting & Performance',
      description: 'Infrastructure for fast, secure WooCommerce.',
      technologies: [
        { name: 'WP Engine', icon: '/icons/tech/wpengine.svg', category: 'Hosting', proficiency: 'expert' },
        { name: 'Cloudways', icon: '/icons/tech/cloudways.svg', category: 'Hosting', proficiency: 'expert' },
        { name: 'Cloudflare', icon: '/icons/tech/cloudflare.svg', category: 'CDN', proficiency: 'expert' },
        { name: 'Redis', icon: '/icons/tech/redis.svg', category: 'Caching', proficiency: 'advanced' },
        { name: 'Varnish', icon: '/icons/tech/varnish.svg', category: 'Caching', proficiency: 'advanced' },
        { name: 'New Relic', icon: '/icons/tech/newrelic.svg', category: 'Monitoring', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'WooCommerce Setup',
        description: 'Professional WooCommerce setup with theme customization for businesses starting online.',
        price: '$8,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Premium Theme Setup', included: true },
          { name: 'Theme Customization', included: true },
          { name: 'WooCommerce Configuration', included: true },
          { name: 'Payment Gateway Setup', included: true },
          { name: 'Shipping Configuration', included: true },
          { name: 'Product Import (up to 100)', included: true },
          { name: 'SEO Plugin Setup', included: true },
          { name: '30-Day Support', included: true }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Custom Store',
        description: 'Fully custom WooCommerce store with unique design and tailored functionality.',
        price: '$25,000',
        priceNote: 'Starting price',
        badge: 'Most Popular',
        features: [
          { name: 'Custom Theme Design', included: true },
          { name: 'Custom Theme Development', included: true },
          { name: 'Plugin Customization', included: true },
          { name: 'Performance Optimization', included: true },
          { name: 'Third-Party Integrations', included: true },
          { name: 'Unlimited Products', included: true },
          { name: 'Migration Support', included: true },
          { name: '90-Day Support', included: true }
        ],
        ctaText: 'Build Custom Store',
        highlighted: true
      },
      {
        name: 'Enterprise Solution',
        description: 'Complex WooCommerce implementations with custom plugins and advanced features.',
        price: '$50,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Custom Architecture', included: true },
          { name: 'Custom Plugin Development', included: true },
          { name: 'Multi-Vendor/Marketplace', included: true },
          { name: 'ERP/CRM Integration', included: true },
          { name: 'Subscription/Membership', included: true },
          { name: 'High-Performance Hosting', included: true },
          { name: 'Security Hardening', included: true },
          { name: '12-Month Support', included: true }
        ],
        ctaText: 'Contact for Enterprise',
        highlighted: false
      }
    ],
    customNote: 'Need B2B functionality, multi-vendor marketplace, or complex integrations? Contact us for custom WooCommerce solutions tailored to your unique requirements.'
  },

  portfolio: [
    {
      title: 'Specialty Food E-commerce',
      client: 'Gourmet Pantry',
      industry: 'Food & Beverage',
      description: 'Content-rich WooCommerce store combining recipe blog with gourmet food sales.',
      challenge: 'Specialty food retailer needed to combine rich recipe content with product sales. Recipes should link to purchasable ingredients, and content should drive organic traffic.',
      solution: 'Built custom WooCommerce theme with recipe CPT linked to products, custom "shop this recipe" functionality, and optimized for food-focused SEO. Integrated with email marketing for recipe-based campaigns.',
      results: [
        '300% organic traffic growth',
        '45% of sales from recipes',
        '8K+ recipe subscribers',
        '$800K annual revenue'
      ],
      metrics: [
        { label: 'Organic Traffic', value: '+300%' },
        { label: 'Recipe-Driven Sales', value: '45%' },
        { label: 'Recipe Subscribers', value: '8K+' },
        { label: 'Annual Revenue', value: '$800K' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['WooCommerce', 'Food', 'Content Marketing', 'SEO']
    },
    {
      title: 'B2B Industrial Parts Store',
      client: 'MechParts Direct',
      industry: 'Industrial Supply',
      description: 'B2B WooCommerce store with customer-specific pricing and integration with legacy ERP.',
      challenge: 'Industrial parts distributor needed online ordering with customer-specific pricing, complex product configurations, and sync with decades-old ERP system.',
      solution: 'Developed custom WooCommerce B2B solution with customer price groups, bulk ordering tools, custom ERP integration plugin, and quote request functionality for large orders.',
      results: [
        '40% orders now online',
        '50% order processing reduction',
        '1000+ active B2B accounts',
        '$2M monthly online revenue'
      ],
      metrics: [
        { label: 'Online Orders', value: '40%' },
        { label: 'Processing Time', value: '-50%' },
        { label: 'B2B Accounts', value: '1000+' },
        { label: 'Monthly Revenue', value: '$2M' }
      ],
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop',
      tags: ['WooCommerce', 'B2B', 'ERP Integration', 'Industrial']
    },
    {
      title: 'Artisan Marketplace',
      client: 'MakerSpace Market',
      industry: 'Handmade & Crafts',
      description: 'Multi-vendor WooCommerce marketplace connecting artisan makers with buyers.',
      challenge: 'Platform to connect independent artisans with buyers, handling multi-vendor listings, commission-based payments, and vendor management at scale.',
      solution: 'Built WooCommerce multivendor marketplace using Dokan with extensive customization, Stripe Connect for payouts, custom vendor dashboard, and buyer protection features.',
      results: [
        '500+ active sellers',
        '$150K monthly GMV',
        '12K registered buyers',
        '4.6 marketplace rating'
      ],
      metrics: [
        { label: 'Active Sellers', value: '500+' },
        { label: 'Monthly GMV', value: '$150K' },
        { label: 'Registered Buyers', value: '12K' },
        { label: 'Rating', value: '4.6★' }
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      tags: ['WooCommerce', 'Marketplace', 'Multi-Vendor', 'Artisan']
    },
    {
      title: 'Pet Supplies Online Store',
      client: 'Happy Paws Shop',
      industry: 'Pet Retail',
      description: 'Feature-rich WooCommerce store for pet supplies with subscription and auto-ship capabilities.',
      challenge: 'Pet retailer needed recurring order functionality for consumables, pet profile management, and personalized product recommendations based on pet type and size.',
      solution: 'Built custom WooCommerce store with pet profile system, auto-ship subscriptions for food and supplies, personalized recommendations engine, and loyalty rewards program.',
      results: [
        '38% subscription adoption',
        '65% customer retention rate',
        '$1.2M annual revenue',
        '4.8 customer satisfaction'
      ],
      metrics: [
        { label: 'Subscription Rate', value: '38%' },
        { label: 'Retention Rate', value: '65%' },
        { label: 'Annual Revenue', value: '$1.2M' },
        { label: 'Satisfaction', value: '4.8★' }
      ],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      tags: ['WooCommerce', 'Pet Retail', 'Subscriptions', 'Personalization']
    }
  ],

  testimonials: [
    {
      quote: 'Combining our recipes with the shop was exactly what we needed. Our content now directly drives sales, and customers love finding everything in one place.',
      author: 'Julia Martinez',
      role: 'Founder',
      company: 'Gourmet Pantry',
      rating: 5,
      location: 'Chicago, IL'
    },
    {
      quote: 'The ERP integration works flawlessly. Our 30-year-old system now talks to our modern website, and customers can finally order online.',
      author: 'Robert Chen',
      role: 'IT Director',
      company: 'MechParts Direct',
      rating: 5,
      location: 'Detroit, MI'
    },
    {
      quote: 'They built us a marketplace from scratch. Managing 500 vendors is smooth, and our sellers love the custom dashboard.',
      author: 'Amanda Foster',
      role: 'CEO',
      company: 'MakerSpace Market',
      rating: 5,
      location: 'Austin, TX'
    }
  ],

  faqs: [
    {
      question: 'Why choose WooCommerce over Shopify?',
      answer: 'WooCommerce is ideal when you need: complete customization without platform limitations, powerful content/blogging capabilities, lower total cost (no monthly platform fees), full data ownership, complex B2B requirements, multi-vendor marketplace, or integration with existing WordPress site. Shopify is better for those wanting simplicity and less technical management. We\'ll help you choose the right platform for your specific needs.'
    },
    {
      question: 'How do you ensure WooCommerce performance?',
      answer: 'WooCommerce can be slow without proper optimization. Our approach includes: selecting quality managed WordPress hosting, implementing proper caching (page, object, database), minimizing plugins and using well-coded alternatives, optimizing images and assets, database optimization and cleanup, CDN integration, and ongoing monitoring. We guarantee sub-3-second load times for properly hosted stores.'
    },
    {
      question: 'Is WooCommerce secure?',
      answer: 'WooCommerce can be very secure with proper practices: keeping WordPress, WooCommerce, and plugins updated, using quality security plugins (Wordfence, Sucuri), implementing proper hosting security, SSL certificates for all transactions, regular security audits, and proper backup systems. We implement security best practices and can provide ongoing security monitoring.'
    },
    {
      question: 'Can you migrate from Shopify to WooCommerce?',
      answer: 'Yes, we regularly migrate stores from Shopify, Magento, BigCommerce, and other platforms. Migration includes: all product data with images and variants, customer accounts and order history, proper URL redirects for SEO preservation, design recreation or improvement, and integration reconfiguration. Typical migrations take 4-8 weeks depending on data complexity and customization requirements.'
    },
    {
      question: 'What ongoing maintenance does WooCommerce require?',
      answer: 'WooCommerce requires regular maintenance: WordPress core updates (monthly), WooCommerce updates (monthly), plugin updates (monthly), security monitoring (ongoing), database optimization (quarterly), and backup verification (weekly). Our maintenance plans handle all of this, typically ranging from $300-$1,500/month depending on site complexity and support needs.'
    },
    {
      question: 'Can WooCommerce scale for high volume?',
      answer: 'Yes, with proper architecture. WooCommerce powers stores doing millions in revenue. Scaling requirements include: quality managed hosting (WP Engine, Cloudways), proper caching implementation, database optimization, CDN for global delivery, and potentially headless architecture for extreme performance. We architect for scale from the start and can optimize existing stores for growth.'
    }
  ],

  relatedServices: [
    {
      name: 'E-commerce Website Development',
      slug: 'ecommerce-website-development',
      description: 'Full-service e-commerce development across all platforms.',
      icon: 'shopping-cart'
    },
    {
      name: 'Shopify Development',
      slug: 'shopify-development',
      description: 'Alternative e-commerce platform for different business needs.',
      icon: 'shopping-bag'
    },
    {
      name: 'Payment Gateway Integration',
      slug: 'payment-gateway-integration',
      description: 'Secure payment processing for WooCommerce stores.',
      icon: 'credit-card'
    },
    {
      name: 'WordPress Development',
      slug: 'wordpress-development',
      description: 'Custom WordPress development beyond e-commerce.',
      icon: 'code'
    }
  ],

  seo: {
    title: 'WooCommerce Development Services | Custom WooCommerce Store Development',
    description: 'Expert WooCommerce development services. Custom themes, plugin development, performance optimization, and migrations for WordPress e-commerce.',
    keywords: [
      'WooCommerce development',
      'WooCommerce developer',
      'custom WooCommerce theme',
      'WooCommerce plugin development',
      'WordPress e-commerce',
      'WooCommerce store development',
      'WooCommerce optimization',
      'WooCommerce migration',
      'WooCommerce experts',
      'WooCommerce customization'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'WooCommerce Development Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      description: 'Expert WooCommerce development services including custom theme development, plugin development, performance optimization, and platform migrations.'
    }
  }
};

export default woocommerceDevelopmentData;

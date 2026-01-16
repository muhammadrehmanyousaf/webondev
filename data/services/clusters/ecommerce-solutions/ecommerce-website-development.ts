import { ServiceData } from '@/components/services/sections';

export const ecommerceWebsiteDevelopmentData: ServiceData = {
  name: 'E-commerce Website Development',
  slug: 'ecommerce-website-development',
  tagline: 'Build high-converting online stores that deliver exceptional shopping experiences and scale with your business growth',
  category: 'E-commerce Solutions',
  description: 'Our e-commerce website development services create custom online stores optimized for conversions, performance, and scalability. We build end-to-end e-commerce solutions that drive sales, streamline operations, and deliver memorable customer experiences.',

  hero: {
    headline: 'E-commerce Websites That Convert Visitors Into Customers',
    subheadline: 'Custom-built online stores engineered for exceptional user experiences, lightning-fast performance, and maximum conversion rates that grow your revenue.',
    description: 'Your e-commerce website is your digital storefront—it needs to look stunning, perform flawlessly, and convert visitors into loyal customers. Our e-commerce developers combine design excellence with technical expertise to create online stores that stand out, load fast, and sell effectively. From product catalogs to checkout flows, we optimize every touchpoint for conversion.',
    keyFeatures: [
      'Custom e-commerce website design',
      'Mobile-first responsive development',
      'High-performance architecture',
      'Conversion-optimized checkout',
      'Secure payment processing',
      'Scalable infrastructure'
    ],
    badges: ['E-commerce Experts', 'Conversion Specialists', 'Full-Stack Developers', 'UX Designers']
  },

  painPoints: [
    {
      icon: 'trending-down',
      title: 'Low Conversion Rates',
      description: 'Your website gets traffic but visitors leave without purchasing. Poor user experience, slow load times, and friction-filled checkout are costing you sales.',
      stat: '69%',
      statLabel: 'average cart abandonment rate across e-commerce'
    },
    {
      icon: 'clock',
      title: 'Slow Website Performance',
      description: 'Pages take too long to load, especially on mobile. Every second of delay costs you customers and damages your search rankings.',
      stat: '53%',
      statLabel: 'of mobile users abandon sites loading over 3 seconds'
    },
    {
      icon: 'smartphone',
      title: 'Poor Mobile Experience',
      description: 'Your site doesn\'t work well on mobile devices where most shopping now happens. Pinching, zooming, and tiny buttons frustrate customers.',
      stat: '73%',
      statLabel: 'of e-commerce sales occur on mobile devices'
    },
    {
      icon: 'lock',
      title: 'Security Concerns',
      description: 'Customers don\'t trust your site with their payment information. Security vulnerabilities put your business and customers at risk.',
      stat: '17%',
      statLabel: 'of cart abandonment due to security concerns'
    },
    {
      icon: 'layers',
      title: 'Scaling Limitations',
      description: 'Your current platform can\'t handle growth. Traffic spikes crash your site, and adding products or features requires expensive workarounds.',
      stat: '40%',
      statLabel: 'of businesses outgrow their first e-commerce platform'
    },
    {
      icon: 'refresh-cw',
      title: 'Difficult Updates',
      description: 'Making changes to your store requires developer involvement. You can\'t easily update products, content, or promotions without technical help.',
      stat: '62%',
      statLabel: 'of merchants frustrated with platform inflexibility'
    }
  ],

  solutions: [
    {
      icon: 'layout',
      title: 'Custom Store Design',
      description: 'Unique, branded e-commerce experiences designed to convert. We create visually stunning stores that reflect your brand and engage customers.',
      highlights: [
        'Brand-aligned visual design',
        'Conversion-optimized layouts',
        'Mobile-first approach',
        'Intuitive navigation',
        'Product showcase optimization',
        'Trust signal integration'
      ]
    },
    {
      icon: 'zap',
      title: 'High-Performance Development',
      description: 'Lightning-fast stores built with modern architecture. We optimize every millisecond to maximize conversions and search rankings.',
      highlights: [
        'Server-side rendering',
        'Image optimization',
        'Code splitting & lazy loading',
        'CDN integration',
        'Database optimization',
        'Core Web Vitals excellence'
      ]
    },
    {
      icon: 'shopping-cart',
      title: 'Checkout Optimization',
      description: 'Friction-free checkout experiences that minimize abandonment. We streamline the path from cart to confirmation.',
      highlights: [
        'One-page checkout options',
        'Guest checkout support',
        'Multiple payment methods',
        'Address auto-complete',
        'Progress indicators',
        'Trust badges & security'
      ]
    },
    {
      icon: 'credit-card',
      title: 'Payment Integration',
      description: 'Secure, flexible payment processing that supports how customers want to pay. Multiple options to maximize conversion.',
      highlights: [
        'Credit card processing',
        'Digital wallets (Apple Pay, Google Pay)',
        'Buy now, pay later',
        'Subscription billing',
        'Multi-currency support',
        'PCI compliance'
      ]
    },
    {
      icon: 'database',
      title: 'Product & Inventory Management',
      description: 'Powerful backend systems for managing products, inventory, and orders efficiently at any scale.',
      highlights: [
        'Bulk product management',
        'Variant & option handling',
        'Inventory tracking',
        'Low stock alerts',
        'Product import/export',
        'Category management'
      ]
    },
    {
      icon: 'search',
      title: 'Search & Discovery',
      description: 'Help customers find exactly what they\'re looking for with intelligent search and filtering capabilities.',
      highlights: [
        'Faceted search & filters',
        'Auto-complete suggestions',
        'Product recommendations',
        'Recently viewed',
        'Wishlist functionality',
        'Compare products'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'clipboard-list',
        title: 'Discovery & Planning',
        description: 'Understand your business model, target customers, product catalog, and growth goals to plan the optimal e-commerce solution.',
        duration: '1-2 weeks',
        deliverables: [
          'Business requirements document',
          'Technical specification',
          'Platform recommendation',
          'Site architecture plan',
          'Integration requirements',
          'Project timeline'
        ]
      },
      {
        icon: 'figma',
        title: 'UX/UI Design',
        description: 'Create conversion-focused designs for your online store with user flows optimized for shopping and checkout.',
        duration: '2-3 weeks',
        deliverables: [
          'Wireframes & user flows',
          'Homepage design',
          'Product page templates',
          'Category page templates',
          'Checkout flow design',
          'Mobile designs'
        ]
      },
      {
        icon: 'code',
        title: 'Development',
        description: 'Build your e-commerce store with clean, performant code and all required functionality and integrations.',
        duration: '4-8 weeks',
        deliverables: [
          'Frontend development',
          'Backend/CMS setup',
          'Payment integration',
          'Shipping setup',
          'Third-party integrations',
          'Admin panel configuration'
        ]
      },
      {
        icon: 'package',
        title: 'Content & Products',
        description: 'Populate your store with products, content, and configure all settings for launch readiness.',
        duration: '1-2 weeks',
        deliverables: [
          'Product data import',
          'Content population',
          'SEO configuration',
          'Tax & shipping rules',
          'Email templates',
          'Policy pages'
        ]
      },
      {
        icon: 'check-circle',
        title: 'Testing & QA',
        description: 'Comprehensive testing across devices, browsers, and scenarios to ensure flawless shopping experience.',
        duration: '1-2 weeks',
        deliverables: [
          'Functional testing',
          'Payment testing',
          'Mobile testing',
          'Performance testing',
          'Security testing',
          'User acceptance testing'
        ]
      },
      {
        icon: 'rocket',
        title: 'Launch & Support',
        description: 'Go live with confidence and ongoing support to optimize performance and handle any issues.',
        duration: 'Ongoing',
        deliverables: [
          'Production deployment',
          'DNS & SSL setup',
          'Analytics configuration',
          'Performance monitoring',
          'Post-launch optimization',
          'Ongoing maintenance'
        ]
      }
    ],
    totalDuration: '10-18 weeks depending on complexity'
  },

  benefits: [
    {
      icon: 'trending-up',
      title: 'Higher Conversion Rates',
      description: 'Optimized user experience and checkout flow dramatically increase the percentage of visitors who complete purchases.',
      stat: '35',
      statSuffix: '%',
      statLabel: 'average conversion rate improvement'
    },
    {
      icon: 'zap',
      title: 'Faster Performance',
      description: 'Sub-second load times keep customers engaged and improve search rankings. Speed directly impacts revenue.',
      stat: '2x',
      statSuffix: '',
      statLabel: 'faster than industry average'
    },
    {
      icon: 'smartphone',
      title: 'Mobile Excellence',
      description: 'Flawless mobile experience captures the majority of e-commerce traffic with touch-optimized interfaces.',
      stat: '50',
      statSuffix: '%',
      statLabel: 'increase in mobile conversions'
    },
    {
      icon: 'shield',
      title: 'Enhanced Security',
      description: 'PCI-compliant infrastructure and security best practices protect your business and build customer trust.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'PCI DSS compliance'
    },
    {
      icon: 'bar-chart-2',
      title: 'Scalable Growth',
      description: 'Architecture designed to handle 10x traffic without breaking a sweat. Grow without platform limitations.',
      stat: '10x',
      statSuffix: '',
      statLabel: 'traffic handling capacity'
    },
    {
      icon: 'clock',
      title: 'Operational Efficiency',
      description: 'Streamlined backend and automation reduce manual work and let you focus on growing your business.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'reduction in manual operations'
    }
  ],

  techStack: [
    {
      name: 'Frontend Frameworks',
      description: 'Modern frameworks for fast, interactive shopping experiences.',
      technologies: [
        { name: 'Next.js', icon: '/icons/tech/nextjs.svg', category: 'Framework', proficiency: 'expert' },
        { name: 'React', icon: '/icons/tech/react.svg', category: 'Library', proficiency: 'expert' },
        { name: 'Vue.js', icon: '/icons/tech/vue.svg', category: 'Framework', proficiency: 'advanced' },
        { name: 'Nuxt', icon: '/icons/tech/nuxt.svg', category: 'Framework', proficiency: 'advanced' },
        { name: 'TypeScript', icon: '/icons/tech/typescript.svg', category: 'Language', proficiency: 'expert' },
        { name: 'Tailwind CSS', icon: '/icons/tech/tailwind.svg', category: 'Styling', proficiency: 'expert' }
      ]
    },
    {
      name: 'E-commerce Platforms',
      description: 'Battle-tested platforms for different business needs.',
      technologies: [
        { name: 'Shopify', icon: '/icons/tech/shopify.svg', category: 'Platform', proficiency: 'expert' },
        { name: 'WooCommerce', icon: '/icons/tech/woocommerce.svg', category: 'Platform', proficiency: 'expert' },
        { name: 'Magento', icon: '/icons/tech/magento.svg', category: 'Platform', proficiency: 'advanced' },
        { name: 'BigCommerce', icon: '/icons/tech/bigcommerce.svg', category: 'Platform', proficiency: 'advanced' },
        { name: 'Medusa', icon: '/icons/tech/medusa.svg', category: 'Headless', proficiency: 'expert' },
        { name: 'Saleor', icon: '/icons/tech/saleor.svg', category: 'Headless', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Payment & Shipping',
      description: 'Integrations for payment processing and fulfillment.',
      technologies: [
        { name: 'Stripe', icon: '/icons/tech/stripe.svg', category: 'Payments', proficiency: 'expert' },
        { name: 'PayPal', icon: '/icons/tech/paypal.svg', category: 'Payments', proficiency: 'expert' },
        { name: 'Square', icon: '/icons/tech/square.svg', category: 'Payments', proficiency: 'advanced' },
        { name: 'ShipStation', icon: '/icons/tech/shipstation.svg', category: 'Shipping', proficiency: 'expert' },
        { name: 'EasyPost', icon: '/icons/tech/easypost.svg', category: 'Shipping', proficiency: 'advanced' },
        { name: 'Afterpay', icon: '/icons/tech/afterpay.svg', category: 'BNPL', proficiency: 'expert' }
      ]
    },
    {
      name: 'Analytics & Marketing',
      description: 'Tools for tracking performance and driving growth.',
      technologies: [
        { name: 'Google Analytics 4', icon: '/icons/tech/google-analytics.svg', category: 'Analytics', proficiency: 'expert' },
        { name: 'Klaviyo', icon: '/icons/tech/klaviyo.svg', category: 'Email', proficiency: 'expert' },
        { name: 'Segment', icon: '/icons/tech/segment.svg', category: 'CDP', proficiency: 'advanced' },
        { name: 'Hotjar', icon: '/icons/tech/hotjar.svg', category: 'Behavior', proficiency: 'expert' },
        { name: 'Google Ads', icon: '/icons/tech/google.svg', category: 'Advertising', proficiency: 'advanced' },
        { name: 'Meta Pixel', icon: '/icons/tech/meta.svg', category: 'Advertising', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Starter Store',
        description: 'Essential e-commerce for small businesses launching online sales.',
        price: '$15,000',
        priceNote: 'One-time investment',
        features: [
          { name: 'Up to 100 Products', included: true },
          { name: 'Custom Theme Design', included: true },
          { name: 'Mobile Responsive', included: true },
          { name: 'Payment Integration', included: true },
          { name: 'Basic SEO Setup', included: true },
          { name: 'Product Import', included: true },
          { name: '30-Day Support', included: true },
          { name: 'Advanced Features', included: false }
        ],
        ctaText: 'Start Selling Online',
        highlighted: false
      },
      {
        name: 'Growth Store',
        description: 'Full-featured e-commerce for established businesses scaling online.',
        price: '$35,000',
        priceNote: 'One-time investment',
        badge: 'Most Popular',
        features: [
          { name: 'Unlimited Products', included: true },
          { name: 'Custom Design & UX', included: true },
          { name: 'Advanced Checkout', included: true },
          { name: 'Multiple Payment Options', included: true },
          { name: 'Shipping Integration', included: true },
          { name: 'Email Marketing Setup', included: true },
          { name: 'Analytics Dashboard', included: true },
          { name: '90-Day Support', included: true }
        ],
        ctaText: 'Build Growth Store',
        highlighted: true
      },
      {
        name: 'Enterprise Commerce',
        description: 'Custom e-commerce solutions for high-volume businesses with complex needs.',
        price: '$75,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Custom Architecture', included: true },
          { name: 'Headless Commerce', included: true },
          { name: 'Multi-Channel Selling', included: true },
          { name: 'ERP/CRM Integration', included: true },
          { name: 'Advanced Personalization', included: true },
          { name: 'Custom Checkout Flow', included: true },
          { name: 'Performance SLA', included: true },
          { name: '12-Month Support', included: true }
        ],
        ctaText: 'Contact for Enterprise',
        highlighted: false
      }
    ],
    customNote: 'Need specific functionality like B2B portals, multi-vendor marketplaces, or subscription commerce? Contact us for custom e-commerce solutions tailored to your business model.'
  },

  portfolio: [
    {
      title: 'Fashion DTC Brand Launch',
      client: 'Urban Thread',
      industry: 'Fashion & Apparel',
      description: 'Custom Shopify Plus store for direct-to-consumer fashion brand with focus on mobile experience and brand storytelling.',
      challenge: 'Launching new fashion brand needed a premium online presence that could handle anticipated traffic spikes during marketing campaigns and deliver brand experience.',
      solution: 'Built custom Shopify Plus store with headless frontend using Next.js, optimized for mobile-first shopping, integrated with Klaviyo for email marketing and influencer tracking.',
      results: [
        '$1.2M first-month revenue',
        '4.2% conversion rate',
        '1.8s average load time',
        '85% mobile traffic handled'
      ],
      metrics: [
        { label: 'First Month Revenue', value: '$1.2M' },
        { label: 'Conversion Rate', value: '4.2%' },
        { label: 'Mobile Traffic', value: '85%' },
        { label: 'Load Time', value: '1.8s' }
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      tags: ['Shopify Plus', 'Headless', 'Fashion', 'DTC']
    },
    {
      title: 'B2B Industrial Supplies Portal',
      client: 'ProSupply Industrial',
      industry: 'Industrial Distribution',
      description: 'Complex B2B e-commerce platform with customer-specific pricing, bulk ordering, and ERP integration.',
      challenge: 'B2B distributor needed to digitize sales with customer-specific pricing, complex product configurations, and integration with legacy ERP system.',
      solution: 'Built custom Magento 2 solution with customer group pricing, quote functionality, bulk order tools, and real-time inventory sync with SAP. Implemented punchout catalog for enterprise customers.',
      results: [
        '60% order digitization',
        '35% average order value increase',
        '50% faster order processing',
        '200+ enterprise accounts'
      ],
      metrics: [
        { label: 'Digital Orders', value: '60%' },
        { label: 'AOV Increase', value: '35%' },
        { label: 'Processing Speed', value: '50%' },
        { label: 'Enterprise Accounts', value: '200+' }
      ],
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop',
      tags: ['B2B', 'Magento', 'ERP Integration', 'Industrial']
    },
    {
      title: 'Subscription Box Platform',
      client: 'CraftBox Monthly',
      industry: 'Subscription Commerce',
      description: 'Custom subscription e-commerce platform with flexible plans, skip/pause functionality, and personalization.',
      challenge: 'Subscription box company outgrew their platform. Needed flexible subscription management, personalization capabilities, and better customer portal.',
      solution: 'Built headless commerce solution using Medusa with custom subscription engine, React customer portal, and integration with fulfillment partners for automated box customization.',
      results: [
        '45% churn reduction',
        '30% LTV increase',
        '15K active subscribers',
        '4.8 app store rating'
      ],
      metrics: [
        { label: 'Churn Reduction', value: '45%' },
        { label: 'LTV Increase', value: '30%' },
        { label: 'Active Subscribers', value: '15K' },
        { label: 'Customer Rating', value: '4.8★' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['Subscription', 'Headless', 'Custom Platform', 'DTC']
    },
    {
      title: 'Luxury Goods Marketplace',
      client: 'Prestige Collective',
      industry: 'Luxury Retail',
      description: 'Multi-vendor luxury marketplace connecting premium brands with discerning customers worldwide.',
      challenge: 'Luxury consortium needed a curated marketplace that maintained brand prestige while enabling multi-vendor operations with authentication and white-glove fulfillment.',
      solution: 'Built custom marketplace platform with vendor onboarding, product authentication workflow, premium checkout experience, and integration with luxury logistics partners.',
      results: [
        '$3.5M GMV first quarter',
        '150+ luxury brands',
        '2.8% take rate achieved',
        '98% authentication accuracy'
      ],
      metrics: [
        { label: 'Quarterly GMV', value: '$3.5M' },
        { label: 'Brands Onboarded', value: '150+' },
        { label: 'Take Rate', value: '2.8%' },
        { label: 'Auth Accuracy', value: '98%' }
      ],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      tags: ['Marketplace', 'Luxury', 'Multi-Vendor', 'Authentication']
    }
  ],

  testimonials: [
    {
      quote: 'Our new store launched to record sales. The mobile experience is incredible—customers comment on how smooth the shopping experience is.',
      author: 'Sarah Chen',
      role: 'Founder',
      company: 'Urban Thread',
      rating: 5,
      location: 'Los Angeles, CA'
    },
    {
      quote: 'They understood our complex B2B requirements. The integration with our ERP was seamless, and our sales team loves the new tools.',
      author: 'Michael Torres',
      role: 'VP of Digital',
      company: 'ProSupply Industrial',
      rating: 5,
      location: 'Houston, TX'
    },
    {
      quote: 'Our subscriber retention improved dramatically. The customer portal they built gives subscribers the control they want, which keeps them loyal.',
      author: 'Emma Johnson',
      role: 'CEO',
      company: 'CraftBox Monthly',
      rating: 5,
      location: 'Portland, OR'
    }
  ],

  faqs: [
    {
      question: 'Which e-commerce platform should I use?',
      answer: 'The right platform depends on your specific needs: Shopify is excellent for most DTC brands with its ease of use and ecosystem. WooCommerce works well for content-heavy sites or WordPress users. Magento suits complex B2B requirements. For ultimate flexibility, headless solutions like Medusa or Saleor allow custom frontends with powerful commerce backends. We\'ll recommend the best fit based on your products, budget, technical requirements, and growth plans.'
    },
    {
      question: 'How long does it take to build an e-commerce website?',
      answer: 'Timeline varies based on complexity: a basic store with template customization takes 6-8 weeks; a custom-designed store with standard features takes 10-14 weeks; complex builds with custom functionality, integrations, or headless architecture take 14-20+ weeks. We\'ll provide a detailed timeline after understanding your requirements. We can also phase development, launching core functionality first and adding features iteratively.'
    },
    {
      question: 'What\'s included in ongoing support?',
      answer: 'Our support packages include: security updates and patches, platform and plugin updates, bug fixes and issue resolution, performance monitoring, basic content updates, and priority response times. We also offer enhanced support with monthly optimization reviews, conversion rate optimization, feature enhancements, and strategic consultation. Most clients choose monthly retainer arrangements for consistent support.'
    },
    {
      question: 'How do you handle payment security and PCI compliance?',
      answer: 'We implement payment security best practices: using PCI-compliant payment processors (Stripe, PayPal) that handle card data so your site never stores sensitive information (reducing PCI scope), enabling SSL/TLS encryption across the site, implementing fraud detection tools, following secure coding practices, and conducting security testing. This approach provides strong security while minimizing compliance burden.'
    },
    {
      question: 'Can you migrate from our existing platform?',
      answer: 'Yes, we regularly migrate stores from platforms like Magento, BigCommerce, custom solutions, and other platforms. Our migration process includes: complete data export (products, customers, orders, reviews), URL mapping and redirects for SEO preservation, design recreation or improvement, integration reconfiguration, and thorough testing. We ensure zero data loss and minimal disruption to operations.'
    },
    {
      question: 'How do you optimize for conversions?',
      answer: 'Conversion optimization is built into our process: streamlined checkout with minimal steps, mobile-first design for touch interactions, fast page loads (targeting under 2 seconds), trust signals and security badges, clear CTAs and intuitive navigation, product recommendations and upsells, abandoned cart recovery setup, and A/B testing capabilities for ongoing optimization. We also set up analytics to track conversion funnels and identify opportunities.'
    }
  ],

  relatedServices: [
    {
      name: 'Shopify Development',
      slug: 'shopify-development',
      description: 'Expert Shopify store development for businesses choosing the leading e-commerce platform.',
      icon: 'shopping-bag'
    },
    {
      name: 'Payment Gateway Integration',
      slug: 'payment-gateway-integration',
      description: 'Secure payment processing integration for seamless customer transactions.',
      icon: 'credit-card'
    },
    {
      name: 'Conversion Optimization',
      slug: 'conversion-optimization',
      description: 'Data-driven optimization to increase conversion rates and revenue.',
      icon: 'trending-up'
    },
    {
      name: 'E-commerce Analytics',
      slug: 'ecommerce-analytics',
      description: 'Comprehensive analytics setup to understand customer behavior and drive growth.',
      icon: 'bar-chart-2'
    }
  ],

  seo: {
    title: 'E-commerce Website Development Services | Custom Online Store Development',
    description: 'Custom e-commerce website development services. Build high-converting online stores with expert design, fast performance, and scalable architecture.',
    keywords: [
      'e-commerce website development',
      'online store development',
      'e-commerce development services',
      'custom e-commerce website',
      'e-commerce web design',
      'online shop development',
      'e-commerce solutions',
      'build online store',
      'e-commerce developers',
      'shopping website development'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'E-commerce Website Development',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      description: 'Custom e-commerce website development services delivering high-converting online stores with exceptional user experience and scalable architecture.'
    }
  }
};

export default ecommerceWebsiteDevelopmentData;

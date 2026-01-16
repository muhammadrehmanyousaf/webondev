import { ServiceData } from '@/components/services/sections';

export const paymentGatewayIntegrationData: ServiceData = {
  name: 'Payment Gateway Integration',
  slug: 'payment-gateway-integration',
  tagline: 'Seamless, secure payment processing that maximizes conversions and supports how your customers want to pay',
  category: 'E-commerce Solutions',
  description: 'Our payment gateway integration services ensure your e-commerce store accepts payments securely and efficiently. We integrate leading payment processors, implement multiple payment methods, and optimize checkout for maximum conversion rates.',

  hero: {
    headline: 'Secure Payment Integration That Converts',
    subheadline: 'Expert payment gateway implementation that offers customers their preferred payment methods while maximizing security and minimizing cart abandonment.',
    description: 'Payment friction kills conversions. Every extra step, every unsupported payment method, every security concern costs you customers. Our payment integration experts implement seamless, secure payment solutions that support credit cards, digital wallets, buy now pay later, and more. We optimize the entire payment experience to maximize conversions while ensuring PCI compliance.',
    keyFeatures: [
      'Payment gateway integration',
      'Multiple payment methods',
      'PCI compliance implementation',
      'Fraud prevention setup',
      'Subscription billing',
      'International payments'
    ],
    badges: ['Payment Specialists', 'PCI Compliance', 'Fraud Prevention', 'Multi-Currency']
  },

  painPoints: [
    {
      icon: 'x-circle',
      title: 'Cart Abandonment at Checkout',
      description: 'Customers add to cart but leave at payment. Missing payment methods, security concerns, or complicated checkout cost you sales.',
      stat: '18%',
      statLabel: 'of abandonment due to payment/checkout issues'
    },
    {
      icon: 'credit-card',
      title: 'Limited Payment Options',
      description: 'You only accept credit cards while customers want Apple Pay, PayPal, or buy now pay later options. You\'re losing sales to competitors.',
      stat: '70%',
      statLabel: 'of customers want multiple payment options'
    },
    {
      icon: 'globe',
      title: 'International Payment Challenges',
      description: 'Selling globally but can\'t accept local payment methods or currencies. International customers abandon when they can\'t pay their way.',
      stat: '50%',
      statLabel: 'of international sales lost to payment friction'
    },
    {
      icon: 'shield-off',
      title: 'Fraud & Chargebacks',
      description: 'Fraudulent transactions and chargebacks eat into margins. Manual review processes can\'t keep up with fraud attempts.',
      stat: '1.5%',
      statLabel: 'average e-commerce fraud rate'
    },
    {
      icon: 'lock',
      title: 'PCI Compliance Concerns',
      description: 'Handling credit card data creates compliance obligations you\'re not equipped to manage. Security gaps put your business at risk.',
      stat: '$150K',
      statLabel: 'average cost of PCI non-compliance penalty'
    },
    {
      icon: 'dollar-sign',
      title: 'High Processing Fees',
      description: 'Payment processing costs are eating into margins. You\'re paying more than necessary due to poor setup or wrong processor.',
      stat: '0.5-1%',
      statLabel: 'potential savings with optimized setup'
    }
  ],

  solutions: [
    {
      icon: 'credit-card',
      title: 'Payment Gateway Setup',
      description: 'Professional integration of leading payment gateways configured for your business needs and optimized for conversions.',
      highlights: [
        'Stripe integration',
        'PayPal & Braintree',
        'Square integration',
        'Authorize.net setup',
        'Adyen for enterprise',
        'Custom gateway integration'
      ]
    },
    {
      icon: 'smartphone',
      title: 'Digital Wallet Integration',
      description: 'Enable fast checkout with digital wallets that customers already use and trust.',
      highlights: [
        'Apple Pay',
        'Google Pay',
        'Samsung Pay',
        'PayPal Express',
        'Shop Pay',
        'Amazon Pay'
      ]
    },
    {
      icon: 'calendar',
      title: 'Buy Now, Pay Later',
      description: 'Increase average order value and conversion with flexible payment options.',
      highlights: [
        'Klarna integration',
        'Affirm setup',
        'Afterpay/Clearpay',
        'Sezzle integration',
        'PayPal Pay Later',
        'Zip integration'
      ]
    },
    {
      icon: 'repeat',
      title: 'Subscription Billing',
      description: 'Recurring payment infrastructure for subscription-based business models.',
      highlights: [
        'Recurring billing setup',
        'Plan management',
        'Payment retry logic',
        'Dunning management',
        'Proration handling',
        'Usage-based billing'
      ]
    },
    {
      icon: 'globe',
      title: 'International Payments',
      description: 'Accept payments globally with multi-currency and local payment method support.',
      highlights: [
        'Multi-currency processing',
        'Dynamic currency conversion',
        'Local payment methods',
        'Cross-border optimization',
        'Tax & compliance',
        'Regional gateway routing'
      ]
    },
    {
      icon: 'shield',
      title: 'Security & Fraud Prevention',
      description: 'Protect your business and customers with robust security and fraud prevention.',
      highlights: [
        'PCI compliance setup',
        'Fraud detection rules',
        '3D Secure implementation',
        'Address verification',
        'Risk scoring',
        'Chargeback management'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'clipboard-list',
        title: 'Requirements Analysis',
        description: 'Understand your payment needs, transaction volume, customer base, and integration requirements.',
        duration: '1 week',
        deliverables: [
          'Payment requirements',
          'Volume analysis',
          'Gateway recommendations',
          'Compliance requirements',
          'Integration specification',
          'Cost projections'
        ]
      },
      {
        icon: 'settings',
        title: 'Gateway Configuration',
        description: 'Set up payment gateway accounts and configure optimal settings for your business.',
        duration: '1 week',
        deliverables: [
          'Account setup',
          'Merchant configuration',
          'API credentials',
          'Webhook setup',
          'Test environment',
          'Risk settings'
        ]
      },
      {
        icon: 'code',
        title: 'Integration Development',
        description: 'Implement payment gateway integration with your e-commerce platform.',
        duration: '2-4 weeks',
        deliverables: [
          'Gateway integration',
          'Checkout optimization',
          'Payment methods',
          'Error handling',
          'Webhook handlers',
          'Admin functionality'
        ]
      },
      {
        icon: 'shield',
        title: 'Security Implementation',
        description: 'Implement security measures and ensure PCI compliance.',
        duration: '1-2 weeks',
        deliverables: [
          'SSL/TLS setup',
          'PCI compliance',
          'Fraud rules',
          '3D Secure',
          'Tokenization',
          'Security audit'
        ]
      },
      {
        icon: 'check-circle',
        title: 'Testing',
        description: 'Comprehensive testing of all payment scenarios and edge cases.',
        duration: '1-2 weeks',
        deliverables: [
          'Transaction testing',
          'Refund testing',
          'Error scenario testing',
          'Multi-currency testing',
          'Mobile testing',
          'Load testing'
        ]
      },
      {
        icon: 'rocket',
        title: 'Launch & Monitoring',
        description: 'Go live with payment processing and establish monitoring.',
        duration: 'Ongoing',
        deliverables: [
          'Production activation',
          'Transaction monitoring',
          'Fraud monitoring',
          'Performance tracking',
          'Issue resolution',
          'Ongoing optimization'
        ]
      }
    ],
    totalDuration: '6-10 weeks for comprehensive implementation'
  },

  benefits: [
    {
      icon: 'trending-up',
      title: 'Higher Conversion Rates',
      description: 'More payment options and smoother checkout significantly increase completed purchases.',
      stat: '35',
      statSuffix: '%',
      statLabel: 'average conversion rate improvement'
    },
    {
      icon: 'shopping-cart',
      title: 'Increased Average Order',
      description: 'BNPL and flexible payment options encourage customers to buy more.',
      stat: '45',
      statSuffix: '%',
      statLabel: 'AOV increase with BNPL'
    },
    {
      icon: 'globe',
      title: 'Global Reach',
      description: 'Accept payments from customers worldwide in their preferred currency and method.',
      stat: '130+',
      statSuffix: '',
      statLabel: 'currencies supported'
    },
    {
      icon: 'shield',
      title: 'Fraud Protection',
      description: 'Advanced fraud prevention reduces chargebacks and protects revenue.',
      stat: '80',
      statSuffix: '%',
      statLabel: 'fraud reduction achievable'
    },
    {
      icon: 'check-circle',
      title: 'PCI Compliance',
      description: 'Proper implementation reduces PCI scope and compliance burden.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'PCI compliant setup'
    },
    {
      icon: 'dollar-sign',
      title: 'Lower Processing Costs',
      description: 'Optimized gateway configuration and routing reduces payment processing fees.',
      stat: '15',
      statSuffix: '%',
      statLabel: 'average processing cost savings'
    }
  ],

  techStack: [
    {
      name: 'Payment Gateways',
      description: 'Leading payment processors we integrate.',
      technologies: [
        { name: 'Stripe', icon: '/icons/tech/stripe.svg', category: 'Gateway', proficiency: 'expert' },
        { name: 'PayPal/Braintree', icon: '/icons/tech/paypal.svg', category: 'Gateway', proficiency: 'expert' },
        { name: 'Square', icon: '/icons/tech/square.svg', category: 'Gateway', proficiency: 'expert' },
        { name: 'Adyen', icon: '/icons/tech/adyen.svg', category: 'Gateway', proficiency: 'advanced' },
        { name: 'Authorize.net', icon: '/icons/tech/authorizenet.svg', category: 'Gateway', proficiency: 'expert' },
        { name: 'Worldpay', icon: '/icons/tech/worldpay.svg', category: 'Gateway', proficiency: 'advanced' }
      ]
    },
    {
      name: 'BNPL Providers',
      description: 'Buy now, pay later services we integrate.',
      technologies: [
        { name: 'Klarna', icon: '/icons/tech/klarna.svg', category: 'BNPL', proficiency: 'expert' },
        { name: 'Affirm', icon: '/icons/tech/affirm.svg', category: 'BNPL', proficiency: 'expert' },
        { name: 'Afterpay', icon: '/icons/tech/afterpay.svg', category: 'BNPL', proficiency: 'expert' },
        { name: 'Sezzle', icon: '/icons/tech/sezzle.svg', category: 'BNPL', proficiency: 'advanced' },
        { name: 'Zip', icon: '/icons/tech/zip.svg', category: 'BNPL', proficiency: 'advanced' },
        { name: 'PayPal Pay Later', icon: '/icons/tech/paypal.svg', category: 'BNPL', proficiency: 'expert' }
      ]
    },
    {
      name: 'Subscription Platforms',
      description: 'Recurring billing solutions we implement.',
      technologies: [
        { name: 'Stripe Billing', icon: '/icons/tech/stripe.svg', category: 'Subscriptions', proficiency: 'expert' },
        { name: 'Recurly', icon: '/icons/tech/recurly.svg', category: 'Subscriptions', proficiency: 'expert' },
        { name: 'Chargebee', icon: '/icons/tech/chargebee.svg', category: 'Subscriptions', proficiency: 'advanced' },
        { name: 'Recharge', icon: '/icons/tech/recharge.svg', category: 'Subscriptions', proficiency: 'expert' },
        { name: 'Bold Subscriptions', icon: '/icons/tech/bold.svg', category: 'Subscriptions', proficiency: 'advanced' },
        { name: 'Zuora', icon: '/icons/tech/zuora.svg', category: 'Subscriptions', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Fraud Prevention',
      description: 'Security and fraud prevention tools.',
      technologies: [
        { name: 'Stripe Radar', icon: '/icons/tech/stripe.svg', category: 'Fraud', proficiency: 'expert' },
        { name: 'Signifyd', icon: '/icons/tech/signifyd.svg', category: 'Fraud', proficiency: 'advanced' },
        { name: 'Riskified', icon: '/icons/tech/riskified.svg', category: 'Fraud', proficiency: 'advanced' },
        { name: 'Sift', icon: '/icons/tech/sift.svg', category: 'Fraud', proficiency: 'advanced' },
        { name: 'Kount', icon: '/icons/tech/kount.svg', category: 'Fraud', proficiency: 'advanced' },
        { name: '3D Secure 2', icon: '/icons/tech/3dsecure.svg', category: 'Authentication', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Basic Integration',
        description: 'Single payment gateway integration for straightforward e-commerce.',
        price: '$3,000',
        priceNote: 'One-time setup',
        features: [
          { name: 'Primary Gateway Integration', included: true },
          { name: 'Credit Card Processing', included: true },
          { name: 'Basic Checkout Optimization', included: true },
          { name: 'SSL Implementation', included: true },
          { name: 'PCI Compliance Guidance', included: true },
          { name: 'Basic Fraud Rules', included: true },
          { name: 'Testing & QA', included: true },
          { name: '30-Day Support', included: true }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Multi-Method Setup',
        description: 'Comprehensive payment solution with multiple methods and BNPL.',
        price: '$8,000',
        priceNote: 'One-time setup',
        badge: 'Most Popular',
        features: [
          { name: 'Primary Gateway Integration', included: true },
          { name: 'Digital Wallets (Apple/Google Pay)', included: true },
          { name: 'PayPal Integration', included: true },
          { name: 'BNPL Integration (1 Provider)', included: true },
          { name: 'Advanced Checkout Optimization', included: true },
          { name: 'Fraud Prevention Setup', included: true },
          { name: '3D Secure Implementation', included: true },
          { name: '60-Day Support', included: true }
        ],
        ctaText: 'Start Multi-Method',
        highlighted: true
      },
      {
        name: 'Enterprise Payments',
        description: 'Complex payment infrastructure for high-volume and international commerce.',
        price: '$25,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Multi-Gateway Architecture', included: true },
          { name: 'All Payment Methods', included: true },
          { name: 'Multi-Currency Processing', included: true },
          { name: 'International Payment Methods', included: true },
          { name: 'Subscription Billing', included: true },
          { name: 'Advanced Fraud Prevention', included: true },
          { name: 'Gateway Routing Logic', included: true },
          { name: '90-Day Support', included: true }
        ],
        ctaText: 'Contact for Enterprise',
        highlighted: false
      }
    ],
    customNote: 'Payment processing fees are charged directly by payment providers based on your volume and risk profile. We can help negotiate better rates with providers.'
  },

  portfolio: [
    {
      title: 'DTC Brand Payment Optimization',
      client: 'StyleBox Fashion',
      industry: 'Fashion E-commerce',
      description: 'Complete payment overhaul adding multiple methods and BNPL to boost conversions.',
      challenge: 'Fashion retailer had high cart abandonment with only credit card payments. Customers requested PayPal, Apple Pay, and flexible payment options.',
      solution: 'Implemented Stripe with Apple Pay, Google Pay, PayPal, and Klarna BNPL. Optimized checkout flow, added one-click checkout for returning customers, and implemented 3D Secure for fraud protection.',
      results: [
        '28% conversion increase',
        '35% AOV increase with BNPL',
        '50% faster checkout',
        '0.3% fraud rate (from 1.2%)'
      ],
      metrics: [
        { label: 'Conversion', value: '+28%' },
        { label: 'AOV Increase', value: '+35%' },
        { label: 'Checkout Time', value: '-50%' },
        { label: 'Fraud Rate', value: '0.3%' }
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      tags: ['Stripe', 'BNPL', 'Fashion', 'Conversion']
    },
    {
      title: 'International Payment Expansion',
      client: 'TechGadgets Global',
      industry: 'Consumer Electronics',
      description: 'Multi-currency, multi-gateway setup for global electronics retailer.',
      challenge: 'Electronics retailer expanding internationally needed to accept payments in 30+ countries with local payment methods and optimal currency handling.',
      solution: 'Implemented Adyen for global coverage with local payment methods (iDEAL, Bancontact, Sofort, etc.), dynamic currency conversion, intelligent gateway routing, and regional fraud rules.',
      results: [
        '30+ countries supported',
        '45% international conversion lift',
        '20 local payment methods',
        '12% processing cost reduction'
      ],
      metrics: [
        { label: 'Countries', value: '30+' },
        { label: 'International Conversion', value: '+45%' },
        { label: 'Payment Methods', value: '20' },
        { label: 'Cost Reduction', value: '12%' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['Adyen', 'International', 'Multi-Currency', 'Electronics']
    },
    {
      title: 'Subscription Billing Platform',
      client: 'FitnessPro Digital',
      industry: 'Digital Subscriptions',
      description: 'Complete subscription billing infrastructure for digital fitness platform.',
      challenge: 'Digital fitness platform needed robust subscription billing with multiple tiers, annual/monthly options, trials, and minimal involuntary churn.',
      solution: 'Implemented Stripe Billing with custom subscription engine, intelligent retry logic, dunning email sequences, proration handling, and plan upgrade/downgrade flows.',
      results: [
        '25% churn reduction',
        '15K active subscribers',
        '8% trial conversion increase',
        '40% recovery on failed payments'
      ],
      metrics: [
        { label: 'Churn Reduction', value: '25%' },
        { label: 'Subscribers', value: '15K' },
        { label: 'Trial Conversion', value: '+8%' },
        { label: 'Payment Recovery', value: '40%' }
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['Stripe Billing', 'Subscriptions', 'SaaS', 'Fitness']
    },
    {
      title: 'Marketplace Payment Infrastructure',
      client: 'CraftConnect',
      industry: 'Handmade Marketplace',
      description: 'Complex payment system for multi-vendor marketplace with split payments and seller payouts.',
      challenge: 'Growing marketplace needed payment infrastructure supporting split payments, seller payouts, escrow for buyer protection, and tax reporting for thousands of vendors.',
      solution: 'Implemented Stripe Connect with custom split payment logic, automated weekly payouts, 1099 generation, escrow system for high-value orders, and dispute management workflow.',
      results: [
        '$2M monthly GMV processed',
        '2,500+ active sellers',
        '0.1% dispute rate',
        '48hr average payout time'
      ],
      metrics: [
        { label: 'Monthly GMV', value: '$2M' },
        { label: 'Active Sellers', value: '2,500+' },
        { label: 'Dispute Rate', value: '0.1%' },
        { label: 'Payout Speed', value: '48hrs' }
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      tags: ['Stripe Connect', 'Marketplace', 'Split Payments', 'Multi-Vendor']
    }
  ],

  testimonials: [
    {
      quote: 'Adding Klarna and Apple Pay transformed our checkout. Customers love the flexibility, and our conversion rate jumped immediately.',
      author: 'Lisa Park',
      role: 'E-commerce Director',
      company: 'StyleBox Fashion',
      rating: 5,
      location: 'New York, NY'
    },
    {
      quote: 'Going global was intimidating until they set up our international payments. Now we sell in 30 countries without payment friction.',
      author: 'Andreas Mueller',
      role: 'VP International',
      company: 'TechGadgets Global',
      rating: 5,
      location: 'Berlin, Germany'
    },
    {
      quote: 'Our subscription churn was killing us. The smart retry logic and dunning they implemented recovers thousands in revenue every month.',
      author: 'Mark Thompson',
      role: 'CEO',
      company: 'FitnessPro Digital',
      rating: 5,
      location: 'Austin, TX'
    }
  ],

  faqs: [
    {
      question: 'Which payment gateway should I use?',
      answer: 'The best gateway depends on your needs: Stripe is excellent for most businesses with great developer experience and features. PayPal/Braintree adds PayPal acceptance and strong fraud tools. Square works well for omnichannel (online + in-store). Adyen excels for international commerce. Authorize.net suits businesses with existing banking relationships. We\'ll recommend based on your transaction volume, geography, and technical requirements.'
    },
    {
      question: 'How do you ensure PCI compliance?',
      answer: 'We implement payment solutions that minimize PCI scope: using hosted payment fields or redirect checkout so sensitive card data never touches your servers, implementing tokenization for stored cards, ensuring SSL/TLS encryption, following secure coding practices, and guiding you through SAQ (Self-Assessment Questionnaire) requirements. Most e-commerce sites can achieve SAQ A or SAQ A-EP compliance with proper implementation.'
    },
    {
      question: 'What payment methods increase conversions most?',
      answer: 'Impact varies by audience, but generally: Digital wallets (Apple Pay, Google Pay) increase mobile conversions 15-25%. PayPal lifts conversions 10-15% for audiences that trust it. BNPL (Klarna, Afterpay) increases AOV 30-50% and conversion 10-20%, especially for higher-priced items. We recommend testing payment methods with your specific audience.'
    },
    {
      question: 'How do you handle fraud prevention?',
      answer: 'We implement multi-layered fraud prevention: gateway fraud tools (Stripe Radar, Braintree), address verification (AVS), card verification value (CVV) checks, 3D Secure 2 for strong customer authentication, velocity checks and risk rules, and integration with dedicated fraud platforms (Signifyd, Riskified) for high-volume merchants. The goal is blocking fraud while minimizing false declines on legitimate orders.'
    },
    {
      question: 'Can you set up subscription/recurring billing?',
      answer: 'Yes, we implement complete subscription billing solutions: recurring payment setup with smart retry logic, dunning management (failed payment recovery), proration for plan changes, usage-based billing, trial period handling, and subscription analytics. We work with Stripe Billing, Recurly, Chargebee, or platform-specific solutions like Recharge for Shopify.'
    },
    {
      question: 'What about international/multi-currency payments?',
      answer: 'We implement global payment solutions: multi-currency pricing and processing, dynamic currency conversion showing local prices, local payment methods (iDEAL in Netherlands, Sofort in Germany, etc.), cross-border optimization for lower fees, tax and compliance considerations, and regional gateway routing for optimal acceptance. International setup typically requires enterprise-level gateways like Adyen.'
    }
  ],

  relatedServices: [
    {
      name: 'E-commerce Website Development',
      slug: 'ecommerce-website-development',
      description: 'Complete e-commerce solutions with integrated payments.',
      icon: 'shopping-cart'
    },
    {
      name: 'Shopify Development',
      slug: 'shopify-development',
      description: 'Shopify stores with optimized payment integration.',
      icon: 'shopping-bag'
    },
    {
      name: 'Shopping Cart Development',
      slug: 'shopping-cart-development',
      description: 'Custom cart functionality with seamless checkout.',
      icon: 'shopping-cart'
    },
    {
      name: 'E-commerce Analytics',
      slug: 'ecommerce-analytics',
      description: 'Payment and conversion analytics for optimization.',
      icon: 'bar-chart-2'
    }
  ],

  seo: {
    title: 'Payment Gateway Integration Services | E-commerce Payment Solutions',
    description: 'Expert payment gateway integration services. Stripe, PayPal, digital wallets, BNPL, and multi-currency payment solutions for e-commerce.',
    keywords: [
      'payment gateway integration',
      'e-commerce payment solutions',
      'Stripe integration',
      'PayPal integration',
      'payment processing',
      'BNPL integration',
      'Apple Pay integration',
      'subscription billing',
      'PCI compliance',
      'payment optimization'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Payment Gateway Integration Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      description: 'Expert payment gateway integration services for e-commerce including major gateways, digital wallets, BNPL, subscription billing, and international payments.'
    }
  }
};

export default paymentGatewayIntegrationData;

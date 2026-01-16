import { ServiceData } from '@/components/services/sections';

export const orderFulfillmentSystemsData: ServiceData = {
  name: 'Order Fulfillment Systems',
  slug: 'order-fulfillment-systems',
  tagline: 'Streamline order processing, shipping, and delivery with intelligent fulfillment systems that delight customers',
  category: 'E-commerce Solutions',
  description: 'Our order fulfillment system services help e-commerce businesses optimize the entire order lifecycle from placement to delivery. We implement solutions that automate processing, optimize shipping, and provide transparency that improves customer satisfaction.',

  hero: {
    headline: 'Fulfillment Systems That Scale With Your Growth',
    subheadline: 'Automated order processing, optimized shipping, and real-time tracking that reduces costs while improving customer experience.',
    description: 'Fast, accurate fulfillment is a competitive advantage. Our fulfillment specialists implement systems that automate order processing, select optimal shipping methods, integrate with carriers and 3PLs, and keep customers informed every step of the way. Whether you ship from your own warehouse or use fulfillment partners, we create seamless operations.',
    keyFeatures: [
      'Order management systems',
      'Shipping optimization',
      '3PL integration',
      'Returns management',
      'Real-time tracking',
      'Multi-carrier support'
    ],
    badges: ['Fulfillment Experts', 'Shipping Optimization', '3PL Integration', 'Automation Specialists']
  },

  painPoints: [
    {
      icon: 'clock',
      title: 'Slow Order Processing',
      description: 'Manual order handling creates bottlenecks. Orders wait hours or days before shipping, frustrating customers.',
      stat: '38%',
      statLabel: 'of customers expect same-day shipping'
    },
    {
      icon: 'dollar-sign',
      title: 'High Shipping Costs',
      description: 'You\'re overpaying for shipping by not rate shopping or optimizing packaging. Margins erode with every shipment.',
      stat: '20-30%',
      statLabel: 'typical shipping cost savings available'
    },
    {
      icon: 'x-circle',
      title: 'Shipping Errors',
      description: 'Wrong items, wrong addresses, late shipments. Errors cost money and damage customer relationships.',
      stat: '23%',
      statLabel: 'of returns due to wrong item shipped'
    },
    {
      icon: 'eye-off',
      title: 'Poor Tracking & Visibility',
      description: 'Customers don\'t know where their order is. Support gets flooded with "Where\'s my order?" inquiries.',
      stat: '93%',
      statLabel: 'of customers want proactive delivery updates'
    },
    {
      icon: 'refresh-cw',
      title: 'Returns Nightmare',
      description: 'Returns processing is manual, slow, and unprofitable. Customers wait weeks for refunds.',
      stat: '30%',
      statLabel: 'of online purchases are returned'
    },
    {
      icon: 'layers',
      title: 'Scaling Challenges',
      description: 'Your fulfillment can\'t keep up with growth. Peak seasons overwhelm operations.',
      stat: '50%',
      statLabel: 'of businesses can\'t scale fulfillment'
    }
  ],

  solutions: [
    {
      icon: 'clipboard-list',
      title: 'Order Management System',
      description: 'Centralized order processing that handles orders from all channels with automation.',
      highlights: [
        'Multi-channel order aggregation',
        'Automated order routing',
        'Order prioritization rules',
        'Fraud screening',
        'Split shipment handling',
        'Order modification workflow'
      ]
    },
    {
      icon: 'truck',
      title: 'Shipping Optimization',
      description: 'Intelligent shipping that balances cost, speed, and customer expectations.',
      highlights: [
        'Multi-carrier rate shopping',
        'Service level selection',
        'Dimensional weight optimization',
        'Zone skipping strategies',
        'Batch processing',
        'Label automation'
      ]
    },
    {
      icon: 'package',
      title: 'Warehouse Operations',
      description: 'Optimize pick, pack, and ship processes for efficiency and accuracy.',
      highlights: [
        'Pick optimization',
        'Pack station workflows',
        'Barcode verification',
        'Packing slip automation',
        'Quality checkpoints',
        'Batch wave management'
      ]
    },
    {
      icon: 'building',
      title: '3PL Integration',
      description: 'Seamless integration with third-party fulfillment providers.',
      highlights: [
        '3PL connection setup',
        'Inventory sync',
        'Order transmission',
        'Tracking retrieval',
        'Returns handling',
        'Performance monitoring'
      ]
    },
    {
      icon: 'map-pin',
      title: 'Tracking & Communication',
      description: 'Keep customers informed with real-time updates and proactive communication.',
      highlights: [
        'Real-time tracking pages',
        'Shipping notifications',
        'Delivery predictions',
        'Exception alerts',
        'Branded tracking',
        'Review requests'
      ]
    },
    {
      icon: 'rotate-ccw',
      title: 'Returns Management',
      description: 'Streamlined returns that protect margins while satisfying customers.',
      highlights: [
        'Self-service returns portal',
        'Return label generation',
        'Reason code tracking',
        'Restocking automation',
        'Refund processing',
        'Exchange handling'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'search',
        title: 'Fulfillment Audit',
        description: 'Analyze current fulfillment operations, costs, and pain points.',
        duration: '1-2 weeks',
        deliverables: [
          'Process documentation',
          'Cost analysis',
          'Pain point identification',
          'Volume analysis',
          'Carrier evaluation',
          'Optimization opportunities'
        ]
      },
      {
        icon: 'compass',
        title: 'Solution Design',
        description: 'Design optimal fulfillment architecture and select appropriate tools.',
        duration: '1-2 weeks',
        deliverables: [
          'System architecture',
          'Tool selection',
          'Integration plan',
          'Automation workflows',
          'Carrier strategy',
          'Implementation roadmap'
        ]
      },
      {
        icon: 'settings',
        title: 'System Implementation',
        description: 'Set up and configure order management and shipping systems.',
        duration: '2-4 weeks',
        deliverables: [
          'OMS setup',
          'Carrier connections',
          'Automation rules',
          'Label configuration',
          'Tracking setup',
          'Testing environment'
        ]
      },
      {
        icon: 'link',
        title: 'Integration',
        description: 'Connect fulfillment systems with e-commerce, inventory, and accounting.',
        duration: '1-3 weeks',
        deliverables: [
          'E-commerce integration',
          'Inventory sync',
          'Accounting connection',
          '3PL integration',
          'API configuration',
          'Data validation'
        ]
      },
      {
        icon: 'play-circle',
        title: 'Go-Live',
        description: 'Launch new fulfillment operations with support and monitoring.',
        duration: '1 week',
        deliverables: [
          'Production cutover',
          'Team training',
          'Parallel processing',
          'Issue resolution',
          'Performance monitoring',
          'Optimization support'
        ]
      },
      {
        icon: 'trending-up',
        title: 'Optimization',
        description: 'Continuous improvement of fulfillment performance and costs.',
        duration: 'Ongoing',
        deliverables: [
          'Performance analytics',
          'Cost optimization',
          'Carrier negotiations',
          'Process refinement',
          'Quarterly reviews',
          'Strategic planning'
        ]
      }
    ],
    totalDuration: '6-12 weeks for comprehensive implementation'
  },

  benefits: [
    {
      icon: 'zap',
      title: 'Faster Fulfillment',
      description: 'Automation and optimization dramatically reduce order-to-ship time.',
      stat: '75',
      statSuffix: '%',
      statLabel: 'faster order processing'
    },
    {
      icon: 'dollar-sign',
      title: 'Lower Shipping Costs',
      description: 'Rate shopping and optimization reduce shipping spend significantly.',
      stat: '25',
      statSuffix: '%',
      statLabel: 'average shipping cost reduction'
    },
    {
      icon: 'check-circle',
      title: 'Higher Accuracy',
      description: 'Barcode verification and automation virtually eliminate shipping errors.',
      stat: '99.8',
      statSuffix: '%',
      statLabel: 'order accuracy'
    },
    {
      icon: 'smile',
      title: 'Happier Customers',
      description: 'Fast shipping and proactive communication improve satisfaction.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'reduction in support tickets'
    },
    {
      icon: 'trending-up',
      title: 'Scalable Operations',
      description: 'Systems that handle 10x volume without proportional staff increase.',
      stat: '10x',
      statSuffix: '',
      statLabel: 'volume capacity'
    },
    {
      icon: 'rotate-ccw',
      title: 'Efficient Returns',
      description: 'Streamlined returns protect margins and improve customer retention.',
      stat: '50',
      statSuffix: '%',
      statLabel: 'faster returns processing'
    }
  ],

  techStack: [
    {
      name: 'Order Management',
      description: 'Platforms for centralized order processing.',
      technologies: [
        { name: 'ShipStation', icon: '/icons/tech/shipstation.svg', category: 'OMS', proficiency: 'expert' },
        { name: 'ShipBob', icon: '/icons/tech/shipbob.svg', category: 'OMS/3PL', proficiency: 'expert' },
        { name: 'Ordoro', icon: '/icons/tech/ordoro.svg', category: 'OMS', proficiency: 'advanced' },
        { name: 'Shopify Fulfillment', icon: '/icons/tech/shopify.svg', category: 'Native', proficiency: 'expert' },
        { name: 'NetSuite', icon: '/icons/tech/netsuite.svg', category: 'ERP', proficiency: 'advanced' },
        { name: 'Brightpearl', icon: '/icons/tech/brightpearl.svg', category: 'OMS', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Shipping & Carriers',
      description: 'Carrier integrations and shipping tools.',
      technologies: [
        { name: 'EasyPost', icon: '/icons/tech/easypost.svg', category: 'API', proficiency: 'expert' },
        { name: 'Shippo', icon: '/icons/tech/shippo.svg', category: 'API', proficiency: 'expert' },
        { name: 'UPS', icon: '/icons/tech/ups.svg', category: 'Carrier', proficiency: 'expert' },
        { name: 'FedEx', icon: '/icons/tech/fedex.svg', category: 'Carrier', proficiency: 'expert' },
        { name: 'USPS', icon: '/icons/tech/usps.svg', category: 'Carrier', proficiency: 'expert' },
        { name: 'DHL', icon: '/icons/tech/dhl.svg', category: 'Carrier', proficiency: 'advanced' }
      ]
    },
    {
      name: '3PL Partners',
      description: 'Third-party fulfillment providers we integrate.',
      technologies: [
        { name: 'ShipBob', icon: '/icons/tech/shipbob.svg', category: '3PL', proficiency: 'expert' },
        { name: 'Deliverr', icon: '/icons/tech/deliverr.svg', category: '3PL', proficiency: 'advanced' },
        { name: 'Red Stag', icon: '/icons/tech/redstag.svg', category: '3PL', proficiency: 'advanced' },
        { name: 'ShipMonk', icon: '/icons/tech/shipmonk.svg', category: '3PL', proficiency: 'expert' },
        { name: 'Amazon FBA', icon: '/icons/tech/amazon.svg', category: '3PL', proficiency: 'expert' },
        { name: 'Fulfillment.com', icon: '/icons/tech/fulfillmentcom.svg', category: '3PL', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Returns & Tracking',
      description: 'Returns management and tracking solutions.',
      technologies: [
        { name: 'Loop Returns', icon: '/icons/tech/loop.svg', category: 'Returns', proficiency: 'expert' },
        { name: 'Returnly', icon: '/icons/tech/returnly.svg', category: 'Returns', proficiency: 'expert' },
        { name: 'AfterShip', icon: '/icons/tech/aftership.svg', category: 'Tracking', proficiency: 'expert' },
        { name: 'Malomo', icon: '/icons/tech/malomo.svg', category: 'Tracking', proficiency: 'advanced' },
        { name: 'Narvar', icon: '/icons/tech/narvar.svg', category: 'Experience', proficiency: 'advanced' },
        { name: 'Route', icon: '/icons/tech/route.svg', category: 'Protection', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Shipping Optimization',
        description: 'Optimize shipping operations for cost and efficiency.',
        price: '$5,000',
        priceNote: 'One-time setup',
        features: [
          { name: 'Shipping Platform Setup', included: true },
          { name: 'Multi-Carrier Integration', included: true },
          { name: 'Rate Shopping Rules', included: true },
          { name: 'Label Automation', included: true },
          { name: 'Basic Tracking Setup', included: true },
          { name: 'Team Training', included: true },
          { name: '30-Day Support', included: true },
          { name: '3PL Integration', included: false }
        ],
        ctaText: 'Optimize Shipping',
        highlighted: false
      },
      {
        name: 'Full Fulfillment',
        description: 'Complete order management and fulfillment system.',
        price: '$15,000',
        priceNote: 'One-time setup',
        badge: 'Most Popular',
        features: [
          { name: 'Everything in Shipping', included: true },
          { name: 'Order Management System', included: true },
          { name: 'Automated Workflows', included: true },
          { name: 'Returns Portal', included: true },
          { name: 'Branded Tracking', included: true },
          { name: 'Inventory Integration', included: true },
          { name: 'Analytics Dashboard', included: true },
          { name: '60-Day Support', included: true }
        ],
        ctaText: 'Start Full System',
        highlighted: true
      },
      {
        name: 'Enterprise Fulfillment',
        description: 'Complex fulfillment for high-volume operations.',
        price: '$40,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Everything in Full', included: true },
          { name: '3PL Integration', included: true },
          { name: 'Multi-Warehouse Routing', included: true },
          { name: 'Custom Automation', included: true },
          { name: 'ERP Integration', included: true },
          { name: 'International Shipping', included: true },
          { name: 'Dedicated Support', included: true },
          { name: '90-Day Support', included: true }
        ],
        ctaText: 'Contact for Enterprise',
        highlighted: false
      }
    ],
    customNote: 'Ongoing software and carrier costs are separate from implementation. We help negotiate volume discounts with carriers and select cost-effective tools.'
  },

  portfolio: [
    {
      title: 'DTC Brand Fulfillment Overhaul',
      client: 'GreenLife Organics',
      industry: 'Health & Wellness',
      description: 'Complete fulfillment transformation for fast-growing DTC brand shipping 5,000+ orders monthly.',
      challenge: 'DTC brand shipping from garage couldn\'t keep up with growth. Manual processes caused errors, shipping costs were high, and customers complained about slow delivery.',
      solution: 'Transitioned to ShipBob 3PL with 2-day shipping network. Implemented ShipStation for order management, Loop Returns for self-service returns, and AfterShip for branded tracking.',
      results: [
        '60% faster delivery',
        '28% shipping cost reduction',
        '99.9% accuracy',
        '45% fewer support tickets'
      ],
      metrics: [
        { label: 'Delivery Speed', value: '+60%' },
        { label: 'Shipping Costs', value: '-28%' },
        { label: 'Order Accuracy', value: '99.9%' },
        { label: 'Support Tickets', value: '-45%' }
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      tags: ['DTC', '3PL', 'ShipBob', 'Fast Growth']
    },
    {
      title: 'Multi-Channel Order Management',
      client: 'SportGear Central',
      industry: 'Sporting Goods',
      description: 'Unified order management for retailer fulfilling from warehouse and dropship suppliers.',
      challenge: 'Sporting goods retailer with own warehouse plus 20 dropship suppliers had order chaos. Manual routing, inconsistent tracking, and supplier management consumed resources.',
      solution: 'Implemented Ordoro for centralized OMS with intelligent routing between warehouse and suppliers. Automated supplier POs, consolidated tracking, and built supplier performance scorecards.',
      results: [
        'Single order dashboard',
        '35% faster processing',
        '20% shipping savings',
        '15% supplier improvement'
      ],
      metrics: [
        { label: 'Order View', value: 'Unified' },
        { label: 'Processing', value: '+35%' },
        { label: 'Shipping Costs', value: '-20%' },
        { label: 'Supplier Performance', value: '+15%' }
      ],
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop',
      tags: ['Multi-Channel', 'Dropship', 'OMS', 'Retail']
    },
    {
      title: 'Subscription Box Fulfillment',
      client: 'PetBox Monthly',
      industry: 'Subscription Commerce',
      description: 'Specialized fulfillment system for subscription box company with complex kitting requirements.',
      challenge: 'Pet subscription box with variable contents based on pet size, preferences, and seasonal themes. Needed efficient kitting, batch processing, and subscription-specific workflows.',
      solution: 'Built custom fulfillment workflow with ShipHero WMS for kitting, integrated with subscription platform for box specifications, implemented batch wave processing for efficient monthly fulfillment.',
      results: [
        '10K boxes/month capacity',
        '50% kitting time reduction',
        '99.7% accuracy',
        '40% cost per box reduction'
      ],
      metrics: [
        { label: 'Capacity', value: '10K/mo' },
        { label: 'Kitting Time', value: '-50%' },
        { label: 'Accuracy', value: '99.7%' },
        { label: 'Cost per Box', value: '-40%' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['Subscription', 'Kitting', 'WMS', 'Batch Processing']
    },
    {
      title: 'International E-commerce Fulfillment',
      client: 'GlobalStyle Fashion',
      industry: 'Fashion Retail',
      description: 'Global fulfillment network for fashion brand shipping to 25+ countries.',
      challenge: 'Fashion brand expanding internationally needed multi-region fulfillment, customs documentation, and localized returns handling across diverse markets.',
      solution: 'Set up distributed fulfillment with ShipBob in US/EU/UK, integrated international carrier network, automated customs documentation, and regional returns processing centers.',
      results: [
        '25 countries served',
        '4-day average delivery',
        '35% international shipping savings',
        '12% international sales growth'
      ],
      metrics: [
        { label: 'Countries', value: '25' },
        { label: 'Avg Delivery', value: '4 days' },
        { label: 'Shipping Savings', value: '35%' },
        { label: 'Sales Growth', value: '+12%' }
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      tags: ['International', 'Multi-Region', 'Fashion', 'Global Fulfillment']
    }
  ],

  testimonials: [
    {
      quote: 'Switching to ShipBob with their integration expertise was the best decision we made. 2-day shipping everywhere, and our costs actually went down.',
      author: 'Michael Green',
      role: 'Founder',
      company: 'GreenLife Organics',
      rating: 5,
      location: 'Portland, OR'
    },
    {
      quote: 'Managing warehouse and 20 dropship suppliers from one dashboard changed everything. We finally have control over our operations.',
      author: 'Jessica Adams',
      role: 'Operations Director',
      company: 'SportGear Central',
      rating: 5,
      location: 'Denver, CO'
    },
    {
      quote: 'Our subscription box fulfillment used to be a nightmare every month. Now it\'s systematic and scalable. We\'ve 5x\'d since implementation.',
      author: 'Tom Wilson',
      role: 'CEO',
      company: 'PetBox Monthly',
      rating: 5,
      location: 'Austin, TX'
    }
  ],

  faqs: [
    {
      question: 'Should we fulfill ourselves or use a 3PL?',
      answer: 'It depends on volume, complexity, and growth rate. Self-fulfillment often makes sense below 500 orders/month or for custom/specialized products. 3PLs become cost-effective at higher volumes and provide: warehouse space without capital investment, labor management, 2-day shipping networks, and scalability. We help analyze total costs and recommend the right approach for your stage.'
    },
    {
      question: 'How do you reduce shipping costs?',
      answer: 'We reduce shipping costs through: rate shopping across carriers for every shipment, zone skipping and regional carriers, dimensional weight optimization, carrier negotiation support, shipping service level optimization, and consolidation strategies. Most businesses can save 20-30% on shipping with proper optimization.'
    },
    {
      question: 'What 3PLs do you work with?',
      answer: 'We integrate with major 3PLs including: ShipBob (2-day network, great for DTC), Deliverr (Walmart/Amazon badges), Red Stag (heavy/oversized), ShipMonk (customization), and regional specialists. We help evaluate 3PLs based on your product characteristics, geography, and requirements. The best 3PL varies by business.'
    },
    {
      question: 'How do you handle returns?',
      answer: 'We implement returns systems that: provide branded self-service portals, generate return labels (prepaid or customer-paid), track return reasons for insights, automate restocking and refund workflows, enable exchanges to retain revenue, and integrate with your e-commerce platform. Tools like Loop Returns and Returnly can even make returns profitable.'
    },
    {
      question: 'Can you help with international shipping?',
      answer: 'Yes, international fulfillment requires: customs documentation automation, duties/taxes calculation (DDP vs DDU), international carrier selection, returns handling strategy, and potentially international warehouse positioning. We implement solutions like EasyPost for carrier integration and can help evaluate international 3PLs for strategic markets.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Timeline depends on complexity: basic shipping optimization takes 2-4 weeks, full OMS implementation takes 6-8 weeks, and 3PL migration takes 8-12 weeks (including parallel running). We can phase implementation to get quick wins while building toward the full solution.'
    }
  ],

  relatedServices: [
    {
      name: 'Inventory Management Systems',
      slug: 'inventory-management-systems',
      description: 'Integrated inventory management for accurate fulfillment.',
      icon: 'package'
    },
    {
      name: 'E-commerce Website Development',
      slug: 'ecommerce-website-development',
      description: 'Online stores with integrated fulfillment capabilities.',
      icon: 'shopping-cart'
    },
    {
      name: 'Marketplace Integration',
      slug: 'marketplace-integration',
      description: 'Unified fulfillment across all sales channels.',
      icon: 'shopping-bag'
    },
    {
      name: 'E-commerce Analytics',
      slug: 'ecommerce-analytics',
      description: 'Fulfillment analytics for optimization and cost control.',
      icon: 'bar-chart-2'
    }
  ],

  seo: {
    title: 'Order Fulfillment Systems | E-commerce Fulfillment Solutions',
    description: 'Implement efficient order fulfillment systems for e-commerce. Order management, shipping optimization, 3PL integration, and returns management solutions.',
    keywords: [
      'order fulfillment systems',
      'e-commerce fulfillment',
      'order management system',
      'shipping optimization',
      '3PL integration',
      'fulfillment automation',
      'returns management',
      'shipping software',
      'warehouse management',
      'e-commerce shipping'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Order Fulfillment System Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      description: 'Expert order fulfillment system implementation including order management, shipping optimization, 3PL integration, and returns management for e-commerce.'
    }
  }
};

export default orderFulfillmentSystemsData;

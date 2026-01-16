import { ServiceData } from '@/components/services/sections';

export const inventoryManagementSystemsData: ServiceData = {
  name: 'Inventory Management Systems',
  slug: 'inventory-management-systems',
  tagline: 'Optimize stock levels, prevent overselling, and streamline operations with intelligent inventory management solutions',
  category: 'E-commerce Solutions',
  description: 'Our inventory management system services help e-commerce businesses maintain optimal stock levels, synchronize inventory across channels, and automate replenishment. We implement and integrate inventory solutions that reduce costs and improve customer satisfaction.',

  hero: {
    headline: 'Intelligent Inventory Management for E-commerce',
    subheadline: 'Real-time inventory tracking, multi-channel synchronization, and automated replenishment that keeps your business running smoothly.',
    description: 'Poor inventory management costs e-commerce businesses billions annually through stockouts, overselling, and excess inventory. Our inventory management specialists implement systems that provide real-time visibility across all channels, automate low-stock alerts and reordering, and integrate seamlessly with your e-commerce platform and suppliers.',
    keyFeatures: [
      'Real-time inventory tracking',
      'Multi-channel synchronization',
      'Automated reorder points',
      'Warehouse management',
      'Demand forecasting',
      'Supplier integration'
    ],
    badges: ['Inventory Specialists', 'ERP Integration', 'Multi-Channel', 'Automation Experts']
  },

  painPoints: [
    {
      icon: 'package-x',
      title: 'Stockouts & Lost Sales',
      description: 'Products show as available but are actually out of stock. Customers order, you cancel, and they never return.',
      stat: '34%',
      statLabel: 'of businesses experience stockouts monthly'
    },
    {
      icon: 'alert-circle',
      title: 'Overselling',
      description: 'Selling more than you have in stock creates fulfillment nightmares, refunds, and damaged reputation.',
      stat: '23%',
      statLabel: 'of e-commerce orders affected by inventory issues'
    },
    {
      icon: 'layers',
      title: 'Multi-Channel Chaos',
      description: 'Inventory doesn\'t sync across your website, Amazon, eBay, and retail. Manual updates can\'t keep up.',
      stat: '70%',
      statLabel: 'of multi-channel sellers have sync issues'
    },
    {
      icon: 'trending-down',
      title: 'Excess Inventory',
      description: 'Overstocking ties up capital and increases storage costs. Products sit unsold, becoming obsolete.',
      stat: '25%',
      statLabel: 'of inventory typically becomes dead stock'
    },
    {
      icon: 'file-x',
      title: 'Manual Processes',
      description: 'Spreadsheets and manual counts consume hours daily. Human error leads to inaccurate data and poor decisions.',
      stat: '40%',
      statLabel: 'of inventory data contains errors'
    },
    {
      icon: 'eye-off',
      title: 'Poor Visibility',
      description: 'You don\'t know what you have, where it is, or when you\'ll run out. Decision-making is guesswork.',
      stat: '43%',
      statLabel: 'lack real-time inventory visibility'
    }
  ],

  solutions: [
    {
      icon: 'database',
      title: 'Inventory Management System',
      description: 'Centralized inventory control with real-time tracking and automated workflows.',
      highlights: [
        'Real-time stock levels',
        'SKU management',
        'Batch/lot tracking',
        'Serial number tracking',
        'Inventory valuation',
        'Stock adjustments'
      ]
    },
    {
      icon: 'refresh-cw',
      title: 'Multi-Channel Sync',
      description: 'Unified inventory across all sales channels with automatic synchronization.',
      highlights: [
        'E-commerce platform sync',
        'Marketplace integration',
        'POS integration',
        'Real-time updates',
        'Buffer stock rules',
        'Channel allocation'
      ]
    },
    {
      icon: 'truck',
      title: 'Warehouse Management',
      description: 'Optimize warehouse operations from receiving to shipping.',
      highlights: [
        'Receiving workflows',
        'Put-away optimization',
        'Pick/pack processes',
        'Location management',
        'Barcode scanning',
        'Multi-warehouse'
      ]
    },
    {
      icon: 'bell',
      title: 'Automated Replenishment',
      description: 'Intelligent reorder automation based on sales velocity and lead times.',
      highlights: [
        'Reorder point alerts',
        'Automatic PO generation',
        'Safety stock calculation',
        'Lead time management',
        'Supplier integration',
        'Economic order quantity'
      ]
    },
    {
      icon: 'trending-up',
      title: 'Demand Forecasting',
      description: 'Predict future demand to optimize purchasing and stock levels.',
      highlights: [
        'Sales trend analysis',
        'Seasonal forecasting',
        'Promotion impact',
        'New product forecasts',
        'ABC analysis',
        'Inventory optimization'
      ]
    },
    {
      icon: 'link',
      title: 'System Integration',
      description: 'Connect inventory with your entire tech stack for seamless operations.',
      highlights: [
        'E-commerce platform',
        'Accounting software',
        'ERP integration',
        'Shipping systems',
        'Supplier portals',
        'Custom APIs'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'search',
        title: 'Assessment',
        description: 'Analyze current inventory challenges, workflows, and system landscape.',
        duration: '1-2 weeks',
        deliverables: [
          'Current state analysis',
          'Pain point identification',
          'Process mapping',
          'Integration requirements',
          'Solution recommendations',
          'ROI projections'
        ]
      },
      {
        icon: 'clipboard-list',
        title: 'Planning',
        description: 'Design the optimal inventory management solution for your business.',
        duration: '1-2 weeks',
        deliverables: [
          'System architecture',
          'Integration plan',
          'Data migration plan',
          'Workflow design',
          'Configuration spec',
          'Implementation timeline'
        ]
      },
      {
        icon: 'settings',
        title: 'Implementation',
        description: 'Set up and configure inventory management system.',
        duration: '3-6 weeks',
        deliverables: [
          'System setup',
          'Configuration',
          'Integration development',
          'Data migration',
          'Workflow automation',
          'Testing environment'
        ]
      },
      {
        icon: 'database',
        title: 'Data Migration',
        description: 'Import existing inventory data and establish accurate baselines.',
        duration: '1-2 weeks',
        deliverables: [
          'Data cleansing',
          'Product import',
          'Stock level sync',
          'Historical data',
          'Validation',
          'Reconciliation'
        ]
      },
      {
        icon: 'users',
        title: 'Training',
        description: 'Train your team on new systems and processes.',
        duration: '1 week',
        deliverables: [
          'Admin training',
          'User training',
          'Process documentation',
          'Quick reference guides',
          'Video tutorials',
          'Support resources'
        ]
      },
      {
        icon: 'rocket',
        title: 'Go-Live & Support',
        description: 'Launch system with ongoing support and optimization.',
        duration: 'Ongoing',
        deliverables: [
          'Production launch',
          'Monitoring setup',
          'Issue resolution',
          'Performance tuning',
          'Ongoing optimization',
          'Quarterly reviews'
        ]
      }
    ],
    totalDuration: '8-14 weeks for comprehensive implementation'
  },

  benefits: [
    {
      icon: 'check-circle',
      title: 'Eliminate Stockouts',
      description: 'Real-time visibility and automated alerts ensure you never miss a sale due to stock issues.',
      stat: '95',
      statSuffix: '%',
      statLabel: 'reduction in stockouts'
    },
    {
      icon: 'x-circle',
      title: 'Prevent Overselling',
      description: 'Accurate multi-channel sync ensures you never sell more than you have.',
      stat: '99.5',
      statSuffix: '%',
      statLabel: 'inventory accuracy'
    },
    {
      icon: 'dollar-sign',
      title: 'Reduce Carrying Costs',
      description: 'Optimized stock levels reduce excess inventory and associated costs.',
      stat: '30',
      statSuffix: '%',
      statLabel: 'reduction in carrying costs'
    },
    {
      icon: 'clock',
      title: 'Save Time',
      description: 'Automation eliminates manual counting, spreadsheets, and data entry.',
      stat: '20',
      statSuffix: 'hrs',
      statLabel: 'saved per week'
    },
    {
      icon: 'trending-up',
      title: 'Better Decisions',
      description: 'Real-time data and forecasting enable smarter purchasing decisions.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'improvement in order accuracy'
    },
    {
      icon: 'smile',
      title: 'Happier Customers',
      description: 'Accurate availability and faster fulfillment improve customer satisfaction.',
      stat: '25',
      statSuffix: '%',
      statLabel: 'improvement in satisfaction'
    }
  ],

  techStack: [
    {
      name: 'Inventory Platforms',
      description: 'Leading inventory management solutions.',
      technologies: [
        { name: 'NetSuite', icon: '/icons/tech/netsuite.svg', category: 'ERP', proficiency: 'expert' },
        { name: 'TradeGecko/QuickBooks', icon: '/icons/tech/tradegecko.svg', category: 'IMS', proficiency: 'expert' },
        { name: 'Cin7', icon: '/icons/tech/cin7.svg', category: 'IMS', proficiency: 'advanced' },
        { name: 'Fishbowl', icon: '/icons/tech/fishbowl.svg', category: 'IMS', proficiency: 'advanced' },
        { name: 'Skubana', icon: '/icons/tech/skubana.svg', category: 'IMS', proficiency: 'expert' },
        { name: 'Brightpearl', icon: '/icons/tech/brightpearl.svg', category: 'IMS', proficiency: 'advanced' }
      ]
    },
    {
      name: 'E-commerce Integrations',
      description: 'Platforms we connect for inventory sync.',
      technologies: [
        { name: 'Shopify', icon: '/icons/tech/shopify.svg', category: 'Platform', proficiency: 'expert' },
        { name: 'WooCommerce', icon: '/icons/tech/woocommerce.svg', category: 'Platform', proficiency: 'expert' },
        { name: 'Amazon', icon: '/icons/tech/amazon.svg', category: 'Marketplace', proficiency: 'expert' },
        { name: 'eBay', icon: '/icons/tech/ebay.svg', category: 'Marketplace', proficiency: 'advanced' },
        { name: 'Walmart', icon: '/icons/tech/walmart.svg', category: 'Marketplace', proficiency: 'advanced' },
        { name: 'BigCommerce', icon: '/icons/tech/bigcommerce.svg', category: 'Platform', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Channel Management',
      description: 'Multi-channel inventory orchestration.',
      technologies: [
        { name: 'Sellbrite', icon: '/icons/tech/sellbrite.svg', category: 'Multi-Channel', proficiency: 'expert' },
        { name: 'ChannelAdvisor', icon: '/icons/tech/channeladvisor.svg', category: 'Multi-Channel', proficiency: 'advanced' },
        { name: 'Linnworks', icon: '/icons/tech/linnworks.svg', category: 'Multi-Channel', proficiency: 'advanced' },
        { name: 'Zentail', icon: '/icons/tech/zentail.svg', category: 'Multi-Channel', proficiency: 'advanced' },
        { name: 'Ecomdash', icon: '/icons/tech/ecomdash.svg', category: 'Multi-Channel', proficiency: 'expert' },
        { name: 'Ordoro', icon: '/icons/tech/ordoro.svg', category: 'Multi-Channel', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Warehouse Tools',
      description: 'Warehouse management and operations.',
      technologies: [
        { name: 'ShipHero', icon: '/icons/tech/shiphero.svg', category: 'WMS', proficiency: 'expert' },
        { name: 'Logiwa', icon: '/icons/tech/logiwa.svg', category: 'WMS', proficiency: 'advanced' },
        { name: '3PL Central', icon: '/icons/tech/3plcentral.svg', category: 'WMS', proficiency: 'advanced' },
        { name: 'Barcode Scanners', icon: '/icons/tech/barcode.svg', category: 'Hardware', proficiency: 'expert' },
        { name: 'Zebra', icon: '/icons/tech/zebra.svg', category: 'Hardware', proficiency: 'advanced' },
        { name: 'Ship Station', icon: '/icons/tech/shipstation.svg', category: 'Shipping', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Basic Setup',
        description: 'Inventory system implementation for single-channel operations.',
        price: '$8,000',
        priceNote: 'One-time setup',
        features: [
          { name: 'System Selection & Setup', included: true },
          { name: 'E-commerce Integration', included: true },
          { name: 'Product Import', included: true },
          { name: 'Basic Workflows', included: true },
          { name: 'Reorder Alerts', included: true },
          { name: 'Team Training', included: true },
          { name: '30-Day Support', included: true },
          { name: 'Multi-Channel Sync', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Multi-Channel',
        description: 'Comprehensive inventory management across all sales channels.',
        price: '$20,000',
        priceNote: 'One-time setup',
        badge: 'Most Popular',
        features: [
          { name: 'Everything in Basic', included: true },
          { name: 'Multi-Channel Sync', included: true },
          { name: 'Marketplace Integration', included: true },
          { name: 'Automated Replenishment', included: true },
          { name: 'Demand Forecasting', included: true },
          { name: 'Accounting Integration', included: true },
          { name: 'Custom Reporting', included: true },
          { name: '60-Day Support', included: true }
        ],
        ctaText: 'Start Multi-Channel',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Advanced inventory solutions for complex operations.',
        price: '$50,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Everything in Multi-Channel', included: true },
          { name: 'ERP Integration', included: true },
          { name: 'Warehouse Management', included: true },
          { name: 'Multi-Location', included: true },
          { name: 'Advanced Forecasting', included: true },
          { name: 'Custom Development', included: true },
          { name: 'Dedicated Support', included: true },
          { name: '90-Day Support', included: true }
        ],
        ctaText: 'Contact for Enterprise',
        highlighted: false
      }
    ],
    customNote: 'Ongoing software subscription fees for inventory management platforms are separate and billed directly by providers. We help select the right solution for your volume and needs.'
  },

  portfolio: [
    {
      title: 'Multi-Channel Retail Inventory',
      client: 'HomeGoods Direct',
      industry: 'Home & Garden',
      description: 'Unified inventory system for retailer selling on website, Amazon, eBay, and two retail stores.',
      challenge: 'Home goods retailer constantly overselling and underselling due to inventory chaos across five channels. Manual spreadsheet updates took hours daily and were always out of date.',
      solution: 'Implemented Skubana as central inventory hub with real-time sync to Shopify, Amazon, eBay, and Square POS. Set up automated reorder points, buffer stock rules by channel, and integrated with accounting.',
      results: [
        'Overselling eliminated',
        '35% stockout reduction',
        '25 hrs/week saved',
        '99.2% inventory accuracy'
      ],
      metrics: [
        { label: 'Overselling', value: 'Eliminated' },
        { label: 'Stockouts', value: '-35%' },
        { label: 'Time Saved', value: '25 hrs/wk' },
        { label: 'Accuracy', value: '99.2%' }
      ],
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop',
      tags: ['Multi-Channel', 'Retail', 'Skubana', 'POS Integration']
    },
    {
      title: 'B2B Wholesale Inventory',
      client: 'TechParts Distribution',
      industry: 'Electronics Distribution',
      description: 'Complex inventory management for electronics distributor with 50,000+ SKUs.',
      challenge: 'Electronics distributor with massive catalog struggled with forecasting, dead stock, and manual purchasing. Needed integration with suppliers and customers\' procurement systems.',
      solution: 'Implemented NetSuite inventory module with demand planning, automated PO generation to suppliers, EDI integration with major customers, and ABC analysis for stock optimization.',
      results: [
        '40% dead stock reduction',
        '30% carrying cost savings',
        '95% on-time fulfillment',
        'Automated 80% of POs'
      ],
      metrics: [
        { label: 'Dead Stock', value: '-40%' },
        { label: 'Carrying Costs', value: '-30%' },
        { label: 'On-Time Ship', value: '95%' },
        { label: 'PO Automation', value: '80%' }
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      tags: ['B2B', 'NetSuite', 'EDI', 'Forecasting']
    },
    {
      title: '3PL Warehouse Implementation',
      client: 'FastFulfill Co',
      industry: '3PL/Fulfillment',
      description: 'Warehouse management system for 3PL serving multiple e-commerce brands.',
      challenge: '3PL fulfillment center needed to manage inventory for 50+ clients, each with different requirements, integrations, and SLAs. Previous system couldn\'t scale.',
      solution: 'Deployed ShipHero WMS with multi-client architecture, automated receiving, wave picking optimization, rate shopping, and client-specific integrations with their e-commerce platforms.',
      results: [
        '50+ clients managed',
        '40% faster picking',
        '99.8% accuracy',
        '3x volume capacity'
      ],
      metrics: [
        { label: 'Clients', value: '50+' },
        { label: 'Picking Speed', value: '+40%' },
        { label: 'Accuracy', value: '99.8%' },
        { label: 'Capacity', value: '3x' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['3PL', 'WMS', 'Multi-Client', 'Warehouse']
    },
    {
      title: 'Fashion Brand Inventory Optimization',
      client: 'TrendSetters Apparel',
      industry: 'Fashion Retail',
      description: 'Seasonal inventory management for fashion brand with rapid product turnover.',
      challenge: 'Fast fashion brand struggled with seasonal inventory planning, size/color complexity, and markdown timing. Excess inventory was eating into margins.',
      solution: 'Implemented Cin7 with seasonal forecasting, size curve optimization, automated markdown triggers, and integration with suppliers for just-in-time restocking.',
      results: [
        '45% markdown reduction',
        '28% inventory turnover improvement',
        '92% in-stock rate',
        '$400K annual savings'
      ],
      metrics: [
        { label: 'Markdowns', value: '-45%' },
        { label: 'Turnover', value: '+28%' },
        { label: 'In-Stock', value: '92%' },
        { label: 'Savings', value: '$400K/yr' }
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      tags: ['Fashion', 'Seasonal', 'Forecasting', 'Optimization']
    }
  ],

  testimonials: [
    {
      quote: 'We went from inventory chaos to complete visibility overnight. Overselling is gone, and my team has hours back every day.',
      author: 'Sarah Johnson',
      role: 'Operations Manager',
      company: 'HomeGoods Direct',
      rating: 5,
      location: 'Phoenix, AZ'
    },
    {
      quote: 'The demand forecasting has transformed our purchasing. We\'ve cut dead stock by 40% while improving fill rates.',
      author: 'Robert Kim',
      role: 'VP Supply Chain',
      company: 'TechParts Distribution',
      rating: 5,
      location: 'Dallas, TX'
    },
    {
      quote: 'Managing 50+ clients with different requirements seemed impossible. The WMS they implemented makes it look easy.',
      author: 'Amanda Chen',
      role: 'CEO',
      company: 'FastFulfill Co',
      rating: 5,
      location: 'Los Angeles, CA'
    }
  ],

  faqs: [
    {
      question: 'What inventory management system should we use?',
      answer: 'The right system depends on your complexity and scale: Shopify native or apps (Stocky) work for simple single-channel. Dedicated IMS like Cin7, Fishbowl, or Skubana suit multi-channel mid-market. NetSuite or SAP serve enterprise with ERP needs. We evaluate your product count, channels, warehouse complexity, and integration requirements to recommend the best fit.'
    },
    {
      question: 'How do you prevent overselling across channels?',
      answer: 'We implement real-time inventory sync with buffer stock rules per channel. When an order comes in on any channel, inventory is immediately decremented everywhere. Buffer stock reserves a percentage for each channel to handle sync delays. For high-velocity items, we implement order routing logic that checks live availability before confirmation.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Yes, integration is core to our approach. We connect inventory systems with: e-commerce platforms (Shopify, WooCommerce, Magento), marketplaces (Amazon, eBay, Walmart), accounting (QuickBooks, Xero, NetSuite), shipping (ShipStation, EasyPost), and ERPs. Most integrations use native connectors or APIs; we build custom integrations when needed.'
    },
    {
      question: 'How do you handle multiple warehouses or 3PLs?',
      answer: 'Multi-location inventory requires: centralized visibility across all locations, intelligent order routing based on proximity, cost, and availability, transfer management between locations, location-specific reorder points, and consolidated reporting. Most modern IMS platforms support multi-location; we configure optimal routing logic for your network.'
    },
    {
      question: 'What about demand forecasting?',
      answer: 'Demand forecasting analyzes historical sales, seasonality, trends, and external factors to predict future demand. We implement forecasting through: platform native tools (NetSuite), specialized solutions (Inventory Planner, Lokad), or custom models for complex needs. Forecasting typically improves within 3-6 months as the system learns your patterns.'
    },
    {
      question: 'How long until we see ROI?',
      answer: 'Most businesses see ROI within 3-6 months through: eliminated overselling costs, reduced stockouts and lost sales, lower carrying costs from optimized stock, labor savings from automation, and better purchasing decisions. We help quantify expected savings during assessment to build the business case.'
    }
  ],

  relatedServices: [
    {
      name: 'Order Fulfillment Systems',
      slug: 'order-fulfillment-systems',
      description: 'Complete order management from placement to delivery.',
      icon: 'truck'
    },
    {
      name: 'Marketplace Integration',
      slug: 'marketplace-integration',
      description: 'Sell across multiple marketplaces with unified operations.',
      icon: 'shopping-bag'
    },
    {
      name: 'E-commerce Analytics',
      slug: 'ecommerce-analytics',
      description: 'Data-driven insights for inventory and operations optimization.',
      icon: 'bar-chart-2'
    },
    {
      name: 'E-commerce Website Development',
      slug: 'ecommerce-website-development',
      description: 'Online stores with integrated inventory management.',
      icon: 'shopping-cart'
    }
  ],

  seo: {
    title: 'Inventory Management Systems | E-commerce Inventory Solutions',
    description: 'Implement intelligent inventory management systems for e-commerce. Multi-channel sync, automated replenishment, and warehouse management solutions.',
    keywords: [
      'inventory management system',
      'e-commerce inventory',
      'multi-channel inventory',
      'inventory software',
      'warehouse management',
      'stock management',
      'inventory tracking',
      'inventory integration',
      'demand forecasting',
      'automated replenishment'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Inventory Management System Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      description: 'Expert inventory management system implementation for e-commerce including multi-channel synchronization, warehouse management, and automated replenishment.'
    }
  }
};

export default inventoryManagementSystemsData;

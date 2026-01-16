import { ServiceData } from '@/components/services/sections';

export const marketplaceIntegrationData: ServiceData = {
  name: 'Marketplace Integration',
  slug: 'marketplace-integration',
  tagline: 'Expand your reach by selling on Amazon, eBay, Walmart, and more with seamless multi-marketplace integration',
  category: 'E-commerce Solutions',
  description: 'Our marketplace integration services help e-commerce businesses expand to multiple sales channels efficiently. We connect your store to major marketplaces, synchronize inventory and orders, and optimize listings for maximum visibility and sales.',

  hero: {
    headline: 'Sell Everywhere Your Customers Shop',
    subheadline: 'Multi-marketplace integration that expands your reach to millions of shoppers on Amazon, Walmart, eBay, and more—all managed from one place.',
    description: 'Your customers shop across multiple marketplaces. Meeting them where they are multiplies your sales opportunities without multiplying your workload. Our marketplace integration specialists connect your e-commerce operations to major marketplaces with unified inventory, automated order management, and optimized listings that compete effectively.',
    keyFeatures: [
      'Amazon marketplace integration',
      'Walmart Marketplace setup',
      'eBay integration',
      'Multi-channel inventory sync',
      'Listing optimization',
      'Unified order management'
    ],
    badges: ['Marketplace Experts', 'Amazon Specialists', 'Multi-Channel', 'Listing Optimization']
  },

  painPoints: [
    {
      icon: 'layers',
      title: 'Manual Multi-Channel Management',
      description: 'Managing listings, inventory, and orders across marketplaces manually is time-consuming and error-prone.',
      stat: '65%',
      statLabel: 'of sellers struggle with multi-channel operations'
    },
    {
      icon: 'alert-triangle',
      title: 'Overselling & Stockouts',
      description: 'Inventory doesn\'t sync across channels in real-time. You oversell on one platform while showing out-of-stock on another.',
      stat: '70%',
      statLabel: 'of multi-channel sellers have inventory sync issues'
    },
    {
      icon: 'search',
      title: 'Poor Marketplace Visibility',
      description: 'Your listings don\'t appear in search results. Poor optimization means shoppers never find your products.',
      stat: '70%',
      statLabel: 'of Amazon sales from first page results'
    },
    {
      icon: 'dollar-sign',
      title: 'Profitability Uncertainty',
      description: 'Between marketplace fees, shipping costs, and returns, you don\'t know which products and channels are actually profitable.',
      stat: '40%',
      statLabel: 'of marketplace sellers don\'t track true profitability'
    },
    {
      icon: 'shield-off',
      title: 'Account Health Risks',
      description: 'Policy violations, late shipments, and poor metrics threaten your marketplace accounts.',
      stat: '30%',
      statLabel: 'of sellers have faced account suspension'
    },
    {
      icon: 'clock',
      title: 'Slow Marketplace Expansion',
      description: 'Setting up on new marketplaces takes months. Complex requirements and integration challenges slow growth.',
      stat: '6-12mo',
      statLabel: 'typical time to launch on new marketplace'
    }
  ],

  solutions: [
    {
      icon: 'shopping-bag',
      title: 'Amazon Integration',
      description: 'Complete Amazon Seller Central integration with inventory sync, order management, and FBA support.',
      highlights: [
        'Seller Central connection',
        'FBA & FBM support',
        'Inventory synchronization',
        'Order automation',
        'Listing management',
        'Advertising integration'
      ]
    },
    {
      icon: 'store',
      title: 'Walmart Marketplace',
      description: 'Walmart Marketplace integration for access to millions of Walmart shoppers.',
      highlights: [
        'Seller onboarding',
        'Product catalog setup',
        'WFS integration',
        'Order fulfillment',
        'Repricer integration',
        'Performance optimization'
      ]
    },
    {
      icon: 'gavel',
      title: 'eBay Integration',
      description: 'eBay integration for auction and fixed-price selling across global eBay sites.',
      highlights: [
        'Multi-format listings',
        'Global site support',
        'Managed payments',
        'Store setup',
        'Promoted listings',
        'Best offer handling'
      ]
    },
    {
      icon: 'globe',
      title: 'Additional Marketplaces',
      description: 'Expand to specialty and regional marketplaces relevant to your products.',
      highlights: [
        'Etsy integration',
        'Target Plus',
        'Google Shopping',
        'Facebook/Instagram Shops',
        'Newegg, Wayfair, etc.',
        'International marketplaces'
      ]
    },
    {
      icon: 'database',
      title: 'Multi-Channel Management',
      description: 'Centralized system for managing all marketplace operations from one dashboard.',
      highlights: [
        'Unified product catalog',
        'Real-time inventory sync',
        'Centralized orders',
        'Multi-channel analytics',
        'Bulk listing tools',
        'Price management'
      ]
    },
    {
      icon: 'trending-up',
      title: 'Listing Optimization',
      description: 'Optimize listings for search visibility and conversion on each marketplace.',
      highlights: [
        'Keyword research',
        'Title optimization',
        'Bullet point enhancement',
        'A+ Content creation',
        'Image optimization',
        'Review strategies'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'clipboard-list',
        title: 'Assessment',
        description: 'Evaluate your product catalog, operations, and marketplace opportunities.',
        duration: '1 week',
        deliverables: [
          'Marketplace opportunity analysis',
          'Product eligibility review',
          'Competitor analysis',
          'Profitability projections',
          'Priority recommendations',
          'Integration requirements'
        ]
      },
      {
        icon: 'user-plus',
        title: 'Account Setup',
        description: 'Set up and configure marketplace seller accounts.',
        duration: '1-2 weeks',
        deliverables: [
          'Account registration',
          'Brand registry',
          'Tax configuration',
          'Shipping setup',
          'Return policies',
          'Account verification'
        ]
      },
      {
        icon: 'link',
        title: 'Integration',
        description: 'Connect marketplaces with your e-commerce platform and operations.',
        duration: '2-3 weeks',
        deliverables: [
          'Channel manager setup',
          'API connections',
          'Inventory sync',
          'Order routing',
          'Fulfillment integration',
          'Testing & validation'
        ]
      },
      {
        icon: 'file-text',
        title: 'Catalog Upload',
        description: 'Prepare and upload product listings to marketplaces.',
        duration: '2-4 weeks',
        deliverables: [
          'Data preparation',
          'Category mapping',
          'Listing creation',
          'Image preparation',
          'Content optimization',
          'Listing validation'
        ]
      },
      {
        icon: 'rocket',
        title: 'Launch',
        description: 'Go live on marketplaces with monitoring and optimization.',
        duration: '1 week',
        deliverables: [
          'Listing activation',
          'Inventory verification',
          'Order testing',
          'Monitoring setup',
          'Initial optimization',
          'Launch support'
        ]
      },
      {
        icon: 'trending-up',
        title: 'Optimization',
        description: 'Ongoing optimization of listings, pricing, and operations.',
        duration: 'Ongoing',
        deliverables: [
          'Performance monitoring',
          'Listing optimization',
          'Pricing strategies',
          'Advertising management',
          'Account health',
          'Growth planning'
        ]
      }
    ],
    totalDuration: '8-12 weeks for marketplace launch'
  },

  benefits: [
    {
      icon: 'users',
      title: 'Massive Reach',
      description: 'Access millions of shoppers on established marketplaces where they already buy.',
      stat: '300M+',
      statSuffix: '',
      statLabel: 'Amazon Prime members alone'
    },
    {
      icon: 'trending-up',
      title: 'Revenue Growth',
      description: 'Multi-channel sellers see significant revenue increases from marketplace expansion.',
      stat: '190',
      statSuffix: '%',
      statLabel: 'average revenue increase'
    },
    {
      icon: 'refresh-cw',
      title: 'Unified Operations',
      description: 'Manage all channels from one system without multiplying operational complexity.',
      stat: '1',
      statSuffix: '',
      statLabel: 'dashboard for all channels'
    },
    {
      icon: 'shield',
      title: 'Risk Diversification',
      description: 'Reduce dependence on any single channel. Multiple marketplaces = more stability.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'revenue risk reduction'
    },
    {
      icon: 'clock',
      title: 'Faster Expansion',
      description: 'Our expertise accelerates marketplace launches from months to weeks.',
      stat: '3x',
      statSuffix: '',
      statLabel: 'faster marketplace launch'
    },
    {
      icon: 'eye',
      title: 'Better Visibility',
      description: 'Optimized listings rank higher and convert better than competitors.',
      stat: '45',
      statSuffix: '%',
      statLabel: 'improvement in search visibility'
    }
  ],

  techStack: [
    {
      name: 'Multi-Channel Platforms',
      description: 'Tools for managing multiple marketplaces.',
      technologies: [
        { name: 'ChannelAdvisor', icon: '/icons/tech/channeladvisor.svg', category: 'Multi-Channel', proficiency: 'advanced' },
        { name: 'Sellbrite', icon: '/icons/tech/sellbrite.svg', category: 'Multi-Channel', proficiency: 'expert' },
        { name: 'Linnworks', icon: '/icons/tech/linnworks.svg', category: 'Multi-Channel', proficiency: 'advanced' },
        { name: 'Zentail', icon: '/icons/tech/zentail.svg', category: 'Multi-Channel', proficiency: 'advanced' },
        { name: 'Listing Mirror', icon: '/icons/tech/listingmirror.svg', category: 'Multi-Channel', proficiency: 'expert' },
        { name: 'Codisto', icon: '/icons/tech/codisto.svg', category: 'Multi-Channel', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Amazon Tools',
      description: 'Specialized Amazon selling tools.',
      technologies: [
        { name: 'Seller Central', icon: '/icons/tech/amazon.svg', category: 'Native', proficiency: 'expert' },
        { name: 'Helium 10', icon: '/icons/tech/helium10.svg', category: 'Research', proficiency: 'expert' },
        { name: 'Jungle Scout', icon: '/icons/tech/junglescout.svg', category: 'Research', proficiency: 'expert' },
        { name: 'Sellerboard', icon: '/icons/tech/sellerboard.svg', category: 'Analytics', proficiency: 'advanced' },
        { name: 'FeedbackWhiz', icon: '/icons/tech/feedbackwhiz.svg', category: 'Reviews', proficiency: 'advanced' },
        { name: 'Amazon Advertising', icon: '/icons/tech/amazon.svg', category: 'Advertising', proficiency: 'expert' }
      ]
    },
    {
      name: 'E-commerce Platforms',
      description: 'Source platforms we integrate.',
      technologies: [
        { name: 'Shopify', icon: '/icons/tech/shopify.svg', category: 'Platform', proficiency: 'expert' },
        { name: 'WooCommerce', icon: '/icons/tech/woocommerce.svg', category: 'Platform', proficiency: 'expert' },
        { name: 'Magento', icon: '/icons/tech/magento.svg', category: 'Platform', proficiency: 'advanced' },
        { name: 'BigCommerce', icon: '/icons/tech/bigcommerce.svg', category: 'Platform', proficiency: 'advanced' },
        { name: 'NetSuite', icon: '/icons/tech/netsuite.svg', category: 'ERP', proficiency: 'advanced' },
        { name: 'Custom Platforms', icon: '/icons/tech/api.svg', category: 'Custom', proficiency: 'expert' }
      ]
    },
    {
      name: 'Pricing & Repricing',
      description: 'Dynamic pricing tools for marketplaces.',
      technologies: [
        { name: 'RepricerExpress', icon: '/icons/tech/repricerexpress.svg', category: 'Repricing', proficiency: 'expert' },
        { name: 'Informed.co', icon: '/icons/tech/informed.svg', category: 'Repricing', proficiency: 'advanced' },
        { name: 'Feedvisor', icon: '/icons/tech/feedvisor.svg', category: 'AI Pricing', proficiency: 'advanced' },
        { name: 'Seller Snap', icon: '/icons/tech/sellersnap.svg', category: 'Repricing', proficiency: 'advanced' },
        { name: 'BQool', icon: '/icons/tech/bqool.svg', category: 'Repricing', proficiency: 'advanced' },
        { name: 'Prisync', icon: '/icons/tech/prisync.svg', category: 'Price Intel', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Single Marketplace',
        description: 'Launch on one new marketplace with full integration.',
        price: '$5,000',
        priceNote: 'Per marketplace',
        features: [
          { name: 'Account Setup', included: true },
          { name: 'Platform Integration', included: true },
          { name: 'Catalog Upload (up to 500 SKUs)', included: true },
          { name: 'Inventory Sync', included: true },
          { name: 'Order Integration', included: true },
          { name: 'Basic Listing Optimization', included: true },
          { name: 'Launch Support', included: true },
          { name: '30-Day Support', included: true }
        ],
        ctaText: 'Launch Marketplace',
        highlighted: false
      },
      {
        name: 'Multi-Marketplace',
        description: 'Expand to multiple marketplaces with unified management.',
        price: '$15,000',
        priceNote: 'Up to 3 marketplaces',
        badge: 'Most Popular',
        features: [
          { name: 'Everything in Single', included: true },
          { name: '3 Marketplace Integrations', included: true },
          { name: 'Multi-Channel Platform', included: true },
          { name: 'Unlimited SKUs', included: true },
          { name: 'Advanced Listing Optimization', included: true },
          { name: 'Repricing Strategy', included: true },
          { name: 'Analytics Dashboard', included: true },
          { name: '60-Day Support', included: true }
        ],
        ctaText: 'Launch Multi-Channel',
        highlighted: true
      },
      {
        name: 'Enterprise Expansion',
        description: 'Full marketplace strategy and execution for established brands.',
        price: '$40,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Everything in Multi', included: true },
          { name: 'Unlimited Marketplaces', included: true },
          { name: 'Brand Registry & Protection', included: true },
          { name: 'A+ Content Creation', included: true },
          { name: 'Advertising Strategy', included: true },
          { name: 'International Expansion', included: true },
          { name: 'Dedicated Manager', included: true },
          { name: '90-Day Support', included: true }
        ],
        ctaText: 'Contact for Enterprise',
        highlighted: false
      }
    ],
    customNote: 'Marketplace seller fees and advertising costs are separate and charged directly by marketplaces. We help optimize these costs as part of our services.'
  },

  portfolio: [
    {
      title: 'Amazon Launch & Scale',
      client: 'HomeStyle Decor',
      industry: 'Home Decor',
      description: 'Full Amazon launch for home decor brand including Brand Registry, A+ Content, and advertising.',
      challenge: 'Established DTC brand wanted Amazon presence but lacked expertise. Concerned about brand protection, profitability, and operational complexity.',
      solution: 'Launched on Amazon with Brand Registry protection, optimized listings with A+ Content, integrated with existing Shopify operations, and implemented PPC strategy for visibility.',
      results: [
        '$500K Amazon revenue Y1',
        '35% of total revenue',
        '4.6 star rating',
        '12% ACOS on advertising'
      ],
      metrics: [
        { label: 'Amazon Revenue', value: '$500K' },
        { label: 'Revenue Share', value: '35%' },
        { label: 'Rating', value: '4.6★' },
        { label: 'ACOS', value: '12%' }
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      tags: ['Amazon', 'Brand Registry', 'A+ Content', 'PPC']
    },
    {
      title: 'Multi-Marketplace Expansion',
      client: 'TechAccessories Pro',
      industry: 'Consumer Electronics',
      description: 'Expansion from Amazon-only to multi-marketplace presence on Walmart, eBay, and Newegg.',
      challenge: 'Electronics accessories seller was 100% Amazon dependent. Wanted channel diversification but couldn\'t manage multiple platforms manually.',
      solution: 'Implemented Sellbrite for multi-channel management, launched on Walmart, eBay, and Newegg with optimized listings, unified inventory sync, and channel-specific pricing strategies.',
      results: [
        '4 marketplace presence',
        '85% revenue increase',
        '40% Amazon dependency reduction',
        'Unified operations'
      ],
      metrics: [
        { label: 'Marketplaces', value: '4' },
        { label: 'Revenue Growth', value: '+85%' },
        { label: 'Amazon Share', value: '60%→35%' },
        { label: 'Operations', value: 'Unified' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['Multi-Channel', 'Walmart', 'eBay', 'Diversification']
    },
    {
      title: 'Walmart Marketplace Success',
      client: 'FitGear Athletics',
      industry: 'Fitness Equipment',
      description: 'Walmart Marketplace launch for fitness brand seeking alternative to Amazon.',
      challenge: 'Fitness equipment brand faced intense Amazon competition and wanted to establish strong Walmart presence as strategic alternative.',
      solution: 'Executed Walmart Marketplace launch with WFS fulfillment integration, optimized listings for Walmart SEO, integrated with existing operations, and built Walmart advertising presence.',
      results: [
        '$200K Walmart revenue',
        '2-day shipping badge',
        'Top 10 category rankings',
        '22% margin improvement'
      ],
      metrics: [
        { label: 'Walmart Revenue', value: '$200K' },
        { label: 'Fulfillment', value: 'WFS 2-Day' },
        { label: 'Rankings', value: 'Top 10' },
        { label: 'Margins', value: '+22%' }
      ],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      tags: ['Walmart', 'WFS', 'Fitness', 'Category Leadership']
    },
    {
      title: 'Etsy & Handmade Expansion',
      client: 'Artisan Crafts Co',
      industry: 'Handmade Goods',
      description: 'Multi-platform expansion for artisan brand to Etsy, Amazon Handmade, and direct website.',
      challenge: 'Handmade jewelry brand wanted to expand beyond single Etsy shop while maintaining artisan brand identity across multiple marketplaces.',
      solution: 'Launched on Amazon Handmade and expanded Etsy presence, built Shopify site for direct sales, implemented unified inventory and order management, optimized listings for handmade-specific SEO.',
      results: [
        '3 platform presence',
        '120% revenue growth',
        '$180K annual sales',
        '4.9 average rating'
      ],
      metrics: [
        { label: 'Platforms', value: '3' },
        { label: 'Revenue Growth', value: '+120%' },
        { label: 'Annual Sales', value: '$180K' },
        { label: 'Rating', value: '4.9★' }
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      tags: ['Etsy', 'Amazon Handmade', 'Artisan', 'Multi-Platform']
    }
  ],

  testimonials: [
    {
      quote: 'Amazon now drives 35% of our revenue, and it\'s all integrated seamlessly. The Brand Registry protection gives us peace of mind against counterfeiters.',
      author: 'Jennifer Walsh',
      role: 'CEO',
      company: 'HomeStyle Decor',
      rating: 5,
      location: 'Atlanta, GA'
    },
    {
      quote: 'We were terrified of being 100% Amazon dependent. Now we sell on four marketplaces from one dashboard, and revenue is up 85%.',
      author: 'David Chen',
      role: 'Founder',
      company: 'TechAccessories Pro',
      rating: 5,
      location: 'San Jose, CA'
    },
    {
      quote: 'Walmart was a mystery to us. They demystified it completely—we\'re now a top seller in our category with the 2-day badge.',
      author: 'Mike Rodriguez',
      role: 'E-commerce Director',
      company: 'FitGear Athletics',
      rating: 5,
      location: 'Miami, FL'
    }
  ],

  faqs: [
    {
      question: 'Which marketplaces should we sell on?',
      answer: 'It depends on your products and target market: Amazon offers the largest audience and is essential for most products. Walmart is growing fast with less competition and higher margins. eBay works well for unique, collectible, or refurbished items. Etsy suits handmade, vintage, and craft supplies. Specialty marketplaces (Wayfair, Newegg, Chewy) work for relevant niches. We analyze your products and competitors to recommend priority marketplaces.'
    },
    {
      question: 'How do you prevent overselling across channels?',
      answer: 'We implement real-time inventory synchronization through multi-channel management platforms. When an order comes in on any channel, inventory is immediately updated everywhere. We also implement buffer stock rules to account for any sync delays, and configure overselling rules that prioritize higher-margin channels when inventory is low.'
    },
    {
      question: 'What is Amazon Brand Registry and do we need it?',
      answer: 'Brand Registry is Amazon\'s program for brand owners that provides: enhanced brand protection against counterfeiters, access to A+ Content (enhanced listings), Amazon Stores (custom brand storefronts), Brand Analytics data, and sponsored brand advertising. You need a registered trademark to enroll. We strongly recommend it for any brand selling on Amazon.'
    },
    {
      question: 'How long does marketplace expansion take?',
      answer: 'Timeline varies by marketplace: Amazon takes 4-6 weeks (longer if Brand Registry needed). Walmart takes 6-8 weeks (application approval can take time). eBay takes 2-4 weeks. Specialty marketplaces take 4-8 weeks depending on application requirements. We can run multiple marketplace launches in parallel to accelerate expansion.'
    },
    {
      question: 'How do you optimize marketplace listings?',
      answer: 'Marketplace SEO optimization includes: keyword research for each marketplace\'s algorithm, title optimization with primary keywords, bullet points highlighting benefits, backend search terms, high-quality images meeting marketplace requirements, A+ Content for Amazon (enhanced brand content), and competitive pricing analysis. Each marketplace has different best practices we tailor to.'
    },
    {
      question: 'What about marketplace advertising?',
      answer: 'Marketplace advertising is essential for visibility: Amazon PPC (Sponsored Products, Brands, Display), Walmart Connect advertising, and eBay Promoted Listings. We develop advertising strategies including keyword targeting, bid optimization, and ACOS/ROAS targets. Advertising management can be included in ongoing support or handled by your team with our training.'
    }
  ],

  relatedServices: [
    {
      name: 'Inventory Management Systems',
      slug: 'inventory-management-systems',
      description: 'Unified inventory for marketplace selling.',
      icon: 'package'
    },
    {
      name: 'Order Fulfillment Systems',
      slug: 'order-fulfillment-systems',
      description: 'Streamlined fulfillment across all channels.',
      icon: 'truck'
    },
    {
      name: 'E-commerce Analytics',
      slug: 'ecommerce-analytics',
      description: 'Multi-channel analytics and profitability tracking.',
      icon: 'bar-chart-2'
    },
    {
      name: 'E-commerce Website Development',
      slug: 'ecommerce-website-development',
      description: 'Your own store to complement marketplace presence.',
      icon: 'shopping-cart'
    }
  ],

  seo: {
    title: 'Marketplace Integration Services | Amazon, Walmart, eBay Integration',
    description: 'Expert marketplace integration services. Sell on Amazon, Walmart, eBay and more with unified inventory, optimized listings, and seamless order management.',
    keywords: [
      'marketplace integration',
      'Amazon integration',
      'Walmart Marketplace',
      'eBay integration',
      'multi-channel selling',
      'marketplace management',
      'Amazon seller',
      'marketplace listing',
      'multi-channel e-commerce',
      'marketplace expansion'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Marketplace Integration Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      description: 'Expert marketplace integration services for Amazon, Walmart, eBay and more including listing optimization, inventory sync, and unified order management.'
    }
  }
};

export default marketplaceIntegrationData;

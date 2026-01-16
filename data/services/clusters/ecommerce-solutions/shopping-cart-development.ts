import { ServiceData } from '@/components/services/sections';

export const shoppingCartDevelopmentData: ServiceData = {
  name: 'Shopping Cart Development',
  slug: 'shopping-cart-development',
  tagline: 'Build high-converting shopping carts that minimize abandonment and maximize average order value',
  category: 'E-commerce Solutions',
  description: 'Our shopping cart development services create optimized cart and checkout experiences that convert more visitors into customers. We design and build cart systems that reduce abandonment, encourage larger orders, and streamline the path to purchase.',

  hero: {
    headline: 'Shopping Carts That Convert',
    subheadline: 'Custom shopping cart development that reduces abandonment, increases order value, and creates seamless checkout experiences for your customers.',
    description: 'Your shopping cart is where money is made or lost. Nearly 70% of shopping carts are abandoned—but it doesn\'t have to be that way. Our cart development specialists create intuitive, frictionless cart experiences optimized for conversion. From add-to-cart interactions to checkout completion, we engineer every step to maximize conversions and average order value.',
    keyFeatures: [
      'Custom cart functionality',
      'Checkout optimization',
      'Cart abandonment recovery',
      'Upsell & cross-sell systems',
      'Multi-step checkout flows',
      'Guest & express checkout'
    ],
    badges: ['Conversion Specialists', 'UX Experts', 'Checkout Optimization', 'A/B Testing']
  },

  painPoints: [
    {
      icon: 'shopping-cart',
      title: 'High Cart Abandonment',
      description: 'Customers add products but leave without buying. Your checkout process is losing you significant revenue.',
      stat: '69%',
      statLabel: 'average cart abandonment rate'
    },
    {
      icon: 'clock',
      title: 'Slow Checkout Process',
      description: 'Too many steps, too many fields, too much friction. Customers give up before completing their order.',
      stat: '27%',
      statLabel: 'abandon due to complicated checkout'
    },
    {
      icon: 'user-x',
      title: 'Forced Account Creation',
      description: 'Requiring registration before checkout drives customers away. They want to buy, not create an account.',
      stat: '24%',
      statLabel: 'abandon when forced to create account'
    },
    {
      icon: 'dollar-sign',
      title: 'Low Average Order Value',
      description: 'Customers buy single items when they could buy more. Missing upsells and bundles leave money on the table.',
      stat: '35%',
      statLabel: 'potential AOV increase unrealized'
    },
    {
      icon: 'smartphone',
      title: 'Poor Mobile Cart Experience',
      description: 'Your cart doesn\'t work well on mobile devices where most shoppers browse. Tiny buttons and awkward forms frustrate customers.',
      stat: '85%',
      statLabel: 'of mobile carts have usability issues'
    },
    {
      icon: 'eye-off',
      title: 'Hidden Costs Surprise',
      description: 'Shipping, taxes, and fees revealed only at checkout cause sticker shock and abandonment.',
      stat: '48%',
      statLabel: 'abandon due to unexpected extra costs'
    }
  ],

  solutions: [
    {
      icon: 'shopping-cart',
      title: 'Custom Cart Design',
      description: 'Purpose-built shopping cart interfaces optimized for your products and customers.',
      highlights: [
        'Intuitive add-to-cart UX',
        'Real-time cart updates',
        'Persistent cart storage',
        'Cart preview/mini-cart',
        'Quantity controls',
        'Remove/save for later'
      ]
    },
    {
      icon: 'check-circle',
      title: 'Checkout Optimization',
      description: 'Streamlined checkout flows that minimize friction and maximize completions.',
      highlights: [
        'Single-page checkout',
        'Multi-step with progress',
        'Guest checkout option',
        'Express checkout',
        'Address auto-complete',
        'Smart form validation'
      ]
    },
    {
      icon: 'trending-up',
      title: 'Upsell & Cross-sell',
      description: 'Strategic product recommendations that increase average order value.',
      highlights: [
        'In-cart recommendations',
        'Product bundles',
        'Frequently bought together',
        'Upgrade suggestions',
        'Add-on products',
        'Threshold incentives'
      ]
    },
    {
      icon: 'mail',
      title: 'Cart Recovery',
      description: 'Abandoned cart recovery systems that bring customers back to complete purchases.',
      highlights: [
        'Exit-intent popups',
        'Email recovery sequences',
        'SMS cart reminders',
        'Retargeting integration',
        'Discount incentives',
        'Browser notifications'
      ]
    },
    {
      icon: 'zap',
      title: 'Express Checkout',
      description: 'One-click and accelerated checkout options for returning customers.',
      highlights: [
        'Saved payment methods',
        'Address book',
        'One-click reorder',
        'Digital wallet checkout',
        'Shop Pay / Fast',
        'Buy Now buttons'
      ]
    },
    {
      icon: 'smartphone',
      title: 'Mobile Cart Optimization',
      description: 'Cart experiences designed specifically for mobile shopping behavior.',
      highlights: [
        'Touch-optimized controls',
        'Thumb-friendly layout',
        'Minimal typing required',
        'Mobile payment support',
        'Sticky cart actions',
        'Fast load performance'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'search',
        title: 'Cart Audit & Analysis',
        description: 'Analyze your current cart experience, identify abandonment causes, and map opportunities.',
        duration: '1 week',
        deliverables: [
          'Cart funnel analysis',
          'Abandonment research',
          'Competitor benchmarking',
          'User behavior analysis',
          'Opportunity identification',
          'Prioritized recommendations'
        ]
      },
      {
        icon: 'figma',
        title: 'UX Design',
        description: 'Design optimized cart and checkout flows based on conversion best practices.',
        duration: '1-2 weeks',
        deliverables: [
          'Cart wireframes',
          'Checkout flow design',
          'Mobile designs',
          'Micro-interactions',
          'Error state handling',
          'Prototype testing'
        ]
      },
      {
        icon: 'code',
        title: 'Development',
        description: 'Build custom cart functionality integrated with your e-commerce platform.',
        duration: '2-4 weeks',
        deliverables: [
          'Cart frontend development',
          'Checkout implementation',
          'Payment integration',
          'Real-time updates',
          'Cart persistence',
          'API integration'
        ]
      },
      {
        icon: 'package',
        title: 'Upsell Implementation',
        description: 'Implement product recommendation and upsell systems.',
        duration: '1-2 weeks',
        deliverables: [
          'Recommendation engine',
          'Cross-sell logic',
          'Bundle configuration',
          'Threshold incentives',
          'A/B test setup',
          'Performance tracking'
        ]
      },
      {
        icon: 'mail',
        title: 'Recovery Setup',
        description: 'Configure cart abandonment recovery automation.',
        duration: '1 week',
        deliverables: [
          'Exit intent popups',
          'Email sequences',
          'SMS integration',
          'Retargeting setup',
          'Discount logic',
          'Performance tracking'
        ]
      },
      {
        icon: 'trending-up',
        title: 'Optimization',
        description: 'Launch and continuously optimize based on real performance data.',
        duration: 'Ongoing',
        deliverables: [
          'Performance monitoring',
          'A/B testing',
          'Conversion analysis',
          'Iterative improvements',
          'ROI reporting',
          'Ongoing optimization'
        ]
      }
    ],
    totalDuration: '6-10 weeks for comprehensive implementation'
  },

  benefits: [
    {
      icon: 'trending-up',
      title: 'Higher Conversion Rate',
      description: 'Optimized cart and checkout dramatically reduce abandonment and increase completed orders.',
      stat: '35',
      statSuffix: '%',
      statLabel: 'average conversion rate improvement'
    },
    {
      icon: 'dollar-sign',
      title: 'Increased Order Value',
      description: 'Strategic upsells, cross-sells, and bundles increase what customers spend per order.',
      stat: '25',
      statSuffix: '%',
      statLabel: 'average AOV increase'
    },
    {
      icon: 'refresh-cw',
      title: 'Cart Recovery Revenue',
      description: 'Abandoned cart recovery campaigns bring back customers who would otherwise be lost.',
      stat: '15',
      statSuffix: '%',
      statLabel: 'of abandoned carts recovered'
    },
    {
      icon: 'smartphone',
      title: 'Mobile Conversions',
      description: 'Mobile-optimized cart captures more of the growing mobile shopping market.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'mobile conversion improvement'
    },
    {
      icon: 'clock',
      title: 'Faster Checkout',
      description: 'Streamlined process gets customers from cart to confirmation faster.',
      stat: '50',
      statSuffix: '%',
      statLabel: 'reduction in checkout time'
    },
    {
      icon: 'heart',
      title: 'Better Experience',
      description: 'Intuitive cart experience increases customer satisfaction and loyalty.',
      stat: '4.5',
      statSuffix: '★',
      statLabel: 'average customer satisfaction'
    }
  ],

  techStack: [
    {
      name: 'Frontend Technologies',
      description: 'Technologies for fast, interactive cart experiences.',
      technologies: [
        { name: 'React', icon: '/icons/tech/react.svg', category: 'Library', proficiency: 'expert' },
        { name: 'Vue.js', icon: '/icons/tech/vue.svg', category: 'Framework', proficiency: 'expert' },
        { name: 'Next.js', icon: '/icons/tech/nextjs.svg', category: 'Framework', proficiency: 'expert' },
        { name: 'Alpine.js', icon: '/icons/tech/alpinejs.svg', category: 'Framework', proficiency: 'expert' },
        { name: 'TypeScript', icon: '/icons/tech/typescript.svg', category: 'Language', proficiency: 'expert' },
        { name: 'Tailwind CSS', icon: '/icons/tech/tailwind.svg', category: 'Styling', proficiency: 'expert' }
      ]
    },
    {
      name: 'E-commerce Platforms',
      description: 'Platforms we build cart experiences for.',
      technologies: [
        { name: 'Shopify', icon: '/icons/tech/shopify.svg', category: 'Platform', proficiency: 'expert' },
        { name: 'WooCommerce', icon: '/icons/tech/woocommerce.svg', category: 'Platform', proficiency: 'expert' },
        { name: 'Magento', icon: '/icons/tech/magento.svg', category: 'Platform', proficiency: 'advanced' },
        { name: 'BigCommerce', icon: '/icons/tech/bigcommerce.svg', category: 'Platform', proficiency: 'advanced' },
        { name: 'Custom Platforms', icon: '/icons/tech/nodejs.svg', category: 'Custom', proficiency: 'expert' },
        { name: 'Headless Commerce', icon: '/icons/tech/api.svg', category: 'Architecture', proficiency: 'expert' }
      ]
    },
    {
      name: 'Cart & Recovery Tools',
      description: 'Specialized cart and recovery solutions.',
      technologies: [
        { name: 'Klaviyo', icon: '/icons/tech/klaviyo.svg', category: 'Email', proficiency: 'expert' },
        { name: 'Attentive', icon: '/icons/tech/attentive.svg', category: 'SMS', proficiency: 'advanced' },
        { name: 'Rebuy', icon: '/icons/tech/rebuy.svg', category: 'Upsell', proficiency: 'expert' },
        { name: 'CartHook', icon: '/icons/tech/carthook.svg', category: 'Checkout', proficiency: 'advanced' },
        { name: 'Bold Upsell', icon: '/icons/tech/bold.svg', category: 'Upsell', proficiency: 'expert' },
        { name: 'OptinMonster', icon: '/icons/tech/optinmonster.svg', category: 'Popups', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Analytics & Testing',
      description: 'Tools for measuring and optimizing cart performance.',
      technologies: [
        { name: 'Google Analytics 4', icon: '/icons/tech/google-analytics.svg', category: 'Analytics', proficiency: 'expert' },
        { name: 'Hotjar', icon: '/icons/tech/hotjar.svg', category: 'Behavior', proficiency: 'expert' },
        { name: 'Optimizely', icon: '/icons/tech/optimizely.svg', category: 'A/B Testing', proficiency: 'advanced' },
        { name: 'VWO', icon: '/icons/tech/vwo.svg', category: 'A/B Testing', proficiency: 'advanced' },
        { name: 'Lucky Orange', icon: '/icons/tech/luckyorange.svg', category: 'Recording', proficiency: 'advanced' },
        { name: 'Segment', icon: '/icons/tech/segment.svg', category: 'CDP', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Cart Optimization',
        description: 'Optimize existing cart and checkout for better conversions.',
        price: '$5,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Cart Audit & Analysis', included: true },
          { name: 'Checkout Flow Optimization', included: true },
          { name: 'Mobile Improvements', included: true },
          { name: 'Basic Upsell Setup', included: true },
          { name: 'Form Optimization', included: true },
          { name: 'A/B Test Setup', included: true },
          { name: '30-Day Support', included: true },
          { name: 'Custom Cart Development', included: false }
        ],
        ctaText: 'Optimize Cart',
        highlighted: false
      },
      {
        name: 'Custom Cart Build',
        description: 'Complete custom cart and checkout development.',
        price: '$15,000',
        priceNote: 'Starting price',
        badge: 'Most Popular',
        features: [
          { name: 'Custom Cart Design', included: true },
          { name: 'Custom Checkout Flow', included: true },
          { name: 'Express Checkout', included: true },
          { name: 'Upsell & Cross-sell System', included: true },
          { name: 'Cart Abandonment Recovery', included: true },
          { name: 'Mobile Optimization', included: true },
          { name: 'Analytics Integration', included: true },
          { name: '60-Day Support', included: true }
        ],
        ctaText: 'Build Custom Cart',
        highlighted: true
      },
      {
        name: 'Enterprise Cart',
        description: 'Advanced cart systems for high-volume stores.',
        price: '$35,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Everything in Custom Build', included: true },
          { name: 'Headless Cart Architecture', included: true },
          { name: 'Advanced Personalization', included: true },
          { name: 'Multi-Currency Support', included: true },
          { name: 'Advanced Recovery Automation', included: true },
          { name: 'Real-time Inventory Integration', included: true },
          { name: 'Performance Optimization', included: true },
          { name: '90-Day Support', included: true }
        ],
        ctaText: 'Contact for Enterprise',
        highlighted: false
      }
    ],
    customNote: 'Cart development scope varies significantly based on platform, integrations, and functionality requirements. Contact us for detailed scoping and accurate pricing.'
  },

  portfolio: [
    {
      title: 'Fashion E-commerce Cart Redesign',
      client: 'Luxe Boutique',
      industry: 'Fashion Retail',
      description: 'Complete cart and checkout overhaul for fashion retailer with focus on mobile and upsells.',
      challenge: 'High cart abandonment (78%) and low AOV. Mobile checkout was particularly problematic with small buttons and confusing flow.',
      solution: 'Redesigned cart with sticky summary, size/color editing, mobile-optimized checkout, strategic upsells ("Complete the Look"), and Klaviyo cart recovery integration.',
      results: [
        'Abandonment reduced to 58%',
        '32% AOV increase',
        '45% mobile conversion lift',
        '$125K monthly revenue increase'
      ],
      metrics: [
        { label: 'Abandonment', value: '-20%' },
        { label: 'AOV Increase', value: '32%' },
        { label: 'Mobile Conversion', value: '+45%' },
        { label: 'Revenue Lift', value: '$125K/mo' }
      ],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['Fashion', 'Mobile', 'Upsells', 'Recovery']
    },
    {
      title: 'Subscription Box Cart Experience',
      client: 'SnackCrate Monthly',
      industry: 'Subscription Commerce',
      description: 'Custom cart for subscription box with complex product customization.',
      challenge: 'Subscription box company needed cart that allowed box customization, subscription plan selection, and one-time add-ons—all in seamless experience.',
      solution: 'Built custom cart with visual box builder, subscription plan comparison, one-time product add-ons, gift subscription flow, and smart recovery focused on subscription value proposition.',
      results: [
        '28% conversion increase',
        '40% annual plan adoption',
        '15% add-on attach rate',
        '22% recovery rate'
      ],
      metrics: [
        { label: 'Conversion', value: '+28%' },
        { label: 'Annual Plans', value: '40%' },
        { label: 'Add-on Rate', value: '15%' },
        { label: 'Recovery', value: '22%' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['Subscription', 'Custom Build', 'Box Builder', 'Recovery']
    },
    {
      title: 'B2B Wholesale Cart System',
      client: 'OfficeSupply Pro',
      industry: 'B2B Distribution',
      description: 'Complex B2B cart with customer-specific pricing, bulk ordering, and approval workflows.',
      challenge: 'B2B distributor needed cart supporting customer-specific pricing, minimum order quantities, bulk ordering, quote requests, and multi-user approval workflows.',
      solution: 'Developed custom B2B cart with tiered pricing display, bulk quantity tools, quick-order pad, quote request flow, and approval routing for orders above spend limits.',
      results: [
        '50% online order increase',
        '35% larger average orders',
        '60% quote-to-order conversion',
        '40% reduction in phone orders'
      ],
      metrics: [
        { label: 'Online Orders', value: '+50%' },
        { label: 'Order Size', value: '+35%' },
        { label: 'Quote Conversion', value: '60%' },
        { label: 'Phone Reduction', value: '-40%' }
      ],
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop',
      tags: ['B2B', 'Wholesale', 'Custom Build', 'Quotes']
    },
    {
      title: 'Electronics Store Express Checkout',
      client: 'TechDirect',
      industry: 'Consumer Electronics',
      description: 'High-performance cart with express checkout and product comparison features.',
      challenge: 'Electronics retailer needed fast checkout for impulse purchases, product comparison in cart, and seamless integration with financing options for high-ticket items.',
      solution: 'Built lightning-fast cart with one-click express checkout, in-cart product comparison, integrated financing calculator, and smart warranty upsells at checkout.',
      results: [
        '42% faster checkout',
        '25% warranty attach rate',
        '18% financing adoption',
        '$85K monthly revenue lift'
      ],
      metrics: [
        { label: 'Checkout Speed', value: '+42%' },
        { label: 'Warranty Rate', value: '25%' },
        { label: 'Financing Use', value: '18%' },
        { label: 'Revenue Lift', value: '$85K/mo' }
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['Electronics', 'Express Checkout', 'Financing', 'Upsells']
    }
  ],

  testimonials: [
    {
      quote: 'Our cart abandonment dropped 20 points and AOV jumped 32%. The "Complete the Look" upsells alone paid for the entire project in the first month.',
      author: 'Jennifer Liu',
      role: 'E-commerce Manager',
      company: 'Luxe Boutique',
      rating: 5,
      location: 'Miami, FL'
    },
    {
      quote: 'The custom box builder they created is now our biggest selling point. Customers love customizing their crates, and our annual plan adoption skyrocketed.',
      author: 'David Park',
      role: 'CEO',
      company: 'SnackCrate Monthly',
      rating: 5,
      location: 'Austin, TX'
    },
    {
      quote: 'B2B e-commerce is complex, but they built a cart that our customers actually want to use. Online orders are up 50% since launch.',
      author: 'Michelle Torres',
      role: 'VP Digital',
      company: 'OfficeSupply Pro',
      rating: 5,
      location: 'Dallas, TX'
    }
  ],

  faqs: [
    {
      question: 'What causes most cart abandonment?',
      answer: 'The top causes of cart abandonment are: unexpected extra costs (shipping, taxes, fees) revealed at checkout (48%), required account creation (24%), complicated checkout process (17%), website errors or crashes (17%), didn\'t trust site with payment info (17%), and delivery too slow (16%). We address each of these through transparent pricing, guest checkout, streamlined flows, robust testing, trust signals, and delivery expectation setting.'
    },
    {
      question: 'How do you measure cart optimization success?',
      answer: 'We track multiple metrics: cart-to-checkout rate (% of carts that start checkout), checkout completion rate (% that complete purchase), overall conversion rate, average order value, cart abandonment rate, cart recovery rate (for abandoned carts), mobile vs desktop conversion, and revenue per visitor. We establish baselines before optimization and track improvements through A/B testing.'
    },
    {
      question: 'What upsell strategies work best?',
      answer: 'Effective upsell strategies include: product bundles at discount ("Frequently Bought Together"), complementary products ("Complete the Look"), upgrade options (larger size, premium version), threshold incentives ("Add $15 for free shipping"), last-minute add-ons at checkout, and post-purchase upsells. We implement based on your product catalog and customer behavior data, then A/B test to optimize.'
    },
    {
      question: 'How does cart recovery work?',
      answer: 'Cart recovery uses multiple touchpoints: exit-intent popups (capturing email before they leave), email sequences (typically 3 emails over 24-72 hours), SMS reminders (for mobile-first audiences), retargeting ads (showing abandoned products), and browser push notifications. Best results combine multiple channels with strategic timing and incentives (free shipping, discount codes for high-value carts).'
    },
    {
      question: 'Should we use single-page or multi-step checkout?',
      answer: 'Both can work well depending on context. Single-page checkout reduces perceived steps and works great for simple purchases. Multi-step checkout can feel less overwhelming for complex orders and allows progress saving. Mobile often benefits from multi-step with smaller focused forms. We typically A/B test both approaches and let data decide for your specific audience and products.'
    },
    {
      question: 'Can you optimize cart on our existing platform?',
      answer: 'Yes, we optimize carts on all major platforms: Shopify (liquid customization, apps), WooCommerce (plugins, custom code), Magento (modules, theme customization), BigCommerce (apps, checkout SDK), and custom platforms. The approach varies by platform—some allow deep checkout customization while others (like Shopify non-Plus) have limitations we work within creatively.'
    }
  ],

  relatedServices: [
    {
      name: 'E-commerce Website Development',
      slug: 'ecommerce-website-development',
      description: 'Complete e-commerce solutions with optimized cart experiences.',
      icon: 'shopping-cart'
    },
    {
      name: 'Payment Gateway Integration',
      slug: 'payment-gateway-integration',
      description: 'Seamless payment processing for frictionless checkout.',
      icon: 'credit-card'
    },
    {
      name: 'Conversion Optimization',
      slug: 'conversion-optimization',
      description: 'Data-driven optimization across your entire purchase funnel.',
      icon: 'trending-up'
    },
    {
      name: 'E-commerce Analytics',
      slug: 'ecommerce-analytics',
      description: 'Analytics to understand and improve cart performance.',
      icon: 'bar-chart-2'
    }
  ],

  seo: {
    title: 'Shopping Cart Development Services | E-commerce Checkout Optimization',
    description: 'Custom shopping cart development and checkout optimization services. Reduce abandonment, increase AOV, and improve conversions with expert cart engineering.',
    keywords: [
      'shopping cart development',
      'checkout optimization',
      'cart abandonment',
      'e-commerce cart',
      'checkout design',
      'cart conversion',
      'upsell cross-sell',
      'cart recovery',
      'checkout flow',
      'mobile cart optimization'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Shopping Cart Development Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      description: 'Custom shopping cart development and checkout optimization services that reduce abandonment, increase average order value, and improve e-commerce conversions.'
    }
  }
};

export default shoppingCartDevelopmentData;

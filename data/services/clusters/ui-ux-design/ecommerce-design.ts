import { ServiceData } from '@/components/services/sections';

export const ecommerceDesignData: ServiceData = {
  name: 'E-commerce Design',
  slug: 'ecommerce-design',
  tagline: 'Conversion-Focused Design',
  category: 'UI/UX Design',
  description: 'Revenue-focused e-commerce design that converts browsers into buyers. We create stunning online stores with conversion psychology built into every element to maximize your sales.',
  hero: {
    headline: 'E-commerce Design Services',
    subheadline: 'Convert Browsers Into Buyers',
    description: 'Design online shopping experiences that look stunning and sell effectively. Our conversion-optimized e-commerce designs maximize revenue through strategic UX and beautiful interfaces.',
    keyFeatures: [
      'Conversion Optimization',
      'Mobile Commerce',
      'Checkout UX',
      'Product Page Design'
    ],
    badges: ['500+ Stores', '$2B+ Revenue', '156% Avg Conversion Lift']
  },
  painPoints: [
    {
      icon: 'ShoppingCart',
      title: 'High Cart Abandonment',
      description: 'Complicated checkout flows cause 70%+ of shoppers to abandon carts before purchase.',
      stat: '69.8%',
      statLabel: 'Avg abandonment rate'
    },
    {
      icon: 'Smartphone',
      title: 'Poor Mobile Experience',
      description: 'Desktop-first stores deliver frustrating mobile experiences, losing 60%+ of customers.',
      stat: '73%',
      statLabel: 'Mobile commerce growth'
    },
    {
      icon: 'Clock',
      title: 'Slow Page Load Times',
      description: 'Heavy stores lose sales with every second of delay as shoppers bounce.',
      stat: '7%',
      statLabel: 'Drop per second'
    },
    {
      icon: 'Navigation',
      title: 'Confusing Navigation',
      description: 'Shoppers cannot find products easily, leading to frustration and abandonment.',
      stat: '38%',
      statLabel: 'Leave due to navigation'
    },
    {
      icon: 'Image',
      title: 'Weak Product Presentation',
      description: 'Low-quality images and sparse descriptions fail to convey value.',
      stat: '75%',
      statLabel: 'Rely on product photos'
    },
    {
      icon: 'Shield',
      title: 'Missing Trust Signals',
      description: 'Lack of security indicators makes shoppers wary of entering payment info.',
      stat: '17%',
      statLabel: 'Abandon for security'
    }
  ],
  solutions: [
    {
      icon: 'Palette',
      title: 'Custom Store Design',
      description: 'Bespoke e-commerce experiences tailored to your brand and products.',
      highlights: ['Brand-Aligned Design', 'Custom Components', 'Platform Optimization', 'Scalable Systems']
    },
    {
      icon: 'CreditCard',
      title: 'Checkout Optimization',
      description: 'Streamlined checkout flows that minimize friction and abandonment.',
      highlights: ['Single-Page Checkout', 'Guest Checkout', 'Progress Indicators', 'Trust Signals']
    },
    {
      icon: 'Package',
      title: 'Product Page Design',
      description: 'High-converting product pages that showcase items and drive confidence.',
      highlights: ['Image Galleries', 'Variant Selection', 'Cross-sell Design', 'Review Display']
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Commerce',
      description: 'Mobile-first shopping experiences optimized for thumb-friendly navigation.',
      highlights: ['Touch Optimization', 'Mobile Navigation', 'Fast Checkout', 'PWA Design']
    },
    {
      icon: 'Search',
      title: 'Category & Search UX',
      description: 'Intuitive product discovery systems for quick, effortless shopping.',
      highlights: ['Faceted Filtering', 'Search Results', 'Visual Merchandising', 'Infinite Scroll']
    },
    {
      icon: 'TrendingUp',
      title: 'Conversion Optimization',
      description: 'Data-driven design improvements to continuously increase sales.',
      highlights: ['A/B Test Design', 'Heatmap Analysis', 'Funnel Optimization', 'Micro-conversions']
    }
  ],
  process: {
    steps: [
      {
        icon: 'BarChart2',
        title: 'Commerce Analysis',
        description: 'Deep dive into your business model, products, and customer behavior.',
        duration: '1 week',
        deliverables: ['Business Review', 'Competitor Audit', 'Customer Journey Map']
      },
      {
        icon: 'Sitemap',
        title: 'UX Strategy',
        description: 'Developing architecture and flows that guide shoppers toward purchase.',
        duration: '1 week',
        deliverables: ['Site Architecture', 'User Flows', 'Conversion Path Maps']
      },
      {
        icon: 'Layout',
        title: 'Visual Design',
        description: 'Creating stunning store designs that reinforce brand while converting.',
        duration: '2-3 weeks',
        deliverables: ['Homepage Design', 'Category Templates', 'Product Pages', 'Checkout Design']
      },
      {
        icon: 'Play',
        title: 'Prototype & Test',
        description: 'Building interactive prototypes validated with real users.',
        duration: '1-2 weeks',
        deliverables: ['Interactive Prototype', 'Usability Tests', 'Design Iterations']
      },
      {
        icon: 'FileCode',
        title: 'Development Handoff',
        description: 'Comprehensive specs ensuring pixel-perfect implementation.',
        duration: '1 week',
        deliverables: ['Design System Docs', 'Component Specs', 'Asset Package']
      },
      {
        icon: 'Activity',
        title: 'Optimization',
        description: 'Post-launch analysis and design refinements for conversion.',
        duration: 'Ongoing',
        deliverables: ['Analytics Review', 'A/B Tests', 'Iterative Improvements']
      }
    ],
    totalDuration: '8-12 weeks'
  },
  benefits: [
    {
      icon: 'TrendingUp',
      title: 'Higher Conversion Rates',
      description: 'Strategic design optimization typically increases conversions 50-200%.',
      stat: '156%',
      statSuffix: '',
      statLabel: 'Avg conversion increase'
    },
    {
      icon: 'DollarSign',
      title: 'Increased Order Value',
      description: 'Smart cross-sell design increases how much customers spend.',
      stat: '23%',
      statSuffix: '',
      statLabel: 'Higher order value'
    },
    {
      icon: 'ShoppingCart',
      title: 'Reduced Abandonment',
      description: 'Optimized checkout keeps shoppers moving toward completion.',
      stat: '35%',
      statSuffix: '',
      statLabel: 'Less abandonment'
    },
    {
      icon: 'RefreshCw',
      title: 'Better Retention',
      description: 'Delightful experiences bring customers back repeatedly.',
      stat: '67%',
      statSuffix: '',
      statLabel: 'Higher repeat rate'
    },
    {
      icon: 'Zap',
      title: 'Faster Purchases',
      description: 'Intuitive flows reduce shopping time and accelerate buying.',
      stat: '40%',
      statSuffix: '',
      statLabel: 'Faster checkout'
    },
    {
      icon: 'Target',
      title: 'Lower Acquisition Cost',
      description: 'Higher conversions mean more revenue from the same traffic.',
      stat: '45%',
      statSuffix: '',
      statLabel: 'Lower CAC'
    }
  ],
  techStack: [
    {
      name: 'E-commerce Platforms',
      description: 'Major commerce platforms',
      technologies: [
        { name: 'Shopify', icon: 'shopify', category: 'Platform', proficiency: 'expert' },
        { name: 'WooCommerce', icon: 'woocommerce', category: 'Platform', proficiency: 'expert' },
        { name: 'Magento', icon: 'magento', category: 'Platform', proficiency: 'advanced' },
        { name: 'BigCommerce', icon: 'bigcommerce', category: 'Platform', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Design Tools',
      description: 'E-commerce design software',
      technologies: [
        { name: 'Figma', icon: 'figma', category: 'Design', proficiency: 'expert' },
        { name: 'Adobe XD', icon: 'adobexd', category: 'Design', proficiency: 'expert' },
        { name: 'Sketch', icon: 'sketch', category: 'Design', proficiency: 'advanced' },
        { name: 'Framer', icon: 'framer', category: 'Prototype', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Analytics & Testing',
      description: 'Conversion optimization tools',
      technologies: [
        { name: 'Google Analytics', icon: 'analytics', category: 'Analytics', proficiency: 'expert' },
        { name: 'Hotjar', icon: 'hotjar', category: 'Heatmaps', proficiency: 'expert' },
        { name: 'Optimizely', icon: 'optimizely', category: 'A/B Testing', proficiency: 'advanced' },
        { name: 'Clarity', icon: 'clarity', category: 'Analytics', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Headless Commerce',
      description: 'Modern commerce architecture',
      technologies: [
        { name: 'Shopify Hydrogen', icon: 'hydrogen', category: 'Headless', proficiency: 'expert' },
        { name: 'Medusa', icon: 'medusa', category: 'Headless', proficiency: 'advanced' },
        { name: 'Saleor', icon: 'saleor', category: 'Headless', proficiency: 'advanced' },
        { name: 'Commerce.js', icon: 'commercejs', category: 'Headless', proficiency: 'proficient' }
      ]
    }
  ],
  pricing: {
    plans: [
      {
        name: 'Starter Store',
        description: 'Essential design for new stores',
        price: '$15,000',
        priceNote: 'One-time payment',
        features: [
          { name: 'Homepage Design', included: true },
          { name: 'Category Page Template', included: true },
          { name: 'Product Page Template', included: true },
          { name: 'Cart & Checkout Design', included: true },
          { name: 'Mobile Responsive', included: true },
          { name: '2 Revision Rounds', included: true },
          { name: 'Advanced Templates', included: false },
          { name: 'A/B Test Designs', included: false }
        ],
        ctaText: 'Launch Store',
        highlighted: false
      },
      {
        name: 'Growth Store',
        description: 'Full design for conversion focus',
        price: '$35,000',
        priceNote: 'One-time payment',
        badge: 'Most Popular',
        features: [
          { name: 'Everything in Starter', included: true },
          { name: 'Advanced Category Templates', included: true },
          { name: 'Collection Page Design', included: true },
          { name: 'Search Results Design', included: true },
          { name: 'Account Area Design', included: true },
          { name: 'Email Templates', included: true },
          { name: 'A/B Test Designs', included: true },
          { name: '3 Revision Rounds', included: true }
        ],
        ctaText: 'Grow Revenue',
        highlighted: true
      },
      {
        name: 'Enterprise Commerce',
        description: 'Full-scale transformation',
        price: '$75,000+',
        priceNote: 'Starting price',
        features: [
          { name: 'Everything in Growth', included: true },
          { name: 'Complete Design System', included: true },
          { name: 'Multi-Store Design', included: true },
          { name: 'B2B Portal Design', included: true },
          { name: 'Subscription UX', included: true },
          { name: 'Loyalty Program Design', included: true },
          { name: 'Ongoing CRO Support', included: true },
          { name: 'Dedicated Team', included: true }
        ],
        ctaText: 'Contact Sales',
        highlighted: false
      }
    ],
    customNote: 'E-commerce design scope varies by catalog size. Contact us to discuss your specific needs.'
  },
  portfolio: [
    {
      title: 'LuxeWear Fashion Store',
      client: 'LuxeWear Inc',
      industry: 'Fashion E-commerce',
      description: 'Complete redesign of premium fashion retailer focusing on product presentation and mobile.',
      challenge: 'LuxeWear had beautiful products but their outdated store design was hurting conversions and mobile experience.',
      solution: 'We redesigned the entire store with stunning product galleries, streamlined checkout, and mobile-first approach.',
      results: [
        '185% conversion increase',
        '43% higher AOV',
        '$12M additional revenue',
        '52% mobile conversion lift'
      ],
      metrics: [
        { label: 'Conversion Lift', value: '+185%' },
        { label: 'AOV Increase', value: '+43%' },
        { label: 'Revenue Added', value: '$12M' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['Shopify Plus', 'Fashion', 'Mobile Commerce', 'Luxury']
    },
    {
      title: 'TechGear Electronics',
      client: 'TechGear Direct',
      industry: 'Electronics E-commerce',
      description: 'High-performance electronics store with advanced filtering and optimized checkout.',
      challenge: 'TechGear needed to handle complex product variations and technical specs while maintaining fast UX.',
      solution: 'We built a custom Shopify theme with advanced filtering, comparison features, and one-page checkout.',
      results: [
        '124% conversion lift',
        '52% less abandonment',
        'Sub-2s load times',
        '89% search satisfaction'
      ],
      metrics: [
        { label: 'Conversion Lift', value: '+124%' },
        { label: 'Abandonment Drop', value: '-52%' },
        { label: 'Load Time', value: '<2s' }
      ],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['Headless', 'Electronics', 'Advanced Filtering', 'Performance']
    },
    {
      title: 'NaturalBeauty Cosmetics',
      client: 'NaturalBeauty Co',
      industry: 'Beauty E-commerce',
      description: 'Immersive beauty shopping with skin matching and subscription design.',
      challenge: 'NaturalBeauty needed to help customers find the right products and drive subscription signups.',
      solution: 'We designed an immersive experience with shade-matching tools, virtual try-on, and seamless subscription UX.',
      results: [
        '203% subscription signups',
        '67% repeat purchase increase',
        '$8M first-year revenue',
        '4.9 star rating'
      ],
      metrics: [
        { label: 'Subscriptions', value: '+203%' },
        { label: 'Repeat Rate', value: '+67%' },
        { label: 'Year 1 Revenue', value: '$8M' }
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      tags: ['WooCommerce', 'Beauty', 'Subscriptions', 'AR Integration']
    },
    {
      title: 'GourmetBox Subscription',
      client: 'GourmetBox',
      industry: 'Food E-commerce',
      description: 'Subscription-first e-commerce platform for premium food boxes and artisan products.',
      challenge: 'GourmetBox needed a platform that prioritized subscription signups while allowing one-time purchases.',
      solution: 'Custom subscription-focused design with gift options, flexible delivery scheduling, and taste preference quiz.',
      results: [
        '275% subscription growth',
        '82% subscriber retention',
        '45% gift purchase increase',
        'Best Food E-commerce Award'
      ],
      metrics: [
        { label: 'Subscription Growth', value: '+275%' },
        { label: 'Retention Rate', value: '82%' },
        { label: 'Gift Sales', value: '+45%' }
      ],
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
      tags: ['Subscription', 'Food', 'Shopify', 'Custom Design']
    }
  ],
  testimonials: [
    {
      quote: 'Our conversion rate doubled after the redesign. The attention to checkout optimization alone paid for the entire project in the first month.',
      author: 'Rachel Kim',
      role: 'E-commerce Director',
      company: 'LuxeWear Inc',
      rating: 5,
      location: 'Los Angeles, USA'
    },
    {
      quote: 'They understood that e-commerce design is not just about looking good, it is about selling. Our revenue increase speaks for itself.',
      author: 'Michael Torres',
      role: 'Founder & CEO',
      company: 'TechGear Direct',
      rating: 5,
      location: 'Austin, USA'
    },
    {
      quote: 'The subscription UX they designed is brilliant. Our recurring revenue has transformed our entire business model.',
      author: 'Sarah Lin',
      role: 'Head of Digital',
      company: 'NaturalBeauty Co',
      rating: 5,
      location: 'New York, USA'
    }
  ],
  faqs: [
    {
      question: 'Which e-commerce platform do you recommend?',
      answer: 'Platform choice depends on your specific needs. For most mid-market businesses, Shopify offers the best balance of flexibility and ease. For complex catalogs or B2B needs, Magento or custom headless solutions may be better. We will assess your requirements and recommend the best fit.'
    },
    {
      question: 'How do you ensure designs will convert?',
      answer: 'We base every design decision on conversion research and proven patterns. This includes analysis of your analytics, competitor research, user testing, and e-commerce UX best practices. We also build in A/B testing capabilities so designs can be optimized post-launch.'
    },
    {
      question: 'Do you handle development or just design?',
      answer: 'We offer both design-only and design-plus-development packages. For design-only projects, we provide comprehensive documentation. For full-service, our developers implement designs with the same attention to detail as the design phase.'
    },
    {
      question: 'How do you approach mobile-first design?',
      answer: 'With 60%+ of e-commerce traffic on mobile, we design for mobile first, then expand to larger screens. This ensures touch-friendly interfaces, simplified navigation, optimized images, and fast loading. We test extensively on actual devices.'
    },
    {
      question: 'Can you redesign without losing SEO?',
      answer: 'Absolutely. We maintain URL structures, implement proper redirects, preserve meta data, and ensure new designs maintain or improve SEO. Many of our redesigns result in both conversion lifts and improved search rankings.'
    },
    {
      question: 'How do you handle large catalogs?',
      answer: 'Large catalogs require sophisticated navigation, filtering, and search design. We create scalable template systems, intuitive categorization, and optimized search experiences. We also consider performance with lazy loading and pagination.'
    }
  ],
  relatedServices: [
    {
      name: 'User Experience Design',
      slug: 'user-experience-design',
      description: 'Deep UX research and optimization',
      icon: 'Users'
    },
    {
      name: 'Web Design',
      slug: 'web-design',
      description: 'Marketing pages for your store',
      icon: 'Monitor'
    },
    {
      name: 'Mobile App Design',
      slug: 'mobile-app-design',
      description: 'Native shopping app design',
      icon: 'Smartphone'
    },
    {
      name: 'E-commerce Development',
      slug: 'ecommerce-development',
      description: 'Full-stack store development',
      icon: 'Code'
    }
  ],
  seo: {
    title: 'E-commerce Design Services | Conversion-Optimized Online Store Design',
    description: 'E-commerce design services that convert browsers into buyers. Custom online store design with checkout optimization, mobile commerce, and conversion rate optimization. 156% average conversion lift.',
    keywords: [
      'e-commerce design',
      'online store design',
      'shopify design',
      'woocommerce design',
      'checkout optimization',
      'conversion design',
      'mobile commerce',
      'product page design',
      'e-commerce UX',
      'shopping cart design'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'E-commerce Design',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'E-commerce Design Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Shopify Store Design'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Checkout Optimization'
            }
          }
        ]
      }
    }
  }
};

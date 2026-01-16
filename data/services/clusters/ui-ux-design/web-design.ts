// Web Design - UI/UX Design Cluster
// Comprehensive service data for web design services

import { ServiceData } from '@/components/services/sections';

export const webDesignData: ServiceData = {
  slug: 'web-design',
  name: 'Web Design',
  tagline: 'Beautiful, responsive websites that convert visitors into customers',
  description: 'Create stunning, user-centered websites that captivate visitors and drive business results. Our web design services combine aesthetic excellence with strategic thinking to deliver websites that look amazing and perform even better.',
  category: 'UI/UX Design',

  hero: {
    headline: 'Web Design',
    subheadline: 'Designs That Captivate and Convert',
    description: 'Transform your online presence with expertly crafted web designs. We create beautiful, responsive websites that engage visitors, communicate your brand story, and guide users toward meaningful actions.',
    keyFeatures: [
      'Responsive & Mobile-First Design',
      'Conversion-Optimized Layouts',
      'Brand-Aligned Visual Identity',
      'Accessibility Compliant'
    ],
    badges: ['Figma', 'Responsive', 'WCAG 2.1', 'Design Systems']
  },

  painPoints: [
    {
      icon: 'TrendingDown',
      title: 'High Bounce Rates',
      description: 'Visitors leave within seconds because the design fails to capture attention or communicate value quickly.',
      stat: '55%',
      statLabel: 'avg bounce rate'
    },
    {
      icon: 'Smartphone',
      title: 'Poor Mobile Experience',
      description: 'Website looks broken or is difficult to use on mobile devices where most visitors browse.',
      stat: '60%',
      statLabel: 'mobile traffic'
    },
    {
      icon: 'Clock',
      title: 'Outdated Design',
      description: 'Website looks dated compared to competitors, undermining credibility and trust.',
      stat: '75%',
      statLabel: 'judge credibility by design'
    },
    {
      icon: 'Target',
      title: 'Low Conversion Rates',
      description: 'Beautiful design that doesn\'t guide users toward desired actions or business goals.',
      stat: '2.3%',
      statLabel: 'avg conversion rate'
    },
    {
      icon: 'Accessibility',
      title: 'Accessibility Issues',
      description: 'Website excludes users with disabilities, risking lawsuits and lost customers.',
      stat: '98%',
      statLabel: 'sites have issues'
    },
    {
      icon: 'Palette',
      title: 'Inconsistent Branding',
      description: 'Design doesn\'t align with brand identity, creating confusion and weak brand recognition.',
      stat: '23%',
      statLabel: 'revenue increase with consistency'
    }
  ],

  solutions: [
    {
      icon: 'Layout',
      title: 'Custom Website Design',
      description: 'Bespoke designs tailored to your brand, audience, and business objectives.',
      highlights: [
        'Brand-aligned aesthetics',
        'Custom visual elements',
        'Unique page layouts',
        'Competitive differentiation'
      ]
    },
    {
      icon: 'Smartphone',
      title: 'Responsive Design',
      description: 'Websites that look and work perfectly on every device and screen size.',
      highlights: [
        'Mobile-first approach',
        'Fluid layouts',
        'Touch-optimized interfaces',
        'Cross-device testing'
      ]
    },
    {
      icon: 'Target',
      title: 'Conversion Design',
      description: 'Strategic design that guides users through conversion funnels and drives action.',
      highlights: [
        'Strategic CTAs',
        'Visual hierarchy',
        'Trust signals',
        'A/B testing support'
      ]
    },
    {
      icon: 'Zap',
      title: 'Landing Page Design',
      description: 'High-converting landing pages for campaigns, products, and lead generation.',
      highlights: [
        'Campaign-specific pages',
        'Lead capture optimization',
        'Product showcases',
        'Event pages'
      ]
    },
    {
      icon: 'RefreshCw',
      title: 'Website Redesign',
      description: 'Transform outdated websites into modern, high-performing digital experiences.',
      highlights: [
        'Visual modernization',
        'UX improvements',
        'Performance optimization',
        'SEO preservation'
      ]
    },
    {
      icon: 'Accessibility',
      title: 'Accessible Design',
      description: 'Inclusive designs that work for users of all abilities and meet compliance standards.',
      highlights: [
        'WCAG 2.1 compliance',
        'Screen reader support',
        'Keyboard navigation',
        'Color contrast optimization'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'MessageSquare',
        title: 'Discovery & Strategy',
        description: 'Understand your brand, goals, audience, and competitive landscape to inform design direction.',
        duration: '1 week',
        deliverables: ['Creative brief', 'Competitor analysis', 'Mood boards', 'Design direction']
      },
      {
        icon: 'Layout',
        title: 'Wireframing',
        description: 'Create structural layouts focusing on information architecture and user flow.',
        duration: '1-2 weeks',
        deliverables: ['Wireframes', 'Site map', 'User flows', 'Content structure']
      },
      {
        icon: 'Palette',
        title: 'Visual Design',
        description: 'Develop the visual language including colors, typography, imagery, and UI elements.',
        duration: '2-3 weeks',
        deliverables: ['Style guide', 'Homepage design', 'Key page designs', 'UI components']
      },
      {
        icon: 'Layers',
        title: 'Full Design',
        description: 'Complete all page designs with responsive variations and interactive states.',
        duration: '2-4 weeks',
        deliverables: ['All page designs', 'Mobile designs', 'Interactive states', 'Asset library']
      },
      {
        icon: 'Code',
        title: 'Design Handoff',
        description: 'Prepare comprehensive design specifications for development implementation.',
        duration: '1 week',
        deliverables: ['Design specs', 'Asset exports', 'Style documentation', 'Developer notes']
      },
      {
        icon: 'CheckCircle',
        title: 'QA & Refinement',
        description: 'Review implemented design for pixel-perfect accuracy and make final refinements.',
        duration: '1 week',
        deliverables: ['QA checklist', 'Visual fixes', 'Final approval', 'Launch support']
      }
    ],
    totalDuration: '8-12 weeks'
  },

  benefits: [
    {
      icon: 'TrendingUp',
      title: 'Higher Conversions',
      description: 'Strategic design increases conversion rates by guiding users toward action.',
      stat: '200',
      statSuffix: '%',
      statLabel: 'conversion increase'
    },
    {
      icon: 'Users',
      title: 'Better Engagement',
      description: 'Captivating design keeps visitors on site longer and exploring more pages.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'lower bounce rate'
    },
    {
      icon: 'Award',
      title: 'Stronger Brand',
      description: 'Consistent, professional design builds trust and brand recognition.',
      stat: '94',
      statSuffix: '%',
      statLabel: 'first impressions are design'
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Excellence',
      description: 'Responsive designs perform flawlessly across all devices.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'mobile optimized'
    },
    {
      icon: 'Accessibility',
      title: 'Inclusive Access',
      description: 'Accessible design reaches the widest possible audience.',
      stat: '15',
      statSuffix: '%',
      statLabel: 'more users reached'
    },
    {
      icon: 'Search',
      title: 'SEO Foundation',
      description: 'Design structure that supports search engine optimization.',
      stat: 'SEO',
      statLabel: 'friendly structure'
    }
  ],

  techStack: [
    {
      name: 'Design Tools',
      description: 'Industry-standard design software',
      technologies: [
        { name: 'Figma', category: 'Design', proficiency: 'expert' },
        { name: 'Adobe XD', category: 'Design', proficiency: 'expert' },
        { name: 'Sketch', category: 'Design', proficiency: 'advanced' },
        { name: 'Adobe Photoshop', category: 'Graphics', proficiency: 'expert' }
      ]
    },
    {
      name: 'Prototyping',
      description: 'Interactive prototype tools',
      technologies: [
        { name: 'Figma Prototypes', category: 'Prototyping', proficiency: 'expert' },
        { name: 'Framer', category: 'Prototyping', proficiency: 'advanced' },
        { name: 'InVision', category: 'Prototyping', proficiency: 'advanced' },
        { name: 'Principle', category: 'Animation', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Collaboration',
      description: 'Team collaboration tools',
      technologies: [
        { name: 'Figma Teams', category: 'Collaboration', proficiency: 'expert' },
        { name: 'Zeplin', category: 'Handoff', proficiency: 'expert' },
        { name: 'Notion', category: 'Documentation', proficiency: 'expert' },
        { name: 'Miro', category: 'Whiteboard', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Design Systems',
      description: 'Scalable design frameworks',
      technologies: [
        { name: 'Tailwind UI', category: 'UI Framework', proficiency: 'expert' },
        { name: 'Material Design', category: 'Design System', proficiency: 'expert' },
        { name: 'shadcn/ui', category: 'Components', proficiency: 'expert' },
        { name: 'Storybook', category: 'Documentation', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Testing & QA',
      description: 'Design validation tools',
      technologies: [
        { name: 'BrowserStack', category: 'Testing', proficiency: 'expert' },
        { name: 'Hotjar', category: 'Analytics', proficiency: 'advanced' },
        { name: 'WAVE', category: 'Accessibility', proficiency: 'expert' },
        { name: 'Lighthouse', category: 'Performance', proficiency: 'expert' }
      ]
    },
    {
      name: 'Asset Creation',
      description: 'Graphics and asset tools',
      technologies: [
        { name: 'Adobe Illustrator', category: 'Vector', proficiency: 'expert' },
        { name: 'Lottie', category: 'Animation', proficiency: 'advanced' },
        { name: 'SVGOMG', category: 'Optimization', proficiency: 'expert' },
        { name: 'TinyPNG', category: 'Compression', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Landing Page',
        description: 'Single high-converting landing page design',
        price: '$3,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Single Page Design', included: true },
          { name: 'Mobile Responsive', included: true },
          { name: 'Conversion Optimized', included: true },
          { name: '2 Revision Rounds', included: true },
          { name: 'Asset Exports', included: true },
          { name: 'Multiple Pages', included: false },
          { name: 'Design System', included: false },
          { name: 'Ongoing Support', included: false }
        ],
        ctaText: 'Start Project'
      },
      {
        name: 'Full Website',
        description: 'Complete website design package',
        price: '$12,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Up to 10 Page Designs', included: true },
          { name: 'Responsive Design', included: true },
          { name: 'Custom UI Components', included: true },
          { name: 'Style Guide', included: true },
          { name: 'Interactive Prototypes', included: true },
          { name: 'Design Handoff', included: true },
          { name: 'Full Design System', included: false },
          { name: 'Ongoing Retainer', included: false }
        ],
        highlighted: true,
        badge: 'Most Popular',
        ctaText: 'Start Project'
      },
      {
        name: 'Enterprise Design',
        description: 'Large-scale website with design system',
        price: '$35,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Unlimited Pages', included: true },
          { name: 'Full Design System', included: true },
          { name: 'Component Library', included: true },
          { name: 'Multiple Stakeholder Workshops', included: true },
          { name: 'Accessibility Audit', included: true },
          { name: 'Developer Handoff', included: true },
          { name: 'Design Team Training', included: true },
          { name: '3 Months Support', included: true }
        ],
        ctaText: 'Contact Us'
      }
    ],
    customNote: 'Every website is unique. Contact us for a custom quote based on your specific requirements.'
  },

  portfolio: [
    {
      title: 'FinTech Platform Redesign',
      client: 'PaySmart Financial',
      industry: 'Financial Services',
      description: 'Complete redesign of a financial services platform, improving user trust and conversion rates.',
      challenge: 'Outdated design was hurting credibility and causing high bounce rates on the investment platform.',
      solution: 'Modern, trustworthy design with clear information hierarchy and streamlined user journeys.',
      results: [
        '156% increase in sign-ups',
        '45% reduction in bounce rate',
        '4.8/5 user satisfaction',
        'Award-winning design'
      ],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['FinTech', 'Redesign', 'Responsive', 'Figma'],
      testimonial: {
        quote: 'The new design transformed how users perceive our platform. Sign-ups increased dramatically.',
        author: 'James Mitchell',
        role: 'CEO'
      }
    },
    {
      title: 'E-commerce Fashion Site',
      client: 'Luxe Apparel',
      industry: 'Fashion Retail',
      description: 'Luxury fashion e-commerce website design focused on brand storytelling and conversion.',
      challenge: 'Needed to convey luxury brand positioning while maintaining excellent e-commerce usability.',
      solution: 'Elegant, immersive design with cinematic product showcases and seamless shopping experience.',
      results: [
        '89% increase in average order value',
        '3x longer session duration',
        '40% improvement in conversion',
        'Fashion industry award'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Fashion', 'Luxury', 'Shopify'],
      testimonial: {
        quote: 'They captured our brand essence perfectly. The website sells our story as much as our products.',
        author: 'Sofia Chen',
        role: 'Creative Director'
      }
    },
    {
      title: 'SaaS Product Website',
      client: 'CloudSync Pro',
      industry: 'Technology',
      description: 'Product marketing website for a B2B SaaS platform with focus on lead generation.',
      challenge: 'Complex product needed clear communication and strong lead generation capabilities.',
      solution: 'Clean, professional design with clear value propositions, interactive demos, and optimized conversion funnels.',
      results: [
        '250% increase in demo requests',
        '60% lower cost per lead',
        '35% improvement in time-on-site',
        'Featured on Awwwards'
      ],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['SaaS', 'B2B', 'Lead Generation', 'Product Marketing'],
      testimonial: {
        quote: 'Our website finally matches the quality of our product. Lead quality improved significantly.',
        author: 'Alex Rivera',
        role: 'VP Marketing'
      }
    },
    {
      title: 'Non-Profit Organization Site',
      client: 'GreenFuture Foundation',
      industry: 'Non-Profit',
      description: 'Impactful website design for environmental non-profit focused on donations and awareness.',
      challenge: 'Needed to inspire action and donations while clearly communicating impact and mission.',
      solution: 'Emotionally engaging design with powerful imagery, clear donation flows, and impact storytelling.',
      results: [
        '180% increase in online donations',
        '65% more volunteer signups',
        '3x newsletter subscriptions',
        'Non-profit design award'
      ],
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
      tags: ['Non-Profit', 'Donations', 'Responsive', 'WordPress'],
      testimonial: {
        quote: 'The website tells our story in a way that moves people to action. Donations have never been higher.',
        author: 'Maria Santos',
        role: 'Executive Director'
      }
    }
  ],

  testimonials: [
    {
      quote: 'The design exceeded our expectations. Our customers constantly compliment how beautiful and easy to use our site is.',
      author: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechStart Inc',
      rating: 5,
      location: 'San Francisco, CA'
    },
    {
      quote: 'They took our vague ideas and turned them into a stunning website that perfectly represents our brand.',
      author: 'Michael Park',
      role: 'Founder',
      company: 'Design Studio Co',
      rating: 5,
      location: 'New York, NY'
    },
    {
      quote: 'The attention to detail is incredible. Every pixel is perfect, and the design system they created scales beautifully.',
      author: 'Lisa Chen',
      role: 'Product Manager',
      company: 'Enterprise Corp',
      rating: 5,
      location: 'Seattle, WA'
    }
  ],

  faqs: [
    {
      question: 'What\'s included in a web design project?',
      answer: 'Our web design projects include discovery and research, wireframing, visual design for all pages, responsive designs for mobile and tablet, interactive prototypes, style guide documentation, asset exports, and developer handoff specifications. We deliver everything needed for development implementation.'
    },
    {
      question: 'Do you also develop the website?',
      answer: 'Yes, we offer full-service web design and development. However, design-only engagements are also available if you have your own development team. We provide comprehensive handoff documentation to ensure smooth implementation.'
    },
    {
      question: 'How many design revisions are included?',
      answer: 'Our packages include 2-3 rounds of revisions at each design phase. We present concepts, gather feedback, and refine until you\'re satisfied. Our collaborative process ensures we\'re aligned throughout, minimizing major revisions.'
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Absolutely. We follow a mobile-first design approach, ensuring your website works beautifully on all devices. Every design includes desktop, tablet, and mobile variations, thoroughly tested across browsers and devices.'
    },
    {
      question: 'How do you ensure the design is accessible?',
      answer: 'Accessibility is built into our design process. We follow WCAG 2.1 guidelines, ensuring proper color contrast, readable typography, keyboard navigation support, and screen reader compatibility. We also provide accessibility audit documentation.'
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Yes, website redesigns are one of our specialties. We analyze your current site, identify improvements, preserve what works (including SEO value), and create a modern design that addresses your pain points while achieving business goals.'
    }
  ],

  relatedServices: [
    {
      name: 'User Experience Design',
      slug: 'user-experience-design',
      description: 'Research-driven UX for optimal user journeys',
      icon: 'Users'
    },
    {
      name: 'User Interface Design',
      slug: 'user-interface-design',
      description: 'Beautiful and functional UI components',
      icon: 'Layout'
    },
    {
      name: 'Web Development',
      slug: '/web-development',
      description: 'Full-stack development of your designs',
      icon: 'Code'
    },
    {
      name: 'E-commerce Design',
      slug: 'ecommerce-design',
      description: 'Conversion-focused online store design',
      icon: 'ShoppingCart'
    }
  ],

  seo: {
    title: 'Web Design Services | Custom Website Design, Responsive Design',
    description: 'Professional web design services creating beautiful, responsive websites that convert. Custom website design, landing pages, and redesigns. Mobile-first, accessible, conversion-optimized.',
    keywords: [
      'web design',
      'website design',
      'responsive web design',
      'custom website design',
      'landing page design',
      'website redesign',
      'mobile-first design',
      'conversion design',
      'professional web design',
      'web design services'
    ]
  }
};

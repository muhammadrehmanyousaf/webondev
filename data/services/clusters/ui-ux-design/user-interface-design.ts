// User Interface Design - UI/UX Design Cluster
// Comprehensive service data for user interface design services

import { ServiceData } from '@/components/services/sections';

export const userInterfaceDesignData: ServiceData = {
  slug: 'user-interface-design',
  name: 'User Interface Design',
  tagline: 'Beautiful interfaces that are a joy to use',
  description: 'Create stunning visual interfaces that elevate your product above the competition. Our UI design combines aesthetic excellence with functional clarity to deliver interfaces that users find beautiful, intuitive, and delightful to interact with.',
  category: 'UI/UX Design',

  hero: {
    headline: 'User Interface Design',
    subheadline: 'Where Beauty Meets Function',
    description: 'Transform your digital products with interfaces that captivate and convert. We design visually stunning UIs that don\'t just look great—they guide users effortlessly, communicate clearly, and create memorable experiences.',
    keyFeatures: [
      'Pixel-Perfect Visual Design',
      'Responsive Interface Design',
      'Design System Creation',
      'Interactive Components'
    ],
    badges: ['Figma', 'Design Systems', 'Responsive', 'Accessibility']
  },

  painPoints: [
    {
      icon: 'Eye',
      title: 'Generic, Forgettable Design',
      description: 'Interface looks like every other product, failing to differentiate or create impression.',
      stat: '94%',
      statLabel: 'first impressions are design'
    },
    {
      icon: 'Shuffle',
      title: 'Inconsistent UI',
      description: 'Design varies across screens and features, creating confusion and looking unprofessional.',
      stat: '23%',
      statLabel: 'lower brand perception'
    },
    {
      icon: 'Smartphone',
      title: 'Poor Responsive Design',
      description: 'Interface breaks or looks awkward on different screen sizes and devices.',
      stat: '57%',
      statLabel: 'mobile users won\'t recommend'
    },
    {
      icon: 'Clock',
      title: 'Slow Design Iteration',
      description: 'Without design systems, every new feature requires starting from scratch.',
      stat: '4x',
      statLabel: 'longer design time'
    },
    {
      icon: 'Code',
      title: 'Dev-Design Disconnect',
      description: 'Designs don\'t translate well to code, causing constant back-and-forth.',
      stat: '30%',
      statLabel: 'time lost to miscommunication'
    },
    {
      icon: 'Accessibility',
      title: 'Inaccessible Interfaces',
      description: 'Design excludes users with visual impairments or other disabilities.',
      stat: '15%',
      statLabel: 'users excluded'
    }
  ],

  solutions: [
    {
      icon: 'Palette',
      title: 'Visual Design System',
      description: 'Create cohesive visual language with colors, typography, and design tokens.',
      highlights: [
        'Color systems',
        'Typography hierarchy',
        'Spacing system',
        'Design tokens'
      ]
    },
    {
      icon: 'Layout',
      title: 'Component Design',
      description: 'Design reusable UI components for consistent, efficient interfaces.',
      highlights: [
        'Button systems',
        'Form components',
        'Navigation elements',
        'Card patterns'
      ]
    },
    {
      icon: 'Layers',
      title: 'Screen Design',
      description: 'Pixel-perfect design for every screen, state, and user scenario.',
      highlights: [
        'All screen designs',
        'Interactive states',
        'Error states',
        'Empty states'
      ]
    },
    {
      icon: 'Smartphone',
      title: 'Responsive Design',
      description: 'Interfaces that adapt beautifully to any screen size or device.',
      highlights: [
        'Mobile designs',
        'Tablet layouts',
        'Desktop designs',
        'Breakpoint system'
      ]
    },
    {
      icon: 'Zap',
      title: 'Micro-interactions',
      description: 'Thoughtful animations and feedback that make interfaces feel alive.',
      highlights: [
        'Button animations',
        'Loading states',
        'Transitions',
        'Feedback indicators'
      ]
    },
    {
      icon: 'Code',
      title: 'Design-Dev Handoff',
      description: 'Comprehensive specifications that developers can implement accurately.',
      highlights: [
        'Design specs',
        'CSS values',
        'Asset exports',
        'Implementation notes'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'UI Discovery',
        description: 'Understand brand, audience, and requirements to inform visual direction.',
        duration: '1 week',
        deliverables: ['Brand analysis', 'UI audit', 'Inspiration gathering', 'Direction proposals']
      },
      {
        icon: 'Palette',
        title: 'Visual Foundation',
        description: 'Establish core visual elements: colors, typography, spacing, and style.',
        duration: '1-2 weeks',
        deliverables: ['Color palette', 'Typography system', 'Spacing system', 'Style tiles']
      },
      {
        icon: 'Box',
        title: 'Component Design',
        description: 'Design the building blocks: buttons, forms, cards, and UI patterns.',
        duration: '2-3 weeks',
        deliverables: ['Component library', 'Pattern documentation', 'State designs', 'Variants']
      },
      {
        icon: 'Layers',
        title: 'Screen Design',
        description: 'Apply components to design all screens with responsive variations.',
        duration: '3-5 weeks',
        deliverables: ['All screen designs', 'Responsive designs', 'Interactive states', 'Edge cases']
      },
      {
        icon: 'Zap',
        title: 'Animation & Polish',
        description: 'Add micro-interactions, transitions, and final polish to elevate the UI.',
        duration: '1-2 weeks',
        deliverables: ['Animation specs', 'Interaction details', 'Loading states', 'Transitions']
      },
      {
        icon: 'Code',
        title: 'Handoff & QA',
        description: 'Deliver comprehensive specifications and support implementation.',
        duration: '1-2 weeks',
        deliverables: ['Design specs', 'Asset exports', 'Developer notes', 'QA support']
      }
    ],
    totalDuration: '9-15 weeks'
  },

  benefits: [
    {
      icon: 'Eye',
      title: 'Stunning First Impressions',
      description: 'Beautiful interfaces that immediately communicate quality and credibility.',
      stat: '50',
      statSuffix: 'ms',
      statLabel: 'to form impression'
    },
    {
      icon: 'Award',
      title: 'Brand Differentiation',
      description: 'Distinctive visual identity that stands out from competitors.',
      stat: '80',
      statSuffix: '%',
      statLabel: 'brand recognition'
    },
    {
      icon: 'Zap',
      title: 'Faster Development',
      description: 'Design systems and clear specs accelerate implementation.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'faster development'
    },
    {
      icon: 'Layers',
      title: 'Design Consistency',
      description: 'Component-based design ensures consistency across the product.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'consistent UI'
    },
    {
      icon: 'Smartphone',
      title: 'Device Flexibility',
      description: 'Responsive designs work beautifully on every screen size.',
      stat: 'All',
      statLabel: 'devices supported'
    },
    {
      icon: 'Heart',
      title: 'User Delight',
      description: 'Thoughtful interactions create emotional connection with users.',
      stat: '4.8',
      statSuffix: '★',
      statLabel: 'avg app rating'
    }
  ],

  techStack: [
    {
      name: 'Design Tools',
      description: 'Professional UI design software',
      technologies: [
        { name: 'Figma', category: 'Design', proficiency: 'expert' },
        { name: 'Adobe XD', category: 'Design', proficiency: 'advanced' },
        { name: 'Sketch', category: 'Design', proficiency: 'expert' },
        { name: 'Framer', category: 'Design', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Animation Tools',
      description: 'Motion design software',
      technologies: [
        { name: 'Figma Prototypes', category: 'Animation', proficiency: 'expert' },
        { name: 'Principle', category: 'Animation', proficiency: 'advanced' },
        { name: 'After Effects', category: 'Animation', proficiency: 'advanced' },
        { name: 'Lottie', category: 'Animation', proficiency: 'expert' }
      ]
    },
    {
      name: 'Design Systems',
      description: 'Component frameworks',
      technologies: [
        { name: 'Tailwind CSS', category: 'Framework', proficiency: 'expert' },
        { name: 'Material Design', category: 'System', proficiency: 'expert' },
        { name: 'shadcn/ui', category: 'Components', proficiency: 'expert' },
        { name: 'Radix UI', category: 'Primitives', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Handoff Tools',
      description: 'Developer collaboration',
      technologies: [
        { name: 'Figma Dev Mode', category: 'Handoff', proficiency: 'expert' },
        { name: 'Zeplin', category: 'Handoff', proficiency: 'expert' },
        { name: 'Storybook', category: 'Documentation', proficiency: 'advanced' },
        { name: 'Tokens Studio', category: 'Design Tokens', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Graphics Tools',
      description: 'Asset creation',
      technologies: [
        { name: 'Adobe Illustrator', category: 'Vector', proficiency: 'expert' },
        { name: 'Adobe Photoshop', category: 'Raster', proficiency: 'expert' },
        { name: 'Blender', category: '3D', proficiency: 'advanced' },
        { name: 'Spline', category: '3D Web', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Testing Tools',
      description: 'Design validation',
      technologies: [
        { name: 'Stark', category: 'Accessibility', proficiency: 'expert' },
        { name: 'Contrast', category: 'Color Check', proficiency: 'expert' },
        { name: 'BrowserStack', category: 'Testing', proficiency: 'advanced' },
        { name: 'Polypane', category: 'Responsive', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Feature UI',
        description: 'UI design for a specific feature or flow',
        price: '$6,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Visual Style Definition', included: true },
          { name: 'Feature Screens (5-10)', included: true },
          { name: 'Responsive Designs', included: true },
          { name: 'Component Specs', included: true },
          { name: 'Developer Handoff', included: true },
          { name: 'Full Design System', included: false },
          { name: 'Animation Specs', included: false },
          { name: 'Ongoing Support', included: false }
        ],
        ctaText: 'Start Project'
      },
      {
        name: 'Product UI',
        description: 'Complete UI for a product or application',
        price: '$25,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Complete Visual System', included: true },
          { name: 'All Screen Designs', included: true },
          { name: 'Component Library', included: true },
          { name: 'Responsive Designs', included: true },
          { name: 'Interactive States', included: true },
          { name: 'Animation Specs', included: true },
          { name: 'Design QA Support', included: false },
          { name: 'Post-Launch Updates', included: false }
        ],
        highlighted: true,
        badge: 'Most Popular',
        ctaText: 'Start Project'
      },
      {
        name: 'Enterprise UI',
        description: 'Large-scale product with comprehensive design system',
        price: '$60,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Comprehensive Design System', included: true },
          { name: 'Unlimited Screen Designs', included: true },
          { name: 'Full Component Library', included: true },
          { name: 'Design Tokens', included: true },
          { name: 'Advanced Animations', included: true },
          { name: 'Storybook Documentation', included: true },
          { name: 'Design QA Throughout Dev', included: true },
          { name: '6 Months Support', included: true }
        ],
        ctaText: 'Contact Us'
      }
    ],
    customNote: 'UI complexity varies by product scope. Contact us for a detailed estimate based on your requirements.'
  },

  portfolio: [
    {
      title: 'FinTech Dashboard',
      client: 'WealthPro Advisors',
      industry: 'Financial Services',
      description: 'UI design for wealth management dashboard used by financial advisors.',
      challenge: 'Complex financial data needed to be presented clearly while maintaining a premium, trustworthy aesthetic.',
      solution: 'Clean, sophisticated design with data visualization excellence and thoughtful information hierarchy.',
      results: [
        '45% increase in user efficiency',
        '4.9/5 user satisfaction score',
        'Design award winner',
        'Reduced support tickets by 60%'
      ],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['FinTech', 'Dashboard', 'Data Visualization', 'Enterprise'],
      testimonial: {
        quote: 'The UI made complex financial data accessible. Our advisors work faster and love using it.',
        author: 'Jennifer Adams',
        role: 'VP Product'
      }
    },
    {
      title: 'Consumer Mobile App',
      client: 'FitTrack',
      industry: 'Health & Fitness',
      description: 'Complete UI design for fitness tracking app with gamification elements.',
      challenge: 'Create an engaging, motivating interface that makes tracking workouts fun rather than tedious.',
      solution: 'Vibrant, energetic design with satisfying micro-interactions and progress visualizations.',
      results: [
        'App Store featured',
        '4.8 average rating',
        '2M+ downloads',
        '65% daily active users'
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      tags: ['Mobile', 'Fitness', 'Gamification', 'iOS'],
      testimonial: {
        quote: 'The UI is so satisfying to use. Users tell us the app itself motivates them to work out.',
        author: 'Marcus Chen',
        role: 'Founder'
      }
    },
    {
      title: 'E-commerce Platform',
      client: 'Artisan Market',
      industry: 'E-commerce',
      description: 'UI design for marketplace connecting artisan makers with conscious consumers.',
      challenge: 'Design a platform that showcases handmade products beautifully while maintaining e-commerce functionality.',
      solution: 'Warm, craft-inspired design that elevates products while providing smooth shopping experience.',
      results: [
        '35% higher conversion rate',
        '50% increase in time on site',
        'Webby Award honoree',
        '$5M GMV in first year'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Marketplace', 'Responsive', 'Web'],
      testimonial: {
        quote: 'The design tells our story and makes our makers\' products shine. Sales speak for themselves.',
        author: 'Sarah Kim',
        role: 'CEO'
      }
    },
    {
      title: 'Analytics Platform UI',
      client: 'DataViz Pro',
      industry: 'Technology',
      description: 'UI design for business intelligence platform with complex data visualizations.',
      challenge: 'Make powerful analytics accessible to non-technical users while satisfying power users.',
      solution: 'Layered interface design with progressive complexity and beautiful chart visualizations.',
      results: [
        '80% faster insight discovery',
        '90% user adoption rate',
        'Enterprise deal flow doubled',
        'UI/UX award finalist'
      ],
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
      tags: ['SaaS', 'Analytics', 'Dashboard', 'Enterprise'],
      testimonial: {
        quote: 'Finally, analytics that anyone can use. The UI design bridged the gap between data and decisions.',
        author: 'Robert Martinez',
        role: 'Chief Data Officer'
      }
    }
  ],

  testimonials: [
    {
      quote: 'The attention to detail is incredible. Every pixel is considered, every interaction feels right.',
      author: 'Michael Thompson',
      role: 'CTO',
      company: 'TechProduct Inc',
      rating: 5,
      location: 'San Francisco, CA'
    },
    {
      quote: 'They created a design system that\'s both beautiful and practical. Our developers love working with it.',
      author: 'Lisa Park',
      role: 'Engineering Manager',
      company: 'StartupX',
      rating: 5,
      location: 'New York, NY'
    },
    {
      quote: 'The UI design transformed how users perceive our product. We\'re now seen as the premium option.',
      author: 'David Chen',
      role: 'Product Director',
      company: 'SaaS Platform Co',
      rating: 5,
      location: 'Seattle, WA'
    }
  ],

  faqs: [
    {
      question: 'What\'s the difference between UI and UX design?',
      answer: 'UX (User Experience) design focuses on how a product works—user flows, information architecture, and usability. UI (User Interface) design focuses on how it looks—visual design, colors, typography, and interactive elements. Both are essential. We can provide UX, UI, or integrated UX/UI services.'
    },
    {
      question: 'Do you create design systems?',
      answer: 'Yes, design systems are central to our UI work. We create component libraries, design tokens, typography systems, and documentation that ensures consistency and accelerates development. This investment pays dividends throughout your product\'s lifecycle.'
    },
    {
      question: 'How do you handle responsive design?',
      answer: 'We design for all target screen sizes, typically mobile, tablet, and desktop. We establish a responsive breakpoint system and design each component and screen to work beautifully across all sizes. Every design includes responsive specifications.'
    },
    {
      question: 'Can you match our existing brand?',
      answer: 'Absolutely. We work with your brand guidelines to create UI that extends your visual identity into digital products. If your brand needs digital adaptation, we help translate print-focused guidelines to work well on screens.'
    },
    {
      question: 'How do you collaborate with developers?',
      answer: 'We provide comprehensive handoff specifications including design tokens, CSS values, spacing, and implementation notes. We use Figma Dev Mode and can integrate with your development workflow. We stay available for questions during implementation.'
    },
    {
      question: 'Do you design dark mode?',
      answer: 'Yes, dark mode is increasingly standard. We design carefully calibrated dark themes that maintain readability, visual hierarchy, and brand identity—not just inverted colors. Dark mode is included in our design system approach.'
    }
  ],

  relatedServices: [
    {
      name: 'User Experience Design',
      slug: 'user-experience-design',
      description: 'Research-driven UX to inform UI',
      icon: 'Users'
    },
    {
      name: 'Design Systems',
      slug: 'design-systems',
      description: 'Scalable component libraries',
      icon: 'Layers'
    },
    {
      name: 'Web Design',
      slug: 'web-design',
      description: 'Full website visual design',
      icon: 'Monitor'
    },
    {
      name: 'Mobile App Design',
      slug: 'mobile-app-design',
      description: 'Native mobile UI design',
      icon: 'Smartphone'
    }
  ],

  seo: {
    title: 'User Interface Design Services | UI Design, Visual Design, Design Systems',
    description: 'Expert UI design services creating beautiful, functional interfaces. Component libraries, design systems, responsive design, and pixel-perfect visual design for web and mobile.',
    keywords: [
      'user interface design',
      'ui design',
      'visual design',
      'interface design',
      'ui designer',
      'design system',
      'component library',
      'responsive ui design',
      'app ui design',
      'web ui design'
    ]
  }
};

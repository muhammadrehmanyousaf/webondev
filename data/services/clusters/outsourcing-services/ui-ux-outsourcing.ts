// UI/UX Outsourcing Service Data
import { ServiceData } from '@/components/services/sections';

export const uiUxOutsourcingData: ServiceData = {
  name: 'UI/UX Outsourcing',
  slug: 'ui-ux-outsourcing',
  tagline: 'World-class design talent on demand',
  category: 'Outsourcing Services',
  description: 'Outsource your UI/UX design needs to talented designers who create beautiful, user-centered experiences. Our design teams deliver exceptional interfaces that delight users and drive business results.',

  hero: {
    headline: 'UI/UX Design Outsourcing',
    subheadline: 'Beautiful Design, Business Results',
    description: 'Partner with skilled UI/UX designers who transform your ideas into stunning, user-friendly experiences. Our design outsourcing services provide the creative talent you need without the hiring overhead.',
    keyFeatures: [
      'Dedicated design teams',
      'User research & testing',
      'UI design & prototyping',
      'Design systems',
      'Mobile & web design',
      'Brand consistency'
    ],
    badges: ['Award-Winning Designers', '500+ Projects', 'User-Centered', 'Figma Experts']
  },

  painPoints: [
    {
      icon: 'Users',
      title: 'Design Talent Scarcity',
      description: 'Hard to find and retain quality UI/UX designers',
      stat: '$130K+',
      statLabel: 'Avg senior designer salary'
    },
    {
      icon: 'Eye',
      title: 'Inconsistent Design',
      description: 'Products lack visual consistency and polish',
      stat: '60%',
      statLabel: 'Users cite poor UX'
    },
    {
      icon: 'Clock',
      title: 'Design Bottlenecks',
      description: 'Development waiting on design deliverables',
      stat: '40%',
      statLabel: 'Sprints blocked by design'
    },
    {
      icon: 'TrendingDown',
      title: 'Poor Conversion',
      description: 'User interfaces not optimized for conversion',
      stat: '70%',
      statLabel: 'Abandon due to UX'
    }
  ],

  solutions: [
    {
      icon: 'Users',
      title: 'Dedicated Design Team',
      description: 'Full-time designers working exclusively on your products',
      highlights: [
        'UI/UX designers',
        'Visual designers',
        'Interaction designers',
        'Design leads'
      ]
    },
    {
      icon: 'Search',
      title: 'User Research',
      description: 'Data-driven design based on real user insights',
      highlights: [
        'User interviews',
        'Usability testing',
        'Analytics review',
        'Competitive analysis'
      ]
    },
    {
      icon: 'Layout',
      title: 'Design Systems',
      description: 'Scalable design systems for consistency',
      highlights: [
        'Component libraries',
        'Style guides',
        'Design tokens',
        'Documentation'
      ]
    },
    {
      icon: 'Smartphone',
      title: 'Multi-Platform',
      description: 'Design for web, mobile, and beyond',
      highlights: [
        'Responsive web',
        'iOS & Android',
        'Desktop apps',
        'Design handoff'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Discovery',
        description: 'Understand your brand, users, and design needs',
        duration: 'Week 1',
        deliverables: [
          'Brand review',
          'User personas',
          'Design audit',
          'Team structure'
        ]
      },
      {
        icon: 'Users',
        title: 'Team Assembly',
        description: 'Build your dedicated design team',
        duration: 'Week 2',
        deliverables: [
          'Designer selection',
          'Tool setup',
          'Process alignment',
          'Kickoff meeting'
        ]
      },
      {
        icon: 'PenTool',
        title: 'Design Execution',
        description: 'Create designs with iterative feedback',
        duration: 'Ongoing',
        deliverables: [
          'Wireframes',
          'Visual designs',
          'Prototypes',
          'Design specs'
        ]
      },
      {
        icon: 'CheckCircle',
        title: 'Delivery',
        description: 'Hand off designs for development',
        duration: 'Per project',
        deliverables: [
          'Final designs',
          'Asset export',
          'Dev handoff',
          'Documentation'
        ]
      }
    ],
    totalDuration: '1-2 weeks to productive'
  },

  benefits: [
    {
      icon: 'DollarSign',
      title: 'Cost Savings',
      description: 'High-quality design at lower cost',
      stat: '50',
      statSuffix: '%',
      statLabel: 'Cost savings'
    },
    {
      icon: 'Zap',
      title: 'Fast Delivery',
      description: 'Rapid design turnaround',
      stat: '3x',
      statSuffix: '',
      statLabel: 'Faster delivery'
    },
    {
      icon: 'TrendingUp',
      title: 'Better Conversion',
      description: 'UX optimized for results',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Conversion lift'
    },
    {
      icon: 'Star',
      title: 'User Satisfaction',
      description: 'Designs users love',
      stat: '4.8',
      statSuffix: '/5',
      statLabel: 'User ratings'
    }
  ],

  techStack: [
    {
      name: 'Design Tools',
      description: 'Industry-standard design software',
      technologies: [
        { name: 'Figma', icon: '/icons/tech/figma.svg', category: 'Design', proficiency: 'expert' },
        { name: 'Sketch', icon: '/icons/tech/sketch.svg', category: 'Design', proficiency: 'expert' },
        { name: 'Adobe XD', icon: '/icons/tech/xd.svg', category: 'Design', proficiency: 'expert' },
        { name: 'Framer', icon: '/icons/tech/framer.svg', category: 'Prototyping', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Prototyping',
      description: 'Interactive prototyping tools',
      technologies: [
        { name: 'Figma Prototypes', icon: '/icons/tech/figma.svg', category: 'Prototyping', proficiency: 'expert' },
        { name: 'InVision', icon: '/icons/tech/invision.svg', category: 'Prototyping', proficiency: 'expert' },
        { name: 'Principle', icon: '/icons/tech/principle.svg', category: 'Animation', proficiency: 'advanced' },
        { name: 'ProtoPie', icon: '/icons/tech/protopie.svg', category: 'Prototyping', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Research Tools',
      description: 'User research and testing',
      technologies: [
        { name: 'UserTesting', icon: '/icons/tech/usertesting.svg', category: 'Research', proficiency: 'expert' },
        { name: 'Hotjar', icon: '/icons/tech/hotjar.svg', category: 'Analytics', proficiency: 'expert' },
        { name: 'Maze', icon: '/icons/tech/maze.svg', category: 'Testing', proficiency: 'expert' },
        { name: 'Optimal Workshop', icon: '/icons/tech/optimalworkshop.svg', category: 'Research', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Collaboration',
      description: 'Design collaboration tools',
      technologies: [
        { name: 'Zeplin', icon: '/icons/tech/zeplin.svg', category: 'Handoff', proficiency: 'expert' },
        { name: 'Abstract', icon: '/icons/tech/abstract.svg', category: 'Version Control', proficiency: 'advanced' },
        { name: 'Miro', icon: '/icons/tech/miro.svg', category: 'Whiteboard', proficiency: 'expert' },
        { name: 'FigJam', icon: '/icons/tech/figma.svg', category: 'Whiteboard', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'UI Designer',
        description: '1 dedicated designer',
        price: '$5,000',
        priceNote: 'per month',
        features: [
          { name: 'Dedicated UI designer', included: true },
          { name: 'Visual design', included: true },
          { name: 'Icon & asset design', included: true },
          { name: 'Design handoff', included: true },
          { name: 'Figma files', included: true },
          { name: 'UX research', included: false },
          { name: 'Design system', included: false },
          { name: 'Prototyping', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Design Team',
        description: 'UI + UX designers',
        price: '$12,000',
        priceNote: 'per month',
        badge: 'Most Popular',
        features: [
          { name: 'UI designer + UX designer', included: true },
          { name: 'Full UI/UX design', included: true },
          { name: 'User research', included: true },
          { name: 'Prototyping', included: true },
          { name: 'Usability testing', included: true },
          { name: 'Design system', included: true },
          { name: 'Design lead support', included: true },
          { name: 'Motion design', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Full Design Studio',
        description: 'Complete design team',
        price: 'Custom',
        priceNote: 'based on requirements',
        features: [
          { name: '4+ designers', included: true },
          { name: 'UI/UX/Visual design', included: true },
          { name: 'Comprehensive research', included: true },
          { name: 'Advanced prototyping', included: true },
          { name: 'Full design system', included: true },
          { name: 'Motion design', included: true },
          { name: 'Design lead', included: true },
          { name: 'Brand design', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'All designers are vetted senior professionals. Includes design tools and assets.'
  },

  portfolio: [
    {
      title: 'FinTech App Redesign',
      client: 'MoneyWise Finance',
      industry: 'FinTech',
      description: 'Complete UI/UX redesign of mobile banking app',
      challenge: 'Low user engagement and high drop-off rates in app',
      solution: 'Outsourced design team to redesign entire user experience',
      results: [
        'User engagement increased 80%',
        'Task completion rate improved 65%',
        'App store rating rose to 4.8/5',
        'Support tickets reduced 40%'
      ],
      metrics: [
        { label: 'Engagement', value: '+80%' },
        { label: 'Task Completion', value: '+65%' },
        { label: 'App Rating', value: '4.8/5' }
      ],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['FinTech', 'Mobile App', 'UX Research', 'Redesign']
    },
    {
      title: 'SaaS Dashboard Design',
      client: 'DataPro Analytics',
      industry: 'SaaS',
      description: 'Design system and dashboard UI for analytics platform',
      challenge: 'Complex data needed intuitive visualization and navigation',
      solution: 'Created comprehensive design system and dashboard framework',
      results: [
        'User onboarding time reduced 50%',
        'Feature adoption increased 70%',
        'Design-to-dev time cut by 60%',
        'NPS score improved to 72'
      ],
      metrics: [
        { label: 'Onboarding', value: '-50%' },
        { label: 'Adoption', value: '+70%' },
        { label: 'NPS', value: '72' }
      ],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      tags: ['SaaS', 'Design System', 'Dashboard', 'Data Viz']
    },
    {
      title: 'E-commerce UX Optimization',
      client: 'LuxuryGoods Online',
      industry: 'E-commerce',
      description: 'Complete UX overhaul for luxury e-commerce platform',
      challenge: 'High cart abandonment and low conversion rates',
      solution: 'Conducted UX research and redesigned checkout experience',
      results: [
        'Conversion rate increased 45%',
        'Cart abandonment reduced 35%',
        'Average order value up 25%',
        'Mobile sales doubled'
      ],
      metrics: [
        { label: 'Conversion', value: '+45%' },
        { label: 'Abandonment', value: '-35%' },
        { label: 'Mobile Sales', value: '2x' }
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Conversion', 'Mobile', 'Checkout']
    },
    {
      title: 'Healthcare Portal Design',
      client: 'PatientFirst Medical',
      industry: 'Healthcare',
      description: 'Patient portal UI/UX design with accessibility focus',
      challenge: 'Diverse patient demographics required accessible, intuitive design',
      solution: 'Created WCAG-compliant design with extensive user testing',
      results: [
        'Accessibility score reached 100%',
        'Patient satisfaction up 60%',
        'Call center volume down 40%',
        'Self-service adoption at 85%'
      ],
      metrics: [
        { label: 'Accessibility', value: '100%' },
        { label: 'Satisfaction', value: '+60%' },
        { label: 'Self-Service', value: '85%' }
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'Accessibility', 'Patient Portal', 'WCAG']
    }
  ],

  testimonials: [
    {
      quote: 'The outsourced design team delivered work that exceeded our in-house capabilities. Our users love the new experience.',
      author: 'Jennifer Liu',
      role: 'CPO',
      company: 'MoneyWise Finance',
      rating: 5,
      location: 'New York, NY'
    },
    {
      quote: 'Their design system transformed how we build products. Consistent, beautiful, and incredibly efficient.',
      author: 'Mark Stevens',
      role: 'Head of Product',
      company: 'DataPro Analytics',
      rating: 5,
      location: 'San Francisco, CA'
    }
  ],

  faqs: [
    {
      question: 'What design services do you offer?',
      answer: 'We provide comprehensive UI/UX design services including user research, wireframing, visual design, interaction design, prototyping, usability testing, design systems, mobile app design, web design, and design-to-development handoff. Our designers cover the full product design lifecycle.'
    },
    {
      question: 'What tools do your designers use?',
      answer: 'Our designers are expert in industry-standard tools including Figma (our primary tool), Sketch, Adobe XD, and Adobe Creative Suite. For prototyping, we use Figma, InVision, Principle, and Framer. We adapt to your existing toolstack or recommend optimal tools for your needs.'
    },
    {
      question: 'How do designers collaborate with our developers?',
      answer: 'We ensure smooth design-to-dev handoff using tools like Figma, Zeplin, or your preferred platform. Designers provide detailed specs, assets, and documentation. They participate in developer discussions to clarify design intent and iterate based on implementation constraints.'
    },
    {
      question: 'Can you match our brand guidelines?',
      answer: 'Absolutely. Our designers study your brand guidelines, existing products, and visual identity thoroughly before starting. We ensure all designs maintain brand consistency. If you need brand development or refinement, we can help with that too.'
    },
    {
      question: 'Do you provide user research?',
      answer: 'Yes, user research is core to our UX process. We conduct user interviews, usability testing, heuristic evaluations, competitive analysis, and analytics review. Research insights drive design decisions, ensuring we create experiences that truly meet user needs.'
    }
  ],

  relatedServices: [
    {
      name: 'UI/UX Design Services',
      slug: 'ui-ux-design-services',
      description: 'Project-based design',
      icon: 'PenTool'
    },
    {
      name: 'Staff Augmentation',
      slug: 'staff-augmentation',
      description: 'Individual designer placement',
      icon: 'UserPlus'
    },
    {
      name: 'Custom Web Development',
      slug: 'custom-web-development',
      description: 'Bring designs to life',
      icon: 'Code'
    },
    {
      name: 'Mobile App Development',
      slug: 'mobile-app-development',
      description: 'Mobile development services',
      icon: 'Smartphone'
    }
  ],

  seo: {
    title: 'UI/UX Design Outsourcing | Design Services Outsourcing',
    description: 'Outsource UI/UX design to talented professionals. User research, visual design, prototyping, design systems. 50% cost savings, 3x faster delivery.',
    keywords: [
      'ui ux outsourcing',
      'design outsourcing',
      'outsource ui design',
      'outsource ux design',
      'ui ux design services',
      'design team outsourcing',
      'product design outsourcing',
      'offshore design team',
      'design agency outsourcing',
      'ux design services'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'UI/UX Design Outsourcing',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Design Outsourcing Services'
      }
    }
  }
};

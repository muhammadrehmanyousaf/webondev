import { ServiceData } from '@/components/services/sections';

export const graphicDesignData: ServiceData = {
  name: 'Graphic Design',
  slug: 'graphic-design',
  tagline: 'Professional Design Services',
  category: 'UI/UX Design',
  description: 'Award-winning graphic design services that transform brands into visual powerhouses. From brand identity to marketing collateral, we create designs that capture attention and drive results.',
  hero: {
    headline: 'Graphic Design Services',
    subheadline: 'Visual Excellence That Drives Business Results',
    description: 'Create stunning visual identities and marketing materials that capture attention, communicate value, and elevate your brand above the competition.',
    keyFeatures: [
      'Brand Identity Design',
      'Marketing Collateral',
      'Digital Graphics',
      'Packaging Design'
    ],
    badges: ['15,000+ Designs', '47 Awards', '98% Client Satisfaction']
  },
  painPoints: [
    {
      icon: 'Shuffle',
      title: 'Inconsistent Brand Visuals',
      description: 'Random design choices across materials confuse customers and dilute brand recognition.',
      stat: '60%',
      statLabel: 'Reduced brand recall'
    },
    {
      icon: 'AlertTriangle',
      title: 'Amateur DIY Designs',
      description: 'Template-based graphics signal low quality and undermine trust with potential customers.',
      stat: '75%',
      statLabel: 'Judge by visual quality'
    },
    {
      icon: 'Unlink',
      title: 'Disconnected Materials',
      description: 'Disjointed collateral fails to tell a cohesive brand story, weakening campaigns.',
      stat: '40%',
      statLabel: 'Lower engagement'
    },
    {
      icon: 'Clock',
      title: 'Outdated Visual Identity',
      description: 'Dated designs make your brand appear behind the times, questioning relevance.',
      stat: '55%',
      statLabel: 'Avoid outdated brands'
    },
    {
      icon: 'Printer',
      title: 'Poor Print Quality',
      description: 'Designs that look good on screen fail in print, wasting budget on materials.',
      stat: '$25K',
      statLabel: 'Wasted annually'
    },
    {
      icon: 'Target',
      title: 'No Strategic Direction',
      description: 'Creating visuals without strategy results in beautiful but ineffective designs.',
      stat: '70%',
      statLabel: 'Budget wasted'
    }
  ],
  solutions: [
    {
      icon: 'Palette',
      title: 'Brand Identity Design',
      description: 'Complete visual identity systems including logos, colors, typography, and guidelines.',
      highlights: ['Logo Design', 'Color Systems', 'Typography', 'Brand Guidelines']
    },
    {
      icon: 'FileText',
      title: 'Marketing Collateral',
      description: 'Eye-catching marketing materials from brochures to presentations that drive action.',
      highlights: ['Brochure Design', 'Business Cards', 'Presentations', 'Trade Show Materials']
    },
    {
      icon: 'Monitor',
      title: 'Digital Graphics',
      description: 'Scroll-stopping digital assets optimized for every platform and channel.',
      highlights: ['Social Media Graphics', 'Digital Ads', 'Email Templates', 'Banner Ads']
    },
    {
      icon: 'Package',
      title: 'Packaging Design',
      description: 'Product packaging that sells on sight with shelf impact and brand storytelling.',
      highlights: ['Product Packaging', 'Label Design', 'Box Design', 'Unboxing Experience']
    },
    {
      icon: 'BookOpen',
      title: 'Publication Design',
      description: 'Professional layouts for magazines, books, reports, and editorial content.',
      highlights: ['Magazine Layouts', 'Annual Reports', 'Catalogs', 'eBook Design']
    },
    {
      icon: 'MapPin',
      title: 'Environmental Design',
      description: 'Physical brand experiences from office graphics to wayfinding systems.',
      highlights: ['Office Branding', 'Signage', 'Vehicle Wraps', 'Event Graphics']
    }
  ],
  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Discovery & Strategy',
        description: 'Deep dive into your brand, audience, and objectives to establish design direction.',
        duration: '1 week',
        deliverables: ['Brand Audit', 'Design Brief', 'Strategic Direction']
      },
      {
        icon: 'Lightbulb',
        title: 'Concept Development',
        description: 'Creative exploration producing multiple design directions that solve visual challenges.',
        duration: '1-2 weeks',
        deliverables: ['Mood Boards', 'Concept Sketches', 'Direction Presentations']
      },
      {
        icon: 'PenTool',
        title: 'Design Execution',
        description: 'Transforming approved concepts into polished, production-ready designs.',
        duration: '2-3 weeks',
        deliverables: ['High-Fidelity Designs', 'Color Optimization', 'Cross-Platform Adaptation']
      },
      {
        icon: 'MessageSquare',
        title: 'Review & Refinement',
        description: 'Collaborative revision ensuring designs meet expectations perfectly.',
        duration: '1 week',
        deliverables: ['Design Iterations', 'Stakeholder Approval', 'Final Polish']
      },
      {
        icon: 'Download',
        title: 'Production & Delivery',
        description: 'Preparing print-ready and digital-optimized files for flawless reproduction.',
        duration: '3-5 days',
        deliverables: ['Print-Ready Files', 'Digital Assets', 'Usage Guidelines']
      },
      {
        icon: 'LifeBuoy',
        title: 'Ongoing Support',
        description: 'Continued partnership for new materials, updates, and brand evolution.',
        duration: 'Ongoing',
        deliverables: ['Additional Collateral', 'Brand Extensions', 'Creative Consultation']
      }
    ],
    totalDuration: '6-8 weeks'
  },
  benefits: [
    {
      icon: 'Eye',
      title: 'Increased Recognition',
      description: 'Consistent, memorable visuals increase brand recall significantly.',
      stat: '80%',
      statSuffix: '',
      statLabel: 'Better brand recall'
    },
    {
      icon: 'TrendingUp',
      title: 'Higher Perceived Value',
      description: 'Professional design elevates how customers perceive your brand.',
      stat: '33%',
      statSuffix: '',
      statLabel: 'Higher perceived value'
    },
    {
      icon: 'BarChart2',
      title: 'Better Marketing Performance',
      description: 'Well-designed materials generate higher engagement and conversions.',
      stat: '94%',
      statSuffix: '',
      statLabel: 'Higher engagement'
    },
    {
      icon: 'Zap',
      title: 'Stronger First Impressions',
      description: 'Professional design ensures instant positive impressions.',
      stat: '50ms',
      statSuffix: '',
      statLabel: 'To form impressions'
    },
    {
      icon: 'Shield',
      title: 'Consistent Experience',
      description: 'Unified visuals build trust at every interaction.',
      stat: '3.5x',
      statSuffix: '',
      statLabel: 'More consistency'
    },
    {
      icon: 'Award',
      title: 'Stand Out From Competition',
      description: 'Distinctive identity sets you apart from generic competitors.',
      stat: '73%',
      statSuffix: '',
      statLabel: 'Stand out more'
    }
  ],
  techStack: [
    {
      name: 'Design Software',
      description: 'Industry-leading design tools',
      technologies: [
        { name: 'Adobe Illustrator', icon: 'illustrator', category: 'Vector', proficiency: 'expert' },
        { name: 'Adobe Photoshop', icon: 'photoshop', category: 'Raster', proficiency: 'expert' },
        { name: 'Adobe InDesign', icon: 'indesign', category: 'Layout', proficiency: 'expert' },
        { name: 'Affinity Designer', icon: 'affinity', category: 'Vector', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Motion & Animation',
      description: 'Animated graphics tools',
      technologies: [
        { name: 'After Effects', icon: 'aftereffects', category: 'Motion', proficiency: 'expert' },
        { name: 'Lottie', icon: 'lottie', category: 'Animation', proficiency: 'advanced' },
        { name: 'Cinema 4D', icon: 'cinema4d', category: '3D', proficiency: 'proficient' },
        { name: 'Principle', icon: 'principle', category: 'Motion', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Collaboration',
      description: 'Team collaboration platforms',
      technologies: [
        { name: 'Figma', icon: 'figma', category: 'Design', proficiency: 'expert' },
        { name: 'Creative Cloud', icon: 'creativecloud', category: 'Suite', proficiency: 'expert' },
        { name: 'Notion', icon: 'notion', category: 'PM', proficiency: 'advanced' },
        { name: 'Dropbox', icon: 'dropbox', category: 'Storage', proficiency: 'expert' }
      ]
    },
    {
      name: 'Print Production',
      description: 'Professional print tools',
      technologies: [
        { name: 'Adobe Acrobat', icon: 'acrobat', category: 'PDF', proficiency: 'expert' },
        { name: 'Pantone Connect', icon: 'pantone', category: 'Color', proficiency: 'expert' },
        { name: 'Preflight Pro', icon: 'preflight', category: 'Print', proficiency: 'advanced' },
        { name: 'Esko', icon: 'esko', category: 'Packaging', proficiency: 'advanced' }
      ]
    }
  ],
  pricing: {
    plans: [
      {
        name: 'Essential',
        description: 'Core graphics for startups',
        price: '$2,500',
        priceNote: 'One-time payment',
        features: [
          { name: 'Logo Design (3 concepts)', included: true },
          { name: 'Business Card Design', included: true },
          { name: 'Letterhead Design', included: true },
          { name: 'Social Media Templates (5)', included: true },
          { name: 'Basic Brand Guidelines', included: true },
          { name: '2 Revision Rounds', included: true },
          { name: 'Extended Logo Variations', included: false },
          { name: 'Marketing Collateral Suite', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional',
        description: 'Complete brand visual package',
        price: '$7,500',
        priceNote: 'One-time payment',
        badge: 'Most Popular',
        features: [
          { name: 'Everything in Essential', included: true },
          { name: 'Extended Logo Variations', included: true },
          { name: 'Marketing Collateral Suite', included: true },
          { name: 'Presentation Template', included: true },
          { name: 'Social Media Kit (15)', included: true },
          { name: 'Digital Ad Templates', included: true },
          { name: 'Comprehensive Guidelines', included: true },
          { name: '3 Revision Rounds', included: true }
        ],
        ctaText: 'Start Project',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Full-scale design partnership',
        price: '$20,000+',
        priceNote: 'Starting price',
        features: [
          { name: 'Everything in Professional', included: true },
          { name: 'Complete Brand System', included: true },
          { name: 'Packaging Design', included: true },
          { name: 'Publication Design', included: true },
          { name: 'Environmental Graphics', included: true },
          { name: 'Motion Graphics Package', included: true },
          { name: 'Unlimited Revisions', included: true },
          { name: 'Dedicated Design Team', included: true }
        ],
        ctaText: 'Contact Sales',
        highlighted: false
      }
    ],
    customNote: 'Custom design scopes available for unique project requirements.'
  },
  portfolio: [
    {
      title: 'TechVentures Brand Identity',
      client: 'TechVentures Capital',
      industry: 'Financial Services',
      description: 'Complete visual identity system for a venture capital firm establishing premium positioning.',
      challenge: 'TechVentures needed a sophisticated brand identity that conveyed trust and innovation to both startups and institutional investors.',
      solution: 'We developed a complete visual identity including logo system, color palette, typography, and comprehensive brand guidelines.',
      results: [
        '400% brand recognition increase',
        '65% more investor inquiries',
        'Featured in Brand New',
        'Industry award winner'
      ],
      metrics: [
        { label: 'Brand Recognition', value: '+400%' },
        { label: 'Investor Inquiries', value: '+65%' },
        { label: 'Design Awards', value: '3' }
      ],
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
      tags: ['Brand Identity', 'Logo Design', 'Guidelines', 'Financial']
    },
    {
      title: 'GreenLeaf Product Packaging',
      client: 'GreenLeaf Foods',
      industry: 'Consumer Goods',
      description: 'Sustainable packaging design for organic food brand increasing shelf presence.',
      challenge: 'GreenLeaf needed packaging that stood out on crowded shelves while communicating their organic values.',
      solution: 'We created distinctive eco-friendly packaging with bold typography and natural imagery that increased visibility.',
      results: [
        '180% retail sales increase',
        '45% better shelf visibility',
        'Packaging award winner',
        'Retailer feature placement'
      ],
      metrics: [
        { label: 'Sales Increase', value: '+180%' },
        { label: 'Shelf Visibility', value: '+45%' },
        { label: 'New Retailers', value: '50+' }
      ],
      image: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&h=600&fit=crop',
      tags: ['Packaging', 'Sustainable', 'Food & Beverage', 'Retail']
    },
    {
      title: 'Nexus Annual Report',
      client: 'Nexus Corporation',
      industry: 'Enterprise',
      description: 'Data-rich annual report transformed into engaging visual narrative.',
      challenge: 'Nexus needed their complex financial data presented in an engaging way that impressed shareholders.',
      solution: 'We designed an annual report with infographic data visualization, premium typography, and compelling narrative structure.',
      results: [
        '92% shareholder satisfaction',
        'Gold LACP Award',
        'Most shared investor content',
        'Investor relations award'
      ],
      metrics: [
        { label: 'Shareholder Satisfaction', value: '92%' },
        { label: 'Design Awards', value: 'Gold' },
        { label: 'Social Shares', value: '5K+' }
      ],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['Publication', 'Annual Report', 'Data Visualization', 'Print']
    },
    {
      title: 'SkyHigh Airlines Campaign',
      client: 'SkyHigh Airlines',
      industry: 'Travel & Aviation',
      description: 'Comprehensive marketing campaign graphics for airline relaunch across all channels.',
      challenge: 'SkyHigh needed a cohesive visual campaign for their service expansion and brand refresh.',
      solution: 'We created a unified campaign with striking visuals, custom illustrations, and adaptable templates for all media.',
      results: [
        '320% social engagement increase',
        '55% more booking inquiries',
        'Campaign of the Year finalist',
        'Global brand consistency achieved'
      ],
      metrics: [
        { label: 'Social Engagement', value: '+320%' },
        { label: 'Booking Inquiries', value: '+55%' },
        { label: 'Markets Launched', value: '12' }
      ],
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop',
      tags: ['Marketing Campaign', 'Travel', 'Multi-Channel', 'Brand Refresh']
    }
  ],
  testimonials: [
    {
      quote: 'Their design work completely transformed how our brand is perceived. We have seen a dramatic increase in recognition and engagement since the rebrand.',
      author: 'Jennifer Walsh',
      role: 'Chief Marketing Officer',
      company: 'TechVentures Capital',
      rating: 5,
      location: 'San Francisco, USA'
    },
    {
      quote: 'The packaging designs exceeded all expectations. Our products fly off shelves now, and retailers are impressed with the shelf presence.',
      author: 'David Chen',
      role: 'Founder & CEO',
      company: 'GreenLeaf Foods',
      rating: 5,
      location: 'Portland, USA'
    },
    {
      quote: 'Our annual report went from boring to beautiful. Shareholders actually read it now and our investor relations have never been better.',
      author: 'Margaret Thompson',
      role: 'VP Investor Relations',
      company: 'Nexus Corporation',
      rating: 5,
      location: 'Chicago, USA'
    }
  ],
  faqs: [
    {
      question: 'How many design concepts will I receive?',
      answer: 'For logo and brand identity projects, we typically present 3-5 unique concepts. Each concept is fully realized with color variations and applications so you can envision how it will work across touchpoints. For other design projects, we present 2-3 directions to ensure focused, quality options.'
    },
    {
      question: 'What file formats will I receive?',
      answer: 'You will receive a comprehensive file package including vector formats (AI, EPS, SVG) for print and scalability, raster formats (PNG, JPG) for digital use, PDF files for documentation, and source files for future editing. We also provide a file guide explaining when to use each format.'
    },
    {
      question: 'How do revisions work?',
      answer: 'After presenting concepts, you provide consolidated feedback, which we incorporate in a revision round. Depending on your package, you will have 2-3 revision rounds included. We use collaborative tools to gather feedback and ensure nothing is missed.'
    },
    {
      question: 'Do you work with print vendors?',
      answer: 'Yes, we have established relationships with premium print vendors and can manage the entire production process. We prepare files to exact specifications and conduct quality checks. You can also use your own vendors and we will provide print-ready files and specifications.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Timeline varies by scope: logo design typically takes 2-3 weeks, brand identity systems 4-6 weeks, marketing collateral 2-4 weeks, and packaging design 6-8 weeks. We provide detailed timelines during project kickoff.'
    },
    {
      question: 'Who owns the final designs?',
      answer: 'Upon final payment, you receive full ownership and rights to all approved designs. This includes commercial usage rights, ability to modify files, and no ongoing licensing fees. We retain rights to unpursued concepts and may feature selected work in our portfolio with permission.'
    }
  ],
  relatedServices: [
    {
      name: 'Logo Design & Branding',
      slug: 'logo-design-branding',
      description: 'Strategic brand identity design services',
      icon: 'Award'
    },
    {
      name: 'Web Design',
      slug: 'web-design',
      description: 'Beautiful, functional website design',
      icon: 'Monitor'
    },
    {
      name: 'Design Systems',
      slug: 'design-systems',
      description: 'Scalable design system development',
      icon: 'Layers'
    },
    {
      name: 'Mobile App Design',
      slug: 'mobile-app-design',
      description: 'Engaging mobile app experiences',
      icon: 'Smartphone'
    }
  ],
  seo: {
    title: 'Graphic Design Services | Brand Identity, Marketing Collateral, Packaging',
    description: 'Professional graphic design services for brand identity, marketing collateral, packaging, and publications. Award-winning design that elevates your brand and drives business results.',
    keywords: [
      'graphic design services',
      'brand identity design',
      'logo design',
      'marketing collateral',
      'packaging design',
      'publication design',
      'brochure design',
      'visual identity',
      'brand guidelines',
      'professional graphic design'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Graphic Design',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Graphic Design Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Brand Identity Design'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Marketing Collateral Design'
            }
          }
        ]
      }
    }
  }
};

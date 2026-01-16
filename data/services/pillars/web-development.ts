import { ServiceData } from '@/components/services/sections';

export const webDevelopmentData: ServiceData = {
  // Basic Info
  slug: 'web-development',
  name: 'Web Development Services',
  tagline: 'Build Powerful, Scalable Web Solutions That Drive Results',
  description: 'Custom web development services that transform your vision into high-performance websites and web applications. From startups to enterprises, we deliver solutions that scale.',
  category: 'Development',

  // Hero Section
  hero: {
    headline: 'Custom Web Development',
    subheadline: 'Websites That Convert Visitors Into Customers',
    description: 'We build fast, secure, SEO-optimized websites and web applications using cutting-edge technologies like Next.js, React, and Node.js. From simple landing pages to complex enterprise platforms, we deliver solutions that drive real business results.',
    keyFeatures: [
      'Lightning-fast load times (< 2s)',
      'Mobile-first, responsive design',
      'SEO-optimized from day one',
      'Scalable architecture for growth',
      '24/7 monitoring & support',
    ],
    badges: ['Top Rated', '500+ Projects', '99% Uptime'],
  },

  // Pain Points
  painPoints: [
    {
      icon: 'TrendingDown',
      title: 'Slow Website Performance',
      description: 'Visitors abandon sites that take more than 3 seconds to load. Slow speeds kill conversions and hurt your search rankings.',
      stat: '53%',
      statLabel: 'of users leave slow sites',
    },
    {
      icon: 'ShieldX',
      title: 'Security Vulnerabilities',
      description: 'Outdated code and poor security practices expose your business to hackers, data breaches, and costly downtime.',
      stat: '43%',
      statLabel: 'of attacks target small businesses',
    },
    {
      icon: 'Users',
      title: 'Poor Mobile Experience',
      description: 'Over 60% of traffic comes from mobile devices. A clunky mobile experience means losing more than half your potential customers.',
      stat: '67%',
      statLabel: 'of users abandon non-mobile sites',
    },
    {
      icon: 'DollarSign',
      title: 'High Development Costs',
      description: 'Agencies overcharge and under-deliver. Hidden fees, scope creep, and delays eat into your budget and timeline.',
      stat: '68%',
      statLabel: 'of projects exceed budget',
    },
    {
      icon: 'Clock',
      title: 'Maintenance Nightmares',
      description: 'Legacy code, poor documentation, and no ongoing support leave you stuck with a site you cannot update or scale.',
      stat: '85%',
      statLabel: 'of sites lack proper documentation',
    },
    {
      icon: 'AlertCircle',
      title: 'Poor SEO Rankings',
      description: 'Beautiful websites are useless if nobody can find them. Poor technical SEO means losing organic traffic to competitors.',
      stat: '75%',
      statLabel: 'of users never scroll past page 1',
    },
  ],

  // Solutions/Features
  solutions: [
    {
      icon: 'Rocket',
      title: 'High-Performance Architecture',
      description: 'We build websites using Next.js and modern frameworks that score 90+ on Google PageSpeed. Server-side rendering, edge caching, and optimized assets ensure blazing-fast load times.',
      highlights: [
        'SSR & Static Generation',
        'Edge caching with CDN',
        'Image optimization',
        'Code splitting',
      ],
    },
    {
      icon: 'Shield',
      title: 'Enterprise-Grade Security',
      description: 'Security is built into every layer. SSL certificates, secure authentication, input validation, and regular security audits protect your data and customers.',
      highlights: [
        'SSL/TLS encryption',
        'OAuth 2.0 authentication',
        'OWASP best practices',
        'Regular security audits',
      ],
    },
    {
      icon: 'Smartphone',
      title: 'Mobile-First Design',
      description: 'Every website we build starts with mobile users in mind. Responsive design, touch-optimized interfaces, and progressive web app capabilities ensure a seamless experience on any device.',
      highlights: [
        'Responsive breakpoints',
        'Touch-optimized UI',
        'PWA capabilities',
        'Mobile performance optimization',
      ],
    },
    {
      icon: 'Globe',
      title: 'SEO-Optimized Foundation',
      description: 'Technical SEO is baked in from the start. Semantic HTML, structured data, meta optimization, and Core Web Vitals compliance give you a competitive edge in search rankings.',
      highlights: [
        'Schema markup',
        'Semantic HTML5',
        'Meta optimization',
        'Core Web Vitals',
      ],
    },
    {
      icon: 'Database',
      title: 'Scalable Infrastructure',
      description: 'Whether you have 100 or 100,000 users, our architecture scales seamlessly. Cloud-native deployment, auto-scaling, and load balancing ensure your site stays fast under any load.',
      highlights: [
        'Auto-scaling',
        'Load balancing',
        'Database optimization',
        'Cloud deployment',
      ],
    },
    {
      icon: 'Code',
      title: 'Clean, Maintainable Code',
      description: 'We write code that your future team will thank us for. TypeScript, proper documentation, testing, and modular architecture make updates and scaling straightforward.',
      highlights: [
        'TypeScript codebase',
        'Comprehensive documentation',
        'Unit & E2E testing',
        'Modular architecture',
      ],
    },
  ],

  // Process
  process: {
    steps: [
      {
        icon: 'MessageSquare',
        title: 'Discovery & Strategy',
        description: 'We start by understanding your business goals, target audience, and technical requirements. This phase defines success metrics and project scope.',
        duration: '1-2 weeks',
        deliverables: ['Project brief', 'Technical specification', 'Timeline & budget'],
      },
      {
        icon: 'FileSearch',
        title: 'UX Research & Planning',
        description: 'We analyze your competitors, define user journeys, and create information architecture. This ensures the final product meets user needs and business goals.',
        duration: '1-2 weeks',
        deliverables: ['Competitor analysis', 'User personas', 'Sitemap & wireframes'],
      },
      {
        icon: 'Palette',
        title: 'UI Design',
        description: 'Our designers create pixel-perfect mockups that align with your brand. Interactive prototypes let you experience the final product before development begins.',
        duration: '2-3 weeks',
        deliverables: ['Design system', 'UI mockups', 'Interactive prototype'],
      },
      {
        icon: 'Code',
        title: 'Development',
        description: 'Using agile sprints, we build your website with clean, scalable code. Regular demos keep you involved and ensure the product matches your vision.',
        duration: '4-8 weeks',
        deliverables: ['Working codebase', 'Admin dashboard', 'API integrations'],
      },
      {
        icon: 'TestTube',
        title: 'Testing & QA',
        description: 'Rigorous testing across devices, browsers, and scenarios ensures a bug-free launch. Performance, security, and accessibility audits guarantee quality.',
        duration: '1-2 weeks',
        deliverables: ['Test reports', 'Performance audit', 'Security scan'],
      },
      {
        icon: 'Rocket',
        title: 'Launch & Optimize',
        description: 'We handle deployment, DNS configuration, and production setup. Post-launch monitoring and optimization ensure continued success.',
        duration: '1 week',
        deliverables: ['Live website', 'Analytics setup', 'Training documentation'],
      },
    ],
    totalDuration: '10-18 weeks',
  },

  // Benefits
  benefits: [
    {
      icon: 'TrendingUp',
      title: 'Increased Conversions',
      description: 'Fast, user-friendly websites convert more visitors into customers.',
      stat: '150',
      statSuffix: '%',
      statLabel: 'Average conversion increase',
    },
    {
      icon: 'Clock',
      title: 'Faster Time-to-Market',
      description: 'Agile development gets your product live faster than traditional agencies.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Faster delivery',
    },
    {
      icon: 'DollarSign',
      title: 'Lower Total Cost',
      description: 'Clean code and proper documentation reduce long-term maintenance costs.',
      stat: '60',
      statSuffix: '%',
      statLabel: 'Lower maintenance costs',
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'Bank-level security protects your business and customer data.',
      stat: '99.9',
      statSuffix: '%',
      statLabel: 'Uptime guarantee',
    },
    {
      icon: 'Zap',
      title: 'Lightning Performance',
      description: 'Sub-2-second load times keep users engaged and improve SEO rankings.',
      stat: '95',
      statSuffix: '+',
      statLabel: 'PageSpeed score',
    },
    {
      icon: 'Users',
      title: 'Better User Experience',
      description: 'Intuitive interfaces reduce bounce rates and increase engagement.',
      stat: '45',
      statSuffix: '%',
      statLabel: 'Lower bounce rate',
    },
    {
      icon: 'Target',
      title: 'Higher Search Rankings',
      description: 'Technical SEO excellence improves organic visibility and traffic.',
    },
    {
      icon: 'Heart',
      title: 'Dedicated Support',
      description: 'Ongoing maintenance and support keeps your site running smoothly.',
    },
  ],

  // Tech Stack
  techStack: [
    {
      name: 'Frontend',
      description: 'Modern frameworks for exceptional user experiences',
      technologies: [
        { name: 'Next.js', icon: '⚡', category: 'Frontend', proficiency: 'expert' },
        { name: 'React', icon: '⚛️', category: 'Frontend', proficiency: 'expert' },
        { name: 'TypeScript', icon: '📘', category: 'Frontend', proficiency: 'expert' },
        { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend', proficiency: 'expert' },
        { name: 'Vue.js', icon: '💚', category: 'Frontend', proficiency: 'advanced' },
        { name: 'Framer Motion', icon: '🎬', category: 'Frontend', proficiency: 'expert' },
      ],
    },
    {
      name: 'Backend',
      description: 'Scalable server-side solutions',
      technologies: [
        { name: 'Node.js', icon: '🟢', category: 'Backend', proficiency: 'expert' },
        { name: 'Python', icon: '🐍', category: 'Backend', proficiency: 'advanced' },
        { name: 'PostgreSQL', icon: '🐘', category: 'Backend', proficiency: 'expert' },
        { name: 'MongoDB', icon: '🍃', category: 'Backend', proficiency: 'advanced' },
        { name: 'GraphQL', icon: '◼️', category: 'Backend', proficiency: 'expert' },
        { name: 'REST APIs', icon: '🔗', category: 'Backend', proficiency: 'expert' },
      ],
    },
    {
      name: 'DevOps & Cloud',
      description: 'Reliable infrastructure and deployment',
      technologies: [
        { name: 'Vercel', icon: '▲', category: 'DevOps', proficiency: 'expert' },
        { name: 'AWS', icon: '☁️', category: 'DevOps', proficiency: 'advanced' },
        { name: 'Docker', icon: '🐳', category: 'DevOps', proficiency: 'advanced' },
        { name: 'GitHub Actions', icon: '🔄', category: 'DevOps', proficiency: 'expert' },
        { name: 'Cloudflare', icon: '🌐', category: 'DevOps', proficiency: 'expert' },
      ],
    },
    {
      name: 'CMS & E-commerce',
      description: 'Content and commerce platforms',
      technologies: [
        { name: 'Sanity', icon: '📝', category: 'CMS', proficiency: 'expert' },
        { name: 'Contentful', icon: '📄', category: 'CMS', proficiency: 'advanced' },
        { name: 'Shopify', icon: '🛒', category: 'E-commerce', proficiency: 'expert' },
        { name: 'Stripe', icon: '💳', category: 'E-commerce', proficiency: 'expert' },
      ],
    },
  ],

  // Portfolio/Case Studies
  portfolio: [
    {
      title: 'E-commerce Platform Redesign',
      client: 'FashionHub',
      industry: 'E-commerce',
      description: 'Complete rebuild of a legacy e-commerce platform using Next.js and headless Shopify, resulting in 3x faster page loads and 150% increase in mobile conversions.',
      challenge: 'The client had a slow, outdated Magento store losing customers to faster competitors. Mobile experience was particularly poor with 8+ second load times.',
      solution: 'We rebuilt the entire frontend using Next.js with ISR, connected to headless Shopify for inventory and checkout. Implemented edge caching and image optimization.',
      results: [
        'Page load time reduced from 8s to 1.2s',
        'Mobile conversion rate increased 150%',
        'SEO traffic grew 200% in 6 months',
        'Cart abandonment reduced by 35%',
      ],
      metrics: [
        { label: 'Load Time', value: '1.2s' },
        { label: 'Conversion', value: '+150%' },
        { label: 'Revenue', value: '+$2.1M' },
      ],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Shopify', 'E-commerce', 'Performance'],
      testimonial: {
        quote: 'The team delivered beyond our expectations. Our site is now faster than any competitor and conversions have skyrocketed.',
        author: 'Sarah Mitchell',
        role: 'CEO',
      },
    },
    {
      title: 'SaaS Dashboard Application',
      client: 'DataMetrics Pro',
      industry: 'SaaS',
      description: 'Built a real-time analytics dashboard handling millions of data points with sub-second query times and beautiful data visualizations.',
      challenge: 'The client needed to display complex analytics data in real-time without sacrificing performance or user experience.',
      solution: 'Developed a React dashboard with WebSocket connections for real-time updates, GraphQL for efficient data fetching, and D3.js for custom visualizations.',
      results: [
        'Handles 10M+ events per day',
        'Dashboard loads in under 1 second',
        'User engagement increased 80%',
        'Reduced support tickets by 60%',
      ],
      metrics: [
        { label: 'Events/Day', value: '10M+' },
        { label: 'Load Time', value: '<1s' },
        { label: 'NPS Score', value: '72' },
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'GraphQL', 'Real-time', 'Data Visualization'],
    },
    {
      title: 'Corporate Website Modernization',
      client: 'Global Finance Corp',
      industry: 'Finance',
      description: 'Transformed a dated corporate website into a modern, accessible platform that improved lead generation by 200% while meeting strict compliance requirements.',
      results: [
        'Lead generation increased 200%',
        'WCAG 2.1 AA compliance achieved',
        'Page speed score improved to 98',
        'Bounce rate reduced 40%',
      ],
      metrics: [
        { label: 'Leads', value: '+200%' },
        { label: 'PageSpeed', value: '98' },
        { label: 'Accessibility', value: 'AA' },
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Accessibility', 'Finance', 'Lead Gen'],
    },
    {
      title: 'Healthcare Portal Development',
      client: 'MediCare Connect',
      industry: 'Healthcare',
      description: 'Built a HIPAA-compliant patient portal with real-time appointment scheduling, secure messaging, and integrated telehealth capabilities, serving over 50,000 active patients.',
      challenge: 'The healthcare provider needed a modern, secure platform to manage patient interactions while meeting strict HIPAA compliance requirements and integrating with existing EHR systems.',
      solution: 'We developed a fully custom Next.js application with end-to-end encryption, role-based access control, and seamless EHR integration. Implemented video consultation features and automated appointment reminders.',
      results: [
        'Patient satisfaction increased 85%',
        'Administrative workload reduced by 40%',
        'Appointment no-shows decreased 60%',
        'Telehealth adoption reached 70% of patients',
      ],
      metrics: [
        { label: 'Active Users', value: '50K+' },
        { label: 'Satisfaction', value: '+85%' },
        { label: 'Efficiency', value: '+40%' },
      ],
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Healthcare', 'HIPAA', 'Telehealth'],
      testimonial: {
        quote: 'This portal has revolutionized how we interact with patients. The seamless integration and intuitive design have made both our staff and patients incredibly happy.',
        author: 'Dr. Amanda Foster',
        role: 'Chief Medical Officer',
      },
    },
  ],

  // Pricing
  pricing: {
    plans: [
      {
        name: 'Starter',
        description: 'Perfect for small businesses and startups',
        price: '$5,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Up to 10 pages', included: true },
          { name: 'Responsive design', included: true },
          { name: 'Basic SEO setup', included: true },
          { name: 'Contact forms', included: true },
          { name: 'CMS integration', included: true },
          { name: '30-day support', included: true },
          { name: 'E-commerce features', included: false },
          { name: 'Custom integrations', included: false },
          { name: 'Priority support', included: false },
        ],
        ctaText: 'Get Started',
      },
      {
        name: 'Professional',
        description: 'For growing businesses that need more',
        price: '$15,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Up to 30 pages', included: true },
          { name: 'Responsive design', included: true },
          { name: 'Advanced SEO', included: true },
          { name: 'Contact forms', included: true },
          { name: 'CMS integration', included: true },
          { name: '90-day support', included: true },
          { name: 'Basic e-commerce', included: true },
          { name: 'Third-party integrations', included: true },
          { name: 'Priority support', included: false },
        ],
        highlighted: true,
        badge: 'Most Popular',
        ctaText: 'Get Started',
      },
      {
        name: 'Enterprise',
        description: 'Custom solutions for large organizations',
        price: 'Custom',
        priceNote: 'Contact for pricing',
        features: [
          { name: 'Unlimited pages', included: true },
          { name: 'Responsive design', included: true },
          { name: 'Enterprise SEO', included: true },
          { name: 'Advanced forms', included: true },
          { name: 'Headless CMS', included: true },
          { name: '12-month support', included: true },
          { name: 'Full e-commerce', included: true },
          { name: 'Custom integrations', included: true },
          { name: 'Dedicated team', included: true },
        ],
        ctaText: 'Contact Sales',
      },
    ],
    customNote: 'All plans include free consultation, project management, and 30-day bug-fix warranty. Enterprise clients receive dedicated account management.',
  },

  // Testimonials
  testimonials: [
    {
      quote: 'Web On Dev transformed our outdated website into a conversion machine. Traffic is up 300% and we are generating more leads than ever before. Their team is professional, responsive, and truly understands business goals.',
      author: 'Michael Chen',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      rating: 5,
      location: 'San Francisco, CA',
    },
    {
      quote: 'The attention to detail and technical expertise is outstanding. They did not just build a website – they built a platform that scales with our growth. Best investment we have made.',
      author: 'Emma Rodriguez',
      role: 'CEO',
      company: 'GrowthLab',
      rating: 5,
      location: 'Austin, TX',
    },
    {
      quote: 'Finally, a development team that delivers on time and on budget. Our new site loads in under 2 seconds and our SEO rankings have improved dramatically. Highly recommended.',
      author: 'David Park',
      role: 'Founder',
      company: 'Innovate Digital',
      rating: 5,
      location: 'New York, NY',
    },
    {
      quote: 'Working with Web On Dev was seamless from start to finish. They understood our vision and delivered a website that exceeded our expectations. The ongoing support has been exceptional.',
      author: 'Jennifer Walsh',
      role: 'Operations Manager',
      company: 'Premier Services',
      rating: 5,
      location: 'Chicago, IL',
    },
  ],

  // FAQs
  faqs: [
    {
      question: 'How long does it take to build a website?',
      answer: 'Timeline depends on project complexity. A simple business website typically takes 6-8 weeks, while complex web applications can take 12-20 weeks. During discovery, we provide a detailed timeline based on your specific requirements.',
      category: 'Timeline',
    },
    {
      question: 'What technologies do you use?',
      answer: 'We specialize in modern JavaScript technologies including Next.js, React, Node.js, and TypeScript. For CMS, we work with Sanity, Contentful, and WordPress. Our tech stack is chosen based on your project needs to ensure optimal performance and scalability.',
      category: 'Technical',
    },
    {
      question: 'How much does a website cost?',
      answer: 'Pricing varies based on complexity, features, and timeline. Simple business websites start around $5,000, professional sites with CMS range from $10,000-$30,000, and complex web applications or e-commerce platforms start at $25,000+. We provide detailed quotes after understanding your requirements.',
      category: 'Pricing',
    },
    {
      question: 'Do you provide ongoing maintenance?',
      answer: 'Yes, we offer ongoing maintenance and support packages. This includes security updates, performance monitoring, content updates, and technical support. Packages start at $500/month depending on site complexity and support level needed.',
      category: 'Support',
    },
    {
      question: 'Will my website be SEO-friendly?',
      answer: 'Absolutely. SEO best practices are built into every website we create. This includes semantic HTML, meta optimization, schema markup, sitemap generation, fast load times, and mobile optimization. We also offer advanced SEO services for businesses that want to dominate search rankings.',
      category: 'SEO',
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Yes, we specialize in website redesigns and migrations. We can modernize your existing site while preserving SEO equity, improve performance, and add new features. We handle content migration and ensure zero downtime during transition.',
      category: 'Services',
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, we work with clients worldwide. Our team is experienced in remote collaboration and we have successfully delivered projects for clients across North America, Europe, Australia, and Asia. We adapt our communication schedule to accommodate different time zones.',
      category: 'General',
    },
    {
      question: 'What is your development process?',
      answer: 'We follow an agile methodology with 2-week sprints. The process includes: Discovery & Planning, UX/UI Design, Development, Testing & QA, Launch, and Post-launch Support. You receive regular updates and demos throughout the project.',
      category: 'Process',
    },
  ],

  // Related Services
  relatedServices: [
    {
      name: 'React Development',
      slug: 'react-development',
      description: 'Build dynamic, interactive user interfaces with React',
      icon: 'Code',
    },
    {
      name: 'Next.js Development',
      slug: 'nextjs-development',
      description: 'Full-stack React framework for production-ready apps',
      icon: 'Rocket',
    },
    {
      name: 'E-commerce Development',
      slug: 'ecommerce-solutions',
      description: 'Custom online stores that drive sales',
      icon: 'ShoppingCart',
    },
    {
      name: 'UI/UX Design',
      slug: 'ui-ux-design',
      description: 'User-centered design that converts',
      icon: 'Palette',
    },
    {
      name: 'Digital Marketing',
      slug: 'digital-marketing',
      description: 'Drive traffic and generate leads',
      icon: 'BarChart',
    },
    {
      name: 'Maintenance & Support',
      slug: 'maintenance-support',
      description: 'Keep your website running smoothly',
      icon: 'Settings',
    },
  ],

  // SEO
  seo: {
    title: 'Web Development Services | Custom Websites & Web Apps',
    description: 'Professional web development services for businesses. We build fast, secure, SEO-optimized websites using Next.js, React, and modern technologies. Get a free quote today.',
    keywords: [
      'web development services',
      'custom website development',
      'web application development',
      'Next.js development',
      'React development',
      'website design',
      'web development company',
      'professional web development',
      'custom web solutions',
      'business website development',
    ],
  },
};

export default webDevelopmentData;

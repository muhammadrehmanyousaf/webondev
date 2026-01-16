import { ServiceData } from '@/components/services/sections';

export const reactDevelopmentData: ServiceData = {
  // Basic Info
  slug: 'react-development',
  name: 'React Development Services',
  tagline: 'Build Fast, Interactive User Interfaces with React.js',
  description: 'Expert React.js development services for building modern, component-based web applications. We create scalable, maintainable React solutions that deliver exceptional user experiences.',
  category: 'Web Development',

  // Hero Section
  hero: {
    headline: 'React.js Development',
    subheadline: 'Component-Based UIs That Scale',
    description: 'Harness the power of React - the most popular JavaScript library for building user interfaces. We create blazing-fast, interactive web applications using React best practices, modern hooks, and scalable architecture patterns.',
    keyFeatures: [
      'Component-based architecture',
      'Virtual DOM for performance',
      'Modern hooks & patterns',
      'State management expertise',
      'Server-side rendering ready',
    ],
    badges: ['Official React', 'Performance First', 'Scalable'],
  },

  // Pain Points
  painPoints: [
    {
      icon: 'RefreshCw',
      title: 'Slow Page Interactions',
      description: 'Traditional websites refresh entire pages for every action. Users expect instant, app-like interactions that feel smooth and responsive.',
      stat: '88%',
      statLabel: 'expect app-like web experience',
    },
    {
      icon: 'Layers',
      title: 'Code Duplication',
      description: 'Without component-based architecture, you end up with duplicate code, inconsistent UI, and a maintenance nightmare.',
      stat: '60%',
      statLabel: 'of code is often duplicated',
    },
    {
      icon: 'Bug',
      title: 'Complex State Management',
      description: 'Managing application state across components becomes chaotic as apps grow. Data flows become unpredictable and bugs multiply.',
      stat: '70%',
      statLabel: 'of bugs relate to state issues',
    },
    {
      icon: 'Clock',
      title: 'Slow Development Cycles',
      description: 'Without reusable components, every feature takes longer to build. Development slows as the codebase grows.',
      stat: '3x',
      statLabel: 'longer without componentization',
    },
    {
      icon: 'Wrench',
      title: 'Difficult Maintenance',
      description: 'Spaghetti code and tight coupling make updates risky. Changing one thing breaks another, and technical debt accumulates.',
      stat: '40%',
      statLabel: 'of dev time on maintenance',
    },
    {
      icon: 'Users',
      title: 'Team Scalability Issues',
      description: 'Without clear component boundaries, multiple developers step on each other. Collaboration becomes difficult at scale.',
      stat: '55%',
      statLabel: 'of teams face collaboration issues',
    },
  ],

  // Solutions/Features
  solutions: [
    {
      icon: 'Boxes',
      title: 'Component Architecture',
      description: 'We build modular, reusable components that can be composed and combined. Write once, use everywhere - reducing code and increasing consistency.',
      highlights: [
        'Reusable UI components',
        'Atomic design principles',
        'Consistent design system',
        'Easy component testing',
      ],
    },
    {
      icon: 'Zap',
      title: 'Performance Optimization',
      description: 'React virtual DOM makes updates lightning fast. We optimize rendering, memoize expensive operations, and implement code splitting.',
      highlights: [
        'Virtual DOM efficiency',
        'React.memo optimization',
        'Code splitting & lazy loading',
        'Bundle size optimization',
      ],
    },
    {
      icon: 'Database',
      title: 'State Management',
      description: 'Clean, predictable state management using modern patterns. Whether React Context, Redux, or Zustand, we implement the right solution.',
      highlights: [
        'React hooks & context',
        'Redux/Redux Toolkit',
        'Zustand/Jotai',
        'Server state with React Query',
      ],
    },
    {
      icon: 'Globe',
      title: 'SSR & SSG Support',
      description: 'React apps can be server-rendered for SEO and initial load performance. We implement SSR with Next.js or other frameworks when needed.',
      highlights: [
        'Server-side rendering',
        'Static site generation',
        'SEO optimization',
        'Fast initial page load',
      ],
    },
    {
      icon: 'TestTube',
      title: 'Testing & Quality',
      description: 'Comprehensive testing ensures reliability. Unit tests, integration tests, and end-to-end tests catch bugs before production.',
      highlights: [
        'Jest unit testing',
        'React Testing Library',
        'Cypress E2E tests',
        'CI/CD integration',
      ],
    },
    {
      icon: 'Smartphone',
      title: 'Cross-Platform Ready',
      description: 'React skills transfer to React Native for mobile apps. Build web and mobile from the same team with shared components.',
      highlights: [
        'React Native ready',
        'Shared business logic',
        'Cross-platform components',
        'Consistent experience',
      ],
    },
  ],

  // Process Steps
  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Requirements Analysis',
        description: 'We analyze your project requirements, user needs, and technical constraints to plan the optimal React architecture.',
        duration: '1 week',
        deliverables: ['Technical Specification', 'Component Architecture Plan', 'Technology Decisions'],
      },
      {
        icon: 'Boxes',
        title: 'Component Design',
        description: 'Design the component hierarchy, data flow, and state management strategy. Create a component library blueprint.',
        duration: '1-2 weeks',
        deliverables: ['Component Hierarchy', 'Design System', 'State Management Plan'],
      },
      {
        icon: 'Code',
        title: 'Core Development',
        description: 'Build the foundation - routing, state management, and core components. Establish patterns the rest of the app will follow.',
        duration: '2-4 weeks',
        deliverables: ['Core Components', 'Routing Setup', 'State Management'],
      },
      {
        icon: 'Layers',
        title: 'Feature Development',
        description: 'Develop application features using established patterns. Build, test, and refine each feature module.',
        duration: '4-8 weeks',
        deliverables: ['Feature Components', 'API Integration', 'User Flows'],
      },
      {
        icon: 'TestTube',
        title: 'Testing & Optimization',
        description: 'Comprehensive testing and performance optimization. Ensure the app is fast, reliable, and accessible.',
        duration: '1-2 weeks',
        deliverables: ['Test Coverage Report', 'Performance Audit', 'Bug Fixes'],
      },
      {
        icon: 'Rocket',
        title: 'Deployment & Support',
        description: 'Deploy to production with CI/CD. Provide documentation, training, and ongoing support.',
        duration: '1 week + ongoing',
        deliverables: ['Production Deployment', 'CI/CD Pipeline', 'Documentation'],
      },
    ],
    totalDuration: '10-18 weeks',
  },

  // Benefits
  benefits: [
    {
      icon: 'Zap',
      title: 'Lightning Fast UIs',
      description: 'React virtual DOM ensures only necessary updates are made, resulting in smooth, instant interactions.',
      stat: '60',
      statSuffix: 'fps',
      statLabel: 'Smooth Animations',
    },
    {
      icon: 'Boxes',
      title: 'Reusable Components',
      description: 'Build a component once and reuse it across your entire application. Consistent UI with less code.',
      stat: '70',
      statSuffix: '%',
      statLabel: 'Less Code',
    },
    {
      icon: 'Users',
      title: 'Large Ecosystem',
      description: 'The largest JavaScript ecosystem means more libraries, tools, and talent available for your project.',
      stat: '2M+',
      statLabel: 'npm Downloads/Week',
    },
    {
      icon: 'RefreshCw',
      title: 'Easy Updates',
      description: 'Update components without affecting others. Smaller, safer updates with reduced regression risk.',
      stat: '3',
      statSuffix: 'x',
      statLabel: 'Faster Updates',
    },
    {
      icon: 'Globe',
      title: 'SEO Friendly',
      description: 'Combine React with SSR frameworks for SEO-optimized, fast-loading applications.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'SEO Compatible',
    },
    {
      icon: 'Smartphone',
      title: 'Go Mobile',
      description: 'Skills and components transfer to React Native. Web to mobile with the same team.',
      stat: '90',
      statSuffix: '%',
      statLabel: 'Code Sharing Possible',
    },
  ],

  // Tech Stack
  techStack: [
    {
      name: 'React Core',
      description: 'Core React technologies and patterns',
      technologies: [
        { name: 'React 18+', icon: 'react', category: 'Core', proficiency: 'expert' },
        { name: 'React Hooks', icon: 'code', category: 'Core', proficiency: 'expert' },
        { name: 'React Router', icon: 'route', category: 'Core', proficiency: 'expert' },
        { name: 'React Query', icon: 'database', category: 'Core', proficiency: 'expert' },
      ],
    },
    {
      name: 'State & Data',
      description: 'State management and data handling',
      technologies: [
        { name: 'Redux Toolkit', icon: 'redux', category: 'State', proficiency: 'expert' },
        { name: 'Zustand', icon: 'bear', category: 'State', proficiency: 'advanced' },
        { name: 'TanStack Query', icon: 'query', category: 'State', proficiency: 'expert' },
        { name: 'React Hook Form', icon: 'form', category: 'State', proficiency: 'expert' },
      ],
    },
    {
      name: 'Styling',
      description: 'Styling and animation libraries',
      technologies: [
        { name: 'Tailwind CSS', icon: 'tailwind', category: 'Styling', proficiency: 'expert' },
        { name: 'Styled Components', icon: 'styled', category: 'Styling', proficiency: 'advanced' },
        { name: 'Framer Motion', icon: 'framer', category: 'Styling', proficiency: 'expert' },
        { name: 'Radix UI', icon: 'radix', category: 'Styling', proficiency: 'advanced' },
      ],
    },
    {
      name: 'Testing',
      description: 'Testing and quality assurance',
      technologies: [
        { name: 'Jest', icon: 'jest', category: 'Testing', proficiency: 'expert' },
        { name: 'Testing Library', icon: 'testing', category: 'Testing', proficiency: 'expert' },
        { name: 'Cypress', icon: 'cypress', category: 'Testing', proficiency: 'advanced' },
        { name: 'Storybook', icon: 'storybook', category: 'Testing', proficiency: 'expert' },
      ],
    },
  ],

  // Portfolio
  portfolio: [
    {
      title: 'Financial Dashboard',
      client: 'DataFlow Analytics',
      industry: 'FinTech',
      description: 'Real-time financial data visualization dashboard with complex charts, live updates, and customizable widgets.',
      challenge: 'Handle real-time data from multiple sources with 50ms update latency requirements.',
      solution: 'Built with React 18 concurrent features, Redux for state, and D3.js for visualizations with WebSocket integration.',
      results: ['50ms update latency', '500+ concurrent users', '99.99% uptime'],
      metrics: [
        { label: 'Update Latency', value: '50ms' },
        { label: 'Concurrent Users', value: '500+' },
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['FinTech', 'React 18', 'Redux Toolkit', 'D3.js', 'WebSocket'],
    },
    {
      title: 'E-Learning Platform',
      client: 'EduTech Pro',
      industry: 'EdTech',
      description: 'Interactive learning platform with video streaming, quizzes, progress tracking, and social features.',
      challenge: 'Create engaging, interactive learning experiences that work across all devices.',
      solution: 'React-based platform with video integration, real-time progress sync, and gamification features.',
      results: ['100K+ users', '4.8/5 rating', '85% completion rate'],
      metrics: [
        { label: 'Active Users', value: '100K+' },
        { label: 'Completion Rate', value: '85%' },
      ],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['EdTech', 'React', 'React Query', 'Tailwind CSS', 'Video.js'],
    },
    {
      title: 'Healthcare Management',
      client: 'CarePlus Medical',
      industry: 'Healthcare',
      description: 'Patient management system with scheduling, records, billing, and HIPAA-compliant data handling.',
      challenge: 'Build a secure, HIPAA-compliant system that integrates with existing medical workflows.',
      solution: 'Custom React application with encrypted data handling, role-based access, and EHR integration.',
      results: ['40% efficiency gain', 'HIPAA compliant', 'Zero data breaches'],
      metrics: [
        { label: 'Efficiency Gain', value: '40%' },
        { label: 'Data Breaches', value: 'Zero' },
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'React', 'Redux', 'React Hook Form', 'AWS'],
    },
    {
      title: 'Startup Collaboration Hub',
      client: 'TechVenture Labs',
      industry: 'Startup',
      description: 'Team collaboration platform with real-time document editing, task management, and video conferencing.',
      challenge: 'Build a fast, responsive collaboration tool that could compete with established enterprise solutions.',
      solution: 'React application with optimistic updates, WebRTC video, and conflict-free replicated data types for real-time sync.',
      results: ['25K+ teams onboarded', '99.5% uptime', '4.9 star rating'],
      metrics: [
        { label: 'Teams', value: '25K+' },
        { label: 'Rating', value: '4.9 stars' },
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      tags: ['Startup', 'React', 'WebRTC', 'Zustand', 'Tailwind CSS'],
    },
  ],

  // Pricing
  pricing: {
    plans: [
      {
        name: 'Component Library',
        description: 'Build a reusable React component library for your organization',
        price: '$8,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Up to 30 components', included: true },
          { name: 'Storybook documentation', included: true },
          { name: 'TypeScript support', included: true },
          { name: 'Unit tests included', included: true },
          { name: 'Design system tokens', included: true },
          { name: 'Custom theming', included: false },
          { name: 'npm package setup', included: false },
        ],
        ctaText: 'Get Started',
      },
      {
        name: 'React Application',
        description: 'Full React web application development',
        price: '$25,000',
        priceNote: 'Starting price',
        highlighted: true,
        badge: 'Most Popular',
        features: [
          { name: 'Complete React application', included: true },
          { name: 'State management setup', included: true },
          { name: 'API integration', included: true },
          { name: 'Authentication system', included: true },
          { name: 'Responsive design', included: true },
          { name: 'Full test coverage', included: true },
          { name: 'CI/CD pipeline', included: true },
        ],
        ctaText: 'Start Project',
      },
      {
        name: 'Enterprise React',
        description: 'Large-scale React applications with advanced requirements',
        price: 'Custom',
        priceNote: 'Based on scope',
        features: [
          { name: 'Micro-frontend architecture', included: true },
          { name: 'Multi-team collaboration', included: true },
          { name: 'Advanced state management', included: true },
          { name: 'Performance optimization', included: true },
          { name: 'SSR/SSG implementation', included: true },
          { name: 'Dedicated team', included: true },
          { name: 'Long-term support', included: true },
        ],
        ctaText: 'Contact Sales',
      },
    ],
    customNote: 'All React projects include TypeScript, modern best practices, and comprehensive documentation.',
  },

  // Testimonials
  testimonials: [
    {
      quote: 'Their React expertise transformed our legacy app into a modern, lightning-fast platform. The component architecture they built made our team twice as productive.',
      author: 'Michael Torres',
      role: 'CTO',
      company: 'DataFlow Analytics',
      rating: 5,
      location: 'New York, NY',
    },
    {
      quote: 'Finally, a team that truly understands React at a deep level. They optimized our app performance and taught our team best practices along the way.',
      author: 'Emily Chang',
      role: 'Engineering Manager',
      company: 'TechStart Inc',
      rating: 5,
      location: 'Seattle, WA',
    },
    {
      quote: 'The React dashboard they built handles real-time data from thousands of sources without breaking a sweat. Incredible performance.',
      author: 'Robert Kim',
      role: 'VP of Engineering',
      company: 'FinanceHub',
      rating: 5,
      location: 'San Francisco, CA',
    },
  ],

  // FAQs
  faqs: [
    {
      question: 'Why choose React over other frameworks?',
      answer: 'React offers the best combination of performance, flexibility, and ecosystem size. It is backed by Meta, used by millions of developers, and has the largest library of third-party packages. The component model makes code reusable and maintainable.',
      category: 'General',
    },
    {
      question: 'Do you use class components or hooks?',
      answer: 'We use modern React with hooks and functional components exclusively. Hooks provide cleaner code, better reusability, and easier testing. Class components are only used when maintaining legacy code.',
      category: 'Technical',
    },
    {
      question: 'How do you handle state management?',
      answer: 'We choose state management based on your needs. For simple apps, React Context and hooks suffice. For complex apps, we use Redux Toolkit or Zustand. For server state, React Query or SWR. We never over-engineer.',
      category: 'Technical',
    },
    {
      question: 'Can React applications be SEO-friendly?',
      answer: 'Absolutely. While client-rendered React has SEO limitations, we can implement server-side rendering (SSR) or static generation (SSG) using Next.js. This gives you full SEO capabilities with React benefits.',
      category: 'SEO',
    },
    {
      question: 'How do you ensure React app performance?',
      answer: 'We optimize at multiple levels: code splitting, lazy loading, memoization, efficient re-renders, bundle optimization, and CDN delivery. We also set up monitoring to catch performance regressions.',
      category: 'Performance',
    },
    {
      question: 'What about React Native for mobile?',
      answer: 'React skills transfer directly to React Native. We can build your web app and mobile app with significant code sharing, or help your team transition to React Native development.',
      category: 'Mobile',
    },
    {
      question: 'How long does a React project take?',
      answer: 'A small React app takes 4-8 weeks. Medium complexity applications take 2-4 months. Large enterprise applications can take 6+ months. We provide detailed estimates after understanding your requirements.',
      category: 'Timeline',
    },
    {
      question: 'Do you provide React training?',
      answer: 'Yes. We offer React training and workshops for development teams. Topics include React fundamentals, hooks, state management, testing, and performance optimization.',
      category: 'Training',
    },
  ],

  // Related Services
  relatedServices: [
    {
      name: 'Next.js Development',
      slug: 'nextjs-development',
      description: 'Full-stack React with Next.js framework',
      icon: 'Layers',
    },
    {
      name: 'Custom Web Development',
      slug: 'custom-web-development',
      description: 'Bespoke web solutions from scratch',
      icon: 'Code',
    },
    {
      name: 'React Native Development',
      slug: 'react-native-development',
      description: 'Cross-platform mobile apps with React',
      icon: 'Smartphone',
    },
    {
      name: 'Frontend Development',
      slug: 'frontend-development',
      description: 'Modern frontend architecture',
      icon: 'Layout',
    },
  ],

  // SEO
  seo: {
    title: 'React Development Services | Expert React.js Developers',
    description: 'Professional React.js development services for building fast, scalable web applications. Component-based architecture, modern hooks, and performance optimization.',
    keywords: [
      'react development',
      'react.js development',
      'react developers',
      'react application development',
      'react web development',
      'react consulting',
      'react.js services',
    ],
  },
};

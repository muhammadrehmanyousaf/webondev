export interface PortfolioProject {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  technologies: string[];
  client: string;
  duration: string;
  rating: number;
  results: string[];
  detailedResults: string;
  liveUrl: string;
  githubUrl: string;
}

export const projects: PortfolioProject[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    slug: 'ecommerce-platform',
    category: 'E-commerce',
    description: 'A comprehensive e-commerce platform with advanced features including inventory management, payment processing, and analytics dashboard. Built to handle thousands of concurrent users with sub-second page loads.',
    challenge: 'RetailCorp was losing customers due to a slow, outdated online store that couldn\'t handle traffic spikes during sales events. Their legacy system had a 12-second average page load time, cart abandonment rates exceeding 78%, and no mobile optimization. They needed a complete rebuild that could scale during peak shopping seasons while providing a seamless checkout experience across all devices.',
    solution: 'We designed and built a headless e-commerce architecture using React for the storefront and Node.js microservices for the backend. The platform features real-time inventory sync across multiple warehouses, a one-click checkout flow with Stripe integration, AI-powered product recommendations, and an admin dashboard for analytics and order management. We implemented edge caching with AWS CloudFront to ensure sub-200ms page loads globally.',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    client: 'RetailCorp',
    duration: '4 months',
    rating: 5,
    results: ['300% increase in sales', '50% faster checkout', '99.9% uptime'],
    detailedResults: 'Within three months of launch, RetailCorp saw a 300% increase in online sales revenue. Cart abandonment dropped from 78% to 23% thanks to the streamlined checkout process. Page load times improved from 12 seconds to under 1 second. The platform successfully handled a 15x traffic surge during Black Friday with zero downtime, processing over 50,000 orders in a single day.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    slug: 'healthcare-mobile-app',
    category: 'Mobile Apps',
    description: 'A comprehensive healthcare app connecting patients with doctors, featuring telemedicine, appointment booking, and health tracking. HIPAA-compliant and built for reliability across iOS and Android.',
    challenge: 'HealthTech Solutions needed a patient-facing mobile app that could support telemedicine consultations, appointment scheduling, prescription management, and health metric tracking. The app had to be fully HIPAA-compliant, work reliably on both iOS and Android, and integrate with existing hospital EMR systems. Previous development attempts had failed due to the complexity of real-time video calls and strict data security requirements.',
    solution: 'We built a cross-platform app using React Native with WebRTC for real-time video consultations. The architecture includes end-to-end encryption for all patient data, secure Firebase backend with role-based access control, and a custom EMR integration layer. Key features include AI-powered symptom checker, automated appointment reminders, digital prescription management, and wearable device integration for continuous health monitoring. We implemented offline-first architecture so patients can access their health records without connectivity.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React Native', 'Firebase', 'Redux', 'WebRTC', 'Stripe'],
    client: 'HealthTech Solutions',
    duration: '6 months',
    rating: 5,
    results: ['10K+ active users', '95% user satisfaction', '40% cost reduction'],
    detailedResults: 'The app reached 10,000 active users within the first two months of launch, with a 95% user satisfaction rating based on in-app surveys. Telemedicine consultations reduced patient wait times by 70% and cut operational costs by 40%. The app maintained a 4.8-star rating on both App Store and Google Play. Hospital partners reported a 60% reduction in no-show appointments thanks to automated reminders and easy rescheduling.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'SaaS Analytics Dashboard',
    slug: 'saas-analytics-dashboard',
    category: 'SaaS',
    description: 'A powerful analytics dashboard for businesses to track performance, generate insights, and make data-driven decisions. Features real-time data visualization, custom report builders, and automated alerting.',
    challenge: 'DataInsights Inc needed to replace their spreadsheet-based reporting workflow with a modern analytics platform. Their clients were spending 20+ hours per week manually compiling reports from multiple data sources. The platform needed to ingest data from dozens of third-party APIs, process millions of data points in real-time, and present actionable insights through intuitive visualizations that non-technical users could understand.',
    solution: 'We built a full-stack SaaS platform using Next.js and TypeScript with a PostgreSQL backend optimized for analytical queries. The dashboard features drag-and-drop report builders, 50+ chart types powered by Chart.js, automated data pipeline connectors for popular business tools, and real-time collaboration features. We implemented row-level security for multi-tenant data isolation, scheduled report generation with email delivery, and custom alerting rules that notify users when KPIs deviate from targets.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js', 'Vercel'],
    client: 'DataInsights Inc',
    duration: '5 months',
    rating: 5,
    results: ['150+ enterprise clients', '2x faster insights', '60% time savings'],
    detailedResults: 'The platform onboarded 150+ enterprise clients within six months. Users reported generating insights 2x faster compared to their previous workflows, saving an average of 12 hours per week on reporting tasks. The automated alerting system helped clients identify revenue anomalies 48 hours earlier on average. Monthly recurring revenue grew 340% quarter-over-quarter, and the platform now processes over 2 billion data points daily.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Real Estate Platform',
    slug: 'real-estate-platform',
    category: 'Web Development',
    description: 'A modern real estate platform with property listings, virtual tours, mortgage calculator, and agent management system. Designed to streamline the home buying journey from search to closing.',
    challenge: 'PropertyPro was struggling with an outdated property listing website that offered poor search functionality, no virtual tour capabilities, and a fragmented lead management system. Agents were losing leads because the platform couldn\'t handle concurrent users during peak hours, and the lack of mobile responsiveness meant losing 60% of mobile traffic. They needed a modern platform that would differentiate them in a competitive market.',
    solution: 'We developed a feature-rich real estate platform using Vue.js and Laravel with advanced search powered by Elasticsearch. The platform includes interactive property maps with Google Maps API integration, 360-degree virtual tours, an AI-powered mortgage calculator, automated property valuation estimates, and a comprehensive CRM for agent lead management. We built a custom media pipeline using AWS S3 for high-resolution property images and virtual tour assets, with automatic optimization for fast loading across devices.',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API', 'AWS S3'],
    client: 'PropertyPro',
    duration: '3 months',
    rating: 5,
    results: ['200% more leads', '80% faster searches', '45% higher conversions'],
    detailedResults: 'PropertyPro saw a 200% increase in qualified leads within the first month after launch. Property search speed improved by 80% thanks to Elasticsearch indexing, enabling buyers to find relevant listings in under 2 seconds. Virtual tours increased average session duration by 3x and led to a 45% higher conversion rate from listing view to inquiry. Agent productivity improved by 35% with the integrated CRM, and the platform now handles 100,000+ monthly active users without performance degradation.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Finance App Design',
    slug: 'finance-app-design',
    category: 'UI/UX Design',
    description: 'Clean and intuitive UI/UX design for a personal finance management application with budgeting and investment tracking. Focused on making complex financial data accessible to everyday users.',
    challenge: 'FinanceFlow had a functional personal finance app with strong backend capabilities, but users were abandoning it due to confusing navigation, overwhelming data displays, and a dated visual design. User research revealed that 73% of users found the budgeting features too complex, and only 15% of users explored investment tracking features. The app needed a complete design overhaul that would make financial management feel approachable rather than intimidating.',
    solution: 'We conducted extensive user research including 30+ interviews, card sorting exercises, and usability testing to rebuild the information architecture from the ground up. The new design system features a calming color palette, progressive disclosure patterns that reveal complexity only when needed, and data visualizations that make spending patterns immediately understandable. We designed custom micro-interactions for transaction categorization, created gamification elements for savings goals, and built an onboarding flow that personalizes the dashboard based on user financial goals.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design System'],
    client: 'FinanceFlow',
    duration: '2 months',
    rating: 5,
    results: ['90% user adoption', '4.8 app store rating', '70% engagement increase'],
    detailedResults: 'After implementing the redesign, FinanceFlow achieved a 90% adoption rate among existing users with only 3% requesting the old interface. The App Store rating improved from 3.2 to 4.8 stars. Daily active user engagement increased by 70%, with users spending an average of 8 minutes per session compared to 3 minutes previously. Investment tracking feature usage jumped from 15% to 62% of users, and the budgeting completion rate rose from 27% to 81%.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Food Delivery Platform',
    slug: 'food-delivery-platform',
    category: 'Mobile Apps',
    description: 'A complete food delivery ecosystem with customer app, restaurant dashboard, and delivery partner application. Built for real-time order tracking and seamless multi-party coordination.',
    challenge: 'QuickEats was a startup entering the competitive food delivery market and needed a three-sided platform connecting customers, restaurants, and delivery partners. The technical challenges included real-time order tracking with accurate ETAs, dynamic delivery partner assignment based on location and availability, restaurant kitchen load balancing to prevent order backlogs, and maintaining a smooth user experience under high-concurrency conditions during meal rush hours.',
    solution: 'We built a Flutter-based mobile ecosystem consisting of three interconnected apps with a shared Node.js backend. Real-time features are powered by Socket.io for live order tracking, push notifications, and driver location updates. The platform includes an intelligent dispatch algorithm that considers driver proximity, restaurant preparation time, and traffic conditions for optimal delivery routing via Google Maps. The restaurant dashboard features an intuitive order management system with automatic printer integration and estimated preparation time calculations.',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Flutter', 'Node.js', 'Socket.io', 'MongoDB', 'Google Maps'],
    client: 'QuickEats',
    duration: '7 months',
    rating: 5,
    results: ['50K+ orders/month', '25 min avg delivery', '4.7 user rating'],
    detailedResults: 'QuickEats processed over 50,000 orders per month within six months of launch across 3 cities. The average delivery time of 25 minutes was 35% faster than the market average, thanks to the intelligent dispatch algorithm. Customer retention rate reached 68%, significantly above the industry average of 45%. The platform onboarded 800+ restaurant partners and maintained a 4.7-star user rating. During peak hours, the system successfully handles 500+ concurrent orders with 99.95% uptime.',
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const getProjectBySlug = (slug: string): PortfolioProject | null => {
  return projects.find(project => project.slug === slug) || null;
};

export const getAllProjectSlugs = (): string[] => {
  return projects.map(project => project.slug);
};

export const getProjectsByCategory = (category: string): PortfolioProject[] => {
  if (category === 'All') return projects;
  return projects.filter(project => project.category === category);
};
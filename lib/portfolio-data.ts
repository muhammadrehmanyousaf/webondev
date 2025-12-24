export interface PortfolioProject {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  client: string;
  duration: string;
  rating: number;
  results: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: PortfolioProject[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    slug: 'ecommerce-platform',
    category: 'E-commerce',
    description: 'A comprehensive e-commerce platform with advanced features including inventory management, payment processing, and analytics dashboard.',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    client: 'RetailCorp',
    duration: '4 months',
    rating: 5,
    results: ['300% increase in sales', '50% faster checkout', '99.9% uptime'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    slug: 'healthcare-mobile-app',
    category: 'Mobile Apps',
    description: 'A comprehensive healthcare app connecting patients with doctors, featuring telemedicine, appointment booking, and health tracking.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React Native', 'Firebase', 'Redux', 'WebRTC', 'Stripe'],
    client: 'HealthTech Solutions',
    duration: '6 months',
    rating: 5,
    results: ['10K+ active users', '95% user satisfaction', '40% cost reduction'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'SaaS Analytics Dashboard',
    slug: 'saas-analytics-dashboard',
    category: 'SaaS',
    description: 'A powerful analytics dashboard for businesses to track performance, generate insights, and make data-driven decisions.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js', 'Vercel'],
    client: 'DataInsights Inc',
    duration: '5 months',
    rating: 5,
    results: ['150+ enterprise clients', '2x faster insights', '60% time savings'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Real Estate Platform',
    slug: 'real-estate-platform',
    category: 'Web Development',
    description: 'A modern real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API', 'AWS S3'],
    client: 'PropertyPro',
    duration: '3 months',
    rating: 5,
    results: ['200% more leads', '80% faster searches', '45% higher conversions'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Finance App Design',
    slug: 'finance-app-design',
    category: 'UI/UX Design',
    description: 'Clean and intuitive UI/UX design for a personal finance management application with budgeting and investment tracking.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design System'],
    client: 'FinanceFlow',
    duration: '2 months',
    rating: 5,
    results: ['90% user adoption', '4.8 app store rating', '70% engagement increase'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Food Delivery Platform',
    slug: 'food-delivery-platform',
    category: 'Mobile Apps',
    description: 'A complete food delivery ecosystem with customer app, restaurant dashboard, and delivery partner application.',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Flutter', 'Node.js', 'Socket.io', 'MongoDB', 'Google Maps'],
    client: 'QuickEats',
    duration: '7 months',
    rating: 5,
    results: ['50K+ orders/month', '25 min avg delivery', '4.7 user rating'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 7,
    title: 'Enterprise CRM System',
    slug: 'enterprise-crm-system',
    category: 'Enterprise',
    description: 'A comprehensive CRM solution for enterprise clients with sales automation, lead tracking, customer analytics, and multi-team collaboration.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Angular', '.NET Core', 'SQL Server', 'Azure', 'Power BI'],
    client: 'GlobalTech Industries',
    duration: '8 months',
    rating: 5,
    results: ['40% sales increase', '60% faster lead response', '500+ active users'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 8,
    title: 'Digital Marketing Campaign',
    slug: 'digital-marketing-campaign',
    category: 'Digital Marketing',
    description: 'Full-scale digital marketing strategy including SEO optimization, PPC campaigns, social media marketing, and content creation.',
    image: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Google Ads', 'Meta Ads', 'SEMrush', 'HubSpot', 'Analytics'],
    client: 'StartupBoost',
    duration: '6 months',
    rating: 5,
    results: ['500% ROI', '150K organic traffic', '#1 Google rankings'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 9,
    title: 'Luxury Fashion Store',
    slug: 'luxury-fashion-store',
    category: 'E-commerce',
    description: 'High-end fashion e-commerce platform with AR try-on features, personalized recommendations, and exclusive membership perks.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Next.js', 'Shopify Plus', 'Three.js', 'Algolia', 'Klaviyo'],
    client: 'Luxe Couture',
    duration: '5 months',
    rating: 5,
    results: ['$2M first quarter sales', '85% return customer rate', '40% AOV increase'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 10,
    title: 'Fitness Tracking App',
    slug: 'fitness-tracking-app',
    category: 'Mobile Apps',
    description: 'AI-powered fitness app with workout plans, nutrition tracking, progress analytics, and social challenges integration.',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Swift', 'Kotlin', 'TensorFlow', 'HealthKit', 'Firebase'],
    client: 'FitLife Pro',
    duration: '5 months',
    rating: 5,
    results: ['100K+ downloads', '4.9 app rating', '78% daily active users'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 11,
    title: 'Project Management SaaS',
    slug: 'project-management-saas',
    category: 'SaaS',
    description: 'Collaborative project management platform with Gantt charts, resource allocation, time tracking, and automated reporting.',
    image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'GraphQL', 'PostgreSQL', 'Redis', 'Kubernetes'],
    client: 'TeamSync',
    duration: '7 months',
    rating: 5,
    results: ['200+ teams onboarded', '35% productivity boost', '$1.2M ARR'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 12,
    title: 'Corporate Website Redesign',
    slug: 'corporate-website-redesign',
    category: 'Web Development',
    description: 'Complete website overhaul for a Fortune 500 company with modern design, improved UX, and blazing-fast performance.',
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Next.js', 'Contentful', 'Tailwind CSS', 'Vercel', 'GTM'],
    client: 'TechCorp Global',
    duration: '4 months',
    rating: 5,
    results: ['98 Lighthouse score', '120% more inquiries', '3s avg load time'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 13,
    title: 'Banking App Redesign',
    slug: 'banking-app-redesign',
    category: 'UI/UX Design',
    description: 'Complete UX overhaul for a digital banking app focusing on accessibility, security perception, and seamless transactions.',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Figma', 'Principle', 'User Testing', 'A/B Testing', 'Accessibility'],
    client: 'SecureBank',
    duration: '3 months',
    rating: 5,
    results: ['92% CSAT score', '55% fewer support tickets', 'WCAG 2.1 compliant'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 14,
    title: 'Social Media Campaign',
    slug: 'social-media-campaign',
    category: 'Digital Marketing',
    description: 'Viral social media marketing campaign with influencer partnerships, UGC strategy, and community engagement program.',
    image: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Instagram', 'TikTok', 'Hootsuite', 'Sprout Social', 'Canva'],
    client: 'TrendyBrand Co',
    duration: '4 months',
    rating: 5,
    results: ['2M+ impressions', '15K new followers', '400% engagement increase'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 15,
    title: 'ERP Integration Platform',
    slug: 'erp-integration-platform',
    category: 'Enterprise',
    description: 'Enterprise resource planning system integrating HR, finance, inventory, and supply chain modules for seamless operations.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['SAP', 'Oracle', 'Python', 'Docker', 'Microservices'],
    client: 'ManufacturePro',
    duration: '12 months',
    rating: 5,
    results: ['30% cost reduction', '99.95% uptime', '1000+ users'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 16,
    title: 'Online Learning Platform',
    slug: 'online-learning-platform',
    category: 'Web Development',
    description: 'Feature-rich LMS with live classes, course marketplace, certification system, and interactive learning tools.',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Django', 'PostgreSQL', 'WebRTC', 'Stripe'],
    client: 'EduLearn Academy',
    duration: '6 months',
    rating: 5,
    results: ['50K+ students enrolled', '1000+ courses', '$500K monthly revenue'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 17,
    title: 'Grocery Delivery App',
    slug: 'grocery-delivery-app',
    category: 'Mobile Apps',
    description: 'On-demand grocery delivery app with smart shopping lists, subscription boxes, and real-time order tracking.',
    image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React Native', 'Node.js', 'Redis', 'Elasticsearch', 'Twilio'],
    client: 'FreshMart',
    duration: '5 months',
    rating: 5,
    results: ['30K+ weekly orders', '45 min delivery time', '4.8 star rating'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 18,
    title: 'B2B Marketplace',
    slug: 'b2b-marketplace',
    category: 'E-commerce',
    description: 'Wholesale B2B marketplace connecting manufacturers with retailers, featuring bulk ordering and invoice management.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Elasticsearch', 'AWS'],
    client: 'TradeConnect',
    duration: '6 months',
    rating: 5,
    results: ['$10M GMV first year', '5000+ businesses', '2000+ products listed'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 19,
    title: 'HR Management System',
    slug: 'hr-management-system',
    category: 'SaaS',
    description: 'All-in-one HR platform with recruitment, onboarding, performance reviews, payroll, and employee self-service portal.',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Java Spring', 'PostgreSQL', 'Keycloak', 'Docker'],
    client: 'PeopleFirst HR',
    duration: '8 months',
    rating: 5,
    results: ['50% HR time savings', '300+ companies', '99.9% uptime SLA'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 20,
    title: 'Travel Booking Platform',
    slug: 'travel-booking-platform',
    category: 'Web Development',
    description: 'Comprehensive travel booking engine with flights, hotels, car rentals, and curated experience packages.',
    image: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Next.js', 'Python', 'Redis', 'Amadeus API', 'Stripe'],
    client: 'WanderLux Travel',
    duration: '7 months',
    rating: 5,
    results: ['$5M bookings first quarter', '25K active users', '4.6 trust rating'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 21,
    title: 'Mobile Banking UI Kit',
    slug: 'mobile-banking-ui-kit',
    category: 'UI/UX Design',
    description: 'Comprehensive design system and UI kit for fintech applications with 200+ components and accessibility guidelines.',
    image: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Figma', 'Sketch', 'Design Tokens', 'Storybook', 'Zeroheight'],
    client: 'FinDesign Studio',
    duration: '3 months',
    rating: 5,
    results: ['200+ components', '50% faster design', 'Used by 20+ apps'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 22,
    title: 'SEO Growth Strategy',
    slug: 'seo-growth-strategy',
    category: 'Digital Marketing',
    description: 'Complete SEO transformation including technical audit, content strategy, link building, and local SEO optimization.',
    image: 'https://images.pexels.com/photos/3183170/pexels-photo-3183170.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Ahrefs', 'Screaming Frog', 'Google Search Console', 'Schema', 'Core Web Vitals'],
    client: 'GrowthHQ Agency',
    duration: '8 months',
    rating: 5,
    results: ['300% organic traffic', '1st page for 150 keywords', '80% more leads'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 23,
    title: 'Supply Chain Platform',
    slug: 'supply-chain-platform',
    category: 'Enterprise',
    description: 'End-to-end supply chain management with vendor portals, inventory optimization, and predictive analytics.',
    image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', '.NET', 'Azure', 'Power BI', 'Machine Learning'],
    client: 'LogiFlow Systems',
    duration: '10 months',
    rating: 5,
    results: ['25% inventory reduction', '40% faster fulfillment', '$2M annual savings'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 24,
    title: 'Crypto Trading Platform',
    slug: 'crypto-trading-platform',
    category: 'Web Development',
    description: 'Secure cryptocurrency exchange with real-time trading, portfolio management, and advanced charting tools.',
    image: 'https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Go', 'PostgreSQL', 'WebSocket', 'Blockchain'],
    client: 'CryptoVault Exchange',
    duration: '9 months',
    rating: 5,
    results: ['$100M+ daily volume', '50K+ traders', 'Zero security breaches'],
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
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
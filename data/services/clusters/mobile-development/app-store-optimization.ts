import { ServiceData } from '@/components/services/sections';

export const appStoreOptimizationData: ServiceData = {
  // Basic Info
  slug: 'app-store-optimization',
  name: 'App Store Optimization Services',
  tagline: 'Get Found, Get Downloaded, Grow Your App',
  description: 'Expert App Store Optimization (ASO) services for iOS App Store and Google Play. We optimize your app\'s visibility, drive organic downloads, and maximize your app marketing ROI.',
  category: 'Mobile Development',

  // Hero Section
  hero: {
    headline: 'App Store Optimization',
    subheadline: 'Turn Searches Into Downloads',
    description: 'Rank higher in app store searches and convert more visitors into users. Our data-driven ASO strategies optimize every element of your app listing to maximize organic discovery and downloads across both iOS App Store and Google Play.',
    keyFeatures: [
      'Keyword research & optimization',
      'Conversion rate optimization',
      'A/B testing at scale',
      'Competitor analysis',
      'Localization strategies',
    ],
    badges: ['500+ Apps Optimized', '3x Avg Download Increase', 'Certified ASO Experts'],
  },

  // Pain Points
  painPoints: [
    {
      icon: 'Search',
      title: 'App Invisibility',
      description: 'Your app is lost among millions. Without ASO, users can\'t find you even when searching for exactly what you offer.',
      stat: '70%',
      statLabel: 'of downloads from search',
    },
    {
      icon: 'TrendingDown',
      title: 'Low Conversion Rates',
      description: 'Users visit your listing but don\'t download. Your screenshots, description, and ratings aren\'t convincing enough.',
      stat: '2-5%',
      statLabel: 'typical conversion rate',
    },
    {
      icon: 'DollarSign',
      title: 'High Acquisition Costs',
      description: 'Relying on paid ads is expensive and unsustainable. Organic downloads should be your primary growth channel.',
      stat: '$3-5',
      statLabel: 'avg paid CPI',
    },
    {
      icon: 'Target',
      title: 'Wrong Keywords',
      description: 'Targeting keywords with too much competition or too little volume wastes your potential. Keyword strategy matters.',
      stat: '60%',
      statLabel: 'of apps target wrong keywords',
    },
    {
      icon: 'Star',
      title: 'Rating Problems',
      description: 'Low ratings and negative reviews tank your visibility and conversion. Managing app reputation is critical.',
      stat: '79%',
      statLabel: 'check ratings before download',
    },
    {
      icon: 'Globe',
      title: 'Limited Global Reach',
      description: 'Your app isn\'t optimized for international markets. Localization can unlock massive untapped audiences.',
      stat: '50%',
      statLabel: 'of revenue from localization',
    },
  ],

  // Solutions/Features
  solutions: [
    {
      icon: 'Search',
      title: 'Keyword Research & Optimization',
      description: 'Discover high-value keywords with optimal search volume and competition. Strategic placement in title, subtitle, and metadata.',
      highlights: [
        'Competitive analysis',
        'Long-tail keywords',
        'Search volume data',
        'Ranking tracking',
      ],
    },
    {
      icon: 'Image',
      title: 'Creative Optimization',
      description: 'Convert more visitors with compelling screenshots, app preview videos, and promotional graphics that showcase your app\'s value.',
      highlights: [
        'Screenshot optimization',
        'App preview videos',
        'Icon testing',
        'Feature graphics',
      ],
    },
    {
      icon: 'FileText',
      title: 'Description Optimization',
      description: 'Craft compelling app descriptions that communicate value, include keywords naturally, and drive downloads.',
      highlights: [
        'Benefit-focused copy',
        'Keyword integration',
        'Feature highlighting',
        'Social proof',
      ],
    },
    {
      icon: 'Star',
      title: 'Ratings & Reviews Management',
      description: 'Improve your app\'s ratings and manage reviews strategically. Turn feedback into improvements and critics into fans.',
      highlights: [
        'Rating improvement',
        'Review responses',
        'Prompt optimization',
        'Sentiment analysis',
      ],
    },
    {
      icon: 'BarChart',
      title: 'A/B Testing',
      description: 'Data-driven optimization through rigorous testing. Test icons, screenshots, descriptions, and more to find winners.',
      highlights: [
        'Store listing experiments',
        'Statistical significance',
        'Continuous testing',
        'Performance tracking',
      ],
    },
    {
      icon: 'Globe',
      title: 'Localization Strategy',
      description: 'Expand globally with localized app listings. Translate and culturally adapt your presence for international markets.',
      highlights: [
        'Market prioritization',
        'Cultural adaptation',
        'Local keywords',
        'Native translations',
      ],
    },
  ],

  // Process Steps
  process: {
    steps: [
      {
        icon: 'Search',
        title: 'ASO Audit',
        description: 'Comprehensive analysis of your current app store presence, keyword rankings, and competitive landscape.',
        duration: '1 week',
        deliverables: ['Current state analysis', 'Competitor benchmarks', 'Opportunity assessment'],
      },
      {
        icon: 'Target',
        title: 'Keyword Strategy',
        description: 'In-depth keyword research to identify high-value targets. Mapping keywords to features and user intent.',
        duration: '1 week',
        deliverables: ['Keyword matrix', 'Priority targets', 'Placement strategy'],
      },
      {
        icon: 'FileText',
        title: 'Listing Optimization',
        description: 'Optimize all text elements - title, subtitle, description, and metadata for keywords and conversion.',
        duration: '1-2 weeks',
        deliverables: ['Optimized copy', 'A/B test plan', 'Implementation'],
      },
      {
        icon: 'Image',
        title: 'Creative Development',
        description: 'Design and test screenshots, app preview videos, and promotional graphics that convert.',
        duration: '2-3 weeks',
        deliverables: ['New screenshots', 'Preview video', 'A/B variants'],
      },
      {
        icon: 'BarChart',
        title: 'Testing & Iteration',
        description: 'Launch A/B tests, analyze results, and continuously optimize based on data.',
        duration: 'Ongoing',
        deliverables: ['Test results', 'Performance reports', 'Optimizations'],
      },
      {
        icon: 'Globe',
        title: 'Expansion & Growth',
        description: 'Scale success with localization, new market entry, and seasonal optimization strategies.',
        duration: 'Ongoing',
        deliverables: ['Localized listings', 'Market expansion', 'Growth playbook'],
      },
    ],
    totalDuration: '8-12 weeks initial, then ongoing',
  },

  // Benefits
  benefits: [
    {
      icon: 'TrendingUp',
      title: 'More Organic Downloads',
      description: 'Rank higher in app store search results and get discovered by users actively looking for apps like yours.',
      stat: '3',
      statSuffix: 'x',
      statLabel: 'Average Download Increase',
    },
    {
      icon: 'DollarSign',
      title: 'Lower Acquisition Cost',
      description: 'Organic downloads cost nothing. ASO reduces reliance on expensive paid advertising.',
      stat: '60',
      statSuffix: '%',
      statLabel: 'Lower CPI',
    },
    {
      icon: 'Target',
      title: 'Higher Quality Users',
      description: 'Users who find you through search have higher intent. They stay longer and spend more.',
      stat: '25',
      statSuffix: '%',
      statLabel: 'Better Retention',
    },
    {
      icon: 'RefreshCw',
      title: 'Better Conversion',
      description: 'Optimized listings convert more visitors into downloads. Every store visit counts.',
      stat: '2',
      statSuffix: 'x',
      statLabel: 'Conversion Rate Improvement',
    },
    {
      icon: 'Globe',
      title: 'Global Reach',
      description: 'Localization unlocks international markets. Reach users in their native language.',
      stat: '175',
      statSuffix: '+',
      statLabel: 'Countries Accessible',
    },
    {
      icon: 'Star',
      title: 'Better Ratings',
      description: 'Rating management strategies improve your average rating and visibility.',
      stat: '0.5',
      statSuffix: '+',
      statLabel: 'Rating Point Improvement',
    },
  ],

  // Tech Stack
  techStack: [
    {
      name: 'ASO Research Tools',
      description: 'Keyword and market research',
      technologies: [
        { name: 'App Annie / data.ai', icon: 'appannie', category: 'Intelligence', proficiency: 'expert' },
        { name: 'Sensor Tower', icon: 'sensortower', category: 'Intelligence', proficiency: 'expert' },
        { name: 'Mobile Action', icon: 'mobileaction', category: 'ASO', proficiency: 'expert' },
        { name: 'AppTweak', icon: 'apptweak', category: 'ASO', proficiency: 'advanced' },
      ],
    },
    {
      name: 'Store Platforms',
      description: 'App store management',
      technologies: [
        { name: 'App Store Connect', icon: 'apple', category: 'iOS', proficiency: 'expert' },
        { name: 'Google Play Console', icon: 'google', category: 'Android', proficiency: 'expert' },
        { name: 'Store Listing Experiments', icon: 'ab', category: 'Testing', proficiency: 'expert' },
        { name: 'Custom Product Pages', icon: 'pages', category: 'iOS', proficiency: 'advanced' },
      ],
    },
    {
      name: 'Analytics & Tracking',
      description: 'Performance measurement',
      technologies: [
        { name: 'App Store Analytics', icon: 'analytics', category: 'Analytics', proficiency: 'expert' },
        { name: 'Firebase Analytics', icon: 'firebase', category: 'Analytics', proficiency: 'expert' },
        { name: 'AppsFlyer', icon: 'appsflyer', category: 'Attribution', proficiency: 'advanced' },
        { name: 'Adjust', icon: 'adjust', category: 'Attribution', proficiency: 'advanced' },
      ],
    },
    {
      name: 'Creative Tools',
      description: 'Visual asset creation',
      technologies: [
        { name: 'Figma', icon: 'figma', category: 'Design', proficiency: 'expert' },
        { name: 'After Effects', icon: 'aftereffects', category: 'Video', proficiency: 'advanced' },
        { name: 'SplitMetrics', icon: 'splitmetrics', category: 'Testing', proficiency: 'advanced' },
        { name: 'StoreMaven', icon: 'storemaven', category: 'Testing', proficiency: 'advanced' },
      ],
    },
  ],

  // Portfolio
  portfolio: [
    {
      title: 'Fitness App ASO Transformation',
      client: 'FitTrack Pro',
      industry: 'Health & Fitness',
      description: 'Complete ASO overhaul for a fitness tracking app. Keyword optimization, screenshot redesign, and localization to 15 markets.',
      challenge: 'The app was invisible in search despite having great features. Organic downloads were minimal.',
      solution: 'Comprehensive ASO strategy with new keyword targeting, redesigned screenshots, and localization.',
      results: ['400% download increase', 'Top 20 in category', '15 localized markets'],
      metrics: [
        { label: 'Download Growth', value: '400%' },
        { label: 'Category Rank', value: 'Top 20' },
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['Fitness', 'ASO', 'Localization', 'Keywords', 'Screenshots'],
      testimonial: {
        quote: 'Our organic downloads increased 4x in three months. ASO transformed our growth trajectory.',
        author: 'David Park',
        role: 'Marketing Director',
      },
    },
    {
      title: 'Productivity App Conversion',
      client: 'TaskFlow',
      industry: 'Productivity',
      description: 'Conversion rate optimization for a project management app. A/B tested screenshots and descriptions to maximize downloads.',
      challenge: 'Good search visibility but poor conversion. Users viewed the listing but didn\'t download.',
      solution: 'Extensive A/B testing of screenshots, icon, and description. Identified winning combinations.',
      results: ['150% conversion increase', '2.5x more downloads', '30+ tests conducted'],
      metrics: [
        { label: 'Conversion Lift', value: '150%' },
        { label: 'Tests Run', value: '30+' },
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      tags: ['Productivity', 'A/B Testing', 'Conversion', 'Screenshots', 'Description'],
      testimonial: {
        quote: 'The A/B testing process was eye-opening. Small changes made a huge difference in downloads.',
        author: 'Lisa Chen',
        role: 'Product Manager',
      },
    },
    {
      title: 'Gaming App Launch ASO',
      client: 'PuzzleQuest',
      industry: 'Gaming',
      description: 'Launch ASO strategy for a new puzzle game. Pre-launch optimization and soft launch testing.',
      challenge: 'New game launching into a competitive category. Needed to make a splash from day one.',
      solution: 'Pre-launch keyword research, optimized assets for launch, and soft launch in test markets.',
      results: ['Featured by Apple', '500K launch week downloads', 'Top 10 in Puzzle category'],
      metrics: [
        { label: 'Launch Week', value: '500K' },
        { label: 'Category Rank', value: 'Top 10' },
      ],
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
      tags: ['Gaming', 'Launch', 'Featured', 'Keywords', 'Creative'],
      testimonial: {
        quote: 'The pre-launch ASO preparation was crucial. Being featured on launch day exceeded all expectations.',
        author: 'Mark Johnson',
        role: 'CEO',
      },
    },
    {
      title: 'E-commerce App Global Expansion',
      client: 'ShopWorld',
      industry: 'E-commerce',
      description: 'ASO-driven international expansion for a shopping app. Localized listings for 25 markets with culturally adapted creatives.',
      challenge: 'Successful in home market but struggling to gain traction in international markets despite product availability.',
      solution: 'Market-by-market ASO strategy with native translations, localized keywords, and culturally relevant screenshots.',
      results: ['300% international growth', '25 markets', 'Top 50 Shopping in 15 countries'],
      metrics: [
        { label: 'International Growth', value: '300%' },
        { label: 'Markets', value: '25' },
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Localization', 'International', 'ASO', 'Growth'],
      testimonial: {
        quote: 'The localization strategy unlocked markets we thought were inaccessible. ROI on ASO investment was incredible.',
        author: 'Rachel Kim',
        role: 'Head of Growth',
      },
    },
  ],

  // Pricing
  pricing: {
    plans: [
      {
        name: 'ASO Audit',
        description: 'Comprehensive ASO analysis',
        price: '$2,500',
        priceNote: 'One-time',
        features: [
          { name: 'Complete store presence audit', included: true },
          { name: 'Keyword opportunity analysis', included: true },
          { name: 'Competitor benchmarking', included: true },
          { name: 'Actionable recommendations', included: true },
          { name: 'Priority keyword list', included: true },
          { name: 'Implementation', included: false },
          { name: 'Ongoing optimization', included: false },
        ],
        ctaText: 'Get Audit',
      },
      {
        name: 'ASO Launch',
        description: 'Full ASO implementation',
        price: '$5,000',
        priceNote: 'Starting price',
        highlighted: true,
        badge: 'Most Popular',
        features: [
          { name: 'Complete ASO audit', included: true },
          { name: 'Keyword optimization', included: true },
          { name: 'Description rewrite', included: true },
          { name: 'Screenshot optimization', included: true },
          { name: 'A/B testing setup', included: true },
          { name: '3 months tracking', included: true },
          { name: 'Monthly reporting', included: true },
        ],
        ctaText: 'Start ASO',
      },
      {
        name: 'ASO Growth',
        description: 'Ongoing ASO management',
        price: '$3,000/mo',
        priceNote: 'Monthly retainer',
        features: [
          { name: 'Continuous keyword optimization', included: true },
          { name: 'Ongoing A/B testing', included: true },
          { name: 'Creative iteration', included: true },
          { name: 'Competitor monitoring', included: true },
          { name: 'Rating management', included: true },
          { name: 'Localization support', included: true },
          { name: 'Weekly reporting', included: true },
        ],
        ctaText: 'Start Growth',
      },
    ],
    customNote: 'Enterprise and portfolio ASO packages available for apps with multiple products or high-volume requirements.',
  },

  // Testimonials
  testimonials: [
    {
      quote: 'ASO was the highest ROI marketing investment we made. Organic downloads now drive 80% of our growth.',
      author: 'David Park',
      role: 'Marketing Director',
      company: 'FitTrack Pro',
      rating: 5,
      location: 'San Francisco, CA',
    },
    {
      quote: 'The data-driven approach to A/B testing was invaluable. We now know exactly what resonates with users.',
      author: 'Lisa Chen',
      role: 'Product Manager',
      company: 'TaskFlow',
      rating: 5,
      location: 'Seattle, WA',
    },
    {
      quote: 'Getting featured by Apple on launch day was incredible. The pre-launch ASO preparation made it possible.',
      author: 'Mark Johnson',
      role: 'CEO',
      company: 'PuzzleQuest',
      rating: 5,
      location: 'Los Angeles, CA',
    },
  ],

  // FAQs
  faqs: [
    {
      question: 'How long does ASO take to show results?',
      answer: 'Initial improvements can appear within 2-4 weeks of implementation. Significant ranking improvements typically take 2-3 months of consistent optimization. ASO is an ongoing process that compounds over time.',
      category: 'Timeline',
    },
    {
      question: 'Is ASO different for iOS and Android?',
      answer: 'Yes. iOS has a 30-character title and 100 keyword characters. Android allows longer descriptions that are indexed. We optimize for both platforms differently to maximize results on each.',
      category: 'Technical',
    },
    {
      question: 'How do you handle app ratings and reviews?',
      answer: 'We optimize in-app rating prompts for timing and targeting, develop review response strategies, and identify actionable feedback. We never use fake reviews or manipulative tactics.',
      category: 'Ratings',
    },
    {
      question: 'What\'s the ROI of ASO?',
      answer: 'ASO typically delivers 200-500% ROI by reducing paid acquisition costs and increasing organic downloads. A $5,000 ASO investment often generates hundreds of thousands in equivalent paid media value.',
      category: 'Investment',
    },
    {
      question: 'Should we do ASO before or after launching?',
      answer: 'Both. Pre-launch ASO ensures you\'re discoverable from day one. Post-launch ASO iterates based on real data. We recommend starting ASO at least 4 weeks before launch.',
      category: 'Strategy',
    },
    {
      question: 'How do you track ASO performance?',
      answer: 'We track keyword rankings, organic download volume, conversion rates, and category rankings. Regular reports show progress and identify new opportunities.',
      category: 'Measurement',
    },
    {
      question: 'Does ASO work for all app categories?',
      answer: 'Yes, but competition varies. Some categories are highly competitive (games, social) while others (niche B2B tools) have easier opportunities. We adapt strategy to your competitive landscape.',
      category: 'Strategy',
    },
    {
      question: 'Can ASO help get our app featured?',
      answer: 'While featuring decisions are made by Apple/Google, ASO best practices align with featuring criteria. Well-optimized apps with good ratings and quality are more likely to be featured.',
      category: 'Features',
    },
  ],

  // Related Services
  relatedServices: [
    {
      name: 'iOS Development',
      slug: 'ios-development',
      description: 'Native iOS apps',
      icon: 'Smartphone',
    },
    {
      name: 'Android Development',
      slug: 'android-development',
      description: 'Native Android apps',
      icon: 'Smartphone',
    },
    {
      name: 'Mobile UI/UX Design',
      slug: 'mobile-ui-ux-design',
      description: 'App design services',
      icon: 'Palette',
    },
    {
      name: 'Digital Marketing',
      slug: 'digital-marketing',
      description: 'Comprehensive marketing',
      icon: 'TrendingUp',
    },
  ],

  // SEO
  seo: {
    title: 'App Store Optimization Services | ASO for iOS & Android',
    description: 'Expert App Store Optimization (ASO) services. Increase app visibility, downloads, and conversion rates. Keyword optimization, A/B testing, and localization.',
    keywords: [
      'app store optimization',
      'aso services',
      'app store marketing',
      'google play optimization',
      'ios app store optimization',
      'app keyword optimization',
      'app download optimization',
      'aso agency',
    ],
  },
};

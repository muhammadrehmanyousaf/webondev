// Products built by Web On Dev. Content is based on the live products
// (weddingwala.pk, schedura.ai). Factual/feature-based — no fabricated metrics.

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductSection {
  heading: string;
  body: string;
}

export interface PricingTier {
  name: string;
  price: string;
  blurb: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  liveUrl: string;
  liveLabel: string; // e.g. "weddingwala.pk"
  screenshot: string; // real screenshot of the live product (1440x900)
  comingSoon: boolean;
  // Product-specific accent (drawn from each product's own world), used for the
  // homepage banners, badges, and glows so each product keeps its own personality
  // inside the shared dark brand canvas.
  theme: {
    eyebrow: string; // tailwind text color for the category eyebrow
    dot: string; // tailwind bg for the status pulse dot
    pill: string; // tailwind classes for the "Coming soon" pill
    glow: string; // CSS color for the radial accent glow
    barText: string; // tailwind text color for the top-bar link
  };
  category: string; // short label e.g. "Wedding Marketplace"
  appCategory: string; // schema applicationCategory
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  overview: string;
  highlights: { value: string; label: string }[];
  features: ProductFeature[];
  audience: string[];
  techStack: string[];
  sections: ProductSection[];
  pricing?: PricingTier[];
}

export const products: Product[] = [
  {
    slug: 'schedura',
    name: 'Schedura',
    tagline: 'Run every social channel on autopilot.',
    liveUrl: 'https://schedura.ai',
    liveLabel: 'schedura.ai',
    screenshot: '/images/products/schedura.jpg',
    comingSoon: true,
    theme: {
      eyebrow: 'text-indigo-300',
      dot: 'bg-indigo-400',
      pill: 'bg-indigo-500/15 text-indigo-200 border-indigo-400/30',
      glow: 'rgba(99,102,241,0.20)',
      barText: 'text-indigo-200 hover:text-indigo-100',
    },
    category: 'AI Social Media SaaS',
    appCategory: 'BusinessApplication',
    heroDescription:
      'Schedura is an AI social media scheduling and automation platform that plans, creates, publishes, and optimizes content across 11 networks — powered by autonomous AI agents.',
    metaTitle: 'Schedura — AI Social Media Scheduling & Automation (11 Networks)',
    metaDescription:
      'Schedura is an AI social media management SaaS built by Web On Dev — schedule, automate, and optimize content across 11 networks with autonomous AI agents.',
    keywords: [
      'Schedura',
      'AI social media scheduling',
      'social media automation tool',
      'social media management SaaS',
      'AI social media agents',
      'schedule posts across networks',
    ],
    overview:
      'Schedura replaces a stack of disconnected social tools with one AI-native platform. Teams write a post once and Schedura adapts it to every network, schedules it for peak engagement, manages replies from a single inbox, and uses autonomous AI agents to keep content flowing — so a solo creator or a small team can run the output of a much larger one.',
    highlights: [
      { value: '11', label: 'Social networks' },
      { value: '6', label: 'Autonomous AI agents' },
      { value: '13+', label: 'AI content tools' },
      { value: '365', label: 'Posts per autopilot campaign' },
    ],
    features: [
      { title: 'Smart Composer', description: 'Write once and auto-adapt the post to all 11 networks with live, per-platform previews.' },
      { title: 'Visual Calendar', description: 'Drag-and-drop scheduling that targets each channel’s peak engagement windows.' },
      { title: 'Autonomous AI Agents', description: 'Six specialized agents handle content creation, scheduling, ads, engagement, insights, and notifications.' },
      { title: 'Unified Inbox', description: 'Manage DMs, comments, and mentions across every connected platform from one place.' },
      { title: 'Real-Time Analytics', description: 'Live dashboards that update as posts publish, so you can act on performance immediately.' },
      { title: 'Self-Optimizing Ads', description: 'Automatic budget allocation and creative optimization across Meta, Instagram, and TikTok.' },
      { title: 'Autopilot Campaigns', description: 'Continuous AI content generation and publishing — up to 365 posts per campaign.' },
      { title: '13+ AI Tools', description: 'Caption writing, hashtag suggestions, translation, repurposing, and more, built in.' },
    ],
    audience: [
      'Solo creators and content creators',
      'Small to mid-sized social media teams',
      'Marketing agencies managing multiple brands',
      'Social media managers and content leads',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'AI / LLM agents', 'Tailwind CSS', 'Vercel'],
    sections: [
      {
        heading: 'The problem Schedura solves',
        body: 'Managing a brand across many networks usually means juggling separate schedulers, design tools, inboxes, and ad managers — plus the constant pressure to produce content. Schedura collapses that workflow into one AI-native platform so the busywork runs itself and teams can focus on strategy and creative direction.',
      },
      {
        heading: 'Supported networks',
        body: 'Instagram, X (Twitter), TikTok, YouTube, LinkedIn, Facebook, Pinterest, Threads, Bluesky, Mastodon, and Reddit — eleven networks managed from a single dashboard.',
      },
      {
        heading: 'Built by Web On Dev',
        body: 'Web On Dev designed and engineered Schedura end-to-end — product design, the AI agent system, multi-network integrations, billing, and a fast Next.js front end. It’s an example of the kind of AI-native SaaS we build for our own portfolio and for clients.',
      },
    ],
    pricing: [
      { name: 'Free', price: '$0/mo', blurb: '2 channels and core scheduling to get started.' },
      { name: 'Pro', price: '$19/mo', blurb: 'Up to 10 channels with AI agents and automation.' },
      { name: 'Max', price: '$49/mo', blurb: 'Unlimited channels and priority features for teams.' },
    ],
  },
  {
    slug: 'wedding-wala',
    name: 'Wedding Wala',
    tagline: 'Where every love story finds its perfect setting.',
    liveUrl: 'https://weddingwala.pk',
    liveLabel: 'weddingwala.pk',
    screenshot: '/images/products/wedding-wala.jpg',
    comingSoon: true,
    theme: {
      eyebrow: 'text-rose-300',
      dot: 'bg-rose-400',
      pill: 'bg-rose-500/15 text-rose-200 border-rose-400/30',
      glow: 'rgba(244,63,94,0.18)',
      barText: 'text-rose-200 hover:text-rose-100',
    },
    category: 'Wedding Vendor Marketplace',
    appCategory: 'BusinessApplication',
    heroDescription:
      'Wedding Wala is a wedding vendor marketplace for Pakistan that helps couples discover, compare, and book vetted vendors — from photographers and venues to makeup artists and decorators — all in one place.',
    metaTitle: 'Wedding Wala — Pakistan Wedding Vendor Marketplace',
    metaDescription:
      'Wedding Wala is a Pakistani wedding vendor marketplace built by Web On Dev — discover, compare, and book vetted photographers, venues, decorators and more across cities.',
    keywords: [
      'Wedding Wala',
      'Pakistan wedding platform',
      'wedding vendor marketplace',
      'book wedding vendors Pakistan',
      'shaadi platform',
      'wedding planning Pakistan',
    ],
    overview:
      'Wedding Wala brings Pakistan’s fragmented wedding industry into a single, modern marketplace. Couples can search vendors by city, budget, and style, compare verified profiles and reviews, check live availability, and book with a secure deposit — backed by free planning tools that keep the whole wedding organized in one dashboard.',
    highlights: [
      { value: '20+', label: 'Vendor categories' },
      { value: 'Nationwide', label: 'Across Pakistan' },
      { value: 'Verified', label: 'Vendor profiles & reviews' },
      { value: 'Secure', label: 'Deposit-based booking' },
    ],
    features: [
      { title: 'Vendor Discovery', description: 'Search and filter vendors by city, budget, style, and category to shortlist the right fit fast.' },
      { title: 'Verified Profiles & Reviews', description: 'Vetted vendor profiles with ratings and real couple reviews for confident decisions.' },
      { title: 'Live Availability', description: 'Vendor availability calendars so couples can see open dates before they reach out.' },
      { title: 'Secure Booking', description: 'Deposit-based booking with transparent, clearly stated cancellation policies.' },
      { title: 'Planning Dashboard', description: 'A centralized hub to track bookings, payments, and vendor communications in one place.' },
      { title: 'Free Planning Tools', description: 'Checklist, budget calculator, guest-list manager, and event timeline — included.' },
    ],
    audience: [
      'Couples planning weddings across Pakistan',
      'Families coordinating multi-event shaadi functions',
      'Wedding vendors seeking qualified bookings',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Cloudinary', 'Tailwind CSS'],
    sections: [
      {
        heading: 'The problem Wedding Wala solves',
        body: 'Planning a wedding in Pakistan typically means chasing vendors across Instagram, WhatsApp, and word-of-mouth — with no easy way to compare options, check availability, or book with confidence. Wedding Wala centralizes discovery, trust signals, and booking so couples can plan calmly and vendors can reach the right couples.',
      },
      {
        heading: 'Vendor categories',
        body: 'Photographers, venues, decorators, makeup artists, caterers, henna artists, bridal wear, florists, sound systems, dhol players, qawwali performers, choreographers, event hosts, live streaming, wedding cakes, stationery, car rentals, and more — 20+ categories in total.',
      },
      {
        heading: 'Built by Web On Dev',
        body: 'Web On Dev designed and built Wedding Wala end-to-end — the marketplace platform, vendor onboarding, search and booking flows, media handling, and a fast, mobile-first Next.js experience tailored to a Pakistani audience.',
      },
    ],
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getAllProductSlugs = (): string[] => products.map((p) => p.slug);

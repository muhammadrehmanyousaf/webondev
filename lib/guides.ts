import fs from 'fs';
import path from 'path';

export type GuideCategory = 'Comparison' | 'Guide' | 'Hire Developers' | 'Services' | 'Local';

export interface GuideMeta {
  slug: string;
  title: string;
  description: string;
  category: GuideCategory;
  date: string; // ISO date — adjust per real publish date
  readTime: string;
  keywords: string[];
}

// Typed registry (single source of truth for guide metadata). The Markdown body
// lives in content/guides/<slug>.md. Frontmatter in those files is ignored at
// render time — this registry drives titles, meta, schema, and listing order.
export const GUIDES: GuideMeta[] = [
  {
    slug: 'software-development-company-in-lahore',
    title: 'Software Development Company in Lahore',
    description:
      'Web On Dev is a software development company in Lahore, Pakistan (est. 2015). Custom web, mobile & SaaS builds with US/UK/UAE timezone overlap. Get a free quote.',
    category: 'Local',
    date: '2026-06-24',
    readTime: '10 min read',
    keywords: ['software development company in Lahore', 'software house in Lahore', 'web development company in Lahore', 'best software development company in Pakistan'],
  },
  {
    slug: 'hire-nextjs-developers',
    title: 'Hire Next.js Developers',
    description:
      'Hire dedicated Next.js developers from Web On Dev — App Router, RSC, SSR/ISR and Core Web Vitals expertise. Transparent engagement models and typical rates.',
    category: 'Hire Developers',
    date: '2026-06-24',
    readTime: '9 min read',
    keywords: ['hire Next.js developers', 'hire dedicated Next.js developers', 'Next.js development team'],
  },
  {
    slug: 'hire-react-developers',
    title: 'Hire React Developers',
    description:
      'Hire experienced React developers from Web On Dev — hooks, RSC, TypeScript and performance expertise. Flexible engagement models and transparent typical rates.',
    category: 'Hire Developers',
    date: '2026-06-24',
    readTime: '9 min read',
    keywords: ['hire React developers', 'hire dedicated React.js developers', 'React development team'],
  },
  {
    slug: 'nextjs-development-agency',
    title: 'Next.js Development Agency',
    description:
      'Web On Dev is a Next.js development agency building fast, SEO-friendly apps with the App Router, React Server Components, ISR and performance engineering.',
    category: 'Services',
    date: '2026-06-24',
    readTime: '11 min read',
    keywords: ['Next.js development agency', 'Next.js development services', 'Next.js development company'],
  },
  {
    slug: 'shopify-development-pakistan-lahore',
    title: 'Shopify Development Agency in Pakistan',
    description:
      'Shopify development from Web On Dev in Lahore, Pakistan — custom themes, migrations, Shopify Plus and headless Shopify with Next.js. Timezone overlap with US/UK/UAE.',
    category: 'Services',
    date: '2026-06-24',
    readTime: '8 min read',
    keywords: ['Shopify development Pakistan', 'Shopify developer Lahore', 'Shopify development agency Pakistan'],
  },
  {
    slug: 'nextjs-vs-react',
    title: 'Next.js vs React: Differences & When to Use Each (2026)',
    description:
      'Next.js vs React explained accurately for 2026: React is a library, Next.js a framework on top. Compare rendering, routing, SEO, RSC, and when to use each.',
    category: 'Comparison',
    date: '2026-06-24',
    readTime: '14 min read',
    keywords: ['Next.js vs React', 'difference between Next.js and React', 'when to use Next.js vs React'],
  },
  {
    slug: 'react-native-vs-flutter',
    title: 'React Native vs Flutter: 2026 Comparison',
    description:
      'React Native vs Flutter in 2026: compare language, performance, UI, ecosystem, hiring and cost — with a decision framework for choosing the right one.',
    category: 'Comparison',
    date: '2026-06-24',
    readTime: '12 min read',
    keywords: ['React Native vs Flutter', 'Flutter vs React Native 2026', 'which is better for mobile apps'],
  },
  {
    slug: 'app-development-cost-2026',
    title: 'How Much Does It Cost to Build an App in 2026?',
    description:
      'App development cost in 2026 by complexity, features and region — with an itemized MVP example and cost-saving strategies. Typical, source-backed ranges.',
    category: 'Guide',
    date: '2026-06-24',
    readTime: '11 min read',
    keywords: ['how much does it cost to build an app', 'app development cost 2026', 'mobile app development cost'],
  },
  {
    slug: 'how-to-hire-a-software-development-company',
    title: 'How to Hire a Software Development Company',
    description:
      'A practical guide to hiring a software development company: the step-by-step process, how to evaluate, pricing models, red flags, and questions to ask.',
    category: 'Guide',
    date: '2026-06-24',
    readTime: '12 min read',
    keywords: ['how to hire a software development company', 'how to choose a software development company', 'questions to ask a software agency'],
  },
  {
    slug: 'shopify-vs-woocommerce',
    title: 'Shopify vs WooCommerce: Which Is Better in 2026?',
    description:
      'Shopify vs WooCommerce compared for 2026: cost, ease of use, customization, scalability, SEO and ownership — plus a decision framework for choosing.',
    category: 'Comparison',
    date: '2026-06-24',
    readTime: '13 min read',
    keywords: ['Shopify vs WooCommerce', 'WooCommerce vs Shopify 2026', 'which is better for ecommerce'],
  },
  {
    slug: 'mvp-development-cost',
    title: 'MVP Development Cost: How Much to Build an MVP (2026)',
    description:
      'How much does an MVP cost in 2026? Cost by complexity, what drives it, a typical timeline, an itemized example budget, and ways to reduce MVP cost.',
    category: 'Guide',
    date: '2026-06-24',
    readTime: '11 min read',
    keywords: ['MVP development cost', 'how much does an MVP cost', 'how to build an MVP', 'minimum viable product cost'],
  },
  {
    slug: 'hire-flutter-developers',
    title: 'Hire Flutter Developers',
    description:
      'Hire dedicated Flutter developers from Web On Dev — Dart, one codebase for iOS, Android & web, and performance expertise. Transparent models and typical rates.',
    category: 'Hire Developers',
    date: '2026-06-24',
    readTime: '9 min read',
    keywords: ['hire Flutter developers', 'hire dedicated Flutter developers', 'Flutter app development team'],
  },
  {
    slug: 'staff-augmentation-vs-outsourcing',
    title: 'Staff Augmentation vs Outsourcing: Which to Choose',
    description:
      'Staff augmentation vs project outsourcing vs managed services — compare control, cost, and risk, with a decision framework for choosing the right model.',
    category: 'Comparison',
    date: '2026-06-24',
    readTime: '12 min read',
    keywords: ['staff augmentation vs outsourcing', 'staff augmentation vs managed services', 'IT staff augmentation vs project outsourcing'],
  },
  {
    slug: 'how-to-build-a-saas',
    title: 'How to Build a SaaS Application (2026 Guide)',
    description:
      'How to build a SaaS application in 2026: the development process, tech stack, multi-tenant architecture, key features, and typical cost and timeline ranges.',
    category: 'Guide',
    date: '2026-06-24',
    readTime: '13 min read',
    keywords: ['how to build a saas', 'how to build a saas application', 'saas development guide', 'saas development process'],
  },
  {
    slug: 'hire-react-native-developers',
    title: 'Hire React Native Developers',
    description:
      'Hire dedicated React Native developers from Web On Dev — one codebase for iOS & Android, New Architecture and performance expertise. Transparent rates and models.',
    category: 'Hire Developers',
    date: '2026-06-24',
    readTime: '9 min read',
    keywords: ['hire React Native developers', 'hire dedicated React Native developers', 'React Native app development team'],
  },
  {
    slug: 'web-application-development-cost',
    title: 'Web Application Development Cost (2026)',
    description:
      'How much does a web application cost in 2026? Cost by complexity, the drivers unique to web apps, an itemized SaaS-dashboard example, and ways to save.',
    category: 'Guide',
    date: '2026-06-24',
    readTime: '12 min read',
    keywords: ['web application development cost', 'how much does a web app cost', 'custom web app development cost'],
  },
  {
    slug: 'wordpress-vs-custom-website',
    title: 'WordPress vs Custom Website: Which to Choose',
    description:
      'WordPress vs a custom website compared: cost, time to launch, customization, performance, security, SEO and ownership — with a decision framework.',
    category: 'Comparison',
    date: '2026-06-24',
    readTime: '12 min read',
    keywords: ['WordPress vs custom website', 'custom website vs WordPress', 'WordPress vs custom development'],
  },
  {
    slug: 'how-to-choose-a-tech-stack',
    title: 'How to Choose a Tech Stack for Your Project',
    description:
      'How to choose a tech stack: the factors that should drive the decision, popular stacks compared, mobile choices, and a decision framework by scenario.',
    category: 'Guide',
    date: '2026-06-24',
    readTime: '12 min read',
    keywords: ['how to choose a tech stack', 'how to choose a technology stack for a startup', 'best tech stack for a web app'],
  },
  {
    slug: 'ecommerce-website-development-cost',
    title: 'eCommerce Website Development Cost (2026)',
    description:
      'How much does an eCommerce website cost in 2026? Cost by platform (Shopify, WooCommerce, custom), build vs running costs, an itemized example, and savings.',
    category: 'Guide',
    date: '2026-06-24',
    readTime: '12 min read',
    keywords: ['ecommerce website development cost', 'how much does an ecommerce website cost', 'online store development cost'],
  },
  {
    slug: 'offshore-software-development',
    title: 'Offshore Software Development: A Practical Guide',
    description:
      'Offshore software development explained: benefits, risks and how to mitigate them, top destinations compared, how to choose a partner, and realistic costs.',
    category: 'Guide',
    date: '2026-06-24',
    readTime: '14 min read',
    keywords: ['offshore software development', 'offshore development services', 'offshore software development company'],
  },
];

const GUIDES_DIR = path.join(process.cwd(), 'content', 'guides');

export function getGuideMeta(slug: string): GuideMeta | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export interface LoadedGuide extends GuideMeta {
  body: string; // Markdown body (frontmatter + trailing JSON-LD stripped)
  faqJsonLd: string | null; // raw JSON-LD object string for FAQPage (if present)
}

export function loadGuide(slug: string): LoadedGuide | null {
  const meta = getGuideMeta(slug);
  if (!meta) return null;

  let raw: string;
  try {
    raw = fs.readFileSync(path.join(GUIDES_DIR, `${slug}.md`), 'utf8');
  } catch {
    return null;
  }

  // Strip YAML frontmatter (--- ... --- at the top)
  raw = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');

  // Extract any embedded <script type="application/ld+json"> ... </script> blocks
  // (the drafts append the FAQPage schema this way). Inject it as real schema and
  // remove it from the rendered Markdown body.
  let faqJsonLd: string | null = null;
  const scriptRe = /<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi;
  const blocks: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = scriptRe.exec(raw)) !== null) {
    blocks.push(m[1].trim());
  }
  if (blocks.length) {
    faqJsonLd = blocks.join('\n');
    raw = raw.replace(scriptRe, '');
  }

  return { ...meta, body: raw.trim(), faqJsonLd };
}

export function getAllGuideSlugs(): string[] {
  return GUIDES.map((g) => g.slug);
}

// Related guides: prefer same category, then fill with others, excluding self.
export function getRelatedGuides(slug: string, limit = 3): GuideMeta[] {
  const current = getGuideMeta(slug);
  if (!current) return GUIDES.slice(0, limit);
  const sameCat = GUIDES.filter((g) => g.slug !== slug && g.category === current.category);
  const others = GUIDES.filter((g) => g.slug !== slug && g.category !== current.category);
  return [...sameCat, ...others].slice(0, limit);
}

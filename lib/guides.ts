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

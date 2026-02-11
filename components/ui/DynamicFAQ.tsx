'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

// =============================================================================
// DYNAMIC FAQ SECTION - Content Variation Engine
// =============================================================================

const strHash = (str: string, seed: number): number => {
  let hash = seed;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

interface FAQItem {
  question: string;
  answer: string;
}

interface DynamicFAQProps {
  location?: string;
  service?: string;
  city?: string;
  state?: string;
  country?: string;
  className?: string;
}

export default function DynamicFAQ({
  location = "globally",
  service = "software development",
  city = "your city",
  state = "your state",
  country = "your country",
  className = ""
}: DynamicFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const fullLocation = [city, state, country].filter(v => v && v !== 'your city' && v !== 'your state' && v !== 'your country' && v !== 'major cities' && v !== 'various states').join(', ');
  const v = fullLocation ? strHash(fullLocation, 71) % 3 : 0;

  const faqSets: FAQItem[][] = [
    [
      {
        question: `How does Web On Dev ensure quality ${service} delivery ${location}?`,
        answer: `We follow a rigorous delivery framework: every project starts with a discovery workshop to align on goals, followed by two-week sprints with demos at the end of each cycle. Automated testing covers unit, integration, and end-to-end scenarios, while code reviews require at least two senior engineer approvals before merge. For clients ${location}, we schedule overlapping working hours and maintain a dedicated Slack channel for real-time collaboration.`,
      },
      {
        question: `What ${service} technologies and frameworks do you specialize in ${location}?`,
        answer: `Our core stack includes Next.js 15, React 19, TypeScript, Node.js, and Python for backend services. For mobile, we use React Native and Flutter. Cloud infrastructure runs on AWS and Vercel with Terraform-managed infrastructure-as-code. We also work with PostgreSQL, Redis, and Elasticsearch for data layers, and integrate CI/CD pipelines using GitHub Actions for every project we deliver ${location}.`,
      },
      {
        question: `Can you provide ${service} services for businesses in ${city}, ${state}?`,
        answer: `Yes—we serve businesses of all sizes in ${city}, ${state}, and the broader ${country} market. Our distributed team model means you get dedicated engineers who align with your time zone, combined with specialist support in areas like performance engineering, security auditing, and UX research. We handle everything from initial architecture through post-launch monitoring.`,
      },
      {
        question: `What is the typical timeline for ${service} projects ${location}?`,
        answer: `Timelines depend on scope: an MVP or marketing site typically ships in 4–8 weeks, a full-featured web application in 8–16 weeks, and enterprise platforms with complex integrations in 16–24 weeks. During our discovery phase, we produce a detailed project roadmap with milestone dates, testing windows, and a buffer for stakeholder feedback rounds.`,
      },
      {
        question: `Do you offer ongoing support and maintenance for ${service} solutions?`,
        answer: `Every project includes 30 days of post-launch support at no extra cost. Beyond that, we offer monthly retainer packages covering bug fixes, dependency updates, security patches, performance monitoring, and feature enhancements. Our support team monitors uptime, error rates, and Core Web Vitals 24/7 and responds to critical issues within one hour.`,
      },
      {
        question: `How do you handle data security and compliance in ${service} projects?`,
        answer: `Security is built into our development lifecycle from day one. We enforce encrypted connections (TLS 1.3), implement role-based access control, and run automated vulnerability scanning in CI. For regulated industries, we maintain compliance playbooks for GDPR, HIPAA, PCI DSS, and SOC 2. Every release undergoes a security review, and we provide audit-ready documentation for your compliance team.`,
      },
      {
        question: `What makes your ${service} approach different from competitors in ${country}?`,
        answer: `Three things set us apart: first, we instrument analytics and conversion tracking from sprint one—so every feature ships with measurable impact. Second, our engineers are full-stack by default, reducing handoff friction. Third, we assign a dedicated technical lead to every project who acts as your in-house CTO, owning architecture decisions and sprint delivery end to end.`,
      },
      {
        question: `Can you integrate ${service} solutions with existing business systems?`,
        answer: `Integration is one of our core strengths. We have production experience connecting with Salesforce, HubSpot, SAP, Stripe, PayPal, Shopify, QuickBooks, and dozens of industry-specific APIs. Our integration approach includes data mapping workshops, sandbox testing, and staged rollouts to minimize disruption to your operations during the transition.`,
      },
      {
        question: `What is your pricing model for ${service} projects ${location}?`,
        answer: `We offer three engagement models: fixed-price for well-defined scopes (from $3,000), time-and-materials for evolving requirements, and dedicated team retainers for ongoing product development. Every proposal includes a transparent breakdown of hours, roles, and deliverables with no hidden fees. Payments are milestone-based, so you only pay as value is delivered.`,
      },
      {
        question: `How do you ensure ${service} solutions are mobile-responsive and accessible?`,
        answer: `Mobile-first design is non-negotiable. Every interface is built with responsive layouts, tested across real device farms (iOS, Android, tablets), and validated against WCAG 2.1 AA standards. We run automated accessibility audits in CI using axe-core, and our QA team performs manual screen-reader testing before each release to ensure full inclusivity.`,
      },
    ],
    [
      {
        question: `What quality assurance process does Web On Dev follow for ${service} ${location}?`,
        answer: `Our QA pipeline has four layers: automated unit tests (90%+ coverage target), integration tests against staging environments, visual regression tests using Chromatic, and manual exploratory testing by a dedicated QA engineer. We also run Lighthouse CI checks on every pull request to catch performance and accessibility regressions before they reach production.`,
      },
      {
        question: `Which technologies power your ${service} solutions ${location}?`,
        answer: `We build primarily with Next.js, React, and TypeScript on the frontend, paired with Node.js or Python backends. For databases, we use PostgreSQL with Prisma ORM and Redis for caching. Infrastructure is deployed on AWS or Vercel depending on requirements, with Docker containers orchestrated via ECS or Kubernetes for enterprise-scale projects serving clients ${location}.`,
      },
      {
        question: `Do you work with businesses of all sizes in ${city}, ${state}?`,
        answer: `Absolutely. In ${city} and across ${state}, we work with solo founders launching MVPs, growing startups scaling to product-market fit, and enterprises modernizing legacy systems. Our flexible engagement models—from fixed-price builds to embedded engineering teams—adapt to your stage, budget, and velocity requirements.`,
      },
      {
        question: `How quickly can you start a ${service} project ${location}?`,
        answer: `For most engagements, we can kick off within 5–10 business days of signing. That includes assembling your project team, running the discovery workshop, and setting up your development environment. Rush timelines are available for urgent projects—we maintain a bench of pre-vetted engineers who can begin within 48 hours when needed.`,
      },
      {
        question: `What post-launch services do you provide for ${service} projects?`,
        answer: `Post-launch, we offer tiered support plans: Essential (bug fixes, security patches, uptime monitoring), Growth (all Essential features plus feature sprints and A/B testing), and Enterprise (dedicated on-call engineer, SLA guarantees, and quarterly architecture reviews). Every plan includes proactive dependency updates and monthly performance reports.`,
      },
      {
        question: `How do you protect sensitive data in ${service} applications?`,
        answer: `We follow defense-in-depth principles: encryption at rest (AES-256) and in transit (TLS 1.3), parameterized queries to prevent SQL injection, Content Security Policy headers, rate limiting, and regular penetration testing by third-party auditors. For projects requiring compliance certification, we provide documentation packages for GDPR, HIPAA, and SOC 2 Type II readiness.`,
      },
      {
        question: `Why do businesses in ${country} choose Web On Dev over local agencies?`,
        answer: `Clients across ${country} choose us for three reasons: technical depth (full-stack engineers who own both frontend and infrastructure), outcome orientation (every project ships with analytics and conversion tracking built in), and post-launch accountability (we monitor production performance and ship improvements weekly, not just hand off code and disappear).`,
      },
      {
        question: `Can you connect ${service} platforms with our existing tools and APIs?`,
        answer: `Yes—API integration is a core capability. We have built production integrations with CRMs (Salesforce, HubSpot), payment processors (Stripe, Adyen, local gateways), ERPs (SAP, NetSuite), marketing platforms (Mailchimp, Klaviyo), and dozens of domain-specific systems. Our integration playbook includes data mapping, error handling, retry logic, and comprehensive monitoring.`,
      },
      {
        question: `How much does a typical ${service} project cost ${location}?`,
        answer: `Projects start at $3,000 for focused builds like landing pages and dashboards. Full web applications range from $8,000–$40,000 depending on complexity, and enterprise platforms with custom integrations typically fall between $40,000–$150,000+. We provide a detailed estimate within 48 hours of your discovery call, broken down by feature, role, and sprint.`,
      },
      {
        question: `How do you handle responsive design and accessibility in ${service}?`,
        answer: `Every component is built mobile-first using a responsive design system. We test on physical devices across iOS, Android, and desktop breakpoints—not just browser emulators. Accessibility is enforced through automated axe-core scans in CI, color contrast checks, keyboard navigation testing, and screen-reader validation. Our target is WCAG 2.1 AA compliance on every project.`,
      },
    ],
    [
      {
        question: `What development methodology does Web On Dev use for ${service} ${location}?`,
        answer: `We run lean agile sprints (two weeks each) with clear ceremonies: sprint planning on Monday, daily async standups, a demo every other Friday, and a retro to continuously improve our process. Each sprint produces a deployable increment, so you see real progress every two weeks—not just status reports. This cadence works well for teams ${location} across any time zone.`,
      },
      {
        question: `What is your tech stack for ${service} projects ${location}?`,
        answer: `Frontend: Next.js 15, React 19, TypeScript, Tailwind CSS. Backend: Node.js with Express or Fastify, Python with FastAPI for ML-heavy services. Database: PostgreSQL, MongoDB for document stores, Redis for caching. Mobile: React Native or Flutter. Infrastructure: AWS (Lambda, ECS, S3, CloudFront), Vercel for JAMstack deployments, Terraform for IaC. All projects include CI/CD via GitHub Actions.`,
      },
      {
        question: `Is Web On Dev available for ${service} projects in ${city}, ${state}?`,
        answer: `Yes. We actively serve clients across ${city}, ${state}, and the wider ${country} region. Our team includes engineers across multiple time zones, so we guarantee same-business-day responses and schedule meetings during your working hours. For clients who prefer face-to-face kickoffs, we offer virtual workshop facilitation with interactive Figma and Miro collaboration.`,
      },
      {
        question: `What is the average delivery time for ${service} solutions ${location}?`,
        answer: `Average delivery timelines: marketing sites and landing pages ship in 3–6 weeks, web applications in 8–14 weeks, mobile apps in 10–16 weeks, and enterprise platforms in 16–28 weeks. We share a Gantt-style project plan during onboarding with specific milestone dates, acceptance criteria, and a risk register so there are no surprises along the way.`,
      },
      {
        question: `What happens after my ${service} project launches?`,
        answer: `Launch is just the beginning. We provide 30 days of included warranty support, then transition to a maintenance plan if needed. Post-launch, we monitor error rates, page speed, uptime, and user analytics. We run a structured 30/60/90-day review with your team to assess real-world performance, identify optimization opportunities, and plan the next iteration of features.`,
      },
      {
        question: `What security standards do you follow for ${service} development?`,
        answer: `We adhere to OWASP Top 10 guidelines as a baseline. Specific measures include input validation and output encoding, CSRF and XSS protection, secure session management, dependency vulnerability scanning (Snyk/Dependabot), and Infrastructure as Code with least-privilege IAM policies. For regulated industries, we layer on compliance-specific controls for GDPR, HIPAA, PCI DSS, or SOC 2 as required.`,
      },
      {
        question: `How is Web On Dev different from other ${service} agencies in ${country}?`,
        answer: `We measure success by your KPIs, not just code shipped. Every project includes embedded analytics, conversion tracking, and post-launch optimization sprints. We assign senior engineers—not juniors supervised by seniors—so code quality is consistent from day one. And our transparent pricing model means you see exactly where every dollar goes, with milestone-based billing.`,
      },
      {
        question: `Do you support third-party integrations in ${service} projects?`,
        answer: `Third-party integration is a specialty. Recent projects include connecting with Stripe, PayPal, Square, Shopify APIs, HubSpot, Salesforce, Twilio, SendGrid, AWS services (S3, SES, Lambda), Google Maps Platform, and numerous healthcare and fintech APIs. We build integration layers with proper error handling, retry mechanisms, circuit breakers, and comprehensive logging.`,
      },
      {
        question: `What are your ${service} pricing options for businesses ${location}?`,
        answer: `We offer fixed-price contracts (ideal for defined scopes, starting at $3,000), time-and-materials billing (best for iterative product development, billed in two-week sprints), and dedicated team retainers (monthly commitment for ongoing product teams). All models include transparent hour tracking, fortnightly invoicing, and no lock-in periods beyond the current sprint.`,
      },
      {
        question: `How do you guarantee cross-device compatibility in ${service}?`,
        answer: `We design mobile-first, then scale up to tablet and desktop breakpoints. Testing runs on a real-device cloud (BrowserStack) covering 20+ device/OS combinations. Automated visual regression tests catch layout shifts early. We validate against WCAG 2.1 AA for accessibility, test with VoiceOver and TalkBack screen readers, and verify touch targets meet minimum 44×44px guidelines.`,
      },
    ],
  ];

  const headerVariants = [
    {
      h2Service: service,
      desc: `Get answers to common questions about our ${service} services and how we deliver results for businesses in ${city}, ${state}, and worldwide.`,
    },
    {
      h2Service: `${service} services`,
      desc: `Everything you need to know about working with Web On Dev for ${service} in ${city}, ${state}—from timelines and pricing to technology and support.`,
    },
    {
      h2Service: `${service} solutions`,
      desc: `Thinking about ${service} for your business in ${city}, ${state}? Here are answers to the questions we hear most from clients across ${country} and beyond.`,
    },
  ];

  const faqs = faqSets[v];
  const header = headerVariants[v];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className={`relative py-20 lg:py-32 bg-slate-900 overflow-hidden ${className}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px]"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]"
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'radial-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <HelpCircle className="w-4 h-4" />
              <span>FAQ</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Frequently Asked Questions About </span>
              <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {header.h2Service}
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {header.desc}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl blur opacity-0 ${openIndex === index ? 'opacity-20' : 'group-hover:opacity-10'} transition-opacity duration-500`} />

                  <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-brand-500/30 transition-all duration-300 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            openIndex === index
                              ? 'bg-gradient-to-br from-brand-500 to-teal-500'
                              : 'bg-white/5 group-hover:bg-white/10'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className={`font-bold text-sm ${openIndex === index ? 'text-white' : 'text-brand-400'}`}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </motion.div>
                        <span className={`font-semibold text-lg leading-snug transition-colors ${
                          openIndex === index ? 'text-brand-400' : 'text-white group-hover:text-brand-400'
                        }`}>
                          {faq.question}
                        </span>
                      </div>
                      <motion.div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          openIndex === index ? 'bg-brand-500/20' : 'bg-white/5'
                        }`}
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-brand-400' : 'text-slate-400'}`} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 pt-0">
                            <div className="pl-14">
                              <p className="text-slate-300 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
              <Sparkles className="w-5 h-5 text-brand-400" />
              <span className="text-slate-300">
                Still have questions?{' '}
                <a href="/contact" className="text-brand-400 hover:text-brand-300 font-semibold transition-colors">
                  Contact our team
                </a>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

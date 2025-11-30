'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, AlertTriangle, Eye, Key, CheckCircle } from 'lucide-react';

const BlogSection8: React.FC = () => {
  return (
    <section id="web-security" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-700 px-4 py-2 text-sm font-medium mb-4">
              Security
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Security and Best Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Web security is more important than ever, with cyber threats becoming increasingly sophisticated. Understanding and implementing robust security measures is crucial for protecting users and maintaining trust.
            </p>
          </div>

          {/* Authentication & Authorization */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Authentication & Authorization: The First Line of Defense
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Proper authentication and authorization mechanisms are fundamental to web security. They ensure that only authorized users can access specific resources and perform certain actions within your application.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Multi-Factor Authentication (MFA)</h4>
                      <p className="text-gray-600">Implement multiple verification methods to enhance account security.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">OAuth 2.0 & OpenID Connect</h4>
                      <p className="text-gray-600">Standard protocols for secure authorization and identity management.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Role-Based Access Control (RBAC)</h4>
                      <p className="text-gray-600">Granular permission systems based on user roles and responsibilities.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-white mb-4">Secure Authentication Implementation</h4>
                <div className="bg-gray-800 rounded-lg p-4 text-sm text-green-400 font-mono overflow-x-auto">
                  <pre>{`// Next.js with NextAuth.js implementation
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user || !user.password) {
          throw new Error('User not found');
        }

        const isValid = await compare(credentials.password, user.password);
        
        if (!isValid) {
          throw new Error('Invalid password');
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    }
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  }
});

// Middleware for route protection
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('next-auth.session-token');

  if (pathname.startsWith('/admin') && !token) {
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }

  return NextResponse.next();
}

// API route with role-based authorization
export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (session.user.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden' });
  }

  // Protected admin functionality
  const data = await getAdminData();
  res.json(data);
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Data Protection & Encryption */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold">Data Protection & Encryption</h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Protecting sensitive data through encryption and secure storage practices is essential for maintaining user privacy and complying with data protection regulations like GDPR and CCPA.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Data Encryption</h4>
                <p className="text-blue-100 text-sm">AES-256 encryption for data at rest and TLS 1.3 for data in transit</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Secure Storage</h4>
                <p className="text-blue-100 text-sm">Environment variables, secure databases, and encrypted backups</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Privacy Compliance</h4>
                <p className="text-blue-100 text-sm">GDPR, CCPA, and other data protection regulation compliance</p>
              </div>
            </div>
          </div>

          {/* Common Vulnerabilities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Common Web Vulnerabilities & Prevention
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Understanding common web vulnerabilities and implementing proper prevention measures is crucial for building secure applications. The OWASP Top 10 provides a comprehensive guide to the most critical security risks.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">SQL Injection Prevention</h4>
                    <p className="text-gray-600">Use parameterized queries, ORM libraries, and input validation to prevent database attacks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Cross-Site Scripting (XSS)</h4>
                    <p className="text-gray-600">Implement Content Security Policy, input sanitization, and output encoding.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Cross-Site Request Forgery (CSRF)</h4>
                    <p className="text-gray-600">Use CSRF tokens, SameSite cookies, and proper request validation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Security Headers & Configuration</h4>
              <div className="bg-gray-900 rounded-lg p-4 text-sm text-green-400 font-mono overflow-x-auto">
                <pre>{`// Next.js security configuration
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Content-Security-Policy',
    value: \`default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';\`
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

// Input validation middleware
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/),
  name: z.string().min(2).max(50),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = userSchema.parse(body);
    
    // Process validated data
    const user = await createUser(validatedData);
    return Response.json({ user });
  } catch (error) {
    return Response.json({ error: 'Invalid input' }, { status: 400 });
  }
}

// Rate limiting with Redis
import { Redis } from 'ioredis';
import rateLimit from 'express-rate-limit';

const redis = new Redis(process.env.REDIS_URL);

const limiter = rateLimit({
  store: new RedisStore({
    client: redis,
    prefix: 'rate-limit:',
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP',
});`}</pre>
              </div>
            </div>
          </div>

          {/* Security Testing & Monitoring */}
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold">Security Testing & Continuous Monitoring</h3>
            </div>
            <p className="text-green-100 mb-6 leading-relaxed">
              Regular security testing and continuous monitoring help identify vulnerabilities before they can be exploited. Implementing automated security checks and monitoring systems is essential for maintaining a secure application.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Security Testing Methods</h4>
                <ul className="space-y-2 text-green-100">
                  <li>• Automated vulnerability scanning and penetration testing</li>
                  <li>• Static application security testing (SAST)</li>
                  <li>• Dynamic application security testing (DAST)</li>
                  <li>• Dependency vulnerability scanning</li>
                  <li>• Security code reviews and audits</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Monitoring & Incident Response</h4>
                <ul className="space-y-2 text-green-100">
                  <li>• Real-time security event monitoring</li>
                  <li>• Intrusion detection and prevention systems</li>
                  <li>• Log analysis and anomaly detection</li>
                  <li>• Incident response planning and procedures</li>
                  <li>• Security metrics and reporting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Security Best Practices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Key className="w-6 h-6 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Security Best Practices</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Regular security updates and patch management
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Principle of least privilege access control
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Secure development lifecycle (SDL) implementation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Regular security training for development teams
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Secure configuration management and secrets handling
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-purple-600" />
                <h4 className="font-semibold text-gray-900">Privacy & Compliance</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  GDPR compliance and data protection by design
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Cookie consent and privacy policy implementation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Data minimization and purpose limitation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  User rights management and data portability
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Regular privacy impact assessments and audits
                </li>
              </ul>
            </div>
          </div>

          {/* Advanced Security Features */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold">Advanced Security Features & Emerging Threats</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Advanced Security Technologies</h4>
                <ul className="space-y-2 text-purple-100">
                  <li>• Web Application Firewalls (WAF) and DDoS protection</li>
                  <li>• API security and rate limiting strategies</li>
                  <li>• Zero-trust architecture implementation</li>
                  <li>• Blockchain-based identity verification</li>
                  <li>• AI-powered threat detection and response</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Emerging Security Challenges</h4>
                <ul className="space-y-2 text-purple-100">
                  <li>• Supply chain attacks and dependency vulnerabilities</li>
                  <li>• Quantum computing threats to encryption</li>
                  <li>• IoT security and edge computing risks</li>
                  <li>• Social engineering and phishing attacks</li>
                  <li>• Cloud security and multi-tenant environments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection8;

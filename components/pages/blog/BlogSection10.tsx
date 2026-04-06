'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Rocket, Cloud, GitBranch, Server, CheckCircle, BarChart3 } from 'lucide-react';

const BlogSection10: React.FC = () => {
  return (
    <section id="deployment-devops" className="relative py-12 sm:py-16 lg:py-20 bg-[#030712] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 30% at 50% 0%, rgba(16,185,129,0.04), transparent 70%)' }} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="gradient-border-subtle text-brand-400 px-4 py-2 text-sm font-medium mb-4">
              Deployment
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Deployment and DevOps
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Modern web development requires efficient deployment processes and DevOps practices. From continuous integration to cloud deployment, understanding deployment strategies is crucial for delivering applications reliably and efficiently.
            </p>
          </div>

          {/* CI/CD Fundamentals */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Continuous Integration & Deployment (CI/CD)
                </h3>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  CI/CD pipelines automate the process of building, testing, and deploying applications. This approach ensures code quality, reduces manual errors, and enables rapid, reliable deployments that can happen multiple times per day.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Continuous Integration</h4>
                      <p className="text-slate-400">Automated building and testing of code changes as they are committed to version control.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Continuous Deployment</h4>
                      <p className="text-slate-400">Automated deployment of code changes to production environments after passing tests.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Infrastructure as Code</h4>
                      <p className="text-slate-400">Managing and provisioning infrastructure through code rather than manual processes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0a0f1a] rounded-2xl p-6 shadow-lg border border-white/[0.06]">
                <h4 className="text-lg font-semibold text-white mb-4">CI/CD Pipeline Implementation</h4>
                <div className="bg-[#030712] rounded-lg p-4 text-sm text-brand-400 font-mono overflow-x-auto">
                  <pre>{`# GitHub Actions workflow example
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build-files
          path: .next/

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - uses: actions/checkout@v3

      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build-files
          path: .next/

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.ORG_ID }}
          vercel-project-id: \${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'

# Docker deployment example
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM base AS builder
COPY . .
RUN npm run build

FROM base AS runner
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "start"]

# Kubernetes deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web-app
        image: your-registry/web-app:latest
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: url
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud Deployment Platforms */}
          <div className="rounded-2xl p-8 text-white mb-16 border border-white/[0.06]" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.05) 100%)' }}>
            <div className="flex items-center gap-3 mb-6">
              <Cloud className="w-8 h-8 text-brand-400" />
              <h3 className="text-2xl font-bold">Cloud Deployment Platforms</h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Modern cloud platforms provide powerful tools for deploying and scaling web applications. From serverless functions to container orchestration, understanding different deployment options helps choose the right solution for your application.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-white">Vercel & Netlify</h4>
                <p className="text-slate-400 text-sm">JAMstack deployment platforms with automatic scaling and edge functions</p>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-white">AWS & Azure</h4>
                <p className="text-slate-400 text-sm">Comprehensive cloud platforms with extensive deployment options</p>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-white">Docker & Kubernetes</h4>
                <p className="text-slate-400 text-sm">Containerization and orchestration for scalable deployments</p>
              </div>
            </div>
          </div>

          {/* Deployment Strategies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Deployment Strategies & Best Practices
              </h3>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Choosing the right deployment strategy is crucial for minimizing downtime and ensuring smooth updates. Different strategies offer various trade-offs between deployment speed, risk, and complexity.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Blue-Green Deployment</h4>
                    <p className="text-slate-400">Maintain two identical production environments and switch traffic between them.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Canary Deployment</h4>
                    <p className="text-slate-400">Gradually roll out changes to a small subset of users before full deployment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Rolling Deployment</h4>
                    <p className="text-slate-400">Update instances one by one while maintaining service availability.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] rounded-2xl p-8 shadow-lg border border-white/[0.06]">
              <h4 className="text-lg font-semibold text-white mb-6">Deployment Configuration Examples</h4>
              <div className="space-y-4">
                <div className="bg-[#0a0f1a] rounded-lg p-4 border border-white/[0.06]">
                  <h5 className="font-semibold text-teal-400 mb-2">Vercel Configuration</h5>
                  <div className="bg-[#030712] rounded p-2 text-xs text-brand-400 font-mono">
                    <pre>{`// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    }
  ],
  "env": {
    "DATABASE_URL": "@database-url",
    "NEXTAUTH_SECRET": "@nextauth-secret"
  }
}`}</pre>
                  </div>
                </div>
                <div className="bg-[#0a0f1a] rounded-lg p-4 border border-white/[0.06]">
                  <h5 className="font-semibold text-brand-400 mb-2">Docker Compose</h5>
                  <div className="bg-[#030712] rounded p-2 text-xs text-brand-400 font-mono">
                    <pre>{`version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@db:5432/app
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=app
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`}</pre>
                  </div>
                </div>
                <div className="bg-[#0a0f1a] rounded-lg p-4 border border-white/[0.06]">
                  <h5 className="font-semibold text-teal-400 mb-2">Environment Variables</h5>
                  <div className="bg-[#030712] rounded p-2 text-xs text-brand-400 font-mono">
                    <pre>{`# .env.production
NODE_ENV=production
DATABASE_URL=postgresql://...
NEXTAUTH_URL=https://yourapp.com
NEXTAUTH_SECRET=your-secret-key
REDIS_URL=redis://...
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monitoring & Observability */}
          <div className="rounded-2xl p-8 text-white mb-16 border border-white/[0.06]" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.05) 100%)' }}>
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-8 h-8 text-brand-400" />
              <h3 className="text-2xl font-bold">Monitoring & Observability</h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Effective monitoring and observability are essential for maintaining application health and performance in production. Implementing comprehensive logging, metrics, and alerting helps identify and resolve issues quickly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-white">Application Monitoring</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• Performance monitoring and APM tools</li>
                  <li>• Error tracking and crash reporting</li>
                  <li>• User experience monitoring (RUM)</li>
                  <li>• Database performance monitoring</li>
                  <li>• API endpoint monitoring and health checks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-white">Infrastructure Monitoring</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• Server and container monitoring</li>
                  <li>• Network and security monitoring</li>
                  <li>• Log aggregation and analysis</li>
                  <li>• Alerting and incident response</li>
                  <li>• Capacity planning and scaling metrics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* DevOps Best Practices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/[0.02] rounded-xl sm:rounded-2xl p-6 border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="w-6 h-6 text-brand-400" />
                <h4 className="font-semibold text-white">DevOps Best Practices</h4>
              </div>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Version control and branching strategies
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Automated testing in CI/CD pipelines
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Infrastructure as code and configuration management
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Security scanning and vulnerability management
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Documentation and knowledge sharing
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.02] rounded-xl sm:rounded-2xl p-6 border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-6 h-6 text-brand-400" />
                <h4 className="font-semibold text-white">Production Readiness</h4>
              </div>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Environment-specific configurations
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Backup and disaster recovery plans
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  SSL/TLS certificates and security headers
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  CDN configuration and caching strategies
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Performance optimization and scaling strategies
                </li>
              </ul>
            </div>
          </div>

          {/* Advanced Deployment Features */}
          <div className="rounded-2xl p-8 text-white border border-white/[0.06]" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.05) 100%)' }}>
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="w-8 h-8 text-brand-400" />
              <h3 className="text-2xl font-bold">Advanced Deployment Features & Future Trends</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-white">Modern Deployment Technologies</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• Serverless functions and edge computing</li>
                  <li>• Microservices and service mesh architectures</li>
                  <li>• GitOps and declarative deployment models</li>
                  <li>• Multi-cloud and hybrid cloud deployments</li>
                  <li>• Progressive Web Apps and offline capabilities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-white">Emerging Trends & Tools</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• Platform engineering and developer experience</li>
                  <li>• AI-powered deployment optimization</li>
                  <li>• Zero-downtime deployment strategies</li>
                  <li>• Chaos engineering and resilience testing</li>
                  <li>• Sustainable computing and green deployments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection10;

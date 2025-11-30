'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { TestTube, Bug, CheckCircle, Zap, Target, BarChart3 } from 'lucide-react';

const BlogSection9: React.FC = () => {
  return (
    <section id="testing-qa" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="bg-indigo-100 text-indigo-700 px-4 py-2 text-sm font-medium mb-4">
              Testing
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Testing and Quality Assurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive testing is essential for delivering reliable, high-quality web applications. Modern testing strategies encompass automated testing, continuous integration, and quality assurance processes that ensure robust and maintainable code.
            </p>
          </div>

          {/* Testing Fundamentals */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Testing Fundamentals & Methodologies
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Understanding different testing methodologies and implementing a comprehensive testing strategy is crucial for building reliable applications. From unit testing to end-to-end testing, each approach serves a specific purpose in the quality assurance process.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Unit Testing</h4>
                      <p className="text-gray-600">Testing individual components and functions in isolation to ensure they work correctly.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Integration Testing</h4>
                      <p className="text-gray-600">Testing how different components work together and interact with each other.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">End-to-End Testing</h4>
                      <p className="text-gray-600">Testing complete user workflows from start to finish in a real browser environment.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-white mb-4">Testing Implementation Examples</h4>
                <div className="bg-gray-800 rounded-lg p-4 text-sm text-green-400 font-mono overflow-x-auto">
                  <pre>{`// Jest unit testing example
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  test('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies disabled state correctly', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});

// React Testing Library integration test
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm Integration', () => {
  test('submits form with valid credentials', async () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);
    
    const user = userEvent.setup();
    
    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /sign in/i }));
    
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123'
      });
    });
  });
});

// Playwright E2E testing
import { test, expect } from '@playwright/test';

test('user can complete checkout process', async ({ page }) => {
  await page.goto('/products');
  
  // Add item to cart
  await page.click('[data-testid="add-to-cart"]');
  await expect(page.locator('[data-testid="cart-count"]')).toHaveText('1');
  
  // Go to checkout
  await page.click('[data-testid="checkout-button"]');
  await expect(page).toHaveURL('/checkout');
  
  // Fill shipping information
  await page.fill('[data-testid="email"]', 'test@example.com');
  await page.fill('[data-testid="address"]', '123 Main St');
  await page.fill('[data-testid="city"]', 'New York');
  
  // Complete purchase
  await page.click('[data-testid="purchase-button"]');
  
  // Verify success
  await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
  await expect(page).toHaveURL('/order-confirmation');
});

// API testing with Supertest
import request from 'supertest';
import app from '../app';

describe('API Endpoints', () => {
  test('GET /api/users returns user list', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200);
    
    expect(response.body).toHaveProperty('users');
    expect(Array.isArray(response.body.users)).toBe(true);
  });

  test('POST /api/users creates new user', async () => {
    const newUser = {
      name: 'John Doe',
      email: 'john@example.com'
    };

    const response = await request(app)
      .post('/api/users')
      .send(newUser)
      .expect(201);
    
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(newUser.name);
  });
});`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Automated Testing Strategies */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold">Automated Testing Strategies</h3>
            </div>
            <p className="text-indigo-100 mb-6 leading-relaxed">
              Automated testing is essential for maintaining code quality and preventing regressions. Modern testing frameworks and tools enable developers to create comprehensive test suites that run automatically as part of the development workflow.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Test-Driven Development (TDD)</h4>
                <p className="text-indigo-100 text-sm">Write tests first, then implement functionality to make tests pass</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Continuous Integration</h4>
                <p className="text-indigo-100 text-sm">Automated testing in CI/CD pipelines for early bug detection</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Visual Regression Testing</h4>
                <p className="text-indigo-100 text-sm">Automated visual testing to detect UI changes and regressions</p>
              </div>
            </div>
          </div>

          {/* Testing Tools & Frameworks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Modern Testing Tools & Frameworks
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The modern testing ecosystem offers a wide range of tools and frameworks designed for different testing needs. From unit testing libraries to comprehensive E2E testing platforms, choosing the right tools is crucial for effective testing.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Jest & Vitest</h4>
                    <p className="text-gray-600">Fast, modern JavaScript testing frameworks with excellent developer experience.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Playwright & Cypress</h4>
                    <p className="text-gray-600">Powerful E2E testing tools for modern web applications.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Testing Library</h4>
                    <p className="text-gray-600">Utilities for testing React components in a way that resembles user behavior.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Testing Configuration & Setup</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-900 mb-2">Jest Configuration</h5>
                  <div className="bg-gray-900 rounded p-2 text-xs text-green-400 font-mono">
                    <pre>{`{
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": ["<rootDir>/jest.setup.js"],
  "moduleNameMapping": {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
}`}</pre>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h5 className="font-semibold text-green-900 mb-2">Playwright Config</h5>
                  <div className="bg-gray-900 rounded p-2 text-xs text-green-400 font-mono">
                    <pre>{`export default {
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:3000',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } }
  ]
}`}</pre>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-semibold text-purple-900 mb-2">GitHub Actions CI</h5>
                  <div className="bg-gray-900 rounded p-2 text-xs text-green-400 font-mono">
                    <pre>{`name: Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run test
      - run: npm run test:e2e`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Assurance Processes */}
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold">Quality Assurance & Testing Processes</h3>
            </div>
            <p className="text-green-100 mb-6 leading-relaxed">
              Quality assurance goes beyond automated testing to include code reviews, performance testing, accessibility testing, and user acceptance testing. A comprehensive QA process ensures that applications meet both technical and business requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Code Quality & Reviews</h4>
                <ul className="space-y-2 text-green-100">
                  <li>• Automated code linting and formatting</li>
                  <li>• Peer code reviews and pair programming</li>
                  <li>• Static code analysis and security scanning</li>
                  <li>• Code coverage metrics and reporting</li>
                  <li>• Documentation and code standards enforcement</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Performance & Accessibility</h4>
                <ul className="space-y-2 text-green-100">
                  <li>• Performance testing and optimization</li>
                  <li>• Accessibility testing (WCAG compliance)</li>
                  <li>• Cross-browser and device testing</li>
                  <li>• Load testing and stress testing</li>
                  <li>• User experience testing and feedback</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testing Best Practices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <TestTube className="w-6 h-6 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Testing Best Practices</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Write tests that are readable and maintainable
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Follow the AAA pattern (Arrange, Act, Assert)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Test behavior, not implementation details
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Use meaningful test descriptions and names
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Maintain a good balance of test coverage
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Bug className="w-6 h-6 text-red-600" />
                <h4 className="font-semibold text-gray-900">Bug Prevention & Debugging</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Implement comprehensive error handling
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Use debugging tools and logging effectively
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Create reproducible test cases for bugs
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Implement monitoring and alerting systems
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Regular code reviews and pair programming
                </li>
              </ul>
            </div>
          </div>

          {/* Advanced Testing Techniques */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold">Advanced Testing Techniques & Metrics</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Advanced Testing Strategies</h4>
                <ul className="space-y-2 text-purple-100">
                  <li>• Contract testing with Pact for microservices</li>
                  <li>• Mutation testing for test quality assessment</li>
                  <li>• Property-based testing with fast-check</li>
                  <li>• Visual regression testing with Percy</li>
                  <li>• Performance testing with k6 and Artillery</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Testing Metrics & Analytics</h4>
                <ul className="space-y-2 text-purple-100">
                  <li>• Code coverage analysis and reporting</li>
                  <li>• Test execution time and performance metrics</li>
                  <li>• Bug detection rate and time to resolution</li>
                  <li>• Test flakiness and reliability metrics</li>
                  <li>• User satisfaction and feedback analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection9;

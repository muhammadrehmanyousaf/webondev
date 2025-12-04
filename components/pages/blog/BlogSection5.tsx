'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Code, CheckCircle, Zap, Layers, Cpu, Rocket } from 'lucide-react';

const BlogSection5: React.FC = () => {
  return (
    <section id="react-frameworks" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium mb-4">
              React & Frameworks
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frontend Frameworks: React and Beyond
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Modern web development is dominated by powerful frontend frameworks that provide structure and efficiency. React, Vue, Angular, and Next.js have revolutionized how we build user interfaces and manage application state.
            </p>
          </div>

          {/* React Fundamentals */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  React: The Foundation of Modern UI Development
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  React's component-based architecture has fundamentally changed how we think about user interface development. By breaking down complex UIs into reusable, composable components, React enables developers to build scalable applications with predictable behavior.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Component-Based Architecture</h4>
                      <p className="text-gray-600">Build reusable UI components that encapsulate logic and styling.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Virtual DOM</h4>
                      <p className="text-gray-600">Efficient rendering through virtual DOM diffing and reconciliation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Unidirectional Data Flow</h4>
                      <p className="text-gray-600">Predictable state management with props down, events up pattern.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-white mb-4">React Component Example</h4>
                <div className="bg-gray-800 rounded-lg p-4 text-sm text-orange-400 font-mono overflow-x-auto">
                  <pre>{`import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <img src={user.avatar} alt={user.name} />
    </div>
  );
};

export default UserProfile;`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Hooks Revolution */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold">React Hooks: The Functional Revolution</h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              React Hooks have transformed how we write React components by enabling functional components to use state and side effects. This paradigm shift has made React code more readable, testable, and maintainable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">useState</h4>
                <p className="text-blue-100 text-sm">Manage component state in functional components</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">useEffect</h4>
                <p className="text-blue-100 text-sm">Handle side effects and lifecycle events</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">useContext</h4>
                <p className="text-blue-100 text-sm">Share data across component trees</p>
              </div>
            </div>
          </div>

          {/* Next.js and Full-Stack React */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Next.js: Full-Stack React Framework
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Next.js extends React's capabilities by providing server-side rendering, static site generation, API routes, and optimized performance out of the box. This full-stack framework enables developers to build production-ready applications with minimal configuration.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Server-Side Rendering (SSR)</h4>
                    <p className="text-gray-600">Render React components on the server for better SEO and performance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Static Site Generation (SSG)</h4>
                    <p className="text-gray-600">Pre-render pages at build time for optimal performance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">API Routes</h4>
                    <p className="text-gray-600">Build backend APIs within the same project structure.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Next.js App Router Example</h4>
              <div className="bg-gray-900 rounded-lg p-4 text-sm text-orange-400 font-mono overflow-x-auto">
                <pre>{`// app/page.tsx
import { Suspense } from 'react';
import UserList from './components/UserList';

export default function HomePage() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <Suspense fallback={<div>Loading users...</div>}>
        <UserList />
      </Suspense>
    </div>
  );
}

// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const users = await fetchUsersFromDatabase();
  return NextResponse.json(users);
}

// app/components/UserList.tsx
async function UserList() {
  const users = await fetch('/api/users').then(res => res.json());
  
  return (
    <div className="grid gap-4">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}`}</pre>
              </div>
            </div>
          </div>

          {/* State Management */}
           <div className="bg-gradient-to-r from-orange-600 to-orange-600 rounded-2xl p-8 text-white mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold">State Management in Modern React</h3>
            </div>
            <p className="text-orange-100 mb-6 leading-relaxed">
              As applications grow in complexity, managing state becomes crucial. Modern React applications use various state management solutions to handle global state, server state, and form state effectively.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Local State Management</h4>
                <ul className="space-y-2 text-orange-100">
                  <li>• useState for component-level state</li>
                  <li>• useReducer for complex state logic</li>
                  <li>• Context API for shared state</li>
                  <li>• Custom hooks for reusable logic</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Global State Solutions</h4>
                <ul className="space-y-2 text-orange-100">
                  <li>• Redux Toolkit for predictable state</li>
                  <li>• Zustand for lightweight state</li>
                  <li>• React Query for server state</li>
                  <li>• SWR for data fetching</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alternative Frameworks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-6 h-6 text-orange-600" />
                <h4 className="font-semibold text-gray-900">Vue.js</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  Progressive framework with gentle learning curve
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  Composition API for better TypeScript support
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  Built-in state management with Pinia
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  Excellent documentation and community
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
                <h4 className="font-semibold text-gray-900">Angular</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  Full-featured framework with built-in tools
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  TypeScript-first development experience
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  Dependency injection and services
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  Enterprise-grade architecture patterns
                </li>
              </ul>
            </div>
          </div>

          {/* Performance Optimization */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-yellow-300" />
              <h3 className="text-2xl font-bold">Performance Optimization in React</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">React Optimization Techniques</h4>
                <ul className="space-y-2 text-purple-100">
                  <li>• React.memo for component memoization</li>
                  <li>• useMemo and useCallback for expensive calculations</li>
                  <li>• Code splitting with React.lazy</li>
                  <li>• Virtual scrolling for large lists</li>
                  <li>• Bundle optimization and tree shaking</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Modern Development Tools</h4>
                <ul className="space-y-2 text-purple-100">
                  <li>• React DevTools for debugging</li>
                  <li>• Bundle analyzers for optimization</li>
                  <li>• Lighthouse for performance auditing</li>
                  <li>• React Profiler for performance monitoring</li>
                  <li>• TypeScript for type safety</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection5;


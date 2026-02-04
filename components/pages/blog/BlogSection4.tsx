'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Code, CheckCircle, Zap, ArrowRight, Cpu, Database } from 'lucide-react';

const BlogSection4: React.FC = () => {
  return (
    <section id="javascript-es2024" className="relative py-12 sm:py-16 lg:py-20 bg-[#030712] overflow-hidden">
      <div className="grain absolute inset-0" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 30% at 50% 0%, rgba(16,185,129,0.04), transparent 70%)' }} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="gradient-border-subtle text-brand-400 px-4 py-2 text-sm font-medium mb-4">
              JavaScript ES2024
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              JavaScript ES2024: The Modern Language
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              JavaScript has evolved from a simple scripting language to a powerful, full-featured programming language. ES2024 introduces features that make JavaScript more expressive, efficient, and maintainable.
            </p>
          </div>

          {/* Modern JavaScript Features */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Modern JavaScript Features
                </h3>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  Destructuring assignment, arrow functions, template literals, and async/await have fundamentally changed how we write JavaScript code. These features not only make code more readable but also reduce common programming errors and improve performance.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Destructuring Assignment</h4>
                      <p className="text-slate-400">Extract values from objects and arrays with concise syntax.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Arrow Functions</h4>
                      <p className="text-slate-400">Shorter function syntax with lexical this binding.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Template Literals</h4>
                      <p className="text-slate-400">String interpolation and multi-line strings with backticks.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0a0f1a] rounded-2xl p-6 shadow-lg border border-white/[0.06]">
                <h4 className="text-lg font-semibold text-white mb-4">Modern JavaScript Examples</h4>
                <div className="bg-[#030712] rounded-lg p-4 text-sm text-brand-400 font-mono overflow-x-auto">
                  <pre>{`// Destructuring
const { name, age, ...rest } = user;
const [first, second, ...others] = array;

// Arrow Functions
const add = (a, b) => a + b;
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

// Template Literals
const message = \`Hello \${name}, you are \${age} years old!\`;

// Async/Await
async function fetchUserData() {
  try {
    const response = await fetch('/api/user');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Async/Await Evolution */}
          <div className="rounded-2xl p-8 text-white mb-16 border border-white/[0.06]" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.05) 100%)' }}>
            <div className="flex items-center gap-3 mb-6">
              <ArrowRight className="w-8 h-8 text-brand-400" />
              <h3 className="text-2xl font-bold">Async/Await: The Evolution of Asynchronous Code</h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Consider the evolution from callback-based asynchronous code to modern async/await syntax. This transformation has made asynchronous programming more intuitive and easier to debug.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-teal-400">Old Callback Approach</h4>
                <div className="bg-[#0a0f1a] rounded p-3 text-xs text-slate-400 font-mono">
                  <pre>{`fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });`}</pre>
                </div>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4">
                 <h4 className="font-semibold mb-2 text-brand-400">Modern Async/Await</h4>
                 <div className="bg-[#0a0f1a] rounded p-3 text-xs text-brand-400 font-mono">
                  <pre>{`async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* ES2024 New Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                ES2024 New Features
              </h3>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                ES2024 introduces several exciting new features that enhance JavaScript's capabilities and developer experience. These features focus on improving performance, readability, and functionality.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Pipeline Operator</h4>
                    <p className="text-slate-400">Chain function calls in a more readable way with the pipeline operator.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Partial Application</h4>
                    <p className="text-slate-400">Create new functions with some arguments pre-filled.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Record and Tuple</h4>
                    <p className="text-slate-400">Immutable data structures for better performance and safety.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] rounded-2xl p-8 shadow-lg border border-white/[0.06]">
              <h4 className="text-lg font-semibold text-white mb-6">ES2024 Code Examples</h4>
              <div className="bg-[#0a0f1a] rounded-lg p-4 text-sm text-brand-400 font-mono overflow-x-auto">
                <pre>{`// Pipeline Operator
const result = data
  |> filter(x => x.active)
  |> map(x => x.name)
  |> sort();

// Partial Application
const add = (a, b) => a + b;
const addFive = add(5, ?);
console.log(addFive(3)); // 8

// Record and Tuple
const point = #[1, 2, 3];
const user = #{
  name: "John",
  age: 30
};

// Optional Chaining
const city = user?.address?.city;

// Nullish Coalescing
const count = data?.length ?? 0;`}</pre>
              </div>
            </div>
          </div>

          {/* Modules and Architecture */}
           <div className="rounded-2xl p-8 text-white mb-16 border border-white/[0.06]" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.05) 100%)' }}>
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-8 h-8 text-brand-400" />
              <h3 className="text-2xl font-bold">Modules and Modern JavaScript Architecture</h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              ES6 modules have standardized how we organize and share JavaScript code. The import/export syntax provides a clean, declarative way to manage dependencies and create modular applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-white">Named Exports</h4>
                <div className="bg-[#0a0f1a] rounded p-3 text-xs text-brand-400 font-mono">
                  <pre>{`export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;`}</pre>
                </div>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-white">Default Exports</h4>
                <div className="bg-[#0a0f1a] rounded p-3 text-xs text-brand-400 font-mono">
                  <pre>{`export default class Calculator {
  add(a, b) { return a + b; }
  multiply(a, b) { return a * b; }
}`}</pre>
                </div>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-white">Dynamic Imports</h4>
                <div className="bg-[#0a0f1a] rounded p-3 text-xs text-brand-400 font-mono">
                  <pre>{`const module = await import('./module.js');
const { default: Calculator } = module;`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Performance and Best Practices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/[0.02] rounded-xl sm:rounded-2xl p-6 border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-teal-400" />
                <h4 className="font-semibold text-white">Performance Optimization</h4>
              </div>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Use const and let instead of var
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Implement proper error handling
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Use async/await for better readability
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Leverage modern array methods
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Implement proper memory management
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.02] rounded-xl sm:rounded-2xl p-6 border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-brand-400" />
                <h4 className="font-semibold text-white">Modern Patterns</h4>
              </div>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Functional programming principles
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Immutable data structures
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Composition over inheritance
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Pure functions and side effects
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Event-driven architecture
                </li>
              </ul>
            </div>
          </div>

          {/* Advanced Features */}
          <div className="rounded-2xl p-8 text-white border border-white/[0.06]" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.05) 100%)' }}>
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-brand-400" />
              <h3 className="text-2xl font-bold">Advanced JavaScript Features</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-white">Modern JavaScript Ecosystem</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• TypeScript for type safety</li>
                  <li>• Web Workers for background processing</li>
                  <li>• Service Workers for offline functionality</li>
                  <li>• WebAssembly for performance-critical code</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-white">Future JavaScript</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• Decorators for metadata and annotations</li>
                  <li>• Class fields and private methods</li>
                  <li>• Top-level await for module initialization</li>
                  <li>• Pattern matching for complex conditionals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection4;

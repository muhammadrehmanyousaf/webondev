'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Code, CheckCircle, Zap, ArrowRight, Cpu, Database } from 'lucide-react';

const BlogSection4: React.FC = () => {
  return (
    <section id="javascript-es2024" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-700 px-4 py-2 text-sm font-medium mb-4">
              JavaScript ES2024
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              JavaScript ES2024: The Modern Language
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              JavaScript has evolved from a simple scripting language to a powerful, full-featured programming language. ES2024 introduces features that make JavaScript more expressive, efficient, and maintainable.
            </p>
          </div>

          {/* Modern JavaScript Features */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Modern JavaScript Features
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Destructuring assignment, arrow functions, template literals, and async/await have fundamentally changed how we write JavaScript code. These features not only make code more readable but also reduce common programming errors and improve performance.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Destructuring Assignment</h4>
                      <p className="text-gray-600">Extract values from objects and arrays with concise syntax.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Arrow Functions</h4>
                      <p className="text-gray-600">Shorter function syntax with lexical this binding.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Template Literals</h4>
                      <p className="text-gray-600">String interpolation and multi-line strings with backticks.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-white mb-4">Modern JavaScript Examples</h4>
                <div className="bg-gray-800 rounded-lg p-4 text-sm text-green-400 font-mono overflow-x-auto">
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
            <div className="flex items-center gap-3 mb-6">
              <ArrowRight className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold">Async/Await: The Evolution of Asynchronous Code</h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Consider the evolution from callback-based asynchronous code to modern async/await syntax. This transformation has made asynchronous programming more intuitive and easier to debug.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-yellow-300">Old Callback Approach</h4>
                <div className="bg-gray-900 rounded p-3 text-xs text-red-300 font-mono">
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
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-green-300">Modern Async/Await</h4>
                <div className="bg-gray-900 rounded p-3 text-xs text-green-300 font-mono">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ES2024 New Features
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ES2024 introduces several exciting new features that enhance JavaScript's capabilities and developer experience. These features focus on improving performance, readability, and functionality.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Pipeline Operator</h4>
                    <p className="text-gray-600">Chain function calls in a more readable way with the pipeline operator.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Partial Application</h4>
                    <p className="text-gray-600">Create new functions with some arguments pre-filled.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Record and Tuple</h4>
                    <p className="text-gray-600">Immutable data structures for better performance and safety.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">ES2024 Code Examples</h4>
              <div className="bg-gray-900 rounded-lg p-4 text-sm text-green-400 font-mono overflow-x-auto">
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
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold">Modules and Modern JavaScript Architecture</h3>
            </div>
            <p className="text-green-100 mb-6 leading-relaxed">
              ES6 modules have standardized how we organize and share JavaScript code. The import/export syntax provides a clean, declarative way to manage dependencies and create modular applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Named Exports</h4>
                <div className="bg-gray-900 rounded p-3 text-xs text-green-300 font-mono">
                  <pre>{`export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;`}</pre>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Default Exports</h4>
                <div className="bg-gray-900 rounded p-3 text-xs text-green-300 font-mono">
                  <pre>{`export default class Calculator {
  add(a, b) { return a + b; }
  multiply(a, b) { return a * b; }
}`}</pre>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Dynamic Imports</h4>
                <div className="bg-gray-900 rounded p-3 text-xs text-green-300 font-mono">
                  <pre>{`const module = await import('./module.js');
const { default: Calculator } = module;`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Performance and Best Practices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-yellow-600" />
                <h4 className="font-semibold text-gray-900">Performance Optimization</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Use const and let instead of var
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Implement proper error handling
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Use async/await for better readability
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Leverage modern array methods
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Implement proper memory management
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Modern Patterns</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Functional programming principles
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Immutable data structures
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Composition over inheritance
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Pure functions and side effects
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Event-driven architecture
                </li>
              </ul>
            </div>
          </div>

          {/* Advanced Features */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold">Advanced JavaScript Features</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Modern JavaScript Ecosystem</h4>
                <ul className="space-y-2 text-purple-100">
                  <li>• TypeScript for type safety</li>
                  <li>• Web Workers for background processing</li>
                  <li>• Service Workers for offline functionality</li>
                  <li>• WebAssembly for performance-critical code</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Future JavaScript</h4>
                <ul className="space-y-2 text-purple-100">
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

import { Blog } from '@/types/blog';

export const blogContents: Blog[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14',
    description: 'Learn how to build modern web applications with Next.js 14 and its new features.',
    date: '2024-03-15',
    category: 'web-dev',
    content: `
      <h1>Getting Started with Next.js 14</h1>
      <p>Next.js 14 brings exciting new features and improvements to the framework. In this comprehensive guide, we'll explore the key features that make Next.js 14 a game-changer for web development.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Server Actions:</strong> Built-in support for server-side mutations with type safety</li>
        <li><strong>Improved Image Component:</strong> Better performance and optimization</li>
        <li><strong>Better TypeScript Support:</strong> Enhanced type checking and developer experience</li>
      </ul>

      <h2>Getting Started</h2>
      <p>To create a new Next.js 14 project, run:</p>
      <pre><code>npx create-next-app@latest my-next-app</code></pre>
      
      <h2>Conclusion</h2>
      <p>Next.js 14 continues to push the boundaries of what's possible with React, making it easier than ever to build fast, scalable web applications.</p>
    `
  },
  {
    id: '2',
    title: 'The Future of AI in Web Development',
    description: 'Exploring how artificial intelligence is transforming the way we build web applications.',
    date: '2024-03-10',
    category: 'tech',
    content: `
      <h1>The Future of AI in Web Development</h1>
      <p>Artificial Intelligence is revolutionizing the way we build web applications. From automated testing to intelligent code generation, AI is becoming an integral part of the development process.</p>
      
      <h2>Current Applications</h2>
      <ul>
        <li><strong>Code Generation:</strong> AI-powered tools that help write boilerplate code</li>
        <li><strong>Testing:</strong> Automated test case generation and bug detection</li>
        <li><strong>Performance Optimization:</strong> AI-driven insights for better performance</li>
      </ul>

      <h2>Future Possibilities</h2>
      <p>The future holds even more exciting possibilities:</p>
      <ul>
        <li>AI-powered debugging tools</li>
        <li>Automated accessibility improvements</li>
        <li>Intelligent code refactoring</li>
      </ul>
    `
  },
  {
    id: '3',
    title: 'TypeScript Best Practices',
    description: 'Essential tips and tricks for writing better TypeScript code in your projects.',
    date: '2024-03-05',
    category: 'programming',
    content: `
      <h1>TypeScript Best Practices</h1>
      <p>TypeScript has become the de facto standard for building large-scale JavaScript applications. Here are some essential best practices to help you write better TypeScript code.</p>
      
      <h2>Type Definitions</h2>
      <p>Always define explicit types for your variables and functions:</p>
      <pre><code>interface User {
  id: string;
  name: string;
  email: string;
}

function getUser(id: string): Promise<User> {
  // Implementation
}</code></pre>

      <h2>Common Pitfalls to Avoid</h2>
      <ul>
        <li>Using 'any' type too liberally</li>
        <li>Not leveraging union types</li>
        <li>Ignoring type inference</li>
      </ul>

      <h2>Advanced Features</h2>
      <p>Make the most of TypeScript's advanced features:</p>
      <ul>
        <li>Generics for reusable components</li>
        <li>Utility types for type manipulation</li>
        <li>Conditional types for complex type logic</li>
      </ul>
    `
  }
]; 
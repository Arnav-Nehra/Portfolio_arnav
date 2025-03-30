import Link from 'next/link';
import { Blog } from '@/types/blog';

interface BlogListProps {
  selectedCategory: string;
}

export default function BlogList({ selectedCategory }: BlogListProps) {
  // This would typically come from your data source
  const blogs: Blog[] = [
    {
      id: '1',
      title: 'Getting Started with Next.js 14',
      description: 'Learn how to build modern web applications with Next.js 14 and its new features.',
      date: '2024-03-15',
      category: 'web-dev',
      content: ''
    },
    {
      id: '2',
      title: 'The Future of AI in Web Development',
      description: 'Exploring how artificial intelligence is transforming the way we build web applications.',
      date: '2024-03-10',
      category: 'tech',
      content: ''
    },
    {
      id: '3',
      title: 'TypeScript Best Practices',
      description: 'Essential tips and tricks for writing better TypeScript code in your projects.',
      date: '2024-03-05',
      category: 'programming',
      content: ''
    }
  ];

  const filteredBlogs = selectedCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="grid gap-6">
      {filteredBlogs.map((blog) => (
        <Link 
          href={`/blogs/${blog.id}`} 
          key={blog.id}
          className="block p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
        >
          <article>
            <div className="flex items-center justify-between mb-2">
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span className="text-sm text-blue-500">{blog.category}</span>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {blog.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {blog.description}
            </p>
          </article>
        </Link>
      ))}
    </div>
  );
} 
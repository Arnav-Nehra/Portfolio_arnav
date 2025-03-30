import { blogContents } from '@/data/blogs';
import { notFound } from 'next/navigation';

interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;
  const blog = blogContents.find(b => b.id === id);

  if (!blog) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8 prose dark:prose-invert max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <time className="text-gray-500">
          {new Date(blog.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <span className="text-blue-500">{blog.category}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </article>
  );
}
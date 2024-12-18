import { getBlogById } from '@/lib/api';
import { notFound } from 'next/navigation';
import { BlogMeta } from '@/components/blog/blog-meta';
import { BlogImage } from '@/components/blog/blog-image';
import { BlogAuthor } from '@/components/blog/blog-author';
import { BlogContent } from '@/components/blog/blog-content';

export default async function BlogPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = await getBlogById(params.id);

  if (!blog) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <BlogImage 
          src={blog.image} 
          alt={blog.title} 
          priority 
          height="h-[400px]" 
        />
        
        <div className="space-y-4">
          <BlogMeta date={blog.date} readTime={blog.readTime} />
          
          <h1 className="text-4xl font-bold tracking-tight">{blog.title}</h1>
          <p className="text-xl text-muted-foreground">{blog.description}</p>
          
          <BlogAuthor author={blog.author} />
          <BlogContent content={blog.content} />
        </div>
      </div>
    </article>
  );
}
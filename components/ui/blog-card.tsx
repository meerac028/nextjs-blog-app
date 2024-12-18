'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { BlogMeta } from '@/components/blog/blog-meta';
import { BlogImage } from '@/components/blog/blog-image';
import { Blog } from '@/types/blog';

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <BlogImage src={blog.image} alt={blog.title} />
        <CardHeader className="space-y-1">
          <BlogMeta date={blog.date} readTime={blog.readTime} />
          <h3 className="text-xl font-bold tracking-tight">{blog.title}</h3>
          <p className="text-sm text-muted-foreground">{blog.description}</p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <div className="text-sm font-medium">By {blog.author}</div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
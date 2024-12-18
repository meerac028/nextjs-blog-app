import { FC } from 'react';

interface BlogContentProps {
  content: string;
}

export const BlogContent: FC<BlogContentProps> = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none">
      {content}
    </div>
  );
};
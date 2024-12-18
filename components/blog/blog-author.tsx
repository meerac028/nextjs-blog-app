import { FC } from 'react';

interface BlogAuthorProps {
  author: string;
}

export const BlogAuthor: FC<BlogAuthorProps> = ({ author }) => {
  return (
    <div className="border-y py-4">
      <p className="text-sm">
        Written by <span className="font-medium">{author}</span>
      </p>
    </div>
  );
};
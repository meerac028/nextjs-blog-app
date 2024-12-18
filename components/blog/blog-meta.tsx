import { FC } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface BlogMetaProps {
  date: string;
  readTime: string;
}

export const BlogMeta: FC<BlogMetaProps> = ({ date, readTime }) => {
  return (
    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
      <span className="flex items-center">
        <Calendar className="mr-1 h-4 w-4" />
        {new Date(date).toLocaleDateString()}
      </span>
      <span className="flex items-center">
        <Clock className="mr-1 h-4 w-4" />
        {readTime}
      </span>
    </div>
  );
};
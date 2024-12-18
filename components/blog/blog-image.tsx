import { FC } from 'react';
import Image from 'next/image';

interface BlogImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  height?: string;
}

export const BlogImage: FC<BlogImageProps> = ({ 
  src, 
  alt, 
  priority = false,
  height = "h-48"
}) => {
  return (
    <div className={`relative ${height} w-full rounded-lg overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
      />
    </div>
  );
};
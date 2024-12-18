import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SlideData } from '@/types/slider';

interface SlideProps {
  data: SlideData;
  isActive: boolean;
}

export const Slide: FC<SlideProps> = ({ data, isActive }) => {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-500 ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {data.title}
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            {data.description}
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href={data.buttonLink}>{data.buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
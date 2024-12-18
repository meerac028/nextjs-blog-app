'use client';

import { FC } from 'react';
import { cn } from '@/lib/utils';

interface SlideIndicatorsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

export const SlideIndicators: FC<SlideIndicatorsProps> = ({
  total,
  current,
  onSelect,
}) => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={cn(
            'w-2 h-2 rounded-full transition-all duration-300',
            'hover:bg-white/80',
            current === index ? 'w-6 bg-white' : 'bg-white/50'
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};
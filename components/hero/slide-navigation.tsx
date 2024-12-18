'use client';

import { FC } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SlideNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const SlideNavigation: FC<SlideNavigationProps> = ({
  onPrevious,
  onNext,
}) => {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/20 hover:bg-background/40 text-white rounded-full"
        onClick={onPrevious}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/20 hover:bg-background/40 text-white rounded-full"
        onClick={onNext}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </>
  );
};
'use client';

import { FC } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BlogSliderNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export const BlogSliderNavigation: FC<BlogSliderNavigationProps> = ({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}) => {
  return (
    <div className="flex space-x-2">
      <Button
        variant="outline"
        size="icon"
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={cn(
          'transition-opacity',
          !canGoPrevious && 'opacity-50 cursor-not-allowed'
        )}
        aria-label="Previous slides"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={onNext}
        disabled={!canGoNext}
        className={cn(
          'transition-opacity',
          !canGoNext && 'opacity-50 cursor-not-allowed'
        )}
        aria-label="Next slides"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
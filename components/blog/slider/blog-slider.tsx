'use client';

import { FC } from 'react';
import { Blog } from '@/types/blog';
import { BlogCard } from '@/components/ui/blog-card';
import { BlogSliderNavigation } from './blog-slider-navigation';
import { useSlider } from '@/lib/hooks/use-slider';

const sliderConfig = {
  slidesPerView: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
  spacing: 24, // in pixels
  autoplayInterval: 5000,
};

interface BlogSliderProps {
  blogs: Blog[];
  title?: string;
}

export const BlogSlider: FC<BlogSliderProps> = ({ blogs, title }) => {
  const {
    currentSlide,
    slidesPerView,
    next,
    previous,
    canGoNext,
    canGoPrevious,
  } = useSlider(blogs.length, sliderConfig);

  const translateX = -(currentSlide * (100 / slidesPerView));

  return (
    <div className="space-y-6">
      {title && (
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <BlogSliderNavigation
            onPrevious={previous}
            onNext={next}
            canGoPrevious={canGoPrevious}
            canGoNext={canGoNext}
          />
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${translateX}%)`,
            gap: `${sliderConfig.spacing}px`,
          }}
        >
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex-shrink-0"
              style={{ width: `calc(${100 / slidesPerView}% - ${sliderConfig.spacing * (slidesPerView - 1) / slidesPerView}px)` }}
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
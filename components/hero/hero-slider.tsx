'use client';

import { FC, useState, useEffect } from 'react';
import { Slide } from './slide';
import { SlideNavigation } from './slide-navigation';
import { SlideIndicators } from './slide-indicators';
import { slides } from '@/lib/data/slides';

export const HeroSlider: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <Slide
          key={slide.id}
          data={slide}
          isActive={currentSlide === index}
        />
      ))}
      
      <SlideNavigation
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
      
      <SlideIndicators
        total={slides.length}
        current={currentSlide}
        onSelect={setCurrentSlide}
      />
    </section>
  );
};
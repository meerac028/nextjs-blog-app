'use client';

import { useState, useEffect, useCallback } from 'react';
import { SliderConfig } from '@/types/slider-config';

export const useSlider = (totalSlides: number, config: SliderConfig) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(config.slidesPerView.desktop);

  const updateSlidesPerView = useCallback(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setSlidesPerView(config.slidesPerView.mobile);
    } else if (width < 1024) {
      setSlidesPerView(config.slidesPerView.tablet);
    } else {
      setSlidesPerView(config.slidesPerView.desktop);
    }
  }, [config.slidesPerView]);

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, [updateSlidesPerView]);

  const maxSlides = Math.max(0, totalSlides - slidesPerView);

  const next = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides));
  };

  const previous = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(Math.min(Math.max(0, index), maxSlides));
  };

  return {
    currentSlide,
    slidesPerView,
    next,
    previous,
    goToSlide,
    canGoNext: currentSlide < maxSlides,
    canGoPrevious: currentSlide > 0,
  };
};
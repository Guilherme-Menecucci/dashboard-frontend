'use client';
import React, { CSSProperties, useEffect, useRef, useState } from 'react';

import HeroTile, { HeroTile2, THeroTileProps } from '../HeroTile';
import clsx from 'clsx';

interface IHero {
  images: THeroTileProps[];
  slideDuration?: number;
  transitionDuration?: number;
}

const Hero = ({ images, slideDuration = 5000, transitionDuration = 500 }: IHero) => {
  // activeIndex represents the current slide index.
  const [activeIndex, setActiveIndex] = useState(0);
  // This state flag controls whether the CSS transition is enabled
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Create a new slides array that includes a clone of the first image at the end
  const slides = [...images, images[0]];

  const sliderRef = useRef<HTMLDivElement>(null);
  // Track the animation frame ID
  const animationFrameRef = useRef<number | null>(null);
  // Track the start timeof the current slide
  const startTimeRef = useRef<number>(performance.now());

  // Auto-slide effect: update the active index every slideDuration milliseconds
  const animate = (time: number) => {
    const elapsed = time - startTimeRef.current;

    if (elapsed > slideDuration) {
      setActiveIndex(prev => prev + 1);
      setIsTransitioning(true);

      startTimeRef.current = time;
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [slideDuration]);

  const handleTransitionEnd = () => {
    if (activeIndex !== images.length) return;

    setIsTransitioning(false);
    setActiveIndex(0);
  };

  // Handler for chip clicks: jump to the selected slide.
  const handleChipClick = (index: number) => {
    // Reset the slide timer.
    startTimeRef.current = performance.now();
    setActiveIndex(index);
    setIsTransitioning(false);
  };

  useEffect(() => {
    if (isTransitioning) return;

    const timeout = setTimeout(() => {
      setIsTransitioning(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [isTransitioning]);

  // Determine the actual active slide index for the chips (ignoring the cloned slide).
  const actualActiveIndex = activeIndex === images.length ? 0 : activeIndex;

  return (
    <div className="relative h-10/12 w-screen overflow-hidden">
      <div
        ref={sliderRef}
        className="flex h-full w-full translate-y-[0] transition-transform"
        style={
          {
            '--tw-translate-x': `-${activeIndex * 100}%`,
            transitionDuration: isTransitioning ? `${transitionDuration}ms` : '0s',
          } as CSSProperties
        }
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((img, idx) => (
          <div key={idx} className="h-full w-full flex-shrink-0">
            <HeroTile
              title={img.title}
              color={img.color}
              description={img.description}
              poster={img.poster}
              backdrop={img.backdrop}
            />
          </div>
        ))}
      </div>
      <div className="absolute right-0 bottom-4 left-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleChipClick(idx)}
            className={clsx(
              'relative h-1 w-10 cursor-pointer overflow-hidden rounded-full border bg-gray-300/25 shadow-md shadow-black/25 backdrop-blur-md',
              {
                'border-black/50': actualActiveIndex !== idx,
                'border-white': actualActiveIndex === idx,
              },
            )}
          >
            {actualActiveIndex === idx && (
              <span
                className="animate-fill absolute top-0 left-0 h-full bg-white"
                style={{ animationDuration: `${slideDuration}ms` }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export const Hero2 = ({ images, slideDuration = 5000, transitionDuration = 500 }: IHero) => {
  // activeIndex represents the current slide index.
  const [activeIndex, setActiveIndex] = useState(0);
  // This state flag controls whether the CSS transition is enabled
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Create a new slides array that includes a clone of the first image at the end
  const slides = [...images, images[0]];

  const sliderRef = useRef<HTMLDivElement>(null);
  // Track the animation frame ID
  const animationFrameRef = useRef<number | null>(null);
  // Track the start timeof the current slide
  const startTimeRef = useRef<number>(performance.now());

  // Auto-slide effect: update the active index every slideDuration milliseconds
  const animate = (time: number) => {
    const elapsed = time - startTimeRef.current;

    if (elapsed > slideDuration) {
      setActiveIndex(prev => prev + 1);
      setIsTransitioning(true);

      startTimeRef.current = time;
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [slideDuration]);

  const handleTransitionEnd = () => {
    if (activeIndex !== images.length) return;

    setIsTransitioning(false);
    setActiveIndex(0);
  };

  // Handler for chip clicks: jump to the selected slide.
  const handleChipClick = (index: number) => {
    // Reset the slide timer.
    startTimeRef.current = performance.now();
    setActiveIndex(index);
    setIsTransitioning(false);
  };

  useEffect(() => {
    if (isTransitioning) return;

    const timeout = setTimeout(() => {
      setIsTransitioning(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [isTransitioning]);

  // Determine the actual active slide index for the chips (ignoring the cloned slide).
  const actualActiveIndex = activeIndex === images.length ? 0 : activeIndex;

  return (
    <div className="relative h-6/12 lg:h-7/12">
      <div
        className={clsx(
          'relative h-full w-screen overflow-hidden',
          // 'after:from-brutal-background after:absolute after:inset-x-0 after:bottom-0 after:h-4/12 after:bg-linear-to-t',
        )}
      >
        <div className="after:bg-brutal-black-container/75 after:absolute after:inset-0 after:backdrop-blur-md">
          <div className="bg-brutal-primary absolute aspect-square w-7xl -translate-1/2 rounded-full blur-3xl" />
          <div className="bg-brutal-secondary absolute right-0 aspect-square w-7xl translate-x-1/2 -translate-y-1/4 rounded-full blur-3xl" />
        </div>
        <div
          ref={sliderRef}
          className="flex h-full"
          style={{
            // '--tw-translate-x': `-${activeIndex * 100}%`,
            // transitionDuration: isTransitioning ? `${transitionDuration}ms` : '0s',
            transform: `translateX(-${activeIndex * 100}vw)`,
            transition: isTransitioning ? `transform ${transitionDuration}ms ease-in-out` : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((img, idx) => (
            <section key={idx} className="text-brutal-on-black w-full shrink-0">
              <HeroTile2
                title={img.title}
                color={img.color}
                description={img.description}
                genres={img.genres}
                vote_average={img.vote_average}
                release_date={img.release_date}
                poster={img.poster}
                backdrop={img.backdrop}
              />
            </section>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleChipClick(idx)}
            className={clsx(
              'bg-brutal-background/25 relative h-1 w-10 cursor-pointer overflow-hidden rounded-full border shadow-md shadow-black/25 backdrop-blur-md',
              {
                'border-brutal-background/50': actualActiveIndex !== idx,
                'border-brutal-primary-variant': actualActiveIndex === idx,
              },
            )}
          >
            {actualActiveIndex === idx && (
              <span
                className="animate-fill bg-brutal-primary-variant absolute top-0 left-0 h-full"
                style={{ animationDuration: `${slideDuration}ms` }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;

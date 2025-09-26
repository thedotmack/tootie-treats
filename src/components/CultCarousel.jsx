'use client'

import PropTypes from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Inspired by Cult UI Loading Carousel design language.
 */
export function CultCarousel({ slides, autoplayInterval = 6000 }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);

  useEffect(() => {
    if (!autoplayInterval || safeSlides.length <= 1) return undefined;
    timerRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % safeSlides.length);
    }, autoplayInterval);
    return () => clearTimeout(timerRef.current);
  }, [autoplayInterval, index, safeSlides.length]);

  if (!safeSlides.length) return null;

  const current = safeSlides[index];

  const goTo = (direction) => {
    if (safeSlides.length <= 1) return;
    setIndex((prev) => {
      if (direction === 'next') {
        return (prev + 1) % safeSlides.length;
      }
      return (prev - 1 + safeSlides.length) % safeSlides.length;
    });
  };

  return (
    <div className="relative overflow-hidden rounded-3xl">
      <div
        className="aspect-[16/9] w-full overflow-hidden rounded-3xl"
        style={{ backgroundColor: 'rgba(23, 21, 31, 0.05)' }}
      >
        <img
          src={current.imageUrl}
          alt={current.title}
          className="h-full w-full object-cover"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground via-foreground to-transparent p-6 text-left text-secondary-background"
          style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(23, 21, 31, 0.4) 35%, rgba(23, 21, 31, 0.9) 100%)' }}
        >
          <p className="text-xs uppercase tracking-wide opacity-80">{current.badge || 'Client highlight'}</p>
          <h3 className="mt-2 font-heading text-2xl">{current.title}</h3>
          <p className="mt-3 text-sm opacity-80">{current.content}</p>
          <p className="mt-4 text-xs opacity-70">
            — {current.author}, {current.role}
          </p>
          {current.source && (
            <p className="mt-2 text-xs">
              <a
                href={current.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent-teal hover:text-accent-pink"
              >
                View source
              </a>
            </p>
          )}
        </div>
      </div>

      {safeSlides.length > 1 && (
        <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goTo('prev')}
            className="flex h-10 w-10 items-center justify-center rounded-full transition"
            style={{
              backgroundColor: 'rgba(23, 21, 31, 0.9)',
              color: 'var(--secondary-background)',
              border: '2px solid rgba(255, 255, 255, 0.65)'
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {safeSlides.map((_, dotIndex) => (
              <span
                key={dotIndex}
                className="h-2 w-6 rounded-full transition"
                style={{
                  backgroundColor:
                    dotIndex === index ? 'var(--accent-pink)' : 'rgba(255, 255, 255, 0.65)'
                }}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goTo('next')}
            className="flex h-10 w-10 items-center justify-center rounded-full transition"
            style={{
              backgroundColor: 'rgba(23, 21, 31, 0.9)',
              color: 'var(--secondary-background)',
              border: '2px solid rgba(255, 255, 255, 0.65)'
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}

CultCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      badge: PropTypes.string,
      source: PropTypes.string
    })
  ),
  autoplayInterval: PropTypes.number
};

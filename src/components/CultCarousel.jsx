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
      <div className="aspect-[16/9] w-full overflow-hidden rounded-3xl bg-night/70">
        <img
          src={current.imageUrl}
          alt={current.title}
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-night via-night/40 to-transparent p-6 text-left text-white">
          <p className="text-xs uppercase tracking-wide text-white/60">{current.badge || 'Client highlight'}</p>
          <h3 className="mt-2 font-display text-2xl">{current.title}</h3>
          <p className="mt-3 text-sm text-white/80">{current.content}</p>
          <p className="mt-4 text-xs text-white/60">
            — {current.author}, {current.role}
          </p>
          {current.source && (
            <p className="mt-2 text-xs">
              <a
                href={current.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-lavender-200 hover:text-lavender-100"
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-night/70 text-white transition hover:bg-white/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {safeSlides.map((_, dotIndex) => (
              <span
                key={dotIndex}
                className={`h-2 w-6 rounded-full transition ${dotIndex === index ? 'bg-lavender-400' : 'bg-white/20'}`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goTo('next')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-night/70 text-white transition hover:bg-white/10"
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

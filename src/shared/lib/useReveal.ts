import { useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useReveal<T extends HTMLElement>(options: RevealOptions = {}) {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();
  const { threshold = 0.2, rootMargin = '0px 0px -10% 0px' } = options;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (reduced) {
      node.dataset.revealed = 'true';
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = 'true';
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced, threshold, rootMargin]);

  return ref;
}

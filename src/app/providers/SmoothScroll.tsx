import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, useReducedMotion } from '@shared/lib';

interface SmoothScrollProps {
  children: ReactNode;
}

type LenisWindow = Window & { __lenis?: Lenis };

export function SmoothScroll({ children }: SmoothScrollProps) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    (window as LenisWindow).__lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      delete (window as LenisWindow).__lenis;
    };
  }, [reduced]);

  return <>{children}</>;
}

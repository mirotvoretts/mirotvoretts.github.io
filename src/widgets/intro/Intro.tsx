import { useEffect, useRef, useState } from 'react';
import { gsap } from '@shared/lib';
import styles from './Intro.module.css';

const SEEN_KEY = 'intro-seen';
const BG = ['#faf8f5', '#222222', '#123a2e'];
const FG = ['#222222', '#faf8f5', '#faf8f5'];

const slides = [
  { headline: 'Most software is written in a hurry.', subline: 'Shipped by Friday, patched forever.' },
  { headline: 'Some of it is built to last.', subline: 'Correct under load, quiet under pressure.' },
  { headline: 'This is a workshop of the second kind.', subline: 'Take your time.' },
];

type LenisWindow = Window & { __lenis?: { stop(): void; start(): void } };

function prefersReduced(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function shouldPlay(): boolean {
  if (typeof window === 'undefined') return false;
  return window.sessionStorage.getItem(SEEN_KEY) !== 'true' && !prefersReduced();
}

export function Intro() {
  const [visible] = useState(shouldPlay);
  const [done, setDone] = useState(false);
  const [index, setIndex] = useState(0);

  const overlayRef = useRef<HTMLDivElement>(null);
  const panelTopRef = useRef<HTMLDivElement>(null);
  const panelBottomRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLSpanElement>(null);
  const chromeRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<HTMLDivElement[]>([]);

  const idxRef = useRef(0);
  const animatingRef = useRef(false);
  const lastRef = useRef(0);

  useEffect(() => {
    if (!visible) {
      window.sessionStorage.setItem(SEEN_KEY, 'true');
      return;
    }
    const slidesEls = slideRefs.current;
    const overlay = overlayRef.current;
    const w = window as LenisWindow;
    let torn = false;

    const ctx = gsap.context(() => {
      gsap.set(slidesEls[0], { opacity: 1, y: 0 });
      gsap.set([slidesEls[1], slidesEls[2]], { opacity: 0, y: 50 });
      gsap.set([panelTopRef.current, panelBottomRef.current], { backgroundColor: BG[0] });
      gsap.set(contentRef.current, { color: FG[0] });
    });

    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    w.__lenis?.stop();

    const transitionTo = (next: number) => {
      animatingRef.current = true;
      const cur = idxRef.current;
      gsap
        .timeline({ onComplete: () => (animatingRef.current = false) })
        .to(slidesEls[cur], { opacity: 0, y: -50, duration: 0.5, ease: 'power2.in' })
        .to([panelTopRef.current, panelBottomRef.current], {
          backgroundColor: BG[next],
          duration: 0.75,
          ease: 'power2.inOut',
        }, 0)
        .to(contentRef.current, { color: FG[next], duration: 0.75, ease: 'power2.inOut' }, 0)
        .fromTo(
          slidesEls[next],
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          0.35,
        );
      idxRef.current = next;
      setIndex(next);
    };

    const exit = () => {
      animatingRef.current = true;
      w.__lenis?.stop();
      window.scrollTo(0, 0);
      const heroEls = gsap.utils.toArray<HTMLElement>('[data-hero] > *');
      gsap
        .timeline({
          onComplete: () => {
            window.sessionStorage.setItem(SEEN_KEY, 'true');
            cleanup();
            setDone(true);
          },
        })
        .to(slidesEls[idxRef.current], { opacity: 0, y: -40, duration: 0.4, ease: 'power2.in' })
        .to([ghostRef.current, chromeRef.current], { opacity: 0, duration: 0.3 }, 0)
        .to(panelTopRef.current, { yPercent: -100, duration: 1, ease: 'power4.inOut' }, 0.3)
        .to(panelBottomRef.current, { yPercent: 100, duration: 1, ease: 'power4.inOut' }, 0.3)
        .from(
          heroEls,
          {
            y: 60,
            opacity: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: 'power3.out',
            clearProps: 'opacity,transform',
          },
          0.55,
        );
    };

    const tryAdvance = () => {
      const now = Date.now();
      if (animatingRef.current || now - lastRef.current < 650) return;
      lastRef.current = now;
      if (idxRef.current < slides.length - 1) transitionTo(idxRef.current + 1);
      else exit();
    };

    let touchStartY = 0;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 4) tryAdvance();
    };
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (touchStartY - e.touches[0].clientY > 30) tryAdvance();
    };
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) {
        e.preventDefault();
        tryAdvance();
      }
    };
    const onClick = () => tryAdvance();
    const skipEl = overlay?.querySelector(`.${styles.skip}`);
    const onSkip = (e: Event) => {
      e.stopPropagation();
      idxRef.current = slides.length - 1;
      lastRef.current = 0;
      animatingRef.current = false;
      tryAdvance();
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('keydown', onKey);
    overlay?.addEventListener('click', onClick);
    skipEl?.addEventListener('click', onSkip);

    function cleanup() {
      if (torn) return;
      torn = true;
      ctx.revert();
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('keydown', onKey);
      overlay?.removeEventListener('click', onClick);
      skipEl?.removeEventListener('click', onSkip);
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
      w.__lenis?.start();
    }

    return cleanup;
  }, [visible]);

  if (!visible || done) return null;

  return (
    <div className={styles.overlay} ref={overlayRef}>
      <div className={`${styles.panel} ${styles.panelTop}`} ref={panelTopRef} />
      <div className={`${styles.panel} ${styles.panelBottom}`} ref={panelBottomRef} />
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.content} ref={contentRef}>
        <span className={styles.ghost} ref={ghostRef} aria-hidden="true">
          &ldquo;
        </span>
        <div className={styles.stage}>
          {slides.map((slide, i) => (
            <div
              key={slide.headline}
              className={styles.slide}
              ref={(el) => {
                if (el) slideRefs.current[i] = el;
              }}
            >
              <h2 className={styles.headline}>{slide.headline}</h2>
              <p className={styles.subline}>{slide.subline}</p>
            </div>
          ))}
        </div>
        <div ref={chromeRef}>
          <div className={styles.progress}>
            {slides.map((slide, i) => (
              <span
                key={slide.headline}
                className={`${styles.tick} ${i <= index ? styles.tickActive : ''}`}
              />
            ))}
          </div>
          <span className={styles.cue} aria-hidden="true" />
        </div>
        <button className={styles.skip} type="button">
          Skip
        </button>
      </div>
    </div>
  );
}

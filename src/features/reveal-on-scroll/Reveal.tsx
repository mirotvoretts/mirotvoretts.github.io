import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useReveal } from '@shared/lib';
import styles from './Reveal.module.css';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}

export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
}: RevealProps) {
  const ref = useReveal<HTMLElement>();
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties;
  return (
    <Tag
      ref={ref}
      className={[styles.reveal, className].filter(Boolean).join(' ')}
      style={style}
    >
      {children}
    </Tag>
  );
}

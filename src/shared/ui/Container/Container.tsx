import type { ElementType, ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  narrow?: boolean;
  className?: string;
}

export function Container({
  children,
  as: Tag = 'div',
  narrow = false,
  className = '',
}: ContainerProps) {
  const classes = [styles.container, narrow ? styles.narrow : '', className]
    .filter(Boolean)
    .join(' ');
  return <Tag className={classes}>{children}</Tag>;
}

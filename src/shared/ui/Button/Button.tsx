import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  to?: string;
}

export function Button({
  children,
  variant = 'primary',
  withArrow = false,
  to,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(' ');
  const inner = (
    <>
      {children}
      {withArrow && (
        <span className={styles.arrow} aria-hidden="true">
          &rarr;
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to}>
        {inner}
      </Link>
    );
  }

  return (
    <a className={classes} {...rest}>
      {inner}
    </a>
  );
}

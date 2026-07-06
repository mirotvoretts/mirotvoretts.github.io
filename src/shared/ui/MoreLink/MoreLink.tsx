import { Link } from 'react-router-dom';
import styles from './MoreLink.module.css';

interface MoreLinkProps {
  to: string;
  children: string;
}

export function MoreLink({ to, children }: MoreLinkProps) {
  return (
    <Link className={styles.more} to={to}>
      {children}
      <span className={styles.arrow} aria-hidden="true">
        &rarr;
      </span>
    </Link>
  );
}

import type { SocialLink } from './model';
import styles from './SocialLink.module.css';

interface SocialLinkRowProps {
  link: SocialLink;
}

export function SocialLinkRow({ link }: SocialLinkRowProps) {
  const external = link.href.startsWith('http');
  return (
    <a
      className={styles.row}
      href={link.href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <span className={styles.label}>{link.label}</span>
      <span className={styles.handle}>
        {link.handle}
        <span className={styles.arrow} aria-hidden="true">
          &#8599;
        </span>
      </span>
    </a>
  );
}

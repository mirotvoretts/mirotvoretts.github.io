import { Container } from '@shared/ui';
import { site } from '@shared/config';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.row}>
          <span className={styles.name}>{site.name}</span>
          <span className={styles.meta}>
            {site.location} &middot; {year}
          </span>
        </div>
      </Container>
    </footer>
  );
}

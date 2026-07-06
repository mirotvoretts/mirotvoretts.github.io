import styles from './ComingSoon.module.css';

interface ComingSoonProps {
  note?: string;
}

export function ComingSoon({ note }: ComingSoonProps) {
  return (
    <div className={styles.wrap}>
      <span className={styles.label}>In preparation</span>
      <p className={styles.headline}>Coming soon</p>
      {note && <p className={styles.note}>{note}</p>}
      <span className={styles.track} aria-hidden="true" />
    </div>
  );
}

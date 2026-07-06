import { useEffect, useState } from 'react';
import { site } from '@shared/config';
import styles from './CopyEmail.module.css';

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button className={styles.button} type="button" onClick={copy}>
      {site.email}
      <span className={styles.state}>{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

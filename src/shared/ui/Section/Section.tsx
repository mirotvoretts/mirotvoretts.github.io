import type { ReactNode } from 'react';
import { Container } from '../Container';
import { SectionHeading } from '../SectionHeading';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  title: string;
  lead?: string;
  kicker?: string;
  bordered?: boolean;
  children: ReactNode;
}

export function Section({
  id,
  title,
  lead,
  kicker,
  bordered = true,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={[styles.section, bordered ? styles.bordered : '']
        .filter(Boolean)
        .join(' ')}
    >
      <Container>
        <div className={styles.header}>
          <SectionHeading title={title} lead={lead} kicker={kicker} />
        </div>
        {children}
      </Container>
    </section>
  );
}

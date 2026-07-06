import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  title: string;
  lead?: string;
  kicker?: string;
  id?: string;
}

export function SectionHeading({ title, lead, kicker, id }: SectionHeadingProps) {
  return (
    <div className={styles.wrap}>
      {kicker && <span className={styles.index}>{kicker}</span>}
      <h2 className={styles.title} id={id}>
        {title}
      </h2>
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  );
}

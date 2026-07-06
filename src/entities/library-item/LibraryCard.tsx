import { Link } from 'react-router-dom';
import { routes } from '@shared/config';
import { kindLabel, type LibraryItem } from './model';
import styles from './LibraryCard.module.css';

interface LibraryCardProps {
  item: LibraryItem;
}

export function LibraryCard({ item }: LibraryCardProps) {
  return (
    <Link className={styles.card} to={routes.libraryItem(item.slug)}>
      <div className={styles.coverFrame}>
        {item.cover ? (
          <img
            className={styles.coverImage}
            src={item.cover}
            alt={`${item.title} by ${item.author}`}
            loading="lazy"
          />
        ) : (
          <div className={styles.coverText}>
            <span className={styles.coverKind}>{kindLabel[item.kind]}</span>
            <div>
              <h3 className={styles.coverTitle}>{item.title}</h3>
              <p className={styles.coverAuthor}>{item.author}</p>
            </div>
          </div>
        )}
      </div>
      <div className={styles.info}>
        <div>
          <span className={styles.title}>{item.title}</span>
          <p className={styles.author}>{item.author}</p>
        </div>
        <span className={styles.status}>{item.status}</span>
      </div>
    </Link>
  );
}

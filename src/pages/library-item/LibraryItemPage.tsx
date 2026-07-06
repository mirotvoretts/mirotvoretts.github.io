import { Link, Navigate, useParams } from 'react-router-dom';
import { Container, Prose, Tag } from '@shared/ui';
import { routes } from '@shared/config';
import { getLibraryItem, kindLabel } from '@entities/library-item';
import styles from './LibraryItemPage.module.css';

export function LibraryItemPage() {
  const { slug } = useParams();
  const item = slug ? getLibraryItem(slug) : undefined;

  if (!item) return <Navigate to="/" replace />;

  return (
    <main className={styles.page}>
      <Container narrow>
        <Link className={styles.back} to={routes.library}>
          <span aria-hidden="true">&larr;</span> Library
        </Link>
        <div className={styles.head}>
          <div className={styles.coverFrame}>
            {item.cover ? (
              <img
                className={styles.coverImage}
                src={item.cover}
                alt={`${item.title} by ${item.author}`}
              />
            ) : (
              <div className={styles.coverText}>
                <span className={styles.coverKind}>{kindLabel[item.kind]}</span>
                <h2 className={styles.coverTitle}>{item.title}</h2>
              </div>
            )}
          </div>
          <div className={styles.info}>
            <span className={styles.kind}>{kindLabel[item.kind]}</span>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.author}>{item.author}</p>
            <div className={styles.attrs}>
              <span className={styles.status}>{item.status}</span>
              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
            <p className={styles.review}>{item.review}</p>
          </div>
        </div>
        {item.quote && <blockquote className={styles.quote}>{item.quote}</blockquote>}
        {item.notes && (
          <div>
            <p className={styles.notesLabel}>Notes</p>
            <Prose content={item.notes} />
          </div>
        )}
      </Container>
    </main>
  );
}

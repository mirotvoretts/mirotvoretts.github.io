import { Link, Navigate, useParams } from 'react-router-dom';
import { Container, Prose } from '@shared/ui';
import { routes } from '@shared/config';
import { getPost } from '@entities/post';
import styles from './BlogPostPage.module.css';

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  if (!post) return <Navigate to="/" replace />;

  return (
    <main className={styles.article}>
      <Container narrow>
        <Link className={styles.back} to={routes.writing}>
          <span aria-hidden="true">&larr;</span> Writing
        </Link>
        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.topic}>{post.topic}</span>
            <span className={styles.date}>{formatDate(post.date)}</span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.excerpt}>{post.excerpt}</p>
        </header>
        <Prose content={post.body} />
      </Container>
    </main>
  );
}

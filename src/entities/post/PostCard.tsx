import { Link } from 'react-router-dom';
import { routes } from '@shared/config';
import type { Post } from './model';
import styles from './PostCard.module.css';

interface PostCardProps {
  post: Post;
}

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
  }).format(date);
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link className={styles.card} to={routes.writingPost(post.slug)}>
      <div className={styles.meta}>
        <span className={styles.topic}>{post.topic}</span>
        <span className={styles.date}>{formatDate(post.date)}</span>
      </div>
      <article className={styles.body}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
      </article>
    </Link>
  );
}

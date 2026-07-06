import { loadCollection } from '@shared/lib';
import type { Post, PostFrontmatter } from './model';

const modules = import.meta.glob('/content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export const posts: Post[] = loadCollection<PostFrontmatter>(modules)
  .map((doc) => ({ slug: doc.slug, body: doc.body, ...doc.frontmatter }))
  .sort((a, b) => String(b.date).localeCompare(String(a.date)));

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

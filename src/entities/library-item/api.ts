import { loadCollection } from '@shared/lib';
import type { LibraryFrontmatter, LibraryItem } from './model';

const modules = import.meta.glob('/content/library/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export const libraryItems: LibraryItem[] = loadCollection<LibraryFrontmatter>(
  modules,
).map((doc) => ({ slug: doc.slug, notes: doc.body, ...doc.frontmatter }));

export function getLibraryItem(slug: string): LibraryItem | undefined {
  return libraryItems.find((item) => item.slug === slug);
}

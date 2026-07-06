export type LibraryKind = 'book' | 'course' | 'paper';
export type ReadingStatus = 'Reading' | 'Finished' | 'Revisiting' | 'Queued';

export interface LibraryFrontmatter {
  title: string;
  author: string;
  kind: LibraryKind;
  status: ReadingStatus;
  cover?: string;
  tags: string[];
  quote?: string;
  review: string;
}

export interface LibraryItem extends LibraryFrontmatter {
  slug: string;
  notes: string;
}

export const kindLabel: Record<LibraryKind, string> = {
  book: 'Book',
  course: 'Course',
  paper: 'Paper',
};

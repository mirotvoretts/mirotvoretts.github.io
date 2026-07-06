export interface PostFrontmatter {
  title: string;
  topic: string;
  date: string;
  excerpt: string;
}

export interface Post extends PostFrontmatter {
  slug: string;
  body: string;
}

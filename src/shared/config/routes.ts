export const routes = {
  home: '/',
  projects: '/projects',
  writing: '/writing',
  writingPost: (slug: string) => `/writing/${slug}`,
  library: '/library',
  libraryItem: (slug: string) => `/library/${slug}`,
} as const;

export const sections = {
  hero: 'top',
  projects: 'projects',
  writing: 'writing',
  library: 'library',
  contact: 'contact',
} as const;

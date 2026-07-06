export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: 'Ilya Panov',
  initials: 'IP',
  role: 'Software Engineer',
  tagline: 'Building reliable software with C++ and Rust.',
  location: 'Saint-Petersburg',
  portrait: '/portrait.jpg',
  intro:
    'I build systems software in C++ and Rust. Most of my attention goes to the parts nobody sees: memory layout, concurrency, and the failure modes that only show up under load.',
  email: 'panoffilya@gmail.com',
  social: {
    github: 'https://github.com/mirotvoretts',
    linkedin: 'https://www.linkedin.com/in/illidvn',
    telegram: 'https://t.me/illidvn',
  },
} as const;

export const navItems: NavItem[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'Writing', href: '/writing' },
  { label: 'Library', href: '/library' },
];

import { site } from '@shared/config';

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
}

function handleFromUrl(url: string): string {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', handle: handleFromUrl(site.social.github), href: site.social.github },
  {
    label: 'LinkedIn',
    handle: handleFromUrl(site.social.linkedin),
    href: site.social.linkedin,
  },
  {
    label: 'Telegram',
    handle: handleFromUrl(site.social.telegram),
    href: site.social.telegram,
  },
  { label: 'Email', handle: site.email, href: `mailto:${site.email}` },
];

import { ComingSoon, MoreLink, Section } from '@shared/ui';
import { sections } from '@shared/config';
import { posts, PostCard } from '@entities/post';
import { Reveal } from '@features/reveal-on-scroll';
import styles from './BlogSection.module.css';

interface BlogSectionProps {
  limit?: number;
  moreHref?: string;
  bordered?: boolean;
  kicker?: string;
  comingSoon?: boolean;
}

export function BlogSection({
  limit,
  moreHref,
  bordered = true,
  kicker,
  comingSoon = false,
}: BlogSectionProps) {
  const shown = limit ? posts.slice(0, limit) : posts;
  return (
    <Section
      id={sections.writing}
      kicker={kicker}
      title="Writing"
      lead={
        comingSoon
          ? undefined
          : 'Notes from the low levels: Rust, distributed systems, low-latency design, and the infrastructure behind trading systems.'
      }
      bordered={bordered}
    >
      {comingSoon ? (
        <ComingSoon note="Essays on Rust, distributed systems, and low-latency design are in draft. The first ones publish soon." />
      ) : (
        <>
          <div className={styles.list}>
            {shown.map((post, index) => (
              <Reveal key={post.slug} delay={index * 60}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
          {moreHref && <MoreLink to={moreHref}>All writing</MoreLink>}
        </>
      )}
    </Section>
  );
}

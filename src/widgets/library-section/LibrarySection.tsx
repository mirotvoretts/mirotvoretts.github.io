import { ComingSoon, MoreLink, Section } from '@shared/ui';
import { sections } from '@shared/config';
import { libraryItems, LibraryCard } from '@entities/library-item';
import { Reveal } from '@features/reveal-on-scroll';
import styles from './LibrarySection.module.css';

interface LibrarySectionProps {
  limit?: number;
  moreHref?: string;
  bordered?: boolean;
  kicker?: string;
  comingSoon?: boolean;
}

export function LibrarySection({
  limit,
  moreHref,
  bordered = true,
  kicker,
  comingSoon = false,
}: LibrarySectionProps) {
  const shown = limit ? libraryItems.slice(0, limit) : libraryItems;
  return (
    <Section
      id={sections.library}
      kicker={kicker}
      title="Library"
      lead={
        comingSoon
          ? undefined
          : 'The books, courses, and papers I return to. Each entry carries my notes, the passages I marked, and why it still earns shelf space.'
      }
      bordered={bordered}
    >
      {comingSoon ? (
        <ComingSoon note="The shelf of books, courses, and papers I return to is being catalogued. It opens soon." />
      ) : (
        <>
          <div className={styles.shelf}>
            {shown.map((item, index) => (
              <Reveal key={item.slug} delay={index * 50}>
                <LibraryCard item={item} />
              </Reveal>
            ))}
          </div>
          {moreHref && <MoreLink to={moreHref}>Enter the library</MoreLink>}
        </>
      )}
    </Section>
  );
}

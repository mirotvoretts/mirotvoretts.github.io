import { ComingSoon, MoreLink, Section } from '@shared/ui';
import { sections } from '@shared/config';
import { projects, ProjectCard } from '@entities/project';
import { Reveal } from '@features/reveal-on-scroll';
import styles from './ProjectsSection.module.css';

interface ProjectsSectionProps {
  limit?: number;
  moreHref?: string;
  bordered?: boolean;
  kicker?: string;
  comingSoon?: boolean;
}

export function ProjectsSection({
  limit,
  moreHref,
  bordered = true,
  kicker,
  comingSoon = false,
}: ProjectsSectionProps) {
  const shown = limit ? projects.slice(0, limit) : projects;
  return (
    <Section
      id={sections.projects}
      kicker={kicker}
      title="Projects"
      lead={
        comingSoon
          ? undefined
          : 'Systems I have designed and shipped, from the data structures up. Each one exists to answer a question I could not answer any other way.'
      }
      bordered={bordered}
    >
      {comingSoon ? (
        <ComingSoon note="Selected systems work is being written up with the care it deserves. It will land here shortly." />
      ) : (
        <>
          <div className={styles.list}>
            {shown.map((project, index) => (
              <Reveal key={project.title} delay={index * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          {moreHref && <MoreLink to={moreHref}>All projects</MoreLink>}
        </>
      )}
    </Section>
  );
}

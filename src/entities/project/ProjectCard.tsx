import { Button, Tag } from '@shared/ui';
import type { Project } from './model';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.row}>
      <div className={styles.meta}>
        <div className={styles.head}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={styles.year}>{project.year}</span>
        </div>
        <div className={styles.tech}>
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
      <div className={styles.body}>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.arch}>
          <span className={styles.archLabel}>Architecture</span>
          <p className={styles.archBody}>{project.architecture}</p>
        </div>
        <div className={styles.foot}>
          <Button
            href={project.repository}
            variant="ghost"
            withArrow
            target="_blank"
            rel="noreferrer"
          >
            Repository
          </Button>
        </div>
      </div>
    </article>
  );
}

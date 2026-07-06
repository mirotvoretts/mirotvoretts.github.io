import { Button, Container } from '@shared/ui';
import { routes, sections, site } from '@shared/config';
import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section className={styles.hero} id={sections.hero}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.content} data-hero>
            <span className={styles.role}>{site.role}</span>
            <h1 className={styles.name}>{site.name}</h1>
            <p className={styles.tagline}>{site.tagline}</p>
            <p className={styles.intro}>{site.intro}</p>
            <div className={styles.actions}>
              <Button to={routes.projects}>Projects</Button>
              <Button to={routes.writing} variant="secondary">
                Writing
              </Button>
              <Button
                href={site.social.github}
                variant="ghost"
                withArrow
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Button>
            </div>
          </div>
          <div className={styles.portraitFrame}>
            {site.portrait ? (
              <img
                className={styles.portraitImage}
                src={site.portrait}
                alt={`Portrait of ${site.name}`}
              />
            ) : (
              <div className={styles.portraitPlaceholder}>
                <span className={styles.portraitCaption}>Portrait</span>
                <span className={styles.portraitInitials}>{site.initials}</span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

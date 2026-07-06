import { Container } from '@shared/ui';
import { sections } from '@shared/config';
import { socialLinks, SocialLinkRow } from '@entities/social-link';
import { CopyEmail } from '@features/copy-email';
import { Reveal } from '@features/reveal-on-scroll';
import styles from './ContactSection.module.css';

export function ContactSection() {
  return (
    <section className={styles.section} id={sections.contact}>
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.statement}>
            <h2 className={styles.title}>Contact</h2>
            <p className={styles.note}>
              I am simply open to conversation and new acquaintances. Ask and I
              will send my CV by direct message.
            </p>
            <div className={styles.copy}>
              <CopyEmail />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className={styles.links}>
              {socialLinks.map((link) => (
                <SocialLinkRow key={link.label} link={link} />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

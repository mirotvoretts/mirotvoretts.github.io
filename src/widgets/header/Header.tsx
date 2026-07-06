import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container } from '@shared/ui';
import { navItems, site } from '@shared/config';
import styles from './Header.module.css';

export function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={styles.header} data-solid={solid}>
      <Container>
        <div className={styles.bar}>
          <Link className={styles.brand} to="/">
            {site.name}
            <span className={styles.brandRole}>{site.role}</span>
          </Link>
          <nav className={styles.nav}>
            <span className={styles.anchors}>
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  className={({ isActive }) =>
                    [styles.link, isActive ? styles.active : ''].join(' ')
                  }
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              ))}
            </span>
            <a
              className={`${styles.link} ${styles.github}`}
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}

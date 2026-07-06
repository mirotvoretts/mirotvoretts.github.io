import { useEffect } from 'react';
import { ScrollTrigger } from '@shared/lib';
import { Intro } from '@widgets/intro';
import { HeroSection } from '@widgets/hero-section';
import { ProjectsSection } from '@widgets/projects-section';
import { BlogSection } from '@widgets/blog-section';
import { LibrarySection } from '@widgets/library-section';
import { ContactSection } from '@widgets/contact-section';

export function HomePage() {
  useEffect(() => {
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      <Intro />
      <main>
        <HeroSection />
        <ProjectsSection comingSoon kicker="Selected work" />
        <BlogSection comingSoon />
        <LibrarySection comingSoon />
        <ContactSection />
      </main>
    </>
  );
}

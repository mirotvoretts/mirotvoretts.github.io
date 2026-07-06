import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';
import { HomePage } from '@pages/home';
import { ProjectsPage } from '@pages/projects';
import { WritingPage } from '@pages/writing';
import { BlogPostPage } from '@pages/blog-post';
import { LibraryPage } from '@pages/library';
import { LibraryItemPage } from '@pages/library-item';
import { ScrollToTop, SmoothScroll } from './providers';

export function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/writing/:slug" element={<BlogPostPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/library/:slug" element={<LibraryItemPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </SmoothScroll>
    </BrowserRouter>
  );
}

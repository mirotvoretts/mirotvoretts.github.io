import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './Prose.module.css';

interface ProseProps {
  content: string;
}

export function Prose({ content }: ProseProps) {
  return (
    <div className={styles.prose}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

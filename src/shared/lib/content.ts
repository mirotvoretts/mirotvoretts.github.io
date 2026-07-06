import yaml from 'js-yaml';

export interface ParsedDocument<T> {
  slug: string;
  frontmatter: T;
  body: string;
}

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

function slugFromPath(path: string): string {
  const file = path.split('/').pop() ?? path;
  return file.replace(/\.md$/, '');
}

function parse<T>(path: string, raw: string): ParsedDocument<T> {
  const match = raw.match(FRONTMATTER);
  if (!match) {
    return { slug: slugFromPath(path), frontmatter: {} as T, body: raw.trim() };
  }
  const frontmatter = (yaml.load(match[1], { schema: yaml.JSON_SCHEMA }) ??
    {}) as T;
  return { slug: slugFromPath(path), frontmatter, body: match[2].trim() };
}

export function loadCollection<T>(
  modules: Record<string, string>,
): ParsedDocument<T>[] {
  return Object.entries(modules).map(([path, raw]) => parse<T>(path, raw));
}

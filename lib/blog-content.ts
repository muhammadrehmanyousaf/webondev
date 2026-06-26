import fs from 'fs';
import path from 'path';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

// Returns the refreshed Markdown body for a post if content/blog/<slug>.md exists,
// otherwise null (the page then falls back to the legacy HTML in blog-data.ts).
export function loadBlogBody(slug: string): string | null {
  try {
    let raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), 'utf8');
    // strip optional YAML frontmatter
    raw = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
    return raw.trim() || null;
  } catch {
    return null;
  }
}

export function hasRefreshedBody(slug: string): boolean {
  try {
    return fs.existsSync(path.join(BLOG_DIR, `${slug}.md`));
  } catch {
    return false;
  }
}

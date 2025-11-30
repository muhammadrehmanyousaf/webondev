export const toSlug = (value: string): string => {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

export const fromSlugMatch = (slug: string, candidates: string[]): string | undefined => {
  const normalized = slug.toLowerCase();
  const map = new Map<string, string>();
  for (const c of candidates) {
    map.set(toSlug(c), c);
  }
  return map.get(normalized);
};



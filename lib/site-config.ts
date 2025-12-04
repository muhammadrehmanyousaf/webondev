export function getBaseUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (explicit && explicit.trim().length > 0) {
    return explicit.replace(/\/+$/, '');
  }
  // Always default to the live domain unless explicitly overridden
  return 'https://www.webondev.com';
}



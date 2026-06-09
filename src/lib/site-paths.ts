export function buildPromptPath(baseUrl: string, slug: string): string {
  const normalized = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${normalized}${slug}/`;
}

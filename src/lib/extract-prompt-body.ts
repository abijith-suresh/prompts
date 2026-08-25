const FRONTMATTER_PATTERN = /^---\r?\n[\s\S]*?\r?\n---\r?\n/;
const PROMPT_BODY_PATTERN = /\n---\r?\n([\s\S]*?)\r?\n---\s*$/;

export function extractPromptBody(markdown: string): string | null {
  const withoutFrontmatter = markdown.replace(FRONTMATTER_PATTERN, "");
  const match = withoutFrontmatter.match(PROMPT_BODY_PATTERN);

  if (!match) {
    return null;
  }

  return match[1].trim();
}

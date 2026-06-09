export const PROMPTS_REPOSITORY = 'abijith-suresh/prompts';

export interface PromptSummary {
  slug: string;
  name: string;
  description: string;
  sourceUrl: string;
}

export function directorySlugFromEntry(entry: string): string {
  return entry.split('/')[0] ?? entry;
}

export function buildPromptSummaries(
  definitions: { id: string; data: { name: string; description: string } }[],
  repository = PROMPTS_REPOSITORY,
): PromptSummary[] {
  return definitions
    .map((definition) => ({
      slug: definition.id,
      name: definition.data.name,
      description: definition.data.description,
      sourceUrl: `https://github.com/${repository}/tree/main/prompts/${definition.id}`,
    }))
    .sort((left, right) => left.name.localeCompare(right.name));
}

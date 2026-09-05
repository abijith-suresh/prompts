import { SITE } from "@/consts";

export const PROMPTS_REPOSITORY = SITE.repository;

export interface PromptSummary {
  slug: string;
  name: string;
  description: string;
  featured: boolean;
  sourceUrl: string;
}

export function directorySlugFromEntry(entry: string): string {
  return entry.split("/")[0] ?? entry;
}

export function buildRepositoryUrl(repository: string = PROMPTS_REPOSITORY) {
  return `https://github.com/${repository}`;
}

export function buildPromptSourceUrl(repository: string, slug: string): string {
  return `${buildRepositoryUrl(repository)}/tree/main/prompts/${slug}`;
}

export function buildPromptSummaries(
  definitions: {
    id: string;
    data: {
      name: string;
      description: string;
      metadata?: Record<string, unknown>;
    };
  }[],
  repository: string = PROMPTS_REPOSITORY
): PromptSummary[] {
  return definitions
    .map((definition) => ({
      slug: definition.id,
      name: definition.data.name,
      description: definition.data.description,
      featured: definition.data.metadata?.featured === true,
      sourceUrl: buildPromptSourceUrl(repository, definition.id),
    }))
    .sort((left, right) => left.name.localeCompare(right.name));
}

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

import { directorySlugFromEntry } from './lib/prompt-catalog';

const promptDefinitions = defineCollection({
  loader: glob({
    base: './prompts',
    pattern: '*/PROMPT.md',
    generateId: ({ entry }) => directorySlugFromEntry(entry),
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  promptDefinitions,
};

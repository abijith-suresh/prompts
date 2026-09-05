import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

import { directorySlugFromEntry } from "@/lib/prompt-catalog";

const promptDefinitions = defineCollection({
  loader: glob({
    base: "./prompts",
    pattern: "*/PROMPT.md",
    generateId: ({ entry }) => directorySlugFromEntry(entry),
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    // The prompts are plain copy-paste files; site curation flags live here,
    // never as new top-level frontmatter keys that could break the format.
    metadata: z.looseObject({ featured: z.boolean().optional() }).optional(),
  }),
});

export const collections = {
  promptDefinitions,
};

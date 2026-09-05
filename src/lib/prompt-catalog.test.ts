import { describe, expect, it } from "vitest";
import {
  buildPromptSourceUrl,
  buildPromptSummaries,
  directorySlugFromEntry,
} from "./prompt-catalog";

describe("directorySlugFromEntry", () => {
  it("uses the first path segment as the prompt slug", () => {
    expect(directorySlugFromEntry("hello-world/PROMPT.md")).toBe("hello-world");
  });

  it("falls back to the entry when no path separator is present", () => {
    expect(directorySlugFromEntry("PROMPT.md")).toBe("PROMPT.md");
  });
});

describe("buildPromptSourceUrl", () => {
  it("builds the source URL for a prompt directory", () => {
    expect(buildPromptSourceUrl("owner/repo", "hello-world")).toBe(
      "https://github.com/owner/repo/tree/main/prompts/hello-world"
    );
  });
});

describe("buildPromptSummaries", () => {
  it("sorts prompts by display name, builds source URLs, and flags featured prompts", () => {
    const summaries = buildPromptSummaries(
      [
        {
          id: "z-prompt",
          data: {
            name: "Zed",
            description: "Last",
            metadata: { featured: true },
          },
        },
        { id: "a-prompt", data: { name: "Alpha", description: "First" } },
      ],
      "owner/repo"
    );

    expect(summaries).toEqual([
      {
        slug: "a-prompt",
        name: "Alpha",
        description: "First",
        featured: false,
        sourceUrl: "https://github.com/owner/repo/tree/main/prompts/a-prompt",
      },
      {
        slug: "z-prompt",
        name: "Zed",
        description: "Last",
        featured: true,
        sourceUrl: "https://github.com/owner/repo/tree/main/prompts/z-prompt",
      },
    ]);
  });
});

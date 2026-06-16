import { describe, expect, it } from "vitest";
import { buildPromptSummaries, directorySlugFromEntry } from "./prompt-catalog";

describe("directorySlugFromEntry", () => {
  it("uses the first path segment as the prompt slug", () => {
    expect(directorySlugFromEntry("hello-world/PROMPT.md")).toBe("hello-world");
  });

  it("falls back to the entry when no path separator is present", () => {
    expect(directorySlugFromEntry("PROMPT.md")).toBe("PROMPT.md");
  });
});

describe("buildPromptSummaries", () => {
  it("sorts prompts by display name and builds source URLs", () => {
    const summaries = buildPromptSummaries(
      [
        { id: "z-prompt", data: { name: "Zed", description: "Last" } },
        { id: "a-prompt", data: { name: "Alpha", description: "First" } },
      ],
      "owner/repo"
    );

    expect(summaries).toEqual([
      {
        slug: "a-prompt",
        name: "Alpha",
        description: "First",
        sourceUrl: "https://github.com/owner/repo/tree/main/prompts/a-prompt",
      },
      {
        slug: "z-prompt",
        name: "Zed",
        description: "Last",
        sourceUrl: "https://github.com/owner/repo/tree/main/prompts/z-prompt",
      },
    ]);
  });
});

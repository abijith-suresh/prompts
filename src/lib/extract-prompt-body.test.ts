import { describe, expect, it } from "vitest";
import { extractPromptBody } from "./extract-prompt-body";

describe("extractPromptBody", () => {
  it("returns the copy-ready prompt between the document separators", () => {
    const markdown = [
      "---",
      "name: Example",
      "description: An example prompt.",
      "---",
      "",
      "# Example",
      "",
      "Introductory context.",
      "",
      "---",
      "",
      "Use this prompt.",
      "",
      "---",
      "",
    ].join("\n");

    expect(extractPromptBody(markdown)).toBe("Use this prompt.");
  });

  it("returns null when a prompt body separator is missing", () => {
    expect(extractPromptBody("---\nname: Example\n---\n\n# Example\n")).toBeNull();
  });
});

import { describe, expect, it } from "vitest";
import { buildPromptPath } from "./site-paths";

describe("buildPromptPath", () => {
  it("builds a trailing-slash route from a base URL and slug", () => {
    expect(buildPromptPath("/prompts/", "hello-world")).toBe("/prompts/hello-world/");
  });

  it("normalizes a base URL without a trailing slash", () => {
    expect(buildPromptPath("/prompts", "hello-world")).toBe("/prompts/hello-world/");
  });
});

import { describe, expect, it } from "vitest";
import { buildAllPath, buildAssetPath, buildCanonicalUrl, buildPromptPath } from "@/lib/site-paths";

describe("buildAssetPath", () => {
  it("keeps root-hosted assets at the root", () => {
    expect(buildAssetPath("/", "fonts/IBMPlexMono-Regular.woff2")).toBe(
      "/fonts/IBMPlexMono-Regular.woff2"
    );
  });

  it("normalizes a base path before appending an asset", () => {
    expect(buildAssetPath("/docs", "/fonts/site.woff2")).toBe("/docs/fonts/site.woff2");
  });
});

describe("buildPromptPath", () => {
  it("builds a root-hosted trailing-slash route", () => {
    expect(buildPromptPath("/", "clarify")).toBe("/clarify/");
  });

  it("normalizes a base path and slug without trailing slashes", () => {
    expect(buildPromptPath("/catalog", "/clarify/")).toBe("/catalog/clarify/");
  });

  it("returns the site root for an empty slug", () => {
    expect(buildPromptPath("/", "")).toBe("/");
  });
});

describe("buildAllPath", () => {
  it("builds a root-hosted all-prompts route", () => {
    expect(buildAllPath("/")).toBe("/all/");
  });
});

describe("buildCanonicalUrl", () => {
  it("normalizes the route and preserves the trailing slash", () => {
    expect(buildCanonicalUrl("/clarify", "https://example.com")).toBe(
      "https://example.com/clarify/"
    );
  });

  it("returns the site root for an empty path", () => {
    expect(buildCanonicalUrl("", "https://example.com")).toBe("https://example.com/");
  });
});

import { describe, expect, it } from "vitest";
import {
  buildOgImagePath,
  buildPromptPath,
  buildSiteRootPath,
  getOgImagePath,
  normalizePagePath,
} from "./site-paths";

describe("buildSiteRootPath", () => {
  it("keeps the root base path root-safe", () => {
    expect(buildSiteRootPath("/")).toBe("/");
  });

  it("normalizes a non-root base path", () => {
    expect(buildSiteRootPath("/catalog")).toBe("/catalog/");
  });
});

describe("buildPromptPath", () => {
  it("builds a trailing-slash route at the site root", () => {
    expect(buildPromptPath("/", "hello-world")).toBe("/hello-world/");
  });

  it("normalizes a base path and slug without trailing slashes", () => {
    expect(buildPromptPath("/catalog", "/hello-world/")).toBe("/catalog/hello-world/");
  });
});

describe("normalizePagePath", () => {
  it("normalizes the home path and query strings", () => {
    expect(normalizePagePath("/")).toBe("/");
    expect(normalizePagePath("/hello-world?source=share")).toBe("/hello-world/");
  });
});

describe("OG image paths", () => {
  it("uses index for the home image", () => {
    expect(getOgImagePath("/")).toBe("/og/index.png");
  });

  it("maps a prompt route to its static image", () => {
    expect(getOgImagePath("/hello-world/")).toBe("/og/hello-world.png");
    expect(buildOgImagePath("hello-world")).toBe("/og/hello-world.png");
  });
});

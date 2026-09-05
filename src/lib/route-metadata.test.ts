import { describe, expect, it } from "vitest";
import { buildOgRoutes, buildPageTitle, getOgImagePath } from "@/lib/route-metadata";

describe("buildPageTitle", () => {
  it("uses the bare domain for the home page", () => {
    expect(buildPageTitle()).toBe("prompts.abijith.sh");
  });

  it("joins a page name with the domain using the middle-dot separator", () => {
    expect(buildPageTitle("all prompts")).toBe("all prompts · prompts.abijith.sh");
  });

  it("builds detail titles as the prompt name and domain", () => {
    expect(buildPageTitle("clarify")).toBe("clarify · prompts.abijith.sh");
  });

  it("builds the 404 title", () => {
    expect(buildPageTitle("page not found")).toBe("page not found · prompts.abijith.sh");
  });
});

describe("getOgImagePath", () => {
  it("maps the catalog root to its static image", () => {
    expect(getOgImagePath("/")).toBe("/og/index.png");
  });

  it("maps a prompt route to its static image", () => {
    expect(getOgImagePath("/clarify")).toBe("/og/clarify.png");
  });

  it("uses the catalog image for the noindex 404 page", () => {
    expect(getOgImagePath("/404/")).toBe("/og/index.png");
  });

  it("maps the all-prompts route to its own image", () => {
    expect(getOgImagePath("/all/")).toBe("/og/all.png");
  });
});

describe("buildOgRoutes", () => {
  it("creates catalog, all-prompts, and per-prompt routes", () => {
    expect(
      buildOgRoutes([
        { id: "clarify", data: { name: "clarify", description: "Rewrite rough requests." } },
      ])
    ).toEqual([
      {
        slug: "index",
        title: "prompts",
        description:
          "Browse reusable AI prompts for coding agents and chat applications. Copy what you need.",
        label: "catalog",
      },
      {
        slug: "all",
        title: "all prompts",
        description:
          "Every reusable AI prompt in the collection — for coding agents and chat apps.",
        label: "catalog",
      },
      {
        slug: "clarify",
        title: "clarify",
        description: "Rewrite rough requests.",
        label: "prompt",
      },
    ]);
  });
});

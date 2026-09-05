import { describe, expect, it } from "vitest";
import { renderOgPng } from "./og";

describe("renderOgPng", () => {
  it("renders a 1200 by 630 PNG from catalog metadata", async () => {
    const png = await renderOgPng({
      slug: "index",
      title: "prompts",
      description: "Reusable prompts for coding agents.",
      label: "catalog",
    });

    expect(png.subarray(0, 8)).toEqual(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
    expect(png.readUInt32BE(16)).toBe(1200);
    expect(png.readUInt32BE(20)).toBe(630);
  });
});

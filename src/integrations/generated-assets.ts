import type { AstroIntegration } from "astro";
import { generateSiteIcons } from "../lib/og";

export default function generatedAssets(): AstroIntegration {
  return {
    name: "generated-assets",
    hooks: {
      "astro:config:setup": async ({ command, logger }) => {
        if (command !== "dev" && command !== "build") return;

        await generateSiteIcons();
        logger.info("Refreshed generated site icons.");
      },
    },
  };
}

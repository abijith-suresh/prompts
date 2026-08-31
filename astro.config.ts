import { satteri } from "@astrojs/markdown-satteri";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import expressiveCode from "satteri-expressive-code";
import generatedAssets from "./src/integrations/generated-assets";
import { removeLeadingHeading } from "./src/lib/remove-leading-heading";

export default defineConfig({
  site: "https://prompts-kappa-six.vercel.app",
  base: "/",
  output: "static",
  trailingSlash: "always",
  markdown: {
    syntaxHighlight: false,
    processor: satteri({
      mdastPlugins: [removeLeadingHeading],
      hastPlugins: [
        expressiveCode({
          themes: ["github-dark"],
          defaultProps: {
            wrap: true,
          },
          styleOverrides: {
            codeFontSize: "0.875rem",
            borderColor: "var(--color-border)",
            borderRadius: "0",
            codeBackground: "color-mix(in oklch, var(--color-text) 6%, transparent)",
            frames: {
              editorActiveTabForeground: "var(--color-muted)",
              editorActiveTabBackground: "color-mix(in oklch, var(--color-text) 6%, transparent)",
              editorActiveTabIndicatorBottomColor: "transparent",
              editorActiveTabIndicatorTopColor: "transparent",
              editorTabBorderRadius: "0",
              editorTabBarBackground: "transparent",
              editorTabBarBorderBottomColor: "transparent",
              frameBoxShadowCssValue: "none",
              terminalBackground: "color-mix(in oklch, var(--color-text) 6%, transparent)",
              terminalTitlebarBackground: "transparent",
              terminalTitlebarBorderBottomColor: "transparent",
              terminalTitlebarForeground: "var(--color-muted)",
            },
          },
        }),
      ],
    }),
  },
  integrations: [generatedAssets(), sitemap()],
});

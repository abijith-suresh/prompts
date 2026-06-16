import { satteri } from "@astrojs/markdown-satteri";
import { defineConfig } from "astro/config";
import expressiveCode from "satteri-expressive-code";

export default defineConfig({
  site: "https://abijith-suresh.github.io",
  base: "/prompts",
  trailingSlash: "always",
  markdown: {
    syntaxHighlight: false,
    processor: satteri({
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
});

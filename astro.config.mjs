import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://abijith-suresh.github.io",
  base: "/prompts",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});

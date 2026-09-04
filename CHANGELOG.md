# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed — 2026-09-04

- Adopt the Dusk Aurora design system across the site: OKLCH violet palette,
  Bricolage Grotesque display + Geist body typography, a fixed breathing aurora
  glow, site topbar and footer chrome, card-based prompt list, glowing-period
  hero treatment, and staggered rise reveals (disabled under
  `prefers-reduced-motion`).
- Regenerate OG images and favicons with the Dusk Aurora palette.
- Translate the Dusk Aurora intent to prompt detail pages: fix the copy block
  collapsing to an empty panel (the status line claimed the flex row, sizing
  the prompt text to zero width) by showing the full prompt body with a
  compact corner copy affordance, restyle markdown rules as quiet hairlines,
  drop the uppercase eyebrow transform in favour of small lowercase mono
  labels, add the glowing-period title treatment, and open up the section
  rhythm with hairline dividers.

### Changed — 2026-08-31

- Prepare the catalog for root-hosted Vercel static builds with generated previews,
  icons, SEO metadata, sitemap, robots, and accessible prompt copying.
- Align Bun, Node, Astro, TypeScript, and shared CI workflow versions with the
  common baseline.

### Removed — 2026-08-25

- `hello-world`: sample prompt used only to verify the docs site build

### Added — 2026-08-19

- `clarify`: prompt to rewrite rough user requests into clear, precise
  coding-agent prompts using terminology compression

### Changed — 2026-06-16

- Aligned the docs site with the reference Astro projects: Satteri Markdown,
  IBM Plex typography, neutral CSS design tokens, Biome, Vitest, and PR CI.

### Added — 2026-05-16

- Initial commit: `LICENSE` (MIT) and `README.md` with project description and
  prompt catalog scaffold
- `AGENTS.md`: repo conventions, prompt structure guidelines, and contribution
  workflow
- `.gitignore`: exclude agent-generated files, dependencies, build outputs, and
  environment files
- `.github/workflows/pr-title.yml`: PR title linter enforcing conventional
  commit format

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed — 2026-09-04

- Apply the Dusk Aurora House Standard v1: swap the OG/favicon palette to the
  canonical sRGB conversions (#1a1823/#e0ddef/#a09aad/#312f39) plus the
  matching `theme-color`, redraw the "as." favicon geometry (tile radius 16%,
  glyph at 0.52× with a -6% optical nudge), split type roles into `--text-hero`
  (landing + 404, clamp to 3.25rem) and `--text-page` (inner page headers),
  tokenise brand/nav/footer/card-foot sizes, give card titles weight 650,
  add persistent muted-underline styling to inline text and prose links,
  adopt ClientRouter with a persisted aurora glow and an idempotent
  `astro:page-load` re-init for the copy-prompt listener, align rise
  choreography to header 0ms → content 80ms → cards 160ms + 70ms·i (capped at
  8 items), and rebuild the 404 as the canonical left-aligned template with a
  "page not found · prompts.abijith.sh" title.
- Rework the footer link row as "github ↗ · abijith.sh ↗", dropping the
  "part of" wording while keeping both links.
- Redraw the favicon and touch icon as an "as." monogram — lowercase
  letterforms with the pink Dusk Aurora period (exact `--color-pink`
  conversion) on a rounded dark-violet tile, sized for legibility at 16px
  and marking the site as part of the abijith.sh family.
- Drop the hairline divider between the homepage hero and the "favourite
  prompts" section head (detail pages keep their section hairlines) and
  always render the "all prompts →" link now that `/all/` exists.
- Lowercase the `clarify` prompt's frontmatter name so cards and detail
  titles follow the site's lowercase convention.
- Rebuild page titles as lowercase "<page> · prompts.abijith.sh" via a new
  `buildPageTitle` helper (the home page is the bare domain), lowercase the
  OG image display titles ("prompts", "all prompts"), and drop the uppercase
  transform on the OG kind eyebrow in favour of the site's lowercase mono
  labels.
- Design-token audit: add `--glow-primary`, `--glow-pink`, and
  `--color-primary-soft` for the signature glow and quiet-accent alphas plus
  `--letter-spacing-tight` for display letter-spacing; route the glowing
  period, copy-button hover ring, brand glow, and heading/card letter
  spacing through them; scope the section hairline to detail pages; and
  deduplicate the `.period` glow styles previously copied into PageHero and
  the 404 page (global styles already cover both).
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
- Widen the page container to the main site's 64rem measure with gutters of
  `clamp(1.25rem, 5vw, 2.5rem)`; long-form prose on detail pages keeps its
  nested 70ch measure.
- Shorten the topbar brand to "prompts." (display font, quiet pink period) and
  restructure the topbar to brand + "all" + "abijith.sh ↗", moving the GitHub
  link to the footer beside the abijith.sh link.
- Restructure the homepage as favourites: featured prompts (marked via a new
  optional `metadata` record in the content schema, e.g.
  `metadata: { featured: true }` — `clarify` is featured) under a "favourite
  prompts" section head with an "all prompts →" link that appears once the
  catalog grows beyond the featured set.
- Add an `/all/` page listing every prompt as a card stack, with SEO metadata,
  a dedicated OG image route, and sitemap inclusion.
- Redesign prompt detail pages read-first: drop the breadcrumb eyebrow and the
  duplicated mono copy panel, keep the rendered prompt as the body, and pair
  the title + lede with a quiet hairline "copy prompt" button (copies the full
  raw prompt to the clipboard with a brief "copied" confirmation) and a muted
  "view source ↗" link.

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

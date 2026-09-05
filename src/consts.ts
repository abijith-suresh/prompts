export const SITE = {
  title: "prompts",
  description:
    "Browse reusable AI prompts for coding agents and chat applications. Copy what you need.",
  url: "https://prompts.abijith.sh",
  domain: "prompts.abijith.sh",
  locale: "en-US",
  repository: "abijith-suresh/prompts",
  mark: "as",
} as const;

/** Browser titles are lowercase: "<page> · prompts.abijith.sh", or just the
    domain for the home page. */
export function buildPageTitle(page?: string) {
  return page ? `${page} · ${SITE.domain}` : SITE.domain;
}

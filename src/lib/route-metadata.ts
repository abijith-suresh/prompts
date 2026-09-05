import { SITE } from "@/consts";
import { normalizePagePath } from "@/lib/site-paths";

export interface OgRoute {
  slug: string;
  title: string;
  description: string;
  label: "catalog" | "prompt";
}

type PromptDefinition = {
  id: string;
  data: {
    name: string;
    description: string;
  };
};

const SITE_DOMAIN = new URL(SITE.url).hostname;

export function buildPageTitle(name?: string): string {
  return name ? `${name} · ${SITE_DOMAIN}` : SITE_DOMAIN;
}

export function getOgImagePath(pathname: string): string {
  const normalizedPath = normalizePagePath(pathname);
  if (normalizedPath === "/" || normalizedPath === "/404/") return "/og/index.png";

  const slug = normalizedPath.replace(/^\/|\/$/g, "");
  return `/og/${slug}.png`;
}

export function buildOgRoutes(definitions: PromptDefinition[]): OgRoute[] {
  return [
    {
      slug: "index",
      title: SITE.title,
      description: SITE.description,
      label: "catalog",
    },
    {
      slug: "all",
      title: "all prompts",
      description: "Every reusable AI prompt in the collection — for coding agents and chat apps.",
      label: "catalog",
    },
    ...definitions.map((definition) => ({
      slug: definition.id,
      title: definition.data.name,
      description: definition.data.description,
      label: "prompt" as const,
    })),
  ];
}

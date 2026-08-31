export function buildSiteRootPath(basePath: string): string {
  if (!basePath || basePath === "/") return "/";

  const path = basePath.replace(/^\/+|\/+$/g, "");
  return path ? `/${path}/` : "/";
}

export function buildPromptPath(basePath: string, slug: string): string {
  const rootPath = buildSiteRootPath(basePath);
  const promptSlug = slug.replace(/^\/+|\/+$/g, "");

  return `${rootPath}${promptSlug}/`;
}

export function normalizePagePath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";

  const pathOnly = pathname.split(/[?#]/)[0] ?? pathname;
  const trimmed = pathOnly.replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}/` : "/";
}

export function buildOgImagePath(slug: string): string {
  const imageSlug = slug.replace(/^\/+|\/+$/g, "") || "index";
  return `/og/${imageSlug}.png`;
}

export function getOgImagePath(pathname: string): string {
  const normalizedPath = normalizePagePath(pathname);
  const slug = normalizedPath === "/" ? "index" : normalizedPath.replace(/^\/+|\/+$/g, "");

  return buildOgImagePath(slug);
}

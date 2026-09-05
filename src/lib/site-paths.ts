import { SITE } from "@/consts";

export function normalizeBaseUrl(baseUrl: string) {
  if (!baseUrl || baseUrl === "/") return "/";
  return `/${baseUrl.replace(/^\/+|\/+$/g, "")}/`;
}

export function buildAssetPath(baseUrl: string, assetPath: string) {
  const normalizedBase = normalizeBaseUrl(baseUrl);
  const normalizedAsset = assetPath.replace(/^\/+/, "");
  return normalizedBase === "/" ? `/${normalizedAsset}` : `${normalizedBase}${normalizedAsset}`;
}

export function buildPromptPath(baseUrl: string, slug: string) {
  return buildAssetPath(baseUrl, `${slug.replace(/^\/+|\/+$/g, "")}/`);
}

export function buildAllPath(baseUrl: string) {
  return buildAssetPath(baseUrl, "all/");
}

export function normalizePagePath(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  const [pathOnly] = pathname.split(/[?#]/);
  const trimmed = pathOnly.replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}/` : "/";
}

export function buildCanonicalUrl(pathname: string, siteUrl: string = SITE.url) {
  return new URL(normalizePagePath(pathname), `${siteUrl}/`).href;
}

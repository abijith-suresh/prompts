import { getCollection } from "astro:content";
import type { APIRoute, GetStaticPaths } from "astro";

import { SITE } from "../../consts";
import { type OgRoute, renderOgPng } from "../../lib/og";

export const prerender = true;

interface OgStaticPath {
  params: {
    slug: string;
  };
  props: {
    route: OgRoute;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const definitions = await getCollection("promptDefinitions");

  return [
    {
      params: { slug: "index" },
      props: {
        route: {
          title: SITE.title,
          description: SITE.description,
          kind: "catalog",
        },
      },
    },
    ...definitions.map((definition) => ({
      params: { slug: definition.id },
      props: {
        route: {
          title: definition.data.name,
          description: definition.data.description,
          kind: "prompt" as const,
        },
      },
    })),
  ] satisfies OgStaticPath[];
};

export const GET: APIRoute<{ route: OgRoute }> = async ({ props }) => {
  const png = await renderOgPng(props.route);

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};

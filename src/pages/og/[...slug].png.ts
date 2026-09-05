import { getCollection } from "astro:content";
import type { APIRoute, GetStaticPaths } from "astro";

import { renderOgPng } from "@/lib/og";
import { buildOgRoutes, type OgRoute } from "@/lib/route-metadata";

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

  return buildOgRoutes(definitions).map(
    (route): OgStaticPath => ({
      params: { slug: route.slug },
      props: { route },
    })
  );
};

export const GET: APIRoute<{ route: OgRoute }> = async ({ props }) => {
  const png = await renderOgPng(props.route);

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
    },
  });
};

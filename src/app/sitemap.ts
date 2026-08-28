import type { MetadataRoute } from "next";
import { allFestivals } from "@/lib/content/festivals";
import { aartis } from "@/lib/content/aartis";
import { pujas } from "@/lib/content/pujas";
import { religions } from "@/lib/content/religions";
import { UiLang } from "@/lib/content/types";

const BASE_URL = "https://mindmotions.in";
const LOCALES: UiLang[] = ["hi", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/festivals",
    "/aarti",
    "/puja",
    "/religions",
    "/calendar",
    "/stories",
    "/regional",
    "/children",
    "/search",
    "/bookmarks",
    "/about",
    "/contact",
    "/editorial-policy",
    "/privacy",
    "/terms",
    "/sources",
  ];

  const dynamicPaths = [
    ...allFestivals.map((f) => `/festivals/${f.slug}`),
    ...allFestivals.map((f) => `/stories/${f.slug}`),
    ...aartis.map((a) => `/aarti/${a.slug}`),
    ...pujas.map((p) => `/puja/${p.slug}`),
    ...religions.map((r) => `/religions/${r.slug}`),
  ];

  const allPaths = [...staticPaths, ...dynamicPaths];

  const entries: MetadataRoute.Sitemap = [];
  for (const locale of LOCALES) {
    for (const path of allPaths) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "daily" : "weekly",
        priority: path === "" ? 1 : 0.7,
      });
    }
  }
  return entries;
}

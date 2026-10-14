import type { MetadataRoute } from "next";
import { APP_URL } from "./constants/common";
import { ARTICLES } from "./artykuly/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: APP_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...Object.entries(ARTICLES).map(([slug, article]) => ({
      url: new URL(`artykuly/${slug}`, APP_URL).href,
      lastModified: article.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: new URL("polityka-prywatnosci", APP_URL).href,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

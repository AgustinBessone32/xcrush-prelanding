import { getPublicSeoPages } from "@/api/admin";
import { MetadataRoute } from "next";

export default async function sitemap() {
  const FRONT_URL = process.env.FRONT_URL;
  const seoPages = await getPublicSeoPages();

  const pages = seoPages.map(({ name }) => ({
    url: `${FRONT_URL}/${name}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [
    {
      url: `${FRONT_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${FRONT_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${FRONT_URL}/my-ai`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${FRONT_URL}/new-character`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    /*{
      url: `${FRONT_URL}/generate-image`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },*/
    {
      url: `${FRONT_URL}/subscriptions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${FRONT_URL}/tokens`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    ...pages,
  ];
}

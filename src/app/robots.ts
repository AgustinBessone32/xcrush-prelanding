import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin"],
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
        disallow: ["/admin"],
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
        disallow: ["/admin"],
      },
    ],
    sitemap: "https://xcrush.ai/sitemap.xml",
  };
}

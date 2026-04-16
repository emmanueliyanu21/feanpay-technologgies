import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.feanpaytechnologies.com.ng/sitemap.xml",
    host: "https://www.feanpaytechnologies.com.ng",
  };
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cloudtech.host.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://cloudtech.host.com/Home",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://cloudtech.host.com/About",
      lastModified: new Date(),
      priority: 0.8,
    },
     {
      url: "https://cloudtech.host.com/Services",
      lastModified: new Date(),
      priority: 0.8,
    },
     {
      url: "https://cloudtech.hostcom/Procing",
      lastModified: new Date(),
      priority: 0.8,
    },
     {
      url: "https://cloudtech.host.com/Blog",
      lastModified: new Date(),
      priority: 0.8,
    },
     {
      url: "https://cloudtech.host.com/contact",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
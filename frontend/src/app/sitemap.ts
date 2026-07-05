import type { MetadataRoute } from "next";

const BASE_URL = "https://mriverius.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${BASE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/academia`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/comunidad`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/comunidad/recursos`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/reservar`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/colab`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/donar`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}

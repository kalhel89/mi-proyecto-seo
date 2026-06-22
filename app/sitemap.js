const BASE_URL = "https://mi-proyecto-seo-two.vercel.app";

export default function sitemap() {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: new Date(),
    },
  ];
}
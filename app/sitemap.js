const BASE_URL = "https://mi-proyecto-seo-two.vercel.app/";

export default async function sitemap() {
  const posts = ["post-1", "post-2"];

  const postUrls = posts.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}

export default function sitemap() {
  return [
    {
      url: "http://localhost:3000",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/blog",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/contacto",
      lastModified: new Date(),
    },
  ];
}
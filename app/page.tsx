"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Mi Sitio Optimizado - Home",
  description: "Aprende SEO y optimización en Next.js.",

  openGraph: {
    title: "Mi Sitio Optimizado",
    description: "Técnicas SEO modernas",
    images: ["/images/seo-image.png"],
    type: "website",
  },
};

const DynamicComponent = dynamic(
  () => import("../components/LargeComponent"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      <h1>Bienvenido</h1>

      <Image
        src="/images/seo-image.png"
        width={800}
        height={400}
        alt="SEO"
        priority
      />

      <DynamicComponent />
    </>
  );
}
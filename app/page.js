"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

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
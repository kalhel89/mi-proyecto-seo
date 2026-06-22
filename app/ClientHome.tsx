"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const LargeComponent = dynamic(
  () => import("../components/LargeComponent"),
  { ssr: false }
);

export default function ClientHome() {
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

      <LargeComponent />
    </>
  );
}
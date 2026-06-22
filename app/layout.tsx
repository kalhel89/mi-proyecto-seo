import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Proyecto SEO",
  description: "Laboratorio SEO",
  verification: {
    google: "8P3sQ27dVdyLtXXXXXXXXXX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
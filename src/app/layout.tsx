import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Foresight | Consultora de Políticas y Gobernanza de IA",
  description:
    "Asesoramos a gobiernos y organizaciones en políticas de inteligencia artificial, transformación digital e innovación tecnológica en América Latina.",
  keywords: [
    "AI policy",
    "governance",
    "artificial intelligence",
    "Latin America",
    "consulting",
    "UNESCO RAM",
    "políticas de IA",
    "gobernanza",
  ],
  authors: [{ name: "Foresight" }],
  openGraph: {
    title: "Foresight | Consultora de Políticas y Gobernanza de IA",
    description:
      "Asesoramos a gobiernos y organizaciones en políticas de inteligencia artificial en América Latina.",
    url: "https://foresight.cl",
    siteName: "Foresight",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foresight | Consultora de Políticas y Gobernanza de IA",
    description:
      "Asesoramos a gobiernos y organizaciones en políticas de inteligencia artificial en América Latina.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

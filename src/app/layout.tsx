import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Foresight | Consultoría en Inteligencia Artificial",
  description:
    "Acompañamos a organizaciones públicas y privadas en su adopción estratégica de inteligencia artificial — desde la estrategia hasta la implementación en América Latina.",
  keywords: [
    "AI consulting",
    "AI adoption",
    "AI strategy",
    "AI implementation",
    "artificial intelligence",
    "digital transformation",
    "Latin America",
    "AI governance",
    "organizational transformation",
    "UNESCO RAM",
    "consultoría IA",
    "adopción de IA",
    "transformación digital",
    "estrategia IA",
  ],
  authors: [{ name: "Foresight" }],
  openGraph: {
    title: "Foresight | Consultoría en Inteligencia Artificial",
    description:
      "Acompañamos a organizaciones públicas y privadas en su adopción estratégica de inteligencia artificial en América Latina.",
    url: "https://foresight.cl",
    siteName: "Foresight",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foresight | Consultoría en Inteligencia Artificial",
    description:
      "Acompañamos a organizaciones públicas y privadas en su adopción estratégica de inteligencia artificial en América Latina.",
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
        <I18nProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}

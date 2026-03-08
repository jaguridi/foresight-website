import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias y Logros | Foresight",
  description:
    "Últimas noticias, logros y novedades sobre el trabajo de Foresight en inteligencia artificial en América Latina.",
  openGraph: {
    title: "Noticias y Logros | Foresight",
    description:
      "Últimas noticias, logros y novedades sobre el trabajo de Foresight en inteligencia artificial en América Latina.",
  },
};

export default function NoticiasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

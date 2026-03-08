import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reportes e Investigación | Foresight",
  description:
    "Análisis y estudios sobre el impacto de la inteligencia artificial en América Latina.",
  openGraph: {
    title: "Reportes e Investigación | Foresight",
    description:
      "Análisis y estudios sobre el impacto de la inteligencia artificial en América Latina.",
  },
};

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

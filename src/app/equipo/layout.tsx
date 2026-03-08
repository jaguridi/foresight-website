import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipo | Foresight",
  description:
    "Expertos en políticas públicas, tecnología y gobernanza de inteligencia artificial en América Latina.",
  openGraph: {
    title: "Equipo | Foresight",
    description:
      "Expertos en políticas públicas, tecnología y gobernanza de inteligencia artificial en América Latina.",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Foresight",
  description:
    "Contáctanos para integrar inteligencia artificial en tu organización. Consultoría estratégica en IA para América Latina.",
  openGraph: {
    title: "Contacto | Foresight",
    description:
      "Contáctanos para integrar inteligencia artificial en tu organización. Consultoría estratégica en IA para América Latina.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

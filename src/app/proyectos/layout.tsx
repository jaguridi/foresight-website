import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos | Foresight",
  description:
    "Más de 20 proyectos ejecutados en múltiples países de América Latina, el Caribe y Asia-Pacífico en inteligencia artificial.",
  openGraph: {
    title: "Proyectos | Foresight",
    description:
      "Más de 20 proyectos ejecutados en múltiples países de América Latina, el Caribe y Asia-Pacífico en inteligencia artificial.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

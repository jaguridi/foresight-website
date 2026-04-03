import type { Metadata } from "next";
import { projects } from "@/data/content";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.title.es} | Foresight`,
    description: project.description.es,
    alternates: {
      canonical: `/proyectos/${id}`,
    },
    openGraph: {
      title: `${project.title.es} | Foresight`,
      description: project.description.es,
      url: `/proyectos/${id}`,
    },
    twitter: {
      card: "summary",
      title: `${project.title.es} | Foresight`,
      description: project.description.es,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProjectDetailClient id={id} />;
}

"use client";

import { SectionHeading, ProjectCard, GradientButton } from "@/components/ui";
import { projects, clientLogos } from "@/data/content";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

interface ProjectsGridProps {
  limit?: number;
  showViewAll?: boolean;
}

export function ProjectsGrid({
  limit = 6,
  showViewAll = true,
}: ProjectsGridProps) {
  const { lang } = useLang();
  const displayProjects = projects.slice(0, limit);

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={lang === "es" ? "Proyectos" : "Projects"}
          subtitle={
            lang === "es"
              ? "Trabajamos con gobiernos y organizaciones líderes en la región"
              : "We work with leading governments and organizations in the region"
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title[lang]}
              description={project.description[lang]}
              client={project.client}
              clientLogo={clientLogos[project.client]}
              region={project.region}
              year={project.year}
              yearEnd={project.yearEnd}
              status={project.status}
              featuredStat={
                project.featuredStat
                  ? {
                      value: project.featuredStat.value,
                      label: project.featuredStat.label[lang],
                    }
                  : undefined
              }
              delay={index * 0.1}
            />
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-12">
            <GradientButton href="/proyectos" variant="outline">
              {lang === "es" ? "Ver todos los proyectos" : "View all projects"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </GradientButton>
          </div>
        )}
      </div>
    </section>
  );
}

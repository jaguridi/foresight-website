"use client";

import { SectionHeading, ReportCard } from "@/components/ui";
import { reports } from "@/data/content";

interface FeaturedReportsProps {
  lang?: "es" | "en";
}

export function FeaturedReports({ lang = "es" }: FeaturedReportsProps) {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={lang === "es" ? "Reportes Destacados" : "Featured Reports"}
          subtitle={
            lang === "es"
              ? "Investigaciones y análisis sobre el impacto de la IA en la región"
              : "Research and analysis on AI impact in the region"
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.slice(0, 3).map((report, index) => (
            <ReportCard
              key={report.slug}
              title={report.title[lang]}
              subtitle={report.subtitle[lang]}
              client={report.client}
              year={report.year}
              slug={report.slug}
              featuredStat={{
                value: report.featuredStat.value,
                label: report.featuredStat.label[lang],
              }}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

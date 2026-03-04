"use client";

import { SectionHeading, ServiceCard } from "@/components/ui";
import { services } from "@/data/content";
import { useLang } from "@/lib/i18n";

export function ServicesSection() {
  const { lang } = useLang();
  const servicesList = services[lang];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={lang === "es" ? "Nuestros Servicios" : "Our Services"}
          subtitle={
            lang === "es"
              ? "Soluciones integrales para la adopción y transformación con inteligencia artificial"
              : "End-to-end solutions for AI adoption and organizational transformation"
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon as "FileText" | "BarChart3" | "Search"}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

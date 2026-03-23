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
          title={lang === "es" ? "Qué Hacemos" : "What We Do"}
          subtitle={
            lang === "es"
              ? "Trabajamos con gobiernos y empresas en cada etapa de su camino con la IA"
              : "We work with governments and companies at every stage of their AI journey"
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

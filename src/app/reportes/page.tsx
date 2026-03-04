"use client";

import { motion } from "framer-motion";
import { ReportCard } from "@/components/ui";
import { reports } from "@/data/content";
import { useLang } from "@/lib/i18n";

export default function ReportsPage() {
  const { lang } = useLang();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-subtle hero-pattern py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
              {lang === "es" ? "Reportes e Investigación" : "Reports & Research"}
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              {lang === "es"
                ? "Análisis y estudios sobre el impacto de la inteligencia artificial en la región"
                : "Analysis and studies on the impact of artificial intelligence in the region"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
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
    </div>
  );
}

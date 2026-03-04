"use client";

import { motion } from "framer-motion";
import { Download, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  StatCard,
  PillarCard,
  BarChart,
  GradientButton,
  SectionHeading,
} from "@/components/ui";
import { reports } from "@/data/content";
import * as LucideIcons from "lucide-react";

export default function ReportClient({ slug }: { slug: string }) {
  const lang = "es";

  const report = reports.find((r) => r.slug === slug);

  if (!report) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">
            {lang === "es" ? "Reporte no encontrado" : "Report not found"}
          </h1>
          <Link
            href="/reportes"
            className="text-cyan hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "es" ? "Volver a reportes" : "Back to reports"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/reportes"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "es" ? "Todos los reportes" : "All reports"}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                {report.client} • {report.year}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {report.title[lang]}
              </h1>
              <p className="text-xl text-white/80">{report.subtitle[lang]}</p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-6xl md:text-7xl font-bold text-white mb-2">
                  {report.featuredStat.value}
                </div>
                <div className="text-white/80 text-lg">
                  {report.featuredStat.label[lang]}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-navy mb-6">
              {lang === "es" ? "Resumen Ejecutivo" : "Executive Summary"}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {report.executiveSummary[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={lang === "es" ? "Cifras Clave" : "Key Figures"}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {report.keyStats.map((stat, index) => (
              <StatCard
                key={stat.label[lang]}
                value={stat.value}
                label={stat.label[lang]}
                variant="large"
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sector Breakdown */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={
              lang === "es" ? "Impacto por Sector" : "Impact by Sector"
            }
            subtitle={
              lang === "es"
                ? "Distribución del potencial de impacto de IA por sector económico"
                : "Distribution of AI impact potential by economic sector"
            }
          />
          <BarChart
            data={report.sectors.map((s) => ({
              name: s.name[lang],
              percentage: s.percentage,
            }))}
          />
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={
              lang === "es"
                ? "Pilares Estratégicos"
                : "Strategic Pillars"
            }
            subtitle={
              lang === "es"
                ? "Áreas de acción clave para maximizar el impacto de la IA"
                : "Key action areas to maximize AI impact"
            }
          />
          <div className="space-y-4">
            {report.pillars.map((pillar, index) => (
              <PillarCard
                key={pillar.title[lang]}
                title={pillar.title[lang]}
                content={pillar.content[lang]}
                icon={pillar.icon as keyof typeof LucideIcons}
                delay={index * 0.1}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-navy rounded-2xl p-8 md:p-12 text-center"
          >
            <FileText className="w-16 h-16 text-cyan mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {lang === "es"
                ? "Descarga el reporte completo"
                : "Download the full report"}
            </h3>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              {lang === "es"
                ? "Accede a todos los datos, metodología y recomendaciones detalladas"
                : "Access all data, methodology and detailed recommendations"}
            </p>
            <GradientButton href={report.downloadUrl}>
              <Download className="w-5 h-5 mr-2" />
              {lang === "es" ? "Descargar PDF" : "Download PDF"}
            </GradientButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

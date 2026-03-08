"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  MapPin,
  Calendar,
  Building2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GradientButton } from "@/components/ui";
import { projects, reports, clients } from "@/data/content";
import { useLang } from "@/lib/i18n";
import { asset } from "@/lib/utils";

export default function ProjectDetailClient({ id }: { id: string }) {
  const { lang } = useLang();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">
            {lang === "es" ? "Proyecto no encontrado" : "Project not found"}
          </h1>
          <Link
            href="/proyectos"
            className="text-cyan hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "es" ? "Volver a proyectos" : "Back to projects"}
          </Link>
        </div>
      </div>
    );
  }

  const yearDisplay = project.yearEnd
    ? `${project.year}–${project.yearEnd}`
    : String(project.year);

  const statusLabel =
    project.status === "in_progress"
      ? lang === "es"
        ? "En desarrollo"
        : "In progress"
      : lang === "es"
        ? "Completado"
        : "Completed";

  const statusColor =
    project.status === "in_progress"
      ? "bg-amber-400/20 text-amber-100 border-amber-400/30"
      : "bg-emerald-400/20 text-emerald-100 border-emerald-400/30";

  const typeLabels: Record<string, Record<string, string>> = {
    research: { es: "Investigación", en: "Research" },
    assessment: { es: "Evaluación", en: "Assessment" },
    policy: { es: "Políticas Públicas", en: "Public Policy" },
    consulting: { es: "Consultoría", en: "Consulting" },
  };

  // Find related report if one exists
  const relatedReport =
    "reportSlug" in project
      ? reports.find((r) => r.slug === (project as { reportSlug?: string }).reportSlug)
      : undefined;

  // Find client logo
  const clientLogo = clients.find((c) => c.name === project.client)?.logo;

  // Find related projects (same client or same type, excluding current)
  const relatedProjects = projects
    .filter(
      (p) =>
        p.id !== project.id &&
        (p.client === project.client || p.type === project.type)
    )
    .slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
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
            href="/proyectos"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "es" ? "Todos los proyectos" : "All projects"}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
          >
            {/* Title & Description */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium">
                  {project.client}
                </span>
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm">
                  {typeLabels[project.type]?.[lang] || project.type}
                </span>
                <span
                  className={`inline-block px-3 py-1.5 rounded-full text-sm font-medium border ${statusColor}`}
                >
                  {statusLabel}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {project.title[lang]}
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                {project.description[lang]}
              </p>
            </div>

            {/* Sidebar Info Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-5">
              {clientLogo && (
                <div className="flex justify-center pb-5 border-b border-white/20">
                  <div className="bg-white rounded-xl p-3">
                    <Image
                      src={asset(clientLogo)}
                      alt={project.client}
                      width={120}
                      height={48}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                </div>
              )}

              {project.featuredStat && (
                <div className="text-center pb-5 border-b border-white/20">
                  <div className="text-5xl font-bold text-white mb-1">
                    {project.featuredStat.value}
                  </div>
                  <div className="text-white/70 text-sm">
                    {project.featuredStat.label[lang]}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 text-white/80">
                <Building2 className="w-5 h-5 text-cyan shrink-0" />
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">
                    {lang === "es" ? "Cliente" : "Client"}
                  </div>
                  <div className="text-white font-medium">
                    {project.client}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <Calendar className="w-5 h-5 text-cyan shrink-0" />
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">
                    {lang === "es" ? "Periodo" : "Period"}
                  </div>
                  <div className="text-white font-medium">{yearDisplay}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-cyan shrink-0" />
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">
                    {lang === "es" ? "Región" : "Region"}
                  </div>
                  <div className="text-white font-medium">
                    {project.region}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Links Section */}
      {(("externalUrl" in project && project.externalUrl) || relatedReport) && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-navy mb-6">
                {lang === "es"
                  ? "Recursos y documentos"
                  : "Resources & Documents"}
              </h2>

              <div className="space-y-4">
                {relatedReport && (
                  <Link
                    href={`/reportes/${relatedReport.slug}`}
                    className="group flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 hover:border-cyan hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-navy group-hover:text-cyan transition-colors">
                          {relatedReport.title[lang]}
                        </div>
                        <div className="text-sm text-slate-500">
                          {lang === "es"
                            ? "Ver reporte completo"
                            : "View full report"}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan group-hover:translate-x-1 transition-all" />
                  </Link>
                )}

                {"externalUrl" in project && project.externalUrl && (
                  <a
                    href={project.externalUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 hover:border-cyan hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center">
                        <ExternalLink className="w-6 h-6 text-cyan" />
                      </div>
                      <div>
                        <div className="font-semibold text-navy group-hover:text-cyan transition-colors">
                          {lang === "es"
                            ? "Recurso externo"
                            : "External resource"}
                        </div>
                        <div className="text-sm text-slate-500 truncate max-w-md">
                          {(project.externalUrl as string).replace(
                            /^https?:\/\//,
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-cyan transition-colors" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-navy mb-8">
                {lang === "es"
                  ? "Proyectos relacionados"
                  : "Related Projects"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/proyectos/${rp.id}`}
                    className="group bg-white rounded-xl p-5 border border-slate-200 hover:border-cyan hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-cyan bg-cyan/10 px-2.5 py-1 rounded-full">
                        {rp.client}
                      </span>
                      <span className="text-xs text-slate-400">
                        {rp.yearEnd
                          ? `${rp.year}–${rp.yearEnd}`
                          : String(rp.year)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-navy group-hover:text-cyan transition-colors line-clamp-2">
                      {rp.title[lang]}
                    </h3>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Back to Projects CTA */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GradientButton href="/proyectos" variant="secondary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {lang === "es"
              ? "Ver todos los proyectos"
              : "View all projects"}
          </GradientButton>
        </div>
      </section>
    </div>
  );
}

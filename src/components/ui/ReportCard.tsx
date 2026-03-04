"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";

interface ReportCardProps {
  title: string;
  subtitle?: string;
  client: string;
  year: number;
  slug: string;
  featuredStat?: {
    value: string;
    label: string;
  };
  className?: string;
  delay?: number;
}

export function ReportCard({
  title,
  subtitle,
  client,
  year,
  slug,
  featuredStat,
  className,
  delay = 0,
}: ReportCardProps) {
  const { lang } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        href={`/reportes/${slug}`}
        className={cn(
          "group block bg-white rounded-2xl overflow-hidden border border-slate-200 card-hover",
          className
        )}
      >
        {/* Header with gradient */}
        <div className="bg-gradient-brand p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <FileText className="w-10 h-10 text-white/80 mb-4" />
            {featuredStat && (
              <div className="mt-4">
                <div className="text-4xl font-bold text-white">
                  {featuredStat.value}
                </div>
                <div className="text-white/80 text-sm">{featuredStat.label}</div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-cyan bg-cyan/10 px-3 py-1 rounded-full">
              {client}
            </span>
            <span className="text-sm text-slate-400">{year}</span>
          </div>

          <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-cyan transition-colors">
            {title}
          </h3>

          {subtitle && (
            <p className="text-slate-500 text-sm mb-4 line-clamp-2">{subtitle}</p>
          )}

          <div className="flex items-center text-cyan font-medium mt-4">
            <span>{lang === "es" ? "Leer reporte" : "Read report"}</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import { newsCategoryLabels } from "@/data/content";

const categoryColors: Record<string, string> = {
  publicacion: "bg-blue-50 text-blue-700",
  logro: "bg-emerald-50 text-emerald-700",
  evento: "bg-amber-50 text-amber-700",
  alianza: "bg-purple-50 text-purple-700",
};

interface NewsCardProps {
  title: string;
  summary: string;
  date: string;
  category: keyof typeof newsCategoryLabels;
  externalUrl?: string;
  className?: string;
  delay?: number;
}

export function NewsCard({
  title,
  summary,
  date,
  category,
  externalUrl,
  className,
  delay = 0,
}: NewsCardProps) {
  const { lang } = useLang();
  const formattedDate = new Date(date + "T12:00:00").toLocaleDateString(
    lang === "es" ? "es-CL" : "en-US",
    { year: "numeric", month: "long" }
  );
  const categoryLabel = newsCategoryLabels[category]?.[lang] ?? category;
  const colorClass = categoryColors[category] ?? "bg-slate-50 text-slate-700";

  const Wrapper = externalUrl ? "a" : "div";
  const wrapperProps = externalUrl
    ? { href: externalUrl, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Wrapper
        {...wrapperProps}
        className={cn(
          "block bg-white rounded-2xl overflow-hidden border border-slate-200 p-6 card-hover h-full",
          externalUrl && "group cursor-pointer",
          className
        )}
      >
        <div className="flex items-center justify-between mb-4">
          <span
            className={cn(
              "text-xs font-semibold px-3 py-1 rounded-full",
              colorClass
            )}
          >
            {categoryLabel}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            {formattedDate}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-navy mb-3 leading-snug group-hover:text-cyan transition-colors">
          {title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
          {summary}
        </p>

        {externalUrl && (
          <div className="flex items-center text-cyan font-medium text-sm mt-4">
            <span>{lang === "es" ? "Leer más" : "Read more"}</span>
            <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        )}
      </Wrapper>
    </motion.div>
  );
}

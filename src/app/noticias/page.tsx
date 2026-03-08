"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NewsCard } from "@/components/ui";
import { newsItems, newsCategoryLabels } from "@/data/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const categories = ["all", "publicacion", "logro", "evento", "alianza"] as const;

export default function NoticiasPage() {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? newsItems
      : newsItems.filter((n) => n.category === activeCategory);

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
              {lang === "es" ? "Noticias y Logros" : "News & Achievements"}
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              {lang === "es"
                ? "Novedades sobre nuestro trabajo e impacto en la región"
                : "Updates on our work and impact in the region"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const label =
                cat === "all"
                  ? lang === "es"
                    ? "Todas"
                    : "All"
                  : newsCategoryLabels[cat]?.[lang] ?? cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === cat
                      ? "bg-navy text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, index) => (
              <NewsCard
                key={item.id}
                title={item.title[lang]}
                summary={item.summary[lang]}
                date={item.date}
                category={item.category}
                delay={index * 0.1}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-400 py-12">
              {lang === "es"
                ? "No hay noticias en esta categoría."
                : "No news in this category."}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

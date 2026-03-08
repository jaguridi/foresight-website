"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading, NewsCard } from "@/components/ui";
import { newsItems } from "@/data/content";
import { useLang } from "@/lib/i18n";

export function NewsHighlights() {
  const { lang } = useLang();
  const latest = newsItems.slice(0, 3);

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={lang === "es" ? "Noticias y Logros" : "News & Achievements"}
          subtitle={
            lang === "es"
              ? "Últimas novedades sobre nuestro trabajo e impacto en la región"
              : "Latest updates on our work and impact in the region"
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latest.map((item, index) => (
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

        <div className="text-center mt-12">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-cyan font-semibold hover:gap-3 transition-all"
          >
            {lang === "es" ? "Ver todas las noticias" : "View all news"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

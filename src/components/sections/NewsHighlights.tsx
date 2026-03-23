"use client";

import { SectionHeading, LinkedInFeed } from "@/components/ui";
import { useLang } from "@/lib/i18n";

export function NewsHighlights() {
  const { lang } = useLang();

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            lang === "es"
              ? "Noticias Destacadas"
              : "Featured News"
          }
        />

        <LinkedInFeed />
      </div>
    </section>
  );
}

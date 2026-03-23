"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
              ? "Últimas Publicaciones"
              : "Latest Posts"
          }
          subtitle={
            lang === "es"
              ? "Síguenos en LinkedIn para conocer nuestras últimas novedades"
              : "Follow us on LinkedIn for our latest updates"
          }
        />

        <LinkedInFeed />

        <div className="text-center mt-12">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-cyan font-semibold hover:gap-3 transition-all"
          >
            {lang === "es" ? "Ver más publicaciones" : "View more posts"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

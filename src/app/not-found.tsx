"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function NotFound() {
  const { lang } = useLang();

  const c =
    lang === "es"
      ? { subtitle: "Página no encontrada", description: "La página que buscas no existe o ha sido movida.", back: "Volver al inicio", projects: "Ver proyectos" }
      : { subtitle: "Page not found", description: "The page you're looking for doesn't exist or has been moved.", back: "Back to home", projects: "View projects" };

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-4 bg-gradient-subtle">
      <div className="text-center">
        <div className="text-9xl font-bold text-navy/10 mb-2">404</div>
        <h2 className="text-3xl font-bold text-navy mb-4">
          {c.subtitle}
        </h2>
        <p className="text-lg text-slate-500 mb-8 max-w-md mx-auto">{c.description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-brand text-white font-medium hover:shadow-lg transition-all"
          >
            {c.back}
          </Link>
          <Link
            href="/proyectos"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-200 text-navy font-medium hover:bg-slate-50 transition-colors"
          >
            {c.projects}
          </Link>
        </div>
      </div>
    </div>
  );
}

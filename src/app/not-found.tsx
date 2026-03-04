"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function NotFound() {
  const { lang } = useLang();

  const c =
    lang === "es"
      ? { subtitle: "Página no encontrada", description: "La página que buscas no existe o ha sido movida.", back: "Volver al inicio" }
      : { subtitle: "Page not found", description: "The page you're looking for doesn't exist or has been moved.", back: "Back to home" };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-navy mb-4">
          {c.subtitle}
        </h2>
        <p className="text-slate-500 mb-8">{c.description}</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-brand text-white font-medium hover:shadow-lg transition-all"
        >
          {c.back}
        </Link>
      </div>
    </div>
  );
}

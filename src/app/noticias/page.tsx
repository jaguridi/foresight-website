"use client";

import { motion } from "framer-motion";
import { LinkedInFeed } from "@/components/ui";
import { useLang } from "@/lib/i18n";

export default function NoticiasPage() {
  const { lang } = useLang();

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
              {lang === "es"
                ? "Últimas Publicaciones"
                : "Latest Posts"}
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              {lang === "es"
                ? "Conoce nuestras últimas novedades en LinkedIn"
                : "Check out our latest updates on LinkedIn"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* LinkedIn Feed */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LinkedInFeed />
        </div>
      </section>
    </div>
  );
}

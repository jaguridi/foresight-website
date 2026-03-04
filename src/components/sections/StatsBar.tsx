"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";
import { useLang } from "@/lib/i18n";

export function StatsBar() {
  const { lang } = useLang();
  return (
    <section className="bg-navy py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-slate-300 font-medium">
                {stat.label[lang]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SectionHeading, ClientLogo } from "@/components/ui";
import { clients } from "@/data/content";
import { useLang } from "@/lib/i18n";

export function ClientsSection() {
  const { lang } = useLang();
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={lang === "es" ? "Nuestros Clientes" : "Our Clients"}
          subtitle={
            lang === "es"
              ? "Organizaciones líderes que confían en nosotros"
              : "Leading organizations that trust us"
          }
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {clients.map((client, index) => (
            <ClientLogo
              key={client.name}
              name={client.name}
              logo={client.logo}
              url={client.url}
              delay={index * 0.05}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

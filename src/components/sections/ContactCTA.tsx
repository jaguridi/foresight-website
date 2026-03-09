"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Linkedin } from "lucide-react";
import { GradientButton } from "@/components/ui";
import { siteConfig } from "@/data/content";
import { useLang } from "@/lib/i18n";

export function ContactCTA() {
  const { lang } = useLang();

  const content = {
    es: {
      title: "¿Listo para transformar tu organización con IA?",
      subtitle:
        "Agenda una conversación con nuestro equipo para explorar cómo la inteligencia artificial puede impulsar tus objetivos.",
      cta: "Escríbenos",
      orConnect: "O conéctate por",
    },
    en: {
      title: "Ready to transform your organization with AI?",
      subtitle:
        "Schedule a conversation with our team to explore how artificial intelligence can drive your goals.",
      cta: "Email us",
      orConnect: "Or connect via",
    },
  };

  const c = content[lang];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-brand" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {c.title}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {c.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <GradientButton
              href={`mailto:${siteConfig.email}`}
              variant="secondary"
              size="lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              {c.cta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </GradientButton>

            <a
              href={siteConfig.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

          <p className="text-white/60 text-sm">
            {siteConfig.email}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

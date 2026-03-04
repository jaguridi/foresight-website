"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { GradientButton } from "@/components/ui";
import { siteConfig } from "@/data/content";

interface ContactCTAProps {
  lang?: "es" | "en";
}

export function ContactCTA({ lang = "es" }: ContactCTAProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const content = {
    es: {
      title: "¿Listo para transformar tu organización?",
      subtitle: "Conversemos sobre cómo podemos ayudarte",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu email",
      messagePlaceholder: "¿En qué podemos ayudarte?",
      submit: "Enviar mensaje",
      orEmail: "O escríbenos directamente a",
    },
    en: {
      title: "Ready to transform your organization?",
      subtitle: "Let's talk about how we can help you",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "How can we help you?",
      submit: "Send message",
      orEmail: "Or email us directly at",
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {c.title}
            </h2>
            <p className="text-xl text-white/80 mb-8">{c.subtitle}</p>

            <div className="flex items-center gap-3 text-white/80">
              <Mail className="w-5 h-5" />
              <span>{c.orEmail}</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-white font-medium hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={c.namePlaceholder}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder={c.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all"
                  required
                />
                <textarea
                  placeholder={c.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all resize-none"
                  required
                />
                <GradientButton type="submit" className="w-full">
                  {c.submit}
                  <Send className="w-4 h-4 ml-2" />
                </GradientButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

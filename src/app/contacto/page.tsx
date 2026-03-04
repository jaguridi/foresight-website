"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, MapPin } from "lucide-react";
import { GradientButton } from "@/components/ui";
import { siteConfig } from "@/data/content";
import { useLang } from "@/lib/i18n";

export default function ContactPage() {
  const { lang } = useLang();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      lang === "es"
        ? `Contacto de ${formData.name}${formData.organization ? ` (${formData.organization})` : ""}`
        : `Contact from ${formData.name}${formData.organization ? ` (${formData.organization})` : ""}`
    );
    const body = encodeURIComponent(
      `${formData.message}\n\n---\n${lang === "es" ? "De" : "From"}: ${formData.name}\nEmail: ${formData.email}${formData.organization ? `\n${lang === "es" ? "Organización" : "Organization"}: ${formData.organization}` : ""}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const content = {
    es: {
      title: "Contacto",
      subtitle: "¿Quieres integrar IA en tu organización? Conversemos",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu email",
      organizationPlaceholder: "Tu organización",
      messagePlaceholder: "Cuéntanos sobre tu proyecto o consulta",
      submit: "Enviar mensaje",
      directContact: "Contacto directo",
      location: "Santiago, Chile",
    },
    en: {
      title: "Contact",
      subtitle: "Want to integrate AI into your organization? Let's talk",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      organizationPlaceholder: "Your organization",
      messagePlaceholder: "Tell us about your project or inquiry",
      submit: "Send message",
      directContact: "Direct contact",
      location: "Santiago, Chile",
    },
  };

  const c = content[lang];

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
              {c.title}
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              {c.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder={c.namePlaceholder}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-lg"
                      required
                      minLength={2}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={c.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-lg"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={c.organizationPlaceholder}
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organization: e.target.value,
                        })
                      }
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-lg"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder={c.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={6}
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-lg resize-none"
                      required
                      minLength={10}
                    />
                  </div>
                  <GradientButton
                    type="submit"
                    className="w-full"
                    size="lg"
                  >
                    {c.submit}
                    <Send className="w-5 h-5 ml-2" />
                  </GradientButton>
                </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:pl-8"
            >
              <h2 className="text-2xl font-bold text-navy mb-8">
                {c.directContact}
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-navy group-hover:text-cyan transition-colors">
                      Email
                    </div>
                    <div className="text-slate-500">{siteConfig.email}</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={siteConfig.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-navy group-hover:text-cyan transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-slate-500">@foresightcl</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-navy">
                      {lang === "es" ? "Ubicación" : "Location"}
                    </div>
                    <div className="text-slate-500">{c.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

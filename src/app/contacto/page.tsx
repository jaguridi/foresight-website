"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, MapPin } from "lucide-react";
import { GradientButton } from "@/components/ui";
import { siteConfig } from "@/data/content";

export default function ContactPage() {
  const lang = "es";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  const content = {
    es: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? Conversemos",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu email",
      organizationPlaceholder: "Tu organización",
      messagePlaceholder: "Cuéntanos sobre tu proyecto o consulta",
      submit: "Enviar mensaje",
      submitting: "Enviando...",
      submitted: "¡Mensaje enviado! Te contactaremos pronto.",
      directContact: "Contacto directo",
      location: "Santiago, Chile",
    },
    en: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's talk",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      organizationPlaceholder: "Your organization",
      messagePlaceholder: "Tell us about your project or inquiry",
      submit: "Send message",
      submitting: "Sending...",
      submitted: "Message sent! We'll contact you soon.",
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
              {isSubmitted ? (
                <div className="bg-cyan/10 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-navy font-medium">{c.submitted}</p>
                </div>
              ) : (
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
                    />
                  </div>
                  <GradientButton
                    type="submit"
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? c.submitting : c.submit}
                    <Send className="w-5 h-5 ml-2" />
                  </GradientButton>
                </form>
              )}
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

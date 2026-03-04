"use client";

import { SectionHeading, TeamCard, GradientButton } from "@/components/ui";
import { team } from "@/data/content";
import { ArrowRight } from "lucide-react";

interface TeamPreviewProps {
  lang?: "es" | "en";
}

export function TeamPreview({ lang = "es" }: TeamPreviewProps) {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={lang === "es" ? "Nuestro Equipo" : "Our Team"}
          subtitle={
            lang === "es"
              ? "Expertos en políticas públicas, tecnología y gobernanza"
              : "Experts in public policy, technology and governance"
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.slice(0, 3).map((member, index) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role[lang]}
              bio={member.bio[lang]}
              image={member.image}
              linkedin={member.linkedin}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <GradientButton href="/equipo" variant="outline">
            {lang === "es" ? "Conoce al equipo completo" : "Meet the full team"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </GradientButton>
        </div>
      </div>
    </section>
  );
}

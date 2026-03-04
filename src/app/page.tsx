"use client";

import {
  Hero,
  StatsBar,
  ServicesSection,
  FeaturedReports,
  ProjectsGrid,
  ClientsSection,
  TeamPreview,
  ContactCTA,
} from "@/components/sections";

export default function HomePage() {
  const lang = "es";

  return (
    <>
      <Hero lang={lang} />
      <StatsBar lang={lang} />
      <ServicesSection lang={lang} />
      <FeaturedReports lang={lang} />
      <ProjectsGrid lang={lang} />
      <ClientsSection lang={lang} />
      <TeamPreview lang={lang} />
      <ContactCTA lang={lang} />
    </>
  );
}

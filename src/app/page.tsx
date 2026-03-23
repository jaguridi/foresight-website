"use client";

import {
  Hero,
  ServicesSection,
  ProjectsShowcase,
  NewsHighlights,
  ClientsSection,
  TeamPreview,
  ContactCTA,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProjectsShowcase />
      <NewsHighlights />
      <ClientsSection />
      <TeamPreview />
      <ContactCTA />
    </>
  );
}

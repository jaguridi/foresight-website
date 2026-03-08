"use client";

import {
  Hero,
  ServicesSection,
  FeaturedReports,
  ProjectsGrid,
  ClientsSection,
  NewsHighlights,
  TeamPreview,
  ContactCTA,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <FeaturedReports />
      <NewsHighlights />
      <ProjectsGrid />
      <ClientsSection />
      <TeamPreview />
      <ContactCTA />
    </>
  );
}

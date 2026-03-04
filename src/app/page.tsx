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
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <FeaturedReports />
      <ProjectsGrid />
      <ClientsSection />
      <TeamPreview />
      <ContactCTA />
    </>
  );
}

import type { Metadata } from "next";
import { reports } from "@/data/content";
import ReportClient from "./ReportClient";

export function generateStaticParams() {
  return reports.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const report = reports.find((r) => r.slug === slug);
  if (!report) return {};
  return {
    title: `${report.title.es} | Foresight`,
    description: report.subtitle.es,
    openGraph: {
      title: `${report.title.es} | Foresight`,
      description: report.subtitle.es,
    },
  };
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ReportClient slug={slug} />;
}

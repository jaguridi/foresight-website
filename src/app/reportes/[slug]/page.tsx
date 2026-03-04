import { reports } from "@/data/content";
import ReportClient from "./ReportClient";

export function generateStaticParams() {
  return reports.map((r) => ({ slug: r.slug }));
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ReportClient slug={slug} />;
}

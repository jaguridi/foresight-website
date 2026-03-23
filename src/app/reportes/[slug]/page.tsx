import { reports } from "@/data/content";
import ReportRedirect from "./ReportRedirect";

export function generateStaticParams() {
  return reports.map((r) => ({ slug: r.slug }));
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ReportRedirect slug={slug} />;
}

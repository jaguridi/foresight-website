import { redirect } from "next/navigation";

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/proyectos/${slug}`);
}

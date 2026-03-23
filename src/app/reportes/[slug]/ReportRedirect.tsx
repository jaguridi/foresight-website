"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ReportRedirect({ slug }: { slug: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(`/proyectos/${slug}`);
  }, [router, slug]);
  return null;
}

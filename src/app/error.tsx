"use client";

import { useEffect } from "react";
import { GradientButton } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-navy mb-4">
          Algo salió mal
        </h1>
        <p className="text-slate-500 mb-8">
          Ha ocurrido un error inesperado.
        </p>
        <GradientButton onClick={() => reset()}>
          Intentar de nuevo
        </GradientButton>
      </div>
    </div>
  );
}

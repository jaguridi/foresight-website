"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { lang } = useLang();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-navy text-white shadow-lg hover:bg-navy-800 hover:shadow-xl transition-all flex items-center justify-center"
      aria-label={lang === "es" ? "Volver arriba" : "Back to top"}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  icon?: keyof typeof LucideIcons;
  variant?: "default" | "large" | "gradient";
  className?: string;
  delay?: number;
}

export function StatCard({
  value,
  label,
  icon,
  variant = "default",
  className,
  delay = 0,
}: StatCardProps) {
  const IconComponent = icon
    ? (LucideIcons[icon] as React.ComponentType<{ className?: string }>)
    : null;

  const variants = {
    default: "bg-white border border-slate-200 p-6",
    large: "bg-white border border-slate-200 p-8",
    gradient: "bg-gradient-brand text-white p-6",
  };

  const valueStyles = {
    default: "text-4xl md:text-5xl font-bold text-navy stat-glow",
    large: "text-5xl md:text-6xl lg:text-7xl font-bold text-navy stat-glow",
    gradient: "text-4xl md:text-5xl font-bold text-white",
  };

  const labelStyles = {
    default: "text-slate-500",
    large: "text-lg text-slate-500",
    gradient: "text-white/80",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "rounded-2xl text-center",
        variants[variant],
        className
      )}
    >
      {IconComponent && (
        <div className="flex justify-center mb-4">
          <IconComponent
            className={cn(
              "w-8 h-8",
              variant === "gradient" ? "text-white/80" : "text-cyan"
            )}
          />
        </div>
      )}
      <div className={valueStyles[variant]}>{value}</div>
      <div className={cn("mt-2 font-medium", labelStyles[variant])}>{label}</div>
    </motion.div>
  );
}

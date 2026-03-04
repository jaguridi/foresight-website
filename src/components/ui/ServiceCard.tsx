"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: keyof typeof LucideIcons;
  className?: string;
  delay?: number;
}

export function ServiceCard({
  title,
  description,
  icon,
  className,
  delay = 0,
}: ServiceCardProps) {
  const RawIcon = LucideIcons[icon];
  const IconComponent =
    RawIcon && typeof RawIcon === "function"
      ? (RawIcon as React.ComponentType<{ className?: string }>)
      : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group bg-white rounded-2xl p-8 border border-slate-200 card-hover",
        className
      )}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-navy mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}

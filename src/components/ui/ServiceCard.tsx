"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ServiceIcon } from "./ServiceIcon";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
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
      <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <ServiceIcon icon={icon} className="w-10 h-10" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-navy mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}

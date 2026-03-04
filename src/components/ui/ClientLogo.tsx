"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ClientLogoProps {
  name: string;
  logo?: string;
  className?: string;
  delay?: number;
}

export function ClientLogo({ name, logo, className, delay = 0 }: ClientLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "flex items-center justify-center p-6 rounded-xl bg-white border border-slate-200 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300",
        className
      )}
    >
      {logo ? (
        <Image
          src={logo}
          alt={name}
          width={120}
          height={48}
          className="h-12 w-auto object-contain"
        />
      ) : (
        <span className="text-lg font-semibold text-slate-400">{name}</span>
      )}
    </motion.div>
  );
}

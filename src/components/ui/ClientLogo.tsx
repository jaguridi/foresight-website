"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn, asset } from "@/lib/utils";

interface ClientLogoProps {
  name: string;
  logo?: string;
  url?: string;
  className?: string;
  delay?: number;
}

export function ClientLogo({ name, logo, url, className, delay = 0 }: ClientLogoProps) {
  const content = logo ? (
    <Image
      src={asset(logo)}
      alt={name}
      width={160}
      height={64}
      className="h-16 w-auto object-contain max-w-full"
    />
  ) : (
    <span className="text-lg font-semibold text-slate-400">{name}</span>
  );

  const Wrapper = url ? "a" : "div";
  const wrapperProps = url
    ? { href: url, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Wrapper
        {...wrapperProps}
        className={cn(
          "flex items-center justify-center p-6 rounded-xl bg-white border border-slate-200 hover:shadow-md transition-all duration-300 block",
          className
        )}
      >
        {content}
      </Wrapper>
    </motion.div>
  );
}

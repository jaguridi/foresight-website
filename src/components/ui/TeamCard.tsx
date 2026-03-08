"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { cn, asset } from "@/lib/utils";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  className?: string;
  delay?: number;
}

export function TeamCard({
  name,
  role,
  bio,
  image,
  linkedin,
  className,
  delay = 0,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group bg-white rounded-2xl p-6 border border-slate-200 card-hover text-center",
        className
      )}
    >
      {/* Photo */}
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-brand">
        {image ? (
          <Image
            src={asset(image)}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl font-bold text-white">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <h3 className="text-xl font-semibold text-navy mb-1">{name}</h3>
      <p className="text-cyan font-medium mb-3">{role}</p>
      <p className="text-slate-500 text-sm mb-4 line-clamp-3">{bio}</p>

      {/* LinkedIn */}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-cyan hover:text-white transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      )}
    </motion.div>
  );
}

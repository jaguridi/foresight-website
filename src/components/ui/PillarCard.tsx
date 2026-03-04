"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface PillarCardProps {
  title: string;
  content: string;
  icon: keyof typeof LucideIcons;
  className?: string;
  delay?: number;
  defaultOpen?: boolean;
}

export function PillarCard({
  title,
  content,
  icon,
  className,
  delay = 0,
  defaultOpen = false,
}: PillarCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const IconComponent = LucideIcons[icon] as React.ComponentType<{
    className?: string;
  }>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "bg-white rounded-2xl border border-slate-200 overflow-hidden",
        className
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center">
            {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
          </div>
          <h3 className="text-lg font-semibold text-navy">{title}</h3>
        </div>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-slate-400 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 pt-0">
              <div className="pl-16">
                <p className="text-slate-500">{content}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BarChartItem {
  name: string;
  percentage: number;
}

interface BarChartProps {
  data: BarChartItem[];
  className?: string;
}

export function BarChart({ data, className }: BarChartProps) {
  const maxPercentage = Math.max(...data.map((item) => item.percentage));

  return (
    <div className={cn("space-y-4", className)}>
      {data.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="space-y-2"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-navy">{item.name}</span>
            <span className="text-sm font-bold text-cyan">{item.percentage}%</span>
          </div>
          <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(item.percentage / maxPercentage) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
              className="h-full bg-gradient-brand rounded-full"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

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
  suffix?: string;
  valuePrefix?: string;
}

interface RangeBarChartItem {
  name: string;
  low: number;
  high: number;
}

interface RangeBarChartProps {
  data: RangeBarChartItem[];
  className?: string;
  suffix?: string;
  lowLabel?: string;
  highLabel?: string;
}

export function RangeBarChart({ data, className, suffix = "%", lowLabel = "Low", highLabel = "High" }: RangeBarChartProps) {
  const maxValue = Math.max(...data.map((item) => item.high));

  return (
    <div className={cn("space-y-5", className)}>
      {data.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="space-y-1.5"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-navy">{item.name}</span>
            <span className="text-sm font-bold text-cyan">{item.low}{suffix} – {item.high}{suffix}</span>
          </div>
          <div className="h-4 bg-slate-100 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(item.high / maxValue) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.08, ease: "easeOut" }}
              className="h-full bg-cyan/30 rounded-full absolute inset-0"
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(item.low / maxValue) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.08, ease: "easeOut" }}
              className="h-full bg-gradient-brand rounded-full relative z-10"
            />
          </div>
        </motion.div>
      ))}
      <div className="flex items-center gap-6 mt-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <div className="w-4 h-3 bg-gradient-brand rounded-sm" />
          <span>{lowLabel}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-3 bg-cyan/30 rounded-sm" />
          <span>{highLabel}</span>
        </div>
      </div>
    </div>
  );
}

export function BarChart({ data, className, suffix = "%", valuePrefix = "" }: BarChartProps) {
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
            <span className="text-sm font-bold text-cyan">{valuePrefix}{item.percentage.toLocaleString()}{suffix}</span>
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

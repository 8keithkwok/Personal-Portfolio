"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <AnimatedSection className={`text-center mb-12 sm:mb-16 ${className}`}>
      <motion.h1
        className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 mb-4"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center">
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full" />
      </div>
    </AnimatedSection>
  );
}

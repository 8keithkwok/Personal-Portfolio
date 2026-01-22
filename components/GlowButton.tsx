"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: GlowButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg overflow-hidden";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-purple-600 text-white hover:bg-purple-500 border border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]",
    secondary:
      "bg-zinc-800/80 text-zinc-100 hover:bg-zinc-700/80 border border-zinc-700 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    ghost:
      "bg-transparent text-zinc-300 hover:text-purple-400 hover:bg-purple-500/10 border border-transparent hover:border-purple-500/30",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const MotionComponent = motion.button;

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={combinedStyles}
        >
          {variant === "primary" && (
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          )}
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.a>
      );
    }

    return (
      <Link href={href} className="inline-block">
        <motion.span
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={combinedStyles}
        >
          {variant === "primary" && (
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          )}
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.span>
      </Link>
    );
  }

  return (
    <MotionComponent
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={combinedStyles}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </MotionComponent>
  );
}

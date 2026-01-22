"use client";

import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  showParticles?: boolean;
}

export default function PageWrapper({
  children,
  className = "",
}: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`flex-1 pt-16 sm:pt-20 ${className}`}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

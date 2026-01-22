"use client";

import { motion } from "framer-motion";
import { Sparkles, Clock } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "Football AI Assistant",
      description: "An intelligent AI assistant designed to help football enthusiasts with match analysis, player statistics, and team insights.",
      icon: Sparkles,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "香港油價 AI Assistant",
      description: "An AI-powered assistant for tracking and analyzing fuel prices in Hong Kong, providing real-time updates and price predictions.",
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <PageWrapper>
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Portfolio"
            subtitle="AI-powered solutions and innovative projects"
          />

          {/* Portfolio Grid */}
          <StaggerContainer className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12">
            {portfolioItems.map((item, index) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group"
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Coming Soon Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm"
                    >
                      <Clock size={14} className="text-purple-400" />
                      <span className="text-xs font-medium text-purple-300">Coming Soon</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <item.icon size={32} className="text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-zinc-100 mb-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 leading-relaxed mb-6 text-base sm:text-lg">
                      {item.description}
                    </p>

                    {/* Coming Soon Message */}
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                      <div className="flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                      </div>
                      <p className="text-sm text-zinc-300">
                        This project is currently under development. Stay tuned for updates!
                      </p>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Additional Info Section */}
          <AnimatedSection delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-zinc-400 text-base sm:text-lg">
                More projects and case studies coming soon.{" "}
                <a
                  href="/contact"
                  className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-4"
                >
                  Get in touch
                </a>{" "}
                to discuss potential collaborations.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageWrapper>
  );
}

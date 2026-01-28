"use client";

import { motion } from "framer-motion";
import { Sparkles, Clock, Route, ExternalLink, Github } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

type PortfolioItem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
  gradient: string;
  repoUrl?: string;
  liveUrl?: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    title: "香港隧道現時收費",
    description:
      "用香港時區顯示當前時間與星期；假日狀態來自 1823 公眾假期 API（失敗時用 repo 內靜態 holidays.json）。使用者選擇車種（私家車、的士、電單車、小巴、貨車、巴士等），選擇會存於 localStorage。根據「時間 + 星期 + 是否假日 + 車種」計算每條隧道現時收費：過海三隧（紅隧、東隧、西隧）分繁忙／一般／非繁忙；大欖隧道亦有分時段；其餘隧道多為劃一收費。介面列出各隧道卡片，每張顯示該隧道當前收費，適合手機使用。",
    icon: Route,
    gradient: "from-amber-500 to-orange-500",
    repoUrl: "https://github.com/8keithkwok/hk-tunnel-tolls",
    liveUrl: "https://8keithkwok.github.io/hk-tunnel-tolls/",
  },
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

export default function PortfolioPage() {

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

                  {/* Coming Soon Badge - only when no repo/live links */}
                  {!item.repoUrl && !item.liveUrl && (
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
                  )}

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

                    {/* Repo + Live links when available */}
                    {(item.repoUrl || item.liveUrl) ? (
                      <div className="flex flex-wrap gap-3">
                        {item.repoUrl && (
                          <a
                            href={item.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/50 text-zinc-200 hover:bg-zinc-700/80 hover:text-zinc-100 transition-colors"
                          >
                            <Github size={18} />
                            <span>GitHub</span>
                          </a>
                        )}
                        {item.liveUrl && (
                          <a
                            href={item.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/50 text-zinc-200 hover:bg-zinc-700/80 hover:text-zinc-100 transition-colors"
                          >
                            <ExternalLink size={18} />
                            <span>Live 示範</span>
                          </a>
                        )}
                      </div>
                    ) : (
                      /* Coming Soon Message */
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                        </div>
                        <p className="text-sm text-zinc-300">
                          This project is currently under development. Stay tuned for updates!
                        </p>
                      </div>
                    )}
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

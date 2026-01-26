"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Award, Languages, ArrowRight, Info } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import GlowButton from "@/components/GlowButton";
import { personalInfo, summary, stats, education, languages, certifications } from "@/lib/data";

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About Me"
            subtitle="Tech Lead based in Hong Kong"
          />

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Profile Card */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.1}>
                <div className="glass-card rounded-2xl p-6 sm:p-8 sticky top-24">
                  {/* Avatar */}
                  <div className="mb-6 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 p-1"
                    >
                      <div className="w-full h-full rounded-full bg-[#13131a] flex items-center justify-center">
                        <span className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold text-gradient">
                          KK
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Name & Title */}
                  <div className="text-center mb-6">
                    <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold text-zinc-100 mb-2">
                      {personalInfo.name}
                    </h2>
                    <p className="text-purple-400 font-medium">{personalInfo.title}</p>
                  </div>

                  {/* Info Items */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-zinc-400">
                      <MapPin size={18} className="text-purple-400" />
                      <span>Hong Kong 🇭🇰</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-400">
                      <Briefcase size={18} className="text-purple-400" />
                      <span>Tech Lead @ Pecutus Technologies</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-400">
                      <GraduationCap size={18} className="text-purple-400" />
                      <span>BSc in Data Science</span>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mt-6 pt-6 border-t border-zinc-800">
                    <div className="flex items-center gap-2 text-zinc-300 mb-3">
                      <Languages size={18} className="text-purple-400" />
                      <span className="font-medium">Languages</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {languages.map((lang) => (
                        <span
                          key={lang.name}
                          className="px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm"
                        >
                          {lang.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <GlowButton href="/contact" variant="primary" size="md" className="w-full">
                      Get In Touch
                    </GlowButton>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2 space-y-8 sm:space-y-12">
              {/* Summary */}
              <AnimatedSection delay={0.2}>
                <div className="glass-card rounded-2xl p-6 sm:p-8">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-zinc-100 mb-4">
                    Professional Summary
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                    {summary}
                  </p>
                </div>
              </AnimatedSection>

              {/* Stats Grid */}
              <StaggerContainer className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat) => (
                  <StaggerItem key={stat.label}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="glass-card rounded-xl p-5 sm:p-6 text-center group hover:border-purple-500/30 transition-all"
                    >
                      <div className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-2">
                        {stat.value}
                      </div>
                      <div className="text-zinc-400 text-sm sm:text-base">{stat.label}</div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Education */}
              <AnimatedSection delay={0.3}>
                <div className="glass-card rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap size={24} className="text-purple-400" />
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-zinc-100">
                      Education
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="relative pl-6 border-l-2 border-purple-500/30 hover:border-purple-500 transition-colors"
                      >
                        <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-purple-500" />
                        <h4 className="text-zinc-100 font-semibold mb-1">{edu.degree}</h4>
                        <p className="text-zinc-400 text-sm mb-1">{edu.school}</p>
                        <p className="text-zinc-500 text-sm">{edu.period}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Certifications Preview */}
              <AnimatedSection delay={0.4}>
                <div className="glass-card rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Award size={24} className="text-purple-400" />
                      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-zinc-100">
                        Certifications
                      </h3>
                    </div>
                    <GlowButton href="/certifications" variant="ghost" size="sm">
                      View All
                      <ArrowRight size={16} />
                    </GlowButton>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {certifications.slice(0, 3).map((cert) => (
                      <motion.div
                        key={cert.name}
                        whileHover={{ scale: 1.02 }}
                        className="group/cert flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-purple-500/30 transition-all"
                      >
                        <span className="text-purple-400 text-sm font-medium">{cert.year}</span>
                        <span className="text-zinc-300 text-sm">{cert.name}</span>
                        {cert.note && (
                          <span
                            className="group/note relative inline-flex text-zinc-500 hover:text-purple-400 cursor-help transition-colors shrink-0"
                            title={cert.note}
                          >
                            <Info size={14} aria-label="More information" />
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs max-w-xs whitespace-normal opacity-0 invisible group-hover/note:opacity-100 group-hover/note:visible transition-all duration-200 z-20 pointer-events-none shadow-xl">
                              {cert.note}
                            </span>
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* CTA */}
              <AnimatedSection delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <GlowButton href="/experience" variant="primary" size="lg" className="flex-1">
                    View My Experience
                    <ArrowRight size={20} />
                  </GlowButton>
                  <GlowButton href="/skills" variant="secondary" size="lg" className="flex-1">
                    Explore My Skills
                  </GlowButton>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

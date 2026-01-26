"use client";

import { motion } from "framer-motion";
import { Brain, Layout, Server, Settings, Target, ArrowRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import GlowButton from "@/components/GlowButton";
import { skills, SkillCategory } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Brain: Brain,
  Layout: Layout,
  Server: Server,
  Settings: Settings,
  Target: Target,
};

function SkillCategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  const Icon = iconMap[category.icon] || Brain;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-card rounded-2xl p-6 sm:p-8 hover:border-purple-500/30 transition-all group"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
          <Icon size={24} />
        </div>
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg sm:text-xl font-bold text-zinc-100">
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="space-y-5">
        {category.skills.map((skillGroup, groupIndex) => (
          <div key={groupIndex}>
            <div className="text-purple-400 text-sm font-medium mb-2">{skillGroup.name}</div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (groupIndex * 0.1) + (skillIndex * 0.03) }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm hover:border-purple-500/30 hover:text-purple-300 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsPage() {
  // Additional highlighted technologies
  const highlightedTech = [
    { name: "LangChain", description: "LLM Application Framework" },
    { name: "LangGraph", description: "Multi-Agent Orchestration" },
    { name: "AWS Lambda", description: "Serverless Computing" },
    { name: "Next.js", description: "React Framework" },
    { name: "TypeScript", description: "Type-Safe JavaScript" },
    { name: "DynamoDB", description: "NoSQL Database" },
  ];

  return (
    <PageWrapper>
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Technical Skills"
            subtitle="Technologies and tools I work with to build production-grade solutions"
          />

          {/* Highlighted Technologies */}
          <AnimatedSection className="mb-12 sm:mb-16">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-zinc-100 mb-6 text-center">
                Core Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {highlightedTech.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/50 hover:border-purple-500/30 transition-all text-center group"
                  >
                    <div className="text-zinc-100 font-medium text-sm mb-1 group-hover:text-purple-300 transition-colors">
                      {tech.name}
                    </div>
                    <div className="text-zinc-500 text-xs">{tech.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Skill Categories Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {skills.map((category, index) => (
              <SkillCategoryCard key={category.title} category={category} index={index} />
            ))}
          </div>

          {/* Programming Languages */}
          <AnimatedSection delay={0.3} className="mt-12 sm:mt-16">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-zinc-100 mb-6">
                Programming Languages
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { name: "TypeScript", level: 95 },
                  { name: "JavaScript", level: 95 },
                  { name: "Python", level: 80 },
                  { name: "SQL", level: 75 },
                ].map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-300 font-medium">{lang.name}</span>
                      <span className="text-purple-400">{lang.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Architecture Expertise */}
          <AnimatedSection delay={0.4} className="mt-12 sm:mt-16">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-zinc-100 mb-6">
                Architecture & Patterns
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Serverless Architecture",
                  "Microservices",
                  "Event-Driven Architecture",
                  "Multi-Agent Systems",
                  "RAG Architecture",
                  "Single-Table Design (DynamoDB)",
                  "RESTful API Design",
                  "GraphQL",
                  "CI/CD Pipelines",
                  "Containerization",
                ].map((pattern, index) => (
                  <motion.span
                    key={pattern}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium hover:bg-purple-500/20 transition-all cursor-default"
                  >
                    {pattern}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={0.5} className="mt-12 sm:mt-16">
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlowButton href="/experience" variant="primary" size="lg">
                  View My Experience
                  <ArrowRight size={20} />
                </GlowButton>
                <GlowButton href="/contact" variant="secondary" size="lg">
                  Get In Touch
                </GlowButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageWrapper>
  );
}

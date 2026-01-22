"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Building2, Calendar, ArrowRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import GlowButton from "@/components/GlowButton";
import { workExperience, Job } from "@/lib/data";

function ExperienceCard({ job, index }: { job: Job; index: number }) {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 to-purple-500/20" />

      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        className="absolute left-2 top-6 w-5 h-5 rounded-full bg-purple-500 border-4 border-[#0a0a0f] z-10"
      />

      {/* Card */}
      <div className="ml-12 sm:ml-16">
        <motion.div
          whileHover={{ y: -2 }}
          className="glass-card rounded-xl overflow-hidden hover:border-purple-500/30 transition-all"
        >
          {/* Header */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 text-zinc-500 text-sm mb-2">
                <Building2 size={14} />
                <span>{job.company}</span>
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg sm:text-xl font-bold text-zinc-100 mb-2">
                {job.title}
              </h3>
              <div className="flex items-center gap-2 text-purple-400 text-sm">
                <Calendar size={14} />
                <span>{job.period}</span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-zinc-400 mt-1"
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>

          {/* Expandable Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-zinc-800/50 pt-5">
                  {job.sections?.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-6 last:mb-0">
                      <h4 className="text-purple-400 font-medium text-sm mb-3 flex items-center gap-2">
                        <ChevronRight size={14} />
                        {section.title}
                      </h4>
                      <ul className="space-y-2.5">
                        {section.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.05 }}
                            className="text-zinc-400 text-sm leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-purple-500"
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {job.highlights && (
                    <ul className="space-y-2.5">
                      {job.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="text-zinc-400 text-sm leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-purple-500"
                        >
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Work Experience"
            subtitle="My professional journey in tech leadership and software development"
          />

          {/* Timeline */}
          <div className="space-y-8 sm:space-y-10">
            {workExperience.map((job, index) => (
              <ExperienceCard key={`${job.company}-${job.title}`} job={job} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <AnimatedSection delay={0.4} className="mt-16">
            <div className="glass-card rounded-2xl p-6 sm:p-8 text-center">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold text-zinc-100 mb-4">
                Interested in working together?
              </h3>
              <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlowButton href="/contact" variant="primary" size="lg">
                  Get In Touch
                  <ArrowRight size={20} />
                </GlowButton>
                <GlowButton href="/skills" variant="secondary" size="lg">
                  View My Skills
                </GlowButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageWrapper>
  );
}

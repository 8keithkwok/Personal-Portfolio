"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, ArrowRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import GlowButton from "@/components/GlowButton";
import { certifications } from "@/lib/data";

export default function CertificationsPage() {
  // Group certifications by year
  const groupedCerts = certifications.reduce((acc, cert) => {
    if (!acc[cert.year]) {
      acc[cert.year] = [];
    }
    acc[cert.year].push(cert);
    return acc;
  }, {} as Record<string, typeof certifications>);

  const years = Object.keys(groupedCerts).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <PageWrapper>
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Certifications"
            subtitle="Professional certifications and credentials"
          />

          {/* Stats */}
          <AnimatedSection className="mb-12">
            <div className="flex justify-center gap-8 sm:gap-16">
              <div className="text-center">
                <div className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  {certifications.length}
                </div>
                <div className="text-zinc-400 text-sm">Certifications</div>
              </div>
              <div className="text-center">
                <div className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  {years.length}
                </div>
                <div className="text-zinc-400 text-sm">Years of Learning</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications by Year */}
          <div className="space-y-8 sm:space-y-12">
            {years.map((year, yearIndex) => (
              <AnimatedSection key={year} delay={yearIndex * 0.1}>
                <div className="relative">
                  {/* Year Label */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                      <Calendar size={16} className="text-purple-400" />
                      <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-purple-400">
                        {year}
                      </span>
                    </div>
                    <div className="flex-1 h-px bg-zinc-800" />
                  </div>

                  {/* Certification Cards */}
                  <StaggerContainer className="grid sm:grid-cols-2 gap-4">
                    {groupedCerts[year].map((cert) => (
                      <StaggerItem key={cert.name}>
                        <motion.div
                          whileHover={{ y: -5, scale: 1.02 }}
                          className="glass-card rounded-xl p-5 sm:p-6 hover:border-purple-500/30 transition-all group h-full"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 transition-colors shrink-0">
                              <Award size={24} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-zinc-100 font-semibold text-sm sm:text-base mb-1 group-hover:text-purple-300 transition-colors">
                                {cert.name}
                              </h3>
                              {cert.issuer && (
                                <p className="text-zinc-500 text-sm">
                                  Issued by {cert.issuer}
                                </p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Continuous Learning Section */}
          <AnimatedSection delay={0.4} className="mt-16">
            <div className="glass-card rounded-2xl p-6 sm:p-8 text-center">
              <Award size={40} className="text-purple-400 mx-auto mb-4" />
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold text-zinc-100 mb-4">
                Committed to Continuous Learning
              </h3>
              <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
                I believe in staying current with the latest technologies and best practices.
                Always exploring new certifications and learning opportunities in AI, cloud computing, and software engineering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlowButton href="/skills" variant="primary" size="lg">
                  Explore My Skills
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

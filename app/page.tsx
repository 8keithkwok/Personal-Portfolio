"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import TypewriterText from "@/components/TypewriterText";
import GlowButton from "@/components/GlowButton";
import { FadeIn } from "@/components/AnimatedSection";
import { personalInfo } from "@/lib/data";

export default function Home() {
  const roles = [
    "Tech Lead",
    "AI Engineer",
    "Full Stack Developer",
    "LLM Specialist",
  ];

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Particle Background */}
        <ParticleBackground />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0f]" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={0.2}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-zinc-100">Hi, I'm </span>
              <span className="text-gradient">Keith Kwok</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="text-xl sm:text-2xl md:text-3xl text-zinc-300 mb-8 h-[40px] sm:h-[48px] flex items-center justify-center">
              <span className="mr-2">I'm a</span>
              <TypewriterText
                texts={roles}
                typingSpeed={80}
                deletingSpeed={40}
                delayBetween={2500}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Specializing in{" "}
              <span className="text-purple-400 font-medium">Agentic AI</span> and{" "}
              <span className="text-purple-400 font-medium">LLM Orchestration</span>.
              Building production-grade AI solutions with{" "}
              <span className="text-purple-400 font-medium">AWS Serverless Architecture</span>.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GlowButton href="/about" variant="primary" size="lg">
                Explore My Work
                <ArrowRight size={20} />
              </GlowButton>
              <GlowButton href="/contact" variant="secondary" size="lg">
                Get In Touch
              </GlowButton>
            </div>
          </FadeIn>

          <FadeIn delay={0.7}>
            <div className="mt-12 flex items-center justify-center gap-4">
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 hover:text-purple-400 hover:border-purple-500/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 hover:text-purple-400 hover:border-purple-500/30 transition-all"
                aria-label="Email"
              >
                <Mail size={22} />
              </motion.a>
            </div>
          </FadeIn>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-purple-400 transition-colors cursor-pointer"
            aria-label="Scroll down"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.button>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 sm:py-28 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-zinc-100 mb-4">
              Delivering Results
            </h2>
            <p className="text-zinc-400">Proven track record in tech leadership and AI development</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: "5+", label: "Years Experience", delay: 0 },
              { value: "12+", label: "Team Members Led", delay: 0.1 },
              { value: "10x", label: "Transaction Growth", delay: 0.2 },
              { value: "45%", label: "Cloud Cost Reduction", delay: 0.3 },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: stat.delay }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-xl p-6 sm:p-8 text-center group hover:border-purple-500/30 transition-all"
              >
                <div className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-zinc-400 text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 sm:py-28 bg-[#0d0d14]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-zinc-100 mb-4">
              Tech Stack
            </h2>
            <p className="text-zinc-400">Technologies I work with daily</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              "LangChain",
              "LangGraph",
              "OpenAI API",
              "Claude API",
              "React",
              "Next.js",
              "TypeScript",
              "AWS Lambda",
              "DynamoDB",
              "Docker",
              "Python",
              "Node.js",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm sm:text-base font-medium hover:border-purple-500/30 hover:text-purple-300 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <GlowButton href="/skills" variant="ghost" size="md">
              View All Skills
              <ArrowRight size={18} />
            </GlowButton>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-[#0a0a0f] relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-fuchsia-900/20" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 mb-6">
              Let's Build Something{" "}
              <span className="text-gradient">Amazing</span> Together
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're looking for a tech lead to drive your AI initiatives or a
              full-stack developer to build your next product, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GlowButton href="/contact" variant="primary" size="lg">
                Start a Conversation
                <ArrowRight size={20} />
              </GlowButton>
              <GlowButton href="/experience" variant="secondary" size="lg">
                View My Experience
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

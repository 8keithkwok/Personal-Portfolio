"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Copy,
  Check,
  Send,
  MessageSquare,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import GlowButton from "@/components/GlowButton";
import { personalInfo } from "@/lib/data";

export default function ContactPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      copyable: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      copyable: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: personalInfo.linkedinDisplay,
      href: personalInfo.linkedin,
      external: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hong Kong 🇭🇰",
    },
  ];

  return (
    <PageWrapper>
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Get In Touch"
            subtitle="I'd love to hear from you. Let's discuss how we can work together."
          />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Methods */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-zinc-100 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card rounded-xl p-4 sm:p-5 hover:border-purple-500/30 transition-all group"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                            <method.icon size={20} />
                          </div>
                          <div>
                            <div className="text-zinc-500 text-sm mb-1">{method.label}</div>
                            {method.href ? (
                              <a
                                href={method.href}
                                target={method.external ? "_blank" : undefined}
                                rel={method.external ? "noopener noreferrer" : undefined}
                                className="text-zinc-100 font-medium hover:text-purple-400 transition-colors"
                              >
                                {method.value}
                              </a>
                            ) : (
                              <span className="text-zinc-100 font-medium">{method.value}</span>
                            )}
                          </div>
                        </div>

                        {method.copyable && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => copyToClipboard(method.value, method.label)}
                            className="p-2 rounded-lg text-zinc-500 hover:text-purple-400 hover:bg-purple-500/10 transition-all"
                            aria-label={`Copy ${method.label}`}
                          >
                            {copiedField === method.label ? (
                              <Check size={18} className="text-green-500" />
                            ) : (
                              <Copy size={18} />
                            )}
                          </motion.button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Availability */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="glass-card rounded-xl p-5 sm:p-6 mt-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                    </span>
                    <span className="text-zinc-100 font-medium">Currently Available</span>
                  </div>
                  <p className="text-zinc-400 text-sm">
                    I'm open to new opportunities in tech leadership, AI development, and full-stack engineering roles.
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Contact Form (Display Only) */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare size={24} className="text-purple-400" />
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-zinc-100">
                    Send a Message
                  </h3>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-zinc-400 text-sm mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-zinc-400 text-sm mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-zinc-400 text-sm mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                      placeholder="Project Collaboration"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-zinc-400 text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <GlowButton
                    variant="primary"
                    size="lg"
                    className="w-full"
                    href={`mailto:${personalInfo.email}`}
                  >
                    Send via Email
                    <Send size={18} />
                  </GlowButton>

                  <p className="text-zinc-500 text-xs text-center">
                    This form will open your default email client
                  </p>
                </form>
              </div>
            </AnimatedSection>
          </div>

          {/* Quick Links */}
          <AnimatedSection delay={0.5} className="mt-16">
            <div className="text-center">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-zinc-100 mb-6">
                Or explore more about me
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <GlowButton href="/about" variant="secondary" size="md">
                  About Me
                </GlowButton>
                <GlowButton href="/experience" variant="secondary" size="md">
                  Experience
                </GlowButton>
                <GlowButton href="/skills" variant="secondary" size="md">
                  Skills
                </GlowButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageWrapper>
  );
}

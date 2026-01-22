"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, Heart, Github } from "lucide-react";
import { personalInfo, navLinks } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: personalInfo.github,
      label: "GitHub",
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: "Email",
    },
    {
      icon: Phone,
      href: `tel:${personalInfo.phone}`,
      label: "Phone",
    },
  ];

  return (
    <footer className="bg-[#0a0a0f] border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-gradient">
                Keith
              </span>
              <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-zinc-400 ml-1">
                .dev
              </span>
            </Link>
            <p className="text-zinc-500 text-sm max-w-xs">
              Tech Lead & AI Engineer specializing in Agentic AI and LLM Orchestration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-zinc-100 font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-zinc-500 hover:text-purple-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-zinc-100 font-semibold">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label === "LinkedIn" || social.label === "GitHub" ? "_blank" : undefined}
                  rel={social.label === "LinkedIn" || social.label === "GitHub" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 hover:text-purple-400 hover:border-purple-500/30 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-zinc-500 text-sm">{personalInfo.email}</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-zinc-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm flex items-center gap-1">
              © {currentYear} Keith Kwok. Built with
              <Heart size={14} className="text-purple-500 fill-purple-500" />
              using Next.js
            </p>
            <p className="text-zinc-600 text-xs">
              Hong Kong 🇭🇰
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

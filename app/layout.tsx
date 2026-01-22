import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keith Kwok | Tech Lead & AI Engineer",
  description:
    "Results-driven Tech Lead with 5+ years of full-stack development experience and 2 years specializing in Agentic AI and LLM Orchestration.",
  keywords: [
    "Tech Lead",
    "AI Engineer",
    "Full Stack Developer",
    "LangChain",
    "LangGraph",
    "AWS",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Kwok Sui Ki, Keith" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Keith Kwok | Tech Lead & AI Engineer",
    description:
      "Results-driven Tech Lead with 5+ years of full-stack development experience specializing in Agentic AI and LLM Orchestration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[#0a0a0f] text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}

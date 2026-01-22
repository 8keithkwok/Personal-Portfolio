import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Update this to match your GitHub repository name
  // basePath: "/personal-portfolio",
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;

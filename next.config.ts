import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },

  experimental: {
    optimizePackageImports: [],
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
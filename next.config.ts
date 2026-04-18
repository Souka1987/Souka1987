import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "gallica.bnf.fr" },
      { protocol: "https", hostname: "**.bnf.fr" },
    ],
  },
};

export default nextConfig;

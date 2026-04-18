/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "gallica.bnf.fr" },
      { protocol: "https", hostname: "**.bnf.fr" },
    ],
  },
};

export default nextConfig;

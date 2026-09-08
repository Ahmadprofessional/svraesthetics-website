import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "svraesthetics.co.uk",
      },
    ],
  },
};

export default nextConfig;

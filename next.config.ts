import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/Victor.dev" : "",
  assetPrefix: isProd ? "/Victor.dev/" : "",
};

export default nextConfig;

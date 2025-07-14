import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  eslint : {
    ignoreDuringBuilds : true,
  },
  images: {
    remotePatterns: [
      new URL("https://avatars.githubusercontent.com/u/**"),
      new URL("https://cdn.jsdelivr.net/gh/faker-js/**"),
      new URL("https://picsum.photos/seed/**"),
      new URL("https://loremflickr.com/**")
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/sass")],
  },
};

export default nextConfig;

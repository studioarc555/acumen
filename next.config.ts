import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CRITICAL FIX: Forces Next.js to output the server and dependency files
  // into the '.next/standalone' directory, which is required for the Docker runner stage.
  output: 'standalone',
  
  /* other config options here */
};

export default nextConfig;
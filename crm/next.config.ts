import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This app lives inside the alevare repo, which has its own lockfile —
  // pin the workspace root so Turbopack doesn't infer the parent directory.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;

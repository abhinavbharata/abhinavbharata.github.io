import type { NextConfig } from "next";

/**
 * Static export configuration for GitHub Pages.
 *
 * - `output: "export"` emits a static site to `out/`.
 * - `basePath` is injected via NEXT_PUBLIC_BASE_PATH so the same codebase runs
 *   locally (no basePath) and under <user>.github.io/<repo> on Pages.
 * - `trailingSlash` produces /path/index.html so Pages serves directory URLs.
 * - Images are unoptimized (Pages has no image optimizer).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

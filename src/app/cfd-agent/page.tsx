"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Short URL for cfd-agent. Client-side redirect to the canonical case-study
 * route. Static-safe (no server redirect), and respects `basePath`.
 */
export default function CfdAgentRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/projects/cfd-agent");
  }, [router]);
  return (
    <div className="py-24 text-center">
      <p className="font-mono text-sm text-muted">Redirecting to cfd-agent…</p>
    </div>
  );
}

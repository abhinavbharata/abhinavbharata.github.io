import { redirect } from "next/navigation";

/**
 * Short URL for cfd-agent. Permanently redirects to the canonical case-study
 * route so there is a single indexable URL (/projects/cfd-agent).
 */
export default function CfdAgentRedirect(): never {
  redirect("/projects/cfd-agent");
}

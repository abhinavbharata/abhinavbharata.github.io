/**
 * Centralized, typed access to environment variables.
 *
 * Public values (NEXT_PUBLIC_*) are safe to reference from client components.
 * Server-only values (RESEND_API_KEY, CONTACT_EMAIL) must never be imported
 * into client components.
 */

function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

const siteUrl =
  trimTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL ?? "") ||
  "http://localhost:3000";

export const env = {
  /** Canonical site origin, no trailing slash. */
  siteUrl,
  /** Public social / project URLs. Empty string when not configured. */
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
  cfdAgentRepository: process.env.NEXT_PUBLIC_CFD_AGENT_REPOSITORY ?? "",
  cfdAgentDemo: process.env.NEXT_PUBLIC_CFD_AGENT_DEMO ?? "",
  /** Server-only. */
  contactEmail: process.env.CONTACT_EMAIL ?? "bharata.abhinav@gmail.com",
  resendApiKey: process.env.RESEND_API_KEY ?? "",
  /** Verified Resend sending address (e.g. "Portfolio <mail@yourdomain.com>"). */
  resendFrom: process.env.RESEND_FROM ?? "",
} as const;

/** Whether the contact form server action can actually send email. */
export const hasContactTransport = Boolean(
  env.resendApiKey && env.resendFrom,
);

"use server";

import { env, hasContactTransport } from "@/lib/env";

/**
 * Contact form server action. Validates server-side, then either sends through
 * Resend (when RESEND_API_KEY + RESEND_FROM are configured) or returns a
 * mailto: fallback. Never exposes stack traces to the client.
 */

export type ContactReason =
  | "Employment opportunity"
  | "Data-center project"
  | "Mechanical or thermal engineering"
  | "CFD project"
  | "cfd-agent collaboration"
  | "Research collaboration"
  | "Technical discussion"
  | "Consulting"
  | "Other";

export type ContactState = {
  ok: boolean;
  mode: "sent" | "fallback" | "error";
  message: string;
  /** Prefilled mailto link used when server-side sending isn't configured. */
  mailto?: string;
  /** Validated values to repopulate the form on error. */
  values?: Partial<Record<FormField, string>>;
  /** Field-level validation errors. */
  fieldErrors?: Partial<Record<FormField, string>>;
};

type FormField =
  | "name"
  | "email"
  | "organization"
  | "role"
  | "subject"
  | "reason"
  | "message";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = {
  name: 120,
  email: 160,
  organization: 160,
  role: 160,
  subject: 200,
  message: 4000,
};

const REASONS: ContactReason[] = [
  "Employment opportunity",
  "Data-center project",
  "Mechanical or thermal engineering",
  "CFD project",
  "cfd-agent collaboration",
  "Research collaboration",
  "Technical discussion",
  "Consulting",
  "Other",
];

function str(formData: FormData, key: string): string {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
}

function validate(fields: Record<FormField, string>) {
  const fieldErrors: Partial<Record<FormField, string>> = {};

  if (fields.name.length < 2) fieldErrors.name = "Please enter your name.";
  if (!EMAIL_RE.test(fields.email)) fieldErrors.email = "Enter a valid email.";
  if (fields.message.length < 10)
    fieldErrors.message = "Message should be at least 10 characters.";
  if (fields.subject.length < 2) fieldErrors.subject = "Add a subject.";

  return fieldErrors;
}

function buildMailto(fields: Record<FormField, string>): string {
  const subject = fields.subject || fields.reason;
  const body = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    fields.organization ? `Organization: ${fields.organization}` : null,
    fields.role ? `Role: ${fields.role}` : null,
    `Reason: ${fields.reason}`,
    "",
    fields.message,
  ]
    .filter(Boolean)
    .join("\n");
  return `mailto:${env.contactEmail}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export async function submitContact(
  _prev: ContactState | null,
  formData: FormData,
): Promise<ContactState> {
  const fields: Record<FormField, string> = {
    name: str(formData, "name").slice(0, MAX.name),
    email: str(formData, "email").slice(0, MAX.email),
    organization: str(formData, "organization").slice(0, MAX.organization),
    role: str(formData, "role").slice(0, MAX.role),
    subject: str(formData, "subject").slice(0, MAX.subject),
    reason: str(formData, "reason"),
    message: str(formData, "message").slice(0, MAX.message),
  };

  // Honeypot: real users never fill the hidden "website" field.
  if (str(formData, "website")) {
    return {
      ok: true,
      mode: "sent",
      message: "Thanks — your message has been sent.",
    };
  }

  const reason: ContactReason = REASONS.includes(
    fields.reason as ContactReason,
  )
    ? (fields.reason as ContactReason)
    : "Other";

  const fieldErrors = validate(fields);
  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      mode: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors,
      values: { ...fields, reason },
    };
  }

  // No verified transport configured → hand back a prefilled mailto link.
  if (!hasContactTransport) {
    return {
      ok: true,
      mode: "fallback",
      message:
        "Server-side email isn't configured yet. Your email client will open with this message pre-filled.",
      mailto: buildMailto({ ...fields, reason }),
      values: { ...fields, reason },
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.resendFrom,
        to: env.contactEmail,
        reply_to: fields.email,
        subject: `[Portfolio] ${fields.subject} — ${reason}`,
        text: [
          `Name: ${fields.name}`,
          `Email: ${fields.email}`,
          fields.organization ? `Organization: ${fields.organization}` : null,
          fields.role ? `Role: ${fields.role}` : null,
          `Reason: ${reason}`,
          "",
          fields.message,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (!res.ok) {
      return {
        ok: false,
        mode: "fallback",
        message:
          "Email delivery is temporarily unavailable. Your email client will open with this message pre-filled instead.",
        mailto: buildMailto({ ...fields, reason }),
        values: { ...fields, reason },
      };
    }

    return {
      ok: true,
      mode: "sent",
      message:
        "Thanks — your message has been sent. I'll get back to you shortly.",
    };
  } catch {
    return {
      ok: false,
      mode: "fallback",
      message:
        "Email delivery failed. Your email client will open with this message pre-filled instead.",
      mailto: buildMailto({ ...fields, reason }),
      values: { ...fields, reason },
    };
  }
}

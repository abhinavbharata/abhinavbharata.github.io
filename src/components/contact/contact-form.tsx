"use client";

import * as React from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { cn } from "@/lib/cn";
import { profile } from "@/data/profile";

const REASONS = [
  "Employment opportunity",
  "Data-center project",
  "Mechanical or thermal engineering",
  "CFD project",
  "cfd-agent collaboration",
  "Research collaboration",
  "Technical discussion",
  "Consulting",
  "Other",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Fields = {
  name: string;
  email: string;
  organization: string;
  role: string;
  subject: string;
  reason: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  email: "",
  organization: "",
  role: "",
  subject: "",
  reason: REASONS[0],
  message: "",
};

function buildMailto(f: Fields): string {
  const subject = f.subject || f.reason;
  const body = [
    `Name: ${f.name}`,
    `Email: ${f.email}`,
    f.organization ? `Organization: ${f.organization}` : null,
    f.role ? `Role: ${f.role}` : null,
    `Reason: ${f.reason}`,
    "",
    f.message,
  ]
    .filter(Boolean)
    .join("\n");
  return `mailto:${profile.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
        {required && (
          <span className="ml-1 text-accent-2" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClasses =
  "w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-faint transition-colors focus:border-accent focus-visible:outline-2 focus-visible:outline-offset-2";

/**
 * Contact form. On a static host (GitHub Pages) the message is composed into a
 * prefilled mailto: link that opens the visitor's email client. No data is
 * transmitted through this site's server.
 *
 * To restore server-side email on Vercel, replace this with the server-action
 * version (see `src/app/contact/actions.ts`) and remove `output: "export"`.
 */
export function ContactForm() {
  const [fields, setFields] = React.useState<Fields>(EMPTY);
  const [errors, setErrors] = React.useState<Partial<Fields>>({});
  const [submitted, setSubmitted] = React.useState<{ mailto: string } | null>(
    null,
  );

  function update<K extends keyof Fields>(key: K, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Fields> = {};
    if (fields.name.trim().length < 2) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(fields.email.trim()))
      next.email = "Enter a valid email.";
    if (fields.subject.trim().length < 2) next.subject = "Add a subject.";
    if (fields.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted({ mailto: buildMailto({ ...fields }) });
  }

  if (submitted) {
    return (
      <div className="space-y-4">
        <Callout tone="success" title="Ready to send">
          <p>
            Your email client will open with this message pre-filled and
            addressed to {profile.email}. If it didn’t open automatically, use
            the button below.
          </p>
        </Callout>
        <div className="flex flex-wrap gap-3">
          <a
            href={submitted.mailto}
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-accent-contrast hover:bg-accent-hover"
          >
            <Mail className="h-4 w-4" />
            Open in email client
          </a>
          <Button
            variant="ghost"
            onClick={() => {
              setSubmitted(null);
              setFields(EMPTY);
            }}
          >
            Send another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* Honeypot (hidden, not for users) */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" required error={errors.name}>
          <input
            id="name"
            type="text"
            required
            autoComplete="name"
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(inputClasses, errors.name && "border-danger")}
          />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(inputClasses, errors.email && "border-danger")}
          />
        </Field>
        <Field id="organization" label="Organization">
          <input
            id="organization"
            type="text"
            autoComplete="organization"
            value={fields.organization}
            onChange={(e) => update("organization", e.target.value)}
            className={inputClasses}
          />
        </Field>
        <Field id="role" label="Role">
          <input
            id="role"
            type="text"
            value={fields.role}
            onChange={(e) => update("role", e.target.value)}
            className={inputClasses}
          />
        </Field>
      </div>

      <Field id="subject" label="Subject" required error={errors.subject}>
        <input
          id="subject"
          type="text"
          required
          value={fields.subject}
          onChange={(e) => update("subject", e.target.value)}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={cn(inputClasses, errors.subject && "border-danger")}
        />
      </Field>

      <Field id="reason" label="Reason for contact" required>
        <select
          id="reason"
          required
          value={fields.reason}
          onChange={(e) => update("reason", e.target.value)}
          className={cn(inputClasses, "pr-8")}
        >
          {REASONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Message" required error={errors.message}>
        <textarea
          id="message"
          required
          rows={6}
          value={fields.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(inputClasses, "resize-y", errors.message && "border-danger")}
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit">
          <Send className="h-4 w-4" />
          Compose message
        </Button>
        <p className="inline-flex items-center gap-1.5 text-xs text-faint">
          <CheckCircle2 className="h-3.5 w-3.5 text-success" />
          Opens in your email client · protected by a honeypot field
        </p>
      </div>
    </form>
  );
}

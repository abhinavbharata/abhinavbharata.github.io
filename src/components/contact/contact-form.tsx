"use client";

import * as React from "react";
import { useActionState } from "react";
import { CheckCircle2, Loader2, Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { cn } from "@/lib/cn";
import {
  submitContact,
  type ContactReason,
} from "@/app/contact/actions";

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
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 text-xs text-danger"
        >
          {error}
        </p>
      )}
    </div>
  );
}

const inputClasses =
  "w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-faint transition-colors focus:border-accent focus-visible:outline-2 focus-visible:outline-offset-2";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, null);

  const v = state?.values ?? {};
  const fe = state?.fieldErrors ?? {};

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Success / fallback banner */}
      {state && (
        <Callout tone={state.ok ? "success" : "warning"} title={state.ok ? "Sent" : "Heads up"}>
          <p>{state.message}</p>
          {state.mailto && (
            <a
              href={state.mailto}
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              <Mail className="h-4 w-4" />
              Open in your email client
            </a>
          )}
        </Callout>
      )}

      {/* Honeypot (visually hidden, not for users) */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" required error={fe.name}>
          <input
            id="name"
            name="name"
            type="text"
            required
            defaultValue={v.name}
            autoComplete="name"
            aria-invalid={Boolean(fe.name)}
            aria-describedby={fe.name ? "name-error" : undefined}
            className={cn(inputClasses, fe.name && "border-danger")}
          />
        </Field>
        <Field id="email" label="Email" required error={fe.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            defaultValue={v.email}
            autoComplete="email"
            aria-invalid={Boolean(fe.email)}
            aria-describedby={fe.email ? "email-error" : undefined}
            className={cn(inputClasses, fe.email && "border-danger")}
          />
        </Field>
        <Field id="organization" label="Organization" error={fe.organization}>
          <input
            id="organization"
            name="organization"
            type="text"
            defaultValue={v.organization}
            autoComplete="organization"
            className={inputClasses}
          />
        </Field>
        <Field id="role" label="Role" error={fe.role}>
          <input
            id="role"
            name="role"
            type="text"
            defaultValue={v.role}
            className={inputClasses}
          />
        </Field>
      </div>

      <Field id="subject" label="Subject" required error={fe.subject}>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          defaultValue={v.subject}
          className={cn(inputClasses, fe.subject && "border-danger")}
          aria-invalid={Boolean(fe.subject)}
          aria-describedby={fe.subject ? "subject-error" : undefined}
        />
      </Field>

      <Field id="reason" label="Reason for contact" required>
        <select
          id="reason"
          name="reason"
          required
          defaultValue={v.reason ?? REASONS[0]}
          className={cn(inputClasses, "pr-8")}
        >
          {REASONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Message" required error={fe.message}>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          defaultValue={v.message}
          aria-invalid={Boolean(fe.message)}
          aria-describedby={fe.message ? "message-error" : undefined}
          className={cn(inputClasses, "resize-y", fe.message && "border-danger")}
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={pending}>
          {pending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {pending ? "Sending…" : "Send message"}
        </Button>
        {state?.ok && (
          <span className="inline-flex items-center gap-1.5 text-sm text-success">
            <CheckCircle2 className="h-4 w-4" />
            Done
          </span>
        )}
        <p className="text-xs text-faint">
          Protected by a honeypot field. Never share confidential information.
        </p>
      </div>
    </form>
  );
}

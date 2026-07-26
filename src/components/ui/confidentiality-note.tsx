import { ShieldCheck } from "lucide-react";

import { cn } from "@/lib/cn";

/**
 * Reusable confidentiality notice. Used on projects and case studies that
 * generalize or omit details to protect client/employer information.
 */
export function ConfidentialityNote({
  note = "Certain project details and visuals are generalized or omitted to protect confidential client and employer information.",
  className,
}: {
  note?: string;
  className?: string;
}) {
  return (
    <div
      role="note"
      className={cn(
        "flex items-start gap-2.5 rounded-md border border-border bg-panel/50 p-3 text-xs leading-relaxed text-muted",
        className,
      )}
    >
      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
      <p>{note}</p>
    </div>
  );
}

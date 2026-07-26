"use client";

import { Printer } from "lucide-react";

import { cn } from "@/lib/cn";

/** Triggers the browser print dialog (for the digital résumé). */
export function PrintButton({
  className,
  label = "Print",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={cn(
        "inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border bg-surface px-4 text-sm font-medium text-foreground transition-colors hover:border-border-strong",
        className,
      )}
    >
      <Printer className="h-4 w-4" />
      {label}
    </button>
  );
}

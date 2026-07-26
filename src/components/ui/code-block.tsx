"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

import { cn } from "@/lib/cn";

/** Small client-side copy button used inside CodeBlock. */
function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = React.useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        } catch {
          /* clipboard may be unavailable */
        }
      }}
      aria-label={copied ? "Copied" : label}
      className="inline-flex items-center gap-1.5 rounded border border-border bg-panel px-2 py-1 font-mono text-[0.7rem] text-muted transition-colors hover:text-foreground"
    >
      {copied ? (
        <Check className="h-3 w-3 text-success" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
      {copied ? "Copied" : label}
    </button>
  );
}

/**
 * Monospaced code/contents block with an optional label and copy button.
 * Also used to render file trees and OpenFOAM dictionaries.
 */
export function CodeBlock({
  children,
  label,
  copyText,
  copyLabel = "Copy",
  showCopy = true,
  className,
  ariaLabel,
}: {
  children: React.ReactNode;
  label?: string;
  copyText?: string;
  copyLabel?: string;
  showCopy?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const text =
    copyText ??
    (typeof children === "string" ? children : undefined);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-panel",
        className,
      )}
    >
      {(label || (showCopy && text)) && (
        <div className="flex items-center justify-between gap-2 border-b border-border bg-surface/60 px-3 py-2">
          <span className="font-mono text-xs text-muted">{label}</span>
          {showCopy && text && (
            <CopyButton text={text} label={copyLabel} />
          )}
        </div>
      )}
      <pre
        className="overflow-x-auto p-4 font-mono text-[0.8rem] leading-relaxed text-foreground/90"
        aria-label={ariaLabel}
      >
        {children}
      </pre>
    </div>
  );
}

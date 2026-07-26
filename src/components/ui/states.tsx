import * as React from "react";

import { cn } from "@/lib/cn";
import { Inbox } from "lucide-react";

/** Empty state for collections (e.g. filtered project galleries). */
export function EmptyState({
  title = "Nothing here yet",
  description,
  children,
  className,
}: {
  title?: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-panel/40 px-6 py-14 text-center",
        className,
      )}
    >
      <Inbox className="h-7 w-7 text-faint" aria-hidden="true" />
      <p className="mt-3 font-heading text-base font-semibold text-foreground">
        {title}
      </p>
      {description && (
        <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted">
          {description}
        </p>
      )}
      {children && <div className="mt-5">{children}</div>}
    </div>
  );
}

/** Friendly, non-technical error state. Never surfaces stack traces. */
export function ErrorState({
  title = "Something went wrong",
  description = "An unexpected error occurred. Please try again.",
  children,
  className,
}: {
  title?: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border border-border bg-panel/40 px-6 py-14 text-center",
        className,
      )}
    >
      <p className="font-heading text-base font-semibold text-foreground">
        {title}
      </p>
      <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted">
        {description}
      </p>
      {children && <div className="mt-5">{children}</div>}
    </div>
  );
}

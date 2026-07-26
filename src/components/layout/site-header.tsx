"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";

import { mainNav } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { SocialLinks } from "@/components/layout/social-links";

function useScrollCompact(threshold = 24) {
  const [compact, setCompact] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return compact;
}

function useActiveItem(pathname: string) {
  return React.useMemo(() => {
    // Longest matching href wins so /projects/cfd-agent outranks /projects.
    let best: string | null = null;
    for (const item of mainNav) {
      if (item.href === "/") {
        if (pathname === "/") best = "/";
        continue;
      }
      if (
        pathname === item.href ||
        pathname.startsWith(item.href + "/")
      ) {
        if (best === null || item.href.length > best.length) {
          best = item.href;
        }
      }
    }
    return best;
  }, [pathname]);
}

export function SiteHeader() {
  const pathname = usePathname();
  const compact = useScrollCompact();
  const activeHref = useActiveItem(pathname);
  const [open, setOpen] = React.useState(false);

  // Close the mobile menu when the route changes. We adjust state during render
  // (the documented "store previous value" pattern) rather than in an effect,
  // which avoids cascading renders.
  const [prevPathname, setPrevPathname] = React.useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (open) setOpen(false);
  }

  // Lock background scroll + close on Escape while the mobile menu is open.
  React.useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/80 bg-background/85 backdrop-blur-md transition-all duration-200",
        compact ? "py-2" : "py-3",
      )}
    >
      <Container wide>
        <div className="flex items-center justify-between gap-4">
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-label="Abhinav Bharata — home"
          >
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface font-mono text-xs font-semibold tracking-tight text-accent"
            >
              AB
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-heading text-sm font-semibold text-foreground">
                Abhinav Bharata
              </span>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                Mech &amp; Thermal Eng
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-0.5 lg:flex"
          >
            {mainNav.map((item) => {
              const active = activeHref === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-px h-px bg-accent"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <div className="hidden md:block">
              <SocialLinks size="sm" includeEmail={false} />
            </div>
            <ThemeToggle />
            {profile.resumeAvailable && (
              <a
                href={profile.resumePath}
                download
                className="hidden items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover sm:inline-flex focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            )}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-muted transition-colors hover:text-foreground lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        {/* Overlay */}
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className={cn(
            "fixed inset-0 top-0 z-40 bg-background/70 backdrop-blur-sm transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        {/* Panel */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={cn(
            "fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm flex-col border-l border-border bg-panel shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <span className="font-heading text-sm font-semibold">
              Navigation
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4"
          >
            {mainNav.map((item) => {
              const active = activeHref === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-[0.95rem] transition-colors",
                    active
                      ? "bg-surface text-foreground"
                      : "text-muted hover:bg-surface hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto space-y-3 border-t border-border px-5 py-4">
            <SocialLinks includeEmail={false} />
            {profile.resumeAvailable && (
              <a
                href={profile.resumePath}
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent-hover"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

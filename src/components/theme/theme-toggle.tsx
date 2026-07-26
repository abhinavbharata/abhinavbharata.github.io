"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

/**
 * Accessible light/dark theme toggle. Renders an icon-only button with a
 * visually-hidden label and `aria-pressed` reflecting the active theme.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={!isDark}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={[
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border",
        "bg-surface text-muted transition-colors hover:text-foreground hover:border-border-strong",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        className,
      ].join(" ")}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

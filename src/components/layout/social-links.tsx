import { Mail } from "lucide-react";

import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand-icons";

type IconLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

/**
 * Conditionally renders social / contact icon links. Links that have no
 * configured URL are omitted rather than rendered as broken controls.
 */
export function SocialLinks({
  className,
  size = "md",
  includeEmail = true,
}: {
  className?: string;
  size?: "sm" | "md";
  includeEmail?: boolean;
}) {
  const links: IconLink[] = [];
  if (profile.githubUrl) {
    links.push({
      label: "GitHub profile",
      href: profile.githubUrl,
      icon: <GitHubIcon className="h-full w-full" />,
    });
  }
  if (profile.linkedinUrl) {
    links.push({
      label: "LinkedIn profile",
      href: profile.linkedinUrl,
      icon: <LinkedInIcon className="h-full w-full" />,
    });
  }
  if (includeEmail) {
    links.push({
      label: `Email ${profile.email}`,
      href: profile.emailHref,
      icon: <Mail className="h-full w-full" />,
    });
  }

  if (links.length === 0) return null;

  const dim = size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]";
  const box = size === "sm" ? "h-8 w-8" : "h-9 w-9";

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          aria-label={l.label}
          title={l.label}
          target={l.href.startsWith("http") ? "_blank" : undefined}
          rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={cn(
            "inline-flex items-center justify-center rounded-md border border-border bg-surface text-muted transition-colors hover:text-foreground hover:border-border-strong",
            box,
          )}
        >
          <span className={dim}>{l.icon}</span>
        </a>
      ))}
    </div>
  );
}

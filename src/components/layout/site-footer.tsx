import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import { footerNav } from "@/data/navigation";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/layout/social-links";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-panel/60">
      <Container wide className="py-12">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Identity */}
          <div className="md:col-span-5">
            <p className="font-heading text-base font-semibold text-foreground">
              {profile.name}
            </p>
            <p className="mt-1 text-sm text-muted">{profile.primaryTitle}</p>
            <p className="mt-1 font-mono text-xs text-faint">{profile.extendedTitle}</p>

            <ul className="mt-5 space-y-2 text-sm text-muted">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                <a
                  href={profile.emailHref}
                  className="hover:text-foreground"
                >
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>{profile.location}</span>
              </li>
            </ul>

            <SocialLinks className="mt-5" size="sm" includeEmail={false} />
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="md:col-span-4">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resume */}
          <div className="md:col-span-3">
            <p className="eyebrow">Resume</p>
            {profile.resumeAvailable ? (
              <a
                href={profile.resumePath}
                download
                className="mt-3 inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground transition-colors hover:border-border-strong"
              >
                Download PDF
              </a>
            ) : (
              <p className="mt-3 text-sm text-faint">Available on request.</p>
            )}
            <p className="mt-4 text-xs leading-relaxed text-faint">
              Certain project details are generalized or omitted to protect
              confidential client and employer information.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono">
            Designed around engineering clarity, performance, and precision.
          </p>
        </div>
      </Container>
    </footer>
  );
}

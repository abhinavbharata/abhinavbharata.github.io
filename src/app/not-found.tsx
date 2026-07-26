import Link from "next/link";
import { Home, FileQuestion } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <div className="mx-auto max-w-xl text-center">
        <span className="eyebrow inline-flex items-center gap-2">
          <FileQuestion className="h-3.5 w-3.5" aria-hidden="true" />
          404 · Resource not found
        </span>
        <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight">
          This page is off-spec.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The route you requested does not exist or may have moved. Return to
          the homepage or explore the engineering portfolio.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">
            <Home className="h-4 w-4" />
            Back to Home
          </Button>
          <Button href="/projects" variant="secondary">
            View Projects
          </Button>
        </div>
        <p className="mt-10 font-mono text-xs text-faint">
          <Link href="/contact" className="hover:text-muted">
            Report a broken link
          </Link>
        </p>
      </div>
    </Container>
  );
}

/**
 * Primary navigation. The header renders these links with active-page
 * indication based on the current pathname. The footer reuses the same set.
 *
 * `cfd-agent` points at the canonical project route; `/cfd-agent` 308-redirects
 * there to avoid duplicate SEO content (configured in Phase 5).
 */
export type NavItem = {
  label: string;
  href: string;
  /** When set, the link is "active" if the pathname starts with this prefix. */
  activeOn?: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/", activeOn: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "cfd-agent", href: "/projects/cfd-agent" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

/** Secondary links shown in the footer. */
export const footerNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "cfd-agent", href: "/projects/cfd-agent" },
  { label: "Skills", href: "/skills" },
  { label: "Research", href: "/research" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

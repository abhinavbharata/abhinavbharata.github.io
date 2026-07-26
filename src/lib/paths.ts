/**
 * Static-hosting path helpers.
 *
 * `NEXT_PUBLIC_BASE_PATH` is set only in the GitHub Pages build
 * (e.g. "/Myportfolio"). In local dev it is empty, so paths are unchanged.
 * `next/link` applies basePath automatically for route links; use `asset()`
 * for plain anchors that point at files under /public (e.g. the résumé PDF).
 */
export const basePath: string = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

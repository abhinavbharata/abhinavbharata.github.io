/**
 * No-FOUC theme init script.
 *
 * Pure string factory (no client-only code) so it can be rendered into <head>
 * from the server layout. Resolution order: stored preference -> system
 * preference -> dark.
 */
export const THEME_STORAGE_KEY = "ab-portfolio-theme";

export function themeInitScript(): string {
  return `(function(){try{var k="${THEME_STORAGE_KEY}";var s=localStorage.getItem(k);var m=window.matchMedia("(prefers-color-scheme: light)").matches;var t=s==="light"||s==="dark"?s:(m?"light":"dark");var d=document.documentElement;d.classList.toggle("dark",t==="dark");d.style.colorScheme=t;}catch(e){document.documentElement.classList.add("dark");}})();`;
}

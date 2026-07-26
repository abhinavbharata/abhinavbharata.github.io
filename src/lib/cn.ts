/**
 * Minimal className combiner. Accepts strings, falsy values, and arrays.
 * Avoids pulling in clsx / tailwind-merge as additional dependencies.
 */
export type ClassValue = string | false | null | undefined | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (Array.isArray(input)) {
      const inner = cn(...input);
      if (inner) out.push(inner);
    } else {
      out.push(input);
    }
  }
  return out.join(" ");
}

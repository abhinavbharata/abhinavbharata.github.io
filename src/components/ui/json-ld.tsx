import * as React from "react";

/**
 * Renders JSON-LD structured data inside a <script type="application/ld+json">.
 * Accepts a plain object (or array) and serializes it safely.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe inside a <script> element.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

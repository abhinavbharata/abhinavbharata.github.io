"use client";

import * as React from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before the reveal begins. */
  delay?: number;
  /** Vertical offset (px) to animate from. */
  y?: number;
  /** Render as a different element (e.g. "li", "section"). */
  as?: React.ElementType;
} & Omit<HTMLMotionProps<"div">, "ref">;

/**
 * Subtle scroll reveal. Honors `prefers-reduced-motion` by rendering content
 * immediately with no transform. Used pervasively instead of heavier motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 14,
  as: Tag = "div",
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;

  if (reduce) {
    const Component = Tag as React.ElementType;
    return (
      <Component className={className} {...(rest as object)}>
        {children}
      </Component>
    );
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

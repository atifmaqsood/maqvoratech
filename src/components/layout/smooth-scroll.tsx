"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";

function ScrollReset() {
  const lenis = useLenis();
  const pathname = usePathname();
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });
  }, [pathname, lenis]);
  return null;
}

/**
 * Root-level Lenis smooth scrolling. Rendered as a sibling (not a wrapper)
 * so toggling it never remounts the page tree; skipped under reduced motion.
 */
export function SmoothScroll() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <ReactLenis root options={{ lerp: 0.1, anchors: { offset: -96 } }}>
      <ScrollReset />
    </ReactLenis>
  );
}

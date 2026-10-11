"use client";

import { useEffect, useRef } from "react";

/**
 * Hero backdrop: drifting ember aurora blobs, a dot grid that fades at the
 * edges and (on fine pointers) a soft spotlight that follows the cursor.
 */
export function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = parent.getBoundingClientRect();
        el.style.setProperty("--sx", `${e.clientX - r.left}px`);
        el.style.setProperty("--sy", `${e.clientY - r.top}px`);
        el.style.setProperty("--so", "1");
      });
    };
    const onLeave = () => el.style.setProperty("--so", "0");
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [--so:0] [--sx:50%] [--sy:30%]"
    >
      {/* Aurora blobs */}
      <div className="absolute top-[-18%] left-[8%] size-[42rem] max-w-[90vw] animate-drift-a rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-3xl" />
      <div className="absolute top-[5%] right-[-6%] size-[36rem] max-w-[80vw] animate-drift-b rounded-full bg-[radial-gradient(closest-side,var(--glow-2),transparent)] blur-3xl" />
      <div className="absolute bottom-[-25%] left-[30%] size-[30rem] max-w-[70vw] animate-drift-c rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--cool)_14%,transparent),transparent)] blur-3xl" />

      {/* Dot grid, faded at the edges */}
      <div className="absolute inset-0 dot-grid mask-fade-edges" />

      {/* Cursor spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: "var(--so)",
          background:
            "radial-gradient(520px circle at var(--sx) var(--sy), color-mix(in oklab, var(--accent) 10%, transparent), transparent 60%)",
        }}
      />

      {/* Fade into the page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}

"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";

type SpotlightCardProps = React.ComponentProps<"div"> & {
  /** Classes for the inner surface (padding, layout). */
  innerClassName?: string;
  /** CSS color for the glow — defaults to the brand accent. */
  glow?: string;
};

/**
 * Card whose 1px border lights up where the mouse is. Pointer position is
 * written to CSS variables directly (no React re-renders).
 */
export function SpotlightCard({
  children,
  className,
  innerClassName,
  glow = "var(--accent)",
  style,
  ...props
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      style={{ "--glow-color": glow, ...style } as React.CSSProperties}
      className={cn(
        "group/spot relative rounded-3xl bg-border p-px shadow-card ring-offset-4 ring-offset-background [--x:50%] [--y:-20%] has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-accent",
        className,
      )}
      {...props}
    >
      {/* Border glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(380px circle at var(--x) var(--y), var(--glow-color), transparent 45%)",
        }}
      />
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-[calc(var(--radius-3xl)-1px)] bg-surface",
          innerClassName,
        )}
      >
        {/* Inner wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
          style={{
            background:
              "radial-gradient(520px circle at var(--x) var(--y), color-mix(in oklab, var(--glow-color) 9%, transparent), transparent 50%)",
          }}
        />
        {children}
      </div>
    </div>
  );
}

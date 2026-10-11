import { useId } from "react";

import { cn } from "@/lib/utils";

type LogoMarkProps = { className?: string; title?: string };

/** Geometric "M" monogram inside an ember-gradient rounded square. */
export function LogoMark({ className, title }: LogoMarkProps) {
  const id = useId();
  const gradientId = `mq-grad-${id}`;
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8 shrink-0", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style={{ stopColor: "var(--grad-from)" }} />
          <stop offset="1" style={{ stopColor: "var(--grad-to)" }} />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill={`url(#${gradientId})`} />
      <path
        d="M9 22.5V10l7 7.5 7-7.5v12.5"
        fill="none"
        style={{ stroke: "var(--accent-contrast)" }}
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type LogoProps = { className?: string; markClassName?: string; showWordmark?: boolean };

export function Logo({ className, markClassName, showWordmark = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      {showWordmark && (
        <span className="text-[1.05rem] leading-none font-semibold tracking-[-0.045em]">
          maqvora<span className="text-muted-foreground">tech</span>
        </span>
      )}
    </span>
  );
}

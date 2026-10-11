import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds for one full loop. */
  duration?: number;
  reverse?: boolean;
};

/**
 * Infinite CSS marquee: content is duplicated and translated -50%.
 * Pauses on hover/focus; the global reduced-motion rule stops it entirely.
 */
export function Marquee({ children, className, duration = 40, reverse }: MarqueeProps) {
  return (
    <div
      className={cn("group/marquee flex overflow-hidden mask-fade-x", className)}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      <div
        className={cn(
          "flex w-max shrink-0 animate-marquee group-focus-within/marquee:[animation-play-state:paused] group-hover/marquee:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]",
        )}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

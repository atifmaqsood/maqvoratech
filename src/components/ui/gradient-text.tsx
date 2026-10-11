import { Fragment } from "react";

import { cn } from "@/lib/utils";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
  /** Render in the italic Instrument Serif accent face. */
  serif?: boolean;
};

export function GradientText({ children, className, serif = true }: GradientTextProps) {
  return (
    <span
      className={cn(
        "text-gradient",
        serif && "pr-[0.08em] font-serif font-normal tracking-[-0.02em] italic",
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * Renders copy from the content files where `*word*` marks the
 * italic serif accent, e.g. "We build software that *moves* businesses".
 */
export function RichText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <GradientText key={i} className={className}>
            {part.slice(1, -1)}
          </GradientText>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/** Plain-text version of a `*marked*` string (for metadata, aria labels). */
export function plainText(text: string) {
  return text.replace(/\*/g, "");
}

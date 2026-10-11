import { Lock } from "lucide-react";

import { cn, displayDomain } from "@/lib/utils";

type BrowserFrameProps = {
  url: string;
  children: React.ReactNode;
  className?: string;
};

/** Minimal browser chrome: three dots + URL bar showing the domain. */
export function BrowserFrame({ url, children, className }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-surface-2 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)]",
        className,
      )}
    >
      <div className="flex h-9 items-center gap-3 border-b border-border px-3.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
        </div>
        <div className="mx-auto flex h-5.5 max-w-[60%] min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md bg-foreground/[0.05] px-3 font-mono text-[0.65rem] text-muted-foreground">
          <Lock className="size-2.5 shrink-0" aria-hidden />
          <span className="truncate">{displayDomain(url)}</span>
        </div>
        <span className="w-[42px]" aria-hidden />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">{children}</div>
    </div>
  );
}

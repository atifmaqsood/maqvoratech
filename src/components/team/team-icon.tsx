import { Atom, Braces, Compass, SquareTerminal, type LucideIcon } from "lucide-react";

import type { TeamIcon as TeamIconKey } from "@/data/team";
import { cn } from "@/lib/utils";

const icons: Record<TeamIconKey, LucideIcon> = {
  leadership: Compass,
  javascript: Atom,
  dotnet: Braces,
  python: SquareTerminal,
};

/** Rounded tile with the team's icon on a soft ember glow. */
export function TeamIcon({ name, className }: { name: TeamIconKey; className?: string }) {
  const Icon = icons[name];
  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-[0.9rem] border border-border-strong bg-surface-2 text-accent-text",
        className,
      )}
    >
      <span className="absolute inset-0 bg-[radial-gradient(80%_80%_at_30%_20%,var(--glow),transparent_70%)]" />
      <Icon className="relative size-[45%]" strokeWidth={1.75} />
    </span>
  );
}

import { cn } from "@/lib/utils";

export function TechTags({ tech, className }: { tech: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)} aria-label="Tech stack">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.68rem] text-muted-foreground"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

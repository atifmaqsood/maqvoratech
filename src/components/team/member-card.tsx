import Image from "next/image";
import { ArrowUpRight, UserRound } from "lucide-react";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import type { TeamMember } from "@/data/team";
import { cn, initials } from "@/lib/utils";

type MemberCardProps = { member: TeamMember; featured?: boolean };

export function MemberCard({ member: m, featured }: MemberCardProps) {
  const title = m.name ?? m.role;

  return (
    <SpotlightCard
      className="h-full"
      innerClassName={cn("flex h-full flex-col", featured && "md:grid md:grid-cols-12")}
    >
      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden bg-surface-2",
          featured && "md:col-span-5 md:aspect-auto md:min-h-[28rem]",
        )}
      >
        {m.photo ? (
          <Image
            src={m.photo}
            alt={`Portrait of ${title}`}
            fill
            sizes={
              featured
                ? "(min-width: 768px) 40vw, 100vw"
                : "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
            }
            className="object-cover object-[50%_12%] transition-transform duration-[1200ms] ease-out-expo group-hover/spot:scale-[1.03]"
          />
        ) : (
          <div aria-hidden className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_30%_0%,var(--glow),transparent_65%)]" />
            <div className="absolute inset-0 dot-grid opacity-60" />
            {m.name ? (
              <span className="relative text-gradient font-serif text-8xl italic">
                {initials(m.name)}
              </span>
            ) : (
              <UserRound className="relative size-16 text-foreground/25" strokeWidth={1.25} />
            )}
          </div>
        )}
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col gap-4 p-6",
          featured && "md:col-span-7 md:justify-center md:p-10",
        )}
      >
        <div>
          <h3
            className={cn(
              "font-semibold tracking-[-0.03em]",
              featured ? "text-3xl md:text-4xl" : "text-xl",
            )}
          >
            {title}
          </h3>
          <p className="mt-1.5 font-mono text-xs text-accent-text">
            {m.name ? m.role : "Profile coming soon"}
          </p>
        </div>
        {m.bio && (
          <p
            className={cn(
              "leading-relaxed text-muted-foreground",
              featured ? "text-lg" : "text-sm",
            )}
          >
            {m.bio}
          </p>
        )}
        {m.skills && (
          <ul className="flex flex-wrap gap-1.5" aria-label="Skills">
            {m.skills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.68rem] text-muted-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        )}
        {m.links && m.links.length > 0 && (
          <ul className="mt-auto flex gap-5 pt-2">
            {m.links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent-text"
                >
                  {l.label} <ArrowUpRight className="size-4" aria-hidden />
                  <span className="sr-only"> profile of {title} (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </SpotlightCard>
  );
}

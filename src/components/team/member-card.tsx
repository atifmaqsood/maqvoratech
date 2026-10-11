import { useId } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { TeamIcon } from "@/components/team/team-icon";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import type { Team, TeamMember } from "@/data/team";
import { cn } from "@/lib/utils";

function Skills({ skills }: { skills?: string[] }) {
  if (!skills?.length) return null;
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Skills">
      {skills.map((s) => (
        <li
          key={s}
          className="rounded-full border border-border bg-foreground/[0.03] px-2.5 py-1 font-mono text-[0.68rem] text-muted-foreground transition-colors group-hover/spot:border-border-strong group-hover/spot:text-foreground/80"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

/** On-brand avatar illustration shown until a real portrait is added. */
function AvatarIllustration({ team }: { team: Team }) {
  const fillId = `avatar-${useId()}`;
  return (
    <div aria-hidden className="absolute inset-0 bg-surface-2">
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,var(--glow),transparent_70%)]" />
      <div className="absolute inset-0 dot-grid opacity-50" />
      <svg
        viewBox="0 0 200 250"
        preserveAspectRatio="xMidYMax meet"
        className="absolute inset-x-0 bottom-0 h-[82%] w-full text-foreground transition-transform duration-[1200ms] ease-out-expo group-hover/spot:scale-[1.03]"
      >
        <defs>
          <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.22" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="92" r="40" fill={`url(#${fillId})`} />
        <path d="M22 250c0-62 35-102 78-102s78 40 78 102z" fill={`url(#${fillId})`} />
      </svg>
      <TeamIcon name={team.icon} className="absolute top-5 left-5 size-10" />
    </div>
  );
}

type CardProps = { member: TeamMember; team: Team; index: number; featured?: boolean };

/** Team member card with a portrait (real photo or avatar illustration). */
export function MemberCard({ member: m, team, featured }: CardProps) {
  const title = m.name ?? m.role;

  return (
    <SpotlightCard
      className="h-full w-full"
      innerClassName={cn("relative flex h-full flex-col", featured && "md:grid md:grid-cols-12")}
    >
      <span
        aria-hidden
        className="absolute inset-x-8 top-0 z-10 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
      />

      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden",
          featured && "md:col-span-5 md:aspect-auto md:min-h-[30rem]",
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
          <AvatarIllustration team={team} />
        )}
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent",
            featured && "md:bg-none",
          )}
        />
      </div>

      <div
        className={cn(
          "relative flex flex-1 flex-col gap-4 p-6 md:p-7",
          !featured && "-mt-16",
          featured && "md:col-span-7 md:justify-center md:gap-5 md:p-12",
        )}
      >
        <div>
          <p className="font-mono text-[0.7rem] tracking-[0.12em] text-accent-text uppercase">
            {m.name ? m.role : team.name}
          </p>
          <h3
            className={cn(
              "mt-2 font-semibold tracking-[-0.04em]",
              featured ? "text-4xl md:text-5xl" : "text-2xl",
            )}
          >
            {title}
          </h3>
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
        <Skills skills={m.skills} />
        {m.links && m.links.length > 0 && (
          <ul className="flex gap-2 pt-1">
            {m.links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border px-4 text-sm font-medium transition-colors hover:border-border-strong hover:text-accent-text"
                >
                  {l.label} <ArrowUpRight className="size-3.5" aria-hidden />
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

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

/** Hairline that lights up along the top edge on hover. */
function TopGlow() {
  return (
    <span
      aria-hidden
      className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
    />
  );
}

type CardProps = { member: TeamMember; team: Team; index: number; featured?: boolean };

/** Card for a role that doesn't have a named profile yet. */
function RoleCard({ member: m, team, index }: CardProps) {
  return (
    <SpotlightCard
      className="h-full w-full"
      innerClassName="relative flex h-full flex-col p-6 md:p-7"
    >
      <TopGlow />
      <span
        aria-hidden
        className="pointer-events-none absolute top-4 right-6 font-mono text-6xl font-semibold tracking-[-0.06em] text-foreground/[0.05] transition-colors duration-500 group-hover/spot:text-accent/15"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <TeamIcon
        name={team.icon}
        className="transition-transform duration-500 ease-out-expo group-hover/spot:-translate-y-0.5"
      />
      <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em]">{m.role}</h3>
      {m.bio && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>}
      <div className="mt-5">
        <Skills skills={m.skills} />
      </div>

      <div className="mt-auto pt-7">
        <div className="flex items-center justify-between gap-3 border-t border-border pt-5 font-mono text-[0.68rem] tracking-[0.12em] uppercase">
          <span className="flex items-center gap-2 text-muted-foreground">
            <span aria-hidden className="size-1.5 rounded-full bg-cool" />
            {team.name}
          </span>
          <span className="text-muted-foreground/80">Profile soon</span>
        </div>
      </div>
    </SpotlightCard>
  );
}

/** Card for a named person with a portrait. `featured` lays it out side-by-side. */
function PortraitCard({ member: m, featured }: CardProps) {
  const name = m.name ?? m.role;
  return (
    <SpotlightCard
      className="h-full w-full"
      innerClassName={cn("relative flex h-full flex-col", featured && "md:grid md:grid-cols-12")}
    >
      <TopGlow />
      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden",
          featured && "md:col-span-5 md:aspect-auto md:min-h-[30rem]",
        )}
      >
        {m.photo && (
          <Image
            src={m.photo}
            alt={`Portrait of ${name}`}
            fill
            sizes={
              featured
                ? "(min-width: 768px) 40vw, 100vw"
                : "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
            }
            className="object-cover object-[50%_12%] transition-transform duration-[1200ms] ease-out-expo group-hover/spot:scale-[1.03]"
          />
        )}
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent",
            featured &&
              "md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-surface/40",
          )}
        />
      </div>

      <div
        className={cn(
          "relative flex flex-1 flex-col gap-5 p-6 md:p-7",
          !featured && "-mt-20",
          featured && "md:col-span-7 md:justify-center md:p-12",
        )}
      >
        <div>
          <p className="font-mono text-xs tracking-[0.12em] text-accent-text uppercase">{m.role}</p>
          <h3
            className={cn(
              "mt-2 font-semibold tracking-[-0.04em]",
              featured ? "text-4xl md:text-5xl" : "text-2xl",
            )}
          >
            {name}
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
                  <span className="sr-only"> profile of {name} (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </SpotlightCard>
  );
}

export function MemberCard(props: CardProps) {
  return props.member.photo ? <PortraitCard {...props} /> : <RoleCard {...props} />;
}

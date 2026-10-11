import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHeader } from "@/components/sections/page-header";
import { JsonLd } from "@/components/seo/json-ld";
import { MemberCard } from "@/components/team/member-card";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { TechTags } from "@/components/work/tech-tags";
import { teamPage } from "@/data/pages";
import { teams } from "@/data/team";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Team",
  description: teamPage.description,
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Team", path: "/team" }])} />
      <PageHeader
        eyebrow={teamPage.eyebrow}
        title={teamPage.title}
        description={teamPage.description}
      >
        <nav aria-label="Jump to a team" className="mt-4 flex flex-wrap gap-2">
          {teams.map((t) => (
            <a
              key={t.slug}
              href={`#${t.slug}`}
              className="rounded-full border border-border bg-surface/50 px-3.5 py-1.5 text-sm text-muted-foreground backdrop-blur-md transition-colors hover:border-border-strong hover:text-foreground"
            >
              {t.name}
            </a>
          ))}
        </nav>
      </PageHeader>

      {teams.map((team, ti) => {
        const featured = ti === 0 && team.members.length === 1;
        return (
          <section
            key={team.slug}
            id={team.slug}
            aria-labelledby={`${team.slug}-title`}
            className="container-x scroll-mt-24 py-12 md:py-16"
          >
            <div className="flex flex-col justify-between gap-6 border-t border-border pt-10 md:flex-row md:items-end">
              <div className="flex max-w-2xl flex-col gap-4">
                <Eyebrow>{String(ti + 1).padStart(2, "0")}</Eyebrow>
                <h2 id={`${team.slug}-title`} className="display-md">
                  {team.name}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {team.description}
                </p>
              </div>
              <TechTags tech={team.stack} className="md:max-w-sm md:justify-end" />
            </div>

            <Stagger
              className={cn(
                "mt-10 grid gap-4",
                featured ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3",
              )}
            >
              {team.members.map((m) => (
                <StaggerItem key={m.name ?? m.role} className="flex">
                  <MemberCard member={m} featured={featured} />
                </StaggerItem>
              ))}
            </Stagger>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}

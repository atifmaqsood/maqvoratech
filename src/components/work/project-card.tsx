import { ArrowUpRight } from "lucide-react";

import { SocialIcon } from "@/components/brand/social-icons";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ProjectMedia } from "@/components/work/project-media";
import { TechTags } from "@/components/work/tech-tags";
import { Tilt } from "@/components/work/tilt";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = { project: Project; wide?: boolean; priority?: boolean };

export function ProjectCard({ project: p, wide, priority }: ProjectCardProps) {
  return (
    <Tilt className="h-full">
      <SpotlightCard
        glow={p.accent}
        className="h-full"
        innerClassName="group/card flex h-full flex-col p-3"
      >
        <article className="flex h-full flex-col">
          <BrowserFrame url={p.liveUrl} className="rounded-[1.1rem]">
            <div className="absolute inset-0 transition-transform duration-[1400ms] ease-out-expo group-hover/card:-translate-y-[2%] group-hover/card:scale-[1.04]">
              <ProjectMedia
                project={p}
                priority={priority}
                sizes={
                  wide
                    ? "(min-width: 1024px) 60vw, (min-width: 768px) 50vw, 100vw"
                    : "(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                }
              />
            </div>
          </BrowserFrame>

          <div className="flex flex-1 flex-col gap-4 px-3 pt-6 pb-4">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full border border-border bg-foreground/[0.03] px-2.5 py-1 text-xs text-foreground/80">
                {p.category}
              </span>
              <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
            </div>
            <div>
              <h3 className={cn("font-semibold tracking-[-0.03em]", wide ? "text-2xl" : "text-xl")}>
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
            <TechTags tech={p.tech} />

            <div className="mt-auto flex items-center justify-between pt-2">
              {/* Stretched link: the whole card is the click/focus target. */}
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium outline-none after:absolute after:inset-0 after:rounded-3xl after:content-['']"
              >
                Visit site
                <span className="relative inline-flex size-4 overflow-hidden">
                  <ArrowUpRight className="absolute size-4 transition-transform duration-500 ease-out-expo group-hover/card:translate-x-full group-hover/card:-translate-y-full" />
                  <ArrowUpRight className="absolute size-4 -translate-x-full translate-y-full text-accent-text transition-transform duration-500 ease-out-expo group-hover/card:translate-x-0 group-hover/card:translate-y-0" />
                </span>
                <span className="sr-only">: {p.title} (opens in a new tab)</span>
              </a>
              {p.githubUrl && (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} source code on GitHub`}
                  className="relative z-10 inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
                >
                  <SocialIcon name="github" />
                </a>
              )}
            </div>
          </div>
        </article>
      </SpotlightCard>
    </Tilt>
  );
}

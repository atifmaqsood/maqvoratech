import { ArrowUpRight } from "lucide-react";

import { BrowserFrame } from "@/components/ui/browser-frame";
import { CtaAnchor, CtaLink } from "@/components/ui/cta";
import { Parallax } from "@/components/ui/parallax";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectMedia } from "@/components/work/project-media";
import { TechTags } from "@/components/work/tech-tags";
import { home } from "@/data/home";
import { featuredProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function FeaturedWork() {
  const copy = home.work;
  if (featuredProjects.length === 0) return null;

  return (
    <section aria-labelledby="work-title" className="container-x overflow-x-clip py-24 md:py-32">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          id="work-title"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <CtaLink href={copy.cta.href} variant="secondary" className="shrink-0">
          {copy.cta.label} <ArrowUpRight />
        </CtaLink>
      </div>

      <ol className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-32">
        {featuredProjects.slice(0, 4).map((p, i) => (
          <li key={p.slug} className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
            <Reveal
              className={cn(
                "flex flex-col gap-5 md:col-span-5",
                i % 2 === 1 && "md:order-2 md:col-start-8",
              )}
            >
              <div className="flex items-center gap-3 font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase">
                <span className="text-accent-text">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px w-8 bg-border-strong" aria-hidden />
                {p.category} · {p.year}
              </div>
              <h3 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{p.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {p.description}
              </p>
              <TechTags tech={p.tech} />
              <CtaAnchor
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="mt-2 w-fit"
              >
                View live
                <ArrowUpRight className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                <span className="sr-only">: {p.title} (opens in a new tab)</span>
              </CtaAnchor>
            </Reveal>

            <Reveal className={cn("md:col-span-7", i % 2 === 1 && "md:order-1 md:col-start-1")}>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-8 -z-10 rounded-full opacity-60 blur-3xl"
                  style={{
                    background: `radial-gradient(closest-side, color-mix(in oklab, ${p.accent ?? "var(--accent)"} 30%, transparent), transparent)`,
                  }}
                />
                <Parallax offset={36}>
                  <BrowserFrame url={p.liveUrl}>
                    <ProjectMedia project={p} sizes="(min-width: 768px) 58vw, 100vw" />
                  </BrowserFrame>
                </Parallax>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
